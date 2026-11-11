import { useState, useSyncExternalStore } from "react";
import { FaDownload } from "react-icons/fa";

// Option value = release asset name; assets are matched by name, not position.
const BUILDS = [
  { asset: "TerasologyLauncher-windows64.zip", label: "Windows (64-bit)" },
  { asset: "TerasologyLauncher-windowsarm64.zip", label: "Windows (ARM64)" },
  { asset: "TerasologyLauncher-linux64.zip", label: "Linux (64-bit)" },
  { asset: "TerasologyLauncher-linuxarm64.zip", label: "Linux (ARM64)" },
  { asset: "TerasologyLauncher-mac64.zip", label: "macOS (Intel 64-bit)" },
  { asset: "TerasologyLauncher-macarm64.zip", label: "macOS (Apple Silicon)" },
];

const RELEASE_URL = "https://api.github.com/repos/MovingBlocks/TerasologyLauncher/releases/latest";

// navigator.platform can't tell ARM from x86, so detection defaults to 64-bit.
const detectAsset = (navPlatform = "") => {
  if (navPlatform.startsWith("Mac")) return "TerasologyLauncher-mac64.zip";
  if (navPlatform.startsWith("Linux")) return "TerasologyLauncher-linux64.zip";
  return "TerasologyLauncher-windows64.zip";
};

const noopSubscribe = () => () => {};

export default function Download() {
  // detected on the client only; the server snapshot keeps hydration markup identical
  const detected = useSyncExternalStore(
    noopSubscribe,
    () => detectAsset(window.navigator.platform),
    () => detectAsset(),
  );
  const [chosen, setPlatform] = useState(null);
  const platform = chosen ?? detected;
  const [error, setError] = useState("");

  const download = async () => {
    const response = await fetch(RELEASE_URL);
    if (!response.ok) {
      setError(response.status);
      return;
    }
    const data = await response.json();
    const asset = (data.assets || []).find((a) => a.name === platform);
    if (asset) window.location.href = asset.browser_download_url;
    else setError(`no asset named ${platform}`);
  };

  return (
    <div className="m-5">
      <div className="row justify-content-center">
        <div className="col-4 col-md-3 col-lg-2">
          <h5 className="my-3">
            <label htmlFor="platform-select">Platform:</label>
          </h5>
        </div>
        <div className="col-8 col-md-6 col-lg-7 download-dropdown">
          <select
            id="platform-select"
            className="form-select"
            style={{ height: "40px", fontSize: "15px" }}
            value={platform}
            onChange={(e) => setPlatform(e.target.value)}
          >
            {BUILDS.map((b) => (
              <option key={b.asset} value={b.asset}>
                {b.label}
              </option>
            ))}
          </select>
          {error ? (
            <div className="alert alert-danger alert-dismissible my-2 alert-box" role="alert">
              {`Problem fetching download link.(Error Code: ${error})`}
              <button
                type="button"
                className="btn-close"
                aria-label="Close"
                onClick={() => setError("")}
              />
            </div>
          ) : null}
        </div>
        <div className="col-md-9 col-lg-3">
          <div className="text-center fw-bold btn-primary download-btn">
            <button type="button" className="nav-link text-white w-100" onClick={download}>
              <FaDownload size="1em" className="download" />
              Download
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
