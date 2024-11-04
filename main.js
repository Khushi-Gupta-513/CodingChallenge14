const apiEndpoint = "https://jsonplaceholder.typicode.com/posts";
const ticketContainer = document.getElementById("ticket-container");
const errorMessage = document.getElementById("error-message");

async function fetchTickets() {
  try {
    const response = await fetch(apiEndpoint);
    
    if (!response.ok) throw new Error("Failed to fetch tickets.");

    const tickets = await response.json();
    
    if (tickets.length === 0) throw new Error("No unresolved tickets available.");

    displayTickets(tickets);
  } catch (error) {
    errorMessage.textContent = error.message;
    console.error("Error fetching tickets:", error);
  } finally {
    console.log("Fetch attempt completed.");
    // Hide loading indicators or perform cleanup tasks here if needed
  }
}

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
