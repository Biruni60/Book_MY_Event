import AddReview from "../AddReview/AddReview";
import Banner from "../Banner/Banner";
import OurOffices from "../OurOffices/OurOffices";
import Services from "../Services/Services";



const Home = () => {
    return (
        <div>
          <div ><Banner></Banner> </div>
          
          <div>
          
            <Services></Services>
          </div>
          <div >
            <OurOffices></OurOffices>
          </div>
          <div>
            <AddReview></AddReview>
          </div>
        </div>
    );
};

export default Home;