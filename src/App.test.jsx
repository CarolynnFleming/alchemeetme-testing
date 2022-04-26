import { MemoryRouter } from 'react-router-dom';
import { render, screen, getByAltText, waitFor, getByText } from '@testing-library/react';
import App from './App'
import Header from './components/layout/Header';





describe('App', () => {
it('Should render the header', async () => {
render(
    <App/>
);

 const image = screen.getByAltText('Alchemy Logo')

 expect(image).toBeInTheDocument()

 waitFor(() => {
    screen.getByText(/^Meet \w+!$/i);
  })







});
});
