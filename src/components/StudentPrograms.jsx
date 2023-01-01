import React, { useState, useEffect } from "react";
import { Row } from "reactstrap";
import "react-multi-carousel/lib/styles.css";
import Section from "./Section";
import PostListing from "./PostListing/PostListing";

function StudentPrograms() {
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
      const availableProjectsList = data.map((project) => {
        const { cover: projectCover, name, labels, desc } = project;
        const tags = labels.map((label) => label.name);
        const posttype = "project";
        return { posttype, title: name, cover: projectCover, tags, excerpt: desc };
      });
      setReadyprojects(availableProjectsList);
      setAvailableProjectVisible(true);
    }
  };

  const ongoingIdeas = async () => {
    const url =
      "https://api.trello.com/1/lists/60ddd7cf64da4b3ee8c5a2e9/cards?fields=name,labels,cover,desc&customFields=true&customFieldItems=true&attachments=true&attachment_fields=all";

    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      const ongoingProjectsList = data.map((project) => {
        const { cover: projectCover, name, labels, desc } = project;
        const tags = labels.map((label) => label.name);
        const posttype = "project";
        return { posttype, title: name, cover: projectCover, tags, excerpt: desc };
      });
      setOngoingprojects(ongoingProjectsList);
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
        title="GSoC & TSoC"
      >
        <Row className="justify-content-center">
          <div className="col-md-10">
            <div className="text-center  student-programs-content">
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
            <div className="text-center mt-4 student-programs-content">
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
          <PostListing postList={readyProjects} />
        </Section>
      ) : (
        ""
      )}
      {ongoingProjectVisible ? (
        <Section tag="h3" title="Ongoing Projects">
          <PostListing postList={ongoingProjects} />
        </Section>
      ) : (
        ""
      )}
    </>
  );
}
export default StudentPrograms;
