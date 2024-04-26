import {useDispatch} from "react-redux";
import {changeFilter} from "../../redux/filtersSlice.js";

const SearchBox = () => {
    const dispatch = useDispatch();
    const handleFilterChange = (name) => {
        dispatch(changeFilter(name))
    };
    return (
        <input
            type="text"
            placeholder="Search by name..."
            onChange={(e)=> handleFilterChange(e.target.value)}
        />
    );
};

export default SearchBox;