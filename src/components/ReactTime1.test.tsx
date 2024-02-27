import React from 'react';
import { render, act } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CurrentTime from './ReactTime1';

jest.useFakeTimers();

describe('CurrentTime Component', () => {
  it('shoudl render and displays the current time', () => {
    const { getByText } = render(<CurrentTime />);
    act(() => {
      jest.advanceTimersByTime(1000); // Simulating 1 second passing
    });

    const timeRegex = /\d{1,2}:\d{2}:\d{2}\s?(AM|PM)?/i;
    expect(getByText(timeRegex)).toBeInTheDocument();
  });

  it('should update time every second', () => {
    const { getByText } = render(<CurrentTime />);
    act(() => {
      jest.advanceTimersByTime(1000);
    });

    const updatedTimeRegex = /\d{1,2}:\d{2}:\d{2}\s?(AM|PM)?/i;
    expect(getByText(updatedTimeRegex)).toBeInTheDocument();
  });

  it('shoudl change color based on seconds', () => {
    const { container } = render(<CurrentTime />);
    act(() => {
      jest.advanceTimersByTime(1000); // Simulate time passing
    });
    const seconds = new Date().getSeconds();
    const expectedColor =
      seconds % 15 === 0
        ? 'purple'
        : seconds % 5 === 0
          ? 'blue'
          : seconds % 3 === 0
            ? 'red'
            : 'black';

    expect(container.firstChild).toHaveStyle(`color: ${expectedColor}`);
  });
});
