import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [usuario, setUsuario] = useState(null);

  useEffect(() => {
    const user = localStorage.getItem("usuarioLogado");
    if (user) setUsuario(user);
  }, []);

  function login(email) {
    localStorage.setItem("usuarioLogado", email);
    setUsuario(email);
  }

  function logout() {
    localStorage.removeItem("usuarioLogado");
    setUsuario(null);
  }

  return (
    <AuthContext.Provider value={{ usuario, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
