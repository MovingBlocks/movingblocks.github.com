import React, { useState, useEffect } from "react";
import { Row, Col, Alert } from "reactstrap";
import moment from "moment-timezone";
import defaultprofile from "../../../static/logos/profile-placeholder.png";
import MentorModal from "../MentorModal/MentorModal";

function Mentor() {
  const [mentors, setmentors] = useState([]);
  const [visible, setVisible] = useState(false);
  const [status, setStatus] = useState("");
  const onDismiss = () => setVisible(false);

  const getmentor = async () => {
    const url =
      "https://api.trello.com/1/lists/5eb715b48caa18614425c25e/cards?fields=name,labels,cover,desc&customFields=true&customFieldItems=true&attachments=true&attachment_fields=all";

    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      setmentors(data);
    } else {
      setVisible(true);
      setStatus(response.status);
    }
  };

  useEffect(() => {
    getmentor();
  }, []);

  return (
    <Col lg="12">
      <div>
        <h1 className="text-center">Mentors</h1>
        <div className="container my-4">
          <div className="home-underline" />
        </div>
        <div className="container">
          <Alert
            className="my-2 alert-box"
            color="danger"
            isOpen={visible}
            toggle={onDismiss}
          >
            <span className="alert-box">
              {`Problem fetching mentor Information (Error Code: ${status})`}
            </span>
          </Alert>
        </div>
      </div>
      <Row className="justify-content-center">
        {mentors &&
          mentors.map((mentor) => {
            let mentorGitHubName = "";
            let mentorCountry = "";
            let mentorTimezone = "";
            for (let i = 0; i < 3; i++) {
              switch (mentor.customFieldItems[i].idCustomField) {
                case "5eb71b3551de3a59ce8d9bd8":
                  mentorGitHubName = mentor.customFieldItems[i].value.text;
                  break;
                case "5eb71b7081a67c3b58ea67ed":
                  mentorCountry = mentor.customFieldItems[i].value.text;
                  break;
                case "5eb71b53f52d88487f550e83":
                  mentorTimezone = mentor.customFieldItems[i].value.text;
                  break;
                default:
                  break;
              }
            }
            const flagURL = `https://flagcdn.com/w40/${mentorCountry.toLowerCase()}.png`;

            const timeZone = moment
              .tz(moment(), `${mentorTimezone}`)
              .format("HH:mm [(GMT] Z[)]");

            const getcountryName = new Intl.DisplayNames(["en"], {
              type: "region",
            });
            const countryName = getcountryName.of(`${mentorCountry}`);

            return (
              <Col className="ml-1 mr-1 mt-2 mb-2" lg="3" md="8" sm="12">
                <div className="card border border-0 row_shadow">
                  <div className="card-body">
                    <Row className="justify-content-center">
                      <Col lg="5" md="12" className="text-center">
                        {mentor.attachments.length !== 0 ? (
                          mentor.attachments.map((image) => (
                              <img
                                className="rounded-circle "
                                src={image.url}
                                height="80px"
                                width="80px"
                                alt={mentor.name}
                              />
                            ))
                        ) : (
                          <img
                            className="rounded-circle"
                            src={defaultprofile}
                            height="80px"
                            width="80px"
                            alt={mentor.name}
                          />
                        )}
                      </Col>
                      <Col lg="10" md="12" className="text-center pt-0">
                        <p className="font-weight-bold">{mentor.name}</p>

                        <div className="mt-2">
                          <img
                            src={flagURL}
                            alt="The flag of the mentor's home country"
                           />
                          <span className="ml-3 font-weight-bold h4">
                            {countryName}
                          </span>
                        </div>
                        <div className="mt-3">
                          <span className=" font-weight-bold h5">
                            {`Local Time: `}
                          </span>
                          {timeZone}
                        </div>
                        <div>
                          <MentorModal
                            name={mentor.name}
                            desc={mentor.desc}
                            tags={mentor.labels}
                            githubName={mentorGitHubName}
                            timeZone={timeZone}
                            country={countryName}
                          />
                        </div>
                      </Col>
                    </Row>
                  </div>
                </div>
              </Col>
            );
          })}
      </Row>
    </Col>
  );
}

export default Mentor;
