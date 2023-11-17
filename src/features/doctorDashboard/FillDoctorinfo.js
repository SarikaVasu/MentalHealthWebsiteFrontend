import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { useGetDoctorinfosQuery, useUpdateDoctorinfoMutation } from '../admin/doctorinfo/doctorinfosApiSlice';
import PulseLoader from 'react-spinners/PulseLoader';
import useAuth from '../../hooks/useAuth';
import '../../css/doctorcomponents/FillDoctorinfo.css';

const FillDoctorinfo = () => {
    const { id1 } = useAuth();

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
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

    const [updateDoctorinfo, { isLoading, isSuccess: isUpdateSuccess }] = useUpdateDoctorinfoMutation();

    const { data: doctors,
        isLoading : isInfoLoading,
        isSuccess : isInfoSuccess,
        isError : isInfoError,
        error : infoError } = useGetDoctorinfosQuery('getDoctorinfos')

    const user = (doctors?.entities[id1]);
    const navigate = useNavigate();

    useEffect(() => {
        if (isUpdateSuccess) {
            setFirstName('');
            setLastName('');
            setGender('');
            setDob('');
            setNumber('');
            setEmail('');
            setAddress('');
            setDegrees('');
            setCollege('');
            setClinic('');
            setClinicNumber('');
            setExperience('');
            navigate('/doctor/doctor-profile');
        }
    }, [isUpdateSuccess, navigate])

    const canSave = [firstName, lastName, gender, dob, number, email, address, degrees, college, clinic, clinicNumber, experience].every(Boolean) && !isLoading;

    const onSubmitClicked = async (e) => {
        e.preventDefault();
        if (canSave && isInfoSuccess) {
            try {
                await updateDoctorinfo({ id: user?._id, userid: user?.userid, username: user?.username, anonymousname: user?.anonymousname, firstname: firstName, lastname: lastName, gender: gender, dob: dob, contactno: number, email: email, address: address, degree: degrees, college: college, clinic: clinic, clinicContact: clinicNumber, experience: experience, active: user?.active }).unwrap()
            } catch (err) {
                console.error('Failed to save the details', err)
            }
        }
    }

    if (isLoading || isInfoLoading) return <PulseLoader color={"#FFF"} />

    if ( isInfoError ) return <p>Error: {infoError.data?.message}</p>

    if (!user) {
        return (
            <section className='postSection'>
                <h2 className='postH2'>Doctor not found!</h2>
            </section>
        )
    }


  return (
    <div className="fillDoctorinfo">
        <form id='DoctorinfoForm' className="fillDoctorinfoForm">
            <h1>Doctor Details</h1>
            <p className='doctorinfoP'>
                <label 
                    htmlFor="firstName"
                    className='doctorinfoLabel'
                >
                    First Name:
                </label>
                <input 
                    id='firstName' 
                    className='doctorinfoInput'
                    type="text" 
                    value={firstName}
                    onChange={(e)=>setFirstName(e.target.value)}
                    title='Enter your first name'
                    required
                />
            </p>
            <p className='doctorinfoP'>
                <label 
                    htmlFor="lastname"
                    className='doctorinfoLabel'
                >
                    Last Name:
                </label>
                <input 
                    id='lastname'  
                    className='doctorinfoInput'
                    type="text" 
                    value={lastName}
                    onChange={(e)=>setLastName(e.target.value)}
                    title='Enter your last name'
                    required
                />
            </p>
            <p className='doctorinfoP'>
                <label 
                    htmlFor="gender"
                    className='doctorinfoLabel'
                >
                    Gender:
                </label>
                <select 
                    name="gender" 
                    id="gender" 
                    className='doctorinfoSelect'
                    value={gender} 
                    onChange={(e)=>setGender(e.target.value)}
                >
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                </select>
            </p>
            <p className='doctorinfoP'>
                <label 
                    htmlFor="dob"
                    className='doctorinfoLabel'
                >
                    Date of Birth:
                </label>
                <input 
                    id='dob' 
                    className='doctorinfoInput'
                    name="dob"  
                    title="Please enter a valid date of birth" 
                    value={dob} 
                    onChange={(e)=>setDob(e.target.value)}   
                    type="date" 
                    required
                />
            </p>
            <p className='doctorinfoP'>
                <label 
                    htmlFor="number"
                    className='doctorinfoLabel'
                >
                    Contact number:
                </label>
                <input 
                    id='number' 
                    className='doctorinfoInput'
                    type="tel"
                    value={number}
                    onChange={(e)=>setNumber(e.target.value)}
                    title='Enter your phone number'
                    required
                />
            </p>
            <p className='doctorinfoP'>
                <label 
                    htmlFor="email"
                    className='doctorinfoLabel'
                >
                    Email Id:
                </label>
                <input 
                    id='email' 
                    className='doctorinfoInput'
                    name="email" 
                    title="Please enter a valid email address"  
                    value={email} 
                    onChange={(e)=>setEmail(e.target.value)}  
                    type="email" 
                    required
                />
            </p>
            <p className='doctorinfoP'>
                <label 
                    htmlFor="address"
                    className='doctorinfoLabel'
                >
                    Address:
                </label>
                <textarea 
                    name="address" 
                    className='doctorinfoTextarea'
                    id="address" 
                    cols="30" 
                    rows="3"
                    value={address}
                    onChange={(e)=>setAddress(e.target.value)}
                    title='Enter your address'

                    required
                >

                </textarea>
            </p>
            <p className='doctorinfoP'>
                <label 
                    htmlFor="degrees"
                    className='doctorinfoLabel'
                >
                    Degrees:
                </label>
                <textarea 
                    name="degrees" 
                    className='doctorinfoTextarea'
                    id="degrees" 
                    cols="30" 
                    rows="3"
                    value={degrees}
                    onChange={(e)=>setDegrees(e.target.value)}
                    title='Enter your degrees'

                    required
                >

                </textarea>
            </p>
            <p className='doctorinfoP'>
                <label 
                    htmlFor="college"
                    className='doctorinfoLabel'
                >
                    College Names:
                </label>
                <textarea 
                    name="college" 
                    className='doctorinfoTextarea'
                    id="college" 
                    cols="30" 
                    rows="3"
                    value={college}
                    onChange={(e)=>setCollege(e.target.value)}
                    title='Enter your college'

                    required
                >

                </textarea>
            </p>
            <p className='doctorinfoP'>
                <label 
                    htmlFor="clinic"
                    className='doctorinfoLabel'
                >
                    Current working clinic Name:
                </label>
                <input 
                    id='clinic' 
                    className='doctorinfoInput'
                    type="text"
                    value={clinic}
                    onChange={(e)=>setClinic(e.target.value)}
                    title='Enter your phone clinic'
                    required
                />
            </p>
            <p className='doctorinfoP'>
                <label 
                    htmlFor="clinicNumber"
                    className='doctorinfoLabel'
                >
                    Clinic contact number:
                </label>
                <input 
                    id='clinicNumber' 
                    className='doctorinfoInput'
                    type="tel"
                    value={clinicNumber}
                    onChange={(e)=>setClinicNumber(e.target.value)}
                    title='Enter your phone clinicNumber'
                    required
                />
            </p>
            <p className='doctorinfoP'>
                <label 
                    htmlFor="experience"
                    className='doctorinfoLabel'
                >
                    Number of years of experience:
                </label>
                <input 
                    id='experience' 
                    className='doctorinfoInput'
                    type="number"
                    value={experience}
                    onChange={(e)=>setExperience(e.target.value)}
                    title='Enter your phone experience'
                    required
                />
            </p>
            <button 
                type="submit" 
                className='doctorinfoButton'
                onClick={(e)=>onSubmitClicked(e)}
            >
                Submit
            </button>
        </form>
    </div>
  )
}

export default FillDoctorinfo;