const url = 'https://api.example.com/submit';
const data = {
    name: 'John Doe',
    email: 'johndoe@example.com',
};

const requestOptions = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
};

fetch(url, requestOptions)
    .then((response) => response.json())
    .then((data) => handleResponse(data))
    .catch((error) => console.error('Error:', error));

// Callback function to handle the response
function handleResponse(response) {
    console.log(response);
}
