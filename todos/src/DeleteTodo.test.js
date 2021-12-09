import { render, screen } from '@testing-library/react';
import DeleteTodos from './DeleteTodo';

test('renders home page title', () => {
  render(<DeleteTodos />);
  const linkElement = screen.getByText(/x/i);
  expect(linkElement).toBeInTheDocument();
});