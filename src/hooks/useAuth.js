import { useSelector } from 'react-redux';
import { selectCurrentToken } from "../features/auth/authSlice";
import {jwtDecode} from 'jwt-decode';

const useAuth = () => {
    const token = useSelector(selectCurrentToken);
    let isEditor = false;
    let isAdmin = false;
    let status = "User";

    if (token) {
        const decoded = jwtDecode(token);
        const { id, id1, username, identity, anonymousname, roles } = decoded.UserInfo;

        isEditor = roles.includes('Editor');
        isAdmin = roles.includes('Admin');

        if (isEditor) status = "Editor";
        if (isAdmin) status = "Admin";

        return { id, id1, username, identity, anonymousname, roles, status, isEditor, isAdmin };
    }

    return { username: '', roles: [], isEditor, isAdmin, status };
}
export default useAuth;