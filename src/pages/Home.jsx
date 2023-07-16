import { AccountId } from "@hashgraph/sdk";
import { Button, TextField, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import { useWalletInterface } from "../services/wallets/useWalletInterface";
import SendIcon from '@mui/icons-material/Send';
import { useState } from "react";
import QRCode from 'qrcode.react';

export default function Home() {
  const { walletInterface } = useWalletInterface();
  const [toAccountId, setToAccountId] = useState("");
  const [amount, setAmount] = useState(1);
  const [transactionId, setTransactionId] = useState(null);

  const handleTransfer = async () => {
    const txId = await walletInterface.transferHBAR(AccountId.fromString(toAccountId), amount);
    setTransactionId(txId);
  };

  return (
    <Stack alignItems="center" spacing={4}>
      <Typography variant="h4" color="white">
        Run On The Block!
      </Typography>
      {walletInterface !== null && (
        <>
          <Stack direction="row" gap={2} alignItems="center">
            <Typography>Transfer</Typography>
            <TextField
              type="number"
              label="amount"
              value={amount}
              onChange={(e) => setAmount(parseInt(e.target.value))}
              sx={{
                maxWidth: "100px",
              }}
            />
            <Typography>HBAR to</Typography>
            <TextField
              value={toAccountId}
              onChange={(e) => setToAccountId(e.target.value)}
              label="account id or evm address"
            />
            <Button variant="contained" onClick={handleTransfer}>
              <SendIcon />
            </Button>
          </Stack>
          {transactionId && (
            <>
              <Typography variant="body1">
                Transaction ID:{" "}
                <a
                  href={`https://hashscan.io/testnet/transaction/${transactionId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {transactionId}
                </a>
              </Typography>
              <QRCode value={`https://hashscan.io/testnet/transaction/${transactionId}`} />
            </>
          )}
        </>
      )}
    </Stack>
  );
}
