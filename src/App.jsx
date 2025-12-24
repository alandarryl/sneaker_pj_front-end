
import './App.css'

import Navbar from './components/navbar/Navbar.jsx';
import Footer from './components/footer/Footer.jsx';


// pages
import HomePage from './pages/homePage.jsx';
import DetailPage from './pages/DetailPage.jsx';


function App() {

  return (
    <>
    <Navbar />
      {/* <CardGrid /> */}
      {/* <Banner />
      <FeaturedSection startList={0} endList={4} />
      <SellerSection /> */}
      {/* <HomePage /> */}
      <DetailPage />
      <Footer />
    </>
  )
}

export default App
