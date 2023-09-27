import styled from 'styled-components';

export const Container = styled.div`
    border: 10px solid #FFAF2F;
`;

export const BoardRow = styled.div`
    display: flex;
`;

export const BoardCell = styled.div`
    position: relative;
    flex: none;
    border: 1px solid #999999;
    width: 10%;
    cursor: pointer;

    &:before {
        content: '';
        display: block;
        padding-bottom: 100%;
    }

    img {
        position: absolute;
        left: -1px;
        top: -1px;
        width: calc(100% + 2px);
        height: calc(100% + 2px);
    }
`;
