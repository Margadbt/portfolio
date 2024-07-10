import PosterGrid from "@/app/components/PosterGrid";
import WorkHeader from "@/app/components/WorkHeader";

export default function Posters() {
    return (
      <main className="mb-10">
        <WorkHeader title={"Graphic Design Poster"} description={"blabla"} />
        <PosterGrid />
      </main>
    );
  }