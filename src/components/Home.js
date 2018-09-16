import React, { Component } from 'react';
import SearchResults from './SearchResults';
import Favorites from './Favorites';
import { connect } from 'react-redux';
import * as actionCreators from '../store/actionCreators'; 
import { 
    HomeWrapper, 
    Header, 
    LeftWrapper,
    RightWrapper,
    SearchWrapper,
    SearchInput,
    SearchButton
    } from './Style';

// Home component which is used to finished the layout of the app
class Home extends Component {
    render() {
        const { inputValue, handleInputChange, getRepos, handleKeydown } = this.props
        return (
            <HomeWrapper>
                <Header>
                    <h3 className='title'>My Github Favorites</h3>
                </Header>
                <LeftWrapper>
                    <SearchWrapper>
                        {/* define the search component */}
                        <SearchInput value={inputValue} onChange={handleInputChange} onKeyDown={(event) => {handleKeydown(event, inputValue)}}/>
                        <SearchButton onClick={() => getRepos(inputValue)}>
                            <p>Search</p>
                        </SearchButton>
                    </SearchWrapper>
                    <SearchResults />
                </LeftWrapper>
                <RightWrapper>
                    <Favorites></Favorites>
                </RightWrapper>
            </HomeWrapper>
        )
    }
}

const mapState = (state) => ({
    inputValue: state.get('inputValue')
})

const mapDispatch = (dispatch) => ({
    // change the value in the search box. 
    // when the search input field is cleared, clear the list of results
    handleInputChange(event) {
        const action = actionCreators.handleInputChange(event.target.value)
        dispatch(action)
        if (event.target.value === '') {
            const action = actionCreators.clearResults()
            dispatch(action)
        }
    },

    // get repository infromation from Github when click
    getRepos(inputValue) {
        if (inputValue !== '') {
            const action = actionCreators.getRepos(inputValue)
            dispatch(action)
        }
    },

    // get repository infromation from Github when hitting enter
    handleKeydown(event, inputValue) {
        if (event.keyCode === 13 && inputValue !== '') {
            const action = actionCreators.getRepos(inputValue)
            dispatch(action)
        }
    }
})

export default connect(mapState, mapDispatch)(Home);