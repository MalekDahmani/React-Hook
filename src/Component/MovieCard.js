import React from "react";
import { Card, Button } from "react-bootstrap";
import ReadMoreReact from "read-more-react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./MovieCard.css";

function MovieCard({ newMovie }) {
    return (
        <div>
            <Card
                className="movieCard"
                style={{
                    width: "18rem",
                    borderRadius: "10px",
                    background: "#277BC0",
                    height: "45rem",
                }}
            >
                <Card.Img
                    variant="top"
                    src={newMovie.PosterUrl}
                    alt="Movie poster"
                    width="150px"
                />
                <Card.Body>
                    <Card.Title style={{color:"#FFCB42",}}>{newMovie.Title}</Card.Title>
                    <Card.Text>
                        <ReadMoreReact
                            text={newMovie.Description}
                            min={80}
                            ideal={100}
                            max={120}
                            readMoreText="Read more"
                        />
                    </Card.Text>
                </Card.Body>
                 <h2 style={{color:"#FFF4CF"}}>Rating: {newMovie.Rating}</h2>
                <Card.Body>
                    <Button variant="warning">Watch Now</Button>
                </Card.Body>
            </Card>
        </div>
    );
}

export default MovieCard;