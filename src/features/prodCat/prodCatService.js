import axios from "axios";
import { base_url } from "../../utils/base_url";

const getProdCats = async () => {
    const response = await axios.get(`${base_url}product-category/`);
    return response.data;
};

const prodCatService = {
    getProdCats,
};

export default prodCatService;
