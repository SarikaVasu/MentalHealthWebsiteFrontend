//doc list
//buttn to a form
//like in redux video
import { useGetDoctorinfosQuery }  from '../admin/doctorinfo/doctorinfosApiSlice';
import { Link } from 'react-router-dom';
import BookDoctorsExcerpt from './BookDoctorsExcerpt';
import PulseLoader from 'react-spinners/PulseLoader';
import '../../css/usercomponents/UserBookApp.css';

const UserBookApp = () => {
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
                  ? ids.map(id => <BookDoctorsExcerpt key={id} id={id} />)
                  : null
      } else if (isInfoError) {
          content = <p className="userBookAppP">{infoError?.data?.message}</p>;
      }
  
    return (
      <div className='userBookMainContainer'>
        
        <h1>
            <button className="userBookAppButton">
                <Link to='/user/book-appointment-form'>Book Appointment</Link>
            </button>
        </h1>
        <section className="DoctorList">
            <h2 className='bookDocTitle'>Doctors</h2>
            <article className="userBookDocContainer" >
            {content}
            </article>
        </section>
      </div>
    )
  }
  
  export default UserBookApp;