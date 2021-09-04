# Bluu e-commerce con React
Pagina de ecommerce genérica para usar con productos de cualquier categoría.

# Demostración del funcionamiento de la página
<div style="padding:49.05% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/597903836?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;h=039cb1f925" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;" title="New Recording - 4/9/2021 16:04:56"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>

# Built With:
- ReactJS
- JavaScript
- Node
- NPM
- Webpack
- HTML
- CSS
- BOOTSTRAP

# HOME
El navbar esta compuesto del logo del site que lleva hacia la página inicial en cualquier momento, un menu desplegable que lleva a diferentes categorías (actualmente sólo 2, masculino y femenino), una sección de FAQ y un componente de "Cart".
En el cuerpo se carga una lista de productos desde una base de datos de Firebase a forma de catálogo.

# GÉNEROS
Cada uno de estos está hecho de forma que sólo se muestren los productos del listado de inicial que corresponden a la categoría seleccionada - esto se hace utilizando useParams().

# VISTA DETALLADA DEL PRODUCTO
Permite visualizar una imagen del producto con su título respectivo, una descripción, el stock disponible y el precio.
Además hay un contador que permite adicionar o quitar productos que se quieran agregar al Cart con la condición de que no pueda haber menos que 0 items ni tampoco más que el stock definido para dicho elemento en la base de datos.
Al darle click al botón "Agregar al carrito", se muestran 2 botones adicionales que le permiten al usuario seguir comprando (en este caso volvería al Home) o ir directamente al carrito.

# CARRITO
La página de Cart muestra una lista con todos los items adicionados al carrito de compras, detallando cantidad y precio de cada uno.
Se agregó la opción de quitar elementos individualmente o también vaciar el carrito por completo.
Para poder finalizar la compra, es necesario tener al menos 1 item adicionado al carrito, como también el nombre, email y teléfono del usuario que esta finalizando la compra.
Al cumplirse todas estas condiciones y apretar el botón "Comprar", será generada una orden en la coleccion "Orders" de Firebase con la información de los items comprados, el valor total, y los datos del comprador.

# Getting Started with Create React App
This project was bootstrapped with [Create React App]

## Available Scripts
In the project directory, you can run:

### `npm start`
Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.


### `npm test`
Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.


### `npm run build`
Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.


### `npm run eject`
**Note: this is a one-way operation. Once you `eject`, you can’t go back!**
If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.


### `npm run build` fails to minify
This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


## Learn More
You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).
To learn React, check out the [React documentation](https://reactjs.org/).
