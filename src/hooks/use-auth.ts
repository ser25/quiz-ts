import {useSelector} from "react-redux";
import {SelectUser} from "../redux/slices/userSlice";


export function useAuth(){
    const {email, token, id} = useSelector(SelectUser)

    return {
        isAuth: !!email,
        email,
        token,
        id,
    }
}