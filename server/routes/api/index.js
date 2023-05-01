const express = require('express');
const router = express.Router();
const { saveFormData } = require('../../controllers/formController');

router.route("/contact").post(saveFormData);

module.exports = router;