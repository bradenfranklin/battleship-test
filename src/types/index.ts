export type Point = [number, number]; // [x, y]

export type ShipType = 'carrier' | 'battleship' | 'cruiser' | 'destroyer' | 'submarine';

export type Ship = {
    ship: ShipType;
    positions: Point[];
    image: string;
    size: number;
    hitCount: number;
};
