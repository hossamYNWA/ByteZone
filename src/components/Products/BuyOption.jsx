import "./buyOption.css";

export default function BuyOption({ content,clickHandler }) {
  return <button onClick={clickHandler}>{content}</button>;
}
