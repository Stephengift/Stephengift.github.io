import {render, screen} from '@testing-library/react';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom';

window.scrollTo = jest.fn();

test('renders the home page', () => {
    render(
        <Router>
            <App/>
        </Router>
    );
    const headingElement = screen.getByText(/Hi, I'm Gift Stephen Akinpelu!/i);
    expect(headingElement).toBeInTheDocument();
});

