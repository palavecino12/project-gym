import express from 'express';
import routerUsers from './routes/route-users';
import { errorHandler } from './middlewares/errorHandler';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.use('/api/users', routerUsers);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});