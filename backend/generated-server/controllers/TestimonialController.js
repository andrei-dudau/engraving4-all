const { Pool } = require("pg");
require("dotenv").config();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

exports.getTestimonials = async (req, res) => {
  try {
    const result = await pool.query(`
      SELECT id, logo, name, description
      FROM testimonials
      ORDER BY "order" ASC
    `);
    res.status(200).json(result.rows);
  } catch (err) {
    console.error("Error fetching testimonials:", err);
    res.status(500).send({ message: "Server error" });
  }
};
