
const Herosection = ({name}) => {


  return (
    <div className="grid   md:grid-cols-2 grid-cols-1 w-full ">

      {/* first section with contain textual context */}

      <div className="space-y-5 mt-7 md:mt-40 order-2 md:order-1">
        <h1 className="md:text-4xl text-3xl font-bold">
          Welcome,
          <span className="text-blue-500 capitalize"> {name}</span> Learn something new
          everyday !!
        </h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim quae
          sit, quidem nesciunt similique aperiam dolorem possimus, illo eligendi
          vel, fugit quaerat sapiente corrupti culpa est. Nemo hic ut officiis.
        </p>

          {/*email input tag for any inqury*/}

        <div className="w-full">
          <label className="input validator md:w-[80%] w-full">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
              </g>
            </svg>
            <input type="email" placeholder="mybook@email.com" required />
          </label>
        </div>

        <button className="bg-blue-500 text-white px-3 py-2 font-semibold rounded-md ">Secondry</button>

      </div>

      <div className=" order-1 md:mt-20 lg:mt-0 mt-7">
        <img src="/herosectionimg.png" className="w-full" alt="" />
      </div>
    
    </div>
  );
};

export default Herosection;
