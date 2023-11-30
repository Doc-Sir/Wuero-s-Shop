function authenticate() {
  const passwordInput = document.getElementById("password");
  const passwordValue = passwordInput.value.trim();

  if (passwordValue === password) {
    authenticated = true;
    alert("Authentication successful!");
    passwordInput.value = "";
    passwordInput.disabled = true;

    const quantityInputs = document.querySelectorAll(".quantity-input");
    const passwordInputContainer = document.querySelector(".password-input");

    quantityInputs.forEach((input) => {
      input.style.display = "block";
    });

    passwordInputContainer.style.display = "none";
  } else {
    alert("Incorrect password");
    passwordInput.value = "";
  }
}

function changeQuantity(id) {
  if (authenticated) {
    const quantityInput = document.getElementById(`quantity${id}`);
    const quantityValue = parseInt(quantityInput.value.trim());
    const quantityElement = document.getElementById(id);
    const quantity = quantityValue || 0;

    quantityElement.textContent = `Quantity: ${quantity}`;

    alert("Quantity updated successfully!");
    quantityInput.value = "";
  } else {
    alert("Please authenticate first!");
  }
}
