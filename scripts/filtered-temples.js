document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

const mainnav = document.querySelector('.navigation');
const hambutton = document.querySelector('#menu');
const templeGrid = document.getElementById('temple-grid');

hambutton.addEventListener('click', () => {
    mainnav.classList.toggle('show');
    hambutton.classList.toggle('show');
});

const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "San Diego California",
    location: "San Diego, California, USA",
    dedicated: "1993, April, 25",
    area: 72000,
    imageUrl: "https://www.churchofjesuschrist.org/imgs/9fc6d53550ed3243fb8eca9ebceb284d4865e7db/full/800%2C/0/default?lang=eng"
  },
  {
    templeName: "Chihuahua Mexico",
    location: "Chihuahua, Mexico",
    dedicated: "2026, May, 12",
    area: 11000,
    imageUrl: "https://www.churchofjesuschrist.org/imgs/9130468c8099ce6d57d408945a4d94ebc97d969a/full/800%2C/0/default?lang=eng"
  },
  {
    templeName: "Salt Lake",
    location: "Salt Lake City, Utah, USA",
    dedicated: "1893, April, 6",
    area: 253015,
    imageUrl: "https://www.churchofjesuschrist.org/imgs/64de5983126b11eca393eeeeac1e50dfc2db6c7e/full/800%2C/0/default?lang=eng"
  },
  {
    templeName: "Paris France",
    location: "Le Chesnay, France",
    dedicated: "2017, May, 21",
    area: 44175,
    imageUrl: "https://www.churchofjesuschrist.org/imgs/5ec026c4efeaaa19a98e40f0f1b4c6069ae63517/full/800%2C/0/default?lang=eng"
  },
  {
    templeName: "Rome Italy",
    location: "Rome, Italy",
    dedicated: "2019, March, 10",
    area: 41010,
    imageUrl: "https://www.churchofjesuschrist.org/imgs/17e2c70d687fffedfe115197e57fa8f5d1d369bb/full/800%2C/0/default?lang=eng"
  },
  {
    templeName: "Tokyo Japan",
    location: "Tokyo, Japan",
    dedicated: "1980, October, 27",
    area: 52590,
    imageUrl: "https://www.churchofjesuschrist.org/imgs/df6b96801c9f11ec99eeeeeeac1ea2207e7c517b/full/800%2C/0/default?lang=eng"
  },
  {
    templeName: "Cardston Alberta",
    location: "Cardston, Alberta, Canada",
    dedicated: "1923, August, 26",
    area: 81700,
    imageUrl: "https://www.churchofjesuschrist.org/imgs/ebdc56cba8bb11eda23ceeeeac1e7e543b91e9b4/full/800%2C/0/default?lang=eng"
  },
  {
    templeName: "Bern Switzerland",
    location: "Münchenbuchsee, Switzerland",
    dedicated: "1955, September, 11",
    area: 35546,
    imageUrl: "https://www.churchofjesuschrist.org/imgs/a2c415301c7991e2e10059b5ec588a28785917b0/full/800%2C/0/default?lang=eng"
  },
  {
    templeName: "Hong Kong China",
    location: "Kowloon Tong, Hong Kong",
    dedicated: "1996, May, 26",
    area: 21744,
    imageUrl: "https://www.churchofjesuschrist.org/imgs/cd518a59ee7511eca935eeeeac1ecdb94609c80b/full/800%2C/0/default?lang=eng"
  },
  {
    templeName: "Papeete Tahiti",
    location: "Papeete, Tahiti",
    dedicated: "1983, October, 27",
    area: 9936,
    imageUrl: "https://www.churchofjesuschrist.org/imgs/b8a175b549d4b45a0ac5ab6ad42a9a7ff3f415b0/full/800%2C/0/default?lang=spa"
  },
  {
    templeName: "Kyiv Ukraine",
    location: "Kyiv, Ukraine",
    dedicated: "2010, August, 29",
    area: 22184,
    imageUrl: "https://www.churchofjesuschrist.org/imgs/d0508e0ecf1c6d995baee78f23989e4871b613e6/full/800%2C/0/default?lang=eng"
  },
  {
    templeName: "Bountiful Utah",
    location: "Bountiful, Utah, USA",
    dedicated: "1995, January, 8",
    area: 104000,
    imageUrl: "https://www.churchofjesuschrist.org/imgs/0ef41c19f3cd8113dba38d4dfdca16a5d06cdcd5/full/800%2C/0/default?lang=eng"
  },
  {
    templeName: "Guayaquil Ecuador",
    location: "Guayaquil, Ecuador",
    dedicated: "1999, August, 1",
    area: 45000,
    imageUrl: "https://www.churchofjesuschrist.org/imgs/b6e397f7a6c219442a9987bcd8c92ff78c5d50a6/full/800%2C/0/default?lang=spa"
  },
  {
    templeName: "Manila Philippines",
    location: "Quezon City, Philippines",
    dedicated: "1984, September, 25",
    area: 26683,
    imageUrl: "https://www.churchofjesuschrist.org/imgs/cf62ebb59aefa1d2856981fb77574fb9982c5fad/full/800%2C/0/default?lang=eng"
  },
  {
    templeName: "London England",
    location: "Newchapel, England",
    dedicated: "1958, September, 7",
    area: 42652,
    imageUrl: "https://www.churchofjesuschrist.org/imgs/914ec5701c2435b4cfa50668de85df2aebf68f26/full/800%2C/0/default?lang=eng"
  },
  {
    templeName: "Accra Ghana",
    location: "Accra, Ghana",
    dedicated: "2004, January, 11",
    area: 17500,
    imageUrl: "https://www.churchofjesuschrist.org/imgs/7cf8e8b9e5a5a1f379d4e2c9bc2166f9c6007aca/full/800%2C/0/default?lang=eng"
  },
  {
    templeName: "São Paulo Brazil",
    location: "São Paulo, Brazil",
    dedicated: "1978, October, 30",
    area: 59246,
    imageUrl: "https://www.churchofjesuschrist.org/imgs/940f3e201364433a3d5d3dc14b0cacee38d41d1d/full/800%2C/0/default?lang=eng"
  }
];

