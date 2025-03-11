import Head from "next/head";
import React from "react";
import {useState} from "react";
import  Letsgo from "./api/index.js";
import Link from "next/link";
import {useRouter} from "next/router";



export default function Home(){
    return(
        <div>
            <h1 style={{textAlign:'center'}}>首頁</h1>
        <Letsgo/>
        <Link href="/timedown"><h1 style={{textAlign:'center', background:'red' ,color:'white'}}>Timedown倒數計時</h1></Link>
        <div  style={{textAlign:'center'}}>
        <Link href="/page/test" style={{display:'inline-block', marginRight:'100px'}}/*利用inline-block使連結不會占據整個水平面 */><h1>跟你hello</h1></Link>
        <Link href="/page/byebye" style={{display:'inline-block'}}><h1>自訂HOOK練習</h1></Link>    
        </div>
        <Link href="/datatest" style={{display:'inline-block'}}><h1>資料庫調出練習</h1></Link>    
        <Link href="/nine" ><h1 style={{textAlign:'center', background:'blue' ,color:'white'}}>九宮格小遊戲</h1></Link>    
        </div>
    );
}