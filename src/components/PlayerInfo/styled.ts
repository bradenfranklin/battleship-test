import styled from 'styled-components';
import media from '../../styles/media';

export const Container = styled.div<{ bgColor: string }>`
    text-align: center;
    padding: 0 30px;
    color: #494949;
    ${({ bgColor }) => `background: ${bgColor};`}

    ${media.tablet`
        padding: 0 15px;
	`};

    ${media.desktop`
        padding: 0 15px;
	`};
`;

export const ScoreText = styled.div`
    font-size: 36px;
    font-weight: 700;
    padding: 16px 0;
    border-bottom: 1px solid grey;

    ${media.desktop`
        font-size: 54px;
        padding: 25px 0;
	`};
`;

export const NameText = styled.div`
    font-size: 26px;

    ${media.desktop`
        font-size: 40px;
        padding: 15px 0;
	`};
`;
