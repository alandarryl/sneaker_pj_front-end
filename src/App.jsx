
import './App.css'

import Navbar from './components/navbar/Navbar.jsx';
import Footer from './components/footer/Footer.jsx';
import CardGrid from './components/cardGrid/CardGrid';

// limitedLIst props: startList, endList
import FeaturedSection from './components/featuredSection/FeaturedSection.jsx';

//banner background image issue to fix later
import Banner from './components/banner/Banner.jsx';

//seller section
import SellerSection from './components/bestSellerSection/SellerSection.jsx';


function App() {

  return (
    <>
    <Navbar />
      {/* <CardGrid /> */}
      <Banner />
      <FeaturedSection startList={0} endList={4} />
      <SellerSection />
      <Footer />
    </>
  )
}

export default App
