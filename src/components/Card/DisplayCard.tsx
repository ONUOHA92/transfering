import { useNavigate } from "react-router-dom";
// @ts-ignore
import Button from "../Buttons/Button.tsx";
// @ts-ignore
import StarFull from "./icons/StarFull.tsx";
// @ts-ignore
import StarEmpty from "./icons/StarEmpty.tsx";
import "./styles.scss"


interface DisplayProps {
  imageUrl: any,
  productName: any,
  amount:any
  star: any,
  content: any,
  cardType:any
}


const DisplayCard = ({ imageUrl, productName, amount, star, content, cardType }:DisplayProps ): JSX.Element => {
  const navigate = useNavigate()
  return (
    <div>
      {
        cardType === "first-card" && (
          <div className="display-card">
            <img className="w-full display-card-image" alt={productName} src={imageUrl} />
            <div className="px-5 py-5">
              <div className="flex justify-between">
                <div>
                  <p className="product-name plus-jakarta">{productName}</p>
                  <div className="flex justify-between mt-2">
                    {Array.from(Array(star), (x, y) => <StarFull key={y} />)}
                    {Array.from(Array(5 - star), (x, y) => <StarEmpty key={y}/>)}
                  </div>
                </div>
                <div>
                  <p className="amount plus-jakarta mt-0.5">{amount}</p>
                </div>
              </div>
              <div className="mt-5">
                <p className="text-white plus-jarkata">{content}</p>
              </div>
              <div className="mt-5 w-full">
                <Button
                  label="Add to Cart"
                  customedClasses="w-full py-4 mb-4"
                  onClick={() => navigate("/shop/product")}
                />
              </div>
            </div>
          </div>
        )
      }
      {
        cardType === "last-card" && (
          <div className="display-card">
            <div className="px-10 py-5">
              <div className="flex justify-between">
                <div>
                  <p className="product-name product-name-2 plus-jakarta">{productName}</p>
                  <div className="flex justify-between mt-2">
                    {Array.from(Array(star), (x, y) => <StarFull key={y} />)}
                    {Array.from(Array(5 - star), (x, y) => <StarEmpty key={y} />)}
                  </div>
                </div>
              </div>
              <div>
                <p className="amount amount-2 plus-jakarta mt-3">{amount}</p>
              </div>
              <div className="mt-5">
                <p className="text-white text-content plus-jarkata">{content}</p>
              </div>
              <div className="mt-5 w-full">
                <Button
                  label="Add to Cart"
                  customedClasses="w-full py-4 mb-3 mt-10"
                />
              </div>
            </div>
          </div>
        )
      }
    </div>
  )
};

export default DisplayCard;
