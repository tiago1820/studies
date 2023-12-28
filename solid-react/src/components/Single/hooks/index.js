import { useEffect, useState } from "react";
import axios from "axios";

export const useSingle = () => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const handleFetch = async () => {
        setIsLoading(true);
        const response = await axios.get("https://randomuser.me/api/?results=20");

        setIsLoading(false);
        setData(response.data.results);
    }

    useEffect(() => {
        handleFetch();
    }, []);

    return {
        data, isLoading
    }

}