import { useId } from "react";
// import { useDispatch } from "react-redux";
// import { useSelector } from "react-redux";
// import { changeFilter } from "../../redux/filtersSlice";
// import { selectNameFilter } from "../../redux/filtersSlice";
import css from "./SearchBox.module.css";

export default function SearchBox() {
  // const dispatch = useDispatch();
  // const filter = useSelector(selectNameFilter);
  const searchId = useId();
  // const handleChange = (e) => {
  //   const newFilter = e.target.value;
  //   dispatch(changeFilter(newFilter));
  // };
  return (
    <div className={css.container}>
      <label htmlFor={searchId}>Find contacts by name</label>
      <input
        // value={filter}
        // onChange={handleChange}
        name="search"
        type="text"
        id={searchId}
      />
    </div>
  );
}
