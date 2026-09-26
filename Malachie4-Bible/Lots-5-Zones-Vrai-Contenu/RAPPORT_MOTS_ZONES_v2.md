# 📊 Rapport — 5 zones v2 (complètes) : nombre de mots et limites NotebookLM

*Généré le 26/09/2026. Mots comptés comme NotebookLM (séparés par des espaces).*

## Limites NotebookLM (2026) — « jusqu'où on peut aller »

| Limite | Gratuit | Plus | Pro |
|---|---|---|---|
| **Mots par source (fichier)** | **500 000** | 500 000 | 500 000 |
| Taille par fichier | 200 Mo | 200 Mo | 200 Mo |
| Sources par carnet | **50** | 100 | 300 |
| Carnets | 100 | 200 | 500 |

➡️ **Règle appliquée : aucun fichier ne dépasse 450 000 mots** (marge de sécurité de 10 %). Le plus gros fait 449 623 mots.
➡️ La zone la plus chargée (zone 5) a 22 fichiers : ça passe dans un carnet **gratuit** (50 sources max).

## Totaux

| | Valeur |
|---|---|
| Prédications (codes uniques) | **1 212** (1 206 avant + 6 réintégrées) |
| Textes Shekinah | **1 210** |
| Textes VGR | **385** (160 avant) |
| Textes au total | **1 595** |
| Mots des brochures (les 5 zones) | **25 991 716** |
| Bible LSG complète | **792 162 mots** — 31 102 versets (copiée dans chaque zone) |
| Total des 5 zones avec 5 Bibles | 29 951 436 mots |

## Par zone

| Zone | Période | Fichiers (sources) | Prédications | SHK | VGR | Mots brochures | Mots avec Bible | Plus gros fichier |
|---|---|---|---|---|---|---|---|---|
| **ZONE_1** | 12 avr. 1947 → 10 août 1954 | 12 (3 Bible + 9) | 241 | 241 | 24 | 3 594 200 | 4 386 144 | 446 926 |
| **ZONE_2** | 11 août 1954 → 19 mai 1957, après-midi | 13 (3 Bible + 10) | 241 | 240 | 51 | 4 324 604 | 5 116 548 | 449 484 |
| **ZONE_3** | 19 mai 1957, soir → 29 mars 1960 | 13 (3 Bible + 10) | 241 | 241 | 65 | 4 171 804 | 4 963 748 | 449 623 |
| **ZONE_4** | 30 mars 1960 → 14 oct. 1962, soir | 17 (3 Bible + 14) | 245 | 245 | 70 | 6 045 812 | 6 837 756 | 446 235 |
| **ZONE_5** | 14 oct. 1962, matin → 12 déc. 1965 | 22 (3 Bible + 19) | 244 | 243 | 175 | 7 855 296 | 8 647 240 | 447 106 |

## La Bible dans chaque zone (complète, découpée pour tenir sous 500 000 mots)

| Fichier | Livres | Versets | Mots |
|---|---|---|---|
| `00_BIBLE_AT_partie1_Genese_a_1-Chroniques.txt` | Genèse → 1 Chroniques (AT partie 1) | 11 195 | 303 123 |
| `01_BIBLE_AT_partie2_2-Chroniques_a_Malachie.txt` | 2 Chroniques → Malachie (AT partie 2) | 11 950 | 297 627 |
| `02_BIBLE_NT_Matthieu_a_Apocalypse.txt` | Matthieu → Apocalypse | 7 957 | 191 194 |
| **Total** | 66 livres | **31 102** | **792 162** |

L'Ancien Testament entier fait 601 218 mots, **plus que la limite de 500 000**. Il est donc coupé en 2 parties, à la fin d'un livre (1 Chroniques | 2 Chroniques). Rien ne manque : les 3 fichiers réunis sont identiques, mot pour mot, à la Bible originale.

## Détail fichier par fichier

### ZONE_1

| Fichier | Prédications | SHK | VGR | Mots | % de la limite |
|---|---|---|---|---|---|
| `00_BIBLE_AT_partie1_Genese_a_1-Chroniques.txt` | — | — | — | 303 123 | 60 % |
| `01_BIBLE_AT_partie2_2-Chroniques_a_Malachie.txt` | — | — | — | 297 627 | 59 % |
| `02_BIBLE_NT_Matthieu_a_Apocalypse.txt` | — | — | — | 191 194 | 38 % |
| `03_47-0412_a_50-0819_35x.txt` | 35 | 35 | 3 | 426 119 | 85 % |
| `04_50-0820A_a_51-0729A_32x.txt` | 32 | 32 | 1 | 442 982 | 88 % |
| `05_51-0729E_a_52-0817E_26x.txt` | 26 | 26 | 2 | 428 061 | 85 % |
| `06_52-0900_a_53-0607E_36x.txt` | 36 | 36 | 4 | 438 738 | 87 % |
| `07_53-0608A_a_53-1106_30x.txt` | 30 | 30 | 3 | 446 926 | 89 % |
| `08_53-1107A_a_54-0103E_28x.txt` | 28 | 28 | 1 | 439 527 | 87 % |
| `09_54-0103M_a_54-0403_25x.txt` | 25 | 25 | 3 | 429 476 | 85 % |
| `10_54-0404E_a_54-0720E_19x.txt` | 19 | 19 | 7 | 444 397 | 88 % |
| `11_54-0721_a_54-0810_10x.txt` | 10 | 10 | — | 97 974 | 19 % |

