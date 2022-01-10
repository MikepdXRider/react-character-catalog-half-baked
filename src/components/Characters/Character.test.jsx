import {render, screen} from '@testing-library/react'
import Character from './Character.jsx'


it('character details snapshot', async () => {
    const { container } = render(
        <Character 
        character={{
            image: 'test-image',
            name: 'test-name',
            species: 'test-species',
            status: 'test-status'
        }}
        />
    );

    expect(container).toMatchSnapshot();
})