import useTansack from "../../../Hooks/useTansack";

const Upcome = () => {
    const [slot] = useTansack()

    return (
        <div>
           up come {slot.length} 
        </div>
    );
};

export default Upcome;