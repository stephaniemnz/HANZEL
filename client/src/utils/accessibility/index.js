// Focus Management
export const setFocus = (elementId) => {
    const element = document.getElementById(elementId);
    if (element) element.focus();
};

export const trapFocus = (element) => {
    const focusableElements = element.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const firstFocusable = focusableElements[0];
    const lastFocusable = focusableElements[focusableElements.length - 1];

    element.addEventListener('keydown', function(e) {
        if (e.key !== 'Tab') return;
        if (e.shiftKey) /* shift + tab */ {
            if (document.activeElement === firstFocusable) {
                lastFocusable.focus();
                e.preventDefault();
            }
        } else /* tab */ {
            if (document.activeElement === lastFocusable) {
                firstFocusable.focus();
                e.preventDefault();
            }
        }
    });
};

// ARIA Role and State Utilities
export const setAriaRole = (elementId, role) => {
    const element = document.getElementById(elementId);
    if (element) element.setAttribute('role', role);
};

export const toggleAriaExpanded = (elementId) => {
    const element = document.getElementById(elementId);
    const isExpanded = element.getAttribute('aria-expanded') === 'true' || false;
    element.setAttribute('aria-expanded', !isExpanded);
};

// Screen Reader Notifications
export const announceToScreenReader = (message) => {
    const liveRegion = document.querySelector('[aria-live]');
    if (liveRegion) {
        liveRegion.textContent = message;
        setTimeout(() => { liveRegion.textContent = ''; }, 500); // Clear after delay to ensure it's read
    }
};

// Skip Link Focus Fix
export const skipLinkFocusFix = () => {
    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('skip-link')) {
            e.preventDefault();
            const skipTo = document.querySelector(e.target.hash);
            if (skipTo) {
                skipTo.setAttribute('tabindex', -1);
                skipTo.focus();
            }
        }
    });
};

// Keyboard Accessibility Enhancements
export const makeTabNavigable = (elementId) => {
    const element = document.getElementById(elementId);
    if (element) element.setAttribute('tabindex', '0');
};

export const handleArrowNavigation = (parentId) => {
    const parent = document.getElementById(parentId);
    const items = parent.querySelectorAll('.navigable-item');
    items.forEach((item, index) => {
        item.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
                const nextItem = items[index + 1] || items[0];
                nextItem.focus();
                e.preventDefault();
            } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
                const prevItem = items[index - 1] || items[items.length - 1];
                prevItem.focus();
                e.preventDefault();
            }
        });
    });
};
