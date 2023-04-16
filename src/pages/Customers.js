import React, { useEffect } from 'react'
import { Table } from "antd";
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from '../features/customers/customerSlice';

const columns = [
    {
        title: "No",
        dataIndex: "key",
    },
    {
        title: "Name",
        dataIndex: "name",
        defaultSortOrder: "descend",
        sorter: (a, b) => a.name.length - b.name.length
    },
    {
        title: "Email",
        dataIndex: "email",
    },
    {
        title: "Address",
        dataIndex: "address",
    },
];

const Customers = () => {
    const dispatch = useDispatch()
    const customerState = useSelector((state) => state.customer.customers)

    useEffect(() => {
        const controller = new AbortController()
        dispatch(getUsers({ signal: controller.signal }))

        return () => {
            controller.abort();
        }
    }, [dispatch])


    const data1 = [];
    for (let i = 0; i < customerState.length; i++) {
        if (customerState[i].role !== "admin") {
            data1.push({
                key: i,
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