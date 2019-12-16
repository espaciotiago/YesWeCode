import React from 'react'
//Objects
import { reactjs, php, lumen, angularjs, reactNative, python, flask, android, kotlin, java, ios, swift, net } from './Tags'
import { mtc, pengraf, pohema, x1pos, x1truck, reporteciu, agroapp, moodsweb, cvm } from './Images'
import * as members from './Member'
//Create the main objects
const projects = []
//------------------------------------------------------------------------------------------
//Mi tienda café
//------------------------------------------------------------------------------------------
projects.push(
    {
        name: "Mi tienda café",
        description: (
            <p style={{textAlign: 'justify'}}>
                Mi tienda café es un marketplace para amantes del café.
                <br />
                Es una plataforma para conectar a las marcas no tan comerciales de café (cafes especiales,
                de origen, varietales, etc)
                y a los caficultores, directamente con los consumidores de café.
                <br />
                Consta de una plataforma para la administración de tiendas (donde las marcas puede administrar
                sus pedidos, productos, inventarios, descuentos, envios y más) y del markeplace, donde los
                usuarios pueden ingresar
                y comprar los productos de las distintas marcas.
            </p>
        ),
        images: mtc,
        link: "https://mitiendacafe.com/",
        github: "",
        tags: [reactjs, php, lumen],
        members: [members.memberTiago, members.memberJaggy],
        landscape: true
    },
)
//------------------------------------------------------------------------------------------
//Pohema
//------------------------------------------------------------------------------------------
projects.push(
    {
        name: "Pohema",
        description: (
            <p style={{textAlign: 'justify'}}>
                La aplicación de Pohema esta destinada a crear una comunidad de médicos y personas afines
                del sector salud, que interactuen en pro de mejorar las posibilidades
                de curación de los niños diagnosticados con cáncer y enfermedades de la sangre en Colombia.
                Pohema (App) ha sido desarrollada para la Fundación Pohema con el fin de servir de herramienta de:
                Agrupación de la comunidad antes mencionada y herramienta de clasificación de pacientes, segun el manual
                AIEPI para llevar régistro de clasificaciones de pacientes con fines de investigación.
            </p>
        ),
        images: pohema,
        link: "https://mitiendacafe.com/",
        github: "",
        tags: [reactNative, python, flask, android, ios],
        members: [members.memberTiago, members.memberJaggy],
        landscape: false
    },
)
//------------------------------------------------------------------------------------------
//Agroapp
//------------------------------------------------------------------------------------------
projects.push(
    {
        name: "Agroapp",
        description: (
            <p style={{textAlign: 'justify'}}>
                Agroapp es una solución móvil para la industria azucarera. Implementada en
                dos de los ingenios más grandes del Valle de cauca (Colombia).
                Agroapp es un sistema de diagnostico y requisición de repuestos
                para maquinaria agrícola en campo.
                <br />
                El sistema esta diseñado para funcionar de forma intuitiva y permite una conexión
                constante con el sistema de SAP en los ingenios mediante RFCs (Remote function calls).
            </p>
        ),
        images: agroapp,
        link: "",
        github: "",
        tags: [android, java, net],
        members: [members.memberTiago],
        landscape: false
    },
)
//------------------------------------------------------------------------------------------
//X1 POS
//------------------------------------------------------------------------------------------
projects.push(
    {
        name: "X1 POS",
        description: (
            <p style={{textAlign: 'justify'}}>
                Trabajo como desarrollador móvil para la empresa GMSTEK.
                <br/>Esta app permite administrar
                los pagos y facturación servicios de abastecimiento de combustible y otros,
                 para aeropuertos privados.
            </p>
        ),
        images: x1pos,
        link: "",
        github: "",
        tags: [android, kotlin, java],
        members: [members.memberTiago,],
        landscape: false
    },
)
//------------------------------------------------------------------------------------------
//X1 Fuel truck
//------------------------------------------------------------------------------------------
projects.push(
    {
        name: "X1 Fuel truck App",
        description: (
            <p style={{textAlign: 'justify'}}>
                Trabajo como desarrollador móvil para la empresa GMSTEK.
                <br/>Esta app permite administrar
                los servicios de abastecimiento de combustible para aeropuertos privados.
            </p>
        ),
        images: x1truck,
        link: "",
        github: "",
        tags: [android, java],
        members: [members.memberTiago,],
        landscape: true
    },
)
//------------------------------------------------------------------------------------------
//Moods
//------------------------------------------------------------------------------------------
projects.push(
    {
        name: "Moods",
        description: (
            <p style={{textAlign: 'justify'}}>
                Moods te permitirá gestionar a tu equipo de colaboradores, conociendo sus emociones.
                También puedes enviar encuestas y comunicados internos que sean importantes para tu organización.
                <br />
                Fue una plataforma creada paara la medición del clima laboral en equipos empresariales.
                Constaba de una aplicación móvil (Nativa para adnroid y ios) enfocada en los colaboradores del equipo y un panel de
                administración web, para el monitoreo por parte de los lideres y personal de recursos humanos de la intitución.
            </p>
        ),
        images: moodsweb,
        link: "",
        github: "",
        tags: [android, java, ios, swift, angularjs, php],
        members: [members.memberTiago, members.memberJaggy],
        landscape: true
    },
)
//------------------------------------------------------------------------------------------
//Pengraf
//------------------------------------------------------------------------------------------
projects.push(
    {
        name: "Pengraf",
        description: (
            <p style={{textAlign: 'justify'}}>
                Pengraf es una plataforma web que permite realizar un manejo
                de eventos y pendientes, de manera
                gráfica, en los procesos de empresas de producción y manufactura.
                <br />
                Pengraf permite crear de manera personalizada los componentes y la distribución de las zonas
                y areas de trabajo, como si fuera un mapa de la empresa, para asignarles pendientes, fechas,
                responsables y hacer seguimiento de los mismos.
            </p>
        ),
        images: pengraf,
        link: "https://mitiendacafe.com/",
        github: "",
        tags: [angularjs, php],
        members: [members.memberTiago, members.memberJaggy],
        landscape: true
    },
)
//------------------------------------------------------------------------------------------
//Reporte ciudadano
//------------------------------------------------------------------------------------------
projects.push(
    {
        name: "Reporte ciudadano",
        description: (
            <p style={{textAlign: 'justify'}}>
                (MVP) Reporte ciudadano, es una aplicación móvil que permite a los usuarios
                generar reportes de incidentes en la ciudad, para ser atendidos por las autoridades responsables
                 (alcaldias, gobernaciones u oficinas de servicios públicos).
                 <br />Fue desarrollado para la oficina
               de servicios públicos de Jamundí, a manera de piloto, para ser su herramienta oficial de
               PQRS.
            </p>
        ),
        images: reporteciu,
        link: "",
        github: "",
        tags: [android, java],
        members: [members.memberTiago],
        landscape: false
    },
)
//------------------------------------------------------------------------------------------
//Reporte ciudadano
//------------------------------------------------------------------------------------------
projects.push(
    {
        name: "CV Admin",
        description: (
            <p style={{textAlign: 'justify'}}>
                CV Admin: Administración de hojas de vida y reportes de candidatos.
                <br /> Fue desarrollada para la emrpesa Nice People Consulting, con el fin de
                optimizar y organizar sus procesos de entrevistas y generación de reportes a aspirantes
                a puestos de trabajo.
            </p>
        ),
        images: cvm,
        link: "",
        github: "",
        tags: [reactjs, php, lumen],
        members: [members.memberTiago, members.memberJaggy],
        landscape: true
    },
)
//------------------------------------------------------------------------------------------
export default projects