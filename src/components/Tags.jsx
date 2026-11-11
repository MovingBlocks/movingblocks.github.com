/** @param {{ tags?: string[] }} props */
export default function Tags({ tags = [] }) {
  if (tags.length === 0) {
    // invisible dummy badge keeps the space for tags
    return <span className="badge text-bg-secondary me-2 invisible"> </span>;
  }
  return tags.map((tag) => (
    <span key={tag} className="badge text-bg-secondary me-2">
      {tag}
    </span>
  ));
}
