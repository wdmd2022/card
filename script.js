const pages = {
    initial: {
        text: "Happy Birthday [Name]!",
        buttons: [{ text: "Open the Card", target: "welcome" }]
    },
    welcome: {
        text: "Hello [Name], welcome to your interactive cloud-based card",
        buttons: [{ text: "Proceed", target: "doNotOpen" }]
    },
    doNotOpen: {
        text: "Do not open your Present package yet",
        buttons: [{ text: "I Understand", target: "option" }]
    },
    option: {
        text: "Go to option A or to option B",
        buttons: [
            { text: "Go to A", target: "optionA" },
            { text: "Go to B", target: "optionB" }
        ]
    },
    optionA: {
        text: "Hello, this is the page of option A",
        buttons: [{ text: "Go to see the best thing", target: "bestThing" }]
    },
    optionB: {
        text: "Hi there, welcome to page B for b-youtiful",
        buttons: [{ text: "Go to page zebra", target: "pageZebra" }]
    },
    // Add more pages if needed
};

document.addEventListener('DOMContentLoaded', function() {
    const params = new URLSearchParams(window.location.search);
    const name = params.get('name') || 'Friend';
    loadPage('initial', name);
});

function loadPage(pageKey, name) {
    const page = pages[pageKey];
    const cardContent = document.getElementById('cardContent');
    cardContent.innerHTML = `<h2>${page.text.replace('[Name]', name)}</h2>`;

    page.buttons.forEach(button => {
        const btnElement = document.createElement('button');
        btnElement.textContent = button.text;
        btnElement.classList.add('btn', 'btn-primary', 'mt-3');
        btnElement.onclick = () => {
            if (pageKey === 'initial') {
                document.getElementById('cardBackground').classList.add('open');
            }
            loadPage(button.target, name);
        };
        cardContent.appendChild(btnElement);
    });
}
