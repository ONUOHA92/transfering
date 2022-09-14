import "./styles.scss";

interface Props {
  type: string;
  onChange: () => void;
  placeholder: string;
  accept: string;
  name: any
}

const Uploader = ({ onChange}: Props): JSX.Element => {
  return (
    // className="uploader py-6"
    <label>
      <div className="w-full uploader py-6 cursor-pointer">
        <div>
          <input type={"file"}  onChange={onChange} accept='image/png, image/jpeg image/jpg' />
          <div className="flex justify-center">
            <span>Drag and Drop doument here or</span>
            <span className="cursor-pointer px-1">browse</span>
          </div>
        </div>
      </div>
    </label>
  );
};

export default Uploader;
