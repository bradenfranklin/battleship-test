import Board from '../Board';
import PlayerInfo from '../PlayerInfo';
import ShipInfo from '../ShipInfo';
import { useCoreManager } from '../../libs/core';
import {
    Container,
    GameStateContainer,
    BoardWrapper,
    PlayersInfoWrapper,
    ShipList,
    FullSizeOverlay,
    FinishText,
} from './styled';

export default function HomeScreen() {
    const { myScore, isGameOver, ships, shoots, hits, shoot } = useCoreManager();

    return (
        <Container>
            <GameStateContainer>
                <PlayersInfoWrapper>
                    <PlayerInfo name="player 1" color="#FFAF2F" score={myScore} />
                    <PlayerInfo name="player 2" color="#00B9A2" score={0} />
                </PlayersInfoWrapper>
                <ShipList>
                    {ships.map((ship, idx) => <ShipInfo key={idx} data={ship} />)}
                </ShipList>
            </GameStateContainer>
            <BoardWrapper>
                <Board hits={hits} shoots={shoots} onShoot={shoot} />
            </BoardWrapper>
            {isGameOver && (
                <FullSizeOverlay>
                    <FinishText>Finished</FinishText>
                </FullSizeOverlay>
            )}
        </Container>
    );
}
