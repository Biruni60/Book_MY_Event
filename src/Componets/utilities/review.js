const getReviewedItem=()=>{
    const storedReview=localStorage.getItem('review')
    if(storedReview){
        return JSON.parse(storedReview)
    }
    return [];
}

const saveReviewdItem=review=>{
   const storedReviewed=getReviewedItem();
    storedReviewed.push(review);
    localStorage.setItem('review',JSON.stringify(storedReviewed))
   
}
export{ getReviewedItem, saveReviewdItem}