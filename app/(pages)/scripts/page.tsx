import ScriptsClient from "@/app/components/pages/ScriptsClient"
import Header from "@/app/components/Header";

const Scripts = () => {
  return (
    <>
      <Header />
      <div className="px-8">
        <ScriptsClient />
      </div>
    </>
  )
}
export default Scripts