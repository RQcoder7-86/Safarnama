
document.querySelector("form").addEventListener("submit", function(e) {
  e.preventDefault();

  const form = e.target;
  const formData = new FormData(form);

  fetch("/contact", {
    method: "POST",
    body: formData
  })
  .then(res => {
    if (res.ok) {
      const modal = new bootstrap.Modal(document.getElementById('successModal'));
      modal.show();
      form.reset();
    } else {
      alert("❌ Something went wrong.");
    }
  })
  .catch(() => alert("❌ Server error."));
});
