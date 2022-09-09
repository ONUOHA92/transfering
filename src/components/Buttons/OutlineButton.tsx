import "./styles.scss";

const Button = ({ label, loading, customedClasses, ...props }:any): JSX.Element => {
    return (
        <button
          className={customedClasses ?
            customedClasses+' outline-btn btn-default px-7 plus-jakarta' : 'outline-btn btn-default px-7 plus-jakarta'}
          {...props}
        >
          {loading ? 'Loading...' : label}
        </button>
    )
};

export default Button;
