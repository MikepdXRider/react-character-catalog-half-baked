import {render, screen} from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom';
import Characters from './Characters.jsx'


it('characters details snapshot', async () => {
    const { container } = render(
        <MemoryRouter>
            <Characters 
            characters={[{
                image: 'test-image',
                name: 'test-name',
                species: 'test-species',
                status: 'test-status'
            }]}
            />
        </MemoryRouter>
    );

    expect(container).toMatchSnapshot();
})