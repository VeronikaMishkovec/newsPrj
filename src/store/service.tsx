import axios from 'axios';

export const getNewsList = () =>
  axios.get(
    'https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=cEWFEXyy9FAG4sCXACpPK4XYRp44Uenr',
  );
