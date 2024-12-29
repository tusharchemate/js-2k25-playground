import React, { useState } from "react";

const StartComp = () => {
  const [star, setStar] = useState(0);

  return (
    <div>
      {Array.from({ length: 5 }).map((_, index) => (
        <spam
          style={{
            color: index < star ? "red" : "black",
            cursor: "pointer",
          }}
          onClick={() => setStar(index + 1)}
        >
          ✡
        </spam>
      ))}
      {star}
    </div>
  );
};

export default StartComp;
