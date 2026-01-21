import db from "../config/db.js"

export const index = async () => {
    let results = db.query("SELECT * FROM status")
    return results
}

export const show = async (id) => {
    let results = db.query(`SELECT * FROM status WHERE id = ${id}`)
    return results
}

export const create = async (name) => {
    const results = await db.query(
            "INSERT INTO status(name) VALUES ($1) RETURNING *",
            [name]
        );
    return results
}