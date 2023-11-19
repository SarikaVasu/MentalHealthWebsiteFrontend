import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGetUserinfosQuery } from '../admin/userinfo/userinfosApiSlice';
import { useGetDoctorinfosQuery } from '../admin/doctorinfo/doctorinfosApiSlice';
import { useAddNewAppMutation } from '../admin/Appointments/appApiSlice';
import PulseLoader from 'react-spinners/PulseLoader';
import useAuth from '../../hooks/useAuth';
import '../../css/usercomponents/BookingForm.css';

const BookingForm = () => {

    const { id1} = useAuth();
    const link = `/user/view-appointment/${id1}`;
    const navigate = useNavigate();

    const [userid, setUserid] = useState(id1);
    const [patientname, setPatientname] = useState('');
    const [doctorid, setDoctorid] = useState('');
    const [doctorname, setDoctorname] = useState('');
    const [appDate, setAppDate] = useState('');
    const [mode, setMode] = useState('');

    const { data: userinfos, isLoading, isSuccess, isError, error } = useGetUserinfosQuery('userinfosList');

    const user = (userinfos?.entities[id1]);
    useEffect(() => {
        if (isSuccess) {
            setUserid(id1);
            setPatientname(user?.firstname);
        }
    }
    , [isSuccess, user?.firstname, user?.lastname, id1]) ;

    const { data: doctorinfos, isLoading: isLoading2, isSuccess: isSuccess2, isError: isError2, error: error2 } = useGetDoctorinfosQuery('doctorinfosList');

    const [addNewApp, { isLoading: isLoading3, isError: isError3, error: error3 }] = useAddNewAppMutation();

    let doctorsoptions;
    if (isSuccess && isSuccess2) {
    doctorsoptions = doctorinfos.ids.map(doctorid => (
            <option key={doctorid} value={doctorid}>
                {doctorinfos.entities[doctorid].firstname}
            </option>
    ))
    }

    useEffect(() => {
        if (isSuccess2) {
            setDoctorname(doctorinfos?.entities[doctorid]?.firstname);
        }
    }
    , [isSuccess2, doctorid, doctorinfos?.entities], doctorinfos?.entities[doctorid]?.firstname)  

    const canSave = [doctorid, appDate, mode].every(Boolean) && !isLoading && !isLoading2 && !isLoading3;

    const handleSubmit = async (e) => {
    e.preventDefault();
        try {
            await addNewApp({ userid, doctorid, doctorname, patientname, mode, appointmentDate: appDate, bookingDate: new Date() }).unwrap();
            setDoctorid('');
            setAppDate('');
            setMode('');
            setPatientname('');
            setDoctorname('');
            alert('Appointment Booked');
            navigate(link);
        } catch(err) {
            console.error(err);
        }
    }

    if(isLoading || isLoading2 || isLoading3) return <PulseLoader style={{color:'white'}} />

    if(isError || isError2 || isError3) return <div>{error?.data?.message}  {error2?.data?.message} {error3?.data?.message}</div>


  return (
    <section>
        <h1>
            Book your Appointment
        </h1>
        <form id='BookAppointmentForm' className="BookAppointmentForm">
                <label htmlFor="bookAppDoctor">
                    Doctor:
                </label>
                <select 
                    id="bookAppDoctor" 
                    className='userinfoInput'
                    value={doctorid} onChange={(e)=>setDoctorid(e.target.value)}
                >
                    <option value=""></option>
                    {doctorsoptions}
                </select>

                <label htmlFor="appdate">
                    Appointment Date:
                </label>
                <input 
                    id='appdate' 
                    className='userinfoInput'
                    name="appdate"  
                    title="Please enter a valid date" 
                    value={appDate} 
                    onChange={(e)=>setAppDate(e.target.value)}   
                    type="date" 
                    required
                />

                <label htmlFor="postContent">Mode:</label>
                <select 
                    id="bookAppMode" 
                    className='userinfoInput'
                    value={mode} onChange={(e)=>setMode(e.target.value)}
                >
                    <option value="voice">voice Call</option>
                    <option value="video">Video Call</option>
                    <option value="physical">Physical Meet</option>
                </select>

                <button
                    type="button"
                    className="btnAppForm"
                    onClick={handleSubmit}
                    disabled={!canSave}
                >Save Post</button>
            </form>
    </section>
  )
}

export default BookingForm;