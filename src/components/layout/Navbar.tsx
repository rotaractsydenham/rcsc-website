export default function Navbar() {
  return (
    <nav className="w-full border-b bg-white dark:bg-slate-950">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <h1 className="text-xl font-bold">
          RCSC
        </h1>

        <div className="hidden gap-8 md:flex">
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/leadership">Leadership</a>
          <a href="/events">Events</a>
          <a href="/gallery">Gallery</a>
          <a href="/contact">Contact</a>
        </div>
      </div>
    </nav>
  )
}