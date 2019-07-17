import db from '../data/dbconfig';


export function find() {
    return db('schemes');
  }