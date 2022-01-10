import React, { Component } from 'react'

export default class Layout extends Component {
    render() {
        return (
            <div className="container layout">
                <div className="container layout-container">
                    {this.props.children}
                </div>
            </div>
        )
    }
}
