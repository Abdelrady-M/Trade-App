import Link from "next/link"

export type FooterProps = {
  // props go here
}
export default function Footer(props: FooterProps) {
  return (
    <>
      <div className="bottom-0 flex h-10 w-full justify-center p-2 text-center">
        <footer className="flex items-center justify-center">
          <h4>
            © {new Date().getFullYear()} <span>Trade App</span> All rights
            reserved.
          </h4>
          <h5>
            <Link
              href="https://github.com/Abdelrady-M"
              target="_blank"
              rel="noreferrer"
            >
              Terms. Privacy Policy. Legal Advice
            </Link>
          </h5>
        </footer>
      </div>
    </>
  )
}
