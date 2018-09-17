import * as constants from './constants';
import axios from 'axios';

// get stored favorite repository information in localstorage and dispatch it to redux
export const renderFavoriteList = () => {
    return (dispatch) => {
        let list = []
        for(let i=0; i<localStorage.length;i++) {
            list.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
        }
        const action = storedData(list)
        dispatch(action)
    } 
};

export const handleInputChange = (inputValue) => ({
    type: constants.HANDLE_INPUT_CHANGE,
    inputValue
});

export const clearResults = () => ({
    type: constants.CLEAR_RESULTS
});

export const addToFavorite = (item) => ({
    type: constants.ADD_TO_FAVORITE,
    item
});

export const removeFromFavorites = (index) => ({
    type: constants.REMOVE_FROM_FAVORITES,
    index
});

// get repository information from Github
export const getRepos = (inputValue) => {
    return (dispatch) => {
        axios.get(`https://api.github.com/search/repositories?q=${inputValue}`, {headers: {Authorization: 'token 3b4ad68beae3a6b0cc99e7fa0305a16cab59511c'}}).then((res) => {
            const result = res.data.items;
            getReposTag(result).then(reposTag => {
                let n = result.length > 10 ? 10 : result.length
                for (let i = 0; i < n; i++) {
                    result[i]['latestTag'] = reposTag[result[i].id]
                }
                const action = getReposInfo(result);
                dispatch(action);
            })
        }).catch((error) => {
            console.log(error)
        })
    }
};

const getReposInfo = (result) => ({
    type: constants.GET_REPO_INFO,
    result
})

const storedData = (list) => ({
    type: constants.GET_STORED_DATA,
    list
})

// get latest tag of each repository obtained from Github
const getReposTag = (result) => {
    let requestList = []
    let n = result.length > 10 ? 10 : result.length
    if (n === 0) {
        return {}
    }
    for (let i = 0; i < n; i++) {
        requestList.push(axios.get(result[i].tags_url))
     }
    return axios.all(requestList, {headers: {Authorization: 'token 3b4ad68beae3a6b0cc99e7fa0305a16cab59511c'}}).then((res) => {
        let reposTag = {}
        for (let i = 0; i < n; i++) {
            let id = result[i].id
            if (res[i].data.length > 0) {
                reposTag[id] = res[i].data[0].name
            } else {
                reposTag[id] = '-'
            }
        }
        return reposTag
    }).catch((error) => {
        console.log(error)
    })
}