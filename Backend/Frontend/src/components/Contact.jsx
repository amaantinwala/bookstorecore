import Navbar from "./Navbar";
import {useForm} from "react-hook-form";
const Contact = () => {
  const {register, handleSubmit, formState:{errors}} = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <>
      <Navbar />
      <div className="w-full min-h-screen px-3 md:px-7 py-28 flex flex-col items-center gap-3 dark:bg-slate-900 dark:text-white">
        <h1 className="text-2xl md:text-4xl">Contact Us</h1>
        <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
        <div className="dark:bg-slate-900 dark:text-white justify-center items-center p-4 flex flex-col gap-4">
          
            <label className="input input-bordered flex items-center gap-2 dark:bg-slate-900 dark:border dark:border-slate-600 dark:text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input type="text" className="grow" placeholder="Name" {...register("name",{required:true})}/>
            </label>
            {errors.name && (
        <p role="alert" className=" px-2 text-sm text-red-500">Name is required</p>
      )}
            <label className="input input-bordered flex items-center gap-2  dark:bg-slate-900 dark:border dark:border-slate-600 dark:text-white">
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
            </label>
            {errors.email && (
        <p role="alert" className=" px-2 text-sm text-red-500">Email is required</p>
      )}
            <textarea className="textarea textarea-bordered dark:bg-slate-900 dark:border w-64 dark:border-slate-600 dark:text-white" placeholder="Message" {...register("textarea",{required:true})}></textarea>
            {errors.textarea && (
        <p role="alert" className=" px-2 text-sm text-red-500">Message is required</p>
      )}
            <button type="submit" className="btn btn-primary w-64" >Submit</button>
        </div>
        </form>
      </div>
    </>
  );
};

export default Contact;
