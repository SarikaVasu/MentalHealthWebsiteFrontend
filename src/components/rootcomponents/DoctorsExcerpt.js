import { useGetDoctorinfosQuery } from '../../features/admin/doctorinfo/doctorinfosApiSlice';
import '../../css/rootcomp/Doctor.css'

const DoctorsExcerpt = ({ id }) => {

    const { doctor } = useGetDoctorinfosQuery('getDoctorinfos', {
        selectFromResult: ({ data }) => ({
            doctor: data?.entities[id]
        }),
    })

    if(doctor.lastname && doctor.lastname && doctor.experience)

    return (
        <article className="eachDoctor doctorArticle">
            <article className="doctorArticle">
                <p>Firstname: {doctor?.firstname}</p>
                <p>Lastname: {doctor?.lastname}</p>
                <p>Degrees: {doctor.degrees}</p>
                <p>Working Experience: {doctor?.experience}</p>
            </article>
        </article>
    )
}

export default DoctorsExcerpt;