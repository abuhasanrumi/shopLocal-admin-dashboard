import React, { useEffect } from 'react'
import { Table } from "antd";
import { useDispatch, useSelector } from 'react-redux';
import { BiEdit } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { getEnquiry } from '../features/enquiry/enquirySlice';

const columns = [
    {
        title: "No",
        dataIndex: "key",
    },
    {
        title: "Name",
        dataIndex: "name",
    },
    {
        title: "Email",
        dataIndex: "email",
    },
    {
        title: "Phone",
        dataIndex: "phone",
    },
    {
        title: "Comment",
        dataIndex: "comment",
    },
    {
        title: "Status",
        dataIndex: "status",
    },
    {
        title: "Action",
        dataIndex: "action",
    }
];
const Enquiries = () => {

    const dispatch = useDispatch();
    const enquiryState = useSelector((state) => state.enquiry.enquiries);
    console.log(enquiryState)

    useEffect(() => {
        dispatch(getEnquiry());
    }, []);

    const data1 = [];
    for (let i = 0; i < enquiryState.length; i++) {
        data1.push({
            key: i + 1,
            name: enquiryState[i].name,
            email: enquiryState[i].email,
            phone: enquiryState[i].mobile,
            comment: enquiryState[i].comment,
            status: (
                <>
                    <select name="" className='form-control form-select' id="">
                        <option value="">Set Status</option>
                    </select>
                </>
            ),
            action: (
                <>
                    <Link to='/' className='px-2 fs-4 text-danger'>
                        <BiEdit />
                    </Link>
                </>
            ),
        });
    }
    return (
        <div>
            <h3 className="mb-4 title">Enquiries</h3>
            <Table columns={columns} dataSource={data1} />
        </div>
    )
}

export default Enquiries