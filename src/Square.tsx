import * as React from 'react'

export default class Square extends React.Component<{value: number}> {
    state = {
        value: null
    }

    constructor(props: {value: number}) {
        super(props)
    }

    squareOnClicked = () => {
        this.setState({
            value: 'X'
        })
    }

    render() {
        return (
        <button className="square" onClick={this.squareOnClicked}>
            {this.state.value}
        </button>
        );
    }
}