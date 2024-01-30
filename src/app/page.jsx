
import Menu from "@/Components/Menu";
import NavBar from "../Components/NavBar";
import Bookmarks from "@/Components/Bookmarks";


export default function Home() {
  return (
<>
<div className="h-screen w-screen ">
<NavBar/>
<Menu/>
<hr />
<Bookmarks/>
</div>
</>
  )
}
