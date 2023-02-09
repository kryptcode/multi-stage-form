import { useState } from 'react'
import ArcadeLogo from './logos/ArcadeLogo'
import AdvLogo from './logos/AdvLogo'
import ProLogo from './logos/ProLogo'


const StepTwoForm = () => {
  const [toggle, setToggle] = useState(false) 
  const [plan, setPlan] = useState(1)

  return (
    <>
    <div className='bg-white w-[85%] md:w-full mx-auto p-6 md:p-0 rounded-2xl -top-6 md:top-0 relative'>
    <h2 className="text-[#072a5f] text-3xl font-bold pt-2 md:pt-10 mb-3 ">Select your plan</h2>
    <p className="mb-4 text-gray-500 font-medium">You have the option of monthly or yearly billing</p>
    <form className='md:pr-24'>

      <div>
          {
            !toggle ? (
              <div className='flex flex-col md:flex-row justify-between space-y-5 md:space-y-0'>
                <div onClick={() => setPlan(1)} className={`p-4 md:w-32 pr-11 rounded-xl border flex flex-row md:flex-col ${plan == 1 && 'border-[#c42fb0]'} space-x-4 md:space-x-0  cursor-pointer`}>
                  <div >
                  <ArcadeLogo />
                  </div>
                  <div>
                  <h5 className='font-medium md:mt-5 text-[#072a5f]'>
                    Arcade
                  </h5>
                  <p className='text-sm text-gray-500'>
                    $9/mo
                  </p>
                  </div>
                </div>
                
                <div onClick={() => setPlan(2)} className={`p-4 md:w-32 pr-11 rounded-xl border flex flex-row md:flex-col ${plan == 2 && 'border-[#c42fb0]'} space-x-4 md:space-x-0 cursor-pointer`}>
                  <div >
                  <AdvLogo />
                  </div>
                  <div>
                  <h5 className='font-medium md:mt-5 text-[#072a5f]'>
                    Advanced
                  </h5>
                  <p className='text-sm text-gray-500'>
                    $12/mo
                  </p>
                  </div>
                </div>

                <div onClick={() => setPlan(3)} className={`p-4 md:w-32 pr-11 rounded-xl border flex flex-row md:flex-col ${plan == 3 && 'border-[#c42fb0]'} space-x-4 md:space-x-0 cursor-pointer`}>
                  <div >
                  <ProLogo />
                  </div>
                  <div>
                  <h5 className='font-medium md:mt-5 text-[#072a5f]'>
                    Pro
                  </h5>
                  <p className='text-sm text-gray-500'>
                    $15/mo
                  </p>
                  </div>
                </div>

              </div>
            ) : (
              <div className='flex flex-col md:flex-row justify-between space-y-5 md:space-y-0'>
                <div onClick={() => setPlan(4)} className={`p-4 md:w-32 pr-11 rounded-xl border ${plan == 4 && 'border-[#c42fb0]'} flex flex-row md:flex-col space-x-4 md:space-x-0 cursor-pointer`}>
                  <div >
                  <ArcadeLogo />
                  </div>
                  <div>
                  <h5 className='font-medium md:mt-5 text-[#072a5f]'>
                    Arcade
                  </h5>
                  <p className='text-sm text-gray-500'>
                    $90/yr
                  </p>
                  <p className='md:mt-1 text-sm text-[#072a5f]'>
                    2 months free
                  </p>
                  </div>
                </div>
                
                <div onClick={() => setPlan(5)} className={`p-4 md:w-32 pr-11 rounded-xl border ${plan == 5 && 'border-[#c42fb0]'} flex flex-row md:flex-col space-x-4 md:space-x-0 cursor-pointer`}>
                  <div >
                  <AdvLogo />
                  </div>
                  <div>
                  <h5 className='font-medium md:mt-5 text-[#072a5f]'>
                    Advanced
                  </h5>
                  <p className='text-sm text-gray-500'>
                    $120/yr
                  </p>
                  <p className='md:mt-1 text-sm text-[#072a5f]'>
                    2 months free
                  </p>
                  </div>
                </div>

                <div onClick={() => setPlan(6)} className={`p-4 md:w-32 pr-11 rounded-xl border ${plan == 6 && 'border-[#c42fb0]'} flex flex-row md:flex-col space-x-4 md:space-x-0 cursor-pointer`}>
                  <div >
                  <ProLogo />
                  </div>
                  <div>
                  <h5 className='font-medium md:mt-5 text-[#072a5f]'>
                    Pro
                  </h5>
                  <p className='text-sm text-gray-500'>
                    $150/yr
                  </p>
                  <p className='md:mt-1 text-sm text-[#072a5f]'>
                    2 months free
                  </p>
                  </div>
                </div>

              </div>
            )
          }
      </div>

      <div className='flex space-x-4 justify-center items-center my-12 bg-gray-200/80 p-1.5 rounded-xl font-medium'>
        <span className={`${toggle ? 'text-gray-500/75' : 'text-[#072a5f]'}`}>
          Monthly
        </span>
        <div className={`bg-[#072a5f] transition-all ease-in-out duration-150 p-1 w-11 rounded-2xl cursor-pointer flex items-center ${toggle ? 'justify-end' : 'justify-start'}  `} onClick={() => setToggle(!toggle)}>
          <div className='w-4 h-4 rounded-full bg-white' />
        </div>
        <span className={`${!toggle ? 'text-gray-500/75' : 'text-[#072a5f]'}`}>
          Yearly
        </span>
      </div>

      
    </form>  
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

export default StepTwoForm