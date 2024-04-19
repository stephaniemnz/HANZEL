import { useState, useEffect } from 'react';

/**
 * useDebounce hook
 * @param {any} value 
 * @param {number} delay 
 * @returns {any} 
 */
function useDebounce(value, delay) {
    // State and setters for debounced value
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
       
        const handler = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);

        return () => {
            clearTimeout(handler);
        };
    }, [value, delay]); 

    return debouncedValue;
}

export default useDebounce;
