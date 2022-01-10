import {render, screen} from '@testing-library/react';
import { MemoryRouter, Route } from 'react-router-dom';
import CharacterDetail from './CharacterDetail.jsx'
import CharacterList from './CharacterList.jsx'
// import { rest } from 'msw';

describe('Characters behavior', () => {
    it('renders correct character details', async () => {
        render(
            <MemoryRouter initialEntries={['/characters/1']}>
                <Route path='/characters/:id'>
                    <CharacterDetail />
                </Route>
            </MemoryRouter>
        )

        screen.getByText('Loading character...');
        await screen.findByText('Rick Sanchez');
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