### ZONE_2

| Fichier | Prédications | SHK | VGR | Mots | % de la limite |
|---|---|---|---|---|---|
| `00_BIBLE_AT_partie1_Genese_a_1-Chroniques.txt` | — | — | — | 303 123 | 60 % |
| `01_BIBLE_AT_partie2_2-Chroniques_a_Malachie.txt` | — | — | — | 297 627 | 59 % |
| `02_BIBLE_NT_Matthieu_a_Apocalypse.txt` | — | — | — | 191 194 | 38 % |
| `03_54-0811_a_54-1219E_22x.txt` | 22 | 22 | 6 | 408 301 | 81 % |
| `04_54-1219M_a_55-0227E_26x.txt` | 26 | 26 | 5 | 440 069 | 88 % |
| `05_55-0228_a_55-0620_24x.txt` | 24 | 24 | 5 | 447 093 | 89 % |
| `06_55-0621_a_55-1009_30x.txt` | 30 | 30 | 5 | 443 682 | 88 % |
| `07_55-1110_a_56-0218E_22x.txt` | 22 | 22 | 3 | 446 303 | 89 % |
| `08_56-0218M_a_56-0429_27x.txt` | 27 | 27 | 2 | 448 064 | 89 % |
| `09_56-0513_a_56-0805_19x.txt` | 19 | 19 | 9 | 449 484 | 89 % |
| `10_56-0814_a_56-1215_23x.txt` | 23 | 23 | 5 | 436 911 | 87 % |
| `11_56-1230_a_57-0309E_26x.txt` | 26 | 26 | 3 | 444 606 | 88 % |
| `12_57-0310A_a_57-0519A_22x.txt` | 22 | 21 | 8 | 360 091 | 72 % |

### ZONE_3

| Fichier | Prédications | SHK | VGR | Mots | % de la limite |
|---|---|---|---|---|---|
| `00_BIBLE_AT_partie1_Genese_a_1-Chroniques.txt` | — | — | — | 303 123 | 60 % |
| `01_BIBLE_AT_partie2_2-Chroniques_a_Malachie.txt` | — | — | — | 297 627 | 59 % |
| `02_BIBLE_NT_Matthieu_a_Apocalypse.txt` | — | — | — | 191 194 | 38 % |
| `03_57-0519E_a_57-0828_29x.txt` | 29 | 29 | 5 | 422 436 | 84 % |
| `04_57-0901E_a_57-1212_14x.txt` | 14 | 14 | 11 | 449 623 | 89 % |
| `05_57-1213_a_58-0309M_30x.txt` | 30 | 30 | 5 | 434 635 | 86 % |
| `06_58-0312_a_58-0529_33x.txt` | 33 | 33 | 1 | 446 300 | 89 % |
| `07_58-0530_a_58-1005E_22x.txt` | 22 | 22 | 7 | 441 532 | 88 % |
| `08_58-1005M_a_59-0412E_28x.txt` | 28 | 28 | 12 | 439 711 | 87 % |
| `09_59-0414_a_59-0702_24x.txt` | 24 | 24 | 8 | 440 975 | 88 % |
| `10_59-0706_a_59-1127_27x.txt` | 27 | 27 | 6 | 444 779 | 88 % |
| `11_59-1128_a_60-0301_20x.txt` | 20 | 20 | 8 | 445 357 | 89 % |
| `12_60-0302_a_60-0329_14x.txt` | 14 | 14 | 2 | 206 456 | 41 % |

### ZONE_4

| Fichier | Prédications | SHK | VGR | Mots | % de la limite |
|---|---|---|---|---|---|
| `00_BIBLE_AT_partie1_Genese_a_1-Chroniques.txt` | — | — | — | 303 123 | 60 % |
| `01_BIBLE_AT_partie2_2-Chroniques_a_Malachie.txt` | — | — | — | 297 627 | 59 % |
| `02_BIBLE_NT_Matthieu_a_Apocalypse.txt` | — | — | — | 191 194 | 38 % |
| `03_60-0330_a_60-0609_18x.txt` | 18 | 18 | 9 | 437 586 | 87 % |
| `04_60-0610_a_60-0803_22x.txt` | 22 | 22 | 1 | 431 979 | 86 % |
| `05_60-0804_a_60-1204M_18x.txt` | 18 | 18 | 7 | 425 482 | 85 % |
| `06_60-1205_a_60-1218_9x.txt` | 9 | 9 | 9 | 437 986 | 87 % |
| `07_60-1225_a_61-0128_15x.txt` | 15 | 15 | 6 | 441 718 | 88 % |
| `08_61-0129_a_61-0315_24x.txt` | 24 | 24 | 1 | 446 235 | 89 % |
| `09_61-0316_a_61-0429B_22x.txt` | 22 | 22 | 2 | 437 309 | 87 % |
| `10_61-0429E_a_61-0806_16x.txt` | 16 | 16 | 7 | 418 445 | 83 % |
| `11_61-0808_a_61-1231E_15x.txt` | 15 | 15 | 7 | 440 350 | 88 % |
| `12_61-1231M_a_62-0218_17x.txt` | 17 | 17 | 5 | 445 737 | 89 % |
| `13_62-0311_a_62-0513E_11x.txt` | 11 | 11 | 5 | 421 887 | 84 % |
| `14_62-0513M_a_62-0612_17x.txt` | 17 | 17 | 5 | 433 515 | 86 % |
| `15_62-0620_a_62-0719B_25x.txt` | 25 | 25 | — | 432 071 | 86 % |
| `16_62-0719E_a_62-1014E_16x.txt` | 16 | 16 | 6 | 395 512 | 79 % |

