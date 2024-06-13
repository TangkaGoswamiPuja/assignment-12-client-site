import { useLoaderData, useParams } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

const Details = () => {
    const details = useLoaderData();
    const {id} = useParams()
    const {title,image,date,slots,short_description} = details || {}
    const {user} = useAuth();


    const handleSlot = slot =>{
        console.log(slot, user.email);

    }
    return (
        <div>
            <div className="card bg-base-100 shadow-xl mx-auto mb-5 mt-5">
  <figure><img className="w-1/2" src={image}alt={id}/></figure>
  <div className="card-body">
  <h2 className="card-title text-2xl font-semibold">{title}</h2>
    <p>{short_description}</p>
    <p >Date:<span className="bg-pink-400 rounded-sm p-1 font-bold">{date}</span></p>
    <p>Slots: <span className="bg-pink-400 rounded-sm p-1 font-bold">{slots}</span></p>
    <div className="card-actions justify-end">
      <button 
      onClick={()=>handleSlot(details)}
      className="btn btn-primary">book now</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Details;