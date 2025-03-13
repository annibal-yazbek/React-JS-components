//Componente pai

import "./App.css";

// importar o componente filho
import FunctionalComponent from "./components/FunctionalComponent";
import ClassComponent from "./components/ClassComponent";
import PropsExample from "./components/PropsExample";

function App() {
  return (
    <>
      <h1>Hello World React</h1>
      {/* utilizando o componente importado no jsx */}
      <FunctionalComponent />
      <ClassComponent />
      <PropsExample nome="João" idade={34} />
    </>
  );
}

export default App;
