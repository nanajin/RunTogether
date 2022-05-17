import React from "react";
import FadeLoader from "react-spinners/FadeLoader";

function Loading(){
    return(
        <div className="loading">
            {/* <div
                style={{
                position: "fixed",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                }}
            > */}
                {/* <FadeLoader
                color="2CAD1C"
                // height={15}
                // width={5}
                // radius={2}
                // margin={2}
                /> */}
                <p>로딩중</p>
            </div>
        // </div>
    )
}
export default Loading;