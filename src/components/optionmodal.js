import React from 'react'
import Modal from 'react-modal'

const OptionModal = (props) => (
        <Modal
        isOpen={ props.selectedOption}
        onRequestClose={props.modalClose}
        contentLabel="Selected option"
        >
            <h3>Selected option</h3>
            {props.selectedOption  && <p>{props.selectedOption}</p> }
            <button onClick={props.modalClose}>Okay</button>
        </Modal>

);


export default OptionModal;