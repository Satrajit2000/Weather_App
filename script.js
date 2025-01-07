const url = 'https://weatherapi-com.p.rapidapi.com/alerts.json?q=london';
const options = {
    method: 'GET',
    headers: {
        'x-rapidapi-key': '38f30e0efemshce2655942cb40c1p145627jsn2da4cf7014ed',
        'x-rapidapi-host': 'weatherapi-com.p.rapidapi.com'
    }
};

fetch(url, options)
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
    })
    .then(response => {
        console.log(response);
    })
    .catch(err => {
        console.error("Error fetching weather data:", err);
    });
