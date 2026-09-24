# MANUEL D'UTILISATION — Malachie 4 Projections (v3)

## 1. Ouvrir
- **Lien web** : ouvrez l'URL de l'app (GitHub Pages) dans Chrome/Edge → ⋮ → **« Installer Malachie 4 Projections »**.
- Premier démarrage : logo ~3 s → l'écran s'ouvre. Le message **« Projecteur détecté — connecté en mode transparent »** confirme la connexion (rien n'est visible dehors tant que vous ne le décidez pas).

## 2. Les zones en un coup d'œil
| # | Zone | Vous y faites |
|---|---|---|
| 1 | **Réserves** | conserver ce qui attend (dépôt : maintien long ½ s) |
| 2 | **Écrits** | taille, police, interligne, fond (parchemin/charbon/blanc) |
| 3 | **Mini-écran** | aperçu de ce que l'église **verrait** à l'instant |
| 4 | **Ressources** | choisir Recueil / Bible / Brochures, rechercher, ＋ ajouter |
| 5 | **Préparation** | lire/préparer/modifier le contenu choisi |
| 6 | **Historique** | rappeler une projection déjà passée |
| 8 | **Bande du haut** | **PROJECTION** (connexion écran 2) · **AFFICHAGE** (montrer/cacher) |

## 3. Un culte typique
1. Cliquez **🎵 Recueil** → tapez 2 lettres dans la recherche → **1 clic** sur le chant : il s'ouvre en zone 5 avec ses strophes.
2. **Double-clic** sur une strophe → elle part en zone 3 **et s'affiche au public** (l'affichage s'allume tout seul).
3. Flèches **↓ ↑** ou boutons ▲▼ : strophe suivante/précédente **en direct**.
4. **Échap** : l'écran public redevient **transparent** (la chanson préparée reste prête).
5. Nouveau contenu projeté → l'ancien descend automatiquement dans la **zone 6** ; re-cliquez-le plus tard : **vous reprenez où vous étiez arrêté**.

## 4. Bible
📖 Bible → les **66 livres** s'affichent → clic livre (les livres passent en abréviés) → clic **numéro de chapitre** → clic **numéro de verset** : zone 5 montre le passage entier ; **double-clic verset = affiché** (référence comprise, ex. « Jean 3:16 — Segond 1910 »).

## 5. Brochures (sermons)
📄 Brochures → recherchez un titre → si **VGR + SKN** apparaissent, **choisissez la traduction** → en zone 5, deux onglets permanents :
- **§ Par paragraphe** : panneau latéral des numéros ; 1 clic = préparer, double-clic = afficher.
- **↕ Lecture continue** : toute la brochure ; **⌃ Monter / ⌄ Descendre** (ou molette/flèches) = **ligne par ligne** ; la taille et l'interligne (zone 2) s'appliquent en direct.

## 6. Modifier un chant
Zone 5 (chant ouvert) → **✎ Modifier** → éditez (ligne vide = nouvelle strophe ; `[Chœur]`, `[Strophe 2]` reconnus) → **OK** : cette version devient la version utilisée (mémorisée sur l'appareil).

## 7. Ajouter (zone 7)
Bouton **＋** (en-tête zone 4) → **1. chant · 2. Bible (JSON) · 3. brochure** (traduction, identifiant, titre, paragraphes « n°. texte »). Classé immédiatement dans sa famille.

## 8. Deux écrans physiquement
Branchez le projecteur (Windows : **Win+P → Étendre**). Ouvrez la fenêtre publique sur le 2ᵉ écran ; la zone 3 reflète exactement ce qui y apparaît. L'état **PROJECTION** se mémorise ; **AFFICHAGE** reste votre commande seule.

## Dépannage
| Symptôme | Solution |
|---|---|
| Texte de brochure inaccessible | servez l'app en http (lien GitHub Pages ou `python -m http.server`) ; la 1ʳᵉ ouverture en ligne les embarque hors-ligne |
| Plus de contenu à l'écran | vérifiez **PROJECTION** active, puis **AFFICHAGE** (bascule orange) — sinon Échap a coupé l'affichage |
| Tout perdu après mise à jour | videz le cache de l'app installée et rouvrez (les embarquements se refont) |
