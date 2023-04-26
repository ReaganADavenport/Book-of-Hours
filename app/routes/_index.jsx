export const meta = () => {
  return [{ title: "Book of Hours" }];
};
import UpperBorder from "../../public/UpperBorder.png"

export default function Index() {
  return (
    <div style={{ fontFamily: "Canterbury", lineHeight: "1.4" }}>
      <img src={UpperBorder} style={{width: '120%', marginBottom: 0, paddingBottom: 0}}></img>
      <h1>Welcome to Book of Hours</h1>
      <p>I am the home page</p>
    </div>
  );
}
