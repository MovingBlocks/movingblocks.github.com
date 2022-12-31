import React, { useState, useEffect } from "react";
import { Row, Alert, Badge } from "reactstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ProjectModal from "../ProjectModal/ProjectModal";
import defaultCardImg from "../../../static/logos/defaultCardcover.jpg";
import Section from "./../Section";

function GsocTsoc() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const [readyProjects, setReadyprojects] = useState([]);
  const [ongoingProjects, setOngoingprojects] = useState([]);

  const [availableProjectVisible, setAvailableProjectVisible] = useState(false);
  const [ongoingProjectVisible, setOngoingProjectVisible] = useState(false);

  const readyIdeas = async () => {
    const url =
      "https://api.trello.com/1/lists/5c3aab0bd640fe19e4069de5/cards?fields=name,labels,cover,desc&customFields=true&customFieldItems=true&attachments=true&attachment_fields=all";

    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      setReadyprojects(data);
      setAvailableProjectVisible(true);
    }
  };

  const ongoingIdeas = async () => {
    const url =
      "https://api.trello.com/1/lists/60ddd7cf64da4b3ee8c5a2e9/cards?fields=name,labels,cover,desc&customFields=true&customFieldItems=true&attachments=true&attachment_fields=all";

    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      setOngoingprojects(data);
      setOngoingProjectVisible(true);
    }
  };

  useEffect(() => {
    readyIdeas();
    ongoingIdeas();
  }, []);

  return (
    <>
      <Section
        tag="h3"
        title="About Google Summer of Code & Terasology Summer of Code"
      >
        <Row className="justify-content-center">
          <div className="col-md-10">
            <div className="text-center  gsoc_tsoc_content">
              <b>Google Summer of Code (GSoC) </b>
              is a global program focused on bringing more student developers
              into open source software development. Every year more than 1200
              students are accepted. Accepted students work with a mentor and
              become a part of the open source community. Many become lifetime
              open source developers. Spend your summer break writing code and
              learning about open source development while earning a stipend.
              For more information visit{" "}
              <a
                className="text-success font-weight-bold"
                href="https://summerofcode.withgoogle.com/"
              >
                Google Summer of Code
              </a>
              .
            </div>
            <div className="text-center mt-4 gsoc_tsoc_content">
              <b>Terasology Summer of Code (TSoC) </b>
              is similar as Google Summer of Code (GSoC). It is sponsored by
              Terasology with different timeline then GSoC, do half of work,
              take a break for exams and other thing and then do second half
              work. Lower stipend than GSoC. For more information join our{" "}
              <a
                className="text-success font-weight-bold"
                href="https://discordapp.com/invite/Terasology"
              >
                Discord
              </a>
              .
            </div>
          </div>
        </Row>
      </Section>
      {availableProjectVisible ? (
        <Section tag="h3" title="Available Projects">
          <Carousel
            responsive={responsive}
            removeArrowOnDeviceType={["tablet", "mobile"]}
            className="card_project"
          >
            {readyProjects.map((project) => (
              <div className="col h-100 ">
                <div className="card h-100 row_shadow">
                  {project.cover.scaled !== undefined ? (
                    <img
                      src={project.cover.scaled[4].url}
                      className="card-img-top"
                      alt={project.name}
                    />
                  ) : (
                    <img
                      src={defaultCardImg}
                      className="card-img-top"
                      alt={project.name}
                    />
                  )}
                  <div className="card-body h-25 mt-2">
                    <p className="font-weight-bolder">{project.name}</p>
                    <div className="d-flex">
                      <div className="md-tag tag_size">
                        {project &&
                          project.labels.map((tag) => (
                            <Badge className="m-1">{tag.name}</Badge>
                          ))}
                      </div>
                    </div>
                  </div>
                  <div className="ml-4 mb-4">
                    <ProjectModal
                      name={project.name}
                      desc={project.desc}
                      tags={project.labels}
                    />
                  </div>
                </div>
              </div>
            ))}
          </Carousel>
        </Section>
      ) : (
        ""
      )}
      {ongoingProjectVisible ? (
        <Section tag="h3" title="Ongoing Projects">
          <Carousel
            responsive={responsive}
            className="mt-4 card_project"
            removeArrowOnDeviceType={["tablet", "mobile"]}
          >
            {ongoingProjects.map((project) => (
              <div className="col  h-100 ">
                <div className="card h-100 row_shadow">
                  {project.cover.scaled !== undefined ? (
                    <img
                      src={project.cover.scaled[4].url}
                      className="card-img-top"
                      alt={project.name}
                    />
                  ) : (
                    <img
                      src={defaultCardImg}
                      className="card-img-top"
                      alt={project.name}
                    />
                  )}

                  <div className="card-body  mt-2">
                    <p className="font-weight-bolder">{project.name}</p>
                    <div className="d-flex">
                      <div className="md-tag tag_size">
                        {project &&
                          project.labels.map((tag) => (
                            <Badge className="m-1">{tag.name}</Badge>
                          ))}
                      </div>
                    </div>
                  </div>

                  <div className="ml-4 mb-4">
                    <ProjectModal
                      name={project.name}
                      desc={project.desc}
                      tags={project.labels}
                    />
                  </div>
                </div>
              </div>
            ))}
          </Carousel>
        </Section>
      ) : (
        ""
      )}
    </>
  );
}
export default GsocTsoc;
