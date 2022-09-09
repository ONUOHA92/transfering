// @ts-ignore
import SearchIcon from "../icons/Search.tsx";
import "./styles.scss";

const TextInputTrans = (): JSX.Element => {
  return (
    <div>
     <div className="trans-text-input flex w-100 py-3 pl-11">
        <input
          type="text"
          className="trans-text-main-text-input plus-jakarta pr-2"
          placeholder="Search for Player, Coach, Talent..."
        />
        <div className="float-right">
          <SearchIcon />
        </div>
     </div>
    </div>
  )
};

export default TextInputTrans;
