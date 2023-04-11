import React from 'react'
import CustomInput from '../components/CustomInput'

const AddBrand = () => {
    return (
        <div>
            <h3 className="mb-4 title">Add New Brand</h3>
            <div>
                <form action="">
                    <CustomInput type="text" label="Enter Brand Name" />
                    <button type="submit" className="submitBtn btn mt-4">Submit</button>
                </form>
            </div >
        </div>
    )
}

export default AddBrand