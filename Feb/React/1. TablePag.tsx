import { useEffect, useState } from "react";
import "./styles.css";
const TableWithPaginationAndSearch = () => {
  const [page, setPage] = useState(1);
  const [userData, setUserData] = useState([]);
  const [o, setOData] = useState([]);

  const [searchValue, setSearchValue] = useState("");

  const fetchUserData = () => {
    fetch(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=10`)
      .then((res) => res.json())
      .then((data) => {
        setUserData(data);
        setOData(data);
      });
  };

  useEffect(() => {
    fetchUserData();
  }, [page]);

  const onPrev = () => {
    setPage((page) => setPage(page - 1));
  };

  const onNext = () => {
    setPage((page) => setPage(page + 1));
  };

  const onChange = (val) => {
    let updatedUserData = [];

    if (val) {
      updatedUserData = userData?.filter((item) => item.title.includes(val));
    } else {
      updatedUserData = o; // Restore original data if search input is cleared
    }
    setUserData(updatedUserData);
    setSearchValue(val);
  };

  return (
    <div className="App">
      Paginated Table with Search
      <input
        type="text"
        value={searchValue}
        onChange={(e) => onChange(e.target.value)}
      />
      <table border={1}>
        <thead>
          <tr>
            <th> Id</th>
            <th> Title</th>
          </tr>
        </thead>
        <tbody>
          {userData?.map((item) => (
            <tr>
              <td>{item.id} </td>
              <td>{item.title} </td>
            </tr>
          ))}
        </tbody>
        <button onClick={onPrev}> Prev </button>
        <button onClick={onNext}> Next </button>
      </table>
    </div>
  );
};

export default TableWithPaginationAndSearch;
