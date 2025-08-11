import UserContext from "./context/UserContext";
import UserContextProvider from "./context/UserContextProvider";

export default function Test (){
    return (
        <UserContextProvider>
            <h2>useContext</h2>
            
        </UserContextProvider>
    )
}