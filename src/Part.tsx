import "./App.css";

function Part(props: any) {

  return (
    <div className="Part">
      {props.name} (Amount: {props.amount}) <b>{props.file}</b> <i className="fa fa-edit icons"></i>

    </div>
  );
}

export default Part;
