Glaemscribe.resource_manager.raw_modes["quenya"] = "\\**\n\nGlǽmscribe (also written Glaemscribe) is a software dedicated to\nthe transcription of texts between writing systems, and more \nspecifically dedicated to the transcription of J.R.R. Tolkien\'s \ninvented languages to some of his devised writing systems.\n\nCopyright (C) 2015 Benjamin Babut (Talagan).\n\nThis program is free software: you can redistribute it and/or modify\nit under the terms of the GNU Affero General Public License as published by\nthe Free Software Foundation, either version 3 of the License, or\nany later version.\n\nThis program is distributed in the hope that it will be useful,\nbut WITHOUT ANY WARRANTY; without even the implied warranty of\nMERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the\nGNU Affero General Public License for more details.\n\nYou should have received a copy of the GNU Affero General Public License\nalong with this program.  If not, see <http://www.gnu.org/licenses/>.\n\n**\\\n\n\\language \"Quenya\"\n\\writing  \"Tengwar\"\n\\mode     \"Classical\"\n\\version  \"0.0.1\"\n\\authors  \"Talagan (Benjamin Babut)\"\n\n\\charset  tengwar_ds true\n  \n\\beg      options\n  \\option split_diphthongs false\n  \\option always_use_romen_for_r false\n  \\option reverse_numbers true\n  \\beg option numbers_base BASE_12\n    \\value    BASE_10 10\n    \\value    BASE_12 12\n  \\end\n\\end\n\n\\beg      preprocessor\n  \\** Work exclusively downcase **\\\n  \\downcase\n  \n  \\** Simplify trema vowels **\\\n  \\substitute ä a\n  \\substitute ë e\n  \\substitute ï i\n  \\substitute ö o\n  \\substitute ü u\n  \\substitute ÿ y\n\n  \\** Dis-ambiguate long vowels **\\\n  \\rxsubstitute \"(ā|â|aa)\" \"á\"\n  \\rxsubstitute \"(ē|ê|ee)\" \"é\"\n  \\rxsubstitute \"(ī|î|ii)\" \"í\"\n  \\rxsubstitute \"(ō|ô|oo)\" \"ó\"\n  \\rxsubstitute \"(ū|û|uu)\" \"ú\"\n  \\rxsubstitute \"(ȳ|ŷ|yy)\" \"ý\"\n\n  \\substitute   \"qu\" \"q\" \\** Dis-ambiguate qu **\\\n  \n  \\elvish_numbers \"\\\\eval numbers_base\" \"\\\\eval reverse_numbers\"\n\\end\n  \n\\beg processor\n  \n  \\beg    rules litteral\n                       \n    {K}                 ===  (c,k)\n    {MB}                ===  (b,mb)\n    {SS}                ===  (z,ss)\n                      \n    {VOWELS}            === a               *  e              * i              * o              *  u\n    {LVOWELS}           === á               *  é              * í              * ó              *  ú\n    \n    {TEHTA_XS}          === A_TEHTA_XS      *  E_TEHTA_XS     *  I_TEHTA_XS    * O_TEHTA_XS     *  U_TEHTA_XS \n    {TEHTA__S}          === A_TEHTA_S       *  E_TEHTA_S      *  I_TEHTA_S     * O_TEHTA_S      *  U_TEHTA_S \n    {TEHTA__L}          === A_TEHTA_L       *  E_TEHTA_L      *  I_TEHTA_L     * O_TEHTA_L      *  U_TEHTA_L \n    {TEHTA_XL}          === A_TEHTA_XL      *  E_TEHTA_XL     *  I_TEHTA_XL    * O_TEHTA_XL     *  U_TEHTA_XL \n       \n    \\if split_diphthongs\n      {WDIPHTHONGS}     === {NULL} \n      {WDIPHTHENGS}     === {NULL}\n    \\else\n      {DIPHTHONGS}      === ai              * au              * eu            * iu             * oi               * ui\n      {DIPHTHENGS}      === YANTA A_TEHTA_L * URE A_TEHTA_L   * URE E_TEHTA_L * URE I_TEHTA_L  * YANTA O_TEHTA_L  * YANTA U_TEHTA_L\n      {WDIPHTHONGS}     === * {DIPHTHONGS} \\** groovy! **\\\n      {WDIPHTHENGS}     === * {DIPHTHENGS} \\** same thing **\\\n    \\endif\n    \n    {V_D_KER}           === [ {VOWELS} {WDIPHTHONGS} ]\n    {V_D_KER_WN}        === [ {VOWELS} {WDIPHTHONGS} * {NULL} ]\n\n    {V_D_IMG_XS}        === [ {TEHTA_XS} {WDIPHTHENGS} ]\n    {V_D_IMG__S}        === [ {TEHTA__L} {WDIPHTHENGS} ]\n    {V_D_IMG__L}        === [ {TEHTA__S} {WDIPHTHENGS} ]\n    {V_D_IMG_XL}        === [ {TEHTA_XL} {WDIPHTHENGS} ]\n    {V_D_IMG_XS_WN}     === [ {TEHTA_XS} {WDIPHTHENGS} * {NULL} ]\n    {V_D_IMG__S_WN}     === [ {TEHTA__L} {WDIPHTHENGS} * {NULL} ]\n    {V_D_IMG__L_WN}     === [ {TEHTA__S} {WDIPHTHENGS} * {NULL} ]\n    {V_D_IMG_XL_WN}     === [ {TEHTA_XL} {WDIPHTHENGS} * {NULL} ]\n  \n    \\** VOWEL RULES **\\\n    [{VOWELS}]          -->   TELCO [{TEHTA_XS}]  \\** Replace isolated short vowels **\\\n    [{LVOWELS}]         -->   ARA [{TEHTA_XS}]    \\**  Replace long vowels **\\\n   \n    \\if !split_diphthongs\n      [{DIPHTHONGS}]    -->   [{DIPHTHENGS}]     \\**  Replace diphthongs **\\\n    \\endif\n    \n    \\** ===================== **\\\n    \\**     1ST LINE RULES    **\\\n    \\** ===================== **\\\n    {L1_KER_1}        === t                   *  p  \n    {L1_IMG_1}        === TINCO               *  PARMA\n    {L1_KER_2}        === {K}                 * q\n    {L1_IMG_2}        === CALMA               *  QUESSE\n    {L1_KER_1_GEMS}   === tt                  * pp\n    {L1_IMG_1_GEMS}   === TINCO DASH_INF_S    * PARMA DASH_INF_S\n    \n    \\** NORMAL **\\\n    [ {L1_KER_1} ] {V_D_KER_WN}        --> [ {L1_IMG_1} ] {V_D_IMG__S_WN}\n    [ {L1_KER_2} ] {V_D_KER_WN}        --> [ {L1_IMG_2} ] {V_D_IMG__S_WN}\n\n    \\** GEMINATED **\\\n    [ {L1_KER_1_GEMS} ] {V_D_KER_WN}   --> [ {L1_IMG_1_GEMS} ] {V_D_IMG__S_WN} \\** Tengscribe uses S but L is probably better  **\\\n    {K}{K}{V_D_KER_WN}                 --> CALMA DASH_INF_S {V_D_IMG__S_WN} \n\n    \\** OTHERS **\\\n    ty{V_D_KER_WN}          --> TINCO THINF_DDOT_L {V_D_IMG__S_WN}\n    py{V_D_KER_WN}          --> PARMA THINF_DDOT_L {V_D_IMG__S_WN}\n                            \n    ts{V_D_KER_WN}_         --> TINCO SHOOK_RIGHT_L {V_D_IMG_XL_WN} \n    ps{V_D_KER_WN}_         --> PARMA SHOOK_RIGHT_L {V_D_IMG_XL_WN} \n    x{V_D_KER_WN}           --> CALMA SHOOK_LEFT_L {V_D_IMG_S_WN}   \\** render ks for x **\\\n        \n    \\** ===================== **\\\n    \\**     2ND LINE RULES    **\\\n    \\** ===================== **\\\n    {L2_KER}        === nd      * {MB}      * ng      *  ngw\n    {L2_IMG}        === ANDO    * UMBAR     * ANGA    *  UNGWE\n  \n    \\** STANDARD **\\\n    [{L2_KER}]{V_D_KER_WN}  --> [{L2_IMG}]{V_D_IMG_XL_WN}\n    \\** OTHERS **\\\n    ndy{V_D_KER_WN}         --> ANDO THINF_DDOT_XL {V_D_IMG_XL_WN}\n      \n    \\** ===================== **\\\n    \\**     3RD LINE RULES    **\\\n    \\** ===================== **\\\n    {L3_KER_1} === (th,þ) * f\n    {L3_IMG_1} === SULE   * FORMEN\n    {L3_KER_2} === h      * hw\n    {L3_IMG_2} === AHA    * HWESTA\n\n    \\** NORMAL **\\\n    [{L3_KER_1}]{V_D_KER_WN}  --> [{L3_IMG_1}]{V_D_IMG__S_WN}\n    [{L3_KER_2}]{V_D_KER_WN}  --> [{L3_IMG_2}]{V_D_IMG__S_WN} \\**  Tengscribe uses S but L is probably better  **\\\n  \n    \\** OTHERS **\\\n    hy{V_D_KER_WN}                  --> HYARMEN THINF_DDOT_L {V_D_IMG__L_WN}\n   \n    \\** Override h with vowels (descendent of hy) **\\\n    _h{V_D_KER}                     --> HYARMEN {V_D_IMG__L}\n    h[{LVOWELS}]                    --> HYARMEN ARA [{TEHTA_XS}] \n    h                               --> AHA\n\n    \\** ===================== **\\\n    \\**     4TH LINE RULES    **\\\n    \\** ===================== **\\\n    {L4_KER}  === nt    * mp    * nc    * nq      \\** Not nqu, due to preprocessor **\\\n    {L4_IMG}  === ANTO  * AMPA  * ANCA  * UNQUE\n \n    \\** NORMAL **\\\n    [{L4_KER}]{V_D_KER_WN}    --> [{L4_IMG}]{V_D_IMG_XL_WN}\n    \\** OTHERS **\\\n    nty{V_D_KER_WN}                 --> ANTO THINF_DDOT_XL {V_D_IMG_XL_WN}\n\n    \\** ===================== **\\\n    \\**     5TH LINE RULES    **\\\n    \\** ===================== **\\\n    {L5_KER}  === n     * m     * ñ     * ñw      * _nw \n    {L5_IMG}  === NUMEN * MALTA * NOLDO * NWALME  * NWALME\n\n    [{L5_KER}]{V_D_KER_WN}  --> [{L5_IMG}]{V_D_IMG_XL_WN}\n\n    ny{V_D_KER_WN}          --> NUMEN THINF_DDOT_XL {V_D_IMG_XL_WN}\n    nn{V_D_KER_WN}          --> NUMEN DASH_INF_L {V_D_IMG_XL_WN}\n    my{V_D_KER_WN}          --> MALTA THINF_DDOT_XL {V_D_IMG_XL_WN}\n    mm{V_D_KER_WN}          --> MALTA DASH_INF_L {V_D_IMG_XL_WN}\n\n    \\** ===================== **\\\n    \\**     6TH LINE RULES    **\\\n    \\** ===================== **\\\n    {L6_KER}        === r     * v     * y                   * w  \n    {L6_IMG}        === ROMEN * VALA  * ANNA THINF_DDOT_L   * VILYA  \n\n    [{L6_KER}]{V_D_KER_WN} --> [{L6_IMG}]{V_D_IMG__S_WN}\n\n    \\** r before long vowels is voiced **\\\n    r[{LVOWELS}]          --> ROMEN ARA [{TEHTA_XS}]\n    \n    \\if always_use_romen_for_r\n      r                     --> ROMEN\n    \\else        \n      r                     --> ORE \\** lonely r is not voiced, so override rule **\\\n    \\endif\n\n    rr{V_D_KER_WN}        --> ROMEN DASH_INF_S {V_D_IMG__S_WN}\n    ry{V_D_KER_WN}        --> ROMEN THINF_DDOT_L {V_D_IMG__S_WN}\n    rd{V_D_KER_WN}        --> ARDA {V_D_IMG__S_WN}\n\n    \\** ===================== **\\\n    \\**     L  LINE RULES     **\\\n    \\** ===================== **\\\n    {LINE_L_KER}          === l     * ld      * ll\n    {LINE_L_IMG}          === LAMBE * ALDA    * LAMBE LAMBE_MARK_TILD\n\n    [{LINE_L_KER}]{V_D_KER_WN}    --> [{LINE_L_IMG}]{V_D_IMG__S_WN}\n    ly{V_D_KER_WN}                --> LAMBE LAMBE_MARK_DDOT {V_D_IMG__S_WN}\n    hl{V_D_KER_WN}                --> HALLA LAMBE {V_D_IMG__S_WN}\n    hr{V_D_KER_WN}                --> HALLA ROMEN {V_D_IMG__S_WN}\n\n    \\** ===================== **\\\n    \\**   S/Z LINE RULES      **\\\n    \\** ===================== **\\\n    {L8_KER}        === s               * {SS}   \n    {L8_IMG}        === SILME_NUQUERNA  * ESSE_NUQUERNA \n\n    [{L8_KER}]{V_D_KER_WN} --> [{L8_IMG}]{V_D_IMG__S_WN}\n\n    \\** Override lonely s / ss / before consonant **\\\n    s               --> SILME\n    s[{LVOWELS}]    --> SILME ARA [{TEHTA_XS}] \n    {SS}             --> ESSE\n    {SS}[{LVOWELS}] --> ESSE ARA [{TEHTA_XS}] \n    \n  \\end\n  \n  \\beg    rules punctuation\n    . --> PUNCT_DDOT\n    .. --> PUNCT_DOT PUNCT_DDOT PUNCT_DOT\n    …  --> PUNCT_TILD\n    ... --> PUNCT_TILD\n    .... --> PUNCT_TILD\n    ..... --> PUNCT_TILD\n    ...... --> PUNCT_TILD\n    ....... --> PUNCT_TILD\n\n    , --> PUNCT_DOT\n    : --> PUNCT_DOT\n    ; --> PUNCT_DOT\n    ! --> PUNCT_EXCLAM\n    ? --> PUNCT_INTERR\n    · --> PUNCT_DOT\n\n    \\** Apostrophe **\\\n\n    \' --> {NULL}\n    ’ --> {NULL}\n\n    \\** Quotes **\\\n\n    “ --> DQUOT_OPEN\n    ” --> DQUOT_CLOSE\n    « --> DQUOT_OPEN \n    » --> DQUOT_CLOSE \n\n    - --> {NULL}     \n    – --> PUNCT_TILD  \n    — --> PUNCT_TILD\n\n    [ --> PUNCT_PAREN_L\n    ] --> PUNCT_PAREN_R\n    ( --> PUNCT_PAREN_L\n    ) --> PUNCT_PAREN_R\n    { --> PUNCT_PAREN_L\n    } --> PUNCT_PAREN_R\n    < --> PUNCT_PAREN_L\n    > --> PUNCT_PAREN_R  \n\n    \\** Not universal between fonts ... **\\\n    $ --> BOOKMARK_SIGN\n    ≤ --> RING_MARK_L \\** Ring inscription left beautiful stuff **\\\n    ≥ --> RING_MARK_R \\** Ring inscription right beautiful stuff **\\\n  \n  \\end\n  \n  \\beg    rules  numbers\n    0 --> NUM_0\n    1 --> NUM_1\n    2 --> NUM_2\n    3 --> NUM_3\n    4 --> NUM_4\n    5 --> NUM_5\n    6 --> NUM_6\n    7 --> NUM_7\n    8 --> NUM_8\n    9 --> NUM_9\n    A --> NUM_10\n    B --> NUM_11      \n  \\end\n  \n\\end"