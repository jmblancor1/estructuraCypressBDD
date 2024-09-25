import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import CrearEmpleadoPage from '../../Pages/accionesCreateEmpleadoPage/CrearEmpleadoPage';

Given ('El usuario se autentica con usuario {string} y password {string}',(usuario,password)=>{
    CrearEmpleadoPage.visitarUrl()
    CrearEmpleadoPage.login(usuario,password)

})
When ('El usuario va a la opcion pip y da click en add para agregar empleado',()=>{
    CrearEmpleadoPage.accederPip()
    CrearEmpleadoPage.irBotonAdd()
})
And ('El usuario llena los campos de agregar usuario',()=>{
    //username
    CrearEmpleadoPage.diligenciarCrearEmpleado()
    CrearEmpleadoPage.clickBotonSave()
})
Then ('El usuario realiza una búsqueda del nuevo empleado',()=>{
    CrearEmpleadoPage.accederPip()
    CrearEmpleadoPage.consultarEmpleadoId()

})

