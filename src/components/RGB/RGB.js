import { useParams } from 'react-router-dom';
import './RGB.css';
import 'animate.css';

export default function RGB() {
  const { r, g, b } = useParams();
  const currentColor = `rgb ( ${r}, ${g}, ${b} )`;

  return (
    <div key={Math.random()} style={{ backgroundColor: currentColor }} className="color-chip">
      <h1 className="animate__animated animate__fadeInDown">{`rgb(${r},${g},${b})`}</h1>
    </div>
  );
}
