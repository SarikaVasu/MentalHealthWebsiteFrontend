import { useState, useEffect } from 'react';
import { useGetUserinfosQuery, useUpdateUserinfoMutation } from '../admin/userinfo/userinfosApiSlice';
import useAuth from '../../hooks/useAuth';
import PulseLoader from 'react-spinners/PulseLoader';
import { AiFillEdit } from "react-icons/ai";
import '../../css/usercomponents/UserProfile.css';

const UserProfile = () => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [gender, setGender] = useState('');
    const [dob, setDob] = useState('');
    const [number, setNumber] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [canChange, setCanChange] = useState(false);

    const { id1 } = useAuth();

    const [updateUserinfo, {
        isLoading,
        isError,
        error
    }] = useUpdateUserinfoMutation();

    const { data: users,
            isLoading : isInfoLoading,
            isSuccess : isInfoSuccess,
            isError : isInfoError,
            error : infoError } = useGetUserinfosQuery('getUserinfos');
            
    const user = (users?.entities[id1]);

    useEffect(() => {
        if (isInfoSuccess) {
            setFirstName(user.firstname);
            setLastName(user.lastname);
            setGender(user.gender);
            setDob(user.dob);
            setNumber(user.contactno);
            setEmail(user.email);
            setAddress(user.address);
            document.getElementById('userprofileButton').style.visibility="visible";
        }
    }, [isInfoSuccess, user?.username, user?.firstname, user?.lastname, user?.anonymousname, user?.gender, user?.dob, user?.contactno, user?.email, user?.address]) ;

    
    const fnEditClicked = (e) => {
        e.preventDefault();
        document.getElementById('firstName').disabled = false;
        document.getElementById('userprofileButton').disabled = false;
        setCanChange(true);
    }
    const lnEditClicked = (e) => {
        e.preventDefault();
        document.getElementById('lastname').disabled = false;
        document.getElementById('userprofileButton').disabled = false;
        setCanChange(true);
    }
    const genderEditClicked = (e) => {
        e.preventDefault();
        document.getElementById('gender').disabled = false;
        document.getElementById('userprofileButton').disabled = false;
        setCanChange(true);
    }
    const dobEditClicked = (e) => {
        e.preventDefault();
        document.getElementById('dob').disabled = false;
        document.getElementById('userprofileButton').disabled = false;
        setCanChange(true);
    }
    const noEditClicked = (e) => {
        e.preventDefault();
        document.getElementById('number').disabled = false;
        document.getElementById('userprofileButton').disabled = false;
        setCanChange(true);
    }
    const emailEditClicked = (e) => {
        e.preventDefault();
        document.getElementById('email').disabled = false;
        document.getElementById('userprofileButton').disabled = false;
        setCanChange(true);
    }
    const addressEditClicked = (e) => {
        e.preventDefault();
        document.getElementById('address').disabled = false;
        document.getElementById('userprofileButton').disabled = false;
        setCanChange(true);
    }
    const changeButtonClicked = async (e) => {
        e.preventDefault();
        if (canChange) {
            try {
                await updateUserinfo({ id: user?._id, userid: user?.userid, username: user?.username, anonymousname: user?.anonymousname, firstname: firstName, lastname: lastName, gender: gender, dob: dob, contactno: number, email: email, address: address, active: user?.active }).unwrap();
                document.getElementById('firstName').disabled = true;
                document.getElementById('lastname').disabled = true;
                document.getElementById('gender').disabled = true;
                document.getElementById('dob').disabled = true;
                document.getElementById('number').disabled = true;
                document.getElementById('email').disabled = true;
                document.getElementById('address').disabled = true;
                document.getElementById('userprofileButton').disabled = true;
            } catch (err) {
                console.error('Failed to save the post', err);
            }
        }
    }
    
    if (isLoading || isInfoLoading) return <PulseLoader color={"black"} />

    if (isError || isInfoError) return <p>Error: {error?.data?.message || infoError.data?.message}</p>

    if (!user) {
        return (
            <section className='postSection'>
                <h2 className='postH2'>User not found!</h2>
            </section>
        )
    }


  return (
    <div className="fillUserProfile">
        <div id='UserprofileForm' className="fillUserprofileForm">
            <h1>Modify User Profile</h1>
            <p className='userprofileP'>
                <label 
                    htmlFor="firstName"
                    className='userprofileLabel'
                >
                    First Name:
                </label>
                <span className="userprofileSpan">
                    <input 
                        id='firstName' 
                        className='userprofileInput'
                        type="text" 
                        value={firstName}
                        onChange={(e)=>setFirstName(e.target.value)}
                        title='First Name'
                        disabled
                    />
                    <span>
                        <button 
                            className="userprofileEditButton"
                            type="button"
                            onClick={(e)=>fnEditClicked(e)}
                        >
                            <AiFillEdit className='userprofileEdit'/>
                        </button>
                    </span>
                </span>
                
            </p>
            <p className='userprofileP'>
                <label 
                    htmlFor="lastname"
                    className='userprofileLabel'
                >
                    Last Name:
                </label>
                <span className="userprofileSpan">
                    <input 
                        id='lastname'  
                        className='userprofileInput'
                        type="text" 
                        value={lastName}
                        onChange={(e)=>setLastName(e.target.value)}
                        title='Last Name'
                        disabled
                    />
                    <span>
                        <button 
                            className="userprofileEditButton"
                            type="button"
                            onClick={(e)=>lnEditClicked(e)}
                        >
                            <AiFillEdit className='userprofileEdit'/>
                        </button>
                    </span>
                </span>
            </p>
            <p className='userprofileP'>
                <label 
                    htmlFor="gender"
                    className='userprofileLabel'
                >
                    Gender:
                </label>
                <span className="userprofileSpan">
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
                    <span>
                        <button 
                            className="userprofileEditButton" 
                            type="button"
                            onClick={(e)=> {genderEditClicked(e)}}
                            
                        >
                            <AiFillEdit className='userprofileEdit'/>
                        </button>
                    </span>
                </span>
            </p>
            <p className='userprofileP'>
                <label 
                    htmlFor="dob"
                    className='userprofileLabel'
                >
                    Date of Birth:
                </label>
                <span className="userprofileSpan">
                    <input 
                        id='dob' 
                        className='userprofileInput'
                        title="Date of birth" 
                        value={dob} 
                        onChange={(e)=>setDob(e.target.value)}   
                        type="date" 
                        disabled
                    />
                    <span>
                        <button 
                            className="userprofileEditButton"
                            type="button"
                            onClick={(e)=>dobEditClicked(e)}
                        >
                            <AiFillEdit className='userprofileEdit'/>
                        </button>
                    </span>
                </span>
            </p>
            <p className='userprofileP'>
                <label 
                    htmlFor="number"
                    className='userprofileLabel'
                >
                    Contact number:
                </label>
                <span className="userprofileSpan">
                    <input 
                        id='number' 
                        className='userprofileInput'
                        type="tel"
                        value={number}
                        onChange={(e)=>setNumber(e.target.value)}
                        title='Phone number'
                        disabled
                    />
                    <span>
                        <button 
                            className="userprofileEditButton"
                            type="button"
                            onClick={(e)=>noEditClicked(e)}
                        >
                            <AiFillEdit className='userprofileEdit'/>
                        </button>
                    </span>
                </span>
            </p>
            <p className='userprofileP'>
                <label 
                    htmlFor="email"
                    className='userprofileLabel'
                >
                    Email Id:
                </label>
                <span className="userprofileSpan">
                    <input 
                        id='email' 
                        className='userprofileInput'
                        title="Email address"  
                        value={email} 
                        onChange={(e)=>setEmail(e.target.value)}  
                        type="email" 
                        disabled
                    />
                    <span>
                        <button 
                            className="userprofileEditButton"
                            type="button"
                            onClick={(e)=>emailEditClicked(e)}
                        >
                            <AiFillEdit className='userprofileEdit'/>
                        </button>
                    </span>
                </span>
            </p>
            <p className='userprofileP'>
                <label 
                    htmlFor="address"
                    className='userprofileLabel'
                >
                    Address:
                </label>
                <span className="userprofileSpan">
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
                    <span>
                        <button 
                            className="userprofileEditButton"
                            type="button"
                            onClick={(e)=>addressEditClicked(e)}
                        >
                            <AiFillEdit className='userprofileEdit'/>
                        </button>
                    </span>
                </span>
            </p>
            <button 
                type="submit" 
                className='userprofileButton'
                id='userprofileButton'
                onClick={(e)=>changeButtonClicked(e)}
                disabled={!canChange}
            >
                Change
            </button>
        </div>
    </div>
  )
}


export default UserProfile;