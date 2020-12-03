import React from 'react';
import DisplayList from './DisplayList'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './App.css';

var lowest = 0;
class FilteredList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            region: "All",
            form: "All",
            order: "random"
        };
    }
    onSelectFilterSize = event => {
        this.setState({
            region: event
        })
    };

    matchesFilterSizeAndForm = item => {
        //filters
        if (this.state.region === "All") {
            if (this.state.form === "All") {
                return true
            } else if (this.state.form === item.form) {
                return true
            } else {
                return false
            }
        } else if (this.state.region === item.region) {
            if (this.state.form === "All") {
                return true
            } else if (this.state.form === item.form) {
                return true
            } else {
                return false
            }
        } else {
            return false
        }
    }



    onSelectFilterForm = event => {
        this.setState({
            form: event
        })
       

    };

    arrangeItems = event => {
        if (event === "lowest") {
            this.setState({
                order: event
            })
            lowest = true;
        } else if (event === "highest") {
            this.setState({
                order:
                    event
            })
            lowest = false;
        } else if (event === "random") {
            this.setState({
                order:
                    event
            })
            lowest = 0
        }
    };



    render() {


        return <div className="home">
            <div className="title"> <h1> Popular African Tourism Experiences</h1>
                <h3>There's Plenty! Scroll To See All :)</h3>

            </div>
            <div >
                <Navbar className="filterbar">
                    <Nav.Item > <Nav.Link className="barItem" eventKey="All" onSelect={this.onSelectFilterSize}>All Regions</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link className="barItem" eventKey="East" onSelect={this.onSelectFilterSize}>Eastern Africa</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link className="barItem" eventKey="South" onSelect={this.onSelectFilterSize}>Southern Africa</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link className="barItem" eventKey="North/West" onSelect={this.onSelectFilterSize}>Northern and Western Africa</Nav.Link></Nav.Item>
                </Navbar>
            </div>
            <div className="filterbar" >
                <Navbar className="filterbar">
                    <Nav.Item><Nav.Link className="barItem" eventKey="All" onSelect={this.onSelectFilterForm}>All Experiences </Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link className="barItem" eventKey="Nature/Safari" onSelect={this.onSelectFilterForm}> Nature and Safari Experiences</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link className="barItem" eventKey="Beach" onSelect={this.onSelectFilterForm}>Beach Experiences </Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link className="barItem" eventKey="Cultural/Historical" onSelect={this.onSelectFilterForm}>Culture and History Experiences </Nav.Link></Nav.Item>
                </Navbar>
            </div>
            <div className="filterbar">
                <Navbar className="filterbar">
                    <Nav.Item><Nav.Link className="barItem" eventKey="random" onSelect={this.arrangeItems}> See in Original Order </Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link className="barItem" eventKey="lowest" onSelect={this.arrangeItems}> On a Budget?  See Cheapest First </Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link className="barItem" eventKey="highest" onSelect={this.arrangeItems}> Looking to Treat Yourself?  See Most Lavish First </Nav.Link></Nav.Item>
                </Navbar>
            </div>
            {this.state.form != "All" &&

                <h3> You are Now Viewing Your Bookings And Our {this.state.form} Experiences in {this.state.region} of Africa</h3>
            }
            {this.state.form === "All" &&

                <h3> You are Currently Viewing Our Experiences in {this.state.region} of Africa and Your Bookings</h3>
            }
            <DisplayList allTrips = {this.props.list} list={this.props.list.filter(this.matchesFilterSizeAndForm).sort(function (a, b) {
                if (lowest === false) {
                    return parseInt(b.price) - parseInt(a.price)

                } else if (lowest === true) {
                    return parseInt(a.price) - parseInt(b.price)
                }
                else if (lowest === 0) {
                    return a.name - b.name
                }
            }
            )} bookFunc={this.props.bookFunc} />
        </div>
    }
}

export default FilteredList;