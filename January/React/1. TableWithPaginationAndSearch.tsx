import { useEffect, useState } from "react";
import "./styles.css";
const TableWithPaginationAndSearch = () => {
  // https://dummyjson.com/users?limit=0
  const [userData, setUserData] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [originalData, setOriginalData] = useState([]); // To store unfiltered data

  const fetchData = async (page = 1) => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=10`
    );
    const data = await response.json();
    setOriginalData(data);
    setUserData(data);
  };

  const onNextPage = () => {
    setCurrentPage((prev) => prev + 1);
  };

  const onPrevPage = () => {
    setCurrentPage((prev) => prev - 1);
  };

  useEffect(() => {
    fetchData(currentPage); // Fetch data whenever currentPage changes
  }, [currentPage]);

  const [searchValue, setSearch] = useState("");
  const onSearch = (value) => {
    setSearch(value); // Update the search value
    if (value) {
      const updatedData = userData?.filter((item) => item.body.includes(value));
      setUserData(updatedData);
    } else {
      // Reset to original data if search value is cleared
      setUserData(originalData);
    }
  };

  return (
    <div className="App">
      <h1>Paginated table With Search</h1>
      <h2> Search </h2>
      <input
        type="text"
        value={searchValue}
        onChange={(e) => onSearch(e.target.value)}
      />
      <table border={1}>
        <thead>
          <tr>
            <th>User Id</th>
            <th>Title</th>
            <th>Body</th>
          </tr>
        </thead>
        <tbody>
          {userData?.map((user) => (
            <tr>
              <td>{user.id} </td>
              <td>{user.title} </td>
              <td>{user.body} </td>
            </tr>
          ))}
        </tbody>
      </table>
      <>
        Page : {currentPage} of {userData?.length}
        <button onClick={onPrevPage} disabled={currentPage == 1}>
          {" "}
          Prev
        </button>
        <button onClick={onNextPage}> Next</button>
      </>
    </div>
  );
}

export default TableWithPaginationAndSearch;
