import './TopSellers.css';
import { TiTick } from 'react-icons/ti';
// import { MdVerified } from 'react-icons/md';

const TopSeller = [
  {
    id: 1,
    name: 'Lori Hart',
    img: 'https://gigaland.io/images/author/author-1.jpg',
    total: '25',
    star: true,
  },
  {
    id: 2,
    name: 'Gayle Hicks',
    img: 'https://gigaland.io/images/author/author-7.jpg',
    total: '31',
    star: false,
  },
  {
    id: 3,
    name: 'Mamie Barnett',
    img: 'https://gigaland.io/images/author/author-2.jpg',
    total: '16',
    star: true,
  },
  {
    id: 4,
    name: 'Claude Banks',
    img: 'https://gigaland.io/images/author/author-8.jpg',
    total: '99',
    star: false,
  },
  {
    id: 5,
    name: 'Nicholas Daniels',
    img: 'https://gigaland.io/images/author/author-3.jpg',
    total: '78',
    star: true,
  },
  {
    id: 6,
    name: 'Jimmy Wright',
    img: 'https://gigaland.io/images/author/author-5.jpg',
    total: '78',
    star: true,
  },
  {
    id: 7,
    name: 'Karla Sharp',
    img: 'https://gigaland.io/images/author/author-6.jpg',
    total: '78',
    star: false,
  },
  {
    id: 8,
    name: 'Nicholas Daniels',
    img: 'https://gigaland.io/images/author/author-6.jpg',
    total: '78',
    star: true,
  },
  {
    id: 9,
    name: 'Franklin Greer',
    img: 'https://gigaland.io/images/author/author-9.jpg',
    total: '78',
    star: true,
  },
  {
    id: 10,
    name: 'Stacy Long',
    img: 'https://gigaland.io/images/author/author-10.jpg',
    total: '78',
    star: true,
  },

  {
    id: 11,
    name: 'Ida Chapman',
    img: 'https://gigaland.io/images/author/author-11.jpg',
    total: '78',
  },
  {
    id: 12,
    name: 'Fred Ryan',
    img: 'https://gigaland.io/images/author/author-12.jpg',
    total: '78',
  },
];
const TopSellers = () => {
  return (
    <div className="TopSeller section__padding">
      <h1>Top Seller</h1>
      <div className="TopSeller-list">
        {TopSeller.map((item, index) => {
          return (
            <>
              <div className="TopSeller_Name_Img">
                <small>{index + 1}.</small>
                <div className="top-seller_img_div">
                  <img src={item.img} alt="" />
                  <div className="Icons-Verifed">
                    {/* {item.star == true ? (
                      <MdVerified className="MdVerified_TopSeller" />
                    ) : (
                      <TiTick className="TitickTopSeller" />
                    )} */}
                    <TiTick className="TitickTopSeller" />
                  </div>
                </div>
                <div className="nameAndTotal">
                  <p>{item.name} </p>
                  <small>{item.total} Nfts</small>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default TopSellers;
