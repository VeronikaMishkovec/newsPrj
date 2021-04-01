import axios from 'axios';
import { List } from './type';

export const getNewsList = async () => {
  const apiURL =
    'https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=cEWFEXyy9FAG4sCXACpPK4XYRp44Uenr';
  const data = axios.get<List[]>(apiURL).then(resp => resp.data.results);
  return data;
};
