import PropTypes from 'prop-types'; 
import { Link } from 'react-router-dom';

const Service = ({service}) => {
    const{id,name,image,price,short_description}=service;
    return (
        <div>
            <div className="card  bg-base-100 shadow-xl md:h-[80vh] lg:h-[50vh] ">
  <figure className="h-full lg:h-3/4">
    <img src={image} className="rounded-xl h-full w-full" />
  </figure>
  <div className="card-body ">
    <h2 className="card-title text-2xl">{name}</h2>
    <p><span className='text-xl font-semibold'>Price:$</span>{price}</p>
    <p>{short_description}</p>
    <div className="card-actions">
    <Link to={`/${id}`} ><button className="btn bg-rose-400 w-full text-white">View Detail</button></Link>
    </div>
  </div>
</div>
        </div>
    );
};
Service.propTypes={
    service:PropTypes.object
}
export default Service;