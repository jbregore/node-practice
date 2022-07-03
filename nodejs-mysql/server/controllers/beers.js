import pool from "../config/database.js";

const table_name = "tbl_beers";

export const getBeers = async (req, res) => {
    try {
        const [rows] = await pool.query(`SELECT * FROM ${table_name}`)
        res.status(200).json({ data: rows });
    } catch (e) {
        res.status(404).json({ message: e.message });
    }
}

export const getBeer = async (req, res) => {
    try {
        const [rows] = await pool.query(
            `SELECT * FROM ${table_name} WHERE id = ?`,
            [req.params.id]
        )
        res.status(200).json({ data: rows });
    } catch (e) {
        res.status(404).json({ message: e.message });
    }
}

export const createBeer = async (req, res) => {
    try {
        const body = req.body;

        const [rows] = await pool.query(
            `INSERT INTO ${table_name} SET ?`,
            body
        )
        res.status(200).json({ data: `Beer with the record ID ${rows.insertId} has been added.` });
    } catch (e) {
        res.status(404).json({ message: e.message });
    }
}

export const updateBeer = async (req, res) => {
    try {
        const { name, tagline, description, image } = req.body

        const [rows] = await pool.query(
            `UPDATE ${table_name} SET name = ?, tagline = ?,
             description = ?, image = ? WHERE id = ?`,
            [name, tagline, description, image, req.params.id]
        )
        res.status(200).json({ data: `Beer with the name: ${name} has been updated.` });
    } catch (e) {
        res.status(404).json({ message: e.message });
    }
}

export const deleteBeer = async (req, res) => {
    try {
        const [rows] = await pool.query(
            `DELETE FROM ${table_name} WHERE id = ?`,
            [req.params.id]
        )
        res.status(200).json({ data: `Beer with the record ID ${[req.params.id]} has been removed.` });
    } catch (e) {
        res.status(404).json({ message: e.message });
    }
}