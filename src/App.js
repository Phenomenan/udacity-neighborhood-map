import React, { Component } from 'react';
import Searchbar from './component/Searchbar';
import GoogleMap from './component/GoogleMap';


class App extends Component {
  state = {
    locations: [
      { name: 'Forum Camlik', id: '4cb0f956f2dbef3b34ad79e5', location: {lat: 37.753704, lng: 29.089688} },
      { name: 'Teras Park', id: '4bee6aab2c082d7f7a683042', location: {lat: 37.760107, lng: 29.042707} },
      { name: 'Sumer Park', id: '4dc6858e7d8b14fb46450658', location: {lat: 37.790684, lng: 29.088355} },
      { name: 'Migros', id: '562a0c07498e4c9fb0377a49', location: {lat: 37.754617, lng: 29.053127} },
      { name: 'Halikarnas', id: '4ee4ad9d77c8e893185625d0', location: {lat: 37.7726399, lng: 29.0849789} },
      { name: 'Tudors', id: '51fbaa62498e81924e4457b2', location: {lat: 37.7752306, lng: 29.0840403} },
      { name: 'Çınar Square', id: '4cb0fb5af2dbef3b6aae79e5', location: {lat: 37.773514, lng: 29.0843873} }
    ],
    filteredLocations: [
      { name: 'Forum Camlik', id: '4cb0f956f2dbef3b34ad79e5', location: {lat: 37.753704, lng: 29.089688} },
      { name: 'Teras Park', id: '4bee6aab2c082d7f7a683042', location: {lat: 37.760107, lng: 29.042707} },
      { name: 'Sumer Park', id: '4dc6858e7d8b14fb46450658', location: {lat: 37.790684, lng: 29.088355} },
      { name: 'Migros', id: '562a0c07498e4c9fb0377a49', location: {lat: 37.754617, lng: 29.053127} },
      { name: 'Halikarnas', id: '4ee4ad9d77c8e893185625d0', location: {lat: 37.7726399, lng: 29.0849789} },
      { name: 'Tudors', id: '51fbaa62498e81924e4457b2', location: {lat: 37.7752306, lng: 29.0840403} },
      { name: 'Çınar Square', id: '4cb0fb5af2dbef3b6aae79e5', location: {lat: 37.773514, lng: 29.0843873} }
    ],
    selectedLocation: ''
  }

  selectLocation = (location) => {
    if (location.id === this.state.selectedLocation.id) {
      this.setState({selectedLocation: ''});
    } else {
      this.setState({selectedLocation: location});
    }
  }

  queryUpdate = (value) => {
    this.setState(currentState => {
      let filteredLocations = [];
      const curLocations = currentState.locations;
      if(value !== '') {
        filteredLocations = curLocations.filter(loc => {
          return loc.name.toLowerCase().includes(value.toLowerCase());
        })
      } else {
        filteredLocations = curLocations;
      }
      return({filteredLocations});
    });
  }

  toggleHide = () => {
      const list = document.querySelector('.search-and-list');
      list.classList.toggle('hidden');
      const map = document.querySelector('#map');
      map.classList.toggle('full');
  }

  render() {
    return (
      <div className="App">
          <div className='header'>
            <a className="burger" onClick={() => this.toggleHide()}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M2 6h20v3H2zm0 5h20v3H2zm0 5h20v3H2z"/>
                </svg>
            </a>
            <div className='title'>
            <img id="logo" src="/img/denizli.png" alt="Denizli Logo" />
              <h1>Denizli Shopping Guide</h1>
            </div>
          </div>
          <GoogleMap
            locations={this.state.locations}
            filteredLocations={this.state.filteredLocations}
            selectedLocation={this.state.selectedLocation}
            myKey={'AIzaSyAJys6gsnnG81z1nBeO_I9zaU7byNcIwTk'}
            home={{lat: 37.783016, lng: 29.096333}}
          />
        <Searchbar
            locations={this.state.locations}
            filteredLocations={this.state.filteredLocations}
            selectedLocation={this.state.selectedLocation}
            selectLocation={this.selectLocation}
            queryUpdate={this.queryUpdate}
          />
          <footer>
            <a href="https://developer.foursquare.com/"><p>Information provided by Foursquare API</p></a>
          </footer>
      </div>
    );
  }
}

export default App;
