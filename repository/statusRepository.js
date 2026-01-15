import db from "../config/db.js"

export const index = async () => {
    let results = db.query("SELECT * FROM status")
    return results
}

export const show = async (id) => {
    let results = db.query(`SELECT * FROM status WHERE id = ${id}`)
    return results
}