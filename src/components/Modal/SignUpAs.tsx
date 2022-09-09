import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
// @ts-ignore
import { handleCloseModal } from "../../redux/index.ts";
// @ts-ignore
import LayoutCard from "../Card/LayoutCard.tsx";
// @ts-ignore
import CloseButton from "../Buttons/CloseButton.tsx";
import "./styles.scss";

interface Props {
  isOpen: boolean
}

const SignUpAs = ({ isOpen }: Props): JSX.Element => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleNavigateSignUpAsPlayer = (): void => {
    dispatch(handleCloseModal());
    navigate("sign-up/player");
  }
  const handleNavigateSignUpAsCoach = (): void => {
    dispatch(handleCloseModal());
    navigate("sign-up/coach");
  }
  return (
    <div>
      {isOpen && (
        <div className={isOpen ? 'modal-body scrolled pb-16' : 'modal-body pb-16'}>
          <div className="modal-box">
            <LayoutCard>
              <div className="px-5">
                <div>
                  <div onClick={() => dispatch(handleCloseModal())} className="float-right">
                    <CloseButton />
                  </div>
                </div>
              </div>
              <div className="mt-20">
                <p id="get-started">Get Started</p>
                <p
                  id="get-started-text"
                  className="text-center mt-3"
                >Sign Up either as a Footballer or Coach to get started</p>
              </div>
              <div className="mt-10 pb-20">
                <div className="flex">
                  <div className="equal-sides"
                    onClick={handleNavigateSignUpAsPlayer}>
                    <div className="select-reg-type flex justify-center py-16 cursor-pointer">
                      <div>
                        <img
                          className="select-reg-type-img"
                          src={require("../../static/images/kick.png")}
                          alt="Sign up as footballer"
                        />
                        <p
                          className="select-reg-type-text text-center mt-4">
                          Sign Up as a<br />
                          Footballer
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="px-5"></div>
                  <div className="equal-sides"
                    onClick={handleNavigateSignUpAsCoach}>
                    <div className="select-reg-type flex justify-center py-16 cursor-pointer">
                      <div>
                        <img className="select-reg-type-img" src={require("../../static/images/coach.png")} alt="Sign up as coach" />
                        <p className="select-reg-type-text text-center mt-4">
                          Sign Up as a<br />
                          coach
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </LayoutCard>
          </div>
        </div>
      )}
    </div>
  )
}

export default SignUpAs;
