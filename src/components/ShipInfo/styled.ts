import styled from 'styled-components';
import media from '../../styles/media';

export const Container = styled.div`
    display: flex;
    align-items: center;
`;

export const ShipImage = styled.img`
    flex: none;
    width: 50%;
    height: 60px;
    object-fit: contain;
`;

export const HitStatusContainer = styled.div`
    flex: none;
    width: 50%;
    display: flex;
`;

export const Dot = styled.div`
    width: 20%;
    display: flex;
    justify-content: center;

    img {
        width: 15px;
        height: 15px;
    }

    ${media.desktop`
        img {
            width: 30px;
            height: 30px;
        }
	`};
`;
