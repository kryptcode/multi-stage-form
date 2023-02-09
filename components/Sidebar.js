import { useRecoilState } from "recoil"
import { stepState } from "../atoms/stepAtom"


const styles = {
    sidebarContainer: "bg-[url('../assets/images/bg-sidebar-mobile.svg')] md:bg-[url('../assets/images/bg-sidebar-desktop.svg')] bg-no-repeat bg-cover md:bg-contain flex flex-row md:flex-col md:flex-1 justify-between md:rounded-lg p-7 ",
    sidebarStepContainer: "flex py-2 space-x-4",
    numberContainer: "h-8 w-8 p-2 flex items-center justify-center rounded-full border-[#bfe2fd] border-[1.5px] text-white hover:cursor-pointer hover:text-[#483eff] hover:bg-[#bfe2fd] font-semibold",
    activeStep: "text-[#483eff] font-semibold bg-[#bfe2fd]",
    littleText: "hidden md:flex text-[13px] font-medium text-white/70",
    biggerText: "hidden md:flex text-white font-semibold tracking-wide"
}


const Sidebar = () => {
    const [step, setStep] = useRecoilState(stepState)
  return (
    <div className={styles.sidebarContainer}  >
        <div className={styles.sidebarStepContainer}>
            <div className={[styles.numberContainer, step == 1 && styles.activeStep]} onClick={() => setStep(1)}>
                <span>
                    1
                </span>
            </div>
            <div>
                <div className={styles.littleText}>
                    STEP 1
                </div>
                <div className={styles.biggerText}>
                    YOUR INFO
                </div>
            </div>
        </div>

        <div className={styles.sidebarStepContainer}>
            <div className={[styles.numberContainer, step == 2 && styles.activeStep]} onClick={() => setStep(2)}>
                <span>
                    2
                </span>
            </div>
            <div>
                <div className={styles.littleText}>
                    STEP 2
                </div>
                <div className={styles.biggerText}>
                    SELECT PLAN
                </div>
            </div>
        </div>
        
        <div className={styles.sidebarStepContainer}>
            <div className={[styles.numberContainer, step == 3 && styles.activeStep]} onClick={() => setStep(3)}>
                <span>
                    3
                </span>
            </div>
            <div>
                <div className={styles.littleText}>
                    STEP 3
                </div>
                <div className={styles.biggerText}>
                    ADD-ONS
                </div>
            </div>
        </div>
        
        <div className={styles.sidebarStepContainer}>
            <div className={[styles.numberContainer, step == 4 && styles.activeStep]} onClick={() => setStep(4)}>
                <span>
                    4
                </span>
            </div>
            <div>
                <div className={styles.littleText}>
                    STEP 4
                </div>
                <div className={styles.biggerText}>
                    SUMMARY
                </div>
            </div>
        </div>
    </div>
  )
}

export default Sidebar