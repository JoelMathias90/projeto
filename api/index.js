import express from 'express';
const app = express();

app.use(json());

app.get('/', (req, res) => {
  res.send('Hello from Express.js!')
})

app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello World from Vercel Serverless!' });
});

export default app;
