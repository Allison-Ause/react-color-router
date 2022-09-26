import { useParams } from 'react-router-dom';

export default function RGB() {
  const { r, g, b } = useParams;

  return (
    <div>
      <h1>{`rgb(${r}${g}${b})`}</h1>
    </div>
  );
}
