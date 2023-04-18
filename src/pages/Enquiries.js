import React from 'react'
import { Table } from "antd";

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
const Enquiries = () => {

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
            <h3 className="mb-4 title">Enquiries</h3>
            <Table columns={columns} dataSource={data1} />
        </div>
    )
}

export default Enquiries