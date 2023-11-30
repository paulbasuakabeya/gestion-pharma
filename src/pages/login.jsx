
import { useNavigate } from "react-router-dom";

function Login(){
    const navigate = useNavigate()
    const handleclick = () => {
        navigate('/home');
    }
    return (
        <>
        <h1>Login Page</h1>
        <button onClick={handleclick}>
            connexion
        </button>
        </>
    )
}
export default Login;