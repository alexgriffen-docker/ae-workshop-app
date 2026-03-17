// -------------------------------------------------------
// AE Workshop App — Frontend JavaScript
//
// This file loads data from the API and displays it on
// the page. Workshop participants: try modifying what
// gets displayed, or add new features!
// -------------------------------------------------------

document.addEventListener('DOMContentLoaded', () => {
  loadWelcomeMessage();
  loadTeamMembers();
});

// Load the welcome message from the API
async function loadWelcomeMessage() {
  try {
    const response = await fetch('/api/welcome');
    const data = await response.json();

    document.getElementById('welcome-message').textContent = data.message;
    document.getElementById('welcome-subtitle').textContent = data.subtitle;
  } catch (error) {
    console.error('Failed to load welcome message:', error);
  }
}

// Load team members from the API and display them as cards
async function loadTeamMembers() {
  const grid = document.getElementById('team-grid');

  try {
    const response = await fetch('/api/team');
    const team = await response.json();

    grid.innerHTML = '';

    team.forEach((member) => {
      const initials = member.name
        .split(' ')
        .map((n) => n[0])
        .join('');

      const card = document.createElement('div');
      card.className = 'team-card';
      card.innerHTML = `
        <div class="avatar">${initials}</div>
        <h3>${member.name}</h3>
        <p class="role">${member.role}</p>
        <p class="fun-fact">"${member.funFact}"</p>
      `;

      grid.appendChild(card);
    });
  } catch (error) {
    grid.innerHTML = '<p class="loading">Failed to load team members.</p>';
    console.error('Failed to load team members:', error);
  }
}
