import { useDispatch } from 'react-redux';
// @ts-ignore
import { handleOpenModal } from "../../redux/index.ts";
import "./styles.scss";

const Button = ({ label, loading, customedClasses, ...props }:any): JSX.Element => {
    const dispatch = useDispatch();
    return (
        <button
          onClick={() => dispatch(handleOpenModal())}
          className={customedClasses ?
          customedClasses+' button btn-default plus-jakarta' : 'button btn-default plus-jakarta'}
          {...props}
         >
          {loading ? 'Loading...' : label}
        </button>
    )
};

export default Button;
