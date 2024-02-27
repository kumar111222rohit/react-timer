import React from 'react';
import { render, fireEvent, screen, act } from '@testing-library/react';
import '@testing-library/jest-dom';
import MouseMoveTimer from './ReactTime2';

jest.useFakeTimers();

describe('MouseMoveTimer Component', () => {
  test('timer stops after inactivity', () => {
    render(<MouseMoveTimer />);

    act(() => {
      fireEvent.mouseMove(window, { clientY: 100 });
      jest.advanceTimersByTime(2000);
    });

    act(() => {
      jest.advanceTimersByTime(200);
    });

    expect(screen.getByText('Inactive')).toBeInTheDocument();
  });
});
