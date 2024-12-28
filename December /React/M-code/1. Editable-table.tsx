import { useEffect, useState } from "react";

const initialTableData = [
  {
    id: 1,
    name: "Tushar",
    age: 25,
    DOB: "1997-01-20",
  },
];

const EditableTable = () => {
  const [tableData, setTableData] = useState(initialTableData);

  const onTableDataChange = (e, id, name) => {
    const value = e.target.value;

    setTableData((prevData) =>
      prevData.map((item) => {
        if (item.id === id) {
          return { ...item, [name]: value };
        }
        return item;
      })
    );
  };

  const addNewRow = () => {
    const lastIndex = tableData[tableData.length - 1];
    console.log("lastIndex", lastIndex);

    let newRow = {
      id: lastIndex?.id ? lastIndex?.id + 1 : 1,
      name: "Dummy",
      age: 33,
    };
    setTableData([...tableData, newRow]);
  };

  const onTableSort = () => {
    const updatedSortData = [...tableData].sort((a, b) => b.id - a.id);
    setTableData(updatedSortData);
  };

  return (
    <div>
      Editable Table
      <div>
        <button onClick={addNewRow}> Add Row </button>
        <button onClick={onTableSort}> Sort </button>
      </div>
      <table border={1}>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Age</th>
            <th>DOB</th>
          </tr>
        </thead>

        <tbody>
          {tableData?.map((item) => (
            <tr>
              <td>
                <input value={item.id} type="text" readOnly />
              </td>
              <td>
                <input
                  type="text"
                  value={item.name}
                  onChange={(e) => onTableDataChange(e, item.id, "name")}
                />
              </td>
              <td>
                <input
                  type="number"
                  value={item.age}
                  onChange={(e) => onTableDataChange(e, item.id, "age")}
                />
              </td>

              <td>
                <input
                  type="text"
                  value={item.DOB}
                  onChange={(e) => onTableDataChange(e, item.id, "DOB")}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EditableTable;
