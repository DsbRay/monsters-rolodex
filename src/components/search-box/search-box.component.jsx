import "./search-box.styles.css";

const SearchBox = ({ onChangehandler, placeholder, classname }) => (
  <input
    className={`search-box ${classname}`}
    type="search"
    onChange={onChangehandler}
    placeholder={placeholder}
  />
);

export default SearchBox;
