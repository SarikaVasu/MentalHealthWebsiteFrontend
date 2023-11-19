import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';

const AllHeader = () => {
  return (
    <header className="doctorSigninHeader" style ={{height:'4rem', width:"100%", backgroundColor:'#0F172A', color: 'white', display: 'flex', justifyContent:'flex-end', flexDirection:'row', padding:'1rem', fontSize:'2rem', position:'fixed', top:'0px', marginBottom:'3rem'}}>
        Back to
        <Link to='/'>  
          <FontAwesomeIcon icon={faHouse} style={{color:'white', paddingLeft:'1rem'}}/>
        </Link>
      </header>
  )
}

export default AllHeader

