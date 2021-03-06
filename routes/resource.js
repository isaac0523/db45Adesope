var express = require('express'); 
var router = express.Router(); 
 
// A little function to check if we have an authorized user and continue on 
// redirect to login. 
const secured = (req, res, next) => { 
    if (req.user){ 
      return next(); 
    } 
    req.session.returnTo = req.originalUrl; 
    res.redirect("/login"); 
  } 

// Require controller modules. 
var api_controller = require('../controllers/api'); 
var movie_controller = require('../controllers/movie'); 
 
/// API ROUTE /// 
 
// GET resources base. 
router.get('/', api_controller.api); 
 
/// movie ROUTES /// 
 
// POST request for creating a movie.  
router.post('/movies', movie_controller.movie_create_post); 
 
// DELETE request to delete movie. 
router.delete('/movies/:id', movie_controller.movie_delete); 
 
// PUT request to update movie. 
router.put('/movies/:id', 
movie_controller.movie_update_put); 
 
// GET request for one movie. 
router.get('/movies/:id', movie_controller.movie_detail); 

 
// GET request for list of all movie items. 
router.get('/movies', movie_controller.movie_list); 

/* GET detail MOVIE page */ 
router.get('/detail', movie_controller.movie_view_one_Page); 
 
/* GET create movie page */ 
router.get('/create', secured, movie_controller.movie_create_Page); 
 
/* GET create update page */ 
router.get('/update',secured, movie_controller.movie_update_Page); 

/* GET create movie page */ 
router.get('/delete',secured, movie_controller.movie_delete_Page); 


  module.exports = router; 
 