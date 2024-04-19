export const toggleAriaAttribute = (element, attribute, state) => {
    element.setAttribute(attribute, state.toString());
};

export const setAriaRole = (element, role) => {
    element.setAttribute('role', role);
};

export const updateLiveRegion = (message, regionId) => {
    const region = document.getElementById(regionId);
    if (region) {
        region.textContent = message;
    }
};

export const focusElement = (element) => {
    if (element) {
        element.focus();
    }
};

export const makeElementFocusable = (element) => {
    element.setAttribute('tabindex', '0');
};

export const enhanceFormAccessibility = (formElement, descriptor) => {
    formElement.setAttribute('aria-label', descriptor);
};

export const updateAriaLabel = (element, newLabel) => {
    element.setAttribute('aria-label', newLabel);
};
