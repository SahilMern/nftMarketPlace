import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { HotCollectionData } from '../Helper/HotCollectionData';
const Carsoul = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <Carousel responsive={responsive}>
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
    </Carousel>
  );
};

export default Carsoul;
