import { Button, Dialog, Stack } from "@mui/material";
import { hashConnect } from "../services/wallets/hashconnect/hashconnectClient";
import HashPackLogo from "../assets/hashpack-logo.svg";



export const WalletSelectionDialog = ({open, onClose}) => {
  
  return (
    <Dialog onClose={onClose} open={open}>
      <Stack p={2} gap={1}>
        <Button
          variant="contained"
          onClick={() => {
            hashConnect.connectToLocalWallet();
          }}
        >
          <img
            src={HashPackLogo}
            alt='hashpack logo'
            className='walletLogoImage'
            style={{
              marginLeft: '-6px'
            }}
          />
          Hedera Wallet
        </Button>
       
      </Stack>
    </Dialog>
  );
}
