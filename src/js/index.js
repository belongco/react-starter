import ReactDOM from 'react-dom';
import React from 'react';
import { Router, Route, Link } from 'react-router';

require("../scss/index.scss");

class Navbar extends React.Component{
	constructor(props){
		super(props);
	}
	render(){
		if(this.props.active==="home"){
			return <ul className="navbar_routes"><li className="active"><Link to="/">Home</Link></li>
		<li><Link to="/blog">Blog</Link></li></ul>;	
		} 
		return <ul className="navbar_routes"><li ><Link to="/">Home</Link></li>
		<li className="active"><Link to="/blog">Blog</Link></li></ul>;
		
	}
}

class Home extends React.Component{
	constructor(props){
		super(props);
	}
	render(){
		return <main>
		<Navbar  active="home"/>
		<div className="container">
		<h1> Home </h1>
		</div>
		</main>;

	}
}

class Blog extends React.Component{
	constructor(props){
		super(props);
	}
	render(){
		return <main>
		<Navbar active="blog"/>
		<div className="container">
		<h1>Blog</h1>
		</div>
		</main>;
	}
}

ReactDOM.render((
  <Router>
    <Route path="/" component={Home}>
     </Route>
     <Route path="/blog" component={Blog}>
     </Route>
  </Router>
), document.body);