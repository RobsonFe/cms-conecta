import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: 'CMS - Conecta',
  description:
    'O projeto CMS (Content Management System / Sistema de Gerenciamento de Conteúdo) é uma plataforma de Gerenciamento de Conteúdo que visa conectar desenvolvedores e empresas de forma eficiente, onde cada desenvolvedor pode publicar o seu projeto e empresas avaliarem aquele projeto e contactar o desenvolvedor para prestar um serviço.',
  authors: {
    name: 'Conecta',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
