import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getBookedEvent } from "../../utilities/Booked";
import BookedEvent from "../BookedEvent/BookedEvent";


const Event = () => {
    const events=useLoaderData();
    const [bookedEvents,setBookedEvents]=useState([]);
    useEffect(()=>{
        const storedEventId= getBookedEvent();
        if(events.length>0){
            const bookEvent=events.filter(event=>storedEventId.includes(event.id))
        setBookedEvents(bookEvent)
        }

      
    },[events])
    return (
        <div>
        <h2 className="text-4xl text-center font-bold my-10">BOOKED EVENT</h2>
          {
            bookedEvents.map(bookEvent=><BookedEvent key={bookedEvents.id} bookEvent={bookEvent}></BookedEvent>)
          }
        </div>
    );
};

export default Event;