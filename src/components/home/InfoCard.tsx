import { Home } from "./Home"

export default function InfoCard() {
    return(
        <>
    <div className="pt-4">
        <div className="border-3 px-12 py-4 flex rounded-3xl flex-col  border-[#880808] text-center">
            <Home.Heading>=== About Me! ===</Home.Heading>
            <Home.Text>My goal is to become a systems programmer specialising in low-level software, graphics, and engine development while continuing to write educational content about computer science!</Home.Text>
            
        </div>
        </div>
        </>
    )
}