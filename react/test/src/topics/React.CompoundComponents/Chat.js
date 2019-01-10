import React, { Component, Fragment, Children, cloneElement } from 'react';

export default function ChatExample() {
  return (
    <Chat>
      <Chat.Messages />
      <Chat.Input />
      <Chat.Button />
    </Chat>
  )
}

const Messages = ({ messages }) => (
  <ul>
    {messages.map((message, index) => <li key={index}>{message}</li>)}
  </ul>
);
Messages.displayName = 'Messages';

const Input = ({ value, onChange }) => <input type="text" value={value} onChange={onChange} />;
Input.displayName = 'Input';

const Button = ({ onClick }) => <button onClick={onClick}>Add Message</button>;
Button.displayName = 'Button';

class Chat extends Component {
  static Messages = Messages;
  static Input = Input;
  static Button = Button;

  state = {
    messages: [],
    currentMessage: ''
  };

  updateCurrentMessage = event => this.setState({ currentMessage: event.target.value });
  add = () => {
    const newMessages = this.state.messages.concat(this.state.currentMessage);
    this.setState({ messages: newMessages, currentMessage: '' });
  };

  render() {
    const { messages, currentMessage } = this.state, { add, updateCurrentMessage } = this;
    return (
      <Fragment>
        <h1>ChatRoom</h1>
        {Children.map(this.props.children, child => {
          switch(child.type.displayName) {
            case 'Messages':
              return cloneElement(child, { messages });
            case 'Input':
              return cloneElement(child, { value: currentMessage, onChange: updateCurrentMessage });
            case 'Button':
              return cloneElement(child, { onClick: add });
            default:
              return child;
          }
        }, {})}
      </Fragment>
    )
  }
}