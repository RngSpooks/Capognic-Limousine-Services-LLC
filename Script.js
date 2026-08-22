const reservationPanel = document.querySelector(".reservation-cta");
const reservationClose = document.querySelector(".reservation-close");

if (reservationPanel && reservationClose) {
    if (sessionStorage.getItem("reservationPanelDismissed") === "true") {
        reservationPanel.classList.add("is-dismissed");
    }

    reservationClose.addEventListener("click", () => {
        reservationPanel.classList.add("is-dismissed");
        sessionStorage.setItem("reservationPanelDismissed", "true");
    });
}
document.addEventListener("DOMContentLoaded", function () {
    const serviceSelect = document.getElementById("service");

fetch("https://capognic-reservation-api.cbelle056.workers.dev/services")
    .then(response => {
        if (!response.ok) {
            throw new Error("Could not load services");
        }

        return response.json();
    })
    .then(data => {
        serviceSelect.innerHTML = '<option value="">Choose a service</option>';

        data.objects.forEach(item => {
            const serviceName = item.item_data?.name;

            if (serviceName) {
                const option = document.createElement("option");
                option.value = serviceName;
                option.textContent = serviceName;

                serviceSelect.appendChild(option);
            }
        });
    })
    .catch(error => {
        console.error("Service loading error:", error);

        serviceSelect.innerHTML =
            '<option value="">Unable to load services</option>';
    });