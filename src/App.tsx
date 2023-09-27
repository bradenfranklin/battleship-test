import HomeScreen from './components/HomeScreen';
import { CoreManagerProvider, CoreManagerProviderProps } from './libs/core';
import { Point } from './types';
import GlobalStyle from './globalStyle';

const sampleData: CoreManagerProviderProps['data'] = {
    "shipTypes": {
        "carrier": { "size": 5, "count": 1 },
        "battleship": { "size": 4, "count": 1 },
        "cruiser": { "size": 3, "count": 1 },
        "destroyer": { "size": 2, "count": 1 },
        "submarine": { "size": 3, "count": 1 }
    },
    "layout": [
        {
            "ship": "carrier",
            "positions": [[2,9] as Point, [3,9] as Point, [4,9] as Point, [5,9] as Point, [6,9] as Point]
        },
        {
            "ship": "battleship",
            "positions": [[5,2] as Point, [5,3] as Point, [5,4] as Point, [5,5] as Point]
        },
        {
            "ship": "cruiser",
            "positions": [[8,1] as Point, [8,2] as Point, [8,3] as Point]
        },
        {
            "ship": "submarine",
            "positions": [[3,0] as Point, [3,1] as Point, [3,2] as Point]
        },
        {
            "ship": "destroyer",
            "positions": [[0,0] as Point, [1,0] as Point]
        }
    ]
};

function App() {
    return (
        <>
            <GlobalStyle />
            <CoreManagerProvider data={sampleData}>
                <HomeScreen />
            </CoreManagerProvider>
        </>
    );
}

export default App;
