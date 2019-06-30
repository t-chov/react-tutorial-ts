import * as React from 'react'

export default class Square extends React.Component<{value: number}> {
    render() {
        return (
        <button className="square">
            {this.props.value}
        </button>
        );
    }
}