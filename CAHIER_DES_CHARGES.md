# CAHIER DES CHARGES — Malachie 4 Projections (consolidé v3)
*Source : documents PDF + dictées de l'utilisateur (24/09/2026) + croquis manuel (poids de l'image conservés).*

## 1. Objectif
Application de **gestion de projection pour le culte** : cantiques, Bible, brochures. Sélectionner, préparer, modifier, prévisualiser et projeter. Deux fonctions distinctes :
- **Projection** = connexion technique au 2ᵉ écran/projecteur.
- **Affichage** = ce qui est effectivement visible par le public.

## 2. L'écran — 8 zones (positions + proportions relatives du croquis)
| Zone | Rôle | Proportion | Position |
|---|---|---|---|
| **8** | Nom + logo + commandes **Projection / Affichage** | bande supérieure | tout en haut |
| **1** | **Réserves** (contenus préparés/disponibles) | ⅖ × ⅖ | haut gauche |
| **2** | Paramètres visuels (taille, 3 polices visibles, interligne Normal/Moyen/Grand, 3 fonds) | ⅕ | haut centre |
| **3** | Mini-écran / aperçu de l'écran public | ⅖ × ⅖ | haut droite |
| **4** | Sélection ressources (Recueil/Bible/Brochures) + **bouton ＋ (zone 7)** en en-tête + recherche + liste | ⅗ × ⅗ | bas gauche |
| **5** | Préparation / édition / détails | ⅘ | bas centre (**le plus grand**) |
| **6** | Historique des projections | ⅗ × ⅗ | bas droite |
| **7** | Fonction d'ajout **intégrée** au bouton ＋ de la zone 4 (pas de grand panneau) | — | en-tête de 4 |

Règles de layout : grille stable et lisible ; les zones ne changent PAS de taille automatiquement ; redimensionnement **manuel** autorisé sans casser l'organisation ; zone 5 = espace central de travail ; cible = **ordinateur** (rien de coincé, aucun élément qui se superpose).

## 3. Zone 3 — mini-TV
Conteneur **fixe** ; contenu centré ; zoom/déplacement manuel **borné** au cadre ; jamais de dépassement.
Envoi : **1 clic prépare sans afficher** · **double-clic envoie et active l'affichage automatiquement**.

## 4. Projection × Affichage (indépendants)
| Projection | Affichage | Résultat |
|---|---|---|
| off | off | rien n'est envoyé |
| **on** | off | connecté mais **TRANSPARENT** |
| on | on | contenu de la zone 3 visible par le public |
| off | on | visible **localement seulement** |
- Projection : **détection auto à l'ouverture**, connexion mémorisée, transparente jusqu'à affichage, désactivable en zone 8.
- Affichage : arrière-plan par défaut **parchemin** ; quand coupé → retour transparent ; Échap = couper.
- `publicScreenVisible = projectionConnected && displayEnabled`

## 5. Détail des zones
- **Zone 1** : liste + re-clic renvoie (zone 3 / zone 5) ; suppression 1 à 1 (✕) ou totale (🗑️ **confirmée**) ; **jamais vidée automatiquement** ; dépôt par **maintien long ½ s**.
- **Zone 2** : taille A−/A+, **3 polices visibles** (Georgia / Calibri / Verdana — confortables à lire), interligne **Normal/Moyen/Grand**, fonds **Parchemin / Charbon / Blanc**. Réglages actifs pendant préparation **et** lecture ; ne déplacent ni ne gonflent les autres zones.
- **Zone 4** : en-tête [Recueil][Bible][Brochures][＋] ; clic famille → liste en bas + **champ recherche auto-focalisé (mode saisie)**.
  - **Recueil** : chants listés (numéro + titre) ; clic → zone 5.
  - **Bible** : navigation Livres (2-3 colonnes, **rétrécissement en abréviations** si manque de place) → **Chapitres numérotés** → **Versets numérotés** (livres puis chapitres rétrécissent pour faire place) ; clic verset → zone 5 avec livre ouvert, chapitre et texte ; recherche directe. Pas de lecture continue : sélection verset par verset.
  - **Brochures** : liste/recherche ; double badge **VGR/SKN** ( Shekinah ) quand les deux existent → **le choix est demandé** ; clic → zone 5.
