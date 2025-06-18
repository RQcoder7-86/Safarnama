console.log("JS file loaded");

const form = document.querySelector(".newsletter-form");
const msg = document.querySelector("#subscribe-msg");
const popup = document.querySelector("#popup");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.querySelector("input[name='email']").value;

    fetch("/subscribes", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ email })
    })
    .then(res => res.json())
    .then(data => {
        if (data.success) {
            popup.classList.remove("hidden");

            setTimeout(() => {
                popup.classList.add("hidden");
            }, 3000); // Hide after 3 seconds

            form.reset();
        } else {
            msg.textContent = "❌ Something went wrong.";
            msg.style.color = "red";
        }
    })
    .catch(err => {
        msg.textContent = "❌ Something went wrong. Try again.";
        msg.style.color = "red";
    });
});
