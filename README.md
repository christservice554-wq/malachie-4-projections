# 🕊️ Malachie 4 Projections — PROJET ACTUEL (v3)

> **Application de gestion de projection du culte**, construite exactement selon votre cahier des charges (zones 1-8, croquis + dictées).
> **Pour vous retrouver depuis n'importe quel compte** : ce dépôt = la référence unique (code + docs + données).

## ▶️ Utiliser / installer
| Moyen | Adresse / commande |
|---|---|
| **Lien web installable** | https://christservice554-wq.github.io/malachie4-projet-actuel/app/index.html |
| **ZIP complet v3** | dans la **Release v3.0** de ce dépôt (`Malachie4-Projections-COMPLET-v3.zip`, ~57 Mo) |
| **Fichier seul** | double-clic sur `app/index.html` (Bible + cantiques + brochures de démonstration fonctionnent ; textes de brochures complets = en http) |
| **Logiciel PC** | `cd desktop && npm install && npm start` |

## 📦 Données embarquées (COMPLÈTES)
- 📖 **Bible Louis Segond 1910 entière** — 66 livres, 31 102 versets (`app/data/bible.js`)
- 🎵 **2 recueils** : Nouveau recueil **349 chants FR/LG** (votre document fourni) + historique **2 127 chants** (`app/data/chants.js`)
- 📄 **Brochures du Message** : index fusionné **1 212 sermons** + textes intégraux **VGR 385** et **Shekinah 1 210** (fichiers `.json.gz` servis par l'app, décompressés dans le navigateur, caching hors-ligne via service worker)

## 🗂️ Documents à connaître
| Fichier | Contenu |
|---|---|
| `CAHIER_DES_CHARGES.md` | la spec validée consolidée (8 zones, proportions, gestes, table Projection×Affichage, critères) |
| `RESUME_ZONES.md` | le **résumé clair étape par étape** (copiable tel quel, prévu pour être donné à une autre IA) |
| `ARCHITECTURE.md` | technique : état global, fichiers de données, format JSON, double projection, tests |
| `MANUEL_D_UTILISATION.md` | mode d'emploi zone par zone |

## 🧱 Le modèle d'écran (votre croquis appliqué)
```
ZONE 8 : logo + Malachie 4 Projections      [🖥️ PROJECTION] [👁 AFFICHAGE]
┌─ ZONE 1 Réserves ─┬─ ZONE 2 Écrits ─┬─ ZONE 3 Mini-écran ─┐
├─ ZONE 4 Ressources+＋┬─ ZONE 5 Préparation (large) ─┬─ ZONE 6 Historique ┤
```
**Règle d'or** : `publicVisible = ProjectionConnected && AffichageEnabled` — la projection se connecte seule au démarrage mais reste **transparente** ; le double-clic envoie dans la zone 3 **et active l'affichage automatiquement** ; Échap = retour transparent. Parchemin = fond par défaut.

## 🧭 Les 3 dépôts du projet
1. **malachie4-projections** — le projet d'origine (v1.3, sources de données, cahier initial)
2. **malachie4-offline-app** — prototype v2 (ancien recueil v2)
3. **malachie4-projet-actuel** ⭐ — **CE dépôt** (v3 finale selon votre cahier 8 zones)

*GPL-3.0 · LSG 1910 domaine public · Sermons © Voice Of God Recordings / Shekinah Publications — usage église non commercial.*
