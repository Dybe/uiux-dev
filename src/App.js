import React from 'react';
import FilteredList from './FilteredList';
import Navbar from 'react-bootstrap/Navbar';
import './DisplayList';

import aksum from './images/aksum.jpg'
import apartheid from './images/apartheid.jpeg'
import bushmen from './images/bushmen.jpg'
import capetown from './images/capetown.jpg'
import capeverde from './images/capeverde.jpg'
import dragonbeach from './images/dragonbeach.jpg'
import fes from './images/fes.jpg'
import giza from './images/giza.jpg'
import granderg from './images/granderg.jpg'
import kakum from './images/kakum.jpg'
import kilima from './images/kilimanjaro.jpg'
import kruger from './images/kruger.jpg'
import mauritius from './images/mauritius.jpg'
import namib from './images/namib.jpg'
import sangano from './images/sangano.jpg'
import serengeti from './images/serengeti.jpg'
import seychelles from './images/seychelles.jpg'
import stonetown from './images/stonetown.jpg'
import timbuktu from './images/timbuktu.jpg'
import zanzibar from './images/zanzibar.jpg'
import { Collapse } from 'react-bootstrap';

const productList = [
  {
    name: "Serengeti & Ngorongoro Crater (Tanzania)",
    region: "East",
    form: "Nature/Safari",
    index: 1,
    image: serengeti,
    booked: 0,
    price: 15000
  },
  {
    name: "Mount Kilimanjaro: The Peak of Africa (Tanzania)",
    region: "East",
    form: "Nature/Safari",
    index: 2,
    image: kilima,
    booked: 0,
    price: 2000
  },
  {
    name: "The Zanzibari Sands (Tanzania)",
    region: "East",
    form: "Beach",
    index: 3,
    image: zanzibar,
    booked: 0,
    price: 1000
  },
  {
    name: "The White Sands of Seychelles (Seychelles)",
    region: "East",
    form: "Beach",
    index: 4,
    image: seychelles,
    booked: 0,
    price: 2000
  },
  {
    name: "Beaches of Mauritius (Mauritius)",
    region: "East",
    form: "Beach",
    index: 5,
    image: mauritius,
    booked: 0,
    price: 3000
  },
  {
    name: "The Ancient Kingdom of Aksum (Ethiopia)",
    region: "East",
    form: "Cultural/Historical",
    index: 6,
    image: aksum,
    booked: 0,
    price: 1000
  },
  {
    name: "Zanzibar Sultanate (Tanzania)",
    region: "East",
    form: "Cultural/Historical",
    index: 7,
    image: stonetown,
    booked: 0,
    price: 1200
  },
  {
    name: "The Grand Erg Oriental (Tunisia)",
    region: "North/West",
    form: "Nature/Safari",
    index: 8,
    image: granderg,
    booked: 0,
    price: 5000
  },
  {
    name: "Cape Verdean Sands (Cape Verde) ",
    region: "North/West",
    form: "Beach",
    index: 9,
    image: capeverde,
    booked: 0,
    price: 3000
  },
  {
    name: "Dragon Beach (Morocco)",
    region: "North/West",
    form: "Beach",
    index: 10,
    image: dragonbeach,
    booked: 0,
    price: 5000
  },
  {
    name: "Kakum National Park (Ghana)",
    region: "North/West",
    form: "Nature/Safari",
    index: 11,
    image: kakum,
    booked: 0,
    price: 3000
  },
  {
    name: "The Ancient City of Timbuktu (Mali)",
    region: "North/West",
    form: "Cultural/Historical",
    index: 12,
    image: timbuktu,
    booked: 0,
    price: 1800
  },
  {
    name: "The Old City of Fes (Morocco)",
    region: "North/West",
    form: "Cultural/Historical",
    index: 13,
    image: fes,
    booked: 0,
    price: 4000
  },
  {
    name: "Ancient Egypt Museums and Sites (Egypt)",
    region: "North/West",
    form: "Cultural/Historical",
    index: 14,
    image: giza,
    booked: 0,
    price: 5500
  },
  {
    name: "Kruger National Park (South Africa)",
    region: "South",
    form: "Nature/Safari",
    index: 15,
    image: kruger,
    booked: 0,
    price: 7500
  },
  {
    name: "Namib Desert (Namibia)",
    region: "South",
    form: "Nature/Safari",
    index: 16,
    image: namib,
    booked: 0,
    price: 5000
  },
  {
    name: "Durban & Capetown (South Africa)",
    region: "South",
    form: "Beach",
    index: 17,
    image: capetown,
    booked: 0,
    price: 9000
  },
  {
    name: "Sangano & Cabo Beaches (Angola)",
    region: "South",
    form: "Beach",
    index: 18,
    image: sangano,
    booked: 0,
    price: 5800
  },
  {
    name: "Human Evolution & Apartheid Museums (South Africa)",
    region: "South",
    form: "Cultural/Historical",
    index: 19,
    image: apartheid,
    booked: 0,
    price: 1000
  },
  {
    name: "Live with Botswana Bushmen (Botswana)",
    region: "South",
    form: "Cultural/Historical",
    index: 20,
    image: bushmen,
    booked: 0,
    price: 12000
  }
]

class App extends React.Component {
  constructor(){
    super();
  }

  updateBookingStatus = (trip) =>{
  
    if (trip.booked === 0){
        trip.booked = 1
    } else if(trip.booked ===1 ){
        trip.booked = 0;
    }
}

  render() {
    return (
      <div className="App">
        <FilteredList list={productList} bookFunc = {this.updateBookingStatus}/>
      </div>
    );
  }
}
export default App;
