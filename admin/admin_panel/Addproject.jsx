import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 

function Addproject() {
    const [image, setImage] = useState(null);
    const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
    return (
        <section className="w-9/12 h-[700px] bg-black absolute top-36 right-20 rounded-2xl font-bebas">
        <h1 className="text-white absolute top-5 z-30 left-10 rounded-xl font-bebas text-5xl">web  Projects</h1>
        <div className='grid grid-rows-2  mb-28'>
          <h1 className='text-4xl text-white pt-20 pl-20'>Image</h1>
          <div className="bg-black w-[300px] h-[200px] mx-auto drop-shadow-2xl absolute top-32 left-20 rounded-2xl overflow-hidden">
            {image ? (
              <img src={image} alt="Project" className="w-full h-96 object-cover rounded-2xl" />
            ) : (
              <div className="flex  border-2 border-gray-500 rounded-2xl justify-center items-center h-full text-white">No image uploaded</div>
            )}
            
            <div className=" ">
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="hidden"
                id="uploadImage"
              />
              <label
                htmlFor="uploadImage"
                className="cursor-pointer absolute bottom-8 left-20 bg-slate-900 hover:bg-slate-200 justify-center items-center text-white hover:text-black py-2 px-4 rounded-lg"
              >
                Upload Image
              </label>
            </div>
          </div>
        </div>

      <div className='pl-20 grid grid-rows-2 gap-5'>
        <h1 className='text-3xl text-white'>URL</h1>
        <input className='border-2 pl-3 border-white w-[400px] rounded-xl placeholder:text-gray-600 placeholder:font-mont' placeholder='URL' type="url" name="githubUrl" id="githubUrl" />
        <h1 className='text-3xl text-white'>description</h1>
        <input type="text" name="description" className='border-2 pl-3 border-white w-[400px] h-[200px] rounded-xl placeholder:text-gray-600 placeholder:font-mont' placeholder='Description'/>
      </div>
      
    </section>
    )
}

export default Addproject
