/* eslint-disable react/prop-types */

const Cards = ({item}) => {
  // console.log(item.item);
  return(
    <>
    <div className="max-w-screen px-3 mt-5 mb-5 md:px-6 md:py-4 flex gap-3 ">
      <div className="card w-92 bg-base-100 shadow-xl hover:scale-105 duration-300 ease-in-out transition-all dark:bg-slate-900 dark:text-white dark:border dark:border-slate-600">
        <figure>
          <img
            src={item.image}
            alt="Books"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {item.name}
            <div className="badge badge-secondary">{item.category}</div>
          </h2>
          <p>{item.title}</p>
          <div className="card-actions justify-between">
            <div className="badge badge-outline !p-3">${item.price}</div>
            <div className="badge badge-outline hover:bg-pink-400 hover:text-slate-100 !p-3 cursor-pointer">Buy Now</div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default Cards;
