import { useGetUsersQuery } from "./userloginsApiSlice"
import Userlogin from './Userlogin'

const UserloginsList = () => {

    const {
        data: userlogins,
        isLoading,
        isSuccess,
        isError,
        error
    } = useGetUsersQuery('userloginsList', {
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

        const { ids } = userlogins

        const tableContent = ids?.length
            ? ids.map(userId => <Userlogin key={userId} userId={userId} />)
            : null

        content = (
            <>
                <h1 style={{alignContent:'center'}}>User Login Details</h1>
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
export default UserloginsList