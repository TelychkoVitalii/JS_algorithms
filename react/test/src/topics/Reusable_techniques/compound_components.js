import React, {Component, Children, Fragment, cloneElement} from 'react';

export default class Demo extends Component {
    render() {
        return (
            <Fragment>
                <Stepper stage={<One boo={2}/>}>
                    <Progress />
                </Stepper>
            </Fragment>
        )
    }
}

class One extends Component {
    render() {
        return (
            <Fragment>
                <h1>Fuck You, {this.props.boo}</h1>
            </Fragment>
        )
    }
}

class Stepper extends Component {
    state = {
        stage: this.props.stage
    };

    handleClick = () => this.setState({stage: this.state.stage + 1});

    render() {
        const { stage } = this.props,
              children = Children.map(this.props.children, child => {
                    return cloneElement(child, {stage, handleClick: this.handleClick})
              });
         return (
            <Fragment>
                {children}
            </Fragment>
        )
    }
}

class Progress extends Component {
    render() {
        const {stage} = this.props;
        return (
            <Fragment>{stage}</Fragment>
        )
    }
}

