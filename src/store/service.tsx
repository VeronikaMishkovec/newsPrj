import axios from 'axios';
import { List } from './type';

type Data = {
  copyright: string;
  num_results: number;
  results: List[];
  status: string;
};

export const getNewsList = () =>
  axios.get(
    'https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=cEWFEXyy9FAG4sCXACpPK4XYRp44Uenr',
  );
