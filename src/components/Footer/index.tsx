// @ts-ignore
import NewsLetter from "../NewsLetter/index.tsx";
// @ts-ignore
import FaceBook from "./icons/FaceBook.tsx";
// @ts-ignore
import Twitter from "./icons/Twitter.tsx";
// @ts-ignore
import Send from "./icons/Send.tsx";

import "./styles.scss";

const Footer = (): JSX.Element => {
  return (
    <div>
      <footer>
        <div className="flex justify-center">
          <p className="yeseva-one footer-top-text mt-24">
            Want to get more<br />
            Updates
          </p>
        </div>
        <div className="flex justify-center">
            <div className="w-8/12 mt-10">
                <NewsLetter label="Subscribe" />
            </div>
        </div>
        <p className="text-center pick-of-the-week plus-jakarta mt-10">Pick of the week</p>
        <div className="flex justify-center">
         <div className="flex mt-10">
          <div className="px-1">
            <FaceBook />
          </div>
          <div className="px-1">
            <Twitter />
          </div>
          <div className="px-1">
            <Send />
          </div>
         </div>
        </div>
        <div className="flex justify-center">
          <div className="hr-line mt-12"></div>
        </div>
        <div className="flex justify-center py-5">
          <p className="start-text plus-jakarta">&copy; 2022.  Copyright Transferhub. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  )
};

export default Footer;
