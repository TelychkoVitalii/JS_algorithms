import React, { Component, Fragment } from 'react';

const starWarsChars = [
  { name: 'Luke', side:'light' },
  { name: 'Darth Vader', side:'dark' },
  { name: 'Obi-wan Kenobi', side:'light'},
  { name: 'Palpatine', side:'dark'}
];

const withTransformProps = mapperFunc => BaseComponent => baseProps => <BaseComponent { ...mapperFunc(baseProps)} />;

const withSimpleState = defaultState => BaseComponent => {
  return class extends Component {
    state = {
      value: defaultState
    };

    updateState = value => this.setState({ value });

    render() {
      return (
        <BaseComponent
          {...this.props}
          stateValue={this.state.value}
          stateHandler={this.updateState}
        />
      )
    }
  }
};

const renderDisplayList = ({ list, stateHandler, otherSide }) => (
  <Fragment>
    <button onClick={() => stateHandler(otherSide)}>Switch</button>
    {list.map(char =>
      <div key={char.name}>
        <div>Character: {char.name}</div>
        <div>Side: {char.side}</div>
      </div>
    )}
  </Fragment>
);

const FilteredList = withTransformProps(({ stateValue, stateHandler }) => {
  const otherSide = stateValue === 'dark' ? 'light' : 'dark';
  return {
    stateHandler,
    otherSide,
    list: starWarsChars.filter(char => char.side === stateValue),
  }
})(renderDisplayList);

export default withSimpleState('dark')(FilteredList);