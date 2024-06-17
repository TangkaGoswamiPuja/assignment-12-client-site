import useTansack from "../../../Hooks/useTansack";

const UserDb = () => {
    const [slot] = useTansack()

    return (
        <div>
            this is user db {slot.length}
           
        </div>
    );
};

export default UserDb;