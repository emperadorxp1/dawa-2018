import React, { Component } from 'react';
import { BrowserRouter, Route, NavLink,Switch} from 'react-router-dom'
import classes from './App.css'
import Posts  from './containers/Posts/Posts'
import NewPost from './components/NewPost/NewPost'

class App extends Component {
  render(){
    return(<BrowserRouter>
    <div className={classes.App}>
    <header>
      <nav>
        <ul>
          <li><NavLink
          to="/"
          exact
          actibeStyle={{
            color: '#fa923f',
            textDecoration: 'underline'
          }}>Inicio</NavLink></li>}
          <li><NavLink
            to="/posts/"
            exact
            actibeStyle={{
              color: '#fa923f',
              textDecoration: 'underline'
            }}>Posts</NavLink></li>
          <li><NavLink to={{
            pathname: '/new-post',
            hash: '#submit',
            search: '?quick-submit=true'
            }}>New Post</NavLink></li>
        
        </ul>
      </nav>
      </header>
      <h1>Blog de ejemplo</h1>
      <Switch>
        <Route path="/new-post" component={NewPost}/>
        <Route path="/posts" component={Posts}/>
        <Route path="/" exact render={() => <h1>PAgina de inicio</h1>}/>
        <Route render={() =><h1>No funciona</h1>}/>
      </Switch>
      </div>
      </BrowserRouter>)
  }
}

export default App
