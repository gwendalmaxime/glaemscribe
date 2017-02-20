Glaemscribe.resource_manager.raw_modes["quenya-sarati"] = "\\**\n\nGlǽmscribe (also written Glaemscribe) is a software dedicated to\nthe transcription of texts between writing systems, and more \nspecifically dedicated to the transcription of J.R.R. Tolkien\'s \ninvented languages to some of his devised writing systems.\n\nCopyright (C) 2015 Benjamin Babut (Talagan).\n\nThis program is free software: you can redistribute it and/or modify\nit under the terms of the GNU Affero General Public License as published by\nthe Free Software Foundation, either version 3 of the License, or\nany later version.\n\nThis program is distributed in the hope that it will be useful,\nbut WITHOUT ANY WARRANTY; without even the implied warranty of\nMERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the\nGNU Affero General Public License for more details.\n\nYou should have received a copy of the GNU Affero General Public License\nalong with this program.  If not, see <http://www.gnu.org/licenses/>.\n\n**\\\n\n\\** Changelog **\\\n\\**\n\\beg changelog\n  \\entry \"0.0.2\", \"Moved outspace character to general element\"\n\\end\n**\\\n\n\\language \"Quenya\"\n\\writing  \"Sarati\"\n\\mode     \"Quenya Usage\"\n\\version  \"0.0.1\"\n\\authors  \"J.R.R. Tolkien, impl. Talagan (Benjamin Babut)\"\n\n\\charset  sarati_eldamar true\n\n\\outspace SARATI_SPACE\n\n\\beg      preprocessor\n  \\** Work exclusively downcase **\\\n  \\downcase\n  \n  \\** Simplify trema vowels **\\\n  \\** Removed ï and ü, not quite sure how to treat them for qenya : ex : oïkta diphthong or not ?  **\\\n  \\substitute ä a\n  \\substitute ë e\n  \\substitute ö o\n  \\substitute ÿ y\n  \n  \\** Dis-ambiguate long vowels **\\\n  \\rxsubstitute \"(ā|â|aa)\"          \"á\"\n  \\rxsubstitute \"(ē|ê)\"             \"é\" \\** ee is allowed in qenya **\\\n  \\rxsubstitute \"(ī|î|iï|ïi|ïï|ii)\" \"í\"\n  \\rxsubstitute \"(ō|ô|oo)\"          \"ó\"\n  \\rxsubstitute \"(ū|û|uü|üu|üü|uu)\" \"ú\"\n  \\rxsubstitute \"(ȳ|ŷ|yy)\"          \"ý\"\n\n  \\substitute   \"iu\" \"iw\"\n  \\substitute   \"eu\" \"ew\"\n  \\substitute   \"au\" \"aw\"\n  \\substitute   \"ai\" \"ay\"\n  \\substitute   \"oi\" \"oy\"\n  \\substitute   \"ui\" \"uy\"\n\n  \\** Split long a  **\\\n  \\substitute   \"á\" \"aa\" \n\n  \\** Dis-ambiguate qu **\\\n  \\substitute   \"qu\" \"q\" \n\\end\n\n\\beg      processor\n\n  \n  \\beg    rules litteral \n    {A}                           === a\n    {AA}                          === aa     \n    {E}                           === e\n    {EE}                          === é     \n    {I}                           === (i,ï) \n    {II}                          === í     \n    {O}                           === o \n    {OO}                          === ó     \n    {U}                           === (u,ü) \n    {UU}                          === ú     \n                                      \n    {K}                           === (c,k)\n    {MB}                          === (b,mb)\n    {SS}                          === (z,ss)\n\n    {VOWELS}                      === {A}                             * {E}                           * {I}                             * {O}                             * {U}\n    {LVOWELS}                     === {AA}                            * {EE}                          * {II}                            * {OO}                            * {UU}\n    {TEHTAS_}                     === SARATI_QUENYA_A                 * SARATI_QUENYA_E               * SARATI_QUENYA_I                 * SARATI_QUENYA_O                 * SARATI_QUENYA_U \n    {STEHTAS}                     === {NULL}                          * SARATI_QUENYA_E               * SARATI_QUENYA_I                 * SARATI_QUENYA_O                 * SARATI_QUENYA_U \n    {LTEHTAS}                     === SARATI_QUENYA_A SARATI_DASH_U   * SARATI_QUENYA_E SARATI_DASH_U * SARATI_QUENYA_I SARATI_DASH_U   * SARATI_QUENYA_O SARATI_DASH_U   * SARATI_QUENYA_U SARATI_DASH_U \n    {LTEHTAS_FOR_CONSONANTS}      === SARATI_QUENYA_A                 * SARATI_QUENYA_E SARATI_DASH_U * SARATI_QUENYA_I SARATI_DASH_U   * SARATI_QUENYA_O SARATI_DASH_U   * SARATI_QUENYA_U SARATI_DASH_U\n\n    {V_L_KER_WN}                  === [ {VOWELS}  * {LVOWELS}                 * {NULL} ]\n    {V_IMG_FOR_CONSONNANTS_WN}    === [ {STEHTAS} * {LTEHTAS_FOR_CONSONANTS}  * SARATI_DOT_D ] \\** No vowel == dot below **\\\n\n    \\**  RULES   **\\\n\n    [{VOWELS}]            -->   [{TEHTAS_}] SARATI_QUENYA_LONG_VOWEL_CARRIER  \\** Isolated vowels : use short carrier (reversed order RTL) **\\\n    [{LVOWELS}]           -->   [{LTEHTAS}] SARATI_QUENYA_LONG_VOWEL_CARRIER  \\** Long vowels: carrier + dash + tehta **\\\n\n    \\**  FIRST LINE **\\\n\n    {L1_KER}              === t         * p         * {K}             * q                 * tt                      * pp                      * {K}{K}  \n    {L1_IMG}              === SARATI_T  * SARATI_P  * SARATI_QUENYA_C * SARATI_QUENYA_QU  * SARATI_DASH_D SARATI_T  * SARATI_DASH_D SARATI_P  * SARATI_DASH_D SARATI_QUENYA_C \n\n    [{L1_KER}]{V_L_KER_WN}    --> 2,1 --> {V_IMG_FOR_CONSONNANTS_WN}[{L1_IMG}]\n\n    ty{V_L_KER_WN}            --> {V_IMG_FOR_CONSONNANTS_WN} SARATI_QUENYA_TY\n    ts{V_L_KER_WN}            --> {V_IMG_FOR_CONSONNANTS_WN} SARATI_QUENYA_TS\n\n    \\** Missing py, ps? **\\\n\n    \\**  SECOND LINE **\\\n\n    {L2_KER}        === nd                * {MB}              * ng        * ngw\n    {L2_IMG}        === SARATI_QUENYA_ND  * SARATI_QUENYA_MB  * SARATI_NG * SARATI_QUENYA_NGW\n\n    [{L2_KER}]{V_L_KER_WN}    --> 2,1 --> {V_IMG_FOR_CONSONNANTS_WN}[{L2_IMG}]\n\n    ndy{V_L_KER_WN}           --> {V_IMG_FOR_CONSONNANTS_WN} SARATI_QUENYA_NDY\n\n    \\** ########### **\\\n    \\**  THIRD LINE **\\\n\n    {L3_KER}        === th                * f                   * h         *  hw\n    {L3_IMG}        === SARATI_QUENYA_S   * SARATI_QUENYA_F_ALT * SARATI_H  *  SARATI_QUENYA_HW\n\n    [{L3_KER}]{V_L_KER_WN}    --> 2,1 --> {V_IMG_FOR_CONSONNANTS_WN}[{L3_IMG}]\n\n    hy{V_L_KER_WN}            --> {V_IMG_FOR_CONSONNANTS_WN} SARATI_QUENYA_HY\n\n    \\** # The two following are not treated the same way in tengwar **\\\n    ht{V_L_KER_WN}            --> {V_IMG_FOR_CONSONNANTS_WN} SARATI_QUENYA_HT_ALT_1\n    hty{V_L_KER_WN}           --> {V_IMG_FOR_CONSONNANTS_WN} SARATI_QUENYA_HTY\n\n    \\** ########### **\\\n    \\**  FOURTH LINE **\\\n\n    {LINE_4TH_KER}        === nt                * mp                * nc                * nq \\** # Not nqu, due to preprocessor **\\\n    {LINE_4TH_IMG}        === SARATI_QUENYA_NT  * SARATI_QUENYA_MP  * SARATI_QUENYA_NC  * SARATI_QUENYA_NQU\n    \n    [{LINE_4TH_KER}]{V_L_KER_WN}  --> 2,1 --> {V_IMG_FOR_CONSONNANTS_WN}[{LINE_4TH_IMG}]\n    nty{V_L_KER_WN}               --> {V_IMG_FOR_CONSONNANTS_WN} SARATI_QUENYA_NTY\n\n    \\** ########### **\\\n    \\**  FIFTH LINE **\\\n\n    {LINE_5TH_KER}        === n         * m         * ñ                         * ñw                * _nw                 * nn                      * mm\n    {LINE_5TH_IMG}        === SARATI_N  * SARATI_M  * SARATI_QUENYA_VELAR_NASAL * SARATI_QUENYA_NW  * SARATI_QUENYA_NW    * SARATI_DASH_D SARATI_N  * SARATI_DASH_D SARATI_M\n\n    [{LINE_5TH_KER}]{V_L_KER_WN}  --> 2,1 --> {V_IMG_FOR_CONSONNANTS_WN}[{LINE_5TH_IMG}]\n    ny{V_L_KER_WN}                -->  {V_IMG_FOR_CONSONNANTS_WN} SARATI_QUENYA_NY\n\n    \\** Missing my ? **\\\n\n    \\** ########### **\\\n    \\**  SIXTH LINE **\\\n\n    {LINE_6TH_KER}                === r        * v                    * y               * w         * rr  \n    {LINE_6TH_IMG}                === SARATI_R * SARATI_QUENYA_V_ALT  * SARATI_QUENYA_Y * SARATI_W  * SARATI_DASH_D SARATI_R \n\n    [{LINE_6TH_KER}]{V_L_KER_WN}  --> 2,1 --> {V_IMG_FOR_CONSONNANTS_WN}[{LINE_6TH_IMG}]\n\n    \\** Weak r is not distinguished **\\\n    \\** Missing ry? rd?  **\\\n\n    \\** ########### **\\\n    \\**  L Line **\\\n\n    {LINE_L_KER}                === l         * ll                      * d\n    {LINE_L_IMG}                === SARATI_L  * SARATI_DASH_D SARATI_L  * SARATI_D\n\n    [{LINE_L_KER}]{V_L_KER_WN}  --> 2,1 --> {V_IMG_FOR_CONSONNANTS_WN}[{LINE_L_IMG}]\n\n    \\**  Missing ld, ly, hl, hr ? **\\\n\n    \\** ########### **\\\n    \\**  S/Z line **\\\n\n    \\** st v **\\\n    \\** sty … **\\\n    \\** ss ¦ ou w ou i  **\\\n\n    \\**  For s, use the same sarat as for th **\\\n\n    {LINE_8TH_KER}        === s                 * {SS}   \n    {LINE_8TH_IMG}        === SARATI_QUENYA_S   * SARATI_QUENYA_SS_ALT_1 \n\n    [{LINE_8TH_KER}]{V_L_KER_WN} --> 2,1 --> {V_IMG_FOR_CONSONNANTS_WN}[{LINE_8TH_IMG}]\n\n    {LINE_8PTH_KER}        === st                 * sty\n    {LINE_8PTH_IMG}        === SARATI_QUENYA_ST   * SARATI_QUENYA_STY \n\n    [{LINE_8PTH_KER}]{V_L_KER_WN} --> 2,1 --> {V_IMG_FOR_CONSONNANTS_WN}[{LINE_8PTH_IMG}]\n\n    \\**  Override lonely s / ss / before consonant: TODO!!!! **\\\n    \\**  s      -> 8  **\\\n    \\**  {SS}     -> ,  **\\\n\n    \\** ############ **\\\n    \\**  OTHERS **\\\n\n    x {V_L_KER_WN}   --> {V_IMG_FOR_CONSONNANTS_WN} SARATI_QUENYA_X\n  \\end\n    \n  \\beg    rules punctuation\n    · --> {NULL}\n    , --> {NULL}\n    ; --> {NULL}\n    : --> {NULL}\n    . --> SARATI_SPACE\n    - --> SARATI_SPACE\n    – --> SARATI_SPACE\n    ! --> {NULL}\n    ? --> {NULL}\n    \' --> {NULL}\n    [ --> {NULL}\n    ] --> {NULL}\n    ‘ --> {NULL}\n    ’ --> {NULL}\n    “ --> {NULL}\n    ” --> {NULL}\n  \\end\n  \n\\end\n\n\\beg postprocessor\n  \\reverse\n\\end\n\n\\**  Ponctuation **\\\n\n\n\n\\** ############### **\\\n\\**  Helpers, transcribed from amanye tenceli **\\\n\n\\** ########### **\\\n\\** # p Z **\\\n\\** # t \" **\\\n\\** # c # **\\\n\\** # q p **\\\n\n\\** # ty ± **\\\n\\** # ts g **\\\n\n\\** ########### **\\\n\\** # mb _ **\\\n\\** # nd € **\\\n\\** # ndy ³ **\\\n\\** # ng & **\\\n\\** # ngw s **\\\n\n\\** ########### **\\\n\n\\** # f \\ ou [ ## Aside or below **\\\n\\** # s (th) Ÿ **\\\n\\** # hy ½ **\\\n\\** # h Ë **\\\n\\** # hw º **\\\n\n\\** # ht ² ou ‚ **\\\n\\** # hty Œ **\\\n\n\\** ########### **\\\n\n\\** # mp d **\\\n\\** # nt ª **\\\n\\** # nty „ **\\\n\\** # nc — **\\\n\\** # nq ˜ **\\\n\n\\** ########### **\\\n\n\\** # m P **\\\n\\** # n À **\\\n\\** # ny ‰ **\\\n\\** # ñ + **\\\n\\** # nw , **\\\n\n\\** ########### **\\\n\n\\** # v a ou ` ## Aside or below **\\\n\\** # r F **\\\n\\** # y » **\\\n\\** # w ¹ **\\\n\n\\** ########### **\\\n\n\\** # l ? **\\\n\n\\** ########### **\\\n\n\\** # st v **\\\n\\** # sty … **\\\n\\** # ss ¦ ou w ou i  **\\\n\n\\** ################ **\\\n\n\\** # x (ks) y **\\\n\n\n\\** # GEMINATION -> ó **\\\n\\** # PRECEDING S -> ý **\\\n\\** # SHORT CARRIER -> È **\\\n\\** #  **\\\n\\** # Vowels : **\\\n\\** # Stop Vowel: Ó **\\\n\\** # i   Ò **\\\n\\** # e   è ou Ô **\\\n\\** # a   Ö **\\\n\\** # o   Ü **\\\n\\** # u   Þ **\\\n\\** #  **\\\n\\** # Long Vowels: **\\\n\\** # Carrier dash : ò **\\\n\\** # Always use carrier dashes EXCEPT for a **\\\n\n      \n\n"