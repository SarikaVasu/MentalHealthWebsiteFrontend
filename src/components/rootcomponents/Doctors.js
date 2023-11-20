import AllHeader from "../lpcomponents/AllHeader";
import { Link } from 'react-router-dom';
// import { useGetDoctorinfosQuery } from '../../features/admin/doctorinfo/doctorinfosApiSlice';
// import DoctorsExcerpt from './DoctorsExcerpt';
// import PulseLoader from 'react-spinners/PulseLoader';

const Doctors = () => {
  // const { data: doctors,
  //   isLoading : isInfoLoading,
  //   isSuccess : isInfoSuccess,
  //   isError : isInfoError,
  //   error : infoError } = useGetDoctorinfosQuery('getDoctorinfos');


    // let content;
    // if (isInfoLoading) {
    //     content = <p className="postP"><PulseLoader style={{color:'white'}} /></p>;
    // } else if (isInfoSuccess) {  
    //     const { ids } = doctors;  
    //     content = ids?.length
    //             ? ids.map(id => <DoctorsExcerpt key={id} id={id} />)
    //             : null
    // } else if (isInfoError) {
    //     content = <p className="postP">{infoError?.data?.message}</p>;
    // }

  return (
    <> 
      <AllHeader />
      <h1 style={{position:'fixed', top:'0px'}}>Doctors</h1>
      <div className="doctorssDivContainer" style={{marginTop:'5rem'}}>
      <div styel={{paddingTop:'8rem', paddingBottom:'18rem'}}>
          <div style={{ display: 'flex', justifyContent: 'space-around'}}>
            <div class="card-1" style={{ backgroundColor: '#3498db', width: '300px', fontSize: '20px', margin: '20px',borderRadius:'15px', height: '400px'}}>
              <img src="https://content.jdmagicbox.com/comp/cuttack/d2/0671px671.x671.001202384105.f1d2/catalogue/dr-mihir-ranjan-nayak-cuttack-0sc23wmcbu-250.jpg" alt="DR-1" style={{ width: '300px',borderTopLeftRadius: '15px',
    borderTopRightRadius: '15px', }} />
              <div style={{padding:'10px'}}>
                <h4> Dr.Smith </h4>
                <p>Clinical Psychology </p>
                <p>8 years working experience</p>
              </div>
            </div>

            <div class="card-1" style={{ backgroundColor: '#3498db', width: '300px', fontSize: '20px', margin: '20px',borderRadius:'15px' , height: '400px'}}>
              <img src="https://content.jdmagicbox.com/comp/surat/p4/0261px261.x261.180720022528.g1p4/catalogue/dr-anuj-khandelwal-kiran-hospital-katargam-surat-sexologist-doctors-64wq0ovudd.jpg?clr=" alt="DR-1" style={{ width: '300px',borderTopLeftRadius: '15px',
    borderTopRightRadius: '15px', }} />
              <div style={{padding:'10px'}}>
                <h4> Dr.Johnson </h4>
                <p> Couseling Psychology </p>
                <p>6 years working experience</p>
              </div>
            </div>

            <div class="card-1" style={{ backgroundColor: '#3498db', width: '300px', fontSize: '20px', margin: '20px',borderRadius:'15px', height: '400px' }}>
              <img src="https://onyxintegrative.com/wp-content/uploads/2019/07/Dr.-Stephanie-Photo.jpg" alt="DR-1" style={{ width: '300px', borderTopLeftRadius: '15px',
    borderTopRightRadius: '15px',}} />
              <div style={{padding:'10px'}}>
                <h4> Dr.Olivia Martinez </h4>
                <p>Child Psychology </p>
                <p>5 years working experience</p>
              </div>
            </div>
          </div>


          <div style={{ display: 'flex', justifyContent: 'space-around' }}>
            <div class="card-1" style={{ backgroundColor: '#3498db', width: '300px', fontSize: '20px', margin: '20px',borderRadius:'15px'}}>
              <img src="https://thumbs.dreamstime.com/b/male-doctor-portrait-isolated-white-background-56744085.jpg" alt="DR-1" style={{ width: '300px', borderTopLeftRadius: '15px',
    borderTopRightRadius: '15px', }} />
              <div style={{padding:'10px'}}>
                <h4> Prof. Jonathan Davis </h4>
                <p>Cognitive Neuroscience </p>
                <p>8 years working experience</p>
              </div>
            </div>

            <div class="card-1" style={{ backgroundColor: '#3498db', width: '300px', fontSize: '20px', margin: '20px',borderRadius:'15px', height: '400px' }}>
              <img src="https://media.istockphoto.com/id/1292015214/photo/portrait-female-doctor-stock-photo.jpg?s=612x612&w=0&k=20&c=nr4XaWnRPQnWqwhzahajZhskIDG1yK9DmIteV5gpUOI=" alt="DR-1" style={{ width: '300px',borderTopLeftRadius: '15px',
    borderTopRightRadius: '15px', }} />
              <div style={{padding:'10px'}}>
                <h4> Dr.Emily Thompson </h4>
                <p> Behavirol Therapy </p>
                <p>9 years working experience</p>
              </div>
            </div>

            <div class="card-1" style={{ backgroundColor: '#3498db', width: '300px', fontSize: '20px', margin: '20px',borderRadius:'15px', height: '400px' }}>
              <img src="https://media.istockphoto.com/id/587519218/photo/trust-me-im-a-doctor.jpg?s=612x612&w=0&k=20&c=3XDC62kvLGJenVla0FpWKB2DHRF9YtrbOGZWM4hIA7s=" alt="DR-1" style={{ width: '300px',borderTopLeftRadius: '15px',
    borderTopRightRadius: '15px', }} />
              <div style={{padding:'10px'}}>
                <h4> Alexander black </h4>
                <p>Forensic psychology </p>
                <p>10 years working experience</p>
              </div>
            </div>
          </div>


        </div>
      </div>
      <br></br>
      <h2 style={{position:'fixed', bottom:'0px'}}><Link to='/signin'>SignIn for More Details and</Link> to book your  appoinmets</h2>
    </>
  )
}

export default Doctors;



// import AllHeader from "../lpcomponents/AllHeader";
// import { Link } from 'react-router-dom';
// import { useGetDoctorinfosQuery } from '../../features/admin/doctorinfo/doctorinfosApiSlice';
// import DoctorsExcerpt from './DoctorsExcerpt';
// import PulseLoader from 'react-spinners/PulseLoader';

// const Doctors = () => {
//   const { data: doctors,
//     isLoading : isInfoLoading,
//     isSuccess : isInfoSuccess,
//     isError : isInfoError,
//     error : infoError } = useGetDoctorinfosQuery('getDoctorinfos');


//     let content;
//     if (isInfoLoading) {
//         content = <p className="postP"><PulseLoader style={{color:'white'}} /></p>;
//     } else if (isInfoSuccess) {  
//         const { ids } = doctors;  
//         content = ids?.length
//                 ? ids.map(id => <DoctorsExcerpt key={id} id={id} />)
//                 : null
//     } else if (isInfoError) {
//         content = <p className="postP">{infoError?.data?.message}</p>;
//     }

//   return (
//     <body className="bgBody">
//       <AllHeader />
//       <h1 style={{position:'fixed', top:'0px'}}>Doctors</h1>
//       <div className="doctorssDivContainer" style={{marginTop:'5rem'}}>
//         {content}
//       </div>
//       <h2 style={{position:'fixed', bottom:'0px'}}><Link to='/signin'>SignIn</Link> to book appoinmets</h2>
//     </body>
//   )
// }

// export default Doctors;