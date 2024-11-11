export default function Component2(props) {
  return (
    <div className="flex flex-col justify-start w-1/3 rounded-md h-auto bg-slate-300 p-4 relative font-sans mx-2">
      <img
        src={props.icon}
        className="rounded-md w-11/12 h-3/10 flex justify-center items-center mx-auto mt-2"
        alt="Icon"
      />
      <h3 className="m-2 text-sm font-light text-gray-500">
       {props.title2}
      </h3>
      <h2 className="m-2 text-base">
       {props.title3}
      </h2>
      <h4 className="m-2 text-sky-400">
       {props.title4}
      </h4>
      <div className="flex flex-row justify-evenly text-gray-500 mb-2 mt-1">
        <p> {props.row1} </p>
        <p> {props.row2} </p>
        <p> {props.row3} </p>
      </div>
      <div className="flex justify-center items-center absolute bottom-[-15px] fit-content  w-full mt-2">
        <div className="bg-gray-800 px-4 py-2 cursor-pointer text-white rounded-full font-semibold"onClick={props.onClick}>
          {props.button}
        </div>
      </div>
    </div>  
      
  );
}