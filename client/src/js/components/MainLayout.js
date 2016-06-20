var React = require('react');
var Link = require('react-router').Link;
var NavigationBar=require('./NavigationBar');


var MainLayout=React.createClass({
  render:function()
  {
    return(
    <div className="container" id="main">
      <NavigationBar />
      <main>
        {this.props.children}
      </main>
    </div>
  );
  }
});

module.exports=MainLayout;
