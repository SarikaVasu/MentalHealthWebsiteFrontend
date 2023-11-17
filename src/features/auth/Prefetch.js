import { store } from '../../app/store'
import { doctorloginsApiSlice } from '../admin/doctorlogin/doctorloginsApiSlice';
import { userloginsApiSlice } from '../admin/userlogin/userloginsApiSlice';
import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';

const Prefetch = () => {

    useEffect(() => {
        store.dispatch(doctorloginsApiSlice.util.prefetch('getDoctors', 'doctorloginsList', { force: true }))
        store.dispatch(userloginsApiSlice.util.prefetch('getUsers', 'userloginsList', { force: true }))
    }, [])

    return <Outlet />
}
export default Prefetch
