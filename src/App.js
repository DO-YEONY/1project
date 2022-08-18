import { Route, Routes } from "react-router-dom";
import LoginForm from "./LoginForm";
import MemberForm from "./MemberForm";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginForm />} />
      <Route path="/member" element={<MemberForm />} />
    </Routes>
  );
}

export default App;
