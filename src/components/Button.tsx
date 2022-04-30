interface Props {
  text: string;
  onClick: any;
  id?: string;
}

export function Button(props: Props) {
  return (
    <button id={props.id} className="controls-button" onClick={props.onClick}>
      {props.text}
    </button>
  );
}
