export function formatNumber(number: number, digits: number): string {
  const regex = /\.0+$|(\.[0-9]*[1-9])0+$/;
  const lookup = [
    { value: 1, symbol: "" },
    { value: 1e3, symbol: "k" },
    { value: 1e6, symbol: "M" },
    { value: 1e9, symbol: "G" },
    { value: 1e12, symbol: "T" },
    { value: 1e15, symbol: "P" },
    { value: 1e18, symbol: "E" },
  ];

  var item = lookup
    .slice()
    .reverse()
    .find((item) => {
      return number >= item.value;
    });

  return item
    ? (number / item.value).toFixed(digits).replace(regex, "$1") + item.symbol
    : "0";
}
