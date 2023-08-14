
import NavabarComonent from "./components/NavabarComponent";
import ContentComponent from "./components/ContentComponent";
import "./SocialCard.css"

function App() {
  return (
    <div className='Container'>
      <div className='Title'>LIST SOCIAL CARD</div>

      <NavabarComonent></NavabarComonent>

      <ContentComponent></ContentComponent>
    </div>
  );
}

export default App;
