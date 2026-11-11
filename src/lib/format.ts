const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

/** "MMMM DD, YYYY" in UTC, matching the Gatsby site's moment format. */
export function formatDate(value: Date | string | undefined): string {
  if (!value) return "";
  const d = new Date(value);
  if (Number.isNaN(d.getTime())) return "";
  const day = String(d.getUTCDate()).padStart(2, "0");
  return `${MONTHS[d.getUTCMonth()]} ${day}, ${d.getUTCFullYear()}`;
}

/** Plain-text excerpt of markdown/HTML, like gatsby-transformer-remark's. */
export function excerpt(source = "", length = 120): string {
  const text = source
    .replace(/<[^>]*>/g, " ")
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/!\[[^\]]*\]\([^)]*\)/g, " ")
    .replace(/\[([^\]]*)\]\([^)]*\)/g, "$1")
    .replace(/\[([^\]]*)\]\[[^\]]*\]/g, "$1")
    .replace(/^\s*\[[^\]]+\]:.*$/gm, " ")
    .replace(/[#>*_`~|]/g, "")
    .replace(/&nbsp;/g, " ")
    .replace(/\s+/g, " ")
    .trim();
  if (text.length <= length) return text;
  const cut = text.slice(0, length);
  const space = cut.lastIndexOf(" ");
  return `${space > 0 ? cut.slice(0, space) : cut}…`;
}
