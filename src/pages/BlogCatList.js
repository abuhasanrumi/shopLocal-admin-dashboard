import React, { useEffect } from 'react'
import { Table } from "antd";
import { useDispatch, useSelector } from 'react-redux';
import { BiEdit } from 'react-icons/bi';
import { AiFillDelete } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { getBlogCatList } from '../features/blogCatList/blogCatListSlice';


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


const BlogCatList = () => {

    const dispatch = useDispatch();
    const blogState = useSelector((state) => state.blogCatList.blogCats);

    useEffect(() => {
        dispatch(getBlogCatList());
    }, []);

    const data1 = [];
    for (let i = 0; i < blogState.length; i++) {
        data1.push({
            key: i + 1,
            title: blogState[i].title,
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
            <h3 className="mb-4 title">Blog Categories</h3>
            <Table columns={columns} dataSource={data1} />
        </div>
    )
}

export default BlogCatList