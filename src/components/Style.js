import styled from 'styled-components';

// set the style of different components in the app
export const HomeWrapper = styled.div`
    overflow: hidden;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    width: 800px;
    margin: 0 auto;
    border: .5px solid #d6d6d6;
`;

export const Header = styled.div`
    width: 100%;
    background-color: #7433F1;
    height: 70px;
    .title {
        position: relative;
        margin: 0;
        text-align: center;
        line-height: 70px;
        color: white;
        font-weight: bold;
    }
`;

export const LeftWrapper = styled.div`
    width: 50%;
    height: 400px;
    float: left;
`;

export const RightWrapper = styled.div`
    width: 50%;
    background-color: #F3ECFE;
    height: 400px;
    float: right;
`;

export const SearchWrapper = styled.div`
    overflow: hidden;
    padding: 20px;
`;

export const SearchInput = styled.input`  
    height: 24px;
    float: left;
    width: 250px;
    border-radius: 2px;
    border: 1px solid grey;
    font-size: 12px;
    padding-left: 5px;
    padding-right: 5px;
`;

export const SearchButton = styled.div`
    float: right;
    height: 28px;
    background-color: #7433F1;
    width: 85px;
    margin-right: 0;
    border-radius: 2px;
    cursor: pointer;
    &:hover {
        background-color: #9f79f2;
    }
    p {
        color: white;
        font-size: 10px;
        line-height: 28px;
        text-align: center;
    }
`;

export const ListWrapper = styled.div`
    padding: 0 20px 0 20px;
    overflow: hidden;
`;

export const ResultTable = styled.table`
    border: 0;
    table-layout: fixed
    font-size: 9px;
    th {
        text-align: left;
        width: 200px;
        font-weight: bold;
        padding-bottom: 10px;
    }
    td {
        word-break: break-word;
        width: 200px;
        padding: 3px 3px 3px 0;
    }
    .add {
        width: 36px;
        color: #7433F1;
        text-decoration: underline;
        cursor: pointer;
        padding: 3px 0px 3px 0;
    }
`;

export const FavoriteWrapper = styled.div`
    padding: 0 20px 0 20px;
    margin-top: 20px;
    overflow: hidden
`;

export const FavoriteTable = styled.table`
    border: 0;
    table-layout: fixed
    font-size: 9px;
    th {
        text-align: left;
        width: 200px;
        font-weight: bold;
        padding-bottom: 10px;
    }
    td {
        word-break: break-word;
        width: 200px;
        padding: 3px 3px 3px 0;
    }
    .remove {
        width: 80px;
        color: #7433F1;
        text-decoration: underline;
        cursor: pointer;
        padding: 3px 0px 3px 0;
    }
`;