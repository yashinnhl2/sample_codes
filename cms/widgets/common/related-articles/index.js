import React, { Component } from 'react';
import { map } from 'lodash';

import { Container, StyledRow } from './styles';

export default class RelatedArticles extends Component {
  constructor(props) {
    super(props);
    const { value } = props;

    let parsedValue = value;

    if (value?.toJS) {
      parsedValue = value.toJS() ?? [];
    }

    this.state = { value: parsedValue || [] };
  }

  componentDidUpdate() {
    const { value } = this.state;
    const { value: propsValue } = this.props;
    if (propsValue !== value) {
      this.props.onChange(this.state.value);
    }
  }

  removeItem = slug => {
    const { value } = this.state;
    const filteredValues = value.filter(val => val !== slug);

    this.setState({
      value: [...filteredValues]
    });
  };

  addItem = () => {
    const { value } = this.state;
    const valueCopy = [...value];
    valueCopy.push('');

    this.setState({
      value: [...valueCopy]
    });
  };

  handleInputChange = (event, index) => {
    const { value } = this.state;
    const valueCopy = [...value];
    valueCopy[index] = event.target.value;

    this.setState({
      value: [...valueCopy]
    });
  };

  render() {
    const { value = [] } = this.state;

    return (
      <Container>
        {map(value, (item, index) => {
          return (
            <StyledRow key={index}>
              <input type="text" value={item} onChange={event => this.handleInputChange(event, index)} />
              <button type="button" onClick={() => this.removeItem(item)}>
                remove
              </button>
            </StyledRow>
          );
        })}

        <button type="button" onClick={this.addItem}>
          Add
        </button>
      </Container>
    );
  }
}
