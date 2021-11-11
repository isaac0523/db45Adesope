var Movie = require('../models/movie'); 
 
// List of all movies 
exports.movie_list = function(req, res) { 
    res.send('NOT IMPLEMENTED: movie list'); 
}; 
 
// for a specific movie. 
exports.movie_detail = function(req, res) { 
    res.send('NOT IMPLEMENTED: movie detail: ' + req.params.id); 
}; 
 
// Handle movie create on POST. 
exports.movie_create_post = function(req, res) { 
    res.send('NOT IMPLEMENTED: movie create POST'); 
}; 
 
// Handle movie delete form on DELETE. 
exports.movie_delete = function(req, res) { 
    res.send('NOT IMPLEMENTED: movie delete DELETE ' + req.params.id); 
}; 
 
// Handle movie update form on PUT. 
exports.movie_update_put = function(req, res) { 
    res.send('NOT IMPLEMENTED: movie update PUT' + req.params.id); 
}; 