import { Link } from 'react-router-dom'
import useAuth from '../../hooks/useAuth'
import useTitle from '../../hooks/useTitle'

const DoctorWelcome = () => {

    const { id, username, anonymousname } = useAuth()

    useTitle(`Doctor Dashboard: ${username}`)

    const date = new Date()
    const today = new Intl.DateTimeFormat('en', { dateStyle: 'full', timeStyle: 'long' }).format(date);

    const link = `/doctor/view-appointment/${id}`;
    const link1 = `/confession-forum/post/my-posts/${anonymousname}`;

    const content = (
        <section className="welcome">

            <p>{today}</p>

            <br />

            <h1>Welcome {username}!</h1>

            <br />

            <p className="welcomeP">
                <Link to={link}>View my Appointments</Link>
            </p>
            <p className='welcomeP'>
                <Link to={link1}>My posts</Link>  
            </p>
            <p className='welcomeP'>
                <Link to='/confession-forum/post'>Confession Forum</Link>
            </p>

        </section>
    )

    return content
}
export default DoctorWelcome