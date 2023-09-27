import { Container, ShipImage, HitStatusContainer, Dot } from './styled';
import HitSmallImg from '../../assets/HitSmall.png';
import MissSmallImg from '../../assets/MissSmall.png';
import { Ship } from '../../types';

interface ShipInfoProps {
    data: Ship;
}
export default function ShipInfo(props: ShipInfoProps) {
    const { data } = props;
    return (
        <Container>
            <ShipImage src={data.image} alt={`${data.ship} image`} />
            <HitStatusContainer>
                {new Array(5).fill(undefined).map((_, idx) => (
                    <Dot key={idx}>
                        {idx < data.size && idx < data.hitCount && <img src={HitSmallImg} />}
                        {idx < data.size && idx >= data.hitCount && <img src={MissSmallImg} />}
                    </Dot>
                ))}
            </HitStatusContainer>
        </Container>
    );
}
