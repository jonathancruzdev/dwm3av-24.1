# Organización de Proyecto

1. Creo archivos para los componentes individuales
2. Vinculo el componente en el HTML
3. Registro el componente en el componente Padre
4. Represento el componente en el Padre

# Comunicación entre componentes Hijos al Padre

1. Emito un evento 
    this.$emit('nombreEvento', datos)

2. En el Padre escucho el evento
    v-on:nombreEvento="metodoDelPadre"