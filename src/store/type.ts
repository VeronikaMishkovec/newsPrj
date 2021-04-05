export type NewsListActionType = {
  type: string;
  payload: {
    data: {
      status: string,
      results: List
    }
  };
};

export type List = {
  data: {
    results: [
      {
        uri: string;
        url: string;
        id: number;
        asset_id: number;
        source: string;
        published_date: string;
        update: string;
        section: string;
        subsection: string;
        nytdsection: string;
        adx_keywords: string;
        column: null;
        byline: string;
        type: string;
        title: string;
        abstract: string;
        des_facet: [];
        org_facet: [];
        per_facet: [];
        geo_facet: [];
        media: [];
        eta_id: number;
      },
    ];
  };
};
