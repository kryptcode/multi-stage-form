import Head from 'next/head'
import { useRecoilValue } from 'recoil'
import { stepState } from '../atoms/stepAtom'
import Sidebar from '../components/Sidebar'
import StepFourForm from '../components/StepFourForm'
import StepOneForm from '../components/StepOneForm'
import StepThreeForm from '../components/StepThreeForm'
import StepTwoForm from '../components/StepTwoForm'


export default function Home() {
  const step = useRecoilValue(stepState)
  return (
    <>
      <Head>
        <title>
          Multi Stage form
        </title>
      </Head>
      <div className='md:h-[100vh] w-full flex justify-center items-center'>
        <div className='md:h-[80vh] w-[80%] bg-white flex p-3 '>
          <Sidebar />
          <div className='flex-[3]'>
            {
              step == 1 ? (<StepOneForm />)
              : step == 2 ? (<StepTwoForm />)
              : step == 3 ? (<StepThreeForm />)
              : step == 4 ? (<StepFourForm />)
              : <div></div>
            } 
          </div>
        </div>
      </div>
    </>
  )
}