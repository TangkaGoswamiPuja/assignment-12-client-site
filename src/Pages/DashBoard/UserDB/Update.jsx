import { useContext } from "react";
import { Helmet } from "react-helmet";
import { AuthContext } from "../../../Authfile/Auth";
import { updateProfile } from "firebase/auth";

const Update = () => {
    const { user } = useContext(AuthContext)
  const handleUPdate = e => {
    e.preventDefault();

    const form1 = new FormData(e.currentTarget)

    const name = form1.get('name')
    const photo = form1.get('photo')
    console.log(name, photo, user)
    updateProfile(user,
      {
        displayName: name,
        photoURL: photo,
      }
    )
      .then(() => {
        alert('profile update')
      })
      .catch()
    }
    return (
        <div>
            <div>
      <Helmet>
        <title>
          Update
        </title>
      </Helmet>

      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">

          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleUPdate} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">name</span>
                </label>
                <input type="text" placeholder="name" name='name' className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo Url</span>
                </label>
                <input type="text" placeholder="photo" name='photo' className="input input-bordered" required />

              </div>
              <div className="form-control mt-6">
                <button className="btn btn-info btn-outline">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
        </div>
    );
};

export default Update;