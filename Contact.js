  
    const form = document.getElementById("contactForm");
    const successMsg = document.getElementById("successMessage");

    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const name = form.name.value.trim();
      const email = form.email.value.trim();
      const message = form.message.value.trim();

      if (name && email.includes("@") && message) {
        successMsg.style.display = "block";
        form.reset();
        setTimeout(() => {
          successMsg.style.display = "none";
        }, 3000);
      } else {
        alert("Please fill out all fields correctly.");
      }
    });
  