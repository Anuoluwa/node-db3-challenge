import db from "../data/dbconfig";

export function find() {
  return db("schemes");
}

export function findById(id) {
  return db("schemes")
    .where({ id: Number(id) })
    .first();
}

export function findSteps(id) {
  return db("steps")
    .join("schemes", "schemes.id", "scheme_id")
    .select("steps.*", "scheme_name as scheme")
    .where("scheme_id", id);
}
