import React, { Component, createRef } from 'react';
import { get, map } from 'lodash';

import { Select, SelectItem, Container, StyledTag, TagContainer } from './styles';

export default class MultiSelect extends Component {
  constructor(props) {
    super(props);
    const { value, field } = props;

    let parsedValue = value;

    if (value?.toJS) {
      parsedValue = value.toJS() ?? [];
    }

    this.wrapperRef = createRef();

    this.state = {
      showDropDown: false,
      value: parsedValue || [],
      options: get(field, '_root.entries[3][1]._tail.array')
    };
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  componentDidUpdate() {
    const { value } = this.state;
    const { value: propsValue } = this.props;
    if (propsValue !== value) {
      this.props.onChange(this.state.value);
    }
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  toggleDropDown = boolean => {
    this.setState({
      showDropDown: boolean
    });
  };

  uniq = a => {
    return [...new Set(a)];
  };

  handleSelectTag = val => {
    this.setState(prevState => ({
      value: this.uniq([...prevState.value, val]),
      showDropDown: false
    }));
  };

  removeItem = tag => {
    const { value } = this.state;
    const filteredValues = value.filter(val => val !== tag);

    this.setState({
      value: this.uniq([...filteredValues])
    });
  };

  handleClickOutside = e => {
    if (this.wrapperRef && !this.wrapperRef.current?.contains(e.target)) {
      this.toggleDropDown(false);
    }
  };

  render() {
    const { showDropDown, value = [], options } = this.state;

    return (
      <Container>
        <input type="text" onFocus={() => this.toggleDropDown(true)} />
        <TagContainer>
          {map(value, (item, index) => {
            return (
              <StyledTag key={index}>
                {item}{' '}
                <button type="button" onClick={() => this.removeItem(item)}>
                  remove
                </button>
              </StyledTag>
            );
          })}
        </TagContainer>
        {showDropDown && (
          <Select ref={this.wrapperRef}>
            {options.map(item => (
              <SelectItem key={item} value={item} onClick={() => this.handleSelectTag(item)}>
                {item}
              </SelectItem>
            ))}
          </Select>
        )}
      </Container>
    );
  }
}
