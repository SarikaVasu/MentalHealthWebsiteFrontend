import { useParams } from 'react-router-dom'
import EditDoctorForm from './EditDoctorForm'
import { useGetDoctorsQuery } from './doctorloginsApiSlice'
import PulseLoader from 'react-spinners/PulseLoader'
import useTitle from '../../../hooks/useTitle'

const EditDoctorinfo = () => {

    useTitle('Edit Doctor')

    const { id } = useParams()

    const { user } = useGetDoctorsQuery("doctorloginsList", {
        selectFromResult: ({ data }) => ({
            user: data?.entities[id]
        }),
    })

    if (!user) return <PulseLoader color={"#FFF"} />

    const content = <EditDoctorForm user={user} />

    return content
}

export default EditDoctorinfo