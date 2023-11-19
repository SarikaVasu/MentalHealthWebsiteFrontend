import { useGetAppsQuery } from '../../features/admin/Appointments/appApiSlice';
import DocAppsExc from './DocAppsExc';
import PulseLoader from 'react-spinners/PulseLoader';
import '../../css/usercomponents/UserViewApp.css';

const DoctorViewApp = () => {

    const { data: appointments, isSuccess, isLoading, isError, error } = useGetAppsQuery('getApps'); 

    let content;
    if (isLoading) {
        content = <PulseLoader style={{color:'white'}} />
    } else if (isSuccess) {  
        const { ids } = appointments;  
        content = ids?.length
                ? ids.map(id => <DocAppsExc key={id} id={id}/>)
                : null
    } else if (isError) {
        content = <p className="appP">{error}</p>;
    }

    return (
        <section className="appSection allApp">
            <h2 className="appTitle">Appointments</h2>
            {content}
        </section>
    )
}

export default DoctorViewApp