import css from 'components/ContactItem/contactitem.module.css';
import PropTypes from 'prop-types';

const ContactItem = ({ name, number, onDeleteCard, id }) => {
  return (
    <li className={css.item}>
      <p className={css.text}>{name}:</p>
      <p className={css.numb}>{number}</p>
      <button
        type="button"
        className={css.btn}
        onClick={() => onDeleteCard(id)}
      >
        Delete
      </button>
    </li>
  );
};
export default ContactItem;

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteCard: PropTypes.func,
};
