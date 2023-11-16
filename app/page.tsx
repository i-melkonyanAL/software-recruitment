import Collaborators from "./components/navigation/home/Collaborators";
import Heading from "./components/navigation/home/Heading";
import LatestJobs from "./components/navigation/home/LatestJobs";

export default function Home() {
  return (
    <main >
      <Heading />
      <Collaborators />
      <LatestJobs />
    </main>
  )
}
