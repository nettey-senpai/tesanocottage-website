const Button = ({ styles, label }) => {
  return (
    <button
      type="button"
      className={`py-4 px-6 font-montserrat font-medium text-[18px] ${styles}`}
    >
      {label}
    </button>
  );
};

export default Button;
