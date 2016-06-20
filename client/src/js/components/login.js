var React = require('react');
var Router = require('react-router');
var Link = require('react-router').Link;
var Reflux = require('reflux');



var store = require('../stores/store');
var actions = require('../Actions/actions');


var LoginBox = React.createClass({

 mixins : [
   Router.Navigation,
   Reflux.listenTo(store,'onStoreUpdate')],

 // getInitialState:function()
 // {
 //   return{
 //   isLoggedIn : false
 // };
 // },


 onStoreUpdate : function(data) {
   console.log('inside onStoreUpdate.');
   console.log(data);
   window.localStorage.setItem('user',data.user);
   window.localStorage.setItem('token',data.token);
   if(data.user != null && data.token != null) {
     console.log('login success');
    //  this.setState({
    //      isLoggedIn : true
    //  });
     this.loginSuccess();
   }

 },

loginSuccess()
{
    this.transitionTo('/home');
},


  doLogin : function(e) {
   e.preventDefault();
   console.log('DoLogin called.');
   var data = $('#loginForm').serialize();
   actions.login(data);
 },
  render:function()
  {
    return(
      <div className="container">
        <div className="row">
          <div className="col-md-4 col-md-offset-4">
            <div className="panel panel-default">
                <div className="panel-heading">
                  <h3 className="panel-title">Know about Mobiles</h3>
                </div>
                <div className="panel-body">
                    <form role="form" id="loginForm">
                        <fieldset>
                            <div className="form-group">
                                <input className="form-control" placeholder="E-mail" name="email" type="email" autofocus />
                            </div>
                            <div className="form-group">
                                <input className="form-control" placeholder="Password" name="password" type="password" />
                            </div>
                            <center>
                              <button type="button"  id="loginButton" className="btn btn-success" onClick={this.doLogin} >
                              Login</button>
                              <p>New User..<Link to="/register">Register</Link></p>
                            </center>

                        </fieldset>
                    </form>
                </div>
              </div>
        </div>
     </div>
  </div>
      );
  }
});


module.exports = LoginBox;
