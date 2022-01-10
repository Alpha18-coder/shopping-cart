import React, { Component } from 'react'

export default class Bubble extends Component {
    render() {
        const { value } = this.props;
        return (
            <span className="bubble">{value > 9 ? '+9' : value}</span>
        )
    }
}
