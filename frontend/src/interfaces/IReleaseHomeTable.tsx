export default interface IReleaseHomeTable {
  pk_release_id: number;
  release_id: number;
  marketplace_id: number;
  title: string;
  price: string;
  label: string;
  cat: string;
  price_usd: number;
}
