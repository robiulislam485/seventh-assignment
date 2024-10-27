const AvailablePlayersBtn = ({activeHandler, isActive, selectedPlayer}) => {
    
    return (
            <div className=" max-w-7xl mx-auto flex items-center justify-between mt-20 mb-8">
                <h3 className="text-xl font-bold">Available Players ({selectedPlayer} / 6)</h3>
                <div className="flex gap-2 px-6 py-2 ">
                    <button onClick={()=>activeHandler(false)} className={`${isActive ? 'active px-4 py-2 rounded-l-md' : "px-4 py-2 rounded-l-md"}`}>Available</button>
                    <button onClick={()=>activeHandler(true)} className={`${isActive ? "px-4 py-2 rounded-r-md" : "active px-4 py-2 rounded-r-md"}`}>Selected ({selectedPlayer})</button>
                </div>
            </div>
    );
};

export default AvailablePlayersBtn;