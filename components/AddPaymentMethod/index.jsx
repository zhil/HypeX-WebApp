import React from "react";
import StateDefault from "../StateDefault";
import StateDefault2 from "../StateDefault2";
import { Link } from "react-router-dom";
import "./AddPaymentMethod.css";

function AddPaymentMethod(props) {
  const {
    hype_X_Logo_EditedRemovebg1,
    myBoxes,
    myInventory,
    userStatus,
    addCard,
    wallet,
    manageCards,
    title,
    enterAddress,
    enterId,
    enterPhoneNumber,
    enterEmail,
    profilePic,
    surname,
    cardNumber,
    selectLanguage,
    text14,
    selectThemeColor,
    accountBalanceWalletProps,
    stateDefault2Props,
    stateDefault22Props,
    stateDefault23Props,
    stateDefault24Props,
    stateDefault25Props,
    stateDefault26Props,
    stateDefault27Props,
    stateDefault28Props,
    addCardDataProps,
    expiryDate,
    cvv,
    cardHolderName,
    email,
    submit
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="setting screen">
        <div className="overlap-group4-8">
          <Link to="/home-limited-box">
           <img className="hypexlogoedited-removebg-1-6" src={hype_X_Logo_EditedRemovebg1} />
          </Link>
          <Link to="/edit-payment-method">
            <div className="flex-row-49">
                <div className="my-fragments-2 valign-text-middle">
                {manageCards}
                </div>
            </div>
          </Link>
          <div className="overlap-group18-1">
            <div className="settings-2 valign-text-middle">{addCard}</div>
            <div className="rectangle-263-2"></div>
          </div>
        </div>
        <div className="flex-col-37">
          <div className="s-etting valign-text-middle">{title}</div>
          <div className="overlap-group20-2">
            <div className="overlap-group-13">
                <input 
                    className="chakrapetch-medium-bright-turquoise-30px input border-2px-neon-blue" 
                    type="tel"
                    placeholder={cardHolderName}>
                </input>
            </div>
            <div className="overlap-group-14">
              <img className="line-11" src="/img/line-110@1x.svg" />
              <img className="vector-97" src="/img/vector-31-1@2x.svg" />
              <StateDefault2>{addCardDataProps.name}</StateDefault2>
            </div>
          </div>
          <div className="overlap-group2-12">
            <div className="overlap-group-13">
                <input 
                    className="chakrapetch-medium-bright-turquoise-30px input border-2px-neon-blue" 
                    type="tel"
                    placeholder={enterAddress}>
                </input>
            </div>
            <div className="overlap-group-14">
              <img className="line-11" src="/img/line-110@1x.svg" />
              <img className="vector-97" src="/img/vector-31-1@2x.svg" />
              <StateDefault2>{addCardDataProps.address}</StateDefault2>
            </div>
          </div>
          <div className="overlap-group2-11">
            <div className="overlap-group-13">
              <input 
                  className="chakrapetch-medium-bright-turquoise-30px input border-2px-neon-blue" 
                  type="tel"
                  placeholder={email}>
              </input>
            </div>
            <div className="overlap-group-14">
              <img className="line-11" src="/img/line-110@1x.svg" />
              <img className="vector-97" src="/img/vector-31-1@2x.svg" />
              <StateDefault2>{stateDefault24Props.children}</StateDefault2>
            </div>
          </div>
          <div className="overlap-group2-11">
            <div className="group-461">
              <button className="overlap-group8-2 button">
                <img className="line-72-1" src="/img/line-72-1@2x.svg" />
                <img className="line-73-1" src="/img/line-73-1@2x.svg" />
                <img className="union-1" src="/img/union-13@2x.svg" />
                <img className="line-70-1" src="/img/line-70-1@2x.svg" />
                <img className="line-71-1" src="/img/line-71-1@2x.svg" />
                <div className="submit valign-text-middle">
                  {submit}
                </div>
              </button>
            </div>
          </div>
        </div>
        <div className="flex-col-38">
          <Link to="/wallet">
            <div className="flex-row-51">
              <div className="overlap-group12-1">
                <img className="profile-pic-6" src={profilePic} />
                <div className="ellipse-40-6 border-1px-neon-blue"></div>
                <div className="ellipse-4-2 border-4px-neon-blue"></div>
                <div className="ellipse-41-6 border-0-8px-neon-blue"></div>
                <div className="ellipse-4-2 border-0-5px-neon-blue"></div>
              </div>
              <div className="surname-4 valign-text-middle chakrapetch-bold-white-20px">{surname}</div>
            </div>
          </Link>
          <div className="overlap-group21-1">
            <div className="overlap-group-13">
                <input 
                    className="chakrapetch-medium-bright-turquoise-30px input border-2px-neon-blue" 
                    type="tel"
                    placeholder={cardNumber}>
                </input>
            </div>
            <div className="overlap-group-14">
              <img className="line-11" src="/img/line-110@1x.svg" />
              <img className="vector-97" src="/img/vector-31-1@2x.svg" />
              <StateDefault2>{addCardDataProps.cardNumber}</StateDefault2>
            </div>
          </div>
          <div className="overlap-group22-1">
            <div className="overlap-group-13">
            <input 
                className="chakrapetch-medium-bright-turquoise-30px input border-2px-neon-blue" 
                type="tel"
                placeholder={expiryDate}>
            </input>
            </div>
            <div className="overlap-group-14">
              <img className="line-11" src="/img/line-110@1x.svg" />
              <img className="vector-97" src="/img/vector-31-1@2x.svg" />
              <StateDefault2>{addCardDataProps.expiry}</StateDefault2>
            </div>
          </div>
          <div className="overlap-group2-12">
          <div className="overlap-group-13">
            <input 
                className="chakrapetch-medium-bright-turquoise-30px input border-2px-neon-blue" 
                type="tel"
                placeholder={cvv}>
            </input>
            </div>
            <div className="overlap-group-14">
              <img className="line-11" src="/img/line-110@1x.svg" />
              <img className="vector-97" src="/img/vector-31-1@2x.svg" />
              <StateDefault2>{addCardDataProps.cvv}</StateDefault2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddPaymentMethod;
