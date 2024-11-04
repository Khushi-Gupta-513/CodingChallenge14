async function fetchTickets() {
    const ticketContainer = document.getElementById('ticket-container');
    const errorMessage = document.getElementById('error-message');

    try {
        // Show loading message
        ticketContainer.innerHTML = 'Loading tickets...';
        
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        
        // Check if response is ok (status code 200-299)
        if (!response.ok) {
            throw new Error('Network response was not ok.');
        }

        const tickets = await response.json();

        // If no tickets found, throw a custom error
        if (tickets.length === 0) {
            throw new Error('No unresolved tickets available.');
        }

        // Clear any previous error messages
        errorMessage.innerHTML = '';

        // Display tickets
        tickets.forEach(ticket => {
            const ticketDiv = document.createElement('div');
            ticketDiv.innerHTML = `
                <h3>Ticket ID: ${ticket.id}</h3>
                <p><strong>Customer Name:</strong> User ${ticket.userId}</p>
                <p><strong>Issue Description:</strong> ${ticket.title}</p>
                <p><strong>Details:</strong> ${ticket.body}</p>
                <hr>
            `;
            ticketContainer.appendChild(ticketDiv);
        });
    } catch (error) {
        // Handle errors and display custom error messages
        errorMessage.innerHTML = error.message;
    } finally {
        // Hide loading message or any indicators
        ticketContainer.innerHTML = '';
    }
}

// Call the function to fetch tickets when the page loads
fetchTickets();


// Call fetchTickets to load the tickets when the page loads
fetchTickets();

