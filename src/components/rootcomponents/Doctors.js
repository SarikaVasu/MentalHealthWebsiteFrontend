import AllHeader from "../lpcomponents/AllHeader";
import { Link } from 'react-router-dom';
import { useGetDoctorinfosQuery } from '../../features/admin/doctorinfo/doctorinfosApiSlice';
import DoctorsExcerpt from './DoctorsExcerpt';
import PulseLoader from 'react-spinners/PulseLoader';

const Doctors = () => {
  const { data: doctors,
    isLoading : isInfoLoading,
    isSuccess : isInfoSuccess,
    isError : isInfoError,
    error : infoError } = useGetDoctorinfosQuery('getDoctorinfos');


    let content;
    if (isInfoLoading) {
        content = <p className="postP"><PulseLoader style={{color:'white'}} /></p>;
    } else if (isInfoSuccess) {  
        const { ids } = doctors;  
        content = ids?.length
                ? ids.map(id => <DoctorsExcerpt key={id} id={id} />)
                : null
    } else if (isInfoError) {
        content = <p className="postP">{infoError?.data?.message}</p>;
    }

  return (
    <>
      <AllHeader />
      <h1 style={{position:'fixed', top:'0px'}}>Doctors</h1>
      <div className="doctorssDivContainer" style={{marginTop:'5rem'}}>
        {content}
      </div>
      <h2 style={{position:'fixed', bottom:'0px'}}><Link to='/signin'>SignIn</Link> to book appoinmets</h2>
    </>
  )
}

export default Doctors;