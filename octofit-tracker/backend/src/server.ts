import express from 'express';

const app = express();
const port = 8000;

app.use(express.json());

app.get('/api/health', (_request, response) => {
  response.status(200).json({ status: 'ok' });
});

app.listen(port, '0.0.0.0', () => {
  console.log(`OctoFit API listening on port ${port}`);
});