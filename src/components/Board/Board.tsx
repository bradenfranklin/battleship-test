import { Container, BoardRow, BoardCell } from './styled';
import { Point } from '../../types';
import hitImage from '../../assets/Hit.png';
import missImg from '../../assets/Miss.png';

interface BoardProps {
    hits: Point[];
    shoots: Point[];
    onShoot: (point: Point) => void;
}
export default function Board(props: BoardProps) {
    const { hits, shoots, onShoot } = props;
    return (
        <Container>
            {new Array(10).fill(undefined).map((_, y) => (
                <BoardRow key={y}>
                    {new Array(10).fill(undefined).map((_, x) => (
                        <BoardCell key={x} onClick={() => onShoot([x, y])}>
                            {hits.some((e) => e[0] === x && e[1] === y) && <img src={hitImage} />}
                            {shoots.some((e) => e[0] === x && e[1] === y) && !hits.some((e) => e[0] === x && e[1] === y) && <img src={missImg} />}
                        </BoardCell>
                    ))}
                </BoardRow>
            ))}
        </Container>
    );
}
