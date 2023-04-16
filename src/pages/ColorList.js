import React, { useEffect } from 'react'
import { Table } from "antd";
import { useDispatch, useSelector } from 'react-redux';
import { BiEdit } from 'react-icons/bi';
import { AiFillDelete } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { getColors } from '../features/color/colorSlice';


const columns = [
    {
        title: 'No',
        dataIndex: 'key',
    },
    {
        title: 'Color Name',
        dataIndex: 'title',
        defaultSortOrder: "descend",
        sorter: (a, b) => a.title.length - b.title.length
    },
    {
        title: 'Action',
        dataIndex: 'action',
    },
];


const ColorList = () => {
    const dispatch = useDispatch();
    const colorState = useSelector((state) => state.color.colors);
    console.log(colorState)

    useEffect(() => {
        dispatch(getColors());
    }, []);

    const data1 = [];
    for (let i = 0; i < colorState.length; i++) {
        data1.push({
            key: i + 1,
            title: colorState[i].title,
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
            <h3 className="mb-4 title">Color List</h3>
            <Table columns={columns} dataSource={data1} />
        </div>
    )
}

export default ColorList