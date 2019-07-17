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

export function add(scheme) {
  return db("schemes")
    .insert(scheme)
    .then(ids => ({ id: ids[0] }));
}

export function update(changes, id) {
  return db("schemes")
    .where("id", Number(id))
    .update(changes)
    .then(item => {
        if(item > 0) {
           return findById(id)
        } else {
            return 'No scheme available'
        }
    })
}

export function remove(id) {
  return db("schemes")
    .where("id", Number(id))
    .del();
}
