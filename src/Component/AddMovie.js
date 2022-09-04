import React, { useState } from "react";
import { FormControl, Modal, Button, Form } from "react-bootstrap";
import "./AddMovie.css";

function AddMovie({ newMovie, setNewMovie, newMovieData, setNewMovieData }) {
    const [show, setShow] = useState(false);

    const handleSave = () => {
        if (
            newMovieData.Title !== "" &&
            newMovieData.Description !== "" &&
            newMovieData.PosterUrl !== "" &&
            newMovieData.Rating !== 0
        ) {
            setNewMovie([...newMovie, newMovieData]);
            setNewMovieData({
                Title: "",
                Description: "",
                PosterUrl: "",
                Rating: 0,
            });

            setShow(false);
        } else {
            alert("All fields are mandatory");
        }
        
    };
    const handleClose = () => {
        setShow(false);
        setNewMovieData({
            Title: "",
            Description: "",
            PosterUrl: "",
            Rating: 0,
        });
    };
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="secondary" onClick={handleShow}>
                <img
                    style={{ cursor: "pointer" }}
                    src="https://icons.iconarchive.com/icons/visualpharm/must-have/256/Add-icon.png"
                    width="250px"
                    height="200px"
                    alt="Add movie"
                />{" "}
                <p>Add a movie</p>
            </Button>

            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Add a new movie</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <FormControl
                            type="text"
                            placeholder="Enter the title"
                            className="Input"
                            name="Title"
                            onChange={(e) => {
                                setNewMovieData({
                                    ...newMovieData,
                                    [e.target.name]: e.target.value,
                                });
                            }}
                        />
                        <FormControl
                            as="textArea"
                            type="text"
                            placeholder="Enter the description..."
                            className="Input"
                            name="Description"
                            onChange={(e) => {
                                setNewMovieData({
                                    ...newMovieData,
                                    [e.target.name]: e.target.value,
                                });
                            }}
                        />
                        <FormControl
                            type="text"
                            placeholder="Enter movie posterURL"
                            className="Input"
                            name="PosterUrl"
                            onChange={(e) => {
                                setNewMovieData({
                                    ...newMovieData,
                                    [e.target.name]: e.target.value,
                                });
                            }}
                        />
                        <FormControl
                            type="number"
                            max="5"
                            min="1"
                            placeholder="Enter the rating"
                            className="Input"
                            name="Rating"
                            onChange={(e) => {
                                setNewMovieData({
                                    ...newMovieData,
                                    [e.target.name]: parseInt(e.target.value),
                                });
                            }}
                        />
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleSave}>
                        Save 
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default AddMovie;