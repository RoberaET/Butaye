// Get button elements
const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const bearImage = document.getElementById('bearImage');

// Counter for how many times "No" has been clicked
let noClickCount = 0;

// Different texts for the "No" button
const noTexts = [
    "No",
    "Sure? 🥺",
    "Really? 💔",
    "Positive? 😢",
    "Please? 🙏",
    "Baby... 💕",
    "Why? 💭",
    "Noo! 💔",
    "Again? 🥹",
    "Sad... 😭",
    "Final! ⚠️",
    "Fine... 😔"
];

// Scale factor for the Yes button
let yesPadding = 18;
let yesFontSize = 1.3;

// Scale factor for the No button (starts same as default)
let noPadding = 18;
let noFontSize = 1.3;

// Handle "No" button click
noBtn.addEventListener('click', function (e) {
    e.preventDefault();

    // Increment click count
    noClickCount++;

    // Change the "No" button text
    if (noClickCount < noTexts.length) {
        noBtn.textContent = noTexts[noClickCount];
    } else {
        // If we've run out of texts, keep the last one
        noBtn.textContent = noTexts[noTexts.length - 1];
    }

    // Increase the size of the "Yes" button by increasing padding and font size
    // Let it grow without limits to eventually fill the screen
    yesPadding += 8;  // Much larger growth!
    yesFontSize += 0.35;  // Much larger growth!

    yesBtn.style.padding = `${yesPadding}px ${yesPadding * 2.2}px`;
    yesBtn.style.fontSize = `${yesFontSize}rem`;
    yesBtn.style.transition = 'all 0.3s ease';

    // After just 3 clicks, start taking over the screen
    if (noClickCount > 3) {
        yesBtn.style.position = 'fixed';
        yesBtn.style.top = '50%';
        yesBtn.style.left = '50%';
        yesBtn.style.transform = 'translate(-50%, -50%)';
        yesBtn.style.zIndex = '9999';
        yesBtn.style.maxWidth = 'none';
        yesBtn.style.width = 'auto';
    } else {
        yesBtn.style.maxWidth = '600px';
    }

    // Shrink the "No" button as "Yes" grows
    if (noPadding > 8) {  // Min padding of 8px
        noPadding -= 1;
    }
    if (noFontSize > 0.7) {  // Min font size of 0.7rem
        noFontSize -= 0.04;
    }

    noBtn.style.padding = `${noPadding}px ${noPadding * 2}px`;
    noBtn.style.fontSize = `${noFontSize}rem`;
    noBtn.style.transition = 'all 0.3s ease';

    // Add some shake animation to the "No" button
    noBtn.style.animation = 'shake 0.5s';
    setTimeout(() => {
        noBtn.style.animation = '';
    }, 500);

    // If Yes button gets too big, make it more prominent
    if (noClickCount > 8) {
        yesBtn.style.boxShadow = '0 20px 50px rgba(255, 20, 147, 0.8)';
    }
});

// Handle "Yes" button click
yesBtn.addEventListener('click', function () {
    // Create celebration overlay
    const celebration = document.createElement('div');
    celebration.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(135deg, #ff1493, #ff69b4);
        z-index: 10000;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        animation: fadeIn 0.5s ease;
    `;

    celebration.innerHTML = `
        <h1 style="
            font-family: 'Pacifico', cursive;
            font-size: 4rem;
            color: white;
            text-align: center;
            margin-bottom: 30px;
            animation: heartbeat 1.5s infinite;
            text-shadow: 3px 3px 6px rgba(0, 0, 0, 0.3);
        ">Yay! I knew it! 💕</h1>
        <p style="
            font-family: 'Poppins', sans-serif;
            font-size: 1.8rem;
            color: white;
            text-align: center;
            animation: fadeIn 1s ease;
        ">You made me the happiest! 🥰✨</p>
        <div style="
            margin-top: 30px;
            font-size: 3rem;
            animation: bounce 1s infinite;
        ">❤️💖💕💗💝</div>
    `;

    document.body.appendChild(celebration);

    // Add confetti effect
    createConfetti();
});

// Shake animation for No button
const style = document.createElement('style');
style.textContent = `
    @keyframes shake {
        0%, 100% { transform: translateX(0); }
        25% { transform: translateX(-10px); }
        75% { transform: translateX(10px); }
    }
    
    @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
    }
    
    @keyframes heartbeat {
        0%, 100% { transform: scale(1); }
        50% { transform: scale(1.1); }
    }
`;
document.head.appendChild(style);

// Confetti function
function createConfetti() {
    const colors = ['#ff1493', '#ff69b4', '#ffb6c1', '#ff91af', '#ffc0cb'];
    const shapes = ['❤️', '💕', '💖', '💗', '💝', '💘'];

    for (let i = 0; i < 50; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.textContent = shapes[Math.floor(Math.random() * shapes.length)];
            confetti.style.cssText = `
                position: fixed;
                left: ${Math.random() * 100}%;
                top: -50px;
                font-size: ${Math.random() * 30 + 20}px;
                z-index: 10001;
                animation: fall ${Math.random() * 3 + 2}s linear;
                pointer-events: none;
            `;
            document.body.appendChild(confetti);

            setTimeout(() => {
                confetti.remove();
            }, 5000);
        }, i * 100);
    }

    // Add fall animation
    const fallStyle = document.createElement('style');
    fallStyle.textContent = `
        @keyframes fall {
            to {
                transform: translateY(100vh) rotate(360deg);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(fallStyle);
}
