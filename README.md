# 🕊️ Malachie 4 Projections — VERSION 3 (v3.10)

> **Application de gestion de projection du culte** (zones 1-8) + **projection automatique plein écran sur le 2ᵉ écran** (modèle VideoPsalm), **100 % hors-ligne**.
> **Dépôt unique de référence** : ce dépôt = code + docs + données (les anciens dépôts ont été supprimés — aucune confusion possible).

## ▶️ Utiliser / installer
| Moyen | Adresse / commande |
|---|---|
| **Lien web installable** | https://christservice554-wq.github.io/malachie-4-projections/app/index.html |
| **Simulation Windows** (tester sur téléphone) | https://christservice554-wq.github.io/malachie-4-projections/simulation-windows.html |
| **Simulation VITESSE** (test auto ⏱️) | https://christservice554-wq.github.io/malachie-4-projections/simulation-vitesse.html |
| **EXE portable v3** (Windows, sans installation) | `Malachie4-Projections-3.exe` dans la **Release v3.1** du dépôt |
| **Installateur Windows v3** | `Malachie4-Projections-Setup-3.exe` dans la **Release v3.1** |
| **Linux / Mac** | `Malachie4-Projections-3.AppImage` / `.dmg` dans la **Release v3.1** |
| **ZIP complet v3.1** | `Malachie4-Projections-COMPLET-v3.1.zip` dans la **Release v3.1** |
| **Logiciel PC (depuis les sources)** | `cd desktop && npm install && npm start` |

Tous les détails : **LIENS_ET_EXPLOITATION.md**. Résumé de cette version : **RESUME_VERSION3.md**.

## 🆕 Version 3 (v3.10) — 25/09/2026
- ⛶ Projection **automatique** plein écran sur le 2ᵉ écran (mémorisée) · écran public = contenu seul
- 📦 Splash 5 s + **cercle de progression réel** · tout installé dans l'appareil · zéro latence
- 🔍 Zooms **indépendants** (travail ≠ projection) + marges réglables · 🖱️ molette = panneaux seuls
- 📄 Brochures : projection **continue unique** (ligne par ligne), tête **surlignée jaune** en zone 5
- ⏮ Bouton **Retour** (dernière projection exacte) · ✒️ style **Capture** (versets rouges) · fonds Charbon/Noir/Nuit/Bleu
- ⚡ v3.8 : **recherche instantanée** (index) + **brochures instantanées** (stockage rapide + pré-chargement auto) + **simulation VITESSE** (test auto)
- 🖥️ v3.9 : **plein écran verrouillé** (curseur caché, fermeture auto, kiosque) + **précision ET multi-mots** + **recherche dans les 31 102 versets** + **clavier instantané**
- 📥 v3.10 : **imports Zone 7 (PDF/TXT/JSON)** — brochures, livres, cantiques classés avec les autres + **turbo maximal sûr** + **décompte secondes + %** + **zone 🔗 Liens + mode d'emploi dans l'app**

## 📦 Données embarquées (COMPLÈTES)
- 📖 **Bible Louis Segond 1910 entière** — 66 livres, 31 102 versets (`app/data/bible.js`)
- 🎵 **2 recueils** : Nouveau recueil **349 chants FR/LG** + historique **2 127 chants** (`app/data/chants.js`)
- 📄 **Brochures du Message** : **1 212 sermons** + textes intégraux **VGR** et **Shekinah** (`.json.gz`, cache hors-ligne)

## 🗂️ Documents à connaître
| Fichier | Contenu |
|---|---|
| `RESUME_VERSION3.md` | **résumé de TA demande + ce qui a été fait + TOUS LES LIENS** |
| `LIENS_ET_EXPLOITATION.md` | liens officiels + fiche double écran |
| `CAHIER_DES_CHARGES.md` | spec validée (8 zones + §9 Version 3) |
| `RESUME_ZONES.md` | résumé copiable (donnable à une autre IA) |
| `ARCHITECTURE.md` | technique |
| `MANUEL_D_UTILISATION.md` | mode d'emploi (+ mise à jour V3) |

## 🧱 Le modèle d'écran
```
ZONE 8 : logo + Malachie 4 Projections      [🖥️ PROJECTION] [👁 AFFICHAGE] [⛶ 2ᵉ écran]
┌─ ZONE 1 Réserves ─┬─ ZONE 2 Écrits ─┬─ ZONE 3 Mini-écran ─┐
├─ ZONE 4 Ressources+＋┬─ ZONE 5 Préparation (large) ─┬─ ZONE 6 Historique ┤
```
**Règle d'or** : `publicVisible = ProjectionConnected && AffichageEnabled` — transparent par défaut ; double-clic = affiché ; Échap = transparent. Fond de projection par défaut : **noir**.

*GPL-3.0 · LSG 1910 domaine public · Sermons © Voice Of God Recordings / Shekinah Publications — usage église non commercial.*
