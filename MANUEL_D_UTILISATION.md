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

## MISE À JOUR — VERSION 3 (v3.7)
- **Ouverture** : le logo reste ~5 s avec un CERCLE qui montre l'installation réelle (Bible + chants + 1 212 brochures) → ensuite tout est DANS l'appareil, pour toujours sans internet.
- **Projection auto** : 1ʳᵉ fois, touchez **⛶ 2ᵉ écran** (autorisez « toujours » les fenêtres surgissantes) → la fenêtre part sur le projecteur en PLEIN ÉCRAN ; aux prochaines ouvertures elle repart TOUTE SEULE. Avec le logiciel Windows : automatique dès que 2 écrans sont branchés, sans aucun clic.
- **Zoom projection** : boutons **A−/A+ écran** (bas de la zone 3) = l'écriture du PUBLIC seule ; **▦ Marges** = resserrer/élargir les bords. La zone 2 ne touche que votre zone de travail.
- **Molette** : elle fait défiler vos panneaux (zones 4/5) mais ne change JAMAIS ce que l'église voit. Pour avancer la projection : flèches ↓↑ / Espace / ▲▼ (ligne par ligne) ou double-clic.
- **Brochures** : un seul mode — TEXTE CONTINU projeté (numéros § dorés) ; en zone 5, la ligne projetée est SURLIGNÉE EN JAUNE ; 1 clic sur un § = la projection saute là, double-clic = afficher.
- **⏮ Retour** (bas zone 3) : ramène la DERNIÈRE projection (écran + zone 5 exactement où on s'était arrêté).
- **Fonds** : Charbon / Noir / Nuit / Bleu (textes blancs) — le projecteur à surface blanche les rend parfaitement.
- **Écritures** : style « Capture » (versets rouges, comme vos captures) par défaut ; ＋ pour les autres (Sermon, Georgia, Calibri, Verdana).

## ZONE 7 — IMPORTER DES FICHIERS PDF / TXT / JSON (v3.10)
Bouton **＋** (en-tête zone 4) → **1. chant · 2. Bible · 3. brochure** → **📂 Lire** un fichier :
- **Chant** : TXT/PDF (1ʳᵉ ligne = titre si ligne vide après, sinon nom du fichier ; ligne vide = nouvelle strophe, `[Chœur]` reconnu) ou JSON `{titre, texte}`.
- **Bible (livre)** : JSON `{livres:[{nom,chapitres}]}` OU texte simple : `# Nom du livre` puis `Chapitre 1` puis `1. verset`, `2. verset`… (livres marqués ➕, à côté des autres).
- **Brochure** : lignes `1. texte`, `2. texte`… OU paragraphes séparés par lignes vides (numérotés seuls) ; id + titre + traduction (VGR/Shekinah) ; classée avec les autres, badge **PERSO**, mémorisée.
- **🗂️ Mes ajouts** (4ᵉ bouton) : voir · ✕ supprimer · **💾 Sauvegarder (JSON)** · 📥 Restaurer. Après suppression, rechargez l'app. Tout reste **hors-ligne** (lecteur PDF embarqué).

## INSTALLER LE LOGICIEL SUR PC — PAS À PAS DÉTAILLÉ (v3.10)
**A. Portable (3)** : téléchargez `Malachie4-Projections-3.exe` → (optionnel : copiez sur clé USB) → double-clic → si SmartScreen : *Informations complémentaires → Exécuter quand même* → ça tourne. Pour créer une icône : clic droit sur le fichier → *Créer un raccourci* → glissez sur le Bureau.
**B. Installateur (3b)** : téléchargez `…-Setup-3.exe` → double-clic → *Suivant → Installer → Terminer* → icône sur le Bureau + menu Démarrer. Désinstallation : *Paramètres → Applications*.
**C. Second écran — super efficace** : 1. HDMI → **Win+P → Étendre** (écran 1 = vous, écran 2 = public) → 2. ouvrez le logiciel (2ᵉ fenêtre **automatique**, verrouillée au premier plan) — avec la web app : **⛶ 2ᵉ écran** 1ʳᵉ fois (« toujours autoriser »), ensuite **auto + réparation auto** → 3. pilotez du 1er écran (double-clic, Échap, ↑↓, A± écran, ⏮). Couper PROJECTION ou fermer = le public **se ferme tout seul**.
