var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
//var DefaultRoute = Router.DefaultRoute;
//var IndexRoute=Router.IndexRoute;

//var MainLayout=require('./components/MainLayout').MainLayout;
var Home=require('./components/Home');

var MovieBox=require('./components/MovieBox');
var AddMovieBox=require('./components/AddMovieBox');
var UpdateMovieBox=require('./components/UpdateMovieBox');


var LoginBox=require('./components/login');


var RegisterBox = require('./components/register');
// var Hello=require('./components/hello');

module.exports = (
  <Route>
      <Route path="/" handler={LoginBox} />
      <Route path="/register" handler={RegisterBox} />
      <Route path="/login" handler={LoginBox} />
      <Route path="/home" handler={Home} />
      <Route path="/movies" handler={MovieBox} />
      <Route path="/addmovie" handler={AddMovieBox} />
      <Route path="/update" handler={UpdateMovieBox} />

    </Route>
);