function createTempleCard(temples) {
    templeGrid.innerHTML = "";
    temples.forEach(temple => {
        let card = document.createElement("section");
        let name = document.createElement("h3");
        let location = document.createElement("p");
        let dedication = document.createElement("p");
        let area = document.createElement("p");
        let img = document.createElement("img");
        
        name.textContent = temple.templeName;
        location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;
        dedication.innerHTML = `<span class="label">Dedicated:</span> ${temple.dedicated}`;
        area.innerHTML = `<span class="label">Size:</span> ${temple.area} sq ft`;
        img.setAttribute("src", temple.imageUrl);
        img.setAttribute("alt", `${temple.templeName} Temple`);
        img.setAttribute("loading", "lazy");
        
        card.appendChild(name);
        card.appendChild(location);
        card.appendChild(dedication);
        card.appendChild(area);
        card.appendChild(img);
        
        templeGrid.appendChild(card);
    });
}

document.querySelector("#home").addEventListener("click", (e) => {
    e.preventDefault();
    document.querySelector("#page-title").textContent = "Home";
    createTempleCard(temples);
});

document.querySelector("#old").addEventListener("click", (e) => {
    e.preventDefault();

    document.querySelector("#page-title").textContent = "Old";

    const oldTemples = temples.filter(
        temple => parseInt(temple.dedicated) < 1900
    );

    createTempleCard(oldTemples);
});

document.querySelector("#new").addEventListener("click", (e) => {
    e.preventDefault();

    document.querySelector("#page-title").textContent = "New";

    const newTemples = temples.filter(
        temple => parseInt(temple.dedicated) > 2000
    );

    createTempleCard(newTemples);
});

document.querySelector("#small").addEventListener("click", (e) => {
    e.preventDefault();

    document.querySelector("#page-title").textContent = "Small";

    const smallTemples = temples.filter(
        temple => temple.area < 10000
    );

    createTempleCard(smallTemples);
});

document.querySelector("#large").addEventListener("click", (e) => {
    e.preventDefault();

    document.querySelector("#page-title").textContent = "Large";

    const largeTemples = temples.filter(
        temple => temple.area > 90000
    );

    createTempleCard(largeTemples);
});

createTempleCard(temples);