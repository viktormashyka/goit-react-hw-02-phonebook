import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';

const INITIAL_STATE = { contacts: [], name: '', number: '', filter: '' };

export class Phonebook extends Component {
  static propTypes = {};

  state = {
    // contacts: [],
    // name: '',
    // number: '',
    // filter: '',
    ...INITIAL_STATE,
  };

  nameId = nanoid();
  numberId = nanoid();

  handleChange = evt => {
    const { name, value } = evt.target;
    this.setState({ [name]: value });
    console.log('{ [name]: value }, ', { [name]: value });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    const { contacts, name, number, filter } = this.state;
    console.log(
      `contacts: ${contacts}, name: ${name}, number: ${number}, filter: ${filter}`
    );
    this.props.onSubmit({ ...this.state });

    this.addContact();

    this.reset();
  };

  reset = () => {
    this.setState({ ...INITIAL_STATE });
  };

  addContact = () => {
    const { contacts, name, number, filter } = this.state;
    const newContact = { name, number };
    this.state.contacts.push(newContact);

    // this.setState(prevState => ({
    //   contacts: [newContact, ...prevState.contacts],
    // }));
  };

  render() {
    const { contacts, name, number, filter } = this.state;
    const visibleContacts = contacts.filter(contact =>
      contact.toLowerCase().includes(filter)
    );
    return (
      <div>
        <h1>Phonebook</h1>
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

          <ul>
            {contacts.map(({ name, number }) => (
              <li>
                {name}: {number}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <label htmlFor="">
            Find contacts by name
            <input
              type="text"
              name="filter"
              value={filter}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              onChange={this.handleChange}
            />
          </label>
          <ul>
            {visibleContacts.map((contact, inx) => (
              <li key={inx}>
                {contact.name}: {contact.number}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

Phonebook.propTypes = {};

// const getSortedFriends = users =>
//   users
//     .flatMap(user => user.friends)
//     .filter((friend, index, array) => array.indexOf(friend) === index)
//     .sort((a, b) => a.localeCompare(b));

// const getSortedContactsByName = contacts =>
//   contacts
//     .map(contact => contact.friends)
//     .filter((name, index, array) => array.indexOf(name) === index)
//     .sort((a, b) => a.localeCompare(b));
