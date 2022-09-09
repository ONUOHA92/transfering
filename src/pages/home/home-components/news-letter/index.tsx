// @ts-ignore
import Space from "../../../../components/Space/index.tsx";
// @ts-ignore
import SubscribeToNewsLetter from "../../../../components/NewsLetter/index.tsx";
import "./styles.scss";

const NewsLetter = (): JSX.Element => {
    return (
        <div>
          <div id="news-letter-container" className="pt-20">
            <Space>
               <div className="flex justify-center">
                  <div>
                    <p className="blue-text-color spantaran news-letter-text">Want to get more</p>
                    <p className="blue-text-color spantaran news-letter-text">updates</p>
                    </div>
                  </div>
                  <div className="mt-10">
                    <p className="red-text-color plus-jakarta text-center font-bold text-3xl">Sign up to our Newsletter</p>
                  </div>
                  <div className="mt-16">
                    <SubscribeToNewsLetter label="Sign Up" />
                  </div>
                </Space>
            </div>
        </div>
    )
};

export default NewsLetter;
