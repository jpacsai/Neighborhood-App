import React, { Component } from 'react';
import '../css/App.css';
import Map from './components/map';
import Filters from './components/filters';
import PlaceListing from './components/place-listing';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <h1>Title</h1>
          <Filters />
        </header>
        <main>
          <section>
            <h2>Places</h2>
            <PlaceListing />
          </section>
          <Map />
        </main>
      </div>
    );
  }
}

export default App;
