import { useEffect, useId, useState } from "react";

export default function Profile() {
  const [count, setCount] = useState(0);
  const id = useId();

  function handleClick() {
    setCount(count + 1);
  }

  useEffect(() => {
    console.log(id);
  }, [count]);

  return <button onClick={handleClick}>Click {count}!</button>;
}
