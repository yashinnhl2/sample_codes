import React, { Component } from 'react';
import { ObjectWidgetTopBar, components } from 'netlify-cms-ui-default';
import cx from 'classnames';

export default class Collapsable extends Component {
  constructor(props) {
    super(props);
    const { collapsed = false } = props;
    this.state = {
      collapsed
    };
  }

  handleCollapseToggle = () => {
    // eslint-disable-next-line react/no-access-state-in-setstate
    this.setState({ collapsed: !this.state.collapsed });
  };

  render() {
    const { children } = this.props;
    const { collapsed } = this.state;

    return (
      <div
        className={cx(components.objectWidgetTopBarContainer)}
        style={{
          padding: '0 14px 14px',
          // eslint-disable-next-line @upgrade/no-color-literals
          border: '2px solid rgb(223, 223, 227)',
          borderTop: 0,
          borderRadius: '0px 5px 5px'
        }}
      >
        <ObjectWidgetTopBar {...{ collapsed }} onCollapseToggle={this.handleCollapseToggle} />
        {!collapsed && <div style={{ paddingTop: '14px' }}>{children}</div>}
      </div>
    );
  }
}
