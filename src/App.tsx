import React, { useEffect, useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(count);
  }, [count]);

  return (
    <div className="text-4xl">
      <div>
        <button onClick={() => setCount((n) => n + 1)}>+1</button>
      </div>
      <div>count: {count}</div>
    </div>
  );
}

export default App;
