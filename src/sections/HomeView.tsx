"use client";

import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box'
import { useSession } from "next-auth/react";
import { SessionProvider } from 'next-auth/react'

export default function HomeView() {
  const { data: session} = useSession();
  if (!session) {
    return (
      <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" minHeight="100vh">
        <Typography variant="h3" align="center"><strong>Neprihlásený</strong> používateľ</Typography>
        <Typography variant="h5" align="center">ak chceš pokračovať, prosím <strong>prihlás sa</strong> alebo si <strong>sprav účet</strong> na našej stránke.</Typography>
      </Box>        
      );
  }
      
  return (
    <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" minHeight="100vh">
      <Typography variant="h3" align="center">Vitaj, {session?.user?.name}</Typography>
      <Typography variant="h5" align="center">Váš email je: {session?.user?.email}</Typography>
    </Box>  
  );
    }
