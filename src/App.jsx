import React from 'react'

const App = () => {
  return (
    <div>
      {/*Sub div 1*/}
      <div className="flex flex-row items-center justify-center mt-5">
            <div className="h-1/2 border-2 border-black">
              <canvas></canvas>
            </div>
            <div className="h-1/2 border-2 border-black">
            <canvas></canvas>
            </div>
      </div>
      {/*End of Sub div 1*/}
    <div className="flex flex-col items-center justify-center">
     
      <div className="border-2 border-base-400 flex flex-col m-20 bg-red-300 p-5">
            <form className="space-y-4">
            <p>Connect with us!</p>
            {/*Name*/}
            <input type="text"
            className="w-full"
            placeholder="Your name"
            >
            </input>
            {/*Email*/}
            <input type="text"
            className="w-full"
            placeholder="Your Email"
            >
            </input>
            {/*Phone*/}
            <input type="text"
            className="w-full"
            placeholder="Your Phone"
            >
            </input>
            {/*Message*/}
            <textarea
            className="input input-bordered w-full"
            placeholder="Your message"
            >
            </textarea>
            </form>
            
      </div>
    </div>
    </div>
  )
}

export default App
