import { render, screen } from '@testing-library/react';
import Greeting from './Greeting';
import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';

describe('Greeting component', () => {
  test('button is not clicked', () => {
    // arrange
    render(<Greeting />);

    // act
    //do nothing

    //assert
    const paragraphElement = screen.getByText('not clicked yet');
    expect(paragraphElement).toBeInTheDocument();
  });

  test('render "clicked" when the button is clicked', async () => {
    // arrange
    render(<Greeting></Greeting>);

    // act
    const buttonElement = screen.getByRole('button');
    userEvent.click(buttonElement);

    //assert
    const paragraphElement = screen.getByText('clicked', { exact: false });
    expect(paragraphElement).toBeInTheDocument();
  });
});
