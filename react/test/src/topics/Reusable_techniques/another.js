import React, { Component } from 'react';

export class Button extends Component {
    render() {
        return (
                <div>
                    <button onClick={this.props.onClick}>{this.props.value}</button>
                </div>
            )
    }
}

export default class Container extends Component {
    handleClick = () => {
        console.log('click');
    };
    render() {
        return (
            <div>
                <Button
                    value={'Hi'}
                    onClick={this.handleClick} />
            </div>
        )
    }
}

