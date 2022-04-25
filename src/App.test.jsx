import { MemoryRouter } from 'react-router-dom';
import { render, screen, waitFor } from '@testing-library/react';
import Header from './components/layout/Header'

test('Should render the header', async () => {
render(
    <MemoryRouter>
     <Header />
    </MemoryRouter>
)
});
