import { useState } from 'react'

const StepThreeForm = () => {
  const [isChecked1, setisChecked1] = useState(false)
  const [isChecked2, setisChecked2] = useState(false)
  const [isChecked3, setisChecked3] = useState(false)
  return (
    <>
      <div className='bg-white w-[85%] md:w-full mx-auto p-6 md:p-0 rounded-2xl -top-6 md:top-0 relative'>
      <h2 className="text-[#072a5f] text-3xl font-bold pt-2 md:pt-10 mb-3 ">Pick add-ons</h2>
      <p className="mb-4 text-gray-500 font-medium">You have the option of monthly or yearly billing</p>

      <div className='md:pr-24 space-y-4'>
        <div className={`flex border rounded-lg items-center space-x-8 p-2 w-full ${isChecked1 && 'border-purple-800'}`} onClick={() => setisChecked1(!isChecked1)}>
          <div className={` ${isChecked1 ?'bg-purple-800' : 'bg-white'} border w-7 h-7 flex items-center rounded-md justify-center`}>
          <svg xmlns="http://www.w3.org/2000/svg"className={` ${isChecked1 ?'flex' : 'hidden'}`} width="12" height="9" viewBox="0 0 12 9"><path fill="none" stroke="#FFF" stroke-width="2" d="m1 4 3.433 3.433L10.866 1"/></svg>
          </div>
          <div className='flex justify-between w-full items-center'>
            <div className='space-y-1'>
              <h6 className='text-[#072a5f] font-medium text-lg'>Online Service</h6>
              <p className='text-gray-500 text-sm'>
                Access to multiplayer games
              </p>
            </div>
            <div className='text-purple-800 '>
              +1$/mo
            </div>
          </div>
        </div>

        <div className={`flex items-center border rounded-lg space-x-8 p-2 w-full ${isChecked2 && 'border-purple-800'}`} onClick={() => setisChecked2(!isChecked2)}>
        <div className={` ${isChecked2 ?'bg-purple-800' : 'bg-white'} border w-7 h-7 flex items-center rounded-md justify-center`}>
          <svg xmlns="http://www.w3.org/2000/svg"className={` ${isChecked2 ?'flex' : 'hidden'}`} width="12" height="9" viewBox="0 0 12 9"><path fill="none" stroke="#FFF" stroke-width="2" d="m1 4 3.433 3.433L10.866 1"/></svg>
          </div>
          <div className='flex justify-between w-full items-center'>
            <div className='space-y-1'>
              <h6 className='text-[#072a5f] font-medium text-lg'>Larger Storage</h6>
              <p className='text-gray-500 text-sm'>
                Extra 1TB of loud save
              </p>
            </div>
            <div className='text-purple-800 '>
              +2$/mo
            </div>
          </div>
        </div>

        <div className={`flex items-center border rounded-lg space-x-8 p-2 w-full ${isChecked3 && 'border-purple-800'}`} onClick={() => setisChecked3(!isChecked3)}>
        <div className={` ${isChecked3 ?'bg-purple-800' : 'bg-white'} border w-7 h-7 flex items-center rounded-md justify-center`}>
          <svg xmlns="http://www.w3.org/2000/svg"className={` ${isChecked3 ?'flex' : 'hidden'}`} width="12" height="9" viewBox="0 0 12 9"><path fill="none" stroke="#FFF" stroke-width="2" d="m1 4 3.433 3.433L10.866 1"/></svg>
          </div>
          <div className='flex justify-between w-full items-center'>
            <div className='space-y-1'>
              <h6 className='text-[#072a5f] font-medium text-lg'>Customizable profile</h6>
              <p className='text-gray-500 text-sm'>
                Custom theme on your profile
              </p>
            </div>
            <div className='text-purple-800 '>
              +2$/mo
            </div>
          </div>
        </div>

      </div>
      </div>
      <div className='md:mt-20 w-[85%] mx-auto py-8 md:py-0 flex justify-between items-center'>
        <div className='text-gray-500 p-2 cursor-pointer  '>
          Go Back
        </div>
        <div className='py-2 px-3 bg-[#072a5f] text-white font-medium cursor-pointer rounded-lg'>
          Next Step
        </div>
      </div>
    </>
  )
}

export default StepThreeForm