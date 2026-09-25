# 📖 CONCORDANCE BIBLE ↔ BROCHURES — méthode + chiffres (25/09/2026)

## Méthode (reproductible, prudente)
- 240 789 § passés au crible, accents repliés, **mots entiers**, 66 livres + 128 alias
  (Gen, Ex, Mat, Jn, Cor, Apo…). Motif : `LIVRE chap[:.,vers[-vers]]`.
- Chapitre ≤ 150, verset ≤ 176 (filtre anti-bruit). Exige le NOM du livre → précision haute.
- Limites honnêtes : « verset 16 » seul (sans livre) NON résolu ; chiffres romains NON ;
  « 1 Jean 1-3 » lu comme chapitre+verset (ambigu, rare). Texte récité sans référence =
  chantier 2 (reconnaissance par le texte, autre IA).

## Chiffres
- Références brutes : **9744** → uniques : **8969** → versets distincts : **1198**.
- Prédications avec refs : **1369** / 1 595.
- Q&R + COD : **41 prédications = 853 refs** — réservoir dense (voir Concordance-QR-LISTE.txt).

## TOP 20 versets (citations §)
  Malachie 4:0 -> 428 §
  Hebreux 13:8 -> 375 §
  Marc 16:0 -> 325 §
  Jean 5:19 -> 319 §
  Jean 14:12 -> 229 §
  Jean 4:0 -> 156 §
  Ephesiens 4:30 -> 144 §
  Jean 5:24 -> 137 §
  Malachie 3:0 -> 129 §
  Actes 19:0 -> 127 §
  Actes 2:38 -> 125 §
  Matthieu 24:0 -> 118 §
  Apocalypse 17:0 -> 111 §
  Actes 2:0 -> 106 §
  Jean 1:0 -> 105 §
  Jean 14:0 -> 99 §
  Jean 5:0 -> 96 §
  Matthieu 28:19 -> 89 §
  Apocalypse 10:0 -> 87 §
  Galates 1:8 -> 82 §
(:0 = chapitre cité sans verset, ex. « Malachie 4 ».)

## Fichiers
- `Concordance-VERSET-PARAGRAPHE.csv` : livre;chapitre;verset_de;verset_a;traduction;code;paragraphe.
- `Concordance-QR-LISTE.txt` : les Q&R triées par densité de refs (COD en premier).
- Sens inverse (citation→verset) : filtrer le CSV par code+§.

## Validation (25/09/2026) — Message Hub + COD
- Message Hub : API web = métadonnées seules (72 langues) ; contenus non exposés. Validation faite sur nos textes VGR+Shekinah (sources identiques), + échantillon.
- Moteur : fenêtre ±2 § autour de chaque annonce × mots distinctifs du verset (Darby 31 104 versets, stopwords FR retirés). Seuil ≥3 mots (ou tout le verset si court).
- Verdicts sur 8 969 : VALIDE 7 918 (88,3 %) · INACHEVÉ 651 · CHAPITRE-SEUL 229 · ABSENT-BIBLE 91 (+ hypothèses vérifiées : « 1 Jean 16:7 »→Jean 16:7, « Joël 2:38 »→Actes 2:38, « Actes 10:49 »→Actes 10:44/46/48 systématique, « Éph 1:25 »→Col 1:25, « 1 Cor 13:14 »→13:13) · REJETÉ 56 · CONFONDU 24 (3 confirmés ×2 trads : 65-1206 Zach 13:7/És 7:14, 65-1031M Gen 4:6/Héb 10:26, 65-0221E Ex 33:2/Héb 7:2 ; autres = listings, à vérifier).
- CONTEXTE : 43 043 occurrences (verset parlé sans annonce, ≥2-3 mots distinctifs, top : voir PDF §9).
- COD/Q&R : 784 refs (VALIDE 676, INACHEVÉ 67, ABSENTS 18, CHAP-SEUL 17, REJETÉ 4, CONFONDU 2) + 998 marqueurs questions + écritures rattachées (à relire).
- Fichiers appli : VALIDATION-refs.csv/json (verdict 1..6), VALIDATION-contexte.csv, VALIDATION-confusions.csv, VALIDATION-inacheves.csv, VALIDATION-absents-hypotheses.csv, COD-questions-ecritures.csv, VALIDITE-CITATIONS-MessageHub-COD.pdf.
