import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'API Key Audit Trail — Complete Audit Logs for API Key Usage',
  description: 'Tracks every API key usage across environments with anomaly detection and compliance reporting for DevOps teams and security engineers.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="430cc9db-61fd-40b0-a85c-6055d2a5083e"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
