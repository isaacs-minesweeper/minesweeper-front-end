// import { useParams } from 'react-router-dom';

const url = 'https://evening-cliffs-81642.herokuapp.com/api/v1/minesweeper';
export const getMines = async () => {
  let response = await fetch(url, { method: 'POST', body: JSON.stringify({}), headers: {
    'Content-type': 'application/json; charset=UTF-8' } });
  response = await response.json();
  return response;
};

export const getMinesWithGET = async () => {
  let response = await fetch(url);
  response = await response.json();
  let i = 0;
  response.map((obj) => {
    const mines = obj.mines.split(',');
    mines.map((num) => num === '1' ? i++ : null);
  });
  return i;
};

export const getMineById = async (id) => {
  let response = await fetch(`${url}/${id}`);
  response = await response.json();
  const str = response.mines.split(',');
  let i = 0;
  str.map((num) => num === '1' ? i++ : null);
  return i;
};

export const deleteMineById = async (id) => {
  let response = await fetch(`${url}/${id}`, { method: 'DELETE' });
  response = await response.json();
  return response;
};
