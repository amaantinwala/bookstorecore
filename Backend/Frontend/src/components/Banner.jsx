import banner from '../assets/Banner.png'
const Banner = () => {
  return (
    <>
      <div className="max-w-screen flex flex-col md:flex-row mx-4 px-2 md:px-6 my-2 md:mx-8 items-center md:pt-20 pt-14 dark:bg-slate-900 dark:text-white">
        <div className="w-full md:w-1/2 md:mt-20 mt-14">
          <div className="space-y-8">
            <h1 className="font-bold text-4xl">
              Hello, welcomes here to learn something
              <span className="text-pink-500"> new everyday!!</span>
            </h1>
            <p className="text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
              dolore voluptas perferendis distinctio, facere deleniti, repellat
              quibusdam commodi consectetur fugiat ab quas corporis.
            </p>

            <label className="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input type="text" className="grow" placeholder="Email" />
            </label>
          </div>
            <button className="mt-5 btn btn-secondary">Newsletter</button>
        </div>
        <div className="w-full lg:mx-8 md:mt-20 mt-14 md:w-1/2">
            <img src={banner} alt="Banner" className='mx-0 lg:mx-20 md:mx-32 w-auto' />
        </div>
      </div>
    </>
  );
};

export default Banner;
