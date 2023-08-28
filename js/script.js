

    // Fetch data using the  API/or db connection 
    fetch('https://dummyjson.com/carts/user/5')
        .then(response => response.json())
        .then(data => {
            //client information section with fetched data
            const clientInfoDiv = document.getElementById('client-info');

              data.forEach(client => {
                const clientDiv = document.createElement('div');
                clientDiv.innerHTML = `
                    <p>Client Name: ${client.name}</p>
                    <p>Rep Name: ${client.rep}</p>
                    <p>Contract Number: ${client.contract}</p>
                    <p>Amount: ${client.amount}</p>
                    <hr>
                `;
                clientInfoDiv.appendChild(clientDiv);
            });
        })
        .catch(error => console.error('Error fetching data:', error));


      