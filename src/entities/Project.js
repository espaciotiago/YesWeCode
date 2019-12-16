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
            <p>
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
            <p>
                Pohema app
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
            <p>
                Agroapp
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
            <p>
                X1 POS
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
            <p>
                X1 Fuel truck App
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
            <p>
                Moods te permitirá gestionar a tu equipo de colaboradores, conociendo sus emociones. 
                También puedes enviar encuestas y comunicados internos que sean importantes para tu organización.
                <br/>
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
            <p>
                Pengraf
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
            <p>
                (MVP) Reporte ciudadano
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
            <p>
                Administración de hojas de vida y reportes de candidatos
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