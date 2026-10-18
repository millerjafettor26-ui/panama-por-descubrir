# Panamá por Descubrir 🇵🇦

Sitio web turístico estático para descubrir destinos, galería, blog, recomendaciones y servicios turísticos de Panamá. Está construido con HTML, CSS y JavaScript, por lo que se puede publicar en GitHub Pages sin servidor.

## Incluye
- Diseño adaptable a móviles y computadoras.
- Destinos con búsqueda, filtros por región y categoría.
- Galería de fotografías.
- Blog con lectura de artículos en una ventana emergente.
- Recomendaciones editoriales.
- Formulario de comentarios con valoración. **En esta versión, los comentarios se guardan en el almacenamiento local del navegador y no se comparten entre visitantes.**
- Formulario de solicitud que prepara un correo electrónico una vez configurado el destinatario.
- Sección de servicios turísticos.

## Archivos
- `index.html`: contenido y estructura de la web.
- `styles.css`: estilos, colores y diseño responsive.
- `script.js`: destinos, filtros, blog, comentarios y formularios.

## Publicar en GitHub Pages
1. Crea o inicia sesión en https://github.com/.
2. Pulsa **New repository** y ponle, por ejemplo, `panama-por-descubrir`.
3. Si el repositorio es público, selecciona **Public**. Añade un README si lo deseas.
4. Sube `index.html`, `styles.css`, `script.js` y `README.md` a la raíz del repositorio usando **Add file → Upload files**; también puedes usar Git desde tu computadora.
5. Abre **Settings → Pages**.
6. En **Build and deployment**, selecciona **Deploy from a branch**.
7. Selecciona la rama `main` y la carpeta `/(root)`, luego pulsa **Save**.
8. Espera a que termine la publicación. GitHub mostrará la dirección del sitio en la sección Pages, normalmente `https://TU-USUARIO.github.io/panama-por-descubrir/`.

Si el sitio no aparece de inmediato, espera unos minutos y revisa la pestaña **Actions** para ver el estado del despliegue.

## Configuración antes de publicar
1. En `script.js`, busca `TU_CORREO@EJEMPLO.COM` y sustitúyelo por un correo que controles.
2. Revisa los destinos, textos, duración sugerida y toda información práctica antes de publicarla.
3. Las fotos de demostración cargan desde URLs externas. Confirma sus licencias y atribuciones, o reemplázalas por fotografías propias/licenciadas.
4. Añade una política de privacidad y condiciones de uso si empiezas a recopilar datos personales.
5. No publiques claves privadas, contraseñas ni credenciales dentro del código del sitio.

## Limitaciones de esta versión
- No hay panel administrativo ni base de datos compartida.
- Los comentarios se almacenan localmente en cada navegador. Pueden borrarse si el usuario limpia los datos del sitio.
- El formulario de contacto utiliza `mailto:` y depende de que la persona tenga una aplicación de correo configurada.
- No procesa pagos ni confirma reservas.
- Las recomendaciones no son reseñas verificadas ni un ranking real.

## Próximas mejoras recomendadas
- Conectar Supabase u otro backend para comentarios compartidos y gestión de destinos.
- Añadir moderación antispam y reportes de comentarios.
- Añadir un formulario de contacto alojado, como Formspree, o un backend propio.
- Incorporar mapas, perfiles de negocios y sistema de solicitudes/reservas.
- Configurar dominio personalizado y analítica respetuosa con la privacidad.

## Tecnologías
HTML5 · CSS3 · JavaScript · GitHub Pages
