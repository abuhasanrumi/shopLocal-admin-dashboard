import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
} from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';
import React, { useState } from 'react';
import { RiDashboardFill, RiArchiveDrawerFill, RiFileAddFill, RiCustomerService2Fill } from "react-icons/ri"
import { SiBrandfolder } from "react-icons/si"
import { MdOutlineFormatColorFill, MdCategory, MdNotifications } from "react-icons/md"
import { FaList, FaPen, FaMicroblog } from "react-icons/fa"
import { BsPeopleFill, BsFillCartCheckFill } from "react-icons/bs"
import { Outlet, useNavigate } from 'react-router-dom';
const { Header, Sider, Content } = Layout;


const MainLayout = () => {
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    const navigate = useNavigate()
    return (
        <Layout>
            <Sider trigger={null} collapsible collapsed={collapsed}>
                <div className="logo">
                    <h2 className="text-white fs-5 py-3 mb-0">
                        <span className="sm-logo text-center">SL</span>
                        <span className="lg-logo">ShopLocal</span>
                    </h2>
                </div>
                <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={['']}
                    onClick={({ key }) => {
                        if (key == "signout") {

                        } else {
                            navigate(key)
                        }
                    }}
                    items={[
                        {
                            key: '',
                            icon: <RiDashboardFill className='fs-5' />,
                            label: 'Dashboard',
                        },
                        {
                            key: 'customers',
                            icon: <BsPeopleFill className='fs-5' />,
                            label: 'Customers',
                        },
                        {
                            key: 'catalog',
                            icon: <RiArchiveDrawerFill className='fs-5' />,
                            label: 'Catalog',
                            children: [
                                {
                                    key: 'addProduct',
                                    icon: <RiFileAddFill className='fs-5' />,
                                    label: 'Add Product'
                                },
                                {
                                    key: 'productList',
                                    icon: <FaList className='fs-5' />,
                                    label: 'Product List'
                                },
                                {
                                    key: 'addBrand',
                                    icon: <SiBrandfolder className='fs-5' />,
                                    label: 'Add Brand'
                                },
                                {
                                    key: 'brandList',
                                    icon: <FaList className='fs-5' />,
                                    label: 'Brand List'
                                },
                                {
                                    key: 'addProdCategory',
                                    icon: <MdCategory className='fs-5' />,
                                    label: 'Add Category'
                                },
                                {
                                    key: 'categoryList',
                                    icon: <FaList className='fs-5' />,
                                    label: 'Category List'
                                },
                                {
                                    key: 'addColor',
                                    icon: <MdOutlineFormatColorFill className='fs-5' />,
                                    label: 'Add Color'
                                },
                                {
                                    key: 'colorList',
                                    icon: <FaList className='fs-5' />,
                                    label: 'Color List'
                                }
                            ]
                        },
                        {
                            key: 'orders',
                            icon: <BsFillCartCheckFill className='fs-5' />,
                            label: 'Orders',
                        },
                        {
                            key: 'blogs',
                            icon: <FaPen className='fs-5' />,
                            label: 'Blogs',
                            children: [
                                {
                                    key: 'addBlog',
                                    icon: <FaMicroblog className='fs-5' />,
                                    label: 'Add Blog',
                                },
                                {
                                    key: 'blogList',
                                    icon: <FaList className='fs-5' />,
                                    label: 'Blog List',
                                },
                                {
                                    key: 'addBlogCategory',
                                    icon: <MdCategory className='fs-5' />,
                                    label: 'Add Blog Category',
                                },
                                {
                                    key: 'blogCategoryList',
                                    icon: <FaList className='fs-5' />,
                                    label: 'Blog Category List',
                                }
                            ]
                        },
                        {
                            key: 'enquiries',
                            icon: <RiCustomerService2Fill className='fs-5' />,
                            label: 'Enquiries',
                        },
                    ]}
                />
            </Sider>
            <Layout className="site-layout">
                <Header
                    className='d-flex justify-content-between align-items-center ps-1 pe-5'
                    style={{
                        padding: 0,
                        background: colorBgContainer,
                    }}
                >
                    {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                        className: 'trigger',
                        onClick: () => setCollapsed(!collapsed),
                    })}
                    <div className='d-flex gap-4 align-items-center'>
                        <div className='noti-bell position-relative'>
                            <MdNotifications className='fs-4' />
                            <span className='badge bg-warning position-absolute'>3</span>
                        </div>
                        <div className='d-flex gap-3 align-items-center'>
                            <img height={40} width={40} className='img-fluid rounded-3' src="https://stroyka-admin.html.themeforest.scompiler.ru/variants/ltr/images/customers/customer-4-64x64.jpg" alt="" />
                            <div className=''>
                                <p className='fw-bold'>Hola, Rumi!</p>
                                <p className='text-muted'>admin@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </Header>
                <Content
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 280,
                        background: colorBgContainer,
                    }}
                >
                    <Outlet />
                </Content>
            </Layout>
        </Layout>
    );
};
export default MainLayout;