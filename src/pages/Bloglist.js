import React, { useEffect } from 'react';
import { Table } from "antd";
import { getBlogs } from '../features/blogList/blogListSlice';
import { useDispatch, useSelector } from 'react-redux';
import { BiEdit } from 'react-icons/bi';
import { AiFillDelete } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const columns = [
    {
        title: "No",
        dataIndex: "key",
    },
    {
        title: "Title",
        dataIndex: "title",
    },
    {
        title: "Category",
        dataIndex: "category",
    },
    {
        title: "Author",
        dataIndex: "author",
    },
    {
        title: "Views",
        dataIndex: "views",
    },
    {
        title: "Likes",
        dataIndex: "likes",
    },
    {
        title: "Dislikes",
        dataIndex: "dislikes",
    },
    {
        title: "Action",
        dataIndex: "action",
    },
];


const Bloglist = () => {

    const dispatch = useDispatch();
    const blogState = useSelector((state) => state.blogList.blogs);

    useEffect(() => {
        dispatch(getBlogs());
    }, []);

    const data1 = [];
    for (let i = 0; i < blogState.length; i++) {
        data1.push({
            key: i + 1,
            title: blogState[i].title,
            category: blogState[i].category,
            author: blogState[i].author,
            views: blogState[i].views,
            likes: blogState[i].likes,
            dislikes: blogState[i].dislikes,
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
            <h3 className="mb-4 title">Blog List</h3>
            <Table columns={columns} dataSource={data1} />
        </div>
    )
}

export default Bloglist