import React, { useEffect } from 'react'
import { Table } from "antd";
import { useDispatch, useSelector } from 'react-redux';
import { BiEdit } from 'react-icons/bi';
import { AiFillDelete } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { getProdCats } from '../features/prodCat/prodCatSlice';

const columns = [
    {
        title: 'No',
        dataIndex: 'key',
    },
    {
        title: 'Category Name',
        dataIndex: 'title',
        defaultSortOrder: "descend",
        sorter: (a, b) => a.title.length - b.title.length
    },
    {
        title: 'Action',
        dataIndex: 'action',
    },
];


const ProdCatList = () => {
    const dispatch = useDispatch();
    const prodCatState = useSelector((state) => state.prodCat.prodCats);

    useEffect(() => {
        dispatch(getProdCats());
    }, []);

    const data1 = [];
    for (let i = 0; i < prodCatState.length; i++) {
        data1.push({
            key: i + 1,
            title: prodCatState[i].title,
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
            <h3 className="mb-4 title">Product Categories</h3>
            <Table columns={columns} dataSource={data1} />
        </div>
    )
}

export default ProdCatList