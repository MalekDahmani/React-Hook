import React from "react";
import ReactStars from "react-rating-stars-component";
import { Navbar, Form, FormControl, Nav } from "react-bootstrap";

import "./Filter.css"


function NavBar({ setTitleSearch, setRateSearch, titleSearch }) {
    return (
        <div>
            <Navbar bg="" variant="dark" className="navMenu ">
                <Navbar.Brand href="#home">
                   
                </Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#Movies">Movies</Nav.Link>
                    <Nav.Link href="#TV Show">TV Show</Nav.Link>
                </Nav>

                <Form inline id="searchInput">
                    <FormControl
                        id="searchNav"
                        type="text"
                        placeholder="Search"
                        className="mr-sm-2"
                        value={titleSearch}
                        onChange={(event) => {
                            setTitleSearch(event.target.value);
                        }}
                    />
                    <ReactStars
                        
                        count={5}
                        onChange={setRateSearch}
                        size={24}
                        isHalf={true}
                        emptyIcon={<i className="far fa-star"></i>}
                        halfIcon={<i className="fa fa-star-half-alt"></i>}
                        fullIcon={<i className="fa fa-star"></i>}
                        activeColor="#ffd700"
                    />
                </Form>
            </Navbar>
        </div>
    );
}

export default NavBar;