import { MainTitle } from "./Section.styled"
export const Section = ({ title, children }) => {
    return (
        <div className="containerFeedback">
            <MainTitle>{title}</MainTitle>
            {children}
        </div>
    )
}