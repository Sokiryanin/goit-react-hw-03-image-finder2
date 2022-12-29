import { Component } from 'react';
import { ModalGallery } from '../Modal/Modal';
import { GalleryItem, GalleryImg } from './ImageGalleryItem.styled';
import PropTypes from 'prop-types';

export class ImageGalleryItem extends Component {
  state = {
    isOpen: false,
  };

  static propTypes = {
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
  };

  toggleModal = () => {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen,
    }));
  };

  render() {
    const { webformatURL, largeImageURL, tags } = this.props;
    return (
      <GalleryItem>
        <GalleryImg
          src={webformatURL}
          width="200"
          alt={tags}
          onClick={this.toggleModal}
        />
        {this.state.isOpen && (
          <ModalGallery
            url={largeImageURL}
            description={tags}
            modalIsOpen={this.state.isOpen}
            closeModal={this.toggleModal}
          />
        )}
      </GalleryItem>
    );
  }
}
