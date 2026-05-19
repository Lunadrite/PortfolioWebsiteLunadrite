export default function Connections() {
  return (
    <div className="mt-5 w-full rounded-md backdrop-blur-sm md:p-4">
      <ul className="flex justify-center gap-5 flex-wrap">
        <li>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.instagram.com/lunalovezyouxx/"
            className="navElement bg-linear-65 from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] text-white"
          >
            Instagram
          </a>
        </li>

        <li>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://soundcloud.com/grogfrog"
            className="navElement bg-linear-65 from-[#ff8800] to-[#ff3300]"
          >
            Soundcloud
          </a>
        </li>

        <li>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/luna-tattersall-87a908369/"
            className="navElement bg-linear-65 from-[#0A66C2] to-white text-white"
          >
            LinkedIn
          </a>
        </li>
      </ul>
    </div>
  )
}