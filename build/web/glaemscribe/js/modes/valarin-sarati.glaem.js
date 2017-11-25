Glaemscribe.resource_manager.raw_modes["valarin-sarati"] = "\\**\n\nGlǽmscribe (also written Glaemscribe) is a software dedicated to\nthe transcription of texts between writing systems, and more \nspecifically dedicated to the transcription of J.R.R. Tolkien\'s \ninvented languages to some of his devised writing systems.\n\nCopyright (C) 2015 Benjamin Babut (Talagan).\n\nThis program is free software: you can redistribute it and/or modify\nit under the terms of the GNU Affero General Public License as published by\nthe Free Software Foundation, either version 3 of the License, or\nany later version.\n\nThis program is distributed in the hope that it will be useful,\nbut WITHOUT ANY WARRANTY; without even the implied warranty of\nMERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the\nGNU Affero General Public License for more details.\n\nYou should have received a copy of the GNU Affero General Public License\nalong with this program.  If not, see <http://www.gnu.org/licenses/>.\n\n**\\\n\n\\beg changelog\n  \\entry \"0.0.1\" \"Initial version\"\n  \\entry \"0.0.2\" \"Adding quotes handling\"\n  \\entry \"0.0.3\" \" Moved out space to general element\"\n\\end\n\n\\language \"Valarin\"\n\\writing  \"Sarati\"\n\\mode     \"Valarin Sarati - G*\"\n\\version  \"0.0.3\"\n\\authors  \"Talagan (Benjamin Babut), based on J.R.R. Tolkien\"\n\n\\world      arda\n\\invention  experimental\n\n\\charset  sarati_eldamar true\n\n\\outspace SARATI_SPACE\n  \n\n\\beg      preprocessor\n  \\** Work exclusively downcase **\\\n  \\downcase\n  \n  \\** Simplify trema vowels **\\\n  \\substitute ä a\n  \\substitute ë e\n  \\substitute ï i\n  \\substitute ö o\n  \\substitute ü u\n  \\substitute ÿ y\n  \n  \\** Dis-ambiguate long vowels **\\\n  \\rxsubstitute \"(ā|â|aa)\" \"á\"\n  \\rxsubstitute \"(ē|ê|ee)\" \"é\" \n  \\rxsubstitute \"(ī|î|ii)\" \"í\"\n  \\rxsubstitute \"(ō|ô|oo)\" \"ó\"\n  \\rxsubstitute \"(ū|û|uu)\" \"ú\"\n  \\rxsubstitute \"(ȳ|ŷ|yy)\" \"ý\"\n\n  \\substitute   \"ai\" \"ay\" \\** Dis-ambiguate ai **\\\n\\end\n  \n\\beg      processor\n\n  \n  \\beg rules litteral \n      \n    {A}                           === a\n    {AA}                          === á     \n    {E}                           === e\n    {EE}                          === é     \n    {I}                           === i\n    {II}                          === í     \n    {O}                           === o\n    {OO}                          === ó     \n    {U}                           === u\n    {UU}                          === ú     \n    {Y}                           === y\n    {YY}                          === ý                                        \n\n    {AE}                          === (æ,ae)\n    {AEAE}                        === (ǽ,ǣ)\n\n    {OE}                          === ǫ\n    {OEOE}                        === ǭ\n\n    \\** ################################################# **\\\n    \\**  DIPHTHONGS are dis-ambiguated in the preprocessor # **\\\n    \\** ################################################# **\\\n\n    \\** ############# **\\\n    \\**  DIACRITICS # **\\\n    \\** ############# **\\\n\n    {VOWELS}                      === {A}                 * {E}                   * {I}                 * {O}                 * {U}                 * {AE}                            * {OE}    \n    {LVOWELS}                     === {AA}                * {EE}                  * {II}                * {OO}                * {UU}                * {AEAE}                          * {OEOE}  \n    {STEHTAS}                     === SARATI_QUENYA_A     * SARATI_QUENYA_E       * SARATI_QUENYA_I     * SARATI_QUENYA_O     * SARATI_QUENYA_U     * SARATI_QUENYA_A_REVERSED        * SARATI_DIACRITIC_CIRCLE       \n\n    {V_L_KER_WN}                  === [ {VOWELS}  * {NULL} ]\n    {V_IMG_FOR_CONSONNANTS_WN}    === [ {STEHTAS} * {NULL} ]  \\** # No vowel == nothing **\\\n\n    \\** ######## **\\\n    \\**  RULES # **\\\n    \\** ######## **\\\n\n    [{VOWELS}]      -->   [{STEHTAS}] SARATI_QUENYA_LONG_VOWEL_CARRIER    \\** # Isolated vowels : use short carrier (reversed order RTL) **\\\n    [{LVOWELS}]     -->   [{STEHTAS}] SARATI_DASH_U SARATI_QUENYA_LONG_VOWEL_CARRIER   \\** # Long vowels: carrier + dash + tehta **\\\n\n    \\** ########### **\\\n    \\**  FIRST LINE **\\\n\n    {K}   === (c,k) \\** # For tolkienian compatibility\'s sake **\\\n\n    {LINE_1ST_KER}        === t         * p         * {K}               \\** # * tt * pp * {K}{K}   **\\\n    {LINE_1ST_IMG}        === SARATI_T  * SARATI_P  * SARATI_QUENYA_C                 \\** # * ó\" * óq * ó# **\\\n\n    {V_L_KER_WN}[{LINE_1ST_KER}]  --> {V_IMG_FOR_CONSONNANTS_WN}[{LINE_1ST_IMG}]\n\n    \\** ########### **\\\n    \\**  SECOND LINE **\\\n\n    {LINE_2ND_KER}        === d                 * b                 * g         * gw \n    {LINE_2ND_IMG}        === SARATI_QUENYA_ND  * SARATI_QUENYA_MB  * SARATI_NG * SARATI_PHONETIC_GW\n\n    {V_L_KER_WN}[{LINE_2ND_KER}] --> {V_IMG_FOR_CONSONNANTS_WN}[{LINE_2ND_IMG}]\n\n    \\** ########### **\\\n    \\**  THIRD LINE **\\\n\n    {LINE_3RD_KER}        ===   þ                 * s               * š                                                   * (χ,x)                             * h         * šš \\** # * s_ **\\\n    {LINE_3RD_IMG}        ===   SARATI_QUENYA_NT  * SARATI_QUENYA_S * SARATI_VOICELESS_PALATO_ALVEOLAR_SIBILANT_FRICATIVE * SARATI_VOICELESS_VELAR_FRICATIVE  * SARATI_H  * SARATI_DASH_D SARATI_VOICELESS_PALATO_ALVEOLAR_SIBILANT_FRICATIVE \\** # * ü **\\\n\n    {V_L_KER_WN}[{LINE_3RD_KER}] --> {V_IMG_FOR_CONSONNANTS_WN}[{LINE_3RD_IMG}]\n\n    \\** ########### **\\\n    \\**  FOURTH LINE **\\\n\n    {LINE_4TH_KER}        ===   ð                               * z                       * ȝ \\** # * z_  **\\\n    {LINE_4TH_IMG}        ===   SARATI_VOICED_DENTAL_FRICATIVE  * SARATI_QUENYA_SS_ALT_1  * SARATI_VOICED_VELAR_FRICATIVE \\** # * ú **\\\n\n    {V_L_KER_WN}[{LINE_4TH_KER}] --> {V_IMG_FOR_CONSONNANTS_WN}[{LINE_4TH_IMG}]\n\n    \\** ########### **\\\n    \\**  FIFTH LINE **\\\n\n    {LINE_5TH_KER}        ===   m         * n\n    {LINE_5TH_IMG}        ===   SARATI_M  * SARATI_N\n\n    {V_L_KER_WN}[{LINE_5TH_KER}] --> {V_IMG_FOR_CONSONNANTS_WN}[{LINE_5TH_IMG}]\n\n    \\** ########### **\\\n    \\**  SIXTH LINE **\\\n\n    {LINE_6TH_KER}        === l * ll  \n    {LINE_6TH_IMG}        === SARATI_L * SARATI_DASH_D SARATI_L \n\n    {V_L_KER_WN}[{LINE_6TH_KER}] --> {V_IMG_FOR_CONSONNANTS_WN}[{LINE_6TH_IMG}]\n\n    \\** ########### **\\\n    \\**  SEVENTH LINE **\\\n\n    {LINE_7TH_KER}        === r * rr  \n    {LINE_7TH_IMG}        === SARATI_R * SARATI_DASH_D SARATI_R  \n\n    {V_L_KER_WN}[{LINE_7TH_KER}] --> {V_IMG_FOR_CONSONNANTS_WN}[{LINE_7TH_IMG}]\n\n    \\** ########### **\\\n    \\**  EIGHTH LINE **\\\n\n    {LINE_8TH_KER}        === y * w   \n    {LINE_8TH_IMG}        === SARATI_QUENYA_Y * SARATI_W  \n\n    {V_L_KER_WN}[{LINE_8TH_KER}] --> {V_IMG_FOR_CONSONNANTS_WN}[{LINE_8TH_IMG}]\n  \\end\n    \n  \\beg rules punctuation\n    · --> {NULL}\n    , --> {NULL}\n    ; --> {NULL}\n    : --> {NULL}\n    . --> SARATI_SPACE\n    - --> SARATI_SPACE\n    – --> SARATI_SPACE\n    ! --> {NULL}\n    ? --> {NULL}\n    \' --> {NULL}\n    [ --> {NULL}\n    ] --> {NULL}\n    ‘ --> {NULL}\n    ’ --> {NULL}\n    “ --> {NULL}\n    ” --> {NULL}\n    « --> {NULL}\n    » --> {NULL}\n  \\end \n\\end \n\n\\beg postprocessor\n  \\reverse\n\\end\n\n\n\\** # Voyelles : a æ e i o ǫ u / ǭ Ǭ **\\\n\\** # Diphtongues : ai **\\\n\\** # **\\\n\\** # Occlusives aspirées   ph th .  .  .  kh .  **\\\n\\** # Occlusives sourdes    p  t  .  .  .  k  .  **\\\n\\** # Occlusives sonores    b  d  .  .  .  g  .  **\\\n\\** # Fricatives sourdes    .  þ  s  š  .  χ  h  **\\\n\\** # Fricatives sonores    .  ð  z  .  .  ȝ  .  **\\\n\\** # Nasales               m  n  .  .  .  .  .  **\\\n\\** # Latérales             .  l  .  .  .  .  .  **\\\n\\** # Vibrantes             .  r  .  .  .  .  .  **\\\n\\** # Semi-voyelles         w  .  .  .  y  .  .  **\\\n\n\n      \n\n"