import { Router, Request, Response } from "express";
import { Pool } from "pg";
import dotenv from "dotenv";
import path from 'path';

dotenv.config({ path: path.resolve(__dirname, '../../../.env') });

const router = Router();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false },
});

// Check health
router.get('/api/database/health', async (req: Request, res: Response) => {
  try {
    await pool.query('SELECT 1');
    res.status(200).json({ status: 'Database connection is healthy' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ status: 'Database connection failed' });
  }
});

// Get all images
router.get("/api/database/images", async (req: Request, res: Response) => {
  try {
    const result = await pool.query(`
      SELECT id, url, title
      FROM images
      ORDER BY "id" ASC
    `);
    res.status(200).json(result.rows);
  } catch (err) {
    console.error("Error fetching images:", err);
    res.status(500).json({ message: "Server error" });
  }
});

// Get all products
router.get("/api/database/products", async (req: Request, res: Response) => {
  try {
    const result = await pool.query(`
      SELECT * FROM products
      ORDER BY "id" ASC
    `);
    res.status(200).json(result.rows);
  } catch (err) {
    console.error("Error fetching images:", err);
    res.status(500).json({ message: "Server error" });
  }
});

// Get show pieces
router.get("/api/database/showpieces", async (req: Request, res: Response) => {
  try {
    const result = await pool.query(`
      SELECT * FROM products
      WHERE id = 8
        OR id = 12
        OR id = 30
      ORDER BY "id" ASC
    `);
    res.status(200).json(result.rows);
  } catch (err) {
    console.error("Error fetching images:", err);
    res.status(500).json({ message: "Server error" });
  }
});

// Get all testimonials
router.get("/api/database/testimonials", async (req: Request, res: Response) => {
  try {
    const result = await pool.query(`
      SELECT id, logo, name, description
      FROM testimonials
      ORDER BY "order" ASC
    `);
    res.status(200).json(result.rows);
  } catch (err) {
    console.error("Error fetching testimonials:", err);
    res.status(500).json({ message: "Server error" });
  }
});

export default router;