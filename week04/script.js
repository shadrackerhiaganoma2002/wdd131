document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); 

    document.getElementById('form-message').style.display = 'block';
    document.getElementById('contact-form').reset(); 
});

const exhibitsData = [
    {
        name: "Artistic Expression",
        description: "An eclectic mix of modern art.",
        image: "path_to_exhibit_image1.jpg",
    },
    {
        name: "Nature's Beauty",
        description: "Capturing the essence of nature through vivid colors.",
        image: "path_to_exhibit_image2.jpg",
    }
    
];

function loadExhibits() {
    const exhibitList = document.querySelector('.exhibit-list');

    exhibitsData.forEach(exhibit => {
        let exhibitCard = document.createElement('div');
        exhibitCard.className = 'exhibit-card';
        
        exhibitCard.innerHTML = `
            <img src="${exhibit.image}" alt="${exhibit.name}">
            <h4>${exhibit.name}</h4>
            <p>${exhibit.description}</p>
        `;
        
        exhibitList.appendChild(exhibitCard);
    });
}

document.addEventListener('DOMContentLoaded', loadExhibits);
