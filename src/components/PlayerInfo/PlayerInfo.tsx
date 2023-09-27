import { Container, ScoreText, NameText } from './styled';

const formatNumber = (value: number) => value.toLocaleString('en-US', {
    minimumIntegerDigits: 2,
    useGrouping: false
});

interface PlayerInfoProps {
    score: number;
    name: string;
    color: string;
}
export default function PlayerInfo(props: PlayerInfoProps) {
    const { score, name, color } = props;
    return (
        <Container bgColor={color}>
            <ScoreText>{formatNumber(score)}</ScoreText>
            <NameText>{name}</NameText>
        </Container>
    );
}
