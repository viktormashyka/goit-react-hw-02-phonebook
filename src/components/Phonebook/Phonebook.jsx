import React, { Component } from 'react';
import {
  NotificationContainer,
  NotificationManager,
} from 'react-notifications';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { nanoid } from 'nanoid';
// import PropTypes from 'prop-types';

import { ContactForm } from '../ContactsForm/ContactsForm';
import { FilterBox } from '../ContactsFilter/ContactsFilter';
import { ContactListBox } from '../ContactsList/ContactsList';

const INITIAL_STATE = {
  contacts: [],
  name: '',
  number: '',
  filter: '',
  id: '',
};

export class Phonebook extends Component {
  static propTypes = {};

  state = {
    ...INITIAL_STATE,
  };

  handleChange = evt => {
    const { name, value } = evt.target;
    this.setState({ [name]: value });
    // console.log('{ [name]: value }, ', { [name]: value });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    const { name, number, id } = this.state;

    this.props.onSubmit({ ...this.state });
    this.addContact(name, number, id);
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '', id: '' });
  };

  addContact = contact => {
    const { name, number, contacts, id } = this.state;
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

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contact.id),
    }));
  };

  removeContact = inx => {
    const { contacts } = this.state;
    console.log('this contact need to remove...', inx);
    this.setState(prevState => ({
      contacts: [...prevState.contacts.splice(inx, 1)],
      // contacts: [...prevState.contacts.slice.splice(inx, 1)],
    }));
    console.log('contacts in visible after: ', contacts);
  };

  // this.setState({ removeBtnInx: inx })
  // if (inx === this.state.removeBtnInx) {
  //   console.log('this contact need to remove...', inx);
  //   this.setState(prevState => ({
  //     contacts: [...prevState.contacts.slice.splice(inx, 1)],
  //   }));
  // }

  render() {
    const { name, number, filter, id } = this.state;
    const visibleContacts = this.getVisibleContacts();
    const { handleSubmit, handleChange, changeFilter, removeContact } = this;
    return (
      <div>
        <h1>Phonebook</h1>
        {/* <ContactForm
          value={(name, number)}
          onSubmit={handleSubmit}
          onChange={handleChange}
        /> */}
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="">
            Name
            <input
              type="text"
              name="name"
              value={name}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              onChange={this.handleChange}
            />
          </label>
          <label htmlFor="">
            Number
            <input
              type="tel"
              name="number"
              value={number}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              onChange={this.handleChange}
            />
          </label>
          <button type="submit">Add contact</button>
        </form>
        <div>
          <h2>Contacts</h2>

          {/* <ul>
            {contacts.map(({ name, number }) => (
              <li key={}>
                {name}: {number}
              </li>
            ))}
          </ul> */}
        </div>
        <div>
          <FilterBox value={filter} onChange={changeFilter} />
          {/* <label htmlFor="">
            Find contacts by name
            <input
              type="text"
              name="filter"
              value={filter}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              onChange={this.changeFilter}
            />
          </label> */}
          <ContactListBox
            visibleContacts={visibleContacts}
            onClick={removeContact}
          />
          {/* <ul>
            {visibleContacts.map((contact, inx) => (
              <li key={contact.id}>
                {contact.name}: {contact.number}
                <button
                  type="submit"
                  onClick={() => {
                    this.removeContact(inx);
                  }}
                >
                  Delete
                </button>
              </li>
            ))}
          </ul> */}
        </div>
      </div>
    );
  }
}
