import React, { Component } from 'react';
// import {
//   NotificationContainer,
//   NotificationManager,
// } from 'react-notifications';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { nanoid } from 'nanoid';
// import PropTypes from 'prop-types';

import ContactForm from '../ContactsForm/ContactsForm';
import { FilterBox } from '../ContactsFilter/ContactsFilter';
import { ContactListBox } from '../ContactsList/ContactsList';

export class Phonebook extends Component {
  static propTypes = {};

  state = {
    contacts: [],
    filter: '',
  };

  addContact = contact => {
    const { contacts } = this.state;
    const { name, number } = contact;
    const newContact = { id: nanoid(), name, number };

    for (const contact of contacts) {
      if (contact.name === name) {
        Notify.info('This contact exist in your list');
        return;
      }
    }
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
    console.log('addContact..., contacts ', contacts);
  };

  changeFilter = evt => {
    this.setState({ filter: evt.currentTarget.value });
  };

  getVisibleContacts = () => {
    const { filter, contacts } = this.state;
    const normalizeToLowerCase = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizeToLowerCase)
    );
  };

  removeContact = id => {
    this.setState(({ contacts }) => ({
      contacts: contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    const { filter } = this.state;
    const visibleContacts = this.getVisibleContacts();
    const { addContact, changeFilter, removeContact } = this;
    return (
      <div>
        <h1 style={{ marginLeft: 30, fontSize: 32 }}>Phonebook</h1>
        <ContactForm onSubmit={addContact} />
        <div>
          <h2 style={{ marginLeft: 30, fontSize: 32 }}>Contacts</h2>
        </div>
        <div>
          <FilterBox value={filter} onChange={changeFilter} />
          <ContactListBox
            visibleContacts={visibleContacts}
            onRemoveContact={removeContact}
          />
        </div>
      </div>
    );
  }
}
