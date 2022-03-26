import React from 'react';
import Modal from 'react-modal';
import './Choose1Modal.css'

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };
  Modal.setAppElement('#root');
const Choose1Modal = (props) => {
  console.log(props)

    let subtitle;
    const [modalIsOpen, setIsOpen] = React.useState(false);
    function openModal() {
        setIsOpen(true);
      }
      function closeModal() {
        setIsOpen(false);
      }

      const a = () => {
        props.chooseOne()
        openModal()
      }
    return (
        <div>
            <button onClick={a} className='choose-one-for'>Open Modal</button>
      <Modal
        isOpen={modalIsOpen}
        // onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
          <h2 ref={(_subtitle) => (subtitle = _subtitle)}>{props.choose[0]?.name.split(' ')[0]}</h2>
        <button onClick={closeModal} className='close-btn'>close</button>
        <h3>You can choose it.</h3>
        <img src={props.choose[0]?.img} alt='' />
      </Modal>
        </div>
    );
};

export default Choose1Modal;