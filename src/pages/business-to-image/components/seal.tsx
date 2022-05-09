export const Seal = ({ texts }: { texts: string[] }) => {
  return (
    <>
      <div
        id="star-five"
        style={{
          position: 'absolute',
          top: -76,
          left: -42,
          transform: `rotate(-${(texts.length * 30) / 2}deg) scale(0.2)`,
        }}
      ></div>

      <div
        style={{
          position: 'relative',
          width: '100%',
          height: '100%',
          transformOrigin: 'center',
          transform: `rotate(-${(texts.length * 30) / 2}deg)`,
        }}
      >
        {texts.map((ret, index) => (
          <div
            key={index}
            style={{
              position: 'absolute',
              left: '50%',
              top: 0,
              height: '100%',
              width: 20,
              marginLeft: -10,
              transformOrigin: 'center',
              transform: `rotate(${index * 30}deg)`,
            }}
          >
            {ret}
          </div>
        ))}
      </div>
    </>
  );
};
