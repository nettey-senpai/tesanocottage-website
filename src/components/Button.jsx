const Button = ({ styles, label, SpanStyles, type, onClick}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`py-4 px-6 font-montserrat font-medium text-[18px] ${styles}`}
    ><span className={`${SpanStyles}`}>{label}</span>
    </button>
  );
};

export default Button;
