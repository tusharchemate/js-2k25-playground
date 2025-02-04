import { useEffect, useState } from "react";
import "./styles.css";

const TableWithPaginationAndSearch = () => {
  const [page, setPage] = useState(1);
  const [userData, setUserData] = useState([]);
  const [originalData, setOriginalData] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [totalPages, setTotalPages] = useState(1);

  const fetchUserData = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=10`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      const totalCount = response.headers.get("x-total-count");
      setTotalPages(Math.ceil(totalCount / 10));
      setUserData(data);
      setOriginalData(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, [page]);

  const handleSearch = (value) => {
    setSearchValue(value);
    if (value) {
      const filteredData = originalData.filter((item) =>
        item.title.toLowerCase().includes(value.toLowerCase())
      );
      setUserData(filteredData);
    } else {
      setUserData(originalData);
    }
  };

  const renderPagination = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(
        <button
          key={i}
          onClick={() => setPage(i)}
          disabled={page === i}
          className={page === i ? "active" : ""}
        >
          {i}
        </button>
      );
    }
    return <div className="">{pages}</div>;
  };

  return (
    <div className="App">
      <h1>Paginated Table with Search</h1>
      <input
        type="text"
        placeholder="Search by title..."
        value={searchValue}
        onChange={(e) => handleSearch(e.target.value)}
        aria-label="Search by title"
      />
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      <table border={1}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
          </tr>
        </thead>
        <tbody>
          {userData.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.title}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {renderPagination()}
    </div>
  );
};

export default TableWithPaginationAndSearch;
