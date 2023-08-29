import './NewItem.css';
import { SlOptions } from 'react-icons/sl';
import { AiFillHeart } from 'react-icons/ai';
import { newItems } from '../../Helper/NewItemsData';
// AiOutlineHeart,
const NewItem = () => {
  return (
    <div className="NewItem ">
      <h1 className="newItemHeading">New Item</h1>
      <div className="newItemCards">
        {newItems.map((item, index) => {
          return (
            <div className="newItemMainCard" key={index}>
              <img src={item.img} alt="" className="main" />
              <div className="newItemCard-content">
                <div className="name-option">
                  <p>{item.name}</p>
                  <SlOptions className="SlOptions" />
                </div>
                <div className="newItemPrice">
                  <span>0.08ETH </span> &nbsp;
                  <span className="spanPercentage">1/20</span>
                </div>
                {/* create and like */}
                <div className="creater-like">
                  <p className="placeAbid">Place a bid</p>
                  <div className="likeAndTotal">
                    <AiFillHeart className="AiFillHeart" />
                    <span>03</span>
                  </div>
                </div>
              </div>
              <div className="userProfile">
                <img src={item.creater} alt="" />
              </div>
              <div className="resellEndTime">
                <p>30d</p>
                <p>15h</p>
                <p>39m</p>
                <p>1s</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default NewItem;
