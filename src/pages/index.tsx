import { Geist, Geist_Mono } from "next/font/google"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export default function Home() {
  return (
    <div
      className={`${geistSans.className} ${geistMono.className} grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]`}
    >
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <ol className="list-inside list-decimal text-sm/6 text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2 tracking-[-.01em] underline cursor-pointer">
            <a href="/honeymoon">Honeymoon Fund</a>
          </li>
          <li className="mb-2 tracking-[-.01em] underline cursor-pointer">
            <a href="/send">Send a Gift</a>
          </li>
          <li className="tracking-[-.01em]">
            <a href="/bring">Bring a Small Gift or Check</a>
          </li>
        </ol>
      </main>
    </div>
  )
}
