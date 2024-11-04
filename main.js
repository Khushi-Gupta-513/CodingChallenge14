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
  }
}

fetchTickets();

