import axios, { AxiosResponse } from 'axios';
import { List } from './type';

type Data = {
  status: string;
  copyright: string;
  num_results: number;
  results: List[];
};

export const getNewsList = () => {
  const apiURL =
    'https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=cEWFEXyy9FAG4sCXACpPK4XYRp44Uenr';
  const data = axios
    .get<Data>(apiURL)
    .then((resp: AxiosResponse<Data>) => resp.data.results);
  return data;
};
