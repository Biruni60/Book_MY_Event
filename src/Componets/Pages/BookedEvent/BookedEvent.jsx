
import {PropTypes} from "prop-types"
const BookedEvent = ({bookEvent}) => {
    const {name,short_description,image}=bookEvent;
    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
  <figure><img src={image} /></figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p>{short_description}</p>
  </div>
</div>
        </div>
    );
};
BookedEvent.propTypes={
    bookEvent:PropTypes.object
}
export default BookedEvent;