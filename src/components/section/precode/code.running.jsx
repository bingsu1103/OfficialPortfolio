import { useTranslation } from 'react-i18next';
import code from '../../../assets/svg/code.svg'
import wavinghand from "../../../assets/svg/wavinghand.svg"
import arrowdownblue from "../../../assets/svg/arrowdownblue.svg"
const CodeRunning = (props) => {
    const { t } = useTranslation();

    return (
        <div className='flex flex-col gap-4 p-20 max-sm:p-5 max-sm:ml-5 max-[821px]:mt-20 text-center'>
            <img width={50} src={code} alt="code" />
            <div class="typewriter">
                <h1 class="text font-bold max-sm:text-2xl text-3xl w-[30%] p-2">{t('introduce.welcome')} <br /> <div className='flex gap-2'>{t('introduce.speech')} <span className='text-[#19F2B3]'> {t('introduce.name')}</span><img className='greeting' width={25} src={wavinghand} /></div></h1>
            </div>
            <div>
                <button title='Get skills' onClick={props.scrollToSkill} className='bg-[#1F1F1F] flex items-center rounded-3xl p-1 cursor-pointer'>
                    <img width={50} src={arrowdownblue} alt="" />
                    <h2 className='text-[#fff] p-3 text-lg font-bold'>Get my skills</h2>
                </button>
            </ div>
        </div >
    )
}
export default CodeRunning;