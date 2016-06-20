var React = require('react');
var Link = require('react-router').Link;
var Reflux=require('reflux');


var store = require('../stores/store');
var actions = require('../Actions/actions');


var RegisterBox=React.createClass({

  mixins : [Reflux.listenTo(store,'onStoreUpdate')],

  // getInitialState:function()
  // {
  //       return{
  //       isRegistered : false
  //     };
  // },
  //

onStoreUpdate:function()
{
    console.log("Registration done");
    this.clear();
},

clear : function()
{
  $('#registerForm')[0].reset();
},
doRegister:function(e) {
 e.preventDefault();
 console.log('Register is called.');
 var data = $('#registerForm').serialize();
 actions.register(data);
},


  render:function(){
    return(
      <div className="container">
        <div className="row main">

          <div className="main-login main-center">
            <form role="form" className="form-horizontal" id="registerForm">

            <div className="form-group">
              <label for="name" className="cols-sm-2 control-label">Your Name</label>
              <div className="cols-sm-10">
                <div className="input-group">

                  <input type="text" className="form-control" name="name" id="name"  placeholder="Enter your Name"/>
                </div>
              </div>
            </div>

            <div className="form-group">
              <label for="email" className="cols-sm-2 control-label">Your Email</label>
              <div className="cols-sm-10">
                <div className="input-group">

                  <input type="email" className="form-control" name="email" id="email"  placeholder="Enter your Email"/>
                </div>
              </div>
            </div>


            <div className="form-group">
              <label for="password" className="cols-sm-4 control-label">Password</label>
              <div className="cols-sm-8">
                <div className="input-group">

                  <input type="password" className="form-control" name="password" id="password"  placeholder="Enter your Password"/>
                </div>
              </div>
            </div>

            </form>


              <button type="button" className="btn btn-success" id="registerButton"
              onClick={this.doRegister} >Register</button>

                <p><Link to="/">Login Here</Link></p>







        </div>
      </div>
    </div>

  );
  }
});


module.exports = RegisterBox;
