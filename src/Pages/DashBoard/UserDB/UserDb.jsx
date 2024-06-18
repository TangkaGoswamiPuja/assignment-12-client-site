// import useTansack from "../../../Hooks/useTansack";

import { useContext } from "react";
import { AuthContext } from "../../../Authfile/Auth";

const UserDb = () => {
const {user} = useContext(AuthContext)
console.log(user)
    // const [slot] = useTansack()

    return (
        <div>
            {/* this is user db {slot.length} */}
            <div className="card w-96 glass">
  <figure><img src={user.photoURL} alt={user.
displayName}/></figure>
  <div className="card-body">
    <h2 className="text-xl font-bold bg-orange-400 p-1 rounded-md">MY PROFILE</h2>
    <h2 className="card-title">{user.email}</h2>
    <p>{user.
displayName}</p>
    <div className="card-actions justify-end">
    </div>
  </div>
</div>
           
        </div>
    );
};

export default UserDb;