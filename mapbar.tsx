import "assets/style/common.less";
import { useEffect} from "react";
export const Amap=()=>{
    const Maplet=(window as any).Maplet;
    let maplet:any;
    useEffect(()=>{
        init();
    },[])
    let init=()=>{
        maplet=new Maplet("myMap");
        maplet.showScale(false);
        maplet.setZoomLevelRange(3, 18);
        maplet.showOverview(false);
    maplet.centerAndZoom(new (window as any).MPoint(116.404, 39.915), 8);
}

return (


            <div id="myMap" style={{position:"relative",width:550,height:370}}></div>


    )
}