export default interface IPageData {
  id: number;
  status?: string;
  type: string;
  format?: string[];
  style?: any[];
  label: string;
  title: string;
  resource_url: string;
  role: string;
  artist: string;
  year: number;
  thumb: string;
  stats: object;
}
