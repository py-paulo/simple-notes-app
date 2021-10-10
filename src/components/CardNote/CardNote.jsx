import React from 'react';
import { Component } from 'react';

import { Card, Icon } from 'semantic-ui-react';

class CardNote extends Component {

  render() {
    return (
      <Card>
        <Card.Content>
          <Card.Header>
            {this.props.title}
            </Card.Header>
          <Card.Meta>
            unknown
            </Card.Meta>
          <Card.Description>
            {this.props.text}
          </Card.Description>
        </Card.Content>
        <Card.Content extra textAlign='right'>
          <a href>
            <Icon name='close' />
          </a>
        </Card.Content>
      </Card>
    );
  }
}

export default CardNote;