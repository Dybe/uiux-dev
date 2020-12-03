import React from 'react';
import './App.css';
import Button from 'react-bootstrap/Button'
import Alert from 'react-bootstrap/Alert'
import { useState } from "react";

// function AlertDismissibleExample() {
//     const [show, setShow] = useState(true);

//     if (show) {
//       return (
//         <Alert variant="danger" onClose={() => setShow(false)} dismissible>
//           <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
//           <p>
//             Change this and that and try again. Duis mollis, est non commodo
//             luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.
//             Cras mattis consectetur purus sit amet fermentum.
//           </p>
//         </Alert>
//       );
//     }
//     return <Button onClick={() => setShow(true)}>Show Alert</Button>;
//   }


class DisplayList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            action: "no trips"
        }
        this.BookedRef = React.createRef();

    }

    bookTrip = (trip) => {

        if (trip.booked === 1) {
            //show toast message, trip already booked
            alert("This trip is already in your bookings :)!")
        } else if (trip.booked === 0) {
            this.props.bookFunc(trip)
            this.setState({
                action: "a trip has been booked"
            });
            this.BookedRef.current.incrementTotal(trip)
            var name = trip.name
            alert(name + " will now be in your list of bookings!")
        }

    }
    //want to call isBooked before i update list
    //want to call isBooked before bookTrip
    unbookTripClick = (item) => {
        item.booked = 0;
        this.BookedRef.current.decrementTotal(item);
        this.setState({
            action: "unbooked trip"
        });

    }
    isBooked = item => {

        if (item.booked === 1) {
            console.log(item.name + "isBooked")
            return true;

        }
        return false;
    }
    render() {


        return <div className="itemLists">
            
            <div className="unbookedTrips">
            <div> <h4> Available Experiences Below. More comming soon!</h4></div>
                {this.props.list.map(item =>

                    <div className="ItemCard">
                        <div className="itemName">
                            {item.name}
                        </div>

                        <div className="ItemImage">
                            <img src={item.image} />
                        </div>

                        <div className="ItemInfo">
                            <div className="info">
                                {item.region}
                            </div>
                            <div className="info">
                                {item.form}
                            </div>

                            <div className="info" >
                                ${item.price}
                            </div>

                            <div className="info">
                                <Button onClick={() => this.bookTrip(item)} variant="primary" size="lg" active> Book </Button>
                            </div>
                        </div>

                    </div>


                )}

            </div>
            <div>
                <div> <h4> See Your Booked Experiences Below. We are Excited with you!</h4></div>
                <BookedList bookedTrips={this.props.allTrips.filter(this.isBooked)} ref={this.BookedRef} removeHandler={this.unbookTripClick} />
            </div>

        </div>

    }

}

class BookedList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

            total: 0
        };


    }

    incrementTotal = (item) => {

        this.setState((state) => {
            return { total: state.total + item.price }
        });
    }


    decrementTotal = (item) => {

        this.setState((state) => {
            return { total: state.total - item.price }
        });
    }

    //receive bookFunc as prop and update accordingly
    //remove booked item card from screen and decremenet total

    render() {
        return <div className="bookedCart" >
            <div className="bookedTrips">
                {this.props.bookedTrips.map(item =>

                    <div className="ItemCard">
                        <div className="itemName">
                            {item.name}
                        </div>

                        <div className="ItemImage">
                            <img src={item.image} />
                        </div>

                        <div className="ItemInfo">
                            <div className="info">
                                {item.region}
                            </div>
                            <div className="info">
                                {item.form}
                            </div>

                            <div className="info">
                                ${item.price}
                            </div>

                            <div className="info">
                                <Button onClick={() => this.props.removeHandler(item)} variant="primary" size="lg" active> Remove</Button>
                            </div>
                        </div>

                    </div>

                )}</div>
            <div className="total">
                {this.state.total > 0 &&

                    <h5>The Total Cost Will be ${this.state.total}. That's ${this.state.total * 0.3} cheaper than normal. Good deal!</h5>

                }
                {this.state.total === 0 &&

                    <h6> Oops! Looks like you dont have any bookings yet :(</h6>

                }

            </div>
        </div>
    }

}

export default DisplayList;