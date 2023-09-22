import React , {Loader, useState, useEffect} from "react";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";

    Loader = () => {
        const [loading, setLoading] = useState(false);

        useEffect(() => {
            setLoading(true)
            setTimeout(() => {
                setLoading(false)
          }, 8000)
        }, [])

        let [color] = useState("#FFFFFF");

        return  (
            <div className="loader">
                {loading ? (
                    <ClimbingBoxLoader
                    color={color}
                    loading={loading}
                    size={20}
                    />
                ) : ""}
            </div>
        );
      }      
    
export default Loader