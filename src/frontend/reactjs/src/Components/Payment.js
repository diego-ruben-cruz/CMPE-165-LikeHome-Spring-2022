
import './Payment.css';
import React, { Component } from "react";
import Header from './Header';
import Footer from './Footer';
//import { render } from 'react-dom';

function Payment() {

    return(    
        <login>
           <Header>
            </Header> 
            
        <body>
            <div class ="row">
                <div class = "col-75">
                
                    <div class = "container">
                        <div className='Payment'>
                            <h1>Payment</h1>
                        </div>
                    <form>
                        <div class = "row">
                            <div class = "col-50">
                               
                                <h3>Billing Address</h3>
                                    <label for="fname"><i class="fa fa-user"></i> Full Name</label>
                                    <input className = "paymentInput" type="text" id="fname" placeholder="Code Monkeys"/>
                                    <label for="email"><i class="fa fa-envelope"></i> Email</label>
                                    <input className = "paymentInput" type="text" id="email" name="email" placeholder="CodeMonkeys@sjsu.edu"/>
                                    <label for="adr"><i class="fa fa-address-card-o"></i> Address</label>
                                    <input className = "paymentInput" type="text" id="adr" name="address" placeholder="727 N. 10th Street"/>
                                    <label for="city"><i class="fa fa-institution"></i> City</label>
                                    <input className = "paymentInput" type="text" id="city" name="city" placeholder="San Jose"></input>

                                <div class="row">
                                    <div class="col-50">
                                        <label for="state">State</label>
                                        <input className = "paymentInput" type="text" id="state" name="state" placeholder="CA"/>
                                    </div>
                                    <div class="col-50">
                                        <label for="zip">Zip</label>
                                        <input className = "paymentInput" type="text" id="zip" name="zip" placeholder="6969"/>
                                    </div>
                                </div>

                                <div class="col-50">
                                    <h3>Payment</h3>
                                    <label for="cname">Name on Card</label>
                                    <input className = "paymentInput" type="text" id="cname" name="cardname" placeholder="CodeMonkey Next Door"/>
                                    <label for="ccnum">Credit card number</label>
                                    <input className = "paymentInput" type="text" id="ccnum" name="cardnumber" placeholder="1337-7272-1010-6666"/>
                                    <label for="expmonth">Exp Month</label>
                                    <input className = "paymentInput" type="text" id="expmonth" name="expmonth" placeholder="Feburary"/>

                                <div class="row">
                                    <div class="col-50">
                                        <label for="expyear">Exp Year</label>
                                        <input className = "paymentInput" type="text" id="expyear" name="expyear" placeholder="2023"/>
                                    </div>
                                    <div class="col-50">
                                        <label for="cvv">CVV</label>
                                        <input className = "paymentInput" type="text" id="cvv" name="cvv" placeholder="123"/>
                                    </div>
                                </div>
                            </div>
                                
                                <input type="checkbox" checked="checked" name="sameadr"/> Shipping address same as billing 


                            



                            </div>
                        </div>
                        </form>
                    </div>
                    

                </div>
            </div>
        </body>

                
            

        
        <Footer>
            </Footer> 
        </login>
    );
}

export default Payment;