/** A post is live once its date has arrived; later-dated posts wait for a build on or after that date. */
export const isPublished = (date: Date, now: Date = new Date()): boolean =>
  date.getTime() <= now.getTime();
