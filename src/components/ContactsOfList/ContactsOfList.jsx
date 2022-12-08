import ContactItem from 'components/ContactItem/ContactItem';
import css from 'components/ContactsOfList/contactsoflist.module.css';
import PropTypes from 'prop-types';

const ContactsOfList = ({ contacts, onDeleteCard }) => (
  <ul className={css.list}>
    {contacts.map(({ id, name, number }) => (
      <ContactItem
        key={id}
        id={id}
        name={name}
        number={number}
        onDeleteCard={onDeleteCard}
      />
    ))}
  </ul>
);
export default ContactsOfList;

ContactsOfList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDeleteCard: PropTypes.func.isRequired,
};
