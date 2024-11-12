export default function ChecklistHead() {
    return (
        <div className="d-flex justify-content-between align-items-center width-control bg-white p-4 rounded-5">
            <div className="">
                <h3 className="fs-3 mb-0">Developer Checklist</h3>
                <p className="fs-6 mb-0 d-none">A product by ideapeel</p>
            </div>
            <div className="d-flex align-items-center">
                <i className="fa-solid fa-clipboard-list display-3"></i>
            </div>
        </div>
    )
}