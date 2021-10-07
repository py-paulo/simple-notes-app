import React from 'react';
import { Component } from 'react';

import { List } from 'semantic-ui-react';

import CardNote from '../CardNote';

class NoteList extends Component {

  render() {
    return (
      <List relaxed='very' animated divided>
        {
          this.props.notes.map((note, index) => {
            return (
              <CardNote title={note.title} text={note.note}/>
            );
          })
        }
      </List>
    );
  }

}

export default NoteList;