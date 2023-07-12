import { toast } from "react-toastify";

export default function setupAxios(axios, store) {
    axios.interceptors.request.use(
        config => {
            const {
                auth: { user }
            } = store.getState();

            if (user !== null) {
                config.headers.Authorization = user?.token;
                config.headers.platform = "web";
            } else {
                config.headers.platform = "web";
            }

            return config;
        },
        err => Promise.reject(err)
    );
    axios.interceptors.response.use(
        response => {
            if (response.data.status === 401) {
                localStorage.removeItem("nbTheme");      
                window.location.pathname = "/"          
            }
            return response.data
        },
        err => {            
            if (err.response.data.status === 401) {
                toast.error(err.response.data.message)
                setTimeout(() => {
                    localStorage.removeItem("nbTheme");           
                    window.location.pathname = "/"
                }, 3000);
            }
            return err.response.data
        }
    );
}
