import { useGetDoctorsQuery } from "./doctorloginsApiSlice"
import Doctorlogin from './Doctorlogin'

const DoctorloginsList = () => {

    const {
        data: Doctorlogins,
        isLoading,
        isSuccess,
        isError,
        error
    } = useGetDoctorsQuery('DoctorloginsList', {
        //when
        pollingInterval: 60000,
        refetchOnFocus: true,
        refetchOnMountOrArgChange: true
    })

    let content

    if (isLoading) content = <p>Loading...</p>

    if (isError) {
        content = <p className="errmsg">{error?.data?.message}</p>
    }

    if (isSuccess) {

        const { ids } = Doctorlogins

        const tableContent = ids?.length
            ? ids.map(userId => <Doctorlogin key={userId} userId={userId} />)
            : null

        content = (
            <>
                <h1 style={{alignContent:'center'}}>Doctor Login Details</h1>
                <table className="table table--users">
                    <thead className="table__thead">
                        <tr>
                            <th scope="col" className="table__th user__username">Username</th>
                            <th scope="col" className="table__th user__roles">Roles</th>
                            <th scope="col" className="table__th user__edit">Edit</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tableContent}
                    </tbody>
                </table>
            </>
        )
    }

    return content
}
export default DoctorloginsList