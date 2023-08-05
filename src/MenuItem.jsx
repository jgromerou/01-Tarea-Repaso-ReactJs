const MenuItem = ({ id, linkName, colorText, disabled }) => {
  const isDisabled = disabled ? 'disabled' : '';
  return (
    <a
      className={`nav-link active text-${colorText} ${isDisabled}`}
      aria-current="page"
      href="#"
    >
      {linkName}
    </a>
  );
};

export default MenuItem;
