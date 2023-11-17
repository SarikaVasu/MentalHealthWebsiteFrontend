import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useGetUserinfosQuery } from '../admin/userinfo/userinfosApiSlice';
import useAuth from '../../hooks/useAuth';
import PulseLoader from 'react-spinners/PulseLoader';
import '../../css/usercomponents/UserProfile.css'

const UserProfile = () => {

    const [username, setUsername] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [anonymousName, setAnonymousName] = useState('');
    const [gender, setGender] = useState('');
    const [dob, setDob] = useState('');
    const [number, setNumber] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');

    const { id1 } = useAuth();

    const { data: users,
            isLoading : isInfoLoading,
            isSuccess : isInfoSuccess,
            isError : isInfoError,
            error : infoError } = useGetUserinfosQuery('getUserinfos');
            
    const user = (users?.entities[id1]);

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
            document.getElementById('userprofileButton').style.visibility="visible";
        }
    }, [isInfoSuccess, user?.username, user?.firstname, user?.lastname, user?.anonymousname, user?.gender, user?.dob, user?.contactno, user?.email, user?.address])

    if (isInfoLoading) return <PulseLoader color={"black"} />

    if (isInfoError) return <p>Error: {infoError.data?.message}</p>

    if (!user) {
        return (
            <section className='postSection'>
                <h2 className='postH2'>User not found!</h2>
            </section>
        )
    }


  return (
    <div className="fillUserProfile">
        <form id='UserprofileForm' className="fillUserprofileForm">
            <h1>User Profile</h1>
            <p className='userprofileP'>
                <label 
                    htmlFor="username"
                    className='userprofileLabel'
                >
                    Username:
                </label>
                <input 
                    id='username' 
                    className='userprofileInput'
                    type="text" 
                    value={username}
                    onChange={(e)=>setUsername(e.target.value)}
                    title='Username'
                    disabled
                />
            </p>
            <p className='userprofileP'>
                <label 
                    htmlFor="anonymousname"
                    className='userprofileLabel'
                >
                    Anonymous Name:
                </label>
                <input 
                    id='anonymousname' 
                    className='userprofileInput'
                    type="text" 
                    value={anonymousName}
                    onChange={(e)=>setAnonymousName(e.target.value)}
                    title='Anonymous Name '
                    disabled
                />
            </p>
            <p className='userprofileP'>
                <label 
                    htmlFor="firstName"
                    className='userprofileLabel'
                >
                    First Name:
                </label>
                <input 
                    id='firstName' 
                    className='userprofileInput'
                    type="text" 
                    value={firstName}
                    onChange={(e)=>setFirstName(e.target.value)}
                    title='First Name'
                    disabled
                />
                
            </p>
            <p className='userprofileP'>
                <label 
                    htmlFor="lastname"
                    className='userprofileLabel'
                >
                    Last Name:
                </label>
                <input 
                    id='lastname'  
                    className='userprofileInput'
                    type="text" 
                    value={lastName}
                    onChange={(e)=>setLastName(e.target.value)}
                    title='Last Name'
                    disabled
                />
            </p>
            <p className='userprofileP'>
                <label 
                    htmlFor="gender"
                    className='userprofileLabel'
                >
                    Gender:
                </label>
                <select 
                    id="gender" 
                    className='userprofileSelect'
                    value={gender} 
                    onChange={(e)=>setGender(e.target.value)}
                    disabled
                >
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                </select>
            </p>
            <p className='userprofileP'>
                <label 
                    htmlFor="dob"
                    className='userprofileLabel'
                >
                    Date of Birth:
                </label>
                <input 
                    id='dob' 
                    className='userprofileInput'
                    title="Date of birth" 
                    value={dob} 
                    onChange={(e)=>setDob(e.target.value)}   
                    type="date" 
                    disabled
                />
            </p>
            <p className='userprofileP'>
                <label 
                    htmlFor="number"
                    className='userprofileLabel'
                >
                    Contact number:
                </label>
                <input 
                    id='number' 
                    className='userprofileInput'
                    type="tel"
                    value={number}
                    onChange={(e)=>setNumber(e.target.value)}
                    title='Phone number'
                    disabled
                />
            </p>
            <p className='userprofileP'>
                <label 
                    htmlFor="email"
                    className='userprofileLabel'
                >
                    Email Id:
                </label>
                <input 
                    id='email' 
                    className='userprofileInput'
                    title="Email address"  
                    value={email} 
                    onChange={(e)=>setEmail(e.target.value)}  
                    type="email" 
                    disabled
                />
            </p>
            <p className='userprofileP'>
                <label 
                    htmlFor="address"
                    className='userprofileLabel'
                >
                    Address:
                </label>
                <textarea 
                    className='userprofileTextarea'
                    id="address" 
                    cols="30" 
                    rows="3"
                    value={address}
                    onChange={(e)=>setAddress(e.target.value)}
                    title='Address'
                    disabled
                >

                </textarea>
            </p>
            <Link to='/user/user-profile-modify' className='userprofileLink'>
                <button 
                    type="submit" 
                    className='userprofileButton'
                    id='userprofileButton'
                >
                    Modify
                </button>
            </Link>
        </form>
    </div>
  )
}


export default UserProfile

