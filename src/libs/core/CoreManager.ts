import React from 'react';
import { Point, Ship } from '../../types';

interface ICoreManagerContext {
    myScore: number;
    ships: Ship[];
    isGameOver: boolean;
    shoots: Point[];
    hits: Point[];
    shoot: (point: Point) => void;
}
export const CoreManagerContext = React.createContext<ICoreManagerContext>({
    myScore: 0,
    ships: [],
    isGameOver: false,
    shoots: [],
    hits: [],
    shoot: () => {},
});

// custom hook
export const useCoreManager = () => React.useContext(CoreManagerContext);
