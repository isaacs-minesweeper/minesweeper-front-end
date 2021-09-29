import React from 'react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import MinesweeperContainer from './MSContainer.jsx';
import data from '../fixtures/data.json';

// const mockServer = setupServer(
//   rest.get('http://localhost:7890/api/v1/minesweeper', (req, res, ctx) => {
//     return res(ctx.json(data));
//   })
// );

describe('container test', () => {
//   beforeAll(() => mockServer.listen());
//   afterAll(() => mockServer.close());

  it('testing the container', async () => {
    const { container } = render(
      <MemoryRouter>
        <MinesweeperContainer />
      </MemoryRouter>);
    const button = await screen.findAllByRole('button');
    const ninetynine = await screen.findByText('Total mines:', { exact: true });
    const allMines = await screen.findByText('Mines on every board on the server:', { exact: false });
    userEvent.click(button[0]);
    return waitFor(() => {
      expect(button[0]).not.toBeEmptyDOMElement();
      expect(ninetynine).not.toBeEmptyDOMElement();
      expect(allMines).not.toBeEmptyDOMElement();
    });
    // expect(2 + 2).toEqual(4);
    // heroku was being lame and I couldn't test with local host
  });
});
