Glaemscribe.resource_manager.raw_modes["sindarin"] = "\\**\n\nGlǽmscribe (also written Glaemscribe) is a software dedicated to\nthe transcription of texts between writing systems, and more \nspecifically dedicated to the transcription of J.R.R. Tolkien\'s \ninvented languages to some of his devised writing systems.\n\nCopyright (C) 2015 Benjamin Babut (Talagan).\n\nThis program is free software: you can redistribute it and/or modify\nit under the terms of the GNU Affero General Public License as published by\nthe Free Software Foundation, either version 3 of the License, or\nany later version.\n\nThis program is distributed in the hope that it will be useful,\nbut WITHOUT ANY WARRANTY; without even the implied warranty of\nMERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the\nGNU Affero General Public License for more details.\n\nYou should have received a copy of the GNU Affero General Public License\nalong with this program.  If not, see <http://www.gnu.org/licenses/>.\n\n**\\\n\n\\** Sindarin Classical mode for glaemscribe (MAY BE INCOMPLETE) **\\\n\n\\beg changelog\n  \\entry \"0.0.2\" \"Fixed some tehtar versions which did not look quite nice for ch, dh, v, mb. Reworked the problem of labialized consonnants (+w), adding an option for treating the u-curl + tehta combination.\"\n  \\entry \"0.0.3\" \"Extended the labialized consonnants option.\"\n  \\entry \"0.0.4\" \"Fixed nw (BUG : was using ORE from the beleriand mode), added lw\"\n  \\entry \"0.0.5\" \"Added thorn as equivalent for th\"\n  \\entry \"0.0.6\" \"Porting to virtual chars to simplify and beautify\"\n  \\entry \"0.0.7\" \"Added charset support for Annatar\"\n  \\entry \"0.0.8\" \"Added support for the FreeMonoTengwar font\" \n  \\entry \"0.1.0\" \"Added support for the Tengwar Elfica font\"\n  \\entry \"0.1.1\" \"Added support for inlined raw tengwar\"  \n\\end\n\n\\language \"Sindarin\"\n\\writing  \"Tengwar\"\n\\mode     \"Sindarin Tengwar - General Use\"\n\\version  \"0.1.1\"\n\\authors  \"J.R.R. Tolkien, impl. Talagan (Benjamin Babut)\"\n\n\\world      arda\n\\invention  jrrt\n\n\\charset  tengwar_ds_sindarin true\n\\charset  tengwar_ds_parmaite false\n\\charset  tengwar_ds_eldamar  false\n\\charset  tengwar_ds_annatar  false\n\\charset  tengwar_ds_elfica   false\n\\charset  tengwar_freemono    false\n\n\\raw_mode \"raw-tengwar\"\n\n\\beg      options\n\n  \\beg option reverse_o_u_tehtar U_UP_O_DOWN\n    \\value O_UP_U_DOWN 1\n    \\value U_UP_O_DOWN 2\n  \\end\n\n  \\beg option consonant_modification_style CONSONANT_MODIFICATION_STYLE_BAR\n    \\value CONSONANT_MODIFICATION_STYLE_WAVE 0\n    \\value CONSONANT_MODIFICATION_STYLE_BAR 1\n  \\end\n\n  \\beg option labialized_consonants_u_curl LABIALIZED_U_CURL_ALWAYS\n    \\value    LABIALIZED_U_CURL_NONE      1\n    \\value    LABIALIZED_U_CURL_NO_TEHTAR 2\n    \\value    LABIALIZED_U_CURL_ALWAYS    3\n  \\end\n\n  \\option reverse_numbers true\n  \\beg option numbers_base BASE_12\n    \\value    BASE_10 10\n    \\value    BASE_12 12\n  \\end\n\n\\end\n\n\\beg preprocessor\n  \\** Work exclusively downcase **\\\n  \\downcase\n  \n  \\** Simplify trema vowels **\\\n  \\substitute ä a\n  \\substitute ë e\n  \\substitute ï i\n  \\substitute ö o\n  \\substitute ü u\n  \\substitute ÿ y\n\n  \\** We should do better for that one (todo) **\\\n  \\substitute œ e\n  \n  \\** Dis-ambiguate long vowels **\\\n  \\rxsubstitute \"(ā|â|aa)\" \"á\"\n  \\rxsubstitute \"(ē|ê|ee)\" \"é\"\n  \\rxsubstitute \"(ī|î|ii)\" \"í\"\n  \\rxsubstitute \"(ō|ô|oo)\" \"ó\"\n  \\rxsubstitute \"(ū|û|uu)\" \"ú\"\n  \\rxsubstitute \"(ȳ|ŷ|yy)\" \"ý\"\n  \n  \\** Special case of starting \'i\' before vowels, replace i by j **\\     \n  \\rxsubstitute \"\\\\bi([aeouyáāâéēêíīîóōôúūûýȳŷ])\" \"j\\\\1\"\n  \n  \\** Preprocess numbers **\\\n  \\elvish_numbers \"\\\\eval numbers_base\" \"\\\\eval reverse_numbers\"\n\\end\n \n\\beg processor\n\n  \\beg rules litteral\n    \n    \\if \"consonant_modification_style == CONSONANT_MODIFICATION_STYLE_WAVE\"\n      {GEMINATE} === GEMINATE_SIGN_TILD\n      {NASAL}    === NASALIZE_SIGN_TILD\n    \\else\n      {GEMINATE} === GEMINATE_SIGN\n      {NASAL}    === NASALIZE_SIGN\n    \\endif\n    \n    \\if \"reverse_o_u_tehtar == U_UP_O_DOWN\"\n      {O_LOOP}        === O_TEHTA\n      {U_LOOP}        === U_TEHTA\n     \\else\n      {O_LOOP}        === U_TEHTA\n      {U_LOOP}        === O_TEHTA\n    \\endif\n    \n    \\** VOWELS **\\\n    {A}   === a\n    {AA}  === á\n    {E}   === e\n    {EE}  === é\n    {I}   === i\n    {II}  === í\n    {O}   === o\n    {OO}  === ó\n    {U}   === u\n    {UU}  === ú\n    {Y}   === y\n    {YY}  === ý\n\n    {AE}  === {A}{E}\n    {AI}  === {A}{I}\n    {AU}  === {A}{U}\n    {AW}  === {A}w\n    {EI}  === {E}{I}\n    {OE}  === {O}{E}\n    {UI}  === {U}{I}\n\n    \\** CONSONANTS **\\\n    {K}         === (c,k)\n\n    {VOWELS}    === {A}             * {E}             * {I}           * {O}         * {U}         * {Y} \n    {LVOWELS}   === {AA}            * {EE}            * {II}          * {OO}        * {UU}        * {YY}   \n\n    {TEHTAR}    === A_TEHTA         * E_TEHTA         * I_TEHTA       * {O_LOOP}     * {U_LOOP}     * Y_TEHTA \n  \n    {_LTEHTAR_} === ARA A_TEHTA     * ARA E_TEHTA     * ARA I_TEHTA   * ARA {O_LOOP} * ARA {U_LOOP} * ARA Y_TEHTA \n\n    {DIPHTHONGS}   === {AI}            * {AU}            * {AW}            * {EI}            * {UI}         * {AE}          * {OE}              \n    {_DIPHTHONGS_} === ANNA A_TEHTA    * VALA A_TEHTA    * VALA A_TEHTA    * ANNA E_TEHTA    * ANNA {U_LOOP} * YANTA A_TEHTA * YANTA {O_LOOP}     \n\n    \\** Consonants + Vowels, we will often need these ones **\\\n    {V_D}         === [ {VOWELS} ]\n    {V_D_WN}      === [ {VOWELS} * {NULL} ]\n\n    {_V_D_}       === [ {TEHTAR} ]\n    {_V_D_WN_}    === [ {TEHTAR} * {NULL} ]\n \n    \\** Vowel rules **\\  \n    [{VOWELS}]      -->   TELCO [{TEHTAR}]  \\** Replace isolated short vowels **\\\n    [{LVOWELS}]     -->   [{_LTEHTAR_}]   \\** Replace long vowels **\\\n    [{DIPHTHONGS}]  -->   [{_DIPHTHONGS_}]    \\** Replace diphthongs **\\\n   \n    \\** 1ST LINE **\\\n    {L1}           === t     * p * {K}\n    {_L1_}         === TINCO * PARMA * QUESSE\n \n    {V_D_WN}[{L1}] --> 2,1 --> [{_L1_}]{_V_D_WN_}\n  \n    {V_D_WN}nt   --> TINCO {NASAL} {_V_D_WN_}\n    {V_D_WN}mp   --> PARMA {NASAL} {_V_D_WN_}\n    {V_D_WN}n{K} --> CALMA {NASAL} {_V_D_WN_}\n\n    \\** 2ND LINE **\\\n    {L2}        === d     * b     * g     * ng                    \\** * g **\\\n    {_L2_}      === ANDO  * UMBAR * UNGWE * UNGWE {NASAL}      \\** * s **\\\n\n    {V_D_WN}[{L2}] --> 2,1 --> [{_L2_}]{_V_D_WN_}\n\n    {V_D_WN}mb   --> UMBAR  {NASAL} {_V_D_WN_}\n    {V_D_WN}nd   --> ANDO   {NASAL} {_V_D_WN_}\n\n    \\** 3RD LINE **\\\n    {L3}    === (þ,th) * (f,ph,ff) * ch \n    {_L3_}  === SULE   * FORMEN * HWESTA\n\n    {V_D_WN}[{L3}] --> 2,1 --> [{_L3_}]{_V_D_WN_} \n   \n    {V_D_WN}nth   --> SULE   {NASAL} {_V_D_WN_}\n    {V_D_WN}mph   --> FORMEN {NASAL} {_V_D_WN_}\n    {V_D_WN}nf    --> FORMEN {NASAL} {_V_D_WN_}\n    {V_D_WN}nch   --> HWESTA {NASAL} {_V_D_WN_}\n\n    \\** 4TH LINE **\\\n    {L4}        === (đ,ð,ðh,dh)   * (v,bh,f_) \\** Some noldorin variants here ... **\\\n    {_L4_}        === ANTO          * AMPA \n\n    {V_D_WN}[{L4}] --> 2,1 --> [{_L4_}]{_V_D_WN_}\n\n    \\** 5TH LINE **\\\n    {L5}        === n * m * _ng * _mh\n    {_L5_}      === NUMEN * MALTA * NWALME * MALTA_W_HOOK \n\n    {V_D_WN}[{L5}] --> 2,1 --> [{_L5_}]{_V_D_WN_}\n\n    {V_D_WN}nn        --> NUMEN {NASAL} {_V_D_WN_}\n    {V_D_WN}mm        --> MALTA {NASAL} {_V_D_WN_}\n\n    \\** 6TH LINE **\\\n\n    \\** 7TH LINE **\\\n    {L7}        === r_    * r     * l     * ll                    * w     \n    {_L7_}      === ORE   * ROMEN * LAMBE * LAMBE {GEMINATE} * VALA\n        \n    {V_D_WN}[{L7}] --> 2,1 --> [{_L7_}]{_V_D_WN_}\n    \n    _rh --> ARDA\n    _lh --> ALDA\n\n    \\** S/Z LINE **\\\n    {L8}    === s * y * ss\n    {_L8_}  === SILME_NUQUERNA * SILME_NUQUERNA_ALT * ESSE_NUQUERNA \n\n    {V_D_WN}[{L8}]  --> 2,1 --> [{_L8_}]{_V_D_WN_}\n\n    {V_D_WN}ns      --> SILME_NUQUERNA {NASAL} {_V_D_WN_}\n\n    s --> SILME\n\n    \\** OTHERS **\\\n    j --> YANTA\n\n    {V_D_WN}h    --> HYARMEN {_V_D_WN_}\n    {V_D_WN}hw   --> HWESTA_SINDARINWA {_V_D_WN_}\n\n    \\** \n        Ok here come the labialized consonants which are really tricky\n        The fonts generally do not handle well the u curl + tehtar, this should be one more argument for\n        adopting open type anchors with which we can stack diacritics (see the sarati modes).\n        For here, we cheat. Either we don\'t have any tehta on the tengwa, and it\'s easy.\n        Or, we put the two signs in their small versions, side by side.\n        We give an option not to use that trick, if the option is not set, we simply do not use\n        the u-curl at all when there\'s a tehta on the tengwa.\n    **\\\n    \n    \\if \"labialized_consonants_u_curl == LABIALIZED_U_CURL_NO_TEHTAR || labialized_consonants_u_curl == LABIALIZED_U_CURL_ALWAYS\"\n      dw   --> ANDO  SEV_TEHTA  \n      gw   --> UNGWE SEV_TEHTA  \n      lw   --> LAMBE SEV_TEHTA\n      nw   --> NUMEN SEV_TEHTA   \n      rw   --> ROMEN SEV_TEHTA   \n    \\endif\n\n    \\if \"labialized_consonants_u_curl == LABIALIZED_U_CURL_ALWAYS\"    \n      {V_D}dw   --> ANDO  SEV_TEHTA {_V_D_}\n      {V_D}gw   --> UNGWE SEV_TEHTA {_V_D_}\n      {V_D}lw   --> LAMBE SEV_TEHTA {_V_D_}   \n      {V_D}nw   --> NUMEN SEV_TEHTA {_V_D_}\n      {V_D}rw   --> ROMEN SEV_TEHTA {_V_D_}\n    \\endif\n  \\end\n  \n  \\beg rules punctuation\n    . --> PUNCT_DDOT\n    .. --> PUNCT_DOT PUNCT_DDOT PUNCT_DOT\n    ... --> PUNCT_TILD\n    …   --> PUNCT_TILD\n    .... --> PUNCT_TILD\n    ..... --> PUNCT_TILD\n    ...... --> PUNCT_TILD\n    ....... --> PUNCT_TILD\n    \n    , --> PUNCT_DOT\n    : --> PUNCT_DOT\n    ; --> PUNCT_DOT\n    ! --> PUNCT_EXCLAM\n    ? --> PUNCT_INTERR\n    · --> {NULL}\n\n    - --> {NULL} \n    – --> PUNCT_TILD  \n    — --> PUNCT_TILD\n\n    \\** Apostrophe **\\\n\n    \' --> {NULL}\n    ’ --> {NULL}\n\n    \\** Quotes **\\\n\n    “ --> DQUOT_OPEN\n    ” --> DQUOT_CLOSE\n    « --> DQUOT_OPEN \n    » --> DQUOT_CLOSE \n\n    [ --> PUNCT_PAREN_L\n    ] --> PUNCT_PAREN_R\n    ( --> PUNCT_PAREN_L\n    ) --> PUNCT_PAREN_R\n    { --> PUNCT_PAREN_L\n    } --> PUNCT_PAREN_R\n    < --> PUNCT_PAREN_L\n    > --> PUNCT_PAREN_R\n\n    \\** Not universal between fonts ... **\\\n    $ --> BOOKMARK_SIGN\n    ≤ --> RING_MARK_L \\** Ring inscription left beautiful stuff **\\\n    ≥ --> RING_MARK_R \\** Ring inscription right beautiful stuff **\\\n  \\end\n\n  \\beg rules numbers\n    0 --> NUM_0\n    1 --> NUM_1\n    2 --> NUM_2\n    3 --> NUM_3\n    4 --> NUM_4\n    5 --> NUM_5\n    6 --> NUM_6\n    7 --> NUM_7\n    8 --> NUM_8\n    9 --> NUM_9\n    A --> NUM_10\n    B --> NUM_11      \n  \\end\n\\end\n\n\\beg postprocessor\n  \\resolve_virtuals\n\\end\n"