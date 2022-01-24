import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('renders without crashing', () => {
  render(<App />);
  const linkElement = screen.getByText(/GifGif/i);
  expect(linkElement).toBeInTheDocument();
});

describe('Gifs', () => {
  test('search gifs correctly', async () => {
    render(<App />);
    const searchInput = await screen.findByPlaceholderText('Search gifs...');
    fireEvent.change(searchInput, { target: { value: 'batman' } });
    const btn = await screen.findByText('Search');
    fireEvent.click(btn);
    const title = await screen.findByText('Results of batman');
    expect(title).toBeDefined();
    expect(title).toBeInTheDocument();
  });

  test('gifs not found', async () => {
    render(<App />);
    const searchInput = await screen.findByPlaceholderText('Search gifs...');
    fireEvent.change(searchInput, { target: { value: 'aRandomInputWithNoGifs' } });
    const btn = await screen.findByText('Search');
    fireEvent.click(btn);
    const title = await screen.findByText('Results of "aRandomInputWithNoGifs" not found');
    expect(title).toBeDefined();
    expect(title).toBeInTheDocument();
  });
});
