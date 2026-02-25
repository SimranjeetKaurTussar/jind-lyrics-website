export default function Footer() {
  return (
    <footer className="border-t border-black/10">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 px-4 py-6 text-sm text-zinc-600 sm:px-6 lg:px-8 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} JIND. All rights reserved.</p>
        <p>Punjabi Lyricist · Music Portfolio</p>
      </div>
    </footer>
  );
}
