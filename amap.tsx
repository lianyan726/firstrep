import upImg from "assets/images/start.png";
import { Modal,Row,Col,message} from "antd";
import closeImg from "assets/images/close.png";
import { useEffect, useState } from "react";
export const Amap=({isModalVisible,setIsModalVisible}:any)=>{
    const AMap=(window as any).AMap;
    let maplet:any;
    useEffect(()=>{
        init();
    },[])
    let init=()=>{
        maplet=new AMap.Map("myMap");
}
const [show,setShow]=useState(true);
let close=()=>{
    setShow(false);

}
return (
    <Modal
    width="600px"
    visible={show}
    onCancel={close}
    >

            <div id="myMap" style={{position:"relative",width:550,height:370}}></div>
            </Modal>


    )
}