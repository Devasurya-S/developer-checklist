
export default function NavButton(props) {
    const {actionToDo, actionType} = props

    if(actionType === "previous") {
        return (
            <button className="btn nav-btn border-0" onClick={actionToDo}>
                <i className="fs-2 fa-solid fa-circle-chevron-right prev-btn"></i>
            </button>
        )
    } else if(actionType === "next") {
        return (
            <button className="btn nav-btn border-0" onClick={actionToDo}>
                <i className="fs-2 fa-solid fa-circle-chevron-right"></i>
            </button>
        )
    }

  }
  