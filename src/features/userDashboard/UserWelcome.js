import { Link } from 'react-router-dom'
import useAuth from '../../hooks/useAuth'
import useTitle from '../../hooks/useTitle'

const UserWelcome = () => {

    const { id, username, anonymousname, isEditor, isAdmin } = useAuth();

    useTitle(`User Dashboard: ${username}`)

    const date = new Date()
    const today = new Intl.DateTimeFormat('en', { dateStyle: 'full', timeStyle: 'long' }).format(date);

    const link = `/user/view-appointment/${id}`;
    const link1 = `/confession-forum/post/my-posts/${anonymousname}`;

    const content = (
        <section className="welcome">

            <p>{today}</p>

            <br />

            <h1>Welcome {username}!</h1>

            <br />

            <p className="welcomeP">
                <Link to='/user/book-appointment'>Book an Appointment</Link>
            </p>
            <p className="welcomeP">
                <Link to={link}>View my Appointments</Link>
            </p>
            <p className='welcomeP'>
                <Link to={link1}>My posts</Link>  
            </p>
            <p className='welcomeP'>
                <Link to='/confession-forum/post'>Confession Forum</Link>
            </p>

            {(isEditor || isAdmin) && <p className='welcomeP'><Link to="/user/administration/settings/users-list">View User Settings</Link></p>}

            {(isEditor || isAdmin) && <p className='welcomeP'><Link to="/user/administration/settings/users-list/new">Add New User</Link></p>}

            {(isEditor || isAdmin) && <p className='welcomeP'><Link to="/user/administration/settings/doctors-list">View Doctor Settings</Link></p>}

            {(isEditor || isAdmin) && <p className='welcomeP'><Link to="/user/administration/settings/doctors-list/new">Add New Doctor</Link></p>}

        </section>
    )

    return content
}
export default UserWelcome