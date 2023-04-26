export const meta = () => {
  return [{ title: "Book of Hours" }];
};

import styles from '../styles/main.css'

export default function Index() {
  return (
    <div style={{ fontFamily: "Canterbury", lineHeight: "1.8" }}>
      <h1 style={{ fontSize:"40px"}}>Welcome to Book of Hours</h1>
      <p>I am the home page</p>
    </div>
  );
}
