import React from "react";
import {useEffect, useState} from 'react';

export default function useLetsgo(sum=1){
    const [a ,setA] =useState(sum);

    function cclick(act){ //用act偵測按鈕是加還是減
        const up =document.getElementById('up');//抓取up按鈕
        const down =document.getElementById('down');//抓取down按鈕
        if (act =='up'){
            setA(a + 1);
        }
        else if(act =='down'){
            setA(a - 1);
        }
    }
    return {a,cclick};
    

}