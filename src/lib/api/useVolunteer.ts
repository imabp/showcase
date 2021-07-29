import { useState, useEffect } from "react";
import Axios from "axios";
import URI from './uri.json'
const useVolunteer = () => {
    const [Volunteer, setVolunteer] = useState([]);


    const getVolunteer = async () => {
        let res = await Axios({
            method: "get",
            url: URI.VOLUNTEER
        });

        let { data } = res;


        setVolunteer(data.data);
    };
    useEffect(() => {
        getVolunteer();
    }, []);
    return Volunteer;
};
export { useVolunteer };