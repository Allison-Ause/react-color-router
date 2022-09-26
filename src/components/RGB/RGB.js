import { useParams } from 'react-router-dom';

export default function RGB() {
  const { r, g, b } = useParams();
  const background = `rgb(${r},${g},${b})`;
  console.log(background);

  return (
    <div style={{ backgroundColor: background }}>
      <h1>{`rgb(${r},${g},${b})`}</h1>
    </div>
  );
}
