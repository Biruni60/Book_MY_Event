
import { useLoaderData, useParams } from "react-router-dom";
import { saveBookedEvent } from "../../utilities/Booked";




const Details = () => {
 const details=useLoaderData()
  const {id}=useParams();
 const idInt=parseInt(id);
 const service=details.find(detail=>detail.id===idInt) 
 const handleEvent=()=>{
saveBookedEvent(idInt);
 }
    return (
        <div className="mb-32" >
            <div className="card bg-base-100  shadow-xl">
  <figure ><img className="h-full w-full" src={service.image} /></figure>
  <div className="card-body">
    <h2 className="card-title">{service.name}</h2>
    <p className="mb-5">{service.detail}</p>
    <button onClick={handleEvent} className="btn w-full bg-rose-400 text-white">Book Event Now</button>
    
  </div>
</div>
        </div>
    );
};

export default Details;