import express, { Request, Response, Router } from 'express';
import cors from "cors";
import databaseRouter from "./routers/databaseRouter";

const app = express();
const port = 4000;

app.use(cors());
app.use(express.json());

app.use(databaseRouter);

// Root route
app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

// Handler for non-existent routes
app.use((req: Request, res: Response) => {
  res.status(404).json({ error: `Cannot ${req.method} ${req.originalUrl}` });
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
