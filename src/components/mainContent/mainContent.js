import { useEffect } from "react";
import { useNavigate } from "react-router-dom";


const MainContent = ()=>{

    const history = useNavigate("/");

    const loginCheck = async()=>{
        const data = await fetch("/pdfDownload" , {
            method:"Get",
            headers:{
                "Content-type":"application/json"
            },
            credentials:"include"                 // This statement is tells the server that they have to send cookies as well , important for creating user sessions.
        })

        const res = await data.json();

        if( data.status === 400 ||!res){
            alert("please sign in first");
            history("/login");
        }
        else{
            
        }
    }

    const userLogout = async()=>{
        const data =await fetch("/logout" , {
            method:"Get",
            headers:{
                "Content-type":"Application/json"
            }
        })

        const res = await data.json();
        if(data.status === 200){
            history("/");
        }

    }


    useEffect(()=>{loginCheck()} , [])

    return <div className="pdfContainer">
        <button onClick={userLogout}>logout</button>
    </div>;
}

export default MainContent;