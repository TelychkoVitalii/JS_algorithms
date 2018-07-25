import React, { Component, Fragment, createRef } from 'react';

class CreateRef extends Component {
    constructor(props) {
        super(props);
        this.inputRef = createRef();
    }

    componentDidMount() {
        this.inputRef.current.focus(); // always have current property
        console.log(this.inputRef.current.value)
    }

    render() {
        return (
            <Fragment>
                <!-- may not use with functional component, only near and class component -->
                <input type="text" ref={this.inputRef} defaultValue='Fuck'/>
            </Fragment>
        )
    }
}

export default CreateRef;