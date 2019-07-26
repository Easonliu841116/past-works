export default function (num) {
  const n = num % 13;
  // eslint-disable-next-line
  return n === 0 ? 'K' : n === 12 ? 'Q' : n === 11 ? 'J' : n === 1 ? 'A' : n;
}
