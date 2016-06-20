var React = require('react');
var Link = require('react-router').Link;
var NavigationBar=require('./NavigationBar');


var Home=React.createClass({
  render:function()
  {
    return(


      <div className="container">

              <NavigationBar />
        <div className="row" id="homeBox">
      		<div className="col-md-12">
      			<div className="jumbotron">
      				<h2>
      					Welcome {window.localStorage.getItem('user')}!
      				</h2>
      				<p>
      					Movies should watch before you die...
      				</p>
              <p>
                Check out the list

              </p>
      			</div>
      		</div>
      	</div>
      </div>

      );
  }
});


module.exports = Home;
