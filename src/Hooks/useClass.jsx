import { useEffect, useState } from "react";

const useClass = () => {
    const [data, setClass] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch('http://localhost:2000/class')
            .then(res => res.json())
            .then(data => {
                setClass(data);
                setLoading(false);
            });
    }, [])
    return [data,loading]
}

export default useClass;