import { StyleButton } from "./FeedbackOptions.styled"

export const FeedbackOptions = ({ options, leaveFeedback }) => {
    return (
        <div className="buttonContainer">
            {options.map((option) => (
                <StyleButton key={option} type="button" onClick={() => leaveFeedback(option)}>{option}</StyleButton>
            ))}
</div>
)
}