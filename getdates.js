const currentYearSpan = document.getElementById("currentyear");
const currentYear = new Date().getFullYear();
currentYearSpan.textContent = currentYear;

const lastModified = document.lastModified;
const lastModifiedElement = document.getElementById("lastModified");
lastModifiedElement.textContent = `Last Modified: ${lastModified}`;
