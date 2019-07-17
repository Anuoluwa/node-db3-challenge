import db from "../data/dbconfig";

export function find() {
  return db("schemes");
}

export function findById(id) {
  return db("schemes")
    .where({ id: Number(id) })
    .first();
}
