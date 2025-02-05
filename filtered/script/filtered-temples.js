

const templeContainer = document.getElementById("temple-container");

function displayTemples(temples) {
    templeContainer.innerHTML = ""; // Clear current content
    temples.forEach(temple => {
        const templeCard = document.createElement("div");
        templeCard.className = "temple-card"; // Add CSS styling as needed
        templeCard.innerHTML = `
            <h2>${temple.name}</h2>
            <p>Location: ${temple.location}</p>
            <p>Dedicated: ${temple.dateDedicated}</p>
            <p>Total Area: ${temple.area} sq ft</p>
            <img src="${temple.image}" alt="${temple.name}" loading="lazy"/>
        `;
        templeContainer.appendChild(templeCard);
    });
}

// Initial Display of All Temples
displayTemples(temples);

function filterTemples(criteria) {
    let filteredTemples;
    switch (criteria) {
        case "old":
            filteredTemples = temples.filter(temple => parseInt(temple.dateDedicated) < 1900);
            break;
        case "new":
            filteredTemples = temples.filter(temple => parseInt(temple.dateDedicated) > 2000);
            break;
        case "large":
            filteredTemples = temples.filter(temple => temple.area > 90000);
            break;
        case "small":
            filteredTemples = temples.filter(temple => temple.area < 10000);
            break;
        default:
            filteredTemples = temples; // Default to show all
    }
    displayTemples(filteredTemples);
}

const temples = [
    {
        name: "Aba Nigeria Temple",
        location: "abia, Nigeria",
        dateDedicated: "2005",
        area: 11,500,
        image: "https://churchofjesuschristtemples.org/assets/img/temples/aba-nigeria-temple/aba-nigeria-temple-5087.jpg"
    },
    {
        name: "abijan Côte d'Ivoire Temple",
        location: "abijan, Côte d'Ivoire",
        dateDedicated: " May 2025",
        area: 0.55-acre,
        image: "https://churchofjesuschristtemples.org/assets/img/temples/abidjan-ivory-coast-temple/abidjan-ivory-coast-temple-1108-main.jpg"
    },
    
    {
        name: "accra Ghana Temple",
        location: "accra, Ghana",
        dateDedicated: "11 january 2004",
        area: 17,500,
        image: "https://churchofjesuschristtemples.org/assets/img/temples/accra-ghana-temple/accra-ghana-temple-13760-main.jpg"
    },
    {
        name: "Los Angeles California Temple",
        location: "Los Angeles, California",
        dateDedicated: "11-14 march 1956",
        area: 190,614,
        image: "https://churchofjesuschristtemples.org/assets/img/temples/los-angeles-california-temple/los-angeles-california-temple-38945-main.jpg"
    },
    {
        name: "manila Philippines Temple",
        location: "manila, Philippines",
        dateDedicated: "25-27 september 1984",
        area: 26,683,
        image: "https://churchofjesuschristtemples.org/assets/img/temples/_temp/029-Manila-Philippines-Temple.jpg"
    }

    {
        name: "cebu City Philippines Temple",
        location: "cebu, Philippines",
        dateDedicated: "13 june 2010",
        area: 26,683,
        image: "https://churchofjesuschristtemples.org/assets/img/temples/_temp/133-Cebu-City-Philippines-Temple.jpg"
    }

    {
        name: "salt Lake Temple",
        location: "salt Lake City, Utah",
        dateDedicated: "5 april 1893",
        area: 382,207,
        image: "https://churchofjesuschristtemples.org/assets/img/temples/salt-lake-temple/salt-lake-temple-15669-main.jpg"
    }

    {
        name: "Red Cliffs Utah Temple",
        location: "Washington County, Utah",
        dateDedicated: "24 march 2024",
        area: 26,683,
        image: "https://churchofjesuschristtemples.org/assets/img/temples/red-cliffs-utah-temple/red-cliffs-utah-temple-44958-main.jpg"
    }

    {
        name: "redlands California Temple",
        location: "redlands, California",
        dateDedicated: "5 september 2003",
        area: 26,683,
        image: "https://churchofjesuschristtemples.org/manila-philippines-temple/photographs/"
    }
];

const footer = document.querySelector('footer');
footer.innerHTML = `&copy; ${new Date().getFullYear()} - Last Modified: ${document.lastModified}`;

