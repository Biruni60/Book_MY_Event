
import { saveReviewdItem } from "../../utilities/review";


const AddReview = () => {
    const handleReview=e=>{
      e.preventDefault();
      const review=e.target.name.value;
       saveReviewdItem(review);
    }
    return (
        <div>
            <div className="shadow-xl mb-10 p-10">
            <h2 className="text-4xl text-rose-600 my-10 text-center">Add Reviews</h2>
               <form onSubmit={handleReview}>
               <input className="textarea textarea-secondary w-full h-[20vh] mb-2" type="text" placeholder="Add Review" name="name"/>
               <input className="w-full bg-rose-400 btn text-white" type="submit" value="Review" />
               </form>
            </div>
        </div>
    );
};

export default AddReview;