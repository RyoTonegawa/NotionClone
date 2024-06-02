import { useState,useEffect } from "react";
// カスタムフック
export const useScrollTop =(threshold = 10):boolean=>{
    // useStateの第一要素は現在の状態の値、第二要素はその状態を更新するための関数
    const[scrolled,setScrolled]=useState(false);
    useEffect(()=>{
        const handleScroll=()=>{
            if(window.scrollY > threshold){
                // useStateを利用して状態を変更する
                setScrolled(true);
            }else{
                setScrolled(false);
            }
        };
        // addEventListenerメソッドは、指定したイベントが対象の要素に発生したときに実行される関数（イベントハンドラー）を登録する。
        // 他にも"click","mouseover"、"keydown"等がある。
        window.addEventListener("scroll",handleScroll);
        return()=>window.removeEventListener("scroll",handleScroll);
    },
    // 依存配列：useEffectはこの配列の値が変更されたときに実行される。
    [threshold]
    )
    // setScrolledによって設定されたbool値を返却する
    return scrolled;
}