import SignupForm from "./components/SignUpForm";
import LoginForm from "./components/LoginForm";

function App() {
  return (
    <div className="flex justify-center items-start h-screen p-4 bg-gray-100">
      <div className="flex space-x-8 max-w-4xl w-full">
        <div className="flex-1 p-4 bg-white shadow-md rounded-lg">
          <SignupForm />
        </div>
        <div className="flex-1">
          <LoginForm />
        </div>
      </div>
    </div>
  );
}

export default App;
