const request = require('supertest');
const app = require('../app');

describe('API Endpoints', () => {
  describe('GET /api/health', () => {
    it('should return status ok', async () => {
      const res = await request(app).get('/api/health');
      expect(res.statusCode).toBe(200);
      expect(res.body.status).toBe('ok');
      expect(res.body.timestamp).toBeDefined();
    });
  });

  describe('GET /api/welcome', () => {
    it('should return a welcome message', async () => {
      const res = await request(app).get('/api/welcome');
      expect(res.statusCode).toBe(200);
      expect(res.body.message).toBeDefined();
      expect(res.body.subtitle).toBeDefined();
    });

    it('should include expected welcome text', async () => {
      const res = await request(app).get('/api/welcome');
      expect(res.body.message).toContain('Welcome');
    });
  });

  describe('GET /api/team', () => {
    it('should return an array of team members', async () => {
      const res = await request(app).get('/api/team');
      expect(res.statusCode).toBe(200);
      expect(Array.isArray(res.body)).toBe(true);
      expect(res.body.length).toBeGreaterThan(0);
    });

    it('each team member should have name, role, and funFact', async () => {
      const res = await request(app).get('/api/team');
      res.body.forEach((member) => {
        expect(member.name).toBeDefined();
        expect(member.role).toBeDefined();
        expect(member.funFact).toBeDefined();
      });
    });
  });

  describe('GET / (homepage)', () => {
    it('should serve the HTML page', async () => {
      const res = await request(app).get('/');
      expect(res.statusCode).toBe(200);
      expect(res.headers['content-type']).toMatch(/html/);
    });
  });
});
