import React, { useState } from "react";
import "./styles.css";

const EditableTable = () => {
  const [userData, setUserData] = useState([
    { id: 1, name: "tushar", age: 20, address: "Pune" },
  ]);

  const onTableEdit = (id, item) => {
    setUserData((prev) =>
      prev.map((entry) =>
        entry.id === id ? { ...entry, [item.name]: item.value } : entry
      )
    );
  };

  const addNewRow = () => {
    setUserData([...userData, { id: 2 }]);
  };

  return (
    <>
      <h3>Editable Table</h3>
      <button onClick={addNewRow}> Add Row </button>
      <table border={1}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {userData.map((item) => (
            <tr key={item.id}>
              <td>
                <input
                  type="text"
                  value={item.name}
                  onChange={(e) =>
                    onTableEdit(item.id, {
                      name: "name",
                      value: e.target.value,
                    })
                  }
                />
              </td>
              <td>
                <input
                  type="number"
                  value={item.age}
                  onChange={(e) =>
                    onTableEdit(item.id, {
                      name: "age",
                      value: Number(e.target.value),
                    })
                  }
                />
              </td>
              <td>
                <input
                  type="text"
                  value={item.address}
                  onChange={(e) =>
                    onTableEdit(item.id, {
                      name: "address",
                      value: e.target.value,
                    })
                  }
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default EditableTable;
