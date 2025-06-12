export function formatDate(dateString, locale = "en-US", includeTime = false) {
  if (!dateString) return "N/A";

  const date = new Date(dateString);
  if (isNaN(date.getTime())) return "Invalid date";

  const options = { year: "numeric", month: "long", day: "numeric" };
  
  if (includeTime) {
    options.hour = "2-digit";
    options.minute = "2-digit";
  }

  return date.toLocaleDateString(locale, options);
}
