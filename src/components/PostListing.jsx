import Tags from "./Tags";
import { formatDate } from "../lib/format";

const DEFAULT_COVER = "/logos/defaultCardcover.jpg";

export function PostCard({ title, cover, tags, excerpt, path, author, date, type }) {
  // blog and project covers use different aspect ratios, see _cards.scss
  return (
    <div className="col-lg-4 col-md-8 col-sm-12 pt-0 mt-2 mb-4">
      <div className="card row_shadow h-100">
        <img
          src={cover || DEFAULT_COVER}
          alt=""
          loading="lazy"
          className={`card-img-top card-img-${type}`}
        />
        <div className="card-body">
          <h6 className="card-subtitle">
            <Tags tags={tags} />
          </h6>
          <h5 className="card-title mt-3">{title}</h5>
          <p className="card-text">{excerpt}</p>
          {author ? (
            <h6 className="card-subtitle text-muted">
              <b>By:</b> {author}
            </h6>
          ) : null}
          {date ? (
            <h6 className="card-subtitle text-muted">
              <b>Posted on:</b> {formatDate(date)}
            </h6>
          ) : null}
        </div>
        <a href={path} className="mt-auto m-4 btn-primary text-center">
          Read More
        </a>
      </div>
    </div>
  );
}

export default function PostListing({ postList }) {
  return (
    <div className="col-lg-12 card-spacing">
      <div className="row justify-content-center">
        {postList.map((post) => (
          <PostCard key={post.path} {...post} />
        ))}
      </div>
    </div>
  );
}
