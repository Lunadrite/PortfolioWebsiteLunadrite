import { Home } from "./Home"

export default function InfoCard() {
    return(
        <>
    <div className="pt-4">
        <div className="border-3 px-12 py-4 flex rounded-3xl flex-col  border-[#880808] text-center">
            <Home.Heading>=== About Me! ===</Home.Heading>
            <Home.SubHeading>🖤Basic Info:🖤</Home.SubHeading>
            <Home.Text>Heyy my name is Luna! Im 20 I got into Computing from reverse engineering and Low level developmentation of software!</Home.Text>
            <Home.SubHeading>🐦‍⬛Apsirations:🐦‍⬛</Home.SubHeading>
            <Home.Text>My goal is to become a systems programmer specialising in low-level software, graphics, and engine development while continuing to write educational content about computer science!</Home.Text>
            
        </div>
        </div>
        </>
    )
}