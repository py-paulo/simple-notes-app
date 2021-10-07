import React from 'react';
import { Component } from 'react';

import { List } from 'semantic-ui-react';

class CardNote extends Component {

  render() {
    return (
      <List.Item>
        <List.Content>
          <List.Header as='a'>{this.props.title}</List.Header>
          <List.Description>
            {this.props.text}
          </List.Description>
        </List.Content>
      </List.Item>
    );
  }
}

export default CardNote;