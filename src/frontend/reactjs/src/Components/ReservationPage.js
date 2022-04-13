import React from 'react'
import './ReservationPage.css';
import Header from './Header';
import Footer from './Footer';
import hotel from './hotel.jpg'
import room from './room.jpg'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';


const ReservationPage = () => {
  return (
    <div className='div'>
        <Header/>
        <div className='Box'>
        {/* <button type = "submit" class = "button1" onClick={"/searchpage"}><Link to="/searchpage">Back</Link></button> */}
        <img className ="hotel1"src={hotel}></img>
        <div className='title'>
        <h1 className='Reservation-name'>Example Hotel</h1>
        <h3 className='address'>1234 Sample Street, City, State, Country</h3>
        <h3 className='rating'>Rating: 5/5</h3>
        </div>
        <div className='flex'>
          <div className='flex1'>
          <img className ="room"src={room}></img>
          <h3 className='roomTitle'>Hotel Room 1</h3>
          <ul className='list'>
                <li>1 King Bed</li>
                <li>Sleeps 4</li>
                <li>19 sq m</li>
                <li>Free Wifi</li>
                <button type = "submit" class = "button1" onClick={"/searchpage"}><Link to="/searchpage">Book Now</Link></button>
            </ul>
          </div>
          <div className='flex2'>
          <img className ="room"src={room}></img>
          <h3 className='roomTitle'>Hotel Room 2</h3>
          <ul className='list'>
                <li>1 King Bed</li>
                <li>Sleeps 4</li>
                <li>19 sq m</li>
                <li>Free Wifi</li>
                <button type = "submit" class = "button1" onClick={"/searchpage"}><Link to="/searchpage">Book Now</Link></button>
            </ul>
          </div>
          <div className='flex3'>
          <img className ="room"src={room}></img>
          <h3 className='roomTitle'>Hotel Room 3</h3>
          <ul className='list'>
                <li>1 King Bed</li>
                <li>Sleeps 4</li>
                <li>19 sq m</li>
                <li>Free Wifi</li>
                <button type = "submit" class = "button1" onClick={"/searchpage"}><Link to="/searchpage">Book Now</Link></button>
            </ul>
          </div>
          </div>
        </div>
        {/* <Footer/> */}
    </div>
  )
}

export default ReservationPage