import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { useGetUserinfosQuery, useUpdateUserinfoMutation } from '../admin/userinfo/userinfosApiSlice';
import PulseLoader from 'react-spinners/PulseLoader';
import useAuth from '../../hooks/useAuth';
import '../../css/usercomponents/FillUserinfo.css';

const FillUserinfo = () => {
    const { id1 } = useAuth();

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [gender, setGender] = useState('');
    const [dob, setDob] = useState('');
    const [number, setNumber] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');

    const [updateUserinfo, { isLoading, isSuccess: isUpdateSuccess }] = useUpdateUserinfoMutation();

    const { data: users,
        isLoading : isInfoLoading,
        isSuccess : isInfoSuccess,
        isError : isInfoError,
        error : infoError } = useGetUserinfosQuery('getUserinfos')

    const user = (users?.entities[id1]);

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
            navigate('/user/user-profile');
        }
    }, [isUpdateSuccess, navigate])

    const canSave = [firstName, lastName, gender, dob, number, email, address].every(Boolean) && !isLoading

    const onSubmitClicked = async (e) => {
        e.preventDefault();
        if (canSave && isInfoSuccess) {
            try {
                await updateUserinfo({ id: user?._id, userid: user?.userid, username: user?.username, anonymousname: user?.anonymousname, firstname: firstName, lastname: lastName, gender: gender, dob: dob, contactno: number, email: email, address: address, active: user?.active }).unwrap()
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
                <h2 className='postH2'>User not found!</h2>
            </section>
        )
    }


  return (
    <div className="fillUserInfo">
        <form id='UserinfoForm' className="fillUserinfoForm">
            <h1>User Details</h1>
            <p className='userinfoP'>
                <label 
                    htmlFor="firstName"
                    className='userinfoLabel'
                >
                    First Name:
                </label>
                <input 
                    id='firstName' 
                    className='userinfoInput'
                    type="text" 
                    value={firstName}
                    onChange={(e)=>setFirstName(e.target.value)}
                    title='Enter your first name'
                    required
                />
            </p>
            <p className='userinfoP'>
                <label 
                    htmlFor="lastname"
                    className='userinfoLabel'
                >
                    Last Name:
                </label>
                <input 
                    id='lastname'  
                    className='userinfoInput'
                    type="text" 
                    value={lastName}
                    onChange={(e)=>setLastName(e.target.value)}
                    title='Enter your last name'
                    required
                />
            </p>
            <p className='userinfoP'>
                <label 
                    htmlFor="gender"
                    className='userinfoLabel'
                >
                    Gender:
                </label>
                <select 
                    name="gender" 
                    id="gender" 
                    className='userinfoSelect'
                    value={gender} 
                    onChange={(e)=>setGender(e.target.value)}
                >
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                </select>
            </p>
            <p className='userinfoP'>
                <label 
                    htmlFor="dob"
                    className='userinfoLabel'
                >
                    Date of Birth:
                </label>
                <input 
                    id='dob' 
                    className='userinfoInput'
                    name="dob"  
                    title="Please enter a valid date of birth" 
                    value={dob} 
                    onChange={(e)=>setDob(e.target.value)}   
                    type="date" 
                    required
                />
            </p>
            <p className='userinfoP'>
                <label 
                    htmlFor="number"
                    className='userinfoLabel'
                >
                    Contact number:
                </label>
                <input 
                    id='number' 
                    className='userinfoInput'
                    type="tel"
                    value={number}
                    onChange={(e)=>setNumber(e.target.value)}
                    title='Enter your phone number'
                    required
                />
            </p>
            <p className='userinfoP'>
                <label 
                    htmlFor="email"
                    className='userinfoLabel'
                >
                    Email Id:
                </label>
                <input 
                    id='email' 
                    className='userinfoInput'
                    name="email" 
                    title="Please enter a valid email address"  
                    value={email} 
                    onChange={(e)=>setEmail(e.target.value)}  
                    type="email" 
                    required
                />
            </p>
            <p className='userinfoP'>
                <label 
                    htmlFor="address"
                    className='userinfoLabel'
                >
                    Address:
                </label>
                <textarea 
                    name="address" 
                    className='userinfoTextarea'
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
            <button 
                type="submit" 
                className='userinfoButton'
                onClick={(e)=>onSubmitClicked(e)}
            >
                Submit
            </button>
        </form>
    </div>
  )
}

export default FillUserinfo;