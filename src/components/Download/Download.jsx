import React, { useState, useEffect, useMemo } from "react";
import { Table, NavLink, Input, Row, Col, Alert } from "reactstrap";
import { IconContext } from "react-icons";
import { FaDownload } from "react-icons/fa";
import Section from "../Section";

function Download() {
  const isBrowser = typeof window !== "undefined";
  let srcNavigator;
  let srcLoc;
  if (isBrowser) {
    srcNavigator = window.navigator.platform;
    srcLoc = window.location;
  }

  const [platform, setPlatform] = useState("");
  const [visible, setVisible] = useState(false);
  const [status, setStatus] = useState("");

  const onDismiss = () => setVisible(false);

  useEffect(() => {
    const availableOs = ["Win32", "Linux x86_64", "MacIntel"];
    const detectedOs = srcNavigator;
    if (availableOs.includes(detectedOs)) {
      setPlatform(detectedOs);
    } else {
      setPlatform("Win32");
    }
  }, [srcNavigator]);

  const download = async () => {
    const url =
      "https://api.github.com/repos/MovingBlocks/TerasologyLauncher/releases/latest";
    const response = await fetch(url);

    if (response.ok) {
      const data = await response.json();
      let downloadUrl;

      if (platform === "Win32") {
        downloadUrl = data.assets && data.assets[3].browser_download_url;
        srcLoc.href = downloadUrl;
      } else if (platform === "Linux x86_64") {
        downloadUrl = data.assets && data.assets[0].browser_download_url;
        srcLoc.href = downloadUrl;
      } else if (platform === "MacIntel") {
        downloadUrl = data.assets && data.assets[1].browser_download_url;
        srcLoc.href = downloadUrl;
      }
    } else {
      setVisible(true);
      setStatus(response.status);
    }
  };

  const downloadIconAttributes = useMemo(
    () => ({ size: "1em", className: "download" }),
    []
  );
  return (
    <div>
      <div className="m-5">
        <Row className="justify-content-center">
          <Col lg="2" md="3" sm="4" xs="4">
            <h5 className="my-3 ">Platform: </h5>
          </Col>
          <Col lg="7" md="6" sm="8" xs="8" className="download-dropdown">
            <Input
              type="select"
              name="select"
              id="exampleSelect"
              style={{ height: "40px", fontSize: "15px" }}
              onChange={(e) => {
                const selectedos = e.target.value;
                setPlatform(selectedos);
              }}
            >
              <option
                value="Win32"
                selected={srcNavigator === "Win32" ? "selected" : ""}
              >
                Windows (64-bit)
              </option>
              <option
                value="Linux x86_64"
                selected={srcNavigator === "Linux x86_64" ? "selected" : ""}
              >
                Linux (64-bit)
              </option>
              <option
                value="MacIntel"
                selected={srcNavigator === "MacIntel" ? "selected" : ""}
              >
                macOS
              </option>
            </Input>

            <Alert
              className="my-2 alert-box"
              color="danger"
              isOpen={visible}
              toggle={onDismiss}
            >
              <span className="alert-box">
                {`Problem fetching download link.(Error Code: ${status})`}
              </span>
            </Alert>
          </Col>
          <Col lg="3" md="9">
            <div className="text-center font-weight-bold btn-primary download-btn">
              <NavLink className="text-white" onClick={() => download()}>
                <IconContext.Provider value={downloadIconAttributes}>
                  <FaDownload />
                </IconContext.Provider>
                Download
              </NavLink>
            </div>
          </Col>
        </Row>
      </div>

      <Section title="Minimum System Requirements" className="justify-content-center">
        <Row className="justify-content-center">
          <Col md="3" className="mr-4 font-weight-bold" tag="p">System (OS)</Col>
          <Col md="3" className="ml-4" tag="p">Windows, MacOS, Linux (64 bit)</Col>
        </Row>
        <Row className="justify-content-center">
          <Col md="3" className="mr-4 font-weight-bold" tag="p">Processor (CPU)</Col>
          <Col md="3" className="ml-4" tag="p">dual-core CPU</Col>
        </Row>
        <Row className="justify-content-center">
          <Col md="3" className="mr-4 font-weight-bold" tag="p">Memory (RAM)</Col>
          <Col md="3" className="ml-4" tag="p">2 GB</Col>
        </Row>
        <Row className="justify-content-center">
          <Col md="3" className="mr-4 font-weight-bold" tag="p">Storage (HDD/SSD)</Col>
          <Col md="3" className="ml-4" tag="p">1 GB</Col>
        </Row>
        <Row className="justify-content-center">
          <Col md="3" className="mr-4 font-weight-bold" tag="p">Graphics (GPU)</Col>
          <Col md="3" className="ml-4" tag="p">Intel HD Graphics (Gen 7) or
            GeForce 8xxx series (or higher) or
            Radeon HD 2000 series (or higher) with OpenGL 3.3</Col>
        </Row>
      </Section>
    </div>
  );
}

export default Download;
