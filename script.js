const yesBtn = document.getElementById("yes-btn");
const noBtn = document.getElementById("no-btn");
const proposalCard = document.getElementById("proposal-card");
const successCard = document.getElementById("success-card");
const successMsg = document.getElementById("success-msg");
const mainHeading = document.querySelector("#proposal-card h1");
const letterGreeting = document.getElementById("letter-greeting");
const letterBody = document.getElementById("letter-body");
const envelopeWrapper = document.getElementById("envelope-wrapper");
const proposalText = document.querySelector("#proposal-card p");
const successSubtitle = document.getElementById("success-subtitle");

const noButtonStages = [
  "No 💔",
  "Are you sure? 🤨",
  "Think again... 🧐",
  "Really? 🥺",
  "Don't do this! 😭",
  "You're joking! 😂",
  "Last chance... ⚠️",
  "Fine, try this! 🏃‍♂️",
];
let currentStage = 0;

const convinceStages = [
  "Please? 🥺",
  "I'll be the best valentine ever! ✨",
  "Think about all the cookies! 🍪",
  "And the infinite hugs! 🤗",
  "I promise to always make you laugh! 😂",
  "You're making a mistake! 😭",
  "Okay, I'll stop... or will I? 🧐",
  "Just click YES already! ❤️",
];
let convinceIndex = 0;

const romanticTitles = [
  "Will you be my Valentine?",
  "Could I be the one to hold your hand?",
  "Would you make me the luckiest person by being my Valentine?",
  "I only have eyes for you... will you be mine?",
  "My heart has a special question for you..."
];

const romanticDescriptions = [
  "I put my heart into this just for you. Please let me know what you think!",
  "Every moment with you is a gift. I hope you'll say yes.",
  "My heart beats only for you. This is my little question...",
  "I made this specially to ask you something important.",
  "Searching for the right words is hard, but I hope this shows how I feel."
];

const romanticLetters = [
  [
    "You are the reason for my smiles and the warmth in my heart.",
    "I promise to always cherish and love you."
  ],
  [
    "Being with you is the greatest adventure I could imagine.",
    "I love you more than words can say."
  ],
  [
    "In a world full of people, my eyes always find you.",
    "You mean everything to me."
  ],
  [
    "I'm so grateful to have you in my life.",
    "I'll always be right here by your side."
  ]
];

const romanticSuccess = [
  "Yay! ❤️",
  "My heart is soaring! ❤️",
  "You've made me so happy! ✨",
  "Best. Day. Ever! 🥰",
  "Everything is perfect now! 💖"
];

const romanticSubtitles = [
  "I'm the happiest person alive!",
  "You just made my whole year!",
  "My heart is doing backflips right now!",
  "This is the best moment of my life!",
  "I knew you'd say yes! 🥰"
];

function getRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

const urlParams = new URLSearchParams(window.location.search);
const urlName = urlParams.get("name");

const selectedTitle = getRandom(romanticTitles);
const selectedDesc = getRandom(romanticDescriptions);
const selectedLetter = getRandom(romanticLetters);
const selectedSuccess = getRandom(romanticSuccess);
const selectedSubtitle = getRandom(romanticSubtitles);

if (urlName) {
  mainHeading.innerText = selectedTitle.includes("?")
    ? selectedTitle.replace("?", `, ${urlName}?`)
    : `${selectedTitle}, ${urlName}!`;
  letterGreeting.innerText = `Dearest ${urlName},`;
} else {
  mainHeading.innerText = selectedTitle;
}

if (proposalText) proposalText.innerText = selectedDesc;

const successH1 = document.querySelector("#success-card h1");
if (successH1) successH1.innerText = selectedSuccess;
if (successSubtitle) successSubtitle.innerText = selectedSubtitle;

if (letterBody) {
  letterBody.innerHTML = selectedLetter.map(p => `<p>${p}</p>`).join("");
}

const confettiDuration = 15 * 1000;
const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 9999 };

