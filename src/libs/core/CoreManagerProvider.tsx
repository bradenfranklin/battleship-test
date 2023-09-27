import React, { useState, useCallback, useMemo } from 'react';
import { CoreManagerContext } from './CoreManager';
import { Point, ShipType } from '../../types';
import battleshipImg from '../../assets/BattleshipShape.png';
import carrierImg from '../../assets/CarrierShape.png';
import cruiserImg from '../../assets/CruiserShape.png';
import destroyerImg from '../../assets/DestroyerShape.png';
import submarineImg from '../../assets/SubmarineShape.png';


const shipImages: { [key in ShipType]: string }  = {
    carrier: carrierImg,
    battleship: battleshipImg,
    cruiser: cruiserImg,
    destroyer: destroyerImg,
    submarine: submarineImg,
};

// wrapper for the provider
export interface CoreManagerProviderProps {
    data: {
        shipTypes: {
            [key in ShipType]: {
                size: number;
                count: number;
            };
        };
        layout: {
            ship: ShipType;
            positions: Point[];
        }[];
    };
}
export default function CoreManagerProvider({ data, children }: React.PropsWithChildren<CoreManagerProviderProps>) {
    const [shoots, setShoots] = useState<Point[]>([]);

    const shoot = useCallback((point: Point) => {
        setShoots((current) => {
            if (current.some((e) => e[0] === point[0] && e[1] === point[1])) {
                return current;
            }
            return [...current, point];
        });
    }, []);

    const ships = useMemo(() => {
        return data.layout.map((e) => ({
            ...e,
            image: shipImages[e.ship],
            size: data.shipTypes[e.ship].size,
            hitCount: e.positions.filter((position) => shoots.some((shoot) => position[0] === shoot[0] && position[1] === shoot[1])).length,
        }));
    }, [data, shoots]);

    const hits = useMemo(() => {
        return shoots.filter((shoot) => ships.some((ship) => ship.positions.some((pos) => pos[0] === shoot[0] && pos[1] === shoot[1])));
    }, [shoots, ships]);

    const isGameOver = useMemo(() => {
        return ships.every((e) => e.size === e.hitCount);
    }, [ships]);

    const value = useMemo(
        () => ({
            myScore: hits.length,
            isGameOver,
            ships,
            shoots,
            hits,
            shoot,
        }),
        [ships, isGameOver, hits, shoots, shoot]
    );

    return (
        <CoreManagerContext.Provider value={value}>
            {children}
        </CoreManagerContext.Provider>
    );
}
