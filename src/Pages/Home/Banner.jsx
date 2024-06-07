import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <div className="mt-10 mb-10">
           <div className="hero min-h-screen" style={{backgroundImage: 'url(https://i.ibb.co/80rQLNm/pexels-shvetsa-3844581.jpg)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Hello Health!!</h1>
      <p className="mb-5">We invite everyone who takes care of their health to undergo a comprehensive examination of the body at affordable prices.</p>
      {/* <label className="input input-bordered flex items-center gap-2">
  <input type="text" className="grow" placeholder="coupon code" />
  <button  className="btn -mr-5 btn-primary ">submit</button>

</label> */}
<div className="card w-96 bg-pink-100 shadow-xl">
  <div className="card-body ">
    <h2 className="card-title text-black">Limited offer!!</h2>
    <p className="text-black">We give all clients of our center "<span className="text-red-500">30%</span>"discount to apply the coupon code"<span className="text-red-500">H2E0A2L4T0H</span>"</p>
    <div className="card-actions justify-end">
    </div>
  </div>
</div>
<Link to={'/alltest'}> <button className="btn btn-primary mt-3 mr-10">All Tests</button>
</Link>    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;