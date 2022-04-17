import {useError} from './Context/ErrorContext';

function Error() {

  const {getError} = useError();

  let t: any;

  t = getError();
  
  return (
    <div className="error">
     {t}
    </div>
  );
}

export default Error;
