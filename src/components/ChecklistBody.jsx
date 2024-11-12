import AccordionUsage from "./AccordionUsage";
import Category from "./Category";
import { categoriesData as initialCategoriesData } from "../utils/data";
import { useState } from "react";

export default function ChecklistBody() {
    const [categoriesData, setCategoriesData] = useState(initialCategoriesData);
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

    const handleStatusChange = (itemIndex) => {
        // Update the status of the item in the state
        setCategoriesData(prevData => {
            const newData = prevData.map((category, catIndex) => {
                if (catIndex === currentCategoryIndex) {
                    return {
                        ...category,
                        items: category.items.map((item, itemIdx) => 
                            itemIdx === itemIndex ? { ...item, status: !item.status } : item
                        )
                    };
                }
                return category;
            });
            return newData;
        });
    };

    const currentCategory = categoriesData[currentCategoryIndex];

    return (
        <div className="d-flex flex-column width-control bg-white p-4 rounded-5">
            <Category
                categoryName={currentCategory.categoryName}
                onNext={handleNext}
                onBack={handleBack}
            />
            <AccordionUsage 
                items={currentCategory.items} 
                onStatusChange={handleStatusChange} 
            />
        </div>
    );
}
