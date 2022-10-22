import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';

const INITIAL_STATE = { contacts: [], name: '', number: '' };
// const newContact = {name: };

export class Phonebook extends Component {
  static propTypes = {};

  state = {
    // contacts: [],
    // name: '',
    // number: '',
    ...INITIAL_STATE,
  };

  nameId = nanoid();
  numberId = nanoid();

  handleChange = evt => {
    // this.setState({ name: evt.target.value });
    const { name, value } = evt.target;
    this.setState({ [name]: value });
    console.log('{ [name]: value }, ', { [name]: value });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    const { contacts, name, number } = this.state;
    console.log(`contacts: ${contacts}, name: ${name}, number: ${number}`);
    this.props.onSubmit({ ...this.state });

    // this.setState({ name: evt.target.value });

    // this.state.contacts.push(this.state.name);
    // console.log('this.state.contacts, ', this.state.contacts);
    // console.log('phoneContacts, ', phoneContacts);
    this.addContact();

    // evt.target.reset();
    this.reset();
  };

  reset = () => {
    this.setState({ ...INITIAL_STATE });
  };

  addContact = () => {
    const { contacts, name, number } = this.state;
    const newContact = { name, number };
    // this.state.contacts.push(this.state.name);
    // const newContact = { [name]: value };
    this.state.contacts.push(newContact);
    // this.setState({
    //   newContacts: this.state.name,
    // });
    console.log('this.state.contacts: 45, ', this.state.contacts);
    console.log('newContact, ', newContact);
  };

  render() {
    const { contacts, name, number } = this.state;
    // const newContact = { name, number };
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
      </div>
    );
  }
}

Phonebook.propTypes = {};
