import styled from 'styled-components';

// set the style of different components in the app
export const HomeWrapper = styled.div`
    overflow: hidden;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    width: 980px;
    margin: 0 auto;
    border: .5px solid #d6d6d6;
`;

export const Header = styled.div`
    width: 100%;
    background-color: #7433F1;
    height: 80px;
    .title {
        position: relative;
        margin: 0;
        text-align: center;
        line-height: 80px;
        color: white;
        font-weight: bold;
    }
`;

export const LeftWrapper = styled.div`
    width: 50%;
    height: 500px;
    float: left;
`;

export const RightWrapper = styled.div`
    width: 50%;
    background-color: #F3ECFE;
    height: 500px;
    float: right;
`;

export const SearchWrapper = styled.div`
    overflow: hidden;
    padding: 30px;
`;

export const SearchInput = styled.input`  
    height: 30px;
    float: left;
    width: 300px;
    border-radius: 2px;
    border: 1px solid grey;
    font-size: 12px;
    padding-left: 5px;
    padding-right: 5px;
`;

export const SearchButton = styled.div`
    float: right;
    height: 34px;
    background-color: #7433F1;
    width: 100px;
    margin-right: 0;
    border-radius: 2px;
    cursor: pointer;
    &:hover {
        background-color: #9f79f2;
    }
    p {
        color: white;
        font-size: 12px;
        line-height: 34px;
        text-align: center;
    }
`;

export const ListWrapper = styled.div`
    padding: 0 30px 0 30px;
    overflow: hidden;
`;

export const ResultTable = styled.table`
    border: 0;
    table-layout: fixed
    font-size: 10px;
    th {
        text-align: left;
        width: 200px;
        font-weight: bold;
        padding-bottom: 10px;
    }
    td {
        word-break: break-word;
        width: 200px;
        padding: 4px 4px 4px 0;
    }
    .add {
        width: 36px;
        color: #7433F1;
        text-decoration: underline;
        cursor: pointer;
        padding: 4px 0px 4px 0;
        &:hover {
            color: #9f79f2;
        }
    }
`;

export const FavoriteWrapper = styled.div`
    padding: 0 30px 0 30px;
    margin-top: 30px;
    overflow: hidden
`;

export const FavoriteTable = styled.table`
    border: 0;
    table-layout: fixed
    font-size: 10px;
    th {
        text-align: left;
        width: 200px;
        font-weight: bold;
        padding-bottom: 10px;
    }
    td {
        word-break: break-word;
        width: 200px;
        padding: 4px 4px 4px 0;
    }
    .remove {
        width: 84px;
        color: #7433F1;
        text-decoration: underline;
        cursor: pointer;
        padding: 4px 0px 4px 0;
        &:hover {
            color: #9f79f2;
        }
    }
`;