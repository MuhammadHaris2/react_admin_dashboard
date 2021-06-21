import React,{useState} from 'react';
import './userList.css';
import { DataGrid } from '@material-ui/data-grid';
import { DeleteOutline } from '@material-ui/icons';
import { userRows } from '../../dummyData';
import {Link} from 'react-router-dom';

const UserList = () => {
   
    const [data, setdata] = useState(userRows)
    const deleteData=(userId)=>{
        let list = data.filter(x=>x.id !== userId);
        setdata(list);
    }

    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        {
            field: 'user', headerName: 'User Name', width: 200, renderCell: (params) => {
                return (
                    <div className="userListUser">
                        <img src={params.row.avatar} alt="" className="userListImg" />
                        {params.row.username}
                    </div>
                )
            }
        },
        { field: 'email', headerName: 'Email', width: 200 },
        {
            field: 'status',
            headerName: 'Status',
            width: 120,
        },
        {
            field: 'transactions',
            headerName: 'Transactions',
            width: 160,
        },
        {
            field: 'action',
            headerName: 'Action',
            width: 150,

            renderCell: (params) => {
                return (
                    <>
                        <Link to={"/user/" + params.row.id}>
                            <button className="userListEdit">Edit</button>
                        </Link>

                        <DeleteOutline className="userListDelete" onClick={()=>deleteData(params.row.id)}/>
                    </>
                )
            }
        },

    ];


    return (
        <div className="userList">
            <DataGrid rows={data} columns={columns} pageSize={8} checkboxSelection disableSelectionOnClick />
        </div>
    )
}

export default UserList
