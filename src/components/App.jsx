import React from 'react';
import Contacts from './Contacts/Contacts';
import FilterSearch from './FilterSearch/FilterSearch';
import ContactsOfList from './ContactsOfList/ContactsOfList';
import { nanoid } from 'nanoid';

const LS_KEY = 'reader_contacts';

class App extends React.Component {
  state = {
    contacts: [],
    filter: '',
  };

  addContact = ({ name, number }) => {
    // console.log(name);
    // console.log(number);

    const contact = {
      id: nanoid(),
      name,
      number,
    };
    const already = this.state.contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    // console.log(already);
    if (!already) {
      this.setState(({ contacts }) => ({
        contacts: [contact, ...contacts],
      }));
    } else {
      alert(`${contact.name}  is already in contacts.`);
      return;
    }
  };

  componentDidUpdate(_, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      // console.log('update');
      localStorage.setItem(LS_KEY, JSON.stringify(this.state.contacts));
    }
  }

  componentDidMount() {
    const data = localStorage.getItem(LS_KEY);
    if (data !== null) {
      this.setState({ contacts: JSON.parse(data) });
    }
    console.log(data);
  }

  changeFilter = event => {
    this.setState({ filter: event.currentTarget.value });
  };
  getVisibleContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };
  deleteCard = cardId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(card => card.id !== cardId),
    }));
  };
  render() {
    const visibleContacts = this.getVisibleContacts();
    return (
      <div className="container">
        <h1>Phonebook</h1>
        <Contacts onSubmit={this.addContact} />
        <h2>Contacts</h2>
        <FilterSearch value={this.state.filter} onChange={this.changeFilter} />
        <ContactsOfList
          contacts={visibleContacts}
          onDeleteCard={this.deleteCard}
        />
      </div>
    );
  }
}

export default App;
