const form = document.querySelector(".newsletter-form");
const msg = document.querySelector("#subscribe-msg");

form.addEventListener("submit", function (e) {
    e.preventDefault(); // form ka default reload behavior rokna

    const email = document.querySelector("input[name='email']").value;

    fetch("/subscribes", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ email: email })
    })
    .then(res => res.json())
    .then(data => {
        msg.textContent = "🎉 Subscribed successfully!";
        msg.style.color = "green";
        form.reset(); // form ko clear kar do
    })
    .catch(err => {
        msg.textContent = "❌ Something went wrong. Try again.";
        msg.style.color = "red";
    });
});
