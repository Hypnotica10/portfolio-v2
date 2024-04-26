import { useEffect } from "react"

export default function useClickOutSide(ref, callback) {

    const handleClick = (e) => {
        if ((ref.current && !ref.current.contains(e.target)) || e.target.tagName.toLowerCase() === 'a') {
            callback();
        }
    }

    useEffect(() => {
        document.addEventListener('click', handleClick);

        return () => {
            document.removeEventListener('click', handleClick);
        }
    })
}