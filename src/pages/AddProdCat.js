import React from 'react'
import CustomInput from '../components/CustomInput'

const AddProdCat = () => {
    return (
        <div>
            <h3 className="mb-4">Add New Product Category</h3>
            <div>
                <form action="">
                    <CustomInput type="text" label="Enter Category" />
                    <button type="submit" className="submitBtn btn mt-4">Submit</button>
                </form>
            </div >
        </div>
    )
}

export default AddProdCat