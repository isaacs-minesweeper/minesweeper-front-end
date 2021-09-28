export const getMines = async () => {
  const url = 'https://isaacs-minesweeper.herokuapp.com';
  let response = await fetch(url, { method: 'POST', body: JSON.stringify({}), headers: {
    'Content-type': 'application/json; charset=UTF-8' } });
  response = await response.json();
  return response;
};
