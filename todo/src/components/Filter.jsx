const Filter = ({ filter, setFilter }) => {
    return (
        <div className="filter">
            <h2>Filt:</h2>
            <div className="filter-options">
                <div>
                    <p>Status:</p>
                    <select value={filter} onChange={(e) => setFilter(setFilter.target.value)}>
                        <option value="All">Todas</option>
                        <option value="Completed">Completas</option>
                        <option value="Imcomplete">Incompletas</option>
                    </select>
                </div>
                <div>
                <p>Ordem alfabetica: </p>
                <button>Asc</button>
                <button>Desc</button>
                </div>
            </div>
        </div>
    );
};

export default Filter;
