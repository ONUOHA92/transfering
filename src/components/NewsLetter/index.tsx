import "./styles.scss";

const NewsLetter = ({ label }:any): JSX.Element => {
    return (
       <div className="flex justify-center">
         <div className="news-letter-container">
           <form>
            <div className="flex">
              <div className="input-container px-20 py-8">
                <input type="email" placeholder="Enter your email" className="w-full" />
              </div>
              <button>{ label }</button>
            </div>
           </form>
         </div>
       </div>
    )
};

export default NewsLetter;
