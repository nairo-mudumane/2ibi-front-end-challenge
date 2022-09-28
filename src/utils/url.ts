export function formatUrl(str: string): string {
  const removeAccents = str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  const removeWhiteSpacesAndUpperCase = removeAccents
    .replace(/\s/g, "-")
    .toLowerCase();
  const removeDots = removeWhiteSpacesAndUpperCase
    .replace(".", "")
    .replace(",", "")
    .replace("_", "")
    .replace("!", "");

  const response = removeDots;
  return response;
}
