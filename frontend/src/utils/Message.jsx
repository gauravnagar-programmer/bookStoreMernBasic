import {toast} from "react-toastify"

export const errorMessage = ( msg ) => {
       toast.error(msg,{
        position : "top-right",
        autoClose : 2000,
        pauseOnHover : true,
    })
}

export const successMessage = ( msg ) => {
       toast.success(msg,{
        position : "top-right",
        autoClose : 2000,
        pauseOnHover : true,
    })
}

  