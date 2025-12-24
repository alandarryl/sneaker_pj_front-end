
import FeaturedSection from '../components/featuredSection/FeaturedSection';
import useFetch from "../hooks/useFetch";

import DetailCard from '../components/detailCard/DetailCard';


function DetailPage() {  

    const id = 1;


const {
    data: productList,
    loading,
    error,
} = useFetch( `https://sneaker-pj-back-end.vercel.app/api/sneakers/detail/${id}`);



    return (
    <div>
        <h1>Detail Page</h1>
        <p>This is the detail page content.</p>
        <DetailCard productList={productList} loading={loading} error={error} />
        <FeaturedSection startList={0} endList={4} />
    </div>
    );
}


export default DetailPage;
