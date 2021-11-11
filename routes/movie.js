var express = require('express');
const movie_controlers= require('../controllers/movie'); 
var router = express.Router();

/* GET movies */ 
router.get('/', movie_controlers.movie_view_all_Page ); 
module.exports = router; 

module.exports = router;
