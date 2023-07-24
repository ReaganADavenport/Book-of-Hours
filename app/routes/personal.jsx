import NewEntry from "../components/NewEntry";

export const meta = () => {
    return [{ title: "Book of Hours - Personal" }];
  };
  
  export default function Personal() {
    return (
      <div style={{ fontFamily: "Canterbury", lineHeight: "1.4" }}>
        <h1>Welcome to Personal</h1>
        <NewEntry></NewEntry>
      </div>
    );
  }