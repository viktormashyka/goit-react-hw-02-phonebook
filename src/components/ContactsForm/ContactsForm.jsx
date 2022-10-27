import { Component } from 'react';

export default class ContactForm extends Component {
  state = { name: '', number: '' };

  handleChange = evt => {
    const { name, value } = evt.target;
    this.setState({ [name]: value });
    console.log('{ [name]: value }, ', { [name]: value });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    const { name, number } = this.state;

    this.props.onSubmit({ ...this.state });
    this.reset({ name, number });
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    const { handleChange, handleSubmit } = this;
    const { name, number } = this.state;
    return (
      <form onSubmit={handleSubmit}>
        <label htmlFor="" style={{ marginLeft: 30, fontSize: 24 }}>
          Name
          <br />
          <input
            type="text"
            name="name"
            value={name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={handleChange}
            style={{ marginLeft: 30, fontSize: 24 }}
          />
        </label>
        <br />
        <label htmlFor="" style={{ marginLeft: 30, fontSize: 24 }}>
          Number
          <br />
          <input
            type="tel"
            name="number"
            value={number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={handleChange}
            style={{ marginLeft: 30, fontSize: 24 }}
          />
        </label>
        <br />
        <button type="submit" style={{ marginLeft: 30, fontSize: 16 }}>
          Add contact
        </button>
      </form>
    );
  }
}
