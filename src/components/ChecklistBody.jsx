import AccordionUsage from "./AccordionUsage";
import Category from "./Category";
import { categoriesData } from "../utils/data";
import { useState } from "react";

export default function ChecklistBody() {
    const [currentCategoryIndex, setCurrentCategoryIndex] = useState(0);

    const handleNext = () => {
        setCurrentCategoryIndex((prevIndex) =>
        prevIndex === categoriesData.length - 1 ? 0 : prevIndex + 1
        );
    };

    const handleBack = () => {
        setCurrentCategoryIndex((prevIndex) =>
        prevIndex === 0 ? categoriesData.length - 1 : prevIndex - 1
        );
    };

    const currentCategory = categoriesData[currentCategoryIndex];

    return (
        <div className="d-flex flex-column width-control bg-white p-4 rounded-5">
            <Category
            categoryName={currentCategory.categoryName}
            onNext={handleNext}
            onBack={handleBack}
            />
            <AccordionUsage  items={currentCategory.items}/>
        </div>
    )
}

