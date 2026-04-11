import { useEffect, type Dispatch, type RefObject, type SetStateAction } from "react";

const useClickOutside = (isActive: boolean, setState: Dispatch<SetStateAction<boolean>>, ref: RefObject<HTMLDivElement | null>) => {
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if(ref.current && !ref.current.contains(event.target as Node)) {
                setState(false);
            }
        }

        if(isActive) {
            document.addEventListener('click', handleClickOutside);
        }

        return () => {
            document.removeEventListener('click', handleClickOutside);
        }
    }, [isActive, ref]);
}

export default useClickOutside;