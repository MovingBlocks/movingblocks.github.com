import React, { useState, useEffect, useMemo } from "react";
import { Table, NavLink, Input, Row, Col, Alert } from "reactstrap";
import { IconContext } from "react-icons";
import { FaDownload } from "react-icons/fa";

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

  const downloadIconAttributes = useMemo(() => ({ size: "1em", className: "download" }), [])
  return (
    <div>
      <h2 className="text-center my-4">Download Terasology Launcher</h2>
      <div className="download-underline" />
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
                <IconContext.Provider
                  value={downloadIconAttributes}
                >
                  <FaDownload />
                </IconContext.Provider>
                Download
              </NavLink>
            </div>
          </Col>
        </Row>
      </div>

      <div className="download-underline" />
      <div className="my-5 ">
        <h2 className=" m-3 download-system-requirement">
          System Requirements
        </h2>
        <div className="my-5">
          <Table className="download-table my-4" borderless>
            <thead>
              <tr>
                <th />
                <th>Minimum Requirements</th>
                <th>Recommended Requirements</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">System (OS)</th>
                <td>Windows, MacOS, Linux (64 bit)</td>
                <td />
              </tr>
              <tr>
                <th scope="row">Processor (CPU)</th>
                <td>dual-core CPU</td>
                <td>quad-core CPU</td>
              </tr>
              <tr>
                <th scope="row">Memory (RAM)</th>

                <td>2 GB</td>
                <td>8 GB</td>
              </tr>

              <tr>
                <th scope="row">Graphics (GPU)</th>
                <td>
                  Intel HD Graphics (Gen 5)
                  <br />
                  GeForce 6xxx series or
                  <br />
                  Radeon HD 2000 series
                  <br />
                  with OpenGL 2.1*
                </td>
                <td>
                  GeForce 8xxx series (or higher) or
                  <br />
                  Radeon HD 2000 series (or higher)
                  <br />
                  with OpenGL 3.x
                </td>
              </tr>
              <tr>
                <th scope="row">Storage (HDD)</th>
                <td>1 GB</td>
                <td />
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
}

export default Download;
