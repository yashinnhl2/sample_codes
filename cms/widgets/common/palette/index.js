import React, { Component, createRef } from 'react';
import * as palette from '@upgrade/themes/palette/upgrade';
import { Select, SelectItem, Container, Color } from './styles';

export default class Palette extends Component {
  constructor(props) {
    super(props);
    const { value } = props;
    let parsedValue = value;
    if (value?.toJS) {
      parsedValue = value.toJS() ?? '';
    }

    this.wrapperRef = createRef();

    this.state = { showDropDown: false, value: parsedValue };
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  toggleDropDown = boolean => {
    this.setState({
      showDropDown: boolean
    });
  };

  handleSelectColor = colorValue => {
    this.setState({
      value: colorValue,
      showDropDown: false
    });

    this.props.onChange(colorValue);
  };

  handleClickOutside = e => {
    if (this.wrapperRef && !this.wrapperRef.current?.contains(e.target)) {
      this.toggleDropDown(false);
    }
  };

  render() {
    const { showDropDown, value } = this.state;
    return (
      <Container>
        <input type="text" value={value} onFocus={() => this.toggleDropDown(true)} />
        {showDropDown && (
          <Select ref={this.wrapperRef}>
            {Object.entries(palette).map(([key, hexCode]) => (
              <SelectItem key={key} value={key} onClick={() => this.handleSelectColor(key)}>
                {key} <Color backgroundColor={hexCode} />
              </SelectItem>
            ))}
          </Select>
        )}
      </Container>
    );
  }
}
