import { Notify } from "./Notification.styled"

export const Notifiction = ({ title }) => {
    return (
        <Notify className="notification">{title}</Notify>
    )
}