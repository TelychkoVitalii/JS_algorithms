import React, { Component, Fragment, createRef, forwardRef } from 'react';

// Ref forwarding is a technique for automatically passing a ref through a component to one of its children.
class ForwardRef extends Component {
    render() {
        const FancyButton = forwardRef((props, ref) => (
            <button ref={ref} className="FancyButton">
                {props.children}
            </button>
        ));
        const ref = createRef();
        return (
            <Fragment>
                <FancyButton ref={ref}>Click me!</FancyButton>
            </Fragment>
        )
    }
}

export default ForwardRef;
