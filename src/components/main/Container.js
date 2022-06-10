import {useEffect, useState} from "react";

import Balance from "./Balance";
import Cards from "./Cards";
import Panel from "./Panel";
import Plans from "./Plans";
import Waitlist from "./Waitlist";
import {path} from "../../config/path";

export default function Container(){

    const[datacards, setDataCards] = useState([]);

    useEffect(() =>{
        fetch(`${path}/wallet/list/user/628fd2ae44f93925f9811f1c`,{
            method: "GET",
            headers: {
                accept: "application/json",
                "content-type": "application/json",
                "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyOGZkMmFlNDRmOTM5MjVmOTgxMWYxYyIsInVzZXIiOiJlcnJlczMyMSIsImVtYWlsIjoiZXJyZXMzMjFAZ21haWwuY29tIiwiaWF0IjoxNjU0ODc5ODUwLCJleHAiOjE2NTUwNTI2NTB9.eat_GaF77kGs2mRnot-e4_lDQGlufA4Q0PbkPxE00Wc"
            }
        })
        .then((result)=>result.json())
        .then((data)=>{
            console.log(data.payload);
            setDataCards(data.payload);
        }).catch((err)=>console.error(`Error at loading api -> ${err}`));
    },[]);

    const [balance,setBalance] = useState([]);
    const changeData = (content) =>{
        setBalance(content);
    };

    return(
        <div className="container">
            <Cards data={datacards} action={changeData}/>
            <Panel data={balance} />
            <Waitlist/>
            <Plans/>
            <Balance data={balance} />
        </div>
    );
}
