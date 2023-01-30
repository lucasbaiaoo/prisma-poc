import pkg from "pg";
import dotevn from "dotenv";
dotevn.config();

const { Pool } = pkg;

const connectionDB: pkg.Pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: true
});

export default connectionDB;