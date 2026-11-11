import { useEffect, useState } from "react";
import { GiPlainSquare, GiSquare } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import { formatDate } from "../lib/format";
import { useLocationSearch } from "../lib/useLocationSearch";

const PREFIX = "/gallery";
const pageUrl = (n) => (n === 1 ? PREFIX : `${PREFIX}/${n}`);

/** Image grid for one gallery page plus a lightbox that pages across gallery pages (?index=N). */
export default function Gallery({ images, currentPage, lastPage, total, perPage }) {
  const lastCount = total - (lastPage - 1) * perPage;
  const search = useLocationSearch();
  // undefined until the user acts, then the open index or null (closed); until then ?index= decides
  const [chosen, setActive] = useState(undefined);
  const index = new URLSearchParams(search).get("index");
  const fromUrl = index === null ? null : Math.min(Number(index) || 0, images.length - 1);
  const active = chosen === undefined ? fromUrl : chosen;

  const show = (i) => {
    setActive(i);
    window.history.replaceState(null, "", i === null ? pageUrl(currentPage) : `?index=${i}`);
  };

  const next = () => {
    if (active < images.length - 1) show(active + 1);
    else
      window.location.href = `${pageUrl(currentPage === lastPage ? 1 : currentPage + 1)}?index=0`;
  };

  const prev = () => {
    if (active > 0) show(active - 1);
    else if (currentPage === 1)
      window.location.href = `${pageUrl(lastPage)}?index=${lastCount - 1}`;
    else window.location.href = `${pageUrl(currentPage - 1)}?index=${perPage - 1}`;
  };

  // Re-bound every render so the handlers always see the current image.
  useEffect(() => {
    if (active === null) return undefined;
    const onKey = (e) => {
      if (e.ctrlKey || e.metaKey || e.altKey) return;
      if (e.key === "ArrowRight" || e.key === "l") next();
      else if (e.key === "ArrowLeft" || e.key === "h") prev();
      else if (e.key === "Escape") show(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  });

  const current = active === null ? null : images[active];

  return (
    <>
      {current ? (
        <div className="media-modal" role="dialog" aria-modal="true" aria-label={current.name}>
          <div className="lightbox">
            <div className="col d-flex justify-content-end">
              <button
                type="button"
                className="btn btn-lg btn-primary rounded-circle media-button-cancel"
                aria-label="Close"
                onClick={() => show(null)}
              >
                <ImCross size="1.5em" />
              </button>
            </div>
            <div className="col d-flex justify-content-center">
              <div className="carousel slide">
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img
                      src={current.full}
                      alt={current.name.replaceAll("_", " ")}
                      id="lightbox-img"
                      className="m-4 img-fluid"
                      style={{ boxShadow: "0 0 30px rgba(0, 0, 0, 0.5)" }}
                    />
                    <div className="carousel-caption">
                      <h5>{current.name.replaceAll("_", " ")}</h5>
                      <p>{formatDate(current.date)}</p>
                    </div>
                  </div>
                </div>
                <button className="carousel-control-prev" type="button" onClick={prev}>
                  <span className="carousel-control-prev-icon" aria-hidden="true" />
                  <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" onClick={next}>
                  <span className="carousel-control-next-icon" aria-hidden="true" />
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
      <div className="col-lg-12 card-spacing">
        <div className="row justify-content-center">
          {images.map((image, index) => (
            <div key={image.name} className="col-lg-4 col-md-8 col-sm-12 pt-0 mt-2 mb-4">
              <button
                type="button"
                className="card row_shadow h-100 w-100 p-0 align-items-center"
                style={{ borderColor: "#08a045" }}
                onClick={() => show(index)}
              >
                <img
                  src={image.thumb}
                  alt={image.name.replaceAll("_", " ")}
                  loading="lazy"
                  className="h-100 w-100"
                  style={{ objectFit: "cover" }}
                />
              </button>
            </div>
          ))}
        </div>
      </div>
      <ul className="pagination d-flex page-section">
        {Array.from({ length: lastPage }, (_, i) => i + 1).map((n) => (
          <li key={n} className="page-item mt-3">
            <a className="page-link" href={pageUrl(n)} aria-label={`Gallery page ${n}`}>
              {n === currentPage ? (
                <GiPlainSquare className="pagination-icon" size="1.5em" />
              ) : (
                <GiSquare className="pagination-icon" size="1.5em" />
              )}
            </a>
          </li>
        ))}
      </ul>
    </>
  );
}
