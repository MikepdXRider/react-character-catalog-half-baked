import {render, screen} from '@testing-library/react';
import { MemoryRouter, Route } from 'react-router-dom';
import CharacterDetail from './CharacterDetail.jsx'
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
})

