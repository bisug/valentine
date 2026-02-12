const yesBtn = document.getElementById("yes-btn");
const noBtn = document.getElementById("no-btn");
const proposalCard = document.getElementById("proposal-card");
const successCard = document.getElementById("success-card");
const successMsg = document.getElementById("success-msg");
const mainHeading = document.querySelector("h1");

// Check for name in URL params
const urlParams = new URLSearchParams(window.location.search);
const urlName = urlParams.get("name");

if (urlName) {
  mainHeading.innerText = `Will you be my Valentine, ${urlName}?`;
}

// Confetti configuration
const duration = 15 * 1000;
const animationEnd = Date.now() + duration;
const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

function randomInRange(min, max) {
  return Math.random() * (max - min) + min;
}

function fireConfetti() {
  const interval = setInterval(function () {
    const timeLeft = animationEnd - Date.now();

    if (timeLeft <= 0) {
      return clearInterval(interval);
    }

    const particleCount = 50 * (timeLeft / duration);
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

// "No" button dodge logic
noBtn.addEventListener("mouseover", () => {
  const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
  const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);

  noBtn.style.position = "absolute";
  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
});

// Submit response to serverless endpoint
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

yesBtn.addEventListener("click", () => {
  const name = urlName || "My Love";

  submitResponse(name, "YES");

  proposalCard.style.display = "none";
  successCard.style.display = "block";
  successMsg.innerText = `I love you ${name}!`;

  fireConfetti();
});

// Create floating hearts
function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("floating-heart");
  heart.innerHTML = "❤️";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = Math.random() * 3 + 3 + "s";
  heart.style.fontSize = Math.random() * 20 + 10 + "px";
  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 6000);
}

setInterval(createHeart, 300);
