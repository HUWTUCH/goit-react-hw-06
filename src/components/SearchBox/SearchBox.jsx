import {useDispatch, useSelector} from "react-redux";
import {changeFilter, selectNameFilter} from "../../redux/filtersSlice.js";

const SearchBox = () => {
    const dispatch = useDispatch();
    const nameFilter = useSelector(selectNameFilter)
    const handleFilterChange = (name) => {
        dispatch(changeFilter(name))
    };
    return (
        <input
            type="text"
            value={nameFilter}
            placeholder="Search by name..."
            onChange={(e)=> handleFilterChange(e.target.value)}
        />
    );
};

export default SearchBox;