import React from 'react';
import './admin.css'
import {useDispatch, useSelector} from "react-redux";
import {setIsAdminCreate} from "../../redux/slices/adminSlice";
import AdminQuestionText from "./adminQuestionText/AdminQuestionText";
import AdminDelete from "./AdminDelete/AdminDelete";
import {useNavigate} from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";


const Admin = () => {
    const dispatch = useDispatch()
    const isAdminCreate = useSelector(state => state.admin.isAdminCreate)
    const navigate = useNavigate()
    const goBack = () => navigate(-1)
    return (
        <div className='admin'>
            <ArrowBackIcon
                onClick={goBack}
                sx={{
                    position: 'absolute',
                    top: '30px',
                    cursor: 'pointer'
                }}/>
            <div className={"admin__button"}>
                {isAdminCreate
                    ?
                    <button  onClick={() => dispatch(setIsAdminCreate(false))}>Створити</button>
                    :
                    <button  onClick={() => dispatch(setIsAdminCreate(true))}>Удалити</button>}
            </div>
            {isAdminCreate
                ?
                <AdminDelete/>
                :
                <AdminQuestionText/>}

        </div>
    );
};

export default Admin;