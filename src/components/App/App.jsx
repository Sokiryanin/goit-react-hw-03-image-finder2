import { Component } from 'react';
import { Button } from 'components/Button/Button';
import { Searchbar } from 'components/Searchbar/Searchbar';
import { GallerySkeleton } from 'components/Loader/Loader';
import { Container } from './App.styled';
import { fetchImages } from 'services/api';
import toast, { Toaster } from 'react-hot-toast';
import { Gallery } from 'components/ImageGallery/ImageGallery';

export class App extends Component {
  state = {
    searchQuery: '',
    images: [],
    page: 1,
    isLoading: false,
  };

  async componentDidUpdate(_, prevState) {
    const { searchQuery, page } = this.state;

    if (prevState.searchQuery !== searchQuery || prevState.page !== page) {
      try {
        if (searchQuery !== '') {
          this.setState({
            isLoading: true,
          });
          const searchImages = await fetchImages(searchQuery, page);
          if (searchImages.length === 0) {
            console.log('hi');
            toast.error(
              `Sorry, there are no images for your search query: ${searchQuery}! Please, change your request. `
            );
          }
          this.setState(({ images }) => {
            return {
              images: [...images, ...searchImages],
            };
          });
        }
      } catch (error) {
        toast.error('Something went wrong');
      } finally {
        this.setState({ isLoading: false });
      }
    }
  }

  loadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  handleSearchSubmit = searchQuery => {
    this.setState({
      images: [],
      page: 1,
      searchQuery,
    });
  };

  render() {
    const { images, isLoading } = this.state;
    return (
      <Container>
        <Searchbar onSubmit={this.handleSearchSubmit} />
        {isLoading && <GallerySkeleton />}
        {images.length > 0 && <Gallery images={images} />}
        {images.length > 0 && <Button onClick={this.loadMore} />}
        <Toaster position="top-right" />
      </Container>
    );
  }
}
