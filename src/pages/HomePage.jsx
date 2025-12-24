
import FeaturedSection from "../components/featuredSection/FeaturedSection";
import SellerSection from "../components/bestSellerSection/SellerSection";
import Banner from "../components/banner/Banner";



function HomePage() {
return (
    <div>
        <Banner/>
        <h1>Welcome to the Home Page</h1>
        <FeaturedSection startList={0} endList={4} />
        <SellerSection />
    </div>
);
}

export default HomePage;


