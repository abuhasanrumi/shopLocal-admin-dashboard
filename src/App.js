import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import ResetPassword from './pages/ResetPassword';
import ForgotPassword from './pages/ForgotPassword';
import MainLayout from './components/MainLayout';
import Enquiries from './pages/Enquiries';
import Bloglist from './pages/Bloglist';
import BlogCatList from './pages/BlogCatList';
import Orders from './pages/Orders';
import Customers from './pages/Customers';
import ColorList from './pages/ColorList';
import ProdCatList from './pages/ProdCatList';
import BrandList from './pages/BrandList';
import ProductList from './pages/ProductList';
import { AddBlog } from './pages/AddBlog';
import AddBlogCat from './pages/AddBlogCat';
import AddColor from './pages/AddColor';
import AddProdCat from './pages/AddProdCat';
import AddBrand from './pages/AddBrand';
import AddProduct from './pages/AddProduct';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/admin" element={<MainLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="enquiries" element={<Enquiries />} />

          <Route path="addBlog" element={<AddBlog />} />
          <Route path="blogList" element={<Bloglist />} />

          <Route path="addBlogCategory" element={<AddBlogCat />} />
          <Route path="blogCategoryList" element={<BlogCatList />} />

          <Route path="orders" element={<Orders />} />

          <Route path="customers" element={<Customers />} />

          <Route path="addColor" element={<AddColor />} />
          <Route path="colorList" element={<ColorList />} />

          <Route path="addProdCategory" element={<AddProdCat />} />
          <Route path="categoryList" element={<ProdCatList />} />

          <Route path="addBrand" element={<AddBrand />} />
          <Route path="brandList" element={<BrandList />} />

          <Route path="addProduct" element={<AddProduct />} />
          <Route path="productList" element={<ProductList />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
