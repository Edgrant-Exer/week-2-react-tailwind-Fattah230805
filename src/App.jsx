import Gambar1 from './assets/1.png'
import Gambar2 from './assets/2.png'
import Gambar3 from './assets/3.png'
import Gambar4 from './assets/4.png'
import { useState } from 'react';
import Component1 from './Component1';
import Component2 from './Component2';

function App() {


    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);
    const [count3, setCount3] = useState(0);
  
    function handleClick1() {
      setCount1(count1 + 1);
    }

    function handleClick2() {
      setCount2(count2 + 1);
    }

    function handleClick3() {
      setCount3(count3 + 1);
    }
  return (
    <div className="flex flex-col items-center w-fit bg-[rgb(231,246,255)]">

      <div className="w-full flex flex-row h-[340px] py-20 items-center text-[100%] leading-6 justify-center font-sans mb-2">
       <div className="w-1/2 p-12 flex flex-col h-[244px] items-start leading-6">
        <h1 className="text-[32px] font-semibold m-0">Welcome to Internship Exercises</h1>
        <p className="text-2xl mt-4 font-bold text-[#0D2734] mb-0">Front End</p>
        <p className="my-4 text-[#527182]">Website ini dibuat oleh Edgrant sebagai sarana pembelajaran Front End. Terdapat sumber belajar dan juga website ini sendiri dapat jadi sumber belajar. Kode websiite disediakan pada button berikut.</p>
        <button className="rounded-xl bg-[#0D2734] text-white font-inherit text-lg font-bold justify-center items-start mt-8 leading-7 py-2 px-6 text-center">Repository</button>
       </div>

       <img src={Gambar1} className="w-[411.729px] h-[251.833px]"/>
      </div>

      <div className="bg-[#527182] pt-12 px-6 pb-6 text-white justify-center h-auto rounded-2xl flex flex-col items-center m-5">
        <div className="flex leading-8">
         
          <Component1
           icon={Gambar2}
           title="Javascript + Git"
           subtitle="Mempelajari dasar-dasar JavaScript dengan materi tambahan git."
          />

           <Component1
           icon={Gambar3}
           title="Frontend Basic"
           subtitle="Mempelajari HTML dan CSS dengan fokus dalam pembuatan layout website."
          />

           <Component1
           icon={Gambar4}
           title="React + Tailwind"
           subtitle="Mempelajari tools yang digunakan dalam pembuatan website modern."
          />
        </div>
        <div className="rounded-xl bg-[#0D2734] text-white font-inherit text-lg font-bold justify-center items-start mt-8 leading-7 py-3 px-6 text-center">
          View Resource
        </div>
      </div>

      <div className="flex flex-row  wjustify-evenly mt-16 bg-white/95 py-6 mb-4">
       <Component2 
       icon = "https://images.unsplash.com/photo-1428606381429-22224991fb0c"
       title2 ="UI/UX design"
       title3 ="UI/UX design for beginners"
       title4 ="$59"
       row1 = "22hr 30 min"
       row2 = "34 courses"
       row3 = "250 role"
       button ="Join Course"
       onClick={handleClick1}
       />

      <Component2 
       icon = "https://images.unsplash.com/photo-1428606381429-22224991fb0c"
       title2 ="UI/UX design"
       title3 ="UI/UX design for beginners"
       title4 ="$59"
       row1 = "22hr 30 min"
       row2 = "34 courses"
       row3 = "250 role"
       button ="Join Course"
       onClick={handleClick2}
       />

      <Component2 
       icon = "https://images.unsplash.com/photo-1428606381429-22224991fb0c"
       title2 ="UI/UX design"
       title3 ="UI/UX design for beginners"
       title4 ="$59"
       row1 = "22hr 30 min"
       row2 = "34 courses"
       row3 = "250 role"
       button ="Join Course"
       onClick={handleClick3}
       />
      </div>
   
      
      <div className="flex-col">
        <div>Button 1 : {count1}</div>
        <div>Button 2 : {count2}</div>
        <div>Button 3 : {count3}</div>
       </div>

      

    </div>
  )
}

export default App
