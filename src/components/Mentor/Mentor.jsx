import React, { useState, useEffect } from "react";
import { Row, Col, Alert } from "reactstrap";
import defaultprofile from "../../../static/logos/profile-placeholder.png";
import moment from "moment-timezone";
import MentorModal from "../MentorModal/MentorModal.jsx";

const Mentor = () => {
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
        <h1 className="text-center">Mentor's</h1>
        <div className="container my-4">
          <div className="home-underline"></div>
        </div>
        <div className="container">
          <Alert
            className="my-2 alert-box"
            color="danger"
            isOpen={visible}
            toggle={onDismiss}
          >
            <span className="alert-box">
              Problem fetching Mentor's Information .(Error Code: {status})
            </span>
          </Alert>
        </div>
      </div>
      <Row className="justify-content-center">
        {mentors &&
          mentors.map((mentor) => {
            let flagURL =
              "https://www.countryflags.io/" +
              `${mentor.customFieldItems[0].value.text}` +
              "/flat/64.png";

            let timeZone = moment
              .tz(moment(), `${mentor.customFieldItems[1].value.text}`)
              .format("HH:mm [(GMT] Z[)]");

            let getcountryName = new Intl.DisplayNames(["en"], {
              type: "region",
            });
            let countryName = getcountryName.of(
              `${mentor.customFieldItems[0].value.text}`
            );
            return (
              <Col className="ml-1 mr-1 mt-2 mb-2" lg="3" md="8" sm="12">
                <div class="card border border-0 row_shadow">
                  <div class="card-body">
                    <Row className="justify-content-center">
                      <Col lg="5" md="12" className="text-center">
                        {mentor.attachments.length != 0 ? (
                          mentor.attachments.map((image) => {
                            return (
                              <img
                                className="rounded-circle "
                                src={image.url}
                                height="80px"
                                width="80px"
                                alt={mentor.name}
                              />
                            );
                          })
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
                          <img src={flagURL} height="30px" width="30px"></img>
                          <span className="ml-3 font-weight-bold h4">
                            {countryName}
                          </span>
                        </div>
                        <div className="mt-3">
                          <span className=" font-weight-bold h5">
                            Local Time:
                          </span>{" "}
                          {timeZone}
                        </div>
                        <div>
                          <MentorModal
                            name={mentor.name}
                            desc={mentor.desc}
                            tags={mentor.labels}
                            customInfo={mentor.customFieldItems}
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
};

export default Mentor;
