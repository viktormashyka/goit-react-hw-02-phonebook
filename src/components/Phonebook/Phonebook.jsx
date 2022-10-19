import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';

export class Phonebook extends Component {
  static propTypes = {};
  state = {
    contacts: [],
    name: '',
  };

  render() {
    const { contacts, name } = this.state;
    return (
      <input
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
    );
  }
}

Phonebook.propTypes = {};
