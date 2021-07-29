import { useState, useEffect } from "react";
import Axios from "axios";
import URI from './uri.json'
const useExperience = () => {
    const [Experience, setExperience] = useState([]);


    const getExperience = async () => {
        let res = await Axios({
            method: "get",
            url: URI.EXPERIENCE
        });

        let { data } = res;


        setExperience(data.data);
    };
    useEffect(() => {
        getExperience();
    }, []);
    return Experience;
};
export { useExperience };