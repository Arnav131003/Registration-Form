import logo from './logo.svg';
import { useForm } from "react-hook-form";
import './App.css';

function App() {
  const {register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <div class="login-box">
        <h2>Registeration Form</h2>
        <form>
          <div class="user-box">
            <input type="text" name="" required=""/>
            <label>Register Number</label>
          </div>
          <div class="user-box">
            <input type="text" name="" required=""/>
            <label>Name</label>
          </div>
          <div class="user-box">
            <input type="text" name="" required=""/>
            <label>Official Email Address</label>
          </div>
          <div class="user-box">
            <input type="text" name="" required=""/>
            <label>Github Profile</label>
          </div>
          <a href="#">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Submit</a>
        </form>
    </div>
    
  );
}

export default App;
