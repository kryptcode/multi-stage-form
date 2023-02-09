import { useState } from "react"
import { useRecoilState } from "recoil"
import { stepState } from "../atoms/stepAtom"

const StepOneForm = () => {
  const [step, setStep] = useRecoilState(stepState)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [error, setError] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()

    try {
      setStep(2)
    } catch (error) {
      setError(true)
    }
  }
  return (
    <>
    <div className="w-3/4 md:w-full mx-auto bg-white p-6 md:p-0 md:pr-24 rounded-2xl -top-6 md:top-0 relative">
      <h2 className="text-[#072a5f] text-3xl font-bold pt-5 md:pt-10 mb-3 ">
        Personal Info
      </h2>

      <p className="mb-4 text-gray-500 font-medium">
        Please provide your name, email address and phone number.
      </p>

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="mb-2 text-[#072a5f] font-medium tracking-wide inline-block">Name</label>
          <input className="block w-full p-3 outline-none border-[1px] rounded-lg " type="text" placeholder="e.g Stephen King" onChange={(e) => setName(e.currentTarget.value)} />
        </div>

        <div className="mb-4">
          <label className="mb-2 text-[#072a5f] font-medium tracking-wide inline-block">Email Address</label>
          <input className="block w-full p-3 outline-none border-[1px] rounded-lg " type="email" placeholder="e.g stephenking@lorem.com" onChange={(e) => setEmail(e.currentTarget.value)} />
        </div>
        {
          error && <div>Please input accurate credentials</div>
        }
        <div className="md:h-[6rem] w-full hidden md:flex justify-end items-end">
          <button type="submit" className="bg-[#072a5f] text-white font-medium py-1 px-3 rounded-md hover:opacity-75 transition-none duration-150 ease-linear ">
            Next Step
          </button>
        </div>
      </form>
    </div>
      <div className="md:h-[6rem] mt-28 w-[80%] mx-auto flex md:hidden justify-end items-end">
          <button onClick={() => setStep(2)} type="submit" className="bg-[#072a5f] text-white font-medium py-1 px-3 rounded-md hover:opacity-75 transition-none duration-150 ease-linear ">
            Next Step
          </button>
      </div>
    </>
  )
}

export default StepOneForm