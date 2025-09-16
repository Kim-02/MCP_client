import React, {useState} from "react";

function HelloMcp(){
    const [message, setMessage] = useState("");

    const sendMessage = async (method) => {
        const body = {
            requestId: `req-${new Date().toISOString()}`,
            path: method === "HELLO" ? "/hello" : "/hello_world",
            method: method,
            payload: {}
        };

        try {
            /* 주소 수정해야함 */
            const res = await fetch('http://localhost:8080', {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body)
            });

            const json = await res.json();

            if (!json.ok){
                setMessage(`오류 [${json.error.code}]: ${json.error.message}`);
            } else {
                setMessage(`${json.data.message}`);
            }
        } catch (err){
            setMessage("네트워크 오류: " + err.message);
        }
    };

    return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            <button onClick={() => sendMessage("HELLO")}>Hello 요청</button>
            <button onClick={() => sendMessage("HELLO_WORLD")} style={{ marginLeft: "10px" }}>
                Hello World 요청 (MCP)
            </button>
            <h2>응답: {message}</h2>
        </div>
    )
};

export default HelloMcp;