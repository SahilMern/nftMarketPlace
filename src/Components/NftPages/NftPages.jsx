import NftNavbar from './NftNavbar';
import './NftPages.css';
const NftPages = () => {
  return (
    <div className="nftpages section__padding">
      <h1 className="">NFTs Collection</h1>

      {/* <span>❤️‍🔥</span> */}
      {/* <p style={{ textAlign: 'center' }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis,
        quis aspernatur maiores aperiam nobis vero?❤️‍🔥🖼️
      </p> */}
      <NftNavbar />
      <div className="nftpageCards">
        {/* main card  */}
        <div className="nftpageSingleCard">
          <img
            src="https://i.seadn.io/gcs/files/4eb2b20cdc3fb4a338b769dab3d47238.jpg?auto=format&dpr=1&w=400"
            alt=""
            className="nftpageCardImage"
          />
          <div className="card-content">
            <h4>Futuristic Tunnel #209</h4>
            {/* price section real and cutted */}
            <div className="priceOfNft">
              <p className="priceheading">Price</p>
              <div className="realPrice">
                <div className="exactPriceToshow">
                  <img src="./binance.png" alt="" className="priceImage" />
                  <span>1.78BNB</span>
                </div>
                <p className="discoutPrice">{/* <s>$5, 000</s> */}</p>
              </div>
            </div>

            {/* Creator text  */}
            <div className="Creator">
              <p className="createrheading">Creator</p>
              <div className="profile-name">
                <img
                  src="https://img.freepik.com/premium-photo/digital-illustration-man-with-red-jacket-blue-eyes_1340-41269.jpg?size=626&ext=jpg&ga=GA1.2.1082894.1686834645&semt=ais"
                  alt=""
                />
                <p>Sahil yadav</p>
              </div>
            </div>
          </div>
        </div>
        {/* main card  */}
        <div className="nftpageSingleCard">
          <img
            src="https://i.seadn.io/gcs/files/f80f846ee3f0ce3c83fad5bdc25e3fb2.jpg?auto=format&dpr=1&w=1920"
            alt=""
            className="nftpageCardImage"
          />
          <div className="card-content">
            <h4>Futuristic Tunnel #209</h4>
            {/* price section real and cutted */}
            <div className="priceOfNft">
              <p className="priceheading">Price</p>
              <div className="realPrice">
                <div className="exactPriceToshow">
                  <img src="./binance.png" alt="" className="priceImage" />
                  <span>1.78BNB</span>
                </div>
                <p className="discoutPrice">
                  <s>$5, 000</s>
                </p>
              </div>
            </div>

            {/* Creator text  */}
            <div className="Creator">
              <p className="createrheading">Creator</p>
              <div className="profile-name">
                <img
                  src="https://img.freepik.com/premium-photo/digital-illustration-man-with-red-jacket-blue-eyes_1340-41269.jpg?size=626&ext=jpg&ga=GA1.2.1082894.1686834645&semt=ais"
                  alt=""
                />
                <p>Sahil yadav</p>
              </div>
            </div>
          </div>
        </div>
        {/* main card  */}
        <div className="nftpageSingleCard">
          <img
            src="https://t3.ftcdn.net/jpg/05/04/24/72/240_F_504247272_Ui0QkEQXKkRWJKtNdtMT4YZCZTkUtlIW.jpg"
            alt=""
            className="nftpageCardImage"
          />
          <div className="card-content">
            <h4>Futuristic Tunnel #209</h4>
            {/* price section real and cutted */}
            <div className="priceOfNft">
              <p className="priceheading">Price</p>
              <div className="realPrice">
                <div className="exactPriceToshow">
                  <img src="./binance.png" alt="" className="priceImage" />
                  <span>1.78BNB</span>
                </div>
                <p className="discoutPrice">
                  <s>$5, 000</s>
                </p>
              </div>
            </div>

            {/* Creator text  */}
            <div className="Creator">
              <p className="createrheading">Creator</p>
              <div className="profile-name">
                <img
                  src="https://img.freepik.com/premium-photo/digital-illustration-man-with-red-jacket-blue-eyes_1340-41269.jpg?size=626&ext=jpg&ga=GA1.2.1082894.1686834645&semt=ais"
                  alt=""
                />
                <p>Sahil yadav</p>
              </div>
            </div>
          </div>
        </div>
        {/* main card  */}
        <div className="nftpageSingleCard">
          <img
            src="https://i.seadn.io/gcs/files/b322219c1d7f9baa2e62f2c7eca04fbe.png?auto=format&dpr=1&w=1920"
            alt=""
            className="nftpageCardImage"
          />
          <div className="card-content">
            <h4>Futuristic Tunnel #209</h4>
            {/* price section real and cutted */}
            <div className="priceOfNft">
              <p className="priceheading">Price</p>
              <div className="realPrice">
                <div className="exactPriceToshow">
                  <img src="./binance.png" alt="" className="priceImage" />
                  <span>1.78BNB</span>
                </div>
                <p className="discoutPrice">
                  <s>$5, 000</s>
                </p>
              </div>
            </div>

            {/* Creator text  */}
            <div className="Creator">
              <p className="createrheading">Creator</p>
              <div className="profile-name">
                <img
                  src="https://img.freepik.com/premium-photo/digital-illustration-man-with-red-jacket-blue-eyes_1340-41269.jpg?size=626&ext=jpg&ga=GA1.2.1082894.1686834645&semt=ais"
                  alt=""
                />
                <p>Sahil yadav</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NftPages;
