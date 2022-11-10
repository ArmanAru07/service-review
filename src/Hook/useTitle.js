import { useEffect } from "react"

const useTitle=(title)=>{

    useEffect(()=>{

        document.title=`Happy-Soul-${title}`

    },[title])
}

export default useTitle;