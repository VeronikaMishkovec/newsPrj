export type NewsListTypes = {
  title: string,
  abstract: string,
  published_date: string,
  section: string,
  byline: string,
  url: string,
  media: {},
  id: string,
};

export type NewsListViewTypes = {
  data: NewsListTypes[]
}