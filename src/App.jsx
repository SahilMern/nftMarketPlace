import Footer from './Components/Footer/Footer';
import Hero from './Components/Hero/Hero';
import HotCollection from './Components/HotCollection/HotCollection';
import Navbar from './Components/Navbar/Navbar';
import NewItem from './Components/NewItem/NewItem';
import TopSellers from './Components/TopSellers/TopSellers';
// import NftPages from './Components/NftPages/NftPages';

const App = () => {
  return (
    <>
      <div className="gradient__bg">
        <Navbar />
        <Hero />
        <NewItem />
        <HotCollection />
        <TopSellers />
        <Footer />
      </div>
    </>
  );
};

export default App;
