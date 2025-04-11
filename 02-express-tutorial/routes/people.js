const express = require("express");
const router = express.Router(); 

const { getPeople, getPerson, createPerson, updatePerson, deletePerson } = require("../controllers/people");
router.route('/').get(getPeople).post(createPerson);
router.route('/:id').get(getPerson).put(updatePerson).delete(deletePerson);

module.exports = router;