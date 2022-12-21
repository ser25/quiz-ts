import React from 'react';
import './admin.css'
import {useDispatch, useSelector} from "react-redux";
import {setIsAdminCreate} from "../../redux/slices/adminSlice";
import AdminQuestionText from "./adminQuestionText/AdminQuestionText";
import AdminDelete from "./AdminDelete/AdminDelete";


const Admin = () => {
    const dispatch = useDispatch()
    const isAdminCreate = useSelector(state => state.admin.isAdminCreate)
    return (
        <div className='admin'>
            <div>
                {isAdminCreate
                    ?
                    <button onClick={() => dispatch(setIsAdminCreate(false))}>Створити</button>
                    :
                    <button onClick={() => dispatch(setIsAdminCreate(true))}>Удалити</button>}
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