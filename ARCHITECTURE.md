# ARCHITECTURE TECHNIQUE — Malachie 4 Projections v3

## Pile
HTML/CSS/JS **vanilla, zéro dépendance et zéro CDN** · PWA (manifest + service worker `app/sw.js`, cache-first `m4p-v3`) · coquille **Electron** (`desktop/`) · données locales (aucune base, aucun compte).

## Fichiers
```
app/index.html          ← l'application complète (zones 1-8, logique d'état, gestes)
app/data/bible.js       ← window.M4_BIBLE : {livres:[{nom, chapitres:[[versets]]}]} (LSG 1910, 31 102 versets)
app/data/chants.js      ← window.M4_CHANTS : {recueils:[{id,nom,nb,songs:[{num,titre,texte}]}]}
app/data/brochures-index.js ← window.M4_BROCHURES : {brochures:[{id,titre,vgr,shekinah}]}
app/data/brochures/vgr-textes/<code>.json.gz      ← textes VGR complets {id,titre,trad,paras:[[n°,texte]]}
app/data/brochures/shekinah-textes/<code>.json.gz ← textes Shekinah complets
app/sw.js · manifest.json · assets/logo*.png
```

## État global (objet `state` dans index.html)
```js
projectionConnected: boolean   // zone 8 — auto-ON au démarrage
displayEnabled: boolean        // zone 8 — OFF par défaut (transparent)
selectedResourceType / selectedResourceId
preview                        // contenu actuel de la zone 3 {titre,texte,ref,label,snap}
fontFamily / fontSize / lineSpacing / background  // zone 2
bro: {id,trad,paras,pos,mode}  // brochure ouverte : paragraph | continuous
chant/bible navigations
historyItems[] / reserveItems[]
edits (localStorage 'm4_edits')· ajouts (localStorage 'm4_ajouts')
```
**Règle unique** : `publicVisible = projectionConnected && displayEnabled`

## Double projection (principe)
Zone 3 = **écran public simulé** synchronisé avec l'état. Sur un vrai second écran : ouvrir la même URL dans une fenêtre dédiée (variante `?public=1` à ajouter, cf. projet d'origine) ou la fenêtre Electron dédiée — la zone 3 reflète exactement `preview` + `displayEnabled` + paramètres zone 2.

## Chargement des brochures
`fetch('data/brochures/<trad>-textes/<code>.json.gz')` → **DecompressionStream('gzip')** (navigateurs modernes) → JSON. Repli : brochure de démonstration embarquée si inaccessible (mode `file://`). Le **service worker garde en cache** chaque fichier servi → hors-ligne ensuite. Pré-embarquement progressif en arrière-plan au 1er lancement.

## Persistance
- `localStorage.m4_edits` : cantiques modifiés (bouton ✎ Modifier)
- `localStorage.m4_ajouts` : ressources ajoutées via zone 7 (chants/Bibles/brochures)

## Comportements testés manuellement (checklist)
| Test | Attendu |
|---|---|
| démarrage | splash ~3 s puis « projecteur détecté — transparent » |
| Projection OFF | zone 3 = écran déconnecté ; tout envoi impossible |
| Affichage OFF + double-clic | afíchage passe ON automatiquement, contenu visible |
| simple clic sur élément | zone 3 mise à jour SANS activer l'affichage |
| interligne/taille/police/fond | appliqués à la zone 3 (et à la lecture continue) |
| Bible livre→chapitre | livres passent en abréviations, chapitres reçoivent l'espace |
| brochure continue ↓↑ | défile **ligne par ligne**, borné, sans saut |
| historique re-clic | restaure mode + position exacte |
| 🗑️ zone 1 / zone 6 | demande confirmation |
| modification cantique | persiste après rechargement (localStorage) |
| hors-ligne après 1re visite | app complète fonctionnelle sans réseau |
