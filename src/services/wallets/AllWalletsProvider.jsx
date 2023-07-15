import { HashconnectContextProvider } from "../../contexts/HashconnectContext"
import { HashConnectClient } from "./hashconnect/hashconnectClient"

export const AllWalletsProvider = (props) => {
  return (
    
        <HashconnectContextProvider>
          <HashConnectClient />
          
          
          {props.children}
        </HashconnectContextProvider>
      
  )
}
