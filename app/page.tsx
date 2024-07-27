import StyledTopNavbar from "./components/topNavbar/topNavbar.styled";
import { Skills } from "./organisms/skills/skills.organisms";

export default function Home() {
  return (
    <>
      <StyledTopNavbar />
      <Skills />
    </>
  );
}
