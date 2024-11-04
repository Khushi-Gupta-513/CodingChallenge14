const apiEndpoint = "https://jsonplaceholder.typicode.com/posts";
const ticketContainer = document.getElementById("ticket-container");
const loadingMessage = document.getElementById("loading-message");
const errorMessage = document.getElementById("error-message");

async function fetchTickets() {
  try {
    // Show loading message
    loadingMessage.style.display = "block";

    const response = await fetch(apiEndpoint);
    if (!response.ok) throw new Error("Failed to fetch tickets.");

    const tickets = await response.json();
    if (tickets.length === 0) throw new Error("No unresolved tickets available.");

    displayTickets(tickets);
  } catch (error) {
    // Show error message if fetch fails
    errorMessage.textContent = error.message;
    console.error("Error fetching tickets:", error);
  } finally {
    // Hide loading message
    loadingMessage.style.display = "none";
  }
}

function displayTickets(tickets) {
  ticketContainer.innerHTML = ""; // Clear container

  tickets.forEach((ticket) => {
    const ticketElement = document.createElement("div");
    ticketElement.classList.add("ticket");

    ticketElement.innerHTML = `
      <h2>Ticket ID: ${ticket.id}</h2>
      <p><strong>Customer Name:</strong> User ${ticket.userId}</p>
      <p><strong>Issue Description:</strong> ${ticket.title}</p>
      <p><strong>Details:</strong> ${ticket.body}</p>
    `;

    ticketContainer.appendChild(ticketElement);
  });
}

// Call fetchTickets to load the tickets when the page loads
fetchTickets();

