import styled from 'styled-components';
import media from '../../styles/media';

export const Container = styled.div`
    display: flex;
    flex-direction: column-reverse;
    justify-content: center;

    ${media.tablet`
        padding: 15px;
        gap: 25px;
	`};

    ${media.desktop`
        flex-direction: row;
        padding: 40px;
	`};
`;

export const GameStateContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    gap: 15px;

    ${media.tablet`
        flex-direction: row;
	`};

    ${media.desktop`
        flex-direction: column;
        width: 450px;
        flex: none;
	`};
`;

export const PlayersInfoWrapper = styled.div`
    display: flex;
    > * {
        flex: 1;
    }

    ${media.tablet`
        width: 280px;
	`};

    ${media.desktop`
        width: 100%;
	`};
`;

export const ShipList = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    height: 200px;

    > * {
        flex: none;
        width: 50%;
    }

    ${media.desktop`
        flex-wrap: nowrap;
        margin-top: 30px;
        height: initial;
        gap: 15px;

        > * {
            width: 100%;
        }
	`};
`;

export const BoardWrapper = styled.div`
    width: 100%;
    flex: none;

    ${media.desktop`
        width: 700px;
	`};
`;

export const FullSizeOverlay = styled.div`
    position: fixed;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(255, 255, 255, 0.8);
    z-index: 999;
`;

export const FinishText = styled.div`
    font-size: 60px;
    fon-weight: 700;
`;
