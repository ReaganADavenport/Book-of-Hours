import { redirect } from "@remix-run/node";
import NewEntry from "../components/NewEntry";
import { getStoredPersonal, storedPersonal } from "../data/personal";

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

  export async function action({request}) {
    const formData = await request.formData();
    const personalData = Object.fromEntries(formData);
    
    const existingPersonal = await getStoredPersonal();
    personalData.id = new Date().toISOString();
    const updatedPersonal = existingPersonal.concat(personalData);
    await storedPersonal(updatedPersonal);
    return redirect('/personal');
  }