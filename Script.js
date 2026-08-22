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
