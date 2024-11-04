import NavButton from "./NavButton";

export default function Category() {
  return (
    <div>
        <div className="d-flex justify-content-between">
            <NavButton/>
            <h4>Category</h4>
            <NavButton/>
        </div>
        <hr />
    </div>
  )
}
