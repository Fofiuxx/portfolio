# Portafolio — Rodolfo Cruz

Sitio estático con mis proyectos. Sin frameworks, sin build, sin dependencias:
son archivos HTML, CSS y JavaScript que cualquier servidor puede servir tal cual.

```
portfolio/
├─ index.html            estructura de la página
├─ css/styles.css        todos los estilos (tema claro y oscuro)
├─ js/
│  ├─ projects.js        ← TUS PROYECTOS (el único archivo que sueles tocar)
│  ├─ i18n.js            textos del sitio en español e inglés
│  └─ main.js            lógica: idioma, tema, filtros, ventana de detalle
├─ assets/img/           portadas, favicon e imagen para redes sociales
├─ 404.html              página de error, la usa GitHub Pages automáticamente
├─ robots.txt            permite que los buscadores indexen el sitio
└─ .nojekyll             le dice a GitHub Pages que publique los archivos tal cual
```

---

## Agregar un proyecto

Abre `js/projects.js`. Al final hay una plantilla comentada: cópiala, quita los
`//` y rellena los campos. Guarda y recarga la página — no hay que compilar nada.

```js
{
  id: "mi-proyecto",              // texto único, sin espacios
  year: 2026,
  status: "shipped",              // "active" | "shipped" | "paused"
  category: "tools",              // "web" | "game" | "tools"
  featured: false,                // true = aparece de primero
  cover: "assets/img/mi.png",     // 16:9 se ve mejor
  tags: ["Python", "CLI"],
  badge: "course",                // opcional: "course" | "team" | "client". Bórralo si es solo tuyo
  links: { repo: "https://github.com/Fofiuxx/mi-proyecto" },
  es: { title, tagline, description, highlights: [] },
  en: { title, tagline, description, highlights: [] }
}
```

Los filtros de categoría se generan solos a partir de las categorías que existan.
Si todos los proyectos son de la misma categoría, la barra de filtros se oculta.

**Portadas.** Las que vienen son SVG dibujados a mano. Puedes reemplazarlas por
capturas reales (PNG o JPG, 1200×675 px) — solo cambia la ruta en `cover`.
Si aún no tienes imagen, usa `assets/img/placeholder.svg`.

---

## Pendiente antes de publicar

Queda **un** marcador en `index.html`, en la sección de contacto:
`TU-USUARIO-LINKEDIN`. Ponlo o borra ese bloque `<a class="contact-link">`
entero — un enlace roto es peor que no tener el enlace.

Todo lo demás ya apunta a `Fofiuxx`.

> Si algún día cambias de dominio, hay dos URL absolutas en el `<head>`
> (`og:url` y `og:image`) que hay que actualizar a mano. Son la vista previa
> que sale al compartir el enlace en WhatsApp o LinkedIn, y las redes sociales
> no resuelven rutas relativas.

---

## Ver el sitio en tu computadora

```bash
python -m http.server 4321 --directory portfolio
```

Y abre <http://localhost:4321>.

> Abrir `index.html` con doble clic también funciona, porque los datos van en un
> `.js` y no en un `.json` que habría que cargar por fetch.

---

## Publicar en GitHub Pages

GitHub Pages es hosting web gratuito: sube los archivos a un repositorio y GitHub
te da una dirección pública real, con HTTPS incluido.

**1. Crea el repositorio.** En <https://github.com/new>, nómbralo `portfolio`
y déjalo **público** (Pages gratis requiere repositorio público). No marques
ninguna casilla de README ni .gitignore: el repositorio local ya los tiene.

**2. Súbelo.** El repositorio local ya está iniciado y con su primer commit,
así que solo faltan estos dos comandos:

```bash
git remote add origin https://github.com/Fofiuxx/portfolio.git
```

```bash
git push -u origin main
```

**3. Activa Pages.** En el repositorio: **Settings → Pages**. En *Source* elige
**Deploy from a branch**, rama `main`, carpeta `/ (root)`, y **Save**.

**4. Espera un minuto.** Tu sitio queda en:

```
https://fofiuxx.github.io/portfolio/
```

Cada `git push` posterior actualiza el sitio automáticamente.

### Que la dirección sea solo `fofiuxx.github.io`

Nombra el repositorio exactamente `Fofiuxx.github.io` en vez de `portfolio`.
Es la misma configuración, solo cambia el nombre — pero acuérdate de quitar
`/portfolio` de las dos URL del `<head>`.

### Dominio propio

Si compras un dominio, en **Settings → Pages → Custom domain** lo escribes,
y en tu proveedor de dominio apuntas un registro `CNAME` a
`fofiuxx.github.io`. GitHub emite el certificado HTTPS gratis.

---

## Alternativas de hosting gratuito

Los archivos son los mismos, no hay que cambiar nada.

- **Netlify** — <https://app.netlify.com/drop>: arrastra la carpeta `portfolio`
  al navegador y queda publicada. Es la opción sin git.
- **Cloudflare Pages** — conectas el repositorio, tráfico ilimitado.
- **Vercel** — conectas el repositorio, deploy en segundos.

---

## Notas técnicas

- El idioma se detecta del navegador la primera visita y luego se recuerda en
  `localStorage`. El tema hace lo mismo con `prefers-color-scheme`.
- La ventana de detalle usa `<dialog>` nativo: cierra con `Esc` o clic fuera.
- No hay analítica, cookies ni peticiones a servidores externos.
