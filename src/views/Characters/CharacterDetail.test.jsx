import {render, screen} from '@testing-library/react';
import { MemoryRouter, Route } from 'react-router-dom';
import CharacterDetail from './CharacterDetail.jsx'
import CharacterList from './CharacterList.jsx'
import { rest } from 'msw';
import { setupServer } from 'msw/node';

const server = setupServer(
    rest.get('https://rickandmortyapi.com/api/character/:id', (req, res, ctx) => {
        return res(
            ctx.json(
                {
                    image: 'test-image',
                    name: 'test-name',
                    species: 'test-species',
                    status: 'test-status'
                }
            )
        )
    }),
    rest.get('https://rickandmortyapi.com/api/character', (req, res, ctx) => {
        return res(
            ctx.json({
                info: { pages: 1},
                results: [
                    {
                        image: 'test-image',
                        name: 'test-name',
                        species: 'test-species',
                        status: 'test-status'
                    }
                ]
            })
        )
    })
);

describe('Characters behavior', () => {
    beforeAll(
        () => server.listen()
    );

    afterAll(
        () => server.close()
    );

    it('renders correct character details', async () => {
        render(
            <MemoryRouter initialEntries={['/characters/1']}>
                <Route path='/characters/:id'>
                    <CharacterDetail />
                </Route>
            </MemoryRouter>
        )

        screen.getByText('Loading character...');

        await screen.findByText('test-name');
    })

    it('renders a list of characters', async () => {
        render(
            <MemoryRouter initialEntries={['/characters']}>
                <Route path='/characters'>
                    <CharacterList />
                </Route>
            </MemoryRouter>
        )

        screen.getByAltText(/loading characters/i);

        await screen.findByLabelText(/characters/i);
    })
})

