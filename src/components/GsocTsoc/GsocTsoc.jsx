import React, { useState, useEffect } from "react";
import { Table, NavLink, Input, Row, Col, Alert } from "reactstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ProjectModal from "../ProjectModal/ProjectModal";
import defaultcardimg from "../../../static/logos/defaultCardcover.jpg";

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

  const readyIdeas = async () => {
    const url =
      "https://api.trello.com/1/lists/5c3aab0bd640fe19e4069de5/cards?fields=name,labels,cover,desc&customFields=true&customFieldItems=true&attachments=true&attachment_fields=all";

    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      setReadyprojects(data);
      console.log(data);
    } else {
      console.log("not found");
    }
  };

  const ongoingIdeas = async () => {
    const url =
      "https://api.trello.com/1/lists/60ddd7cf64da4b3ee8c5a2e9/cards?fields=name,labels,cover,desc&customFields=true&customFieldItems=true&attachments=true&attachment_fields=all";

    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      setOngoingprojects(data);
      console.log(data);
    } else {
      console.log("not found");
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
                Google Summer of Code (GSoC) is a global program focused on
                bringing more student developers into open source software
                development.Every year more than 1200 students are
                accepted.Accepted students work with a mentor and become a part
                of the open source community. Many become lifetime open source
                developers.Spend your summer break writing code and learning
                about open source development while earning a stipend. for more
                you can visit{" "}
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
                    src={defaultcardimg}
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
                      src={defaultcardimg}
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
