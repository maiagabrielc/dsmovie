import { ReactComponent as StarFull} from 'assests/img/star-full.svg';
import { ReactComponent as StarHalf} from 'assests/img/star-half.svg';
import { ReactComponent as StarEmpty} from 'assests/img/star-empty.svg';
import './styles.css';

type Props = {
  score: number,
};

type StartProps = {
  fill: number,
};

// EX:
// getFills(3.5) => [1, 1, 1, 0.5, 0]
// getFills(4.1) => [1, 1, 1, 1, 0.5]
function getFills(score: number) {

  const fills = [0, 0, 0, 0, 0];

  const integerPart = Math.floor(score);

  for (let i = 0; i < integerPart; i++) {
    fills[i] = 1;
  }

  const diff = score - integerPart;
  if (diff > 0) {
    fills[integerPart] = 0.5;
  }

  return fills;
}

function Star({ fill }: StartProps) {
  switch(fill){
    case 0:
      return <StarEmpty />
    case 1:
      return <StarFull />
    default:
      return <StarHalf />
  }
}

export default function MovieStars({ score }: Props) {
  const fills = getFills(score);

  return (
    <div className="dsmovie-stars-container">
      <Star fill={fills[0]} />
      <Star fill={fills[0]} />
      <Star fill={fills[0]} />
      <Star fill={fills[0]} />
      <Star fill={fills[0]} />
    </div>
  );
}
