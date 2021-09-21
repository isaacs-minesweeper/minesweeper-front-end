export const getMines = async () => {
  const url = 'https://cors.bridged.cc/http://localhost:7890/api/v1/minesweeper';
  let response = await fetch(url, { method: 'POST', body: JSON.stringify({}), headers: {
    'Content-type': 'application/json; charset=UTF-8' } });
  response = await response.json();
  console.log(response);
  return response;
};
