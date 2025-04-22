const API_BASE_URL = 'https://localhost:5000/api';

export const sendContactForm = async ({name, email, message}) => {
    try {
        const response = await fetch(`${API_BASE_URL}/contacat`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, email, message }),
        });
        const data = await response.json();
        if (!response.ok) {
            throw new Error(data.message || 'Something went wrong.');
        }

        return data;
    } catch (error) {
        console.error('Contact form error', error);
        throw error;
    }
};