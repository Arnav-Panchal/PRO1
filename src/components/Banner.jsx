//import React from 'react'
import Typed from 'react-typed'
export default function Banner() {
  return (
    <div className="bg-[#2699fb] w-full py-[50px] ">
        <div className="max-w-[1240px] py-[100px] mx-auto text-center font-bold">
            <div className="text-xl md:text-3xl p-[24px]">
                Learn with me
            </div>
            <h2 className="text-white text-5xl md:text-[80px] md:p-[24px] ">Grow with us.</h2>
            <div className="text-[20px] md:text-[50px] md:p-[24px] text-white mt-8">
                Learn
                <Typed className='pl-3'
                    strings={['Web Development','Digital Marketing','Ethical Hacking']}
                    typeSpeed={100}
                    loop={true}
                    backSpeed={120}
                />
            </div>
        </div>
    </div>
  )
}
