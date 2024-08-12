import React from 'react';

function HeroSection() {
  return (
    <div className="flex justify-center items-center p-5 border-b-2 border-gray-200 px-4 py-2 rounded flex-col md:flex-row"> 
      <div className="text-3xl font-eduVIC font-bold w-1/2 text-center">Connect To Grow</div>
      <div className="flex flex-col gap-6">
        <div className="w-full h-1 bg-white rounded-xl"></div>
        <div className="text-lg font-eduVIC font-light text-justify">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur nobis voluptatibus corrupti, nisi suscipit cum iure consectetur? Itaque, optio dolor corporis reiciendis ad, nemo eos incidunt, possimus nihil ipsam aliquid.
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
