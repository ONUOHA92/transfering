
interface Props {
  type: any,
  onChange: any
  placeholder: any
  style: object,
  accept: any
}


const Uploader = ({ type, onChange, style, accept }: Props): JSX.Element => {
  return (
    // className="uploader py-6"
    <div>
      <div>
        <input
          type={type}
          accept={accept}
          style={style}
          onChange={onChange} />
        <div className="flex justify-center">
          <span>Drag and Drop doument here or</span>
          <span className="cursor-pointer px-1">browse</span>
        </div>
      </div>
    </div>
  );
};

export default Uploader;
