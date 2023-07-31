const URLMenu = import.meta.env.VITE_API_MENU;

export const consultaListaMenu = async () => {
    try {
      const respuesta = await fetch(`${URLMenu}/menu`);
      const listaMenu = await respuesta.json();
      return listaMenu;
    } catch (error) {
      console.log(error);
    }
  };