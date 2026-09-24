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
