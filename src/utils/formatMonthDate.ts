export default function formatMonthDate(date: string) {
  const yearBrewed = date?.match(/\d{4}/)?.[0] || "";
  const monthBrewed = date?.replace(yearBrewed, "").replace(/\D/g, "");
  return `${yearBrewed}-${monthBrewed}`;
}
