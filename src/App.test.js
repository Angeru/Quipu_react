import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('renders button', () => {
  render(<App />);
  const linkElement = screen.getByTestId(/boton_carga/i);
  expect(linkElement).toBeInTheDocument();
});


test('renders other button', () => {
  render(<App />);
  const linkElement = screen.getByTestId(/boton_otra_carga/i);
  expect(linkElement).toBeInTheDocument();
});


test("load image", async () => {
  jest.setTimeout(8000)
  render(<App />);
  const node = screen.getByTestId(/boton_carga/i);
  fireEvent.click(node)
  //await expect(screen.getByTestId(/imagen1/i)).toBeInTheDocument();
});


