import './App.css';

import React from 'react';

import { Component } from 'react';
import { Grid, Segment } from 'semantic-ui-react';

import AddNote from './components/AddNote';
import NoteList from './components/ListNote';

class App extends Component {

  constructor(props) {
    super(props);
    this.notes = [];
    this.state = {};
  }

  addNote(title, note) {
    const newNote = {
      title: title,
      note: note
    };

    this.notes.push(newNote);

    this.setState({
      notes: this.notes
    });
  }

  render () {
    return (
      <Grid columns={2} divided>

        <Grid.Row>

          <Grid.Column width={4}>
            <Segment>
              <AddNote addNote={this.addNote.bind(this)}/>
            </Segment>
          </Grid.Column>

          <Grid.Column>
            <NoteList notes={this.notes}/>
          </Grid.Column>

        </Grid.Row>

      </Grid>
    );
  }
}

export default App;