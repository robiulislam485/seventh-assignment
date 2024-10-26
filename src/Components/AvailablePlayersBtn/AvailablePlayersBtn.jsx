const AvailablePlayersBtn = ({activeHandler, isActive, selectedPlayer}) => {
    const {cart}=isActive;
    return (
            <div className=" max-w-7xl mx-auto flex items-center justify-between mt-20 mb-8">
                <h3 className="text-xl font-bold">Selected Players ({selectedPlayer} / 15)</h3>
                <div className="flex gap-2 px-6 py-2 ">
                    <button onClick={()=>activeHandler("available")} className={`${cart ? 'active px-4 py-2 rounded-l-md' : "px-4 py-2 rounded-l-md"}`}>Available</button>
                    <button onClick={()=>activeHandler("selected")} className={`${cart ? "px-4 py-2 rounded-r-md" : "active px-4 py-2 rounded-r-md"}`}>Selected ({selectedPlayer})</button>
                </div>
            </div>
    );
};

export default AvailablePlayersBtn;