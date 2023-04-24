import React, { useEffect } from 'react'
import { Table } from "antd";
import { useDispatch, useSelector } from 'react-redux';
import { getOrder } from '../features/auth/authSlice';
import { Link } from 'react-router-dom';
import { BiEdit } from 'react-icons/bi';
import { AiFillDelete } from 'react-icons/ai';

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
        title: "Product",
        dataIndex: "product",
    },
    {
        title: "Status",
        dataIndex: "staus",
    },
];

const Orders = () => {

    const dispatch = useDispatch();
    const orderState = useSelector((state) => state.auth.order);

    useEffect(() => {
        dispatch(getOrder());
    }, []);

    let data1 = [];
    if (orderState) {
        for (let i = 0; i < orderState.length; i++) {
            data1.push({
                key: i + 1,
                title: orderState[i].title,
                action: (
                    <>
                        <Link to='/' className='px-2 fs-4 text-danger'>
                            <BiEdit />
                        </Link>
                        <Link to='/' className='px-2 fs-4 text-danger'>
                            <AiFillDelete />
                        </Link>
                    </>
                ),
            });
        }
    }

    return (
        <div>
            <h3 className="mb-4 title">Orders</h3>
            <Table columns={columns} dataSource={data1} />
        </div>
    )
}


export default Orders