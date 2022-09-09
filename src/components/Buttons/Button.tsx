import "./styles.scss";

const Button = ({ label, loading, customedClasses, ...props }:any): JSX.Element => {
  return (
    <button
      className={
        customedClasses
          ? customedClasses + " button btn-default plus-jakarta"
          : "button btn-default plus-jakarta"
      }
      {...props}
    >
      {loading ? "Loading..." : label}
    </button>
  );
};

export default Button;
