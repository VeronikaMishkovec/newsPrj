export type NewsListTypes = {
  title: string,
  abstract: string,
  published_date: string,
  section: string,
  byline: string,
  url: string,
  media: any,
  id: string,
};

export type NewsListViewTypes = {
  data: NewsListTypes[]
}