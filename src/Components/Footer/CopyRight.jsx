const CopyRight = () => {
  // import
  const SocialIcons = [
    {
      id: '1',
      img: './Facebook.png',
    },
    {
      id: '2',
      img: 'Instagram.png',
    },
    {
      id: '3',
      img: 'Twitter.png',
    },
    {
      id: '4',
      img: 'LinkDin.png',
    },
  ];
  return (
    <div className="Copyright_Div">
      <p>© Copyright 2023 - Gigaland by Designesia</p>
      <div className="Social-Icons">
        {SocialIcons.map((item, index) => {
          return <img src={item.img} alt="" key={index} />;
        })}
      </div>
    </div>
  );
};

export default CopyRight;
