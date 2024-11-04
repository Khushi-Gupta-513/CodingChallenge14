const apiEndpoint = "https://jsonplaceholder.typicode.com/posts";
const ticketContainer = document.getElementById("ticket-container");
const loadingMessage = document.getElementById("loading-message");
const errorMessage = document.getElementById("error-message");

async function fetchTickets() {
  try {
    const response = await fetch(apiEndpoint);

    // Check if the response is OK; if not, throw an error
    if (!response.ok) throw new Error("Failed to fetch tickets.");

    const tickets = await response.json();

    // If no tickets are found, throw a custom error
    if (tickets.length === 0) throw new Error("No unresolved tickets available.");

    displayTickets(tickets); // If fetch is successful, display the tickets
  } catch (error) {
    // Display a friendly error message to the user if any error occurs
    errorMessage.textContent = error.message;
    console.error("Error fetching tickets:", error);
  } finally {
    // Hide the loading message once the fetch completes, whether successful or not
    loadingMessage.style.display = "none";
  }
}

function displayTickets(tickets) {
  // Clear any previous content in the container
  ticketContainer.innerHTML = "";

  tickets.forEach((ticket) => {
    // Create a container for each ticket
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

fetchTickets();
