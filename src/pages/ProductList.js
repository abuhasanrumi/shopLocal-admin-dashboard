import React, { useEffect } from 'react'
import { Table } from "antd";
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../features/products/productSlice';
import { BiEdit } from 'react-icons/bi'
import { AiFillDelete } from 'react-icons/ai'
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
        title: "Price",
        dataIndex: "price",
        defaultSortOrder: "descend",
        sorter: (a, b) => a.price - b.price
    },
    {
        title: "Quantity",
        dataIndex: "quantity",
        defaultSortOrder: "descend",
        sorter: (a, b) => a.quantity.length - b.quantity.length
    },
    {
        title: "Color",
        dataIndex: "color",
        defaultSortOrder: "descend",
        sorter: (a, b) => a.color.length - b.color.length
    },
    {
        title: "Category",
        dataIndex: "category",
        defaultSortOrder: "descend",
        sorter: (a, b) => a.category.length - b.category.length
    },
    {
        title: "Brand",
        dataIndex: "brand",
        defaultSortOrder: "descend",
        sorter: (a, b) => a.brand.length - b.brand.length
    },
    {
        title: "Action",
        dataIndex: "action",
    },
];


const ProductList = () => {
    const dispatch = useDispatch()
    const productState = useSelector((state) => state.product.products)

    useEffect(() => {
        const controller = new AbortController()
        dispatch(getProducts({ signal: controller.signal }))

        return () => {
            controller.abort();
        }
    }, [dispatch])

    const data1 = [];
    for (let i = 0; i < productState.length; i++) {
        console.log(productState[i])
        data1.push({
            key: i + 1,
            title: productState[i].title,
            quantity: productState[i].quantity,
            color: productState[i].color.title,
            category: productState[i].category,
            brand: productState[i].brand,
            price: productState[i].price,
            action:
                <>
                    <Link to="/" className="px-2 fs-4 text-danger"><BiEdit /></Link>
                    <Link to="/" className="px-2 fs-4 text-danger"><AiFillDelete /></Link>
                </>,
        });
    }
    return (
        <div>
            <h3 className="mb-4 title">Product List</h3>
            <Table columns={columns} dataSource={data1} />
        </div>
    )
}

export default ProductList