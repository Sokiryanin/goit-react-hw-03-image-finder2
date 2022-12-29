import Modal from 'react-modal';
import { BigImage, modalStyle } from './Modal.styled';
import PropTypes from 'prop-types';

Modal.setAppElement('#root');

export const ModalGallery = ({ url, description, modalIsOpen, closeModal }) => {
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={() => closeModal()}
      style={modalStyle}
    >
      <BigImage src={url} alt={description} />
    </Modal>
  );
};

ModalGallery.propTypes = {
  url: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  modalIsOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
};
