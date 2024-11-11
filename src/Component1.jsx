export default function Component1(props) {
  return (
    <div className="flex w-fit">
      <img
        src={props.icon}
        className="w-fit h-fit m-[10px] bg-[rgb(117,141,155)] rounded-2xl p-[18px]"
        alt="Icon"
      />
      
      <div className="flex flex-col">
        <h1 className="text-white font-bold text-[32px] leading-[32px] my-[21.440px]">
          {props.title}
        </h1>
        <p className="my-4 text-gray-200">{props.subtitle}</p>
      </div>
    </div>
  );
}
