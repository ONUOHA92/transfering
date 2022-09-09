import "./styles.scss";

const TransparentCard = ({ children }: any): JSX.Element => {
  return (
    <div className="transparent-card px-5 py-4 w-full">
     {children}
    </div>
  )
};

export default TransparentCard;
