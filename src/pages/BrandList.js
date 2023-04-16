import React, { useEffect } from 'react';
import { Table } from 'antd';
import { getBrands } from '../features/brand/brandSlice';
import { useDispatch, useSelector } from 'react-redux';
import { BiEdit } from 'react-icons/bi';
import { AiFillDelete } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const columns = [
    {
        title: 'No',
        dataIndex: 'key',
    },
    {
        title: 'Brand Name',
        dataIndex: 'title',
        defaultSortOrder: "descend",
        sorter: (a, b) => a.title.length - b.title.length
    },
    {
        title: 'Action',
        dataIndex: 'action',
    },
];

const BrandList = () => {
    const dispatch = useDispatch();
    const brandState = useSelector((state) => state.brand.brands);

    useEffect(() => {
        dispatch(getBrands());
    }, []);

    const data1 = [];
    for (let i = 0; i < brandState.length; i++) {
        data1.push({
            key: i + 1,
            title: brandState[i].title,
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

    return (
        <div>
            <h3 className='mb-4 title'>Brand List</h3>
            <Table columns={columns} dataSource={data1} />
        </div>
    );
};

export default BrandList;