function randomInRange(min, max) {
  return Math.random() * (max - min) + min;
}

function fireConfetti() {
  const end = Date.now() + confettiDuration;

  const interval = setInterval(function () {
    const timeLeft = end - Date.now();

    if (timeLeft <= 0) {
      return clearInterval(interval);
    }

    const particleCount = 50 * (timeLeft / confettiDuration);
    confetti(
      Object.assign({}, defaults, {
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
      }),
    );
    confetti(
      Object.assign({}, defaults, {
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
      }),
    );
  }, 250);
}

function fireHeartExplosion() {
  const heartCount = 40;
  const rect = successCard.getBoundingClientRect();
  const centerX = rect.left + rect.width / 2;
  const centerY = rect.top + rect.height / 2;

  for (let i = 0; i < heartCount; i++) {
    const heart = document.createElement("div");
    heart.classList.add("heart-particle");
    heart.innerHTML = "❤️";

    const angle = Math.random() * Math.PI * 2;
    const distance = Math.random() * 250 + 80;
    const tx = Math.cos(angle) * distance;
    const ty = Math.sin(angle) * distance;
    const tr = Math.random() * 360;

    heart.style.setProperty("--tx", `${tx}px`);
    heart.style.setProperty("--ty", `${ty}px`);
    heart.style.setProperty("--tr", `${tr}deg`);

    heart.style.left = `${centerX}px`;
    heart.style.top = `${centerY}px`;

    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 1500);
  }
}

noBtn.addEventListener("click", () => {
  if (currentStage < noButtonStages.length - 1) {
    currentStage++;
    noBtn.innerText = noButtonStages[currentStage];
    const buttonScale = 1 - currentStage * 0.08;
    noBtn.style.transform = `scale(${buttonScale})`;
  }

  if (convinceIndex < convinceStages.length) {
    proposalText.innerText = convinceStages[convinceIndex];
    proposalText.classList.add("convince-active");

    setTimeout(() => {
      proposalText.classList.remove("convince-active");
    }, 500);

    convinceIndex++;

    const scale = 1 + convinceIndex * 0.15;
    yesBtn.style.transform = `scale(${scale})`;
  } else {
    noBtn.style.display = "none";
    proposalText.innerText = "Okay, now you HAVE to say Yes! 😉";
    yesBtn.style.transform = "scale(2.5)";
    yesBtn.style.boxShadow = "0 0 50px rgba(255, 77, 109, 0.8)";
  }
});

async function submitResponse(name, response) {
  try {
    const res = await fetch("/api/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        response,
        timestamp: new Date().toISOString(),
      }),
    });
    if (!res.ok) console.error("Failed to submit response");
  } catch (err) {
    console.error("Error submitting response:", err);
  }
}

let heartInterval;

yesBtn.addEventListener("click", () => {
  const name = urlName || "My Love";

  submitResponse(name, "YES");

  proposalCard.style.display = "none";
  successCard.style.display = "block";
  envelopeWrapper.style.display = "block";
  successMsg.innerText = `I love you ${name}!`;

  if (heartInterval) clearInterval(heartInterval);

  fireConfetti();
  fireHeartExplosion();
});

envelopeWrapper.addEventListener("click", (e) => {
  if (e.target.closest(".letter")) return;
  e.stopPropagation();
  envelopeWrapper.classList.toggle("open");
});

document.addEventListener("click", (e) => {
  if (
    envelopeWrapper.classList.contains("open") &&
    !e.target.closest(".letter")
  ) {
    envelopeWrapper.classList.remove("open");
  }
});

function createHeart() {
  const hearts = document.querySelectorAll(".floating-heart");
  if (hearts.length > 25) return;

  const heart = document.createElement("div");
  heart.classList.add("floating-heart");
  heart.innerHTML = "❤️";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = Math.random() * 3 + 4 + "s";
  heart.style.fontSize = Math.random() * 20 + 10 + "px";
  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 7000);
}

heartInterval = setInterval(createHeart, 500);
