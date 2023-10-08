import { useEffect, useState } from "react";
import Service from "../Service/Service";


const Services = () => {
    const [services,setServicse]=useState([])

    useEffect(()=>{
        fetch('category.json')
        .then(res=>res.json())
        .then(data=>setServicse(data))
    },[])
    console.log(services);
    return (
       <div>
       <h2 className="text-5xl text-center text-rose-600 pt-32 pb-10">Our Services</h2>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
           {
            services.map(service=><Service key={service.key} service={service}></Service>)
           }
        </div>
       </div>
    );
};

export default Services;