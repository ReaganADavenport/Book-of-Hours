export const meta = () => {
  return [{ title: "Book of Hours" }];
};
import { Link } from '@remix-run/react'
// import styles from '../styles/main.css'

export default function Index() {
  return (
    <div style={{ fontFamily: "Canterbury", lineHeight: "1.8" }}>
      <h1 style={{ fontSize:"40px"}}>Welcome to Book of Hours</h1>
      <p>I am the home page</p>
      <Link to='/social'>Go to Social</Link>
      <blockquote></blockquote>
      <Link to='/personal'>Go to Personal</Link>
      <blockquote></blockquote>
      <Link to='/work'>Go to Work</Link>
    </div>
  );
}
