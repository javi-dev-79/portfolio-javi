import Hobbies from "./components/Hobbies"
import PersonalData from "./components/PersonalData"


const PersonalInfo = () => {
    return (
        <div className='flex m-5'>
            <PersonalData />
            <Hobbies />
        </div>
    )
}

export default PersonalInfo
