import "./App.css";

import React, { useEffect, useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(count);
  }, [count]);

  return (
    <div className="App">
      <button onClick={() => setCount((n) => n + 1)}>+1</button>
      {count}
    </div>
  );
}

export default App;
