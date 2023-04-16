import axios from "axios";
import { base_url } from "../../utils/base_url";

const getBlogCatList = async () => {
    const response = await axios.get(`${base_url}blog/`);
    return response.data;
};

const blogCatListService = {
    getBlogCatList,
};

export default blogCatListService;
