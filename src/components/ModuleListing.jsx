import { FaGithub } from "react-icons/fa";
import Tags from "./Tags";

function ModuleCard({ name, url, tags, description }) {
  return (
    <div className="col-lg-4 col-md-8 col-sm-12 pt-0 mt-2 mb-4">
      <div className="card row_shadow h-100">
        <img
          src="/logos/defaultCardcover.jpg"
          alt=""
          loading="lazy"
          className="card-img-top card-img-module"
        />
        <div className="card-body">
          <h6 className="card-subtitle">
            <Tags tags={tags} />
          </h6>
          <h5 className="card-title mt-3">{name}</h5>
          <p className="card-text">{description}</p>
        </div>
        <a
          href={url}
          className="mt-auto m-4 btn-primary text-center"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub /> View on GitHub
        </a>
      </div>
    </div>
  );
}

/** modules: entries of the `modules` collection (data only). */
export default function ModuleListing({ modules }) {
  return (
    <div className="col-lg-12 card-spacing">
      <div className="row justify-content-center">
        {modules.map((m) => (
          <ModuleCard
            key={m.name}
            name={m.name}
            url={m.url}
            tags={m.tags}
            description={m.moduleDescription || m.description}
          />
        ))}
      </div>
    </div>
  );
}
