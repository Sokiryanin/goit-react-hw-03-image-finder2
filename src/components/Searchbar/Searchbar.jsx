import { Component } from 'react';
import {
  Header,
  SearchForm,
  SearchFormBtn,
  SearchBtnText,
  SearchLabel,
  SearchInput,
} from './Searchbar.styled';

export class Searchbar extends Component {
  state = {};
  render() {
    return (
      <Header>
        <SearchForm>
          <SearchFormBtn type="submit">
            <SearchBtnText>Search</SearchBtnText>
          </SearchFormBtn>
          <SearchLabel></SearchLabel>
          <SearchInput
            type="text"
            autocomplete="off"
            placeholder="Search images and photos"
          />
        </SearchForm>
      </Header>
    );
  }
}
