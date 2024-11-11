
export default function NavButton(props) {
    const {actionToDo, actionType} = props

    if(actionType === "previous") {
        return (
            <button className="btn" onClick={actionToDo}>
                <img src="./images/nav-arrow.png" className="prev-btn" alt=""/>
            </button>
        )
    } else if(actionType === "next") {
        return (
            <button className="btn" onClick={actionToDo}>
                <img src="./images/nav-arrow.png" alt=""/>
            </button>
        )
    }

  }
  