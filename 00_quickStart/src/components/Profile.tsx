export default function Profile({
  count,
  setCount,
}: {
  count: number;
  setCount: (value: number) => void;
}) {
  function handleClick() {
    setCount(count + 1);
  }

  return <button onClick={handleClick}>Click {count}!</button>;
}
