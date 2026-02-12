# 💌 Valentine Proposal Web App

[![Live Demo](https://img.shields.io/badge/demo-online-green?style=for-the-badge&logo=vercel)](https://valentine-iota-woad.vercel.app/)
[![GitHub license](https://img.shields.io/github/license/bisug/valentine?style=for-the-badge)](LICENSE)
[![Deploy with Vercel](https://img.shields.io/badge/deploy%20with-Vercel-000000?style=for-the-badge&logo=vercel)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fbisug%2Fvalentine)
[![Deploy to Netlify](https://img.shields.io/badge/deploy%20to-Netlify-00C7B7?style=for-the-badge&logo=netlify)](https://app.netlify.com/start/deploy?repository=https://github.com/bisug/valentine)

A **modern, interactive, and beautifully animated** web application designed to create a memorable romantic proposal experience.  
Built with vanilla JavaScript, CSS, and HTML — no framework dependencies.  
Every visit feels unique thanks to dynamic content, smooth 3D animations, and a clever “No” button that evolves with the interaction.

**Made with ❤️ by [BisuG](https://github.com/bisug).**  
_This project was assisted by Google’s Antigravity and Gemini 3.0 Flash._

---

## 📚 Table of Contents

- [✨ Features](#-features)
- [🎮 Live Demo](#-live-demo)
- [📦 Repository](#-repository)
- [🚀 Deployment](#-deployment)
- [🛠️ Customization & Usage](#️-customization--usage)
- [📡 API Endpoint](#-api-endpoint)
- [🧰 Tech Stack](#-tech-stack)
- [💻 Local Development](#-local-development)
- [🤝 Contributing](#-contributing)
- [📄 License](#-license)

---

## ✨ Features

- **🎲 Dynamic Randomization**  
  Titles, descriptions, love letters, and success messages change on every visit. No two proposals are exactly alike.

- **🤵 Personalized Greeting**  
  Append `?name=YourSpecialSomeone` to the URL, and the main heading and love letter will automatically include the name.

- **🧠 Persistent “No” Button Logic**  
  The “No” button doesn’t just say no — it cycles through layered convincing messages and visually transforms with each click.

- **🎨 Premium Visuals**
  - Smooth 3D parchment animations and wax seal effects.
  - Floating heart particles.
  - Canvas‑powered confetti celebration on “Yes”.

- **📱 Fully Responsive**  
  Optimised for all screen sizes and orientations. No scrolling needed — a perfect single‑screen experience.

- **📬 API Ready**  
  Built‑in serverless function to record responses (POST to `/api/submit`).

---

## 🎮 Live Demo

Experience the magic right now:  
👉 **[valentine-iota-woad.vercel.app](https://valentine-iota-woad.vercel.app/)**

---

## 📦 Repository

The source code is publicly available on GitHub:  
🔗 [https://github.com/bisug/valentine](https://github.com/bisug/valentine)

---

## 🚀 Deployment

You can deploy your own instance in one click:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fbisug%2Fvalentine)  
[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/bisug/valentine)

Both platforms automatically detect the serverless function and handle routing.

---

## 🛠️ Customization & Usage

### 🔹 Personalized Greeting

Add a `name` query parameter to the URL. The main title and the letter inside the envelope will reflect the provided name.

**Example:**

```
https://your-domain.com/?name=Sarah
```

If no name is provided, the app falls back to a generic greeting.

### 🔹 Changing the Love Letter & Messages

All randomised content is stored in plain JavaScript arrays inside `index.html`.  
Look for variables like `titles`, `descriptions`, `letterContents`, and `successMessages`.  
Modify or extend them to match your own style.

---

## 📡 API Endpoint

The app submits responses to a serverless function located at `/api/submit`.  
It accepts `POST` requests with the following JSON structure:

```json
{
  "name": "Sarah",
  "response": "YES",
  "timestamp": "2026-02-12T12:00:00.000Z"
}
```

The function is pre‑configured for Vercel / Netlify. You can extend it to store responses in a database, send emails, etc.

---

## 🧰 Tech Stack

| Frontend                  | Animations & Effects | Backend (Serverless)       |
| ------------------------- | -------------------- | -------------------------- |
| HTML5, CSS3               | CSS transforms       | Node.js                    |
| Vanilla JavaScript (ES6+) | Canvas Confetti      | Vercel / Netlify Functions |
|                           | CSS keyframes        |                            |

No heavy frameworks — fast, lightweight, and easy to modify.

---

## 💻 Local Development

1. **Clone the repository**

   ```bash
   git clone https://github.com/bisug/valentine.git
   cd valentine
   ```

2. **Run a local server**  
   Because the app uses ES6 modules and the `?name` parameter, you need a local web server.
   - If you have Python:
     ```bash
     python3 -m http.server
     ```
   - If you have Node.js:
     ```bash
     npx serve
     ```

3. **Open in browser**  
   Navigate to `http://localhost:8000` (or the port shown).

4. **Test the serverless function locally**
   - **Vercel:** Install Vercel CLI and run `vercel dev`.
   - **Netlify:** Install Netlify CLI and run `netlify dev`.

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!  
Feel free to check the [issues page](https://github.com/bisug/valentine/issues) or open a pull request.

Please follow these simple guidelines:

- Fork the repo and create your branch from `main`.
- Keep the code clean and well‑commented.
- Test your changes across different screen sizes.

---

## 📄 License

This project is **public domain / MIT licensed**.  
Use it freely, customize it, and make someone’s day special.

---

> **Pro tip:** Deploy your own version and surprise your loved one with a unique, personalised proposal. 💖
