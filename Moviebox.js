import React, { useState } from "react";
import { Button, Modal, ModalBody } from "react-bootstrap";
import "./Moviebox.css";

export default function Moviebox({
  title,
  poster_path,
  vote_average,
  release_date,
  overview,
}) {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  const API_IMG = "https://image.tmdb.org/t/p/w500/";
  return (
    <div className="backgr-image">
      <div className="card-body">
        <img className="movie-img" src={API_IMG + poster_path} />
        <div className="card-body">
          <button type="button" className="view-button" onClick={handleShow}>
            View More
          </button>
          <Modal show={show} onHide={handleClose}>
            <ModalBody>
              <img
                className="card-img-top"
                style={{ width: "14rem" }}
                src={API_IMG + poster_path}
              />
              <h3>{title}</h3>
              <h4>Imdb:{vote_average}</h4>
              <h5>Release Date:{release_date}</h5>
              <br />
              <br />
              <h6>Overview</h6>
              <p>{overview}</p>
            </ModalBody>
            <Modal.Footer>
              <Button varient="secondary" onClick={handleClose}>
                close
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
    </div>
  );
}
