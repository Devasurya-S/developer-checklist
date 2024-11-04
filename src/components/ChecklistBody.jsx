import AccordionUsage from "./AccordionUsage";
import Category from "./Category";

export default function ChecklistBody() {
    return (
        <div className="d-flex flex-column w-50 bg-white p-4 rounded-5">
            <Category/>
            <AccordionUsage/>
        </div>
    )
}