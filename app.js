const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

// -------------------------------------------------------
// TEAM DATA
// -------------------------------------------------------
// Workshop participants: try changing this data or adding
// yourself to the team list!
// -------------------------------------------------------

const team = [
  {
    name: 'Alice Chen',
    role: 'Engineering Lead',
    funFact: 'Has deployed to production on a Friday and lived to tell the tale.',
  },
  {
    name: 'Marcus Johnson',
    role: 'Backend Developer',
    funFact: 'Wrote a Dockerfile that worked on the first try. Once.',
  },
  {
    name: 'Priya Patel',
    role: 'Frontend Developer',
    funFact: 'Can center a div in CSS without looking it up.',
  },
  {
    name: 'Sam Rodriguez',
    role: 'DevOps Engineer',
    funFact: 'Dreams in YAML.',
  },
];

// -------------------------------------------------------
// ROUTES
// -------------------------------------------------------

// Homepage
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// API: Get team members
app.get('/api/team', (req, res) => {
  res.json(team);
});

// API: Get a welcome message
app.get('/api/welcome', (req, res) => {
  // -------------------------------------------------------
  // Workshop task: Change this welcome message!
  // -------------------------------------------------------
  res.json({
    message: 'Welcome to the AE Workshop App!',
    subtitle: 'Built by developers, experienced by AEs.',
  });
});

// API: Health check (used by CI/CD pipeline)
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Start the server (only when run directly, not during tests)
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`App running at http://localhost:${PORT}`);
  });
}

module.exports = app;
