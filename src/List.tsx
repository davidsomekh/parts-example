import Part from "./Part";
import {useParts} from './Context/Parts';


import "./App.css";

function List(props:any) {

  const {getParts} = useParts();

  let t: any = [];

  t = getParts();

  
  return (
    <div className="list">
         <div className="head">Parts</div>

      {t.map((prt:any) => {
   
        return (
          <Part key={prt.id} amount={prt.amount} name={prt.name} file={prt.file_name}/>
        );
      })}
    </div>
  );
}

export default List;
