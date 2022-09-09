import { Link } from "react-router-dom";
import React from "react";
// @ts-ignore
import Space from "../Space/index.tsx";
// @ts-ignore
import Hamburger from "../icons/Hambuger.tsx";
// @ts-ignore
import RegisterBtn from "../Buttons/RegisterBtn.tsx";
// @ts-ignore
import OutlineButton from "../Buttons/OutlineButton.tsx";
import "./styles.scss";

interface NavState {
  scrolledPass: boolean
};

class Navigation extends React.Component<{}, NavState> {
  constructor(props: {} | Readonly<{}>) {
    super(props);
    this.state = {
      scrolledPass: false
    }
  }
  handleScroll = (): void => {
    const scrollBy: number = 70;
      let body: number = document.body.scrollTop;
      let element: number = document.documentElement.scrollTop;
      if (body > scrollBy || element > scrollBy) {
        this.setState({ scrolledPass: true });
        return
      }
    this.setState({ scrolledPass: false });
  }
  componentDidMount = (): void => {
    window.addEventListener("scroll", (): void => {
      this.handleScroll()
    });
  }
  componentWillUnmount = (): void => {
    window.removeEventListener("scroll", (): void => {})
  }
  render(): JSX.Element {
    return (
      <div
        id="navigation"
        className={this.state.scrolledPass === false ? 'fixed py-3 z-10 w-full' : 'dark-background fixed py-3 z-10 w-full'}
      >
        <Space>
          <div className="flex-layout">
            <div id="pane-1" className="flex">
              <div className="pr-10">
                <button className="mt-2">
                  <Hamburger />
                </button>
              </div>
              <div className="px-10 mt-3">
                <Link to="/">
                  <button className="plus-jakarta">Home</button>
                </Link>
              </div>
              <div className="px-10 mt-3">
                <Link to="/shop">
                  <button className="plus-jakarta">Shop</button>
                </Link>
              </div>
            </div>
            <div id="pane-2" className="flex justify-center">
              <img
                className="w-full"
                src={require('../../static/images/nav-image.png')}
                alt="site symbol"
              />
            </div>
            <div id="pane-3">
              <div className="flex pl-10 float-right">
                <div>
                  <Link to="/login">
                    <OutlineButton customedClasses="mr-16" label="Log in" />
                  </Link>
                </div>
                <div className="float-right">
                  <RegisterBtn
                    label="Register"
                  />
                </div>
              </div>
            </div>
          </div>
        </Space>
      </div>
    )
  }
};

export default Navigation;
