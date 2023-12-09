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
        buttons: [{ text: "I Understand", target: "doNotOpenRepeat" }]
    },
    doNotOpenRepeat: {
        text: "I repeat, do NOT open your present yet",
        buttons: [{ text: "I won’t", target: "thankYou" }]
    },

    thankYou: {
        text: "Thank you. Anyway, I wanted to take this time to say happy birthday",
        buttons: [{ text: "Go on…", target: "happyBirthdayName" }]
    },

    happyBirthdayName: {
        text: "Happy Birthday [Name]",
        buttons: [{ text: "thanks — can we move on?", target: "wantingPresent" }]
    },

    wantingPresent: {
        text: "I bet you’re wanting to open your present soon",
        buttons: [{ text: "yes I am", target: "aboutDigiCard" }]
    },

    aboutDigiCard: {
        text: "Well, first I would like to tell you more about your Digi-card",
        buttons: [{ text: "Got it!", target: "digiCardUseful" }]
    },

    digiCardUseful: {
        text: "Digi-cards are more useful than normal cards, because they’re digital",
        buttons: [{ text: "I like the sound of that", target: "notCheap" }]
    },

    notCheap: {
        text: "Just because it’s digital, doesn’t mean that it’s cheap!",
        buttons: [{ text: "Got it.", target: "notInexpensive" }]
    },

    notInexpensive: {
        text: "It doesn’t even mean that it’s inexpensive!",
        buttons: [{ text: "I understand, they seem fancy", target: "moreSpace" }]
    },

    moreSpace: {
        text: "Digi-cards allow for more space than a standard physical card",
        buttons: [{ text: "That’s really cool", target: "personalized" }]
    },

    personalized: {
        text: "And, [Name], they can be easily personalized",
        buttons: [{ text: "Hey you remembered my name!", target: "screamPrestige" }]
    },

    screamPrestige: {
        text: "Digi-cards scream PRESTIGE",
        buttons: [{ text: "Yeah they do", target: "premiumDigital" }]
    },

    premiumDigital: {
        text: "Essentially, Digi-cards are premium digital cards delivered in high-fidelity format",
        buttons: [{ text: "Got it", target: "goldPlated" }]
    },

    goldPlated: {
        text: "All Digi-cards are created on hardware connected to the internet through gold-plated connectors",
        buttons: [{ text: "That’s worth it", target: "backToYou" }]
    },

    backToYou: {
        text: "Anyway, back to you",
        buttons: [{ text: "Thank you", target: "hopeGoodBirthday" }]
    },

    hopeGoodBirthday: {
        text: "Happy Birthday. I hope you have a very good birthday",
        buttons: [{ text: "Thank you", target: "oneMoreThing" }]
    },

    oneMoreThing: {
        text: "Before you open your present, I want to tell you one more thing about Digi-cards",
        buttons: [{ text: "Got it", target: "sponsoredContent" }]
    },

    sponsoredContent: {
        text: "Digi-cards allow for sponsored content, like coupons for Dunkin’ Donuts",
        buttons: [{ text: "Sounds Great", target: "americaRuns" }]
    },

    americaRuns: {
        text: "America runs on Dunkin!",
        buttons: [{ text: "Indeed", target: "backToCard" }]
    },

    backToCard: {
        text: "Anyway, back to your birthday card.",
        buttons: [{ text: "Yes please", target: "guestAppearances" }]
    },

    guestAppearances: {
        text: "Did you know Digi-cards allow for guest appearances?",
        buttons: [{ text: "No, what?", target: "two_xl_asleep1" }]
    },
    two_xl_asleep1: {
        backgroundClass: 'two_xl_asleep',
        text: "That's right, I hired 2-XL!",
        buttons: [{ text: "2-XL my friend!", target: "two_xl_asleep2" }]
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
        buttons: [{ text: "next page", target: "almostReady" }]
    },
    almostReady: {
        text: "Okay, are you almost ready to open your present?",
        buttons: [
            { text: "Yes I am", target: "aboutToOpen" },
            { text: "No I am not", target: "aboutToOpen" }
        ]
    },

    aboutToOpen: {
        text: "Well, it’s about time to open your present",
        buttons: [{ text: "I’m looking forward to doing that soon", target: "dontGetAhead" }]
    },

    dontGetAhead: {
        text: "Now, [Name], don’t get ahead of yourself.",
        buttons: [{ text: "I won’t", target: "digiCardCoolThing" }]
    },

    digiCardCoolThing: {
        text: "Another cool thing about Digi-cards is that they are not limited in terms of how long they spend talking up a gift",
        buttons: [
            { text: "That’s great", target: "timeToImagine" },
            { text: "I want to open my present now", target: "timeToImagine" }
        ]
    },

    timeToImagine: {
        text: "Okay, it’s time. Before you open the box, I want you to imagine opening the box with your bare hands.",
        buttons: [{ text: "I promise, I’m imagining that", target: "nameThought" }]
    },

    nameThought: {
        text: "i thought to myself, what would [Name] want?",
        buttons: [{ text: "I admit, I’m hard to shop for", target: "usefulCoolUnexpected" }]
    },

    usefulCoolUnexpected: {
        text: "I worked to think of something that would be 1. Useful, 2. Cool, 3. Unexpected",
        buttons: [{ text: "1 out of 3 isn’t bad even", target: "notFountainPen" }]
    },

    notFountainPen: {
        text: "I thought hard about ‘what do I have that is really good that I would thoughtfully recommend to someone and that isn’t a fountain pen?’",
        buttons: [{ text: "I’m glad it’s not a fountain pen", target: "openIt" }]
    },

    openIt: {
        text: "Open your present finally! There is a gift bag but no gift receipt/amazon card",
        buttons: [{ text: "I opened it!", target: "randomPocketknife" }]
    },

    randomPocketknife: {
        text: "This is totally random, but it’s a folding knife that’s the same pocketknife I’ve used for like 5 years and it’s really great, I've opened a million boxes and it is great for camping and garage stuff.",
        buttons: [{ text: "That’s random, thanks I guess", target: "justifiedGift" }]
    },

    justifiedGift: {
        text: "At first I thought, that’s too random, but then I justified it to myself — Dad always had knives in the garage among his tools, and I thought, I bet [Name] doesn’t have a cool and/or sturdy folding knife among his tools.",
        buttons: [{ text: "got it", target: "presentStory" }]
    },

    presentStory: {
        text: "And that is the story of how I picked your birthday present! I hope one day you find it useful for doing something cool, or cutting twine, or whatever!",
        buttons: [{ text: "The end", target: "happyBirthdayEnd" }]
    },

    happyBirthdayEnd: {
        backgroundClass: 'knife_party',
        text: "Happy Birthday, [Name]! We love you lots.",
        buttons: [{ text: "Again, thank you, good-bye", target: "finalPage" }] // Replace 'finalPage' with the actual next step
    },

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

    // Add or remove the two-xl-text class based on the background
    if (page.backgroundClass && page.backgroundClass.includes('two-xl')) {
        cardContent.classList.add('two-xl-text');
    } else {
        cardContent.classList.remove('two-xl-text');
    }

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
