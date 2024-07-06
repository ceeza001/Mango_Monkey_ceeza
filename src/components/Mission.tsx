import { missions } from "@/constants"
  
const Mission = () => {
  return(
    <div className="h-full w-screen relative top-0 left-0">
      <div className="mx-auto mt-[2rem] md:mt-0 absolute z-50 flex flex-col justify-start items-center gap-8 p-[1rem] md:p-[5rem] pointer-events-none">
        <h2 className="text-white font-bold pointer-events-none text-[28px] leading-[201%] md:text-[60px]">
          Our Mission.
        </h2>

        <div className="w-full h-full z-50 flex flex-wrap md:flex-nowrap justify-center md:justify-between gap-8 items-center">
          {missions.map((mission, i) => (
            <div key={i} className="relative">
              <div className="absolute top-10 w-full p-[2rem] px-[3rem] text-start space-y-6 -rotate-6">
                <h3 className="text-[30px] font-extrabold leading-[101%] text-[#315F56]">{mission.title}</h3>
                <p className="leading-[90%] font-semibold text-[16px] text-dark-1">{mission.content}</p>
              </div>
              
              <img 
                src="/assets/note.png" 
                alt={mission.title} 
                className="w-full"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Mission;