 const apiEndpoint = "https://jsonplaceholder.typicode.com/posts";
const ticketContainer = document.getElementById("ticket-container");
const loadingMessage = document.getElementById("loading-message");
const errorMessage = document.getElementById("error-message");

async function fetchTickets() {
  try {
    const response = await fetch(apiEndpoint);

    // Throw error if response is not okay
    if (!response.ok) throw new Error("Failed to fetch tickets.");

    const tickets = await response.json();

    // Throw custom error if no tickets are found
    if (tickets.length === 0) throw new Error("No unresolved tickets available.");

    displayTickets(tickets); // Display tickets if fetch is successful
  } catch (error) {
    // Show error message if there's an issue
    errorMessage.textContent = error.message;
    console.error("Error fetching tickets:", error);
  } finally {
    // Hide loading message once fetch completes
    loadingMessage.style.display = "none";
  }
}

fetchTickets();

