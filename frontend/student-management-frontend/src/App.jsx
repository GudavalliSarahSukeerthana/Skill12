import { useState } from "react";
import StudentList from "./components/StudentList";
import AddStudent from "./components/AddStudent";

function App() {
  const [refresh, setRefresh] = useState(false);

  const reload = () => {
    setRefresh(!refresh);
  };

  return (
    <div>
      <h1>Student Management System</h1>
      <AddStudent onAdd={reload} />
      <StudentList refresh={refresh} />
    </div>
  );
}

export default App;