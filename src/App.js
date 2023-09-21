import React from 'react';
import Header from './header/header';
import Name from './name/name';
import Navbar from './nav/navbar';
import Marquee from './marquee/marquee';
import Map from './map/map';
function App() {
  return (
    <div className="App">
      <Header/>
      <Name/>
      <Navbar/>
      <Marquee/>
      <Map/>
    </div>
  );
}

export default App;
