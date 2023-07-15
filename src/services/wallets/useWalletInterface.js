import { useContext } from "react"
import { HashconnectContext } from "../../contexts/HashconnectContext";
import { hashConnectWallet } from "./hashconnect/hashconnectClient";


// Example: const { accountId, walletInterface } = useWalletInterface();
// Returns: { accountId: string | null, walletInterface: WalletInterface | null }
export const useWalletInterface = () => {
  const hashconnectCtx = useContext(HashconnectContext);

  if (hashconnectCtx.accountId) {
    return {
      accountId: hashconnectCtx.accountId,
      walletInterface: hashConnectWallet
    };
  } else {
    return {
      accountId: null,
      walletInterface: null
    };
  }
}
