import { useEffect, RefObject } from 'react';

/**
 * Type for condition function that accepts a MouseEvent and returns a boolean.
 * */

export type ConditionFunction = (event: MouseEvent) => boolean;

/**
 * Hook that triggers a callback when a click is detected outside of the referenced element.
 * Additional conditions can be provided to control the triggering of the callback.
 *
 * @param {RefObject<HTMLElement>} ref - The referenced element that the click should be outside of.
 * @param {() => void} callback - The callback function to be invoked when a click is detected outside the referenced element.
 * @param {ConditionFunction[]} conditions - Additional conditions that control the triggering of the callback. If any condition function returns `true`, the callback will not be triggered.
 */
const useOutsideClick = (
  ref: RefObject<HTMLElement>,
  callback: () => void,
  conditions: ConditionFunction[] = []
): void => {

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Apply the conditions
      for (const condition of conditions) {
        if (condition(event)) return;
      }
      // Check if the click is outside
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref, callback, conditions, ]);
};

export default useOutsideClick;
