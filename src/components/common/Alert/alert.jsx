import React from "react";

const Alert = ({ color, msg, icon, setAlert, alert }) => {
    return (
        <div className={`alert ${color}  ${alert === false ? "hide" : "show"}`}>
            <div className="icon">
                {icon === "check" && <i className="bi bi-check2-circle"></i>}
                {icon === "clock" && <i className="bi bi-clock"></i>}
                {icon === "error" && <i className="bi bi-bug" ></i >}
            </div >
            <div className="message">{msg}</div>
            {
                msg && (
                    <div className="close" onClick={() => setAlert(false)}>
                        {/* <i   className="bi bi-x-circle-fill"></i> */}
                        <i width="100%" className="bi bi-x-octagon"></i>
                    </div>
                )
            }
        </div >
    );
};
export default Alert;
