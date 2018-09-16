import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../store/actionCreators'; 
import { 
    FavoriteWrapper,
    FavoriteTable,
    } from './Style';

// Favorites component which is used to render the list of favorite repository 
class Favorites extends Component {
    render() {
        const { favoriteList, removeFromFavorites } = this.props
        return (
            <FavoriteWrapper>
                <FavoriteTable >
                    <tbody>
                        <tr>
                            <th>Name</th>
                            <th>Language</th>
                            <th>Latest tag</th>
                        </tr>
                    </tbody>
                    {/* render favorite repository information*/}
                    {
                        favoriteList.map((item, index) => {
                            return (
                                <tbody key={index}>
                                    <tr>
                                        <td>{item.get('full_name')}</td>
                                        <td>{item.get('language')}</td>
                                        <td>{item.get('latestTag')}</td>
                                        <td className='remove' onClick={() => removeFromFavorites(index, item)}>Remove</td>
                                    </tr>
                                </tbody>
                            )
                        })
                    }
                    
                    </FavoriteTable>
            </FavoriteWrapper>
        )
    }
    
    // render favorite list if there is saved information in localstorage
    componentDidMount() {
        this.props.renderFavoriteList()
    }
}

const mapState = (state) => ({
    favoriteList: state.get('favorites')
})

const mapDispatch = (dispatch) => ({
    renderFavoriteList() {
        const action = actionCreators.renderFavoriteList()
        dispatch(action)
    },
    
    // remove favorite repository infromation from favorite list and localstorage
    removeFromFavorites(index, item) {
        localStorage.removeItem(item.get('id'))
        const action = actionCreators.removeFromFavorites(index)
        dispatch(action)
    }
})

export default connect(mapState, mapDispatch)(Favorites);