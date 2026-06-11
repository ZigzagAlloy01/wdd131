const characters = [
    {
        name: "Sara",
        role: "Protagonist",
        description: "A young woman that travels to Santa Lea island in search of Ares and Estela.",
        image: "./images/sara.webp"
    },
    {
        name: "Ares",
        role: "A man who Sara loves",
        description: "A young man that has a romantic relationship with Sara.",
        image: "./images/ares.webp"
    },
    {
        name: "Miguel",
        role: "Sara's protector",
        description: "He has been watching for Sara since she was 6 years old.",
        image: "./images/miguel.webp"
    },
    {
        name: "Emma",
        role: "Stepmother",
        description: "She takes care of Sara after the premature death of Maria, Sara's biological mother.",
        image: "./images/emma.webp"
    },
    {
        name: "Julia",
        role: "An official from the army",
        description: "She is Sara's aunt, from her mother side. She is an excelent sniper.",
        image: "./images/julia.webp"
    },
    {
        name: "Arinka",
        role: "Sara's protector",
        description: "She is Emma's sister, and she loves Sara deeply.",
        image: "./images/arinka.webp"
    },
    {
        name: "Osiris",
        role: "Sara's friend",
        description: "She is Sara's partner during the beginning of her journey to Santa Lea.",
        image: "./images/osiris.webp"
    },
]

function displayCharacters() {

    const container =
        document.querySelector("#charactersContainer");

    if (!container) return;

    const cards = characters.map(character => `
        <article class="character-card">

            <img
                src="${character.image}"
                alt="${character.name}"
                loading="lazy">

            <h3>${character.name}</h3>

            <p>
                <strong>Role:</strong>
                ${character.role}
            </p>

            <p>${character.description}</p>

        </article>
    `);

    container.innerHTML = cards.join("");
}

const showCharactersButton =
    document.querySelector("#showCharacters");

if (showCharactersButton) {

    showCharactersButton.addEventListener(
        "click",
        displayCharacters
    );
}

function displayTheme() {

    const selector =
        document.querySelector("#themeSelector");

    const output =
        document.querySelector("#themeOutput");

    if (!selector || !output) return;

    const selectedTheme = selector.value;

    let content = "";

    if (selectedTheme === "family") {

        content = `
            <h3>Family</h3>

            <p>
                Family relationships drive many of the
                decisions made throughout the novel.
            </p>
        `;

    } else if (selectedTheme === "sacrifice") {

        content = `
            <h3>Sacrifice</h3>

            <p>
                Sara makes terrible decisions on her journey.
            </p>
        `;

    } else if (selectedTheme === "hope") {

        content = `
            <h3>Hope</h3>

            <p>
                Hope allows the characters to continue
                despite difficult circumstances.
            </p>
        `;

    } else {

        content = `
            <p>
                Please select a theme.
            </p>
        `;
    }

    output.innerHTML = content;
}

const themeSelector =
    document.querySelector("#themeSelector");

if (themeSelector) {

    themeSelector.addEventListener(
        "change",
        displayTheme
    );
}

function saveContactSubmission(event) {

    event.preventDefault();

    const name =
        document.querySelector("#name").value;

    const email =
        document.querySelector("#email").value;

    const message =
        document.querySelector("#message").value;

    const confirmation =
        document.querySelector("#confirmation");

    const submission = {
        name,
        email,
        message,
        date: new Date().toLocaleDateString()
    };

    localStorage.setItem(
        "lastSubmission",
        JSON.stringify(submission)
    );

    if (confirmation) {

        confirmation.innerHTML = `
            Thank you, ${name}.
            Your message has been saved.
        `;
    }

    event.target.reset();
}

const contactForm =
    document.querySelector("#contactForm");

if (contactForm) {

    contactForm.addEventListener(
        "submit",
        saveContactSubmission
    );
}

function displayPreviousSubmission() {

    const confirmation =
        document.querySelector("#confirmation");

    if (!confirmation) return;

    const savedSubmission =
        localStorage.getItem("lastSubmission");

    if (!savedSubmission) return;

    const data =
        JSON.parse(savedSubmission);

    confirmation.innerHTML = `
        <p>
            Last visitor:
            <strong>${data.name}</strong>
        </p>

        <p>
            Submitted on:
            ${data.date}
        </p>
    `;
}

displayPreviousSubmission();

function updateFooterYear() {

    const yearElement =
        document.querySelector("#currentYear");

    if (!yearElement) return;

    yearElement.textContent =
        new Date().getFullYear();
}

updateFooterYear();