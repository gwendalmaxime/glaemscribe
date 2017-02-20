Glaemscribe.resource_manager.raw_modes["sindarin-beleriand"] = "\\**\n\nGlǽmscribe (also written Glaemscribe) is a software dedicated to\nthe transcription of texts between writing systems, and more \nspecifically dedicated to the transcription of J.R.R. Tolkien\'s \ninvented languages to some of his devised writing systems.\n\nCopyright (C) 2015 Benjamin Babut (Talagan).\n\nThis program is free software: you can redistribute it and/or modify\nit under the terms of the GNU Affero General Public License as published by\nthe Free Software Foundation, either version 3 of the License, or\nany later version.\n\nThis program is distributed in the hope that it will be useful,\nbut WITHOUT ANY WARRANTY; without even the implied warranty of\nMERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the\nGNU Affero General Public License for more details.\n\nYou should have received a copy of the GNU Affero General Public License\nalong with this program.  If not, see <http://www.gnu.org/licenses/>.\n\n**\\\n\n\\** Sindarin Beleriand mode for glaemscribe (MAY BE INCOMPLETE) **\\\n\\beg changelog\n  \\entry \"0.0.2\" \"Added lw\"\n  \\entry \"0.0.3\" \"Added thorn as equivalent for th\"\n  \\entry \"0.0.4\" \"Porting to virtual chars to simplify and beautify\"\n  \\entry \"0.0.5\" \"Added charset support for Annatar\"\n  \\entry \"0.0.6\" \"Added support for the FreeMonoTengwar font\"\n\\end\n\n\\language \"Sindarin\"\n\\writing  \"Tengwar\"\n\\mode     \"Beleriand\"\n\\version  \"0.0.5\"\n\\authors  \"J.R.R. Tolkien, impl. Talagan (Benjamin Babut)\"\n\n\\charset  tengwar_ds         true\n\\charset  tengwar_ds_eldamar false\n\\charset  tengwar_ds_annatar false\n\\charset  tengwar_freemono   false\n\n\\beg      options\n  \\option reverse_numbers true\n  \\beg option numbers_base BASE_12\n    \\value    BASE_10 10\n    \\value    BASE_12 12\n  \\end\n\\end\n\n\\beg      preprocessor\n  \\** Work exclusively downcase **\\\n  \\downcase\n  \n  \\** Simplify trema vowels **\\\n  \\substitute ä a\n  \\substitute ë e\n  \\substitute ï i\n  \\substitute ö o\n  \\substitute ü u\n  \\substitute ÿ y\n\n  \\** We should do better for that one (todo) **\\\n  \\substitute œ e\n\n  \\** Dis-ambiguate long vowels **\\\n  \\rxsubstitute \"(ā|â|aa)\" \"á\"\n  \\rxsubstitute \"(ē|ê|ee)\" \"é\"\n  \\rxsubstitute \"(ī|î|ii)\" \"í\"\n  \\rxsubstitute \"(ō|ô|oo)\" \"ó\"\n  \\rxsubstitute \"(ū|û|uu)\" \"ú\"\n  \\rxsubstitute \"(ȳ|ŷ|yy)\" \"ý\"\n  \n  \\** Special case of starting \'i\' before vowels, replace i by j **\\     \n  \\rxsubstitute \"\\\\bi([aeouyáāâéēêíīîóōôúūûýȳŷ])\" \"j\\\\1\"\n  \n  \\** Preprocess numbers **\\\n  \\elvish_numbers \"\\\\eval numbers_base\" \"\\\\eval reverse_numbers\"\n\\end\n\n\\beg      processor\n\n  \\beg    rules litteral\n    {A}                 === a\n    {AA}                === á\n    {E}                 === e\n    {EE}                === é\n    {I}                 === i\n    {II}                === í\n    {O}                 === o\n    {OO}                === ó\n    {U}                 === u\n    {UU}                === ú\n    {Y}                 === y\n    {YY}                === ý\n    \n    {AE}                === {A}{E}\n    {AI}                === {A}{I}\n    {AU}                === {A}{U}\n    {AW}                === {A}w\n    {EI}                === {E}{I}\n    {UI}                === {U}{I}\n    {OE}                === {O}{E}\n             \n    {K}                 === (c,k)\n\n    \\** RULES **\\\n    {A}                 --> OSSE\n    {E}                 --> YANTA\n    {I}                 --> TELCO\n    {O}                 --> ANNA\n    {U}                 --> URE\n    \n    {Y}                 --> SILME_NUQUERNA_ALT\n\n    {AA}                --> OSSE  E_TEHTA\n    {EE}                --> YANTA E_TEHTA\n    {II}                --> TELCO E_TEHTA\n    {OO}                --> ANNA  E_TEHTA\n    {UU}                --> URE   E_TEHTA\n    {YY}                --> SILME_NUQUERNA_ALT E_TEHTA\n\n    {AE}                --> OSSE  YANTA  \\** Should chose between OSSE YANTA and OSSE THSUP_TICK_INV_L. Old tengscribe had second one, amanye tenceli has first one. **\\ \n    {AI}                --> OSSE  Y_TEHTA\n    {AU}                --> OSSE  SEV_TEHTA \n    {AW}                --> OSSE  SEV_TEHTA\n    {EI}                --> YANTA Y_TEHTA\n    {UI}                --> URE   Y_TEHTA\n    {OE}                --> ANNA  YANTA\n\n    \\** ======== **\\\n    \\** 1ST LINE **\\\n    \\** ======== **\\\n    {L1}         === t     * p      * {K}\n    {_L1_}       === TINCO * PARMA  * CALMA\n\n    [{L1}]       --> [{_L1_}]\n \n    nt   --> TINCO NASALIZE_SIGN\n    mp   --> PARMA NASALIZE_SIGN\n    n{K} --> CALMA NASALIZE_SIGN\n\n    \\** ======== **\\\n    \\** 2ND LINE **\\\n    \\** ======== **\\\n    {L2}   === d     * b     * g \n    {_L2_} === ANDO  * UMBAR * ANGA \n\n    [{L2}] --> [{_L2_}]\n\n    mb   --> UMBAR  NASALIZE_SIGN\n    nd   --> ANDO   NASALIZE_SIGN\n\n    \\** ======== **\\\n    \\** 3RD LINE **\\\n    \\** ======== **\\\n    {L3}   === (þ,th) * (f,ph,ff) * ch\n    {_L3_} === SULE   * FORMEN    * AHA\n     \n    [{L3}] --> [{_L3_}]\n\n    nth   --> SULE    NASALIZE_SIGN\n    mph   --> FORMEN  NASALIZE_SIGN\n    nf    --> FORMEN  NASALIZE_SIGN\n    nch   --> AHA     NASALIZE_SIGN\n\n    \\** ======== **\\\n    \\** 4TH LINE **\\\n    \\** ======== **\\\n    {L4}    === (đ,ð,ðh,dh) * (v,bh,f_) \n    {_L4_}  === ANTO  * AMPA \n\n    [{L4}] --> [{_L4_}]\n\n    \\** ======== **\\\n    \\** 5TH LINE **\\\n    \\** ======== **\\\n    {L5}    === nn    * mm    * ng\n    {_L5_}  === NUMEN * MALTA * NOLDO \n\n    [{L5}] --> [{_L5_}]\n\n    \\** ======== **\\\n    \\** 6TH LINE **\\\n    \\** ======== **\\\n    {L6}    === n   * m     * w     * _mh \n    {_L6_}  === ORE * VALA  * VILYA * MALTA_W_HOOK  \n\n    [{L6}] --> [{_L6_}]\n\n    \\** ======== **\\\n    \\** R/L LINE **\\\n    \\** ======== **\\\n    {L_LINE}        === r     * _rh   * l     * _lh\n    {_L_LINE_}      === ROMEN * ARDA  * LAMBE  * ALDA \n\n    [{L_LINE}] --> [{_L_LINE_}]\n\n    \\** ======== **\\\n    \\** S/Z LINE **\\\n    \\** ======== **\\\n    {S_LINE}    === s\n    {_S_LINE_}  === SILME \n\n    [{S_LINE}] --> [{_S_LINE_}]\n\n    ns --> SILME_NUQUERNA NASALIZE_SIGN\n\n    \\** ======== **\\\n    \\** OTHERS **\\\n    \\** ======== **\\\n\n    j --> ARA\n\n    h --> HYARMEN\n\n    hw   --> HWESTA_SINDARINWA\n\n    \\** labialized consonants **\\\n    dw   --> ANDO   SEV_TEHTA\n    gw   --> ANGA   SEV_TEHTA\n    lw   --> LAMBE  SEV_TEHTA\n    nw   --> ORE    SEV_TEHTA\n    rw   --> ROMEN  SEV_TEHTA \n\n  \\end\n  \n  \\beg    rules punctuation\n    . --> PUNCT_DDOT\n    .. --> PUNCT_DOT PUNCT_DDOT PUNCT_DOT\n    ... --> PUNCT_TILD\n    …   --> PUNCT_TILD\n    .... --> PUNCT_TILD\n    ..... --> PUNCT_TILD\n    ...... --> PUNCT_TILD\n    ....... --> PUNCT_TILD\n\n    , --> PUNCT_DOT\n    : --> PUNCT_DOT\n    ; --> PUNCT_DOT\n    ! --> PUNCT_EXCLAM\n    ? --> PUNCT_INTERR\n    · --> {NULL}\n\n    - --> {NULL}\n    – --> PUNCT_TILD  \n    — --> PUNCT_TILD\n\n    \\** Apostrophe **\\\n\n    \' --> {NULL}\n    ’ --> {NULL}\n\n    \\** Quotes **\\\n\n    “ --> DQUOT_OPEN\n    ” --> DQUOT_CLOSE\n    « --> DQUOT_OPEN \n    » --> DQUOT_CLOSE \n\n    [ --> PUNCT_PAREN_L\n    ] --> PUNCT_PAREN_R\n    ( --> PUNCT_PAREN_L\n    ) --> PUNCT_PAREN_R\n    { --> PUNCT_PAREN_L\n    } --> PUNCT_PAREN_R\n    < --> PUNCT_PAREN_L\n    > --> PUNCT_PAREN_R\n\n    \\** Not universal between fonts ... **\\\n    $ --> BOOKMARK_SIGN\n    ≤ --> RING_MARK_L \\** Ring inscription left beautiful stuff **\\\n    ≥ --> RING_MARK_R \\** Ring inscription right beautiful stuff **\\\n  \\end\n\n  \\beg    rules  numbers\n    0 --> NUM_0\n    1 --> NUM_1\n    2 --> NUM_2\n    3 --> NUM_3\n    4 --> NUM_4\n    5 --> NUM_5\n    6 --> NUM_6\n    7 --> NUM_7\n    8 --> NUM_8\n    9 --> NUM_9\n    A --> NUM_10\n    B --> NUM_11      \n  \\end\n  \n\\end\n\n\\beg postprocessor\n  \\resolve_virtuals\n\\end\n"