### ZONE_5

| Fichier | Prédications | SHK | VGR | Mots | % de la limite |
|---|---|---|---|---|---|
| `00_BIBLE_AT_partie1_Genese_a_1-Chroniques.txt` | — | — | — | 303 123 | 60 % |
| `01_BIBLE_AT_partie2_2-Chroniques_a_Malachie.txt` | — | — | — | 297 627 | 59 % |
| `02_BIBLE_NT_Matthieu_a_Apocalypse.txt` | — | — | — | 191 194 | 38 % |
| `03_62-1014M_a_62-1230E_16x.txt` | 16 | 16 | 8 | 437 184 | 87 % |
| `04_62-1230M_a_63-0121_14x.txt` | 14 | 14 | 10 | 417 637 | 83 % |
| `05_63-0122_a_63-0320_11x.txt` | 11 | 11 | 9 | 435 254 | 87 % |
| `06_63-0321_a_63-0605_12x.txt` | 12 | 12 | 7 | 446 639 | 89 % |
| `07_63-0606_a_63-0707E_13x.txt` | 13 | 12 | 7 | 403 775 | 80 % |
| `08_63-0707M_a_63-0804E_14x.txt` | 14 | 14 | 8 | 436 234 | 87 % |
| `09_63-0818_a_63-1114_12x.txt` | 12 | 12 | 9 | 447 106 | 89 % |
| `10_63-1115_a_63-1222_19x.txt` | 19 | 19 | 7 | 435 849 | 87 % |
| `11_63-1226_a_64-0209_16x.txt` | 16 | 16 | 10 | 444 269 | 88 % |
| `12_64-0212_a_64-0319_17x.txt` | 17 | 17 | 12 | 446 915 | 89 % |
| `13_64-0320_a_64-0416_15x.txt` | 15 | 15 | 12 | 438 315 | 87 % |
| `14_64-0417_a_64-0621_15x.txt` | 15 | 15 | 11 | 445 887 | 89 % |
| `15_64-0629_a_64-0823E_10x.txt` | 10 | 10 | 10 | 416 569 | 83 % |
| `16_64-0823M_a_65-0119_11x.txt` | 11 | 11 | 8 | 424 089 | 84 % |
| `17_65-0120_a_65-0410_13x.txt` | 13 | 13 | 12 | 420 616 | 84 % |
| `18_65-0418E_a_65-0725E_13x.txt` | 13 | 13 | 12 | 422 404 | 84 % |
| `19_65-0725M_a_65-1031A_10x.txt` | 10 | 10 | 10 | 409 610 | 81 % |
| `20_65-1031M_a_65-1205_10x.txt` | 10 | 10 | 10 | 422 556 | 84 % |
| `21_65-1206_a_65-1212_3x.txt` | 3 | 3 | 3 | 104 388 | 20 % |

## Les 6 prédications réintégrées

| Code | Date | Titre | Zone / fichier | Traductions |
|---|---|---|---|---|
| `60-1218` | 18 déc. 1960 | Le son confus | ZONE_4 / `06_60-1205_a_60-1218_9x.txt` | Shekinah + VGR |
| `61-0112` | 12 janv. 1961 | Questions et réponses | ZONE_4 / `07_60-1225_a_61-0128_15x.txt` | Shekinah + VGR |
| `62-0401` | 1 avr. 1962 | La Sagesse contre La Foi | ZONE_4 / `13_62-0311_a_62-0513E_11x.txt` | Shekinah |
| `62-0422` | 22 avr. 1962 | La restauration de l’Arbre-Épouse | ZONE_4 / `13_62-0311_a_62-0513E_11x.txt` | Shekinah + VGR |
| `63-0728` | 28 juil. 1963 | Christ est le mystère de Dieu révélé | ZONE_5 / `08_63-0707M_a_63-0804E_14x.txt` | Shekinah + VGR |
| `64-0830M` | 30 août 1964, matin | Questions et réponses #3 | ZONE_5 / `16_64-0823M_a_65-0119_11x.txt` | Shekinah + VGR |
