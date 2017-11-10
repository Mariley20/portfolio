import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Button,Modal, ModalHeader, ModalBody, ModalFooter, ModalTitle} from 'react-bootstrap';
import './css/app.css';
import { closeModal, showModal } from './actions';
export const ModalSpotify = ({show}) => {
	
//     getInitialState() {
//     return { show: false };
//   }
//     render () {
//          let close = () => this.setState({ show: false });

    return (
      <div className="modal-container" style={{ height: 200 }}>
        <Button
          bsStyle="primary"
          bsSize="large"
          onClick={showModal}
          /* onClick={() => this.setState({ show: true })} */
        >
          Launch contained modal+ {show}
        </Button>

        <Modal
          show={show}
          onHide={closeModal}
          aria-labelledby="contained-modal-title"
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title">Contained Modal</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Elit est explicabo ipsum eaque dolorem blanditiis doloribus sed id ipsam, beatae, rem fuga id earum? Inventore et facilis obcaecati.
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={closeModal}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
    // }
}