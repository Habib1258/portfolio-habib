import React from 'react'
import { useState } from 'react';

function Visuels() {
    const [open, setOpen] = useState(false);
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
        <>
          <section className='absolute bg-slate-200 top-44 right-20 w-3/4 h-[700px] rounded-xl drop-shadow-3xl'>
              <h1 className='text-4xl pt-10 pl-10 font-bebas text-black'>grphics projects</h1>
              <div className='w-600px pt-10 mx-10 '>
                <table className='w-full text-center table-auto rounded-t-2xl gap-4'>
                  <tr className='bg-gray-400'>
                    <th><input type="checkbox" name="checkall" id="" /></th>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Categorie</th>
                    <th>Image</th>
                    <th>Description</th>
                    <th>URL</th>
                  </tr>
                  <tr>
                    <td><input type="checkbox" name="checkall" id="" /></td>
                    <td>1</td>
                    <td>1</td>
                    <td>1</td>
                    <td>1</td>
                    <td>1</td>
                  </tr>
                </table>
              </div>
              <div className='absolute bottom-5 right-10 flex flex-row-1 gap-3'>
                <button onClick={() => setOpen(true)} className='bg-gray-500 px-10 py-2 rounded-xl'>ADD</button>
                <button className='bg-gray-500 px-10 py-2 rounded-xl'>delete</button>
              </div>
    
              {open && (
            <div className="fixed inset-0 bg-black font-bebas bg-opacity-70 flex items-center justify-center z-50">
              <div className="bg-transparent backdrop-blur border-4 border-black mx-20 w-contain p-6 relative overflow-y-auto h-[660px] rounded-2xl">
                <button
                  onClick={() => setOpen(false)}
                  className="absolute top-2 right-2 text-red-500 font-bold text-4xl px-3 py-0 bg-white rounded-2xl"
                >
                  x
                </button>
                  <div className='flex flex-col mb-20'>
                    <h1 className='text-4xl text-white pt-10 pl-20'>Image</h1>
                      <div className='grid grid-cols-2'>
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
                      <div className='pl-[500px] grid grid-rows-2 gap-5'>
                            <h1 className='text-3xl text-white'>URL</h1>
                            <input className='border-2 pl-3 border-white w-[400px] rounded-xl placeholder:text-gray-600 placeholder:font-mont' placeholder='URL' type="url" name="githubUrl" id="githubUrl" />
                            <h1 className='text-3xl text-white'>Description</h1>
                            <input type="text" name="description" className='border-2 pl-3 border-white w-[400px] h-[200px] rounded-xl placeholder:text-gray-600 placeholder:font-mont' placeholder='Description'/>
                            <button type="submit" className='px-10  font-bebas text-3xl bg-white rounded-xl hover:text-white hover:bg-black'>ADD</button>
                          </div>
                    </div>
              </div>
            </div>
          )}
          </section>
        </>
      );
    }

export default Visuels
