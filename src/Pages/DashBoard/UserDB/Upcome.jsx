import useTansack from "../../../Hooks/useTansack";

const Upcome = () => {
    const [slot] = useTansack()

    return (
        <div>
           <div className="overflow-x-auto">
  <table className="table table-zebra">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Date</th>
        <th>Time</th>
      </tr>
    </thead>
    <tbody>
      {slot.map(item=> <tr key={item._id}>
        <th></th>
        <td>{item.title}</td>
        <td>{item.date}</td>
        <td>{item.time}</td>
      </tr>)}
     
     
    </tbody>
  </table>
</div>
        </div>
    );
};

export default Upcome;