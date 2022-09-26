import { useParams } from 'react-router-dom';
import './RGB.css';

export default function RGB() {
  const { r, g, b } = useParams();
  const background = `rgb(${r},${g},${b})`;

  return (
    <div style={{ backgroundColor: background }} className="color-chip">
      <h1>{`rgb(${r},${g},${b})`}</h1>
    </div>
  );
}
