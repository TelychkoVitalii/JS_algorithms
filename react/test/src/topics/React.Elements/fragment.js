import React, { Component, Fragment } from 'react';

class FragmentElement extends Component {
    render() {
        return (
            <Fragment key={index}> <!-- or React.Fragment or <></>-->
                <h1>Hello</h1>
                <h2>Love</h2>
            </Fragment>
        )
    }
}

export default FragmentElement;