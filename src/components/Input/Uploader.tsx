import "./styles.scss";

interface Props {
  type: string;
  onChange: () => void;
  placeholder: string;
  accept: string;
}

const Uploader = ({ onChange, accept }: Props): JSX.Element => {
  return (
    // className="uploader py-6"
    <label>
      <div className="w-full uploader py-6 cursor-pointer">
        <div>
          <input type={"file"} accept={accept} onChange={onChange} />
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
