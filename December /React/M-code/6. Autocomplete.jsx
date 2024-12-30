import React, { useState } from "react";

const AutoComplete = () => {
const suggestions = ['Apple', 'Banana', "apple", 'tushar', 'mango'];
const [filterList, setFilterList] = useState(suggestions);
const [text, setText] = useState('');

const onChange =(e)=> {
  const input = e.target.value;
  setText(input);
  const updatedList = suggestions.filter((item)=> item.toLowerCase().includes(input.toLowerCase()));
  setFilterList(updatedList)
}
  return (
    <div>
      <div>
          <input type="text" value={text} onChange={onChange} />
        </div>
        {filterList?.map((item)=> (
          <div key={item}> {item} </div>
        ))}
    </div>
  );
};

export default AutoComplete;
