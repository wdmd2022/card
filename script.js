let lastButtonText = '';

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
        buttons: [{ text: "Go to see the best thing", target: "two_xl_asleep1" }]
    },
    optionB: {
        text: "Hi there, welcome to page B for b-youtiful",
        buttons: [{ text: "Go to page zebra", target: "two_xl_asleep1" }]
    },
    two_xl_asleep1: {
        backgroundClass: 'two_xl_asleep',
        text: "Oh wow who is that?",
        buttons: [{ text: "my friend!", target: "two_xl_asleep2" }]
    },
    two_xl_asleep2: {
        backgroundClass: 'two_xl_asleep',
        text: "Oh no he is asleep!",
        buttons: [{ text: "Feed him D-Cells", target: "two_xl_awake" }]
    },
    two_xl_awake: {
        backgroundClass: 'two_xl',
        text: "Hello, [Name]!",
        buttons: [{ text: "my dear friend!", target: "two_xl_displeased1" }]
    },
    two_xl_displeased1: {
        backgroundClass: 'two_xl_displeased',
        text: "Have you been practicing your riddles? I will tell you two funny jokes, but only if you answer my riddles.",
        buttons: [
            { text: "I have", target: "riddle1" },
            { text: "I have not", target: "riddle1" }
        ]
    },
    riddle1: {
        backgroundClass: 'two_xl',
        text: "What has many rings but no fingers?",
        buttons: [
            { text: "A. a tree", target: "wrongAnswer1" },
            { text: "B. a caterpillar", target: "wrongAnswer1" },
            { text: "C. a telephone", target: "wrongAnswer1" },
            { text: "D. a circus", target: "wrongAnswer1" }
        ]
    },
    wrongAnswer1: {
        backgroundClass: 'two_xl_displeased',
        text: "You picked [last-button-text], which is incorrect.",
        buttons: [{ text: "Next Question", target: "riddle2" }]
    },
    riddle2: {
        backgroundClass: 'two_xl',
        text: "What goes up but never comes back down?",
        buttons: [
            { text: "A. your age", target: "wrongAnswer2" },
            { text: "B. a pogo stick", target: "wrongAnswer2" },
            { text: "C. an upside-down waterfall", target: "wrongAnswer2" },
            { text: "D. time", target: "wrongAnswer2" }
        ]
    },
    wrongAnswer2: {
        backgroundClass: 'two_xl_displeased',
        text: "You picked [last-button-text], which is incorrect.",
        buttons: [{ text: "Next Question", target: "riddle3" }]
    },
    riddle3: {
        backgroundClass: 'two_xl',
        text: "What goes in a birdbath but never gets wet?",
        buttons: [
            { text: "A. the bird’s shadow", target: "wrongAnswer3" },
            { text: "B. water", target: "wrongAnswer3" },
            { text: "C. fish", target: "wrongAnswer3" },
            { text: "D. time", target: "wrongAnswer3" }
        ]
    },
    wrongAnswer3: {
        backgroundClass: 'two_xl_displeased',
        text: "You picked [last-button-text], which is incorrect.",
        buttons: [{ text: "But it’s my birthday", target: "joke1" }]
    },
    joke1: {
        backgroundClass: 'two_xl',
        text: "Very well! I do not care. I will still tell you 2 funny jokes!",
        buttons: [{ text: "Thank you!", target: "joke2" }]
    },
    joke2: {
        backgroundClass: 'two_xl',
        text: "Why couldn’t the pony sing a lullaby?",
        buttons: [{ text: "I don’t know", target: "joke3" }]
    },
    joke3: {
        backgroundClass: 'two_xl',
        text: "She was a little horse!",
        buttons: [{ text: "haha lol good one", target: "joke4" }]
    },
    joke4: {
        backgroundClass: 'two_xl',
        text: "I am glad you like my jokes",
        buttons: [{ text: "I really do", target: "joke5" }]
    },
    joke5: {
        backgroundClass: 'two_xl',
        text: "Why did the student eat his homework?",
        buttons: [{ text: "why?", target: "joke6" }]
    },
    joke6: {
        backgroundClass: 'two_xl',
        text: "Because the teacher told him it was a piece of cake",
        buttons: [{ text: "lol good one", target: "joke7" }]
    },
    joke7: {
        backgroundClass: 'two_xl',
        text: "thank you.",
        buttons: [{ text: "okay I gotta go", target: "joke8" }]
    },
    joke8: {
        backgroundClass: 'two_xl',
        text: "have a good birthday, [Name]!",
        buttons: [{ text: "I will", target: "endCard" }]
    },
    endCard: {
        backgroundClass: 'two_xl',
        text: "okay, enjoy the rest of your card",
        buttons: [{ text: "Thanks, I will", target: "final" }]
    },
    final: {
        backgroundClass: 'open',
        text: "Hi, back to the card",
        buttons: [{ text: "next page", target: "someOtherPage" }]
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
    const cardBackground = document.getElementById('cardBackground');

    // Replace [Name] and [last-button-text]
    let pageText = page.text.replace('[Name]', name);
    pageText = pageText.replace('[last-button-text]', lastButtonText);
    // Handle background class changes
    if (page.backgroundClass) {
        cardBackground.className = 'card-background ' + page.backgroundClass;
    }
    cardContent.innerHTML = `<h2>${pageText}</h2>`;

    page.buttons.forEach(button => {
        const btnElement = document.createElement('button');
        btnElement.textContent = button.text;
        btnElement.classList.add('btn', 'btn-primary', 'mt-3');
        btnElement.onclick = () => {
            lastButtonText = button.text; // Update the last button text
            if (pageKey === 'initial') {
                cardBackground.className = 'card-background open';
            }
            loadPage(button.target, name);
        };
        cardContent.appendChild(btnElement);
    });
}
