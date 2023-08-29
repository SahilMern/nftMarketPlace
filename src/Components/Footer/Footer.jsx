import CopyRight from './CopyRight';
import './Footer.css';
// import { BsArrowRight } from 'react-icons/bs';
const MarketPlaceResource = [
  {
    name: 'All NFTs',
  },
  {
    name: 'Art',
  },
  {
    name: 'Music',
  },
  {
    name: 'Virtual World',
  },
  {
    name: 'Collectibles',
  },
];
const Footer = () => {
  return (
    <section className="FooterSection">
      <div className="Footer_Boxes">
        <div className="FooterBox">
          <h4>Marketplace</h4>
          {MarketPlaceResource.map((item, index) => {
            return <p key={index}>{item.name}</p>;
          })}
        </div>

        <div className="FooterBox">
          <h4>Resources</h4>
          {MarketPlaceResource.map((item, index) => {
            return <p key={index}>{item.name}</p>;
          })}
        </div>

        <div className="FooterBox">
          <h4>Community</h4>
          {MarketPlaceResource.map((item, index) => {
            return <p key={index}>{item.name}</p>;
          })}
        </div>

        <div className="FooterBox">
          <h4>Newsletter</h4>
          <p>Signup for our newsletter to get the latest news in your inbox.</p>
          <div className="Footer_Input_div">
            <input
              type="text"
              name=""
              id=""
              className="FooterInput"
              placeholder="Enter your Email"
            />
            {/* <div className="FooterInputHelperIcon">
              <BsArrowRight className="FooterBsArrowRight" />
            </div> */}
          </div>
          <br />
          <br />

          <small>Your email is safe with us. We dont spam.</small>
        </div>
      </div>
      <hr className="FooterHr" />

      <CopyRight />
    </section>
  );
};

export default Footer;
