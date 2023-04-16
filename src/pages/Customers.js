import React, { useEffect } from 'react'
import { Table } from "antd";
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from '../features/customers/customerSlice';

const columns = [
    {
        title: "SNo",
        dataIndex: "key",
    },
    {
        title: "Name",
        dataIndex: "name",
    },
    {
        title: "email",
        dataIndex: "email",
    },
    {
        title: "address",
        dataIndex: "address",
    },
];

const Customers = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getUsers())
    }, [])

    const customerState = useSelector((state) => state.customer.customers)
    const data1 = [];
    for (let i = 0; i < customerState.length; i++) {
        if (customerState[i].role !== "admin") {
            data1.push({
                key: i + 1,
                name: customerState[i].firstName + " " + customerState[i].lastName,
                email: customerState[i].email,
                address: customerState[i].address,
            });
        }
    }
    return (
        <div>
            <h3 className="mb-4 title">Customers</h3>
            <Table columns={columns} dataSource={data1} />
        </div>
    )
}

export default Customers