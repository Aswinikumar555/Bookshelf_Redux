import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import './App.css';
import Search from './components/Search'
import Book from './components/Book'
import { Route } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
          {/* <div>
            <BookList
            />
            
          </div> */}
          <Route exact path="/" render={({ history }) => (
            <Book 
                      /> )} />
          <Route exact path="/search" render={({ history }) => (
            <Search
                        /> )} />
       
          {/* <Route path = "/search" exact strict component = {Search} /> */}
          </header>
        </div>
        </Provider>
    );
  }
}


export default App;
