export default function ShowImages({ roll }) {
  const images = () => {
    if (roll === 1) {
      return <img src="/images/dado1.png" alt="lado1" />;
    }
    if (roll === 2) {
      return <img src="/images/dado1.png" alt="lado2" />;
    }
    if (roll === 3) {
      return <img src="/images/dado1.png" alt="lado3" />;
    }
    if (roll === 4) {
      return <img src="/images/dado1.png" alt="lado4" />;
    }
    if (roll === 5) {
      return <img src="/images/dado1.png" alt="lado5" />;
    }
    if (roll === 6) {
      return <img src="/images/dado1.png" alt="lado6" />;
    }
  };

  return <div>{images()}</div>;
}
