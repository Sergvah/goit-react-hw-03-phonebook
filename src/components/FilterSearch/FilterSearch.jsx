import css from 'components/FilterSearch/filtersearch.module.css';
import PropTypes from 'prop-types';

const FilterSearch = ({ value, onChange }) => {
  return (
    <div className={css.find}>
      <label>Find contacts by name</label>
      <input
        type="text"
        value={value}
        onChange={onChange}
        className={css.search}
      />
    </div>
  );
};
export default FilterSearch;

FilterSearch.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
