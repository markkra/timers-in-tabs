import { renderHook, act } from "@testing-library/react-hooks";
import { wait } from "@testing-library/react";

import useTimer, { TimerState } from "./useTimer";
import { isFunction, isString, isNumber, isObject } from "lodash/fp";
import MockDate from "mockdate";

const testDateTime1 = "November 30, 2019 12:00:00";
const testDateTime2 = "November 30, 2019 13:00:00";
const testDateTime3 = "November 30, 2019 13:30:00";

describe("useTimer tests", () => {
  beforeAll(() => {
    const testDate = new Date(testDateTime1);
    MockDate.set(testDate);
  });

  afterAll(() => {
    jest.useRealTimers();
    MockDate.reset();
  });

  test("should render a timer hook", () => {
    // Arrange/Act
    const {
      result: {
        current: { duration, toggle, reset, timerState }
      }
    } = renderHook(() => useTimer("testTimerOne"));

    // Assert
    expect(isNumber(duration)).toBe(true);
    expect(isFunction(toggle)).toBe(true);
    expect(isFunction(reset)).toBe(true);
    expect(isObject(timerState)).toBe(true);
    expect(isString(timerState.name)).toBe(true);
    expect(timerState).toBe(TimerState.STOPPED);
  });

  test("should ", () => {
    // Arrange
    const { result } = renderHook(() => useTimer("testTimerOne"));

    // Act
    act(() => {
      result.current.toggle();
    });

    act(() => {
      const testDate2 = new Date(testDateTime2);
      MockDate.set(testDate2);
      result.current.toggle();
    });

    const oneHourInMillisecs = 1000 * 60 * 60;

    // Assert
    expect(result.current.duration).toBe(oneHourInMillisecs);

    act(() => {
      result.current.toggle();
    });

    act(() => {
      const testDate3 = new Date(testDateTime3);
      MockDate.set(testDate3);
      result.current.toggle();
    });

    // Assert
    expect(result.current.duration).toBe(oneHourInMillisecs * 1.5);
  });
});
