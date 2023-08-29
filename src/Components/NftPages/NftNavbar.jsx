import { useState } from 'react';

const NftNavbar = () => {
  const [active, setActive] = useState(null);
  console.log(active, 'active');
  const nftNavbarList = [
    {
      name: 'All NFT',
    },
    {
      name: '3D Art',
    },
    {
      name: 'Illustration',
    },
    {
      name: 'Photo',
    },
    {
      name: 'Other',
    },
  ];
  return (
    <div className="nftlist-navbar">
      {nftNavbarList.map((item, index) => {
        return (
          <p
            // className="nftlistbutton active"
            key={index}
            onClick={() => setActive(item)}
            className={`nftlistbutton active ${active == item && 'active'}`}
          >
            {item.name}
          </p>
        );
      })}
    </div>
  );
};

export default NftNavbar;
