export const getNewsList = async () => {
  const res = await fetch(
    'https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=cEWFEXyy9FAG4sCXACpPK4XYRp44Uenr',
  );
  const data = await res.json();
  return data.results;
}; 