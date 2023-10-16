



const ToggleTab = (props: any) => {
  

  return (
    <div className="flex justify-center mt-32 font-nunito text-2xl">
      <div className="bg-gradient-to-br from-indigo-900/[0.09] via-violet-900/[0.1] to-purple-900/[0.3] flex justify-between items-center rounded-full w-[50rem] bg-[#151934] h-[5rem] px-8">
        {props.aboutLists.map((aboutList:string, i:number) => (
        
        <h3 key={i} onClick={() => props.setSelected(i)} className={`${props.Selected == i? "bg-[#7214ffe2]": ""} transition duration-700 cursor-default w-[15rem] h-[4rem] flex justify-center items-center rounded-full`}>
          {aboutList}
        </h3>
        ))}
      </div>
    </div>
  );
};

export default ToggleTab;
