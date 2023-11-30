const password = "nofishs1234";
let authenticated = false;

function authenticate() {
  const passwordInput = document.getElementById("password");
  const quantityInput = document.getElementById("quantity");
  const passwordValue = passwordInput.value.trim();

  if (passwordValue === password) {
    authenticated = true;
    alert("Authentication successful!");
    passwordInput.value = "";
    quantityInput.value = "";
    passwordInput.disabled = true;
    quantityInput.disabled = false;

    const items = document.querySelectorAll(".item");
    const passwordInputContainer = document.querySelector(".password-input");
    const passwordSubmitButton = document.querySelector(".password-submit");

    items.forEach(item => {
      item.style.display = "none";
    });

    passwordInputContainer.style.display = "block";
    passwordSubmitButton.style.display = "block";
  } else {
    alert("Incorrect password");
    passwordInput.value = "";
    quantityInput.value = "";
  }
}

function changeQuantity() {
  if (authenticated) {
    const quantityInput = document.getElementById("quantity");
    const quantityValue = parseInt(quantityInput.value.trim());
    const items = document.querySelectorAll(".item");

    items.forEach(item => {
      const quantityElement = item.querySelector(".quantity");
      const id = quantityElement.id;
      const quantity = quantityValue || 0;

      quantityElement.textContent = `Quantity: ${quantity}`;
    });

    alert("Quantity updated successfully!");
    quantityInput.value = "";
  } else {
    alert("Please authenticate first!");
  }
}
