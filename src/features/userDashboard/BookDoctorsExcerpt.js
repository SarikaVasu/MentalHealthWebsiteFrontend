import { useGetDoctorinfosQuery } from '../admin/doctorinfo/doctorinfosApiSlice';
import '../../css/usercomponents/BookDoctorsExcerpt.css'

const DoctorsExcerpt = ({ id }) => {

    const { doctor } = useGetDoctorinfosQuery('getDoctorinfos', {
        selectFromResult: ({ data }) => ({
            doctor: data?.entities[id]
        }),
    })

    if(doctor.lastname && doctor.lastname && doctor.experience)

    return (
        <article className="eachBookDoc bookDocArticle">
            <article className="bookDocArticle eachDocDet">
                <p>Firstname: {doctor?.firstname}</p>
                <p>Lastname: {doctor?.lastname}</p>
                <p>Gender: {doctor.gender}</p> 
                <p>Degrees: {doctor.degree}</p>
                <p>Clinic Name: {doctor.clinic}</p>
                <p>Working Experience: {doctor?.experience} years</p>
            </article>
        </article>
    )
}

export default DoctorsExcerpt;