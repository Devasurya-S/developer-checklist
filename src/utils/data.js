export const categoriesData = [
    {
        categoryName: "Color",
        items: [
            { 
                name: "Consistent Use of Figma Color Styles", 
                descriptions: [
                    { text: "Apply Figma color styles for the fill, stroke, and borders of design elements." },
                    { text: "Avoid usign one-off color values to maintain a consistent and organized color palatte." }
                ],
                status: false
            },
            { 
                name: "Consolidate Similar Color Styles", 
                descriptions: [
                    { text: "Identify color styles with slight variations and merge them into a single, unified style." },
                    { text: "Streamline the color palatte for clarity and simplicity." }
                ],
                status: false
            },
            { 
                name: "Ensure WCAG AA Contrast Compliance for Text Colors", 
                descriptions: [
                    { text: "Use a contrast checking tool to verify that text in the design meets minimum WCAG AA contrast requirements with its background color." },
                    { text: "Adjust colors as needed to enhance readability and accessibility." }
                ],
                status: false
            }
        ]
    },
    {
        categoryName: "Components",
        items: [
            { 
                name: "Utilize Components for Repetition", 
                descriptions: [
                    { text: "Convert recurring combinations of elements into Figma components." },
                    { text: "Examples inlude type lockups, links, buttons, cards, and previews." },
                    { text: "Consider turning repeated blocks of content on multiple pages into components." }
                ],
                status: false
            },
            { 
                name: "Organize Components Effectively", 
                descriptions: [
                    { text: "Move main components (original source components) to a dedicated Components frame." },
                    { text: "Organize components within this frame by type for clarity and efficient management." }
                ],
                status: false
            }
        ]
    }
  ];
  