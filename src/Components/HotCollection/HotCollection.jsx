import './HotCollection.css';
import { HotCollectionData } from '../../Helper/HotCollectionData';

// import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
// const responsive = {
//   superLargeDesktop: {
//     // the naming can be any, depends on you.
//     breakpoint: { max: 4000, min: 3000 },
//     items: 5,
//   },
//   desktop: {
//     breakpoint: { max: 3000, min: 1024 },
//     items: 4,
//   },
//   tablet: {
//     breakpoint: { max: 1024, min: 464 },
//     items: 2,
//   },
//   mobile: {
//     breakpoint: { max: 464, min: 0 },
//     items: 1,
//   },
// };
const HotCollection = () => {
  return (
    <div className="HotCollection ">
      {/* section__padding */}
      <h1>Hot collection</h1>
      {/* <Carousel responsive={responsive} className="HotCollectionDataCard"> */}
      <div className="HotCollectionDataCard">
        {HotCollectionData.map((item, index) => {
          return (
            <div className="CratersCard" key={index}>
              <img
                src={item.background}
                alt=""
                className="CratersCardBackground"
              />
              <div className="createrDetails">
                <img src={item.creterimg} alt="" className="createrImage" />
                <h4>Abstraction</h4>
                <p>ERC-192</p>
              </div>
            </div>
          );
        })}
        {/* </Carousel> */}
      </div>
    </div>
  );
};

export default HotCollection;
