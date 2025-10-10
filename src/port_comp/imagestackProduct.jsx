import { useState } from "react";
import deepcool from '../assets/images/deepcool.png';
import lap from '../assets/images/lap.png';
import riva from '../assets/images/riva.png';
import asus from '../assets/images/asus.png';
import cable from '../assets/images/cable.png';
import ass from '../assets/images/ass.png';
import casque from '../assets/images/casque.png'

const images = [deepcool,casque, cable, ass, lap, riva, asus];

export default function ImagestackProduct() {
  const [open, setOpen] = useState(false);

  return (
    <div className="p-4 mx-auto w-fit items-center justify-center text-center">
      {/* Stacked Preview */}
      <div className="relative flex justify-center items-center rounded-xl h-32 pb-20">
            {images.slice(0, 3).map((src, index) => {
                // Rotation and position logic
                let rotation = '';
                let zIndex = 10 + index;
                let translate = '';

                if (index === 0) {
                rotation = '-rotate-12';
                translate = '-translate-x-8';
                } else if (index === 1) {
                rotation = 'rotate-0';
                translate = 'translate-x-0';
                } else if (index === 2) {
                rotation = 'rotate-12';
                translate = 'translate-x-8';
                }

                return (
                <img
                    key={index}
                    src={src}
                    alt={`Preview ${index}`}
                    className={`absolute w-32 h-auto lg:w-44 lg:h-44 rounded-lg border-2 border-white shadow-lg  transform ${rotation} ${translate}`}
                    style={{ zIndex }}
                />
                );
            })}
            </div>

      <button
        onClick={() => setOpen(true)}
        className="lg:mt-4 pb-20 pt-5 lg:pt-10 text-center justify-center text-white hover:text-lime-400 font-bebas text-xl lg:text-3xl px-4 py-2 rounded shadow"
      >
        Products Design
      </button>

      {/* Modal Grid */}
      {open && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center w-screen  lg:w-full z-50">
            <div className="relative bg-transparent  backdrop-blur rounded-lg w-68 lg:mx-20 lg:w-full p-6 overflow-y-auto h-[800px]">
            <button
              onClick={() => setOpen(false)}
              className="absolute top-2 right-2 text-red-500 font-bold text-4xl px-2 bg-white rounded-2xl">
              ×
            </button>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 w-72 lg:w-full ">
              {images.map((src, index) => (
                <img
                  key={index}
                  src={src}
                  alt={`Image ${index}`}
                  className="w-full rounded-xl h-auto object-cover "
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
