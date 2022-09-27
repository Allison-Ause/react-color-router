import { useParams } from 'react-router-dom';
import './RGB.css';
import 'animate.css';
import JSConfetti from 'js-confetti';

export default function RGB() {
  const jsConfetti = new JSConfetti();
  const { r, g, b } = useParams();
  const currentColor = `rgb(${r},${g},${b})`;
  jsConfetti.addConfetti({
    emojis: ['💥', '✨'],
    emojiSize: 35,
    confettiNumber: 35,
  });

  return (
    <div key={Math.random()} style={{ backgroundColor: currentColor }} className="color-chip">
      <h1 className="animate__animated animate__fadeInDownBig">{`rgb(${r},${g},${b})`}</h1>
    </div>
  );
}
