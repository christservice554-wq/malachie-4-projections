# RÉSUMÉ CLAIR — Étape par étape (copiable / donnable à une autre IA)

## Étape 1 — La disposition (respecter le croquis)
1. **ZONE 8** = bande supérieure sur toute la largeur : **logo + nom de l'application** à gauche, et au-dessus de la zone 3 : les deux commandes **PROJECTION** et **AFFICHAGE**.
2. **Ligne du haut** (3 zones debout côte à côte) : **ZONE 1 Réserves** (gauche, ⅖) · **ZONE 2 Écrits/paramètres visuels** (centre, ⅕, compacte) · **ZONE 3 mini-écran** (droite, ⅖).
3. **Ligne du bas** (3 zones debout côte à côte) : **ZONE 4 Ressources + bouton ＋** (gauche, ⅗, verticale) · **ZONE 5 Préparation** (centre, **⅘ — la plus grande**) · **ZONE 6 Historique** (droite, ⅗, verticale).
4. Proportions relatives responsives (pas des pixels) ; zones **jamais redimensionnées automatiquement** ; redimensionnement **manuel** sans casser l'organisation ; cible **ordinateur** — rien de coincé, aucune superposition.

## Étape 2 — Les deux états indépendants (le cœur du système)
5. `projectionConnected` (booléen) : au lancement, l'app **détecte et connecte automatiquement** le 2ᵉ écran — mais reste en mode **TRANSPARENT**. Désactivable depuis la zone 8. Connexion mémorisée.
6. `displayEnabled` (booléen) : commandé par le bouton AFFICHAGE (zone 8) ; **fond par défaut = parchemin** lorsqu'il est activé.
7. Règle d'affichage public : `publicVisible = projectionConnected && displayEnabled` — sinon l'écran public reste **transparent** (Échap coupe l'affichage → transparent).

## Étape 3 — Les gestes (identiques partout)
8. **1 clic** = sélectionner / préparer (**sans** afficher) · **double-clic** = envoyer dans la zone 3 **et activer l'affichage automatiquement** · **maintien long ½ s** = déposer dans la zone 1 · **flèches/Espace** = suivant/précédent/ligne à ligne · **Échap** = couper l'affichage.

## Étape 4 — Contenu des zones
9. **Zone 1 Réserves** : liste (maintien long pour y déposer), ✕ supprimer un à un, 🗑️ tout vider **avec confirmation**, **jamais vidée toute seule**, re-clic = renvoyer.
10. **Zone 2 Écrits** : taille du texte A−/A+ ; **3 polices visibles d'avance** (Georgia, Calibri, Verdana) ; interligne **Normal / Moyen / Grand** ; arrière-plans **Parchemin (défaut) / Charbon / Blanc**. Réglables pendant la lecture, sans déplacer les zones.
11. **Zone 3 mini-TV** : cadre **fixe**, contenu **centré et borné** (zoom/déplacement manuel sans jamais dépasser).
12. **Zone 4 Ressources** : en-tête **[🎵 Recueil] [📖 Bible] [📄 Brochures] [＋]** ; clic famille → liste en bas + **recherche auto-focalisée**.
    - Recueil : chants (numéro + titre) ; clic → zone 5.
    - Bible : **livres (2-3 colonnes, mode abrégé si peu de place) → chapitres numérotés → versets numérotés** (livres puis chapitres **rétrécissent** pour faire place) ; clic verset → zone 5 (livre ouvert entier) ; recherche directe disponible ; sélection verset par verset (pas de lecture continue).
    - Brochures : recherche/liste ; **badge double VGR/SKN** quand les 2 traductions existent → le choix est demandé ; clic → zone 5.
13. **Zone 5 Préparation** :
    - Cantique : titre, **strophes et chœur séparés**, bouton **✎ Modifier** (OK = nouvelle version utilisée, sauvegardée).
    - Bible : livre + chapitre + versets.
    - Brochure : onglets permanents **[§ Par paragraphe | ↕ Lecture continue]** + **panneau latéral des §** ; en lecture continue : **défilement LIGNE PAR LIGNE** borné (monter/descendre), taille/interligne réglables en zone 2.
14. **Zone 6 Historique** : projections remplacées ; ✕ individuelle ; 🗑️ avec confirmation ; **re-clic = restaurer là où on s'était arrêté** (position et version).
15. **Zone 7 = le bouton ＋ dans l'en-tête de la zone 4** (ordre exact des choix : **1. Ajouter un chant · 2. Ajouter une Bible · 3. Ajouter une brochure**) — pour la brochure : demander traduction (VGR ou Shekinah), identifiant, nom, contenu numéroté ; classer dans la bonne famille immédiatement.

## Étape 5 — Démarrage et hors-ligne
16. Splash ~3 s (logo + « Voici, je vous enverrai Élie, le prophète ») ; au démarrage : toast « projecteur détecté, transparent » ; embarquement progressif des données en arrière-plan → **100 % hors-ligne ensuite** (PWA + service worker).

## Étape 6 — Critères de validation
✔ 8 zones présentes et identifiables · ✔ bouton ＋ (recueil/Bible/brochure) · ✔ Bible navigable livre/chapitre/verset avec rétrécissement · ✔ brochures 2 lectures + retour rapide des § · ✔ cantiques éditables, strophes séparées · ✔ zone 3 fixe centrée bornée · ✔ historique restaurable à la position exacte · ✔ Projection et Affichage indépendants · ✔ double-clic = affichage auto, simple clic = non · ✔ fond parchemin par défaut · ✔ transparent quand affichage coupé · ✔ confirmations pour les actions destructrices · ✔ texte jamais coupé hors limites.

## MISE À JOUR — VERSION 3 (v3.7)
- **Démarrage** : splash 5 s, CERCLE de progression + % (installation réelle des contenus) → « Prêt — 100 % hors-ligne » → la projection repart toute seule sur le 2ᵉ écran (plein écran) si autorisée une fois.
- **Zone 2** : écriture compacte (✒️ + bouton ＋ = boîtier : Capture/Sermon/Georgia/Calibri/Verdana) ; fonds : Charbon/Noir/Nuit/Bleu.
- **Zone 3** : ⏮ Retour + A−/A+ écran (zoom projection seule) + ▦ Marges ; brochures = texte continu.
- **Zone 5** : ne mélange plus jamais (nettoyage à chaque changement) ; Bible = numéros rouges espacés ; brochure = paragraphes + tête jaune.
- **Gestes** : molette = panneaux seuls ; flèches/Espace = projection (ligne par ligne) ; double-clic = afficher ; 1 clic brochure = positionner.
