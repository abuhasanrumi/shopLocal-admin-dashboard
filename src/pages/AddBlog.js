import React, { useState } from 'react'
import CustomInput from '../components/CustomInput';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { InboxOutlined } from '@ant-design/icons';
import { message, Upload } from 'antd';
const { Dragger } = Upload;
const props = {
    name: 'file',
    multiple: true,
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    onChange(info) {
        const { status } = info.file;
        if (status !== 'uploading') {
            console.log(info.file, info.fileList);
        }
        if (status === 'done') {
            message.success(`${info.file.name} file uploaded successfully.`);
        } else if (status === 'error') {
            message.error(`${info.file.name} file upload failed.`);
        }
    },
    onDrop(e) {
        console.log('Dropped files', e.dataTransfer.files);
    },
};

export const AddBlog = () => {
    const [desc, setDesc] = useState();
    return (

        <div>
            <h3 className="mb-4 title">Add New Blog</h3>
            <div>
                <form action="">
                    <div className="mb-3">
                        <Dragger {...props}>
                            <p className="ant-upload-drag-icon">
                                <InboxOutlined />
                            </p>
                            <p className="ant-upload-text">Click or drag file to this area to upload</p>
                            <p className="ant-upload-hint">
                                Support for a single or bulk upload. Strictly prohibited from uploading company data or other
                                banned files.
                            </p>
                        </Dragger>
                    </div>

                    <CustomInput type="text" label="Enter Blog Title" />
                    <select className="form-control mb-3 py-3" id="new-blog-select" aria-label="Select Blog Category">
                        <option value="">Select Blog Category</option>
                    </select>
                    <ReactQuill
                        theme="snow"
                        value={desc}
                        bounds="#scrolling-container"
                        scrollingContainer=".parent-scroll"
                        onChange={(e) => {
                            setDesc(e)
                        }}
                    />
                    <button type="submit" className="submitBtn btn mt-4">Submit</button>
                </form>
            </div >
        </div >
    )
}
