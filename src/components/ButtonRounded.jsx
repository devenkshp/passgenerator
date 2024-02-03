export default function ButtonRounded({ label, handlePress, bgColor }) {
    return (
        <button className={`border-0 rounded-full w-10 h-10 text-white ${bgColor}`} onClick={handlePress}>{label}</button>
    )
}