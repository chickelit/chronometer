interface Props {
  time: string;
}

export function Display(props: Props) {
  return (
    <div className="display">
      <h1
        style={{
          fontFamily: "DigitalFontRegularItalic",
          fontSize: "96px",
          margin: 0,
          padding: 0,
        }}
      >
        {props.time}
      </h1>
    </div>
  );
}
