
function showWelcomeMessage() {
    const greeting = document.getElementById('greeting');
    greeting.innerHTML = `Welcome to our website!`;
}


function saveFormData(event) {
    event.preventDefault();
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
    };
    localStorage.setItem('contactData', JSON.stringify(formData));
}

document.getElementById('contactForm').addEventListener('submit', saveFormData);

showWelcomeMessage();
