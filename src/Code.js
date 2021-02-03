import React, {useRef,useState} from "react";
import QRCode from "react-qr-code";

export default function Code(){
    const [val,setValue] = useState("");
    const proValue = (e) => setValue(e.target.value);
return(
   
    <div className="container" style={{marginTop:"20px",border:"2px solid black"}}>
         
         <h1 className="text-danger">QR Code Generation</h1>
        <div className="mb-3">
         <input type="text" className="form-control" value={val} onChange={proValue} style={{width:"300px"}} placeholder="Values"/>
        </div>
         <div className="container mb-3">
         <QRCode
          value={val}
          size={200}
          level={"H"}
          includeMargin={true}
          />
        </div>
    </div>
);

}
