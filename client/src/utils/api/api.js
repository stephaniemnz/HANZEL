const API_BASE_URL = 'https://api.example.com'; // Replace with your actual API base URL

const handleResponse = async (response) => {
    if (!response.ok) {
        const message = await response.text();
        throw new Error(message || 'Something went wrong');
    }
    return response.json();
};


export const fetchGalleries = () => {
    return fetch(`${API_BASE_URL}/galleries`)
        .then(handleResponse)
        .catch(error => {
            console.error('Fetching galleries failed:', error);
            throw error; // Re-throw to let calling function handle it
        });
};

export const fetchGalleryById = (id) => {
    return fetch(`${API_BASE_URL}/galleries/${id}`)
        .then(handleResponse)
        .catch(error => {
            console.error('Fetching gallery failed:', error);
            throw error;
        });
};

// Post data to the server (example: sending a contact form)
export const postContactForm = (formData) => {
    return fetch(`${API_BASE_URL}/contact`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
    .then(handleResponse)
    .catch(error => {
        console.error('Posting contact form failed:', error);
        throw error;
    });
};
