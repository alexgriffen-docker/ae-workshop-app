# AE Workshop App

A simple team landing page used in Docker's **AE Developer Empathy Workshop**. This is the app you'll be working with throughout the day — cloning it, making changes, opening pull requests, and eventually running it with Docker.

---

## What This App Does

It's a small web application that displays a team page with member cards. It has:

- A homepage with a welcome message and team member cards
- A few API endpoints that serve data to the frontend
- A test suite that runs automatically when you push code
- A CI/CD pipeline that checks your work on every pull request

Nothing fancy — and that's on purpose. The goal is for you to modify it, not to be impressed by it.

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher)
- [Git](https://git-scm.com/)

### Run It Locally

```bash
# Clone the repo
git clone <REPO_URL>
cd ae-workshop-app

# Install dependencies
npm install

# Start the app
npm start
```

Then open [http://localhost:3000](http://localhost:3000) in your browser.

### Run the Tests

```bash
npm test
```

### Run the Linter

```bash
npm run lint
```

---

## Run with Docker

```bash
# Build the image
docker build -t ae-workshop-app .

# Run the container
docker run -p 3000:3000 ae-workshop-app
```

Then open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Project Structure

```
ae-workshop-app/
├── app.js                  # Express server and API routes
├── public/
│   ├── index.html          # Main page
│   ├── styles.css          # Styling
│   └── script.js           # Frontend JavaScript
├── tests/
│   └── app.test.js         # Test suite (Jest + Supertest)
├── .github/
│   └── workflows/
│       └── ci.yml          # CI/CD pipeline
├── .eslintrc.json          # Linter config
├── Dockerfile              # Container build config
├── package.json
└── .gitignore
```

---

## API Endpoints

| Endpoint | Description |
|----------|-------------|
| `GET /` | Serves the homepage |
| `GET /api/welcome` | Returns the welcome message |
| `GET /api/team` | Returns the list of team members |
| `GET /api/health` | Health check (used by CI/CD) |

---

## Workshop Tasks

During the workshop, you'll be asked to make changes to this app. Look for comments in the code marked with `Workshop` — they'll point you to the right places.

Some example tasks you might get:

- Change the welcome message
- Add yourself to the team list
- Add a new page (About, Contact, etc.)
- Update the styling

Don't worry if you've never written code before — that's the whole point. Use GitHub Copilot to help, and ask your facilitator if you get stuck.

---

## CI/CD Pipeline

When you push code or open a pull request, GitHub Actions will automatically:

1. Install dependencies
2. Run the linter
3. Run the tests
4. Start the app and verify the health check

You can see the results in the **Actions** tab of the repository, or at the bottom of your pull request.

---

This app is part of the [AE Developer Empathy Workshop](https://github.com/alexgriffen-docker/ae-developer-workshop). See that repo for the full curriculum and facilitator materials.
