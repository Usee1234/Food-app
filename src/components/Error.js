
import {useRouteError} from "react-router-dom"
const Error = () => {
    const err=useRouteError();
    const {status,statusText,data
    }=err
  return (
    <>
    <h1>
        OPPS!!! An Error occured
    </h1>
    <h2>
😖😖😖😔{status+":"+statusText+":"+data}
    😖😖😖😔
    😖😔🚀🚀
    </h2>
    </>
  )
}

export default Error
