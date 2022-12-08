import React from 'react';
import { nanoid } from 'nanoid';
import css from 'components/Contacts/contacts.module.css';
import PropTypes from 'prop-types';

class Contacts extends React.Component {
  static propTypes = { onSubmit: PropTypes.func.isRequired };

  state = {
    name: '',
    number: '',
  };

  inputId = nanoid();

  handleNameChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    // console.log(this.state);
    if (this.props.onSubmit(this.state) !== 1) {
      this.reset();
    }
  };
  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className={css.form}>
        <label htmlFor="name"> </label>
        Name
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={this.state.name}
          onChange={this.handleNameChange}
          id="name"
        />
        <label htmlFor="number">Number </label>
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={this.state.number}
          onChange={this.handleNameChange}
          id="number"
        />
        <button type="submit">Add Contact</button>
      </form>
    );
  }
}
export default Contacts;
