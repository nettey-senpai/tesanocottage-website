const Button = ({ styles, label }) => {
  return (
    <button
      type="button"
      className={`py-4 px-6 bg-pomo-red font-montserrat font-medium text-[18px] text-primary outline-none ${styles} rounded-[10px]`}
    >
      {label}
    </button>
  );
};

export default Button;
