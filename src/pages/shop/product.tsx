// @ts-ignore
import General from "../../Layouts/General.tsx";
// @ts-ignore
import ProjectPath from "../../components/ProjectPath/index.tsx";
// @ts-ignore
import PageHeading from "../../components/PageHeading/index.tsx";
// @ts-ignore
import DisplayCard from "../../components/Card/DisplayCard.tsx";
import "./styles.scss";

const Product = (): JSX.Element => {
  return (
    <div>
      <General>
        <div>
          <ProjectPath projectPath="Home/Shop/Shopping Cart" />
          <div className="text-center mt-10">
            <PageHeading title="Shoping Cart" />
          </div>
          <div className="mt-7">
            <p className="plus-jakarta subject font-bold">Jersey</p>
          </div>
          <div className="flex mt-3">
            <div className="equal-sides">
              <img className="shop-pic" src="https://res.cloudinary.com/dypgr3xyt/image/upload/v1651045851/arsenal_njhkgq.jpg" alt="jersey" />
            </div>
            <div className="px-3"></div>
            <div className="equal-sides">
              <DisplayCard
                productName="Product name"
                amount={`₦${25000}`}
                star={4}
                cardType="last-card"
                content="Nibh quisque suscipit fermentum netus nulla cras porttitor euismod nulla. Orci, dictumst nec aliquet id ullamcorper venenatis. Fermentum sulla craspor ttitore  ismod nulla."
              />
            </div>
          </div>
        </div>
      </General>
    </div>
  )
};

export default Product;
