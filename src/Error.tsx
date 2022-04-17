import {useError} from './Context/ErrorContext';

function Error() {

  const {setErrorMsg,getError} = useError();

  let t: any;

  t = getError();
  
  return (
    <div className="error">
     {t}
    </div>
  );
}

export default Error;
