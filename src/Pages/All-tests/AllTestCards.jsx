import { Link } from "react-router-dom";

const AllTestCards = ({test}) => {
    const {_id,title,image,date,slots,short_description}= test;
    return (
        <div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl mx-auto">
  <figure><img  className="" src={image} alt={title} /></figure>
  <div className="card-body ">
    <h2 className="card-title text-2xl font-semibold">{title}</h2>
    {/* <p>{short_description}</p> */}
    <p >Date:<span className="bg-pink-400 rounded-sm p-1 font-bold">{date}</span></p>
    <p>Slots: <span className="bg-pink-400 rounded-sm p-1 font-bold">{slots}</span></p>
    <div className="card-actions justify-end">
    <Link to={`/details/${test._id}`}> <button className="btn btn-primary">details</button></Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default AllTestCards;