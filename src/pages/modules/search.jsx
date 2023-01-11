import React, { useState, useEffect } from "react";
import { graphql, navigate } from "gatsby";
import { Button, Col, Row, Form, FormGroup, Label, Input } from "reactstrap";
import SEO from "../../components/SEO/SEO";
import Layout from "../../layout";
import ModuleListing from "../../components/modules/ModuleListing";
import withLocation from "../../components/common/withLocation";
import useJsSearch from "../../components/modules/useJsSearch";
import Select from "react-select";

// TODO: factor this out into it's own component in components/modules.
function SearchForm({ searchParams, allTags }) {
  const options = allTags.sort().map((t) => ({ value: t, label: t }));

  return (
    <Form role="search" method="GET">
      <Row form classNames="justify-content-center" id="search-form">
        <Col md="4">
          <FormGroup>
            <Select
              form
              isMulti
              name="tags"
              placeholder="Tags..."
              className="search-input"
              classNamePrefix="react-select"
              options={options}
              onChange={(e) => {
                searchParams.delete("tag");
                e.forEach((t) => searchParams.append("tag", t.value));
                navigate(`?${searchParams.toString()}`);
              }}
              defaultValue={searchParams
                .getAll("tag")
                .filter((x) => x)
                .map((t) => ({ value: t, label: t }))}
            />
          </FormGroup>
        </Col>
        <Col md="8">
          <FormGroup>
            <Input
              type="search"
              className="search-input"
              name="keywords"
              bsSize="lg"
              aria-controls="search-results-count"
              onChange={(e) => {
                if (e.target.value) {
                  searchParams.set("term", e.target.value);
                } else {
                  searchParams.delete("term");
                }
                navigate(`?${searchParams.toString()}`);
              }}
              placeholder="Search..."
              value={searchParams.get("term") || ""}
            />
          </FormGroup>
        </Col>
      </Row>
    </Form>
  );
}

export function Head({ data: { site } }) {
  return <SEO title={`Modules | ${site.metadata.title}`} />;
}

function Search({ data, pageContext, searchParams }) {
  const allModules = data.modules.nodes;

  const allTags = allModules.reduce((acc, m) => {
    m.moduleTxt.tags.forEach((t) => acc.add(t));
    return acc;
  }, new Set());

  // build search index for all modules
  const { search } = useJsSearch(allModules);

  const tags = searchParams.getAll("tag").filter((x) => x);
  const term = searchParams.get("term") || "";

  // filter based on searched term
  const searchResults = term ? search(term) : allModules;
  // filter based on tags

  const filteredModules = searchResults.filter((m) =>
    tags.every((t) => m.moduleTxt.tags.includes(t))
  );

  // "Load More" functionality based on https://www.erichowey.dev/writing/load-more-button-and-infinite-scroll-in-gatsby/
  const [modules, setModules] = useState(filteredModules.slice(0, 15));
  const [loadMore, setLoadMore] = useState(false);
  const [hasMore, setHasMore] = useState(allModules.length > 15);

  function handleLoadMore() {
    setLoadMore(true);
  }

  useEffect(() => {
    if (loadMore && hasMore) {
      const nextModules = allModules.slice(0, modules.length + 15);
      setModules(nextModules);
    }
    setLoadMore(false);
  }, [loadMore, hasMore]);

  useEffect(() => {
    setHasMore(modules.length < filteredModules.length);
  }, [modules]);

  return (
    <Layout title="Modules">
      <div className="module-container">
        <Row>
          <Col md="12">
            <SearchForm searchParams={searchParams} allTags={[...allTags]} />
          </Col>
        </Row>
        <Row className="justify-content-center">
          <ModuleListing defaultCover={data.defaultCover} modules={modules} />
        </Row>
        {hasMore ? (
          <Row className="justify-content-center">
            <Button onClick={handleLoadMore}>Load More</Button>
          </Row>
        ) : null}
      </div>
    </Layout>
  );
}

export const query = graphql`
  query AllModules {
    modules: allTerasologyModule(sort: { name: ASC }) {
      nodes {
        name
        description
        url
        moduleTxt {
          description
          tags
        }
      }
    }
    defaultCover: file(relativePath: { eq: "logos/defaultCardcover.jpg" }) {
      childImageSharp {
        gatsbyImageData
      }
    }
    site {
      metadata: siteMetadata {
        title
      }
    }
  }
`;

export default withLocation(Search);
