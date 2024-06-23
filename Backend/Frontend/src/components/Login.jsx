import{Link} from "react-router-dom"
import {useForm} from "react-hook-form"
import axios from "axios";
import toast from 'react-hot-toast';
const Login = () => {
  const { register, handleSubmit, formState:{errors}} = useForm()
  const onSubmit = async(data) => {
    const userInfo = {
      email:data.email,
      password:data.password,
    }

    await axios.post("/user/login",userInfo)
    .then((res) => {
      if(res.data){
        toast.success("Login Successfull");
        document.getElementById("my_modal_3").close();
        setTimeout(() => {
          window.location.reload();
          localStorage.setItem("Users",JSON.stringify(res.data.userDetails));
        },2000);
      }
    }).catch((err) => {
      if(err.response){
        console.log(err);
        toast.error("Error: " + err.response.data.message);
        setTimeout(() =>{},2000);
      }
    })
  }
  return (
    <>
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box dark:bg-slate-900 dark:text-white">
          <form method="dialog">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-3 top-3">
              ✕
            </button>
          </form>
          <form  onSubmit={handleSubmit(onSubmit)} >
          <h3 className="font-bold text-lg">Login</h3>
          <div className="mt-6 md:mt-8 p-2 flex flex-col w-full gap-3">
            <label className="input input-bordered flex items-center gap-2 dark:bg-slate-900 dark:text-white dark:border dark:border-slate-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input type="email" className="grow" placeholder="Email" {...register("email",{required:true})}/>
              <br />
              
            </label>
            {errors.email && (
        <p role="alert" className=" px-2 text-sm text-red-600">Email is required</p>
      )}
           

            <label className="input input-bordered flex items-center gap-2 dark:bg-slate-900 dark:text-white dark:border dark:border-slate-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <path
                  fillRule="evenodd"
                  d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                  clipRule="evenodd"
                />
              </svg>
              <input type="password" className="grow" placeholder="Password" {...register("password",{required:true})}/>
              <br/>
              
            </label>
            {errors.password && (
        <span role="alert" className="px-2 text-sm text-red-600">Password is required</span>
      )}
            <div className="flex justify-between w-full items-center gap-4 md:gap-2">
              <button className="btn bg-pink-500 hover:bg-pink-400 outline-none border-none text-white w-1/2 ">
                Login
              </button>
              <span className="text-sm md:text-lg">
                Not Registered?
                <Link to="/signup">
                <a className="cursor-pointer text-blue-600 underline">
                  {" "}
                  SignUp
                </a>
                </Link>

              </span>
              
            </div>
            
          </div>
          </form>
        </div>
      </dialog>
      </div>
    </>
  );
};

export default Login;
