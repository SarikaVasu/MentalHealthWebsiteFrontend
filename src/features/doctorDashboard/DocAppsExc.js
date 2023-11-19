import { useGetAppsQuery } from '../../features/admin/Appointments/appApiSlice';
import useAuth from  "../../hooks/useAuth";
import '../../css/usercomponents/AppExcerpts.css';

const DocAppsExc = ({id}) => {
    const {id1} = useAuth();

    const { appointment } = useGetAppsQuery('getApps', {
        selectFromResult: ({ data }) => ({
            appointment: data?.entities[id]
        }),
    })

    let content;
    if(appointment.doctorid === id1) {
        content = (
            <article className='userAppEach'>
                <p>Doctor name: {appointment.doctorname}</p>
                <p>Booked date: {appointment.bookingDate}</p>
                <p>Appointment Date: {appointment.appointmentDate.substring(0,10)}</p>
                <p>Mode: {appointment.mode}</p>
            </article>
        ) ;
    } else {
        content = null;
    }

    return content;

}

export default DocAppsExc