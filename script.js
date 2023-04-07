fetch('https://api.api-ninjas.com/v1/jokes?limit=1',{
    method: "GET",
    headers: {
        'X-Api-Key': 'fWHQ3YLlEuz6W0nPBcf9Vw==Zt782VhEsQuqyd3S'
    }
})
.then(response => response.json())
.then(jsonResponse => {
    const joke = jsonResponse[0].joke
    const jokeElement = document.getElementById('jokePara')
    jokeElement.innerHTML = joke
})