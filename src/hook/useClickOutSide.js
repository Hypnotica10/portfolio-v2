import { useEffect } from "react"

export default function useClickOutSide(ref, callback) {
    const handleClick = (e) => {
        console.log(e.target);
        console.log(ref.current);
        console.log(ref.current.contains(e.target));
        if (ref.current && !ref.current.contains(e.target)) {
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