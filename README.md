# Portfolio — Ferdaoues Abdessalem

Site statique (HTML / CSS / JS), trilingue FR · EN · IT, sans dépendance à installer.

## Fichiers

```
index.html     structure de la page (ne change presque jamais)
style.css      couleurs, polices, mise en page
content.js     TOUT LE TEXTE : profil, compétences, expériences, projets, certifs (FR/EN/IT)
main.js        logique (changement de langue, affichage)
assets/        photo.jpg (ta photo, carrée de préférence) + favicon.svg
cv/            les 3 CV PDF téléchargeables
.nojekyll      fichier vide requis par GitHub Pages
```

## Modifier le contenu

Ouvrir `content.js`. Chaque texte existe en 3 langues :

```js
desc: { fr: "Texte français", en: "English text", it: "Testo italiano" },
```

* **Ajouter un projet** : copier un bloc `{ name: ..., year: ..., ... },` dans `projects`
  et le coller au bon endroit (plus récent en haut). `site:` = lien du site, `code:` = lien GitHub
  (les deux sont optionnels).
* **Changer la photo** : remplacer `assets/photo.jpg` (même nom). Sans photo, les initiales « FA » s'affichent.
* **Mettre à jour les CV** : recopier les PDF de `../resume/` dans `cv/` (mêmes noms de fichiers).
* **Couleur principale** : `--accent` en haut de `style.css`.

Prévisualiser : double-cliquer sur `index.html`. Forcer une langue : `index.html?lang=en`.

## Mettre en ligne sur GitHub Pages (une seule fois)

1. Sur github.com, créer un dépôt **public** nommé exactement `FerdawesAbdessalem.github.io`.
2. Envoyer le contenu de ce dossier `portfolio/` à la racine du dépôt :
   ```bash
   cd "D:/Resume Ferdaoues Abdessalem/portfolio"
   git init
   git add .
   git commit -m "Portfolio"
   git branch -M main
   git remote add origin https://github.com/FerdawesAbdessalem/FerdawesAbdessalem.github.io.git
   git push -u origin main
   ```
3. Dépôt → **Settings → Pages** → Source : `Deploy from a branch`, branche `main`, dossier `/ (root)`.
4. Après 1–2 minutes, le site est en ligne : **https://ferdawesabdessalem.github.io**

## Mettre à jour plus tard

```bash
cd "D:/Resume Ferdaoues Abdessalem/portfolio"
git add .
git commit -m "Mise à jour"
git push
```
