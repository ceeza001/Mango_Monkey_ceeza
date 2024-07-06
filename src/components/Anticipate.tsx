const Anticipate = () => {
  return (
    <div className="h-full w-screen relative top-0 left-0 bg-[#315F56]">
      <div className="w-full absolute flex flex-col text-center justify-center items-center p-[1rem] pointer-events-none">
        <div className="w-full md:w-2/5">
          <img 
            src="/assets/logo.png" 
            alt="Logo" 
            className="mb-2"
          />
        </div>
        
        <h2 className="font-bold text-[30px]">MORE THAN A GAME</h2>
        <p className="text-[15px] font-semibold mt-8">
          Explore a vibrant digital world collecting exotic fruits and rewards. Defend <br /> territories from monsters or test your skills against other players in The Arena. <br /> Rise up the leaderboard and achieve a legendary status! Earn points to redeem for <br /> exclusive NFTs and mine in-game tokens for real-world value.
        </p>

        <span className="text-[35px] md:text-2xl lg:text-6xl mt-[1em] font-extrabold">Coming Soon...</span>
      </div>
    </div>
  );
};

export default Anticipate;
