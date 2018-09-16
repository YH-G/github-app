import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../store/actionCreators'; 
import { 
    ListWrapper,
    ResultTable
    } from './Style';

// SearchResults component which is used to render the list of obtained repository information 
class SearchResults extends Component {
    render() {
        const { resultsList, addToFavorite } = this.props
        return (
            <ListWrapper>
                <ResultTable >
                    <tbody>
                        <tr>
                            <th>Name</th>
                            <th>Language</th>
                            <th>Latest tag</th>
                        </tr>
                    </tbody>
                    {/* render repository information obtained from Github*/}
                    {
                        resultsList.map((item, index) => {
                            return (
                                <tbody key={index}>
                                    <tr>
                                        <td>{item.get('full_name')}</td>
                                        <td>{item.get('language')}</td>
                                        <td>{item.get('latestTag')}</td>
                                        {
                                            this.checkItem(item) ? null : 
                                            <td className='add' onClick={() => addToFavorite(item)}>Add</td>
                                        }
                                    </tr>
                                </tbody>
                            )
                        })
                    }
                    </ResultTable>
            </ListWrapper>
        )
    }

    // determine whether to display add button of each repository item
    checkItem(item) {
        const { favoriteList } = this.props
        const newFavoriteList = favoriteList.toJS()
        for (let i in newFavoriteList) {
            if (newFavoriteList[i].id === item.get('id')){
                return true
            }
        }
        return false
    }
    
}

const mapState = (state) => ({
    resultsList: state.get('searchResults'),
    favoriteList: state.get('favorites'),
})

const mapDispatch = (dispatch) => ({
    // add repository to favoritelist and save it into localstorage
    addToFavorite(item) {
        localStorage.setItem(item.get('id'), JSON.stringify(item))
        const action = actionCreators.addToFavorite(item)
        dispatch(action)
    }
})

export default connect(mapState, mapDispatch)(SearchResults);