var Movie = require('../models/movie'); 
 
// List of all movies 
exports.movie_list = async function(req, res) { 
    try{ 
        theMovies = await Movie.find(); 
        res.send(theMovies); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
};  

// VIEWS 
// Handle a show all view 
exports.movie_view_all_Page = async function(req, res) { 
    try{ 
        theMovies = await Movie.find(); 
        res.render('movie', { title: 'Movie Search Results', results: theMovies }); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 
 
// for a specific movie. 
// for a specific movie. 
exports.movie_detail = async function(req, res) { 
    console.log("detail"  + req.params.id) 
    try { 
        result = await Movie.findById( req.params.id) 
        res.send(result) 
    } catch (error) { 
        res.status(500) 
        res.send(`{"error": document for id ${req.params.id} not found`); 
    } 
}; 
 
// Handle movie create on POST. 
exports.movie_create_post = async function(req, res) { 
    console.log(req.body) 
    let document = new Movie();  
    document.name = req.body.name; 
    document.length = req.body.length; 
    document.director = req.body.director; 
    try{ 
        let result = await document.save(); 
        res.send(result); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 
 
// Handle movie delete form on DELETE. 
exports.movie_delete = function(req, res) { 
    res.send('NOT IMPLEMENTED: movie delete DELETE ' + req.params.id); 
}; 
 
// Handle movie update form on PUT. 
// Handle movie update form on PUT. 
exports.movie_update_put = async function(req, res) { 
    console.log(`update on id ${req.params.id} with body 
${JSON.stringify(req.body)}`) 
    try { 
        let toUpdate = await Movie.findById( req.params.id) 
        // Do updates of properties 
        if(req.body.name)  
               toUpdate.name = req.body.name; 
        if(req.body.length) toUpdate.length = req.body.length; 
        if(req.body.director) toUpdate.director = req.body.director; 
        let result = await toUpdate.save(); 
        console.log("Sucess " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": ${err}: Update for id ${req.params.id} 
failed`); 
    } 
}; 