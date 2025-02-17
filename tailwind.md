# A Tailwind CSS konfigurációja react alkalmazásban

Két fajta react alkalmazásban nézzük meg a Tailwind beállítását. Az egyik a klasszikus create-react-app paranccsal létrehozott, a másik pedig a VITE tool segítségével létrehozott react alkalmazás lesz. A Tailwind nem más mint egy CSS framework (hasonlóan a Bootstraphez), viszont képes arra, hogy a lefordított alkalmazásunkba csak azokat a stílusokat tegye bele, amelyeket ténylegesen használunk is, ezáltal csökkentve az oldalunk letöltési idejét.

## Hagyományos react alkalmazás Tailwind CSS-el

Alakítsuk ki a kívánt mappaszerkezetet, nyissunk terminált a mappához, amelybe telepíteni kívánjuk az alkalmazást.
 - Adjuk ki a terminálban az **npx create-react-app .** parancsot
 - Keressük fel a Tailwind oldalát: <a href="http://tailwindcss.com/" target="_blank">Tailwind CSS</a>
 - A telepítés lépései itt olvashatóak:<a href="https://tailwindcss.com/docs/installation/using-postcss" target="_blank">Tailwind telepítés</a>. 
 
 Nézzük mit is kell csinálni:
 - Adjuk ki a következő két parancsot: **npm install -D tailwindcss postcss autoprefixer**  majd  **npx tailwindcss init**
 - Hozzunk létre egy **postcss.config.js** nevű fájlt
 - Ebbe a fájlba másoljuk be a következőket:
 
 ```js
 module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  }
}
```
 - Nyissuk meg a **tailwind.config.js** fájlt!
 - A content:[] sorba a szögletes zárójelek közé írjuk be:**"./src/**/*.{html,js}"**
 
 ```js
 /** @type {import('tailwindcss').Config} */
 module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
}

 ```
  - Nyissuk meg az **index.css** fájlt, töröljük a tartalmát, majd másoljuk bele a következőket:
  
  ```js
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
  ```
   - Tisztítsuk ki a react appunkat a felesleges dolgoktól (index.js, app.js)
   - Teszteljük az alkalmazást a következő kóddal:

```js
import './App.css';

function App() {
  return (
    <div>
      <h1 className="text-5xl text-center font-bold">Tailwind CSS használata</h1>
      
    </div>
  );
}

export default App;
```
Ezt követően telepítjük a daisyui csomagot, amely sok előre gyártott elemet biztosít az oldal építéséhez (card, menük, form elemek stb.)
 - Töltsük be a csomag weboldalát: <a href="https://https://daisyui.com/" target="_blank">DaisyUI</a>
 - Telepítsük az **npm install daisyui** paranccsal
 - Nyissuk meg a **tailwind.config.js** fájlt
 - A plugins-nál írjuk be a szögletes zárójelek közé:**require("daisyui")**
 ```js
 /** @type {import('tailwindcss').Config} */
 module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}
 ```
   
## React alkalmazás létrehozása a Vite tool segítségével

A Vite egy rendkívül hasznos eszköz, amellyel számos webalkalmazást létrehozhatunk, nem csak React, hanem Vue vagy egyéb más alkalmazásokat.
Az Vite weboldalán megtaláljuk a telepítés lépéseit,  látogassunk el oda <a href="https://vitejs.dev/guide/" target="_blank">Vite</a>

 - Adjuk ki a következő parancsot: **npm create vite@latest**
 - Pár kérdést fog a Vite feltenni, az első a projekt neve. Ha valamilyen nevet beírunk, akkor létrehoz egy ilyen nevű almappát, és abba telepít. Ha ezt nem akarjuk, akkor egy pontot **.** írjunk be.
 - Ezután egy menüből választhatunk, hogy milyen projektet szeretnénk, válasszuk a React-et.
 - Nyelvet választhatunk a következő menüben, válasszuk a Javascript-et.
 
 Ezek után az eszköz legenerálja a projekt fájljait. Ahhoz, hogy a szükséges csomagok is telepítésre kerüljenek, adjuk ki az **npm install** parancsot.
 A projekt az **npm run dev** paranccsal indítható.
 
A hagyományos React apphoz képest láthatunk néhány apróbb eltérést az app felépítésében. Az **index.html** nem a **public** mappában van, illetve a fájlok kiterjesztése **.js** helyett **.jsx**. A(z) **src** mappa ugyanúgy megtalálható. 
Eltérést fogunk tapasztalni a két app között az appok méretében és a fejlesztő környezet sebességében is, mindkettőt a Vite javára. A hagyományos react app mérete ~200 Mb, a Vite-al létrehozott ~35 Mb.

### Tailwind CSS konfigurálása az appban

A telepítés lépései nagyon hasonlítanak. A Tailwind oldalán külön leírást találunk, fontos, hogy ezt kövessük és ne az alapot, mert egyébként nem fog működni. A leírás: <a href="https://tailwindcss.com/docs/guides/vite#react" target="_blank">Tailwind konfig Vite-al létrehozott react appnál</a>

Az első lépést, az app létrehozását már megcsináltuk
A következők:
 - **npm install -D tailwindcss postcss autoprefixer**
 - **npx tailwindcss init -p**

Az **npx tailwindcss init -p** hatására létrejön két konfigurációs fájl. Megfigyelhetjük, hogy a kiterjesztésük eltér a másik appban használt fájlokétól (*.cjs)

A **tailwind.config.cjs** fájlban módosítsuk a content sort a következővel:
```js
content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
```
A fájl így néz ki ezek után:
```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```
Ezek után takarítsuk ki az alkalmazást. Nyissuk meg az index.css-t és az app.css-t és töröljük ki a tartalmukat.
Az index.css-be tegyük bele a következőket:
```js
@tailwind base;
@tailwind components;
@tailwind utilities;
```
Az app.jsx-ből is töröljük ki a minta kódot és az importokat, és teszteljük a következővel:
```js
<div>
      <h1 className="text-5xl font-bold text-center">Tailwind CSS használata</h1>     
</div>
```
Telepítsük itt is a daisyui-t! A telepítés módja ugyanaz, mint a másik app esetében.
