
const Maincard = ({item}) => {
  return (
    <div className=" cursor-pointer card w-auto h-auto bg-base-100 border hover:scale-105 transition duration-300 border-gray-500 shadow-sm ">
  <figure>
    <img 
      src={item.imgUrl}
      alt={item.name} />
  </figure>
  <div className="card-body">
    <h2 className="card-title text-[15px]">
      {item.name}
      <div className="badge bg-blue-500 border-none badge-secondary capitalize">{item.category}</div>
    </h2>
    <p>{item.context}</p>
    <div className="card-actions justify-end rounded-md">
      <div className="badge badge-outline px-5 py-2  rounded-sm border border-gray-300 hover:text-white hover:bg-blue-500">${item.price}</div>
    </div>
  </div>
</div>
  )
}

export default Maincard