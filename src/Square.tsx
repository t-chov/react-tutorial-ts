import * as React from 'react'
import SquareState from './SquareState'

const Square: React.FunctionComponent<SquareState> = (state) => {
    return (
        <button
            className="square"
            onClick={() => state.onClick()}>
            {state.value}
        </button>
    );
}

export default Square