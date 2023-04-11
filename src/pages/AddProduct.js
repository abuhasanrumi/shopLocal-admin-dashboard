import React from 'react'
import CustomInput from '../components/CustomInput'

const AddProduct = () => {
    return (
        <div>
            <h3 className="mb-4">Add New Product</h3>
            <div>
                <form action="">
                    <CustomInput type="text" label="Enter Color Name" />
                    <button type="submit" className="submitBtn btn mt-4">Submit</button>
                </form>
            </div >
        </div>
    )
}

export default AddProduct