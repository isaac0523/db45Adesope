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
 

// Handle movie delete on DELETE. 
exports.movie_delete = async function(req, res) { 
    console.log("delete "  + req.params.id) 
    try { 
        result = await Movie.findByIdAndDelete( req.params.id) 
        console.log("Removed " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": Error deleting ${err}}`); 
    } 
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


 // Handle a show one view with id specified by query 
 exports.movie_view_one_Page = async function(req, res) { 
    console.log("single view for id "  + req.query.id) 
    try{ 
        result = await Movie.findById( req.query.id) 
        res.render('moviedetail',  
{ title: 'movie Detail', toShow: result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 

//Handle building the view for creating a movie. 
// No body, no in path parameter, no query. 
// Does not need to be async 
exports.movie_create_Page =  function(req, res) { 
    console.log("create view") 
    try{ 
        res.render('moviecreate', { title: 'movie Create'}); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 

// Handle building the view for updating a movie. 
// query provides the id 
exports.movie_update_Page =  async function(req, res) { 
    console.log("update view for item "+req.query.id) 
    try{ 
        let result = await Movie.findById(req.query.id) 
        res.render('movieupdate', { title: 'movie Update', toShow: result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 

// Handle a delete one view with id from query 
exports.movie_delete_Page = async function(req, res) { 
    console.log("Delete view for id "  + req.query.id) 
    try{ 
        result = await Movie.findById(req.query.id) 
        res.render('moviedelete', { title: 'movie Delete', toShow: 
result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 




