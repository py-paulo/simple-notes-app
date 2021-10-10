import React from 'react';
import { Component } from 'react';

import { Card } from 'semantic-ui-react';

import CardNote from '../CardNote';

class NoteList extends Component {

  render() {
    return (
      <Card.Group itemsPerRow={5}>
        {
          this.props.notes.map((note, index) => {
            return (
              <CardNote title={note.title} text={note.note}/>
            );
          })
        }
      </Card.Group>
    );
  }

}

export default NoteList;