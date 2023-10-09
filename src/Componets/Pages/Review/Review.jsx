import {  useEffect, useState } from "react";
import { getReviewedItem } from "../../utilities/review";




const Review = () => {
    const  [reviews,setReviews]=useState([]);
  
    useEffect(()=>{
   const savedReview=getReviewedItem;
   setReviews(savedReview);
    },[])
    return (
        <div className="h-[50vh] w-full">
           {
            reviews.map((review,idx)=> <div className="p-5" key={idx}> <h2 className="text-slate-500 text-xl">{idx+1}.{review}</h2></div>    )
           }
        </div>
    );
};

export default Review;