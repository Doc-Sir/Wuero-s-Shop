const password = "nofish1234";
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
}const password = "password123";
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
}const password = "password123";
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
