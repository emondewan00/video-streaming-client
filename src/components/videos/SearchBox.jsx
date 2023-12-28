import { FaSearch } from "react-icons/fa";

const SearchBox = ({ setSearchText, setSearchUrl }) => {
  let timeOut;
  const textHandler = (e) => {
    const value = e.target.value;
    if (timeOut) {
      clearTimeout(timeOut);
    }
    timeOut = setTimeout(() => {
      setSearchText(value);
      setSearchUrl(baseUrl + `text=` + value + "&" + pageUrl + category);
    }, 2000);
  };
  return (
    <div>
      <h1 className="text-3xl mb-2">Search</h1>
      <div className="relative">
        <input
          type="text"
          className="p-4 bg-black/70 relative outline-none"
          placeholder="Search..."
          onChange={textHandler}
        />
        <button className="p-4 bg-red-600 absolute right-0 top-0" type="submit">
          <FaSearch className="text-2xl" />
        </button>
      </div>
    </div>
  );
};

export default SearchBox;
