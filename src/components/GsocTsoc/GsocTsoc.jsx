import React, { useState, useEffect } from "react";
import { Row, Alert } from "reactstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ProjectModal from "../ProjectModal/ProjectModal";
import defaultCardImg from "../../../static/logos/defaultCardcover.jpg";

const GsocTsoc = () => {
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
  const [availableProjectStatus, setAvailableProjectStatus] = useState("");
  const AvailabeProjectDismiss = () => setAvailableProjectVisible(false);

  const [ongoingProjectVisible, setOngoingProjectVisible] = useState(false);
  const [ongoingProjectStatus, setOngoingProjectStatus] = useState("");
  const ongoingProjectDismiss = () => setOngoingProjectVisible(false);

  const readyIdeas = async () => {
    const url =
      "https://api.trello.com/1/lists/5c3aab0bd640fe19e4069de5/cards?fields=name,labels,cover,desc&customFields=true&customFieldItems=true&attachments=true&attachment_fields=all";

    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      setReadyprojects(data);
    } else {
      setAvailableProjectVisible(true);
      setAvailableProjectStatus(response.status);
    }
  };

  const ongoingIdeas = async () => {
    const url =
      "https://api.trello.com/1/lists/60ddd7cf64da4b3ee8c5a2e9/cards?fields=name,labels,cover,desc&customFields=true&customFieldItems=true&attachments=true&attachment_fields=all";

    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      setOngoingprojects(data);
    } else {
      setOngoingProjectVisible(true);
      setOngoingProjectStatus(response.status);
    }
  };

  useEffect(() => {
    readyIdeas();
    ongoingIdeas();
  }, []);

  return (
    <div>
      <div>
        <h4 className="text-center">
          About Google summer of code & Terasology summer of code{" "}
        </h4>
        <div className="container my-4">
          <div className="home-underline"></div>

          <Row className="justify-content-center">
            <div className="col-md-10">
              <div className="text-center  gsoc_tsoc_content">
                <b>Google Summer of Code (GSoC)</b> is a global program focused
                on bringing more student developers into open source software
                development. Every year more than 1200 students are accepted.
                Accepted students work with a mentor and become a part of the
                open source community. Many become lifetime open source
                developers. Spend your summer break writing code and learning
                about open source development while earning a stipend. For more
                information visit{" "}
                <a
                  className="text-success font-weight-bold"
                  href="https://summerofcode.withgoogle.com/"
                >
                  here
                </a>
              </div>
              <div className="text-center mt-4 gsoc_tsoc_content">
                Terasology Summer of Code (TSoC) is similar as Google Summer of
                Code (GSoC).It is sponsored by Teraslogy with different Timeline
                then GSoC, do half of work, take a break for exams and other
                thing and then do second half work .Lower stipend then GSoC. for
                more information join our{" "}
                <a
                  className="text-success font-weight-bold"
                  href="https://discordapp.com/invite/Terasology"
                >
                  Discord
                </a>
              </div>
            </div>
          </Row>
        </div>
      </div>

      <div>
        <h4 className="text-center">Available Projects</h4>
        <div className="container my-4">
          <div className="home-underline"></div>
        </div>
      </div>
      <div className="container">
        <Alert
          className="my-2 alert-box"
          color="danger"
          isOpen={availableProjectVisible}
          toggle={AvailabeProjectDismiss}
        >
          <span className="alert-box">
            Problem fetching projects .(Error Code: {availableProjectStatus})
          </span>
        </Alert>
      </div>
      <Carousel
        responsive={responsive}
        removeArrowOnDeviceType={["tablet", "mobile"]}
        className="card_project"
      >
        {readyProjects.map((project) => {
          return (
            <div className="col h-100 ">
              <div className="card h-100 row_shadow">
                {project.cover.scaled != undefined ? (
                  <img
                    src={project.cover.scaled[4].url}
                    class="card-img-top"
                    alt={project.name}
                  />
                ) : (
                  <img
                    src={defaultCardImg}
                    class="card-img-top"
                    alt={project.name}
                  />
                )}
                <div className="card-body h-25 mt-2">
                  <p className="font-weight-bolder">{project.name}</p>
                </div>
                <div className="ml-3 mb-4">
                  <ProjectModal
                    name={project.name}
                    desc={project.desc}
                    tags={project.labels}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </Carousel>
      <div>
        <div>
          <h4 className="text-center">Ongoing Projects</h4>
          <div className="container my-4">
            <div className="home-underline"></div>
          </div>
        </div>
        <div className="container">
          <Alert
            className="my-2 alert-box"
            color="danger"
            isOpen={ongoingProjectVisible}
            toggle={ongoingProjectDismiss}
          >
            <span className="alert-box">
              Problem fetching projects .(Error Code: {ongoingProjectStatus})
            </span>
          </Alert>
        </div>

        <Carousel
          responsive={responsive}
          className="mt-4 card_project"
          removeArrowOnDeviceType={["tablet", "mobile"]}
        >
          {ongoingProjects.map((project) => {
            return (
              <div className="col  h-100 ">
                <div className="card h-100 row_shadow">
                  {project.cover.scaled != undefined ? (
                    <img
                      src={project.cover.scaled[4].url}
                      class="card-img-top"
                      alt={project.name}
                    />
                  ) : (
                    <img
                      src={defaultCardImg}
                      class="card-img-top"
                      alt={project.name}
                    />
                  )}

                  <div className="card-body  mt-2">
                    <p className="font-weight-bolder">{project.name}</p>
                  </div>

                  <div className="ml-3 mb-4">
                    <ProjectModal
                      name={project.name}
                      desc={project.desc}
                      tags={project.labels}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </Carousel>
      </div>
    </div>
  );
};
export default GsocTsoc;
