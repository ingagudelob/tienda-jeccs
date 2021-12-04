import AuthProvider from "./auth/AuthProvider";
import AppRouter from "./routers/AppRouter";


// AuthProivder, Es un componente que retorna a sus hijos el valor de un contexto
// es decir, un valor global par que los puedan consumir

function App() {
  return (
    <div className="App">
      
      <AuthProvider>
          <AppRouter />
      </AuthProvider>
    </div>
  );
}

export default App;
