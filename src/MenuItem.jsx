import PropTypes from 'prop-types';

const MenuItem = ({ id, linkName, colorText, disabled }) => {
  const isDisabled = disabled ? 'disabled' : '';
  return (
    <a
      className={`nav-link active text-${colorText} ${isDisabled}`}
      aria-current="page"
      href="#"
      id={`${id}`}
    >
      {linkName}
    </a>
  );
};

export default MenuItem;

MenuItem.propTypes = {
  disabled: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
  linkName: PropTypes.string.isRequired,
  colorText: PropTypes.string.isRequired,
};

MenuItem.defaultProps = {
  active: true,
  colorText: 'white',
};
