import React from 'react';
import { Component } from 'react';
import {
  Button,
  Form,
  Input,
  TextArea,
} from 'semantic-ui-react';

class AddNote extends Component {

  constructor(props) {
    super(props);
    this.title = '';
    this.note = '';
  }

  handlerTitleOnChange(event) {
    this.title = event.target.value;
    // console.log(this.title);
  }

  handlerNoteOnChange(event) {
    this.note = event.target.value;
    // console.log(this.note);
  }

  addNote(event) {
    event.preventDefault();
    event.stopPropagation();
    this.props.addNote(this.title, this.note);
  }

  render() {
    return (
      <Form
        onSubmit={this.addNote.bind(this)}
      >
        <Form.Field
          control={Input}
          placeholder='Choose a title for your grade...'
          onChange={this.handlerTitleOnChange.bind(this)}
        />

        <Form.Field
            control={TextArea}
            placeholder='Write your note here...'
            onChange={this.handlerNoteOnChange.bind(this)}
        />
        <Form.Field control={Button} primary fluid>Submit</Form.Field>
      </Form>
    );
  }
}

export default AddNote;