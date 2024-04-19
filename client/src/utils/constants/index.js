// API Endpoints
export const API_BASE_URL = 'https://api.example.com'; // Replace with actual API base URL
export const LOGIN_ENDPOINT = `${API_BASE_URL}/login`;
export const REGISTER_ENDPOINT = `${API_BASE_URL}/register`;

// Action Types
export const ADD_ITEM = 'ADD_ITEM';
export const REMOVE_ITEM = 'REMOVE_ITEM';
export const UPDATE_ITEM_COUNT = 'UPDATE_ITEM_COUNT';

// Configuration Values
export const MAX_UPLOAD_SIZE = 5 * 1024 * 1024; // 5 MB
export const ITEMS_PER_PAGE = 10;

// User Permissions
export const USER_ROLES = {
    ADMIN: 'admin',
    EDITOR: 'editor',
    VIEWER: 'viewer'
};

// Form Validation Patterns
export const EMAIL_REGEX = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
export const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/; // Minimum eight characters, at least one uppercase letter, one lowercase letter, and one number

// UI Constants
export const COLORS = {
    PRIMARY: '#4a90e2',
    SECONDARY: '#f5a623',
    ALERT: '#d0021b'
};

export const BREAKPOINTS = {
    MOBILE: '768px',
    TABLET: '992px',
    DESKTOP: '1200px'
};

// Messages & Labels
export const ERROR_MESSAGES = {
    NETWORK_ERROR: 'Network error, please try again later.',
    LOGIN_FAILED: 'Login failed, please check your credentials.'
};

export const UI_LABELS = {
    WELCOME: 'Welcome to our application!',
    LOGIN: 'Login',
    SIGN_UP: 'Sign Up'
};
