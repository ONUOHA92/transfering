const Uploader = (): JSX.Element => {
  return (
    <div>
      <div className="uploader py-6">
        <input type="file" />
        <div className="flex justify-center">
          <span>Drag and Drop doument here or</span>
          <span className="cursor-pointer px-1">browse</span>
        </div>
      </div>
    </div>
  );
};

export default Uploader;
