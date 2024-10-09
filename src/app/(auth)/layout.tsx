export default function AuthLayout({ children }: { children: React.ReactNode}) {
  return (
    <section className="flex justify-center items-center h-svh">
      { children }
    </section>
  )
}