- **Zone 5** :
  - *Cantique* : titre + **strophes et chœur séparés** (ligne vide = nouvelle partie ; [Chœur], [Strophe n] reconnus) + **bouton ✎ Modifier** (textarea, OK = nouvelle version utilisée, mémorisée).
  - *Bible* : livre + chapitre + versets complets, sélection par verset.
  - *Brochure* : **onglets permanents [§ Par paragraphe | ↕ Lecture continue]** + **panneau latéral des §** (retour rapide) ; sélection § → zone 3 ; double-clic → affiché ; **lecture continue = défilement LIGNE PAR LIGNE** (monter/descendre, molette, borné, sans sauter plusieurs lignes), taille/interligne modifiables depuis zone 2.
- **Zone 6** : projections remplacées ; ✕ individuelle modèle croix ; **🗑️ tout vider (confirmée)** ; **re-clic = restaure là où on s'était arrêté** (position de lecture, version modifiée le cas échéant).
- **Zone 7** (＋) : **ordre des choix : 1️⃣ Ajouter un chant · 2️⃣ Ajouter une Bible (JSON) · 3️⃣ Ajouter une brochure** (la brochure demande : traduction VGR/Shekinah, identifiant, nom, contenu § numérotés) → classée directement dans sa famille.

## 6. Gestes universels
| Geste | Effet |
|---|---|
| 1 clic | sélection / préparation (sans activer l'affichage) |
| **double-clic** | envoyer zone 3 **+ affichage automatique** |
| maintien long (½ s) | déposer en réserve (zone 1) |
| flèches ↓↑ / Espace | suivant / précédent / ligne à ligne |
| Échap | couper l'affichage → transparent |

## 7. Ouvrir/charger
Splash du modèle d'origine (logo pulsant + « Élie, le prophète » + barre ≈ **3 s**) ; au démarrage : **projecteur détecté & connecté automatiquement en mode transparent** ; embarquement progressif des données en arrière-plan → **hors-ligne ensuite**.

## 8. Choix validés (points §15 des documents)
Nom = **Malachie 4 Projections** · logo = portrait officiel · 3ᵉ fond = **blanc** · polices = **Georgia / Calibri / Verdana** · stockage = **JSON embarqué JS + .json.gz servis** · cible = **web (PWA installable) + ordinateur (Electron)** · **hors-ligne = oui** · pas de compte.

## 9. Version 3 — v3.7 (25/09/2026, notes + captures)
- **Modèle VideoPsalm** : la projection part TOUTE SEULE sur le 2ᵉ écran en plein écran (mémorisé après la 1ʳᵉ activation ⛶ ; le logiciel EXE le fait sans aucun clic quand 2 écrans sont branchés) ; l'écran public ne montre QUE le contenu (sombre pur quand transparent).
- **Splash 5 s + cercle de progression RÉEL** : logo + « Élie, le prophète » + % et compteur de fichiers ; TOUT (Bible, recueils, 1 212 brochures VGR+Shekinah) est installé/stocké dans l'appareil → 100 % hors-ligne ensuite, zéro latence au basculement.
- **Zooms indépendants** : zone 2 = zone de travail ; boutons « A−/A+ écran » (zone 3) = projection seule. Marges de projection réglables (▦ : étroit/normal/large).
- **Molette** : ne fait que défiler les panneaux de travail (zones 4/5) — ne change JAMAIS la projection. Projection : double-clic, flèches/Espace, boutons ▲▼ (ligne par ligne pour les brochures).
- **Fonds de projection** : Charbon / Noir (défaut) / Nuit / Bleu — parchemin et blanc RETIRÉS (projecteur à surface blanche).
- **Brochures** : mode paragraphe RETIRÉ — projection TOUJOURS en texte continu (numéros § dorés, marges 2-3 lignes, ligne par ligne) ; zone 5 = paragraphes (travail) avec § latéraux, tête de projection SURLIGNÉE EN JAUNE, 1 clic = positionner, double-clic = afficher.
- **Zone 3** : nouveau bouton ⏮ Retour (ramène la dernière projection : écran + zone 5 à la position exacte).
- **Écritures** : nouveau style « Capture » (comme les captures : numéros de versets ROUGES, espacés) par défaut ; choix dans un boîtier compact (＋) : Capture, Sermon, Georgia, Calibri, Verdana.
- **Logiciel** : Windows en premier (portable Malachie4-Projections-3.exe + installateur Setup-3.exe, icône officielle) + Linux AppImage + Mac DMG, fabriqués automatiquement par GitHub Actions dans la release v3.1.

## 9b. Correctif vitesse — v3.8 (25/09/2026, même Version 3)
- Recherche (recueil/brochures/Bible) : **index normalisé pré-calculé** au démarrage + saisie anti-rafale 120 ms + recherche Bible en direct → **zéro latence** à chaque lettre.
- Brochures : **mémoire (25 dernières) + stockage rapide permanent (IndexedDB) + pré-chargement automatique** en arrière-plan avec reprise ; indicateur « ⚡ …% instantané » ; 1er passage unique ~0,2-1 s puis instantané.
- **Simulation VITESSE** (`simulation-vitesse.html` + `?testvitesse=1`) : test automatique mesuré (recherches + 3 ouvertures), résultats dans l'app et dans le bandeau.

## 9c. Forteresse + vitesse/précision — v3.9 (25/09/2026, même Version 3)
- **Plein écran verrouillé** : public = contenu seul (curseur caché, sélection/menus bloqués, plein écran re-demandé si sorti) ; Échap/triple-clic côté public = couper ; fermeture auto du 2ᵉ écran (PROJECTION off / fermeture app / ⛶ interrupteur) ; Electron : always-on-top + kiosque.
- **Précision** : ET multi-mots partout, titres/numéros d'abord (cantiques), **recherche plein-texte des 31 102 versets** dès 3 lettres (index versets au démarrage).
- **Vitesse** : projection continue non reconstruite à chaque ligne (scroll seul, zone 3 + public) ; stockage persisté (`persist()`).
- Tailles mesurées : app 58 Mo · transfert 54 Mo · PWA max ~220 Mo (cache 58 + rapide 160) · EXE ~155-170 Mo (portable) / ~110-135 Mo (setup).

## 9d. Imports + turbo + zone Liens — v3.10 (25/09/2026, même Version 3)
- **Zone 7** : import **PDF (lecteur embarqué, hors-ligne), TXT, JSON** pour chant / livre Bible (format `# Livre` + `Chapitre N` + `v. texte`) / brochure (`n. texte` ou blocs) ; stockage permanent volumineux (IndexedDB, repli local) ; **🗂️ Mes ajouts** (voir/supprimer/sauvegarder JSON/restaurer) ; classement avec les autres (➕/PERSO).
- **Turbo sûr** : pas de reconstruction quand le contenu est identique (chant/chapitre/brochure), rafales clavier ≤ 25 ms, `contain:content` sur les tuiles → aucun risque pour l'app ni l'ordinateur (moins de travail, pas plus).
- **Splash** : secondes + % + compteur (`📦 Installation : 800/1595 · 50% · 12s`, total 1ʳᵉ fois ~54 Mo ≈ 30 s en 4G).
- **Zone 🔗 Liens dans l'app** : tous les liens (ouvrir/copier) + installer téléphone/PC + 2ᵉ écran super efficace ; **réparation auto** du 2ᵉ écran toutes les 10 s.
