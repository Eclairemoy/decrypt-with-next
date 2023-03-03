import { Inter } from 'next/font/google'
import Component from './Component'
import { EvervaultProvider } from '@evervault/react';

const inter = Inter({ subsets: ['latin'] })

export default function App() {
  return (
    <div className={inter.className} style={{ justifyContent: 'center', alignItems: 'center' }}>
      <EvervaultProvider teamId={process.env.NEXT_PUBLIC_EVERVAULT_TEAM_ID} appId={process.env.NEXT_PUBLIC_EVERVAULT_APP_ID}>
        <Component />
      </EvervaultProvider>
    </div>
  );
}
