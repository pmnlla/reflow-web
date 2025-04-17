import Link from "next/link";
export default function Footer() {
  return (
    <footer className="py-4">
      <div className="container mx-auto px-4">
        <p className="text-center text-gray-600">
          YSWS by <Link href="https://github.com/pmnlla" target="_blank" className="text-accent">Itai</Link>
          <span className="pl-1">
            (<Link href={"https://hackclub.slack.com/team/U078HNSV750"} target="_blank" className="text-accent">slack</Link>)
          </span>
          , Website by <Link href="https://github.com/Badbird5907" target="_blank" className="text-accent">Evan Yu</Link>
          <span className="pl-1">
            (<Link href={"https://hackclub.slack.com/team/U0854U71H8E"} target="_blank" className="text-accent">slack</Link>)
          </span>
        </p>
        <p className="text-center text-gray-600">
          Follow us on Github for a cookie!
        </p>
      </div>
    </footer>
  );
}

