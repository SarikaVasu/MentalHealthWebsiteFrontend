import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useGetDoctorinfosQuery } from '../admin/doctorinfo/doctorinfosApiSlice';
import useAuth from '../../hooks/useAuth';
import PulseLoader from 'react-spinners/PulseLoader';
import '../../css/doctorcomponents/DoctorProfile.css'

const DoctorProfile = () => {
    const [username, setUsername] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [anonymousName, setAnonymousName] = useState('');
    const [gender, setGender] = useState('');
    const [dob, setDob] = useState('');
    const [number, setNumber] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [degrees, setDegrees] = useState('');
    const [college, setCollege] = useState('');
    const [clinic, setClinic] = useState('');
    const [clinicNumber, setClinicNumber] = useState('');
    const [experience, setExperience] = useState('');

    const { id1 } = useAuth();

    const { data: doctors,
            isLoading : isInfoLoading,
            isSuccess : isInfoSuccess,
            isError : isInfoError,
            error : infoError } = useGetDoctorinfosQuery('getDoctorinfos');
            
    const user = (doctors?.entities[id1]);

    useEffect(() => {
        if (isInfoSuccess) {
            setUsername(user.username);
            setFirstName(user.firstname);
            setLastName(user.lastname);
            setAnonymousName(user.anonymousname);
            setGender(user.gender);
            setDob(user.dob);
            setNumber(user.contactno);
            setEmail(user.email);
            setAddress(user.address);
            setDegrees(user.degree);
            setCollege(user.college);
            setClinic(user.clinic);
            setClinicNumber(user.clinicContact);
            setExperience(user.experience);
            document.getElementById('doctorprofileButton').style.visibility="visible";
        }
    }, [isInfoSuccess, user?.username, user?.firstname, user?.lastname, user?.anonymousname, user?.gender, user?.dob, user?.contactno, user?.email, user?.address, user?.degree, user?.college, user?.clinic, user?.clinicContact, user?.experience])

    if (isInfoLoading) return <PulseLoader color={"black"} />

    if (isInfoError) return <p>Error: {infoError.data?.message}</p>

    if (!user) {
        return (
            <section className='postSection'>
                <h2 className='postH2'>Doctor not found!</h2>
            </section>
        )
    }

  return (
    <div className="fillDoctorprofileContainer">
        <form id='DoctorprofileForm' className="fillDoctorprofileForm">
            <h1>Doctor Details</h1>
            <p className='doctorprofileP'>
                <label 
                    htmlFor="username"
                    className='doctorprofileLabel'
                >
                    First Name:
                </label>
                <input 
                    id='username' 
                    className='doctorprofileInput'
                    type="text" 
                    value={username}
                    onChange={(e)=>setUsername(e.target.value)}
                    title='Enter your first name'
                    disabled
                />
            </p>
            <p className='doctorprofileP'>
                <label 
                    htmlFor="firstName"
                    className='doctorprofileLabel'
                >
                    First Name:
                </label>
                <input 
                    id='firstName' 
                    className='doctorprofileInput'
                    type="text" 
                    value={firstName}
                    onChange={(e)=>setFirstName(e.target.value)}
                    title='Enter your first name'
                    disabled
                />
            </p>
            <p className='doctorprofileP'>
                <label 
                    htmlFor="lastname"
                    className='doctorprofileLabel'
                >
                    Last Name:
                </label>
                <input 
                    id='lastname'  
                    className='doctorprofileInput'
                    type="text" 
                    value={lastName}
                    onChange={(e)=>setLastName(e.target.value)}
                    title='Enter your last name'
                    disabled
                />
            </p>
            <p className='doctorprofileP'>
                <label 
                    htmlFor="anonymousname"
                    className='doctorprofileLabel'
                >
                    First Name:
                </label>
                <input 
                    id='anonymousname' 
                    className='doctorprofileInput'
                    type="text" 
                    value={anonymousName}
                    onChange={(e)=>setAnonymousName(e.target.value)}
                    title='Enter your first name'
                    disabled
                />
            </p>
            <p className='doctorprofileP'>
                <label 
                    htmlFor="gender"
                    className='doctorprofileLabel'
                >
                    Gender:
                </label>
                <select 
                    name="gender" 
                    id="gender" 
                    className='doctorprofileSelect'
                    value={gender} 
                    onChange={(e)=>setGender(e.target.value)}
                >
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                </select>
            </p>
            <p className='doctorprofileP'>
                <label 
                    htmlFor="dob"
                    className='doctorprofileLabel'
                >
                    Date of Birth:
                </label>
                <input 
                    id='dob' 
                    className='doctorprofileInput'
                    name="dob"  
                    title="Please enter a valid date of birth" 
                    value={dob} 
                    onChange={(e)=>setDob(e.target.value)}   
                    type="date" 
                    disabled
                />
            </p>
            <p className='doctorprofileP'>
                <label 
                    htmlFor="number"
                    className='doctorprofileLabel'
                >
                    Contact number:
                </label>
                <input 
                    id='number' 
                    className='doctorprofileInput'
                    type="tel"
                    value={number}
                    onChange={(e)=>setNumber(e.target.value)}
                    title='Enter your phone number'
                    disabled
                />
            </p>
            <p className='doctorprofileP'>
                <label 
                    htmlFor="email"
                    className='doctorprofileLabel'
                >
                    Email Id:
                </label>
                <input 
                    id='email' 
                    className='doctorprofileInput'
                    name="email" 
                    title="Please enter a valid email address"  
                    value={email} 
                    onChange={(e)=>setEmail(e.target.value)}  
                    type="email" 
                    disabled
                />
            </p>
            <p className='doctorprofileP'>
                <label 
                    htmlFor="address"
                    className='doctorprofileLabel'
                >
                    Address:
                </label>
                <textarea 
                    name="address" 
                    className='doctorprofileTextarea'
                    id="address" 
                    cols="30" 
                    rows="3"
                    value={address}
                    onChange={(e)=>setAddress(e.target.value)}
                    title='Enter your address'

                    disabled
                >

                </textarea>
            </p>
            <p className='doctorprofileP'>
                <label 
                    htmlFor="degrees"
                    className='doctorprofileLabel'
                >
                    Degrees:
                </label>
                <textarea 
                    name="degrees" 
                    className='doctorprofileTextarea'
                    id="degrees" 
                    cols="30" 
                    rows="3"
                    value={degrees}
                    onChange={(e)=>setDegrees(e.target.value)}
                    title='Enter your degrees'

                    disabled
                >

                </textarea>
            </p>
            <p className='doctorprofileP'>
                <label 
                    htmlFor="college"
                    className='doctorprofileLabel'
                >
                    College Names:
                </label>
                <textarea 
                    name="college" 
                    className='doctorprofileTextarea'
                    id="college" 
                    cols="30" 
                    rows="3"
                    value={college}
                    onChange={(e)=>setCollege(e.target.value)}
                    title='Enter your college'

                    disabled
                >

                </textarea>
            </p>
            <p className='doctorprofileP'>
                <label 
                    htmlFor="clinic"
                    className='doctorprofileLabel'
                >
                    Current working clinic Name:
                </label>
                <input 
                    id='clinic' 
                    className='doctorprofileInput'
                    type="text"
                    value={clinic}
                    onChange={(e)=>setClinic(e.target.value)}
                    title='Enter your phone clinic'
                    disabled
                />
            </p>
            <p className='doctorprofileP'>
                <label 
                    htmlFor="clinicNumber"
                    className='doctorprofileLabel'
                >
                    Clinic contact number:
                </label>
                <input 
                    id='clinicNumber' 
                    className='doctorprofileInput'
                    type="tel"
                    value={clinicNumber}
                    onChange={(e)=>setClinicNumber(e.target.value)}
                    title='Enter your phone clinicNumber'
                    disabled
                />
            </p>
            <p className='doctorprofileP'>
                <label 
                    htmlFor="experience"
                    className='doctorprofileLabel'
                >
                    Number of years of experience:
                </label>
                <input 
                    id='experience' 
                    className='doctorprofileInput'
                    type="number"
                    value={experience}
                    onChange={(e)=>setExperience(e.target.value)}
                    title='Enter your phone experience'
                    disabled
                />
            </p>
            <Link to='/doctor/doctor-profile-modify' className='doctorprofileLink'>
              <button 
                  type="submit" 
                  className='doctorprofileButton'
                  id='doctorprofileButton'
              >
                  Modify
              </button>
          </Link>
        </form>
    </div>
  )
}

export default DoctorProfile