// Validates that the input is not empty
export function required(value) {
    return value.trim() !== '';
}

// Validates the length of a string
export function minLength(value, min) {
    return value.length >= min;
}

// Validates the maximum length of a string
export function maxLength(value, max) {
    return value.length <= max;
}

// Validates that the input is a valid email
export function email(value) {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return emailRegex.test(value);
}

// Validates that the input is a strong password
export function strongPassword(value) {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/; // Adjust the regex as needed
    return passwordRegex.test(value);
}

// Validates that two fields match, useful for password confirmations
export function match(value1, value2) {
    return value1 === value2;
}
