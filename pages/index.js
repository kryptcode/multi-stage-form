import Head from 'next/head'
import { useRecoilValue } from 'recoil'
import { stepState } from '../atoms/stepAtom'
import Sidebar from '../components/Sidebar'
import StepOneForm from '../components/StepOneForm'
import StepTwoForm from '../components/StepTwoForm'
import StepThreeForm from '../components/StepThreeForm'
import StepFourForm from '../components/StepFourForm'


export default function Home() {
  const step = useRecoilValue(stepState)
  return (
    <>
      <Head>
        <title>
          Multi Stage form
        </title>
      </Head>
      <div className='md:h-[100vh] w-full flex  justify-center items-center'>
        <div className='md:h-[80vh] md:w-[70%] md:bg-white w-full md:rounded-2xl flex flex-col md:flex-row md:p-3 md:pr-16 '>
          <Sidebar />
          <div className='flex-[2]'>
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