import NavButton from "./NavButton";

export default function Category({ categoryName, onBack, onNext }) {
  return (
    <div>
        <div className="d-flex justify-content-between align-items-center">
            <NavButton actionToDo={onBack} actionType={'previous'}/>
            <h4 className="fs-3">{categoryName}</h4>
            <NavButton actionToDo={onNext} actionType={'next'}/>
        </div>
        <hr />
    </div>
  )
}
