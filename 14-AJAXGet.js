const url = 'https://api.example.com/data';

fetch(url)
    .then((response) => response.json())
    .then((data) => handleResponse(data))
    .catch((error) => console.error('Error:', error));

function handleResponse(response) {
    console.log(response);
}
