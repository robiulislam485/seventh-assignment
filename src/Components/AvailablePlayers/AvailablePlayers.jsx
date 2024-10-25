

const AvailablePlayers = () => {
    return (
        <div className="max-w-7xl mx-auto flex justify-between mt-20">
            <h3 className="text-xl font-bold">Available Players</h3>
            <div className="flex gap-2 px-6 py-2 bg-yellow-400">
                <button >Available</button>
                <button>Selected</button>
            </div>
        </div>
    );
};

export default AvailablePlayers;