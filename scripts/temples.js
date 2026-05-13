document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

const mainnav = document.querySelector('.navigation');
const hambutton = document.querySelector('#menu');
const templeGrid = document.getElementById('temple-grid');

hambutton.addEventListener('click', () => {
    mainnav.classList.toggle('show');
    hambutton.classList.toggle('show');
});

let allTemples = [];

async function getTemples() {
    try {
        const response = await fetch('temples.json');
        const data = await response.json();
        allTemples = data.temples;
        displayTemples(allTemples, "Home");
    } catch (error) {
        console.error('Error fetching temples:', error);
    }
}

function displayTemples(temples) {
    templeGrid.innerHTML = '';
    temples.forEach(temple => {
        const figure = document.createElement('figure');
        figure.innerHTML = `
            <img src="${temple.url}" alt="${temple.name}" loading="lazy">
            <figcaption>
                    <h3>${temple.name}</h3>
                    <p>${temple.location}</p>
                </figcaption>
        `;
        templeGrid.appendChild(figure);
    });
}

getTemples();

document.querySelector("#home").addEventListener("click", () => displayTemples(allTemples));

document.querySelector("#old").addEventListener("click", () => {
  displayTemples(allTemples.filter(t => parseInt(t.dedicated.split(",")[0]) < 1950));
});

document.querySelector("#new").addEventListener("click", () => {
  displayTemples(allTemples.filter(t => parseInt(t.dedicated.split(",")[0]) > 1980));
});

document.querySelector("#large").addEventListener("click", () => {
  displayTemples(allTemples.filter(t => t.area > 90000));
});

document.querySelector("#medium").addEventListener("click", () => {
  displayTemples(allTemples.filter(t => t.area >= 12000 && t.area <= 90000));
});

document.querySelector("#small").addEventListener("click", () => {
  displayTemples(allTemples.filter(t => t.area < 12000));
});

getTemples();  