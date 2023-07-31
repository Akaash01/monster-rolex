import "./search-box.css";
const SearchBox = (props) => {
  const { className, placeholder, onChange } = props;
  return (
    <input
      type="search"
      className={`search-box ${className}`}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};
export default SearchBox;
