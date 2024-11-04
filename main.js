const apiEndpoint = "https://jsonplaceholder.typicode.com/posts";
const ticketContainer = document.getElementById("ticket-container");
const errorMessage = document.getElementById("error-message");

async function fetchTickets() {
  try {
    const response = await fetch(apiEndpoint);
    
    // Check if response is not OK (e.g., network issues)
    if (!response.ok) throw new Error("Failed to fetch tickets.");
    
    const tickets = await response.json();
    
    // Throw custom error if no tickets are available
    if (tickets.length === 0) throw new Error("No unresolved tickets available.");
    
    displayTickets(tickets); // Call function to display tickets if fetch is successful
  } catch (error) {
    errorMessage.textContent = error.message; // Display error message
    console.error("Error fetching tickets:", error);
  }
}

fetchTickets();

// Function to display tickets
function displayTickets(tickets) {
  tickets.forEach((ticket) => {
    const ticketElement = document.createElement("div");
    ticketElement.classList.add("ticket");

    ticketElement.innerHTML = `
      <h2>Ticket ID: ${ticket.id}</h2>
      <p><strong>Customer Name:</strong> User ${ticket.userId}</p>
      <p><strong>Issue Description:</strong> ${ticket.title}</p>
      <p><strong>Details:</strong> ${ticket.body}</p>
    `;

    ticketContainer.appendChild(ticketElement); // Append each ticket to the container
  });
}

fetchTickets();
