Glaemscribe.resource_manager.raw_modes["sindarin-daeron"] = "\\**\n\nGlǽmscribe (also written Glaemscribe) is a software dedicated to\nthe transcription of texts between writing systems, and more \nspecifically dedicated to the transcription of J.R.R. Tolkien\'s \ninvented languages to some of his devised writing systems.\n\nCopyright (C) 2015 Benjamin Babut (Talagan).\n\nThis program is free software: you can redistribute it and/or modify\nit under the terms of the GNU Affero General Public License as published by\nthe Free Software Foundation, either version 3 of the License, or\nany later version.\n\nThis program is distributed in the hope that it will be useful,\nbut WITHOUT ANY WARRANTY; without even the implied warranty of\nMERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the\nGNU Affero General Public License for more details.\n\nYou should have received a copy of the GNU Affero General Public License\nalong with this program.  If not, see <http://www.gnu.org/licenses/>.\n\n**\\\n\n\\** Sindarin Angerthas Daeron mode for glaemscribe **\\\n\n\\language \"Sindarin\"\n\\writing  \"Cirth\"\n\\mode     \"Angerthas Daeron\"\n\\version  \"0.0.1\"\n\\authors  \"Talagan (Benjamin Babut)\"\n\n\\charset  cirth_ds true\n\n\\beg      preprocessor\n  \\** Work exclusively downcase **\\\n  \\downcase\n  \n  \\** Simplify trema vowels **\\\n  \\substitute ä a\n  \\substitute ë e\n  \\substitute ï i\n  \\substitute ö o\n  \\substitute ü u\n  \\substitute ÿ y\n  \n  \\** Dis-ambiguate long vowels **\\\n  \\rxsubstitute \"(ā|â|aa)\" \"á\"\n  \\rxsubstitute \"(ē|ê|ee)\" \"é\"\n  \\rxsubstitute \"(ī|î|ii)\" \"í\"\n  \\rxsubstitute \"(ō|ô|oo)\" \"ó\"\n  \\rxsubstitute \"(ū|û|uu)\" \"ú\"\n  \\rxsubstitute \"(ȳ|ŷ|yy)\" \"ý\"\n\\end\n\n\\beg      processor\n  \n  \\** We redefine the output space to have something beautiful, especially with erebor1 and erebor2 **\\ \n  \\outspace CIRTH_SPACE_BIG\n\n  \\beg    rules litteral\n    a     --> CIRTH_48\n    á     --> CIRTH_49\n\n    b     --> CIRTH_2\n    bh    --> CIRTH_4\n    c     --> CIRTH_18\n    ch    --> CIRTH_13\n    \n    d     --> CIRTH_9\n\n    dh    --> CIRTH_11\n    đ     --> CIRTH_11\n    ð     --> CIRTH_11\n    ðh    --> CIRTH_11\n\n    e     --> CIRTH_46\n    é     --> CIRTH_47\n    \n    f     --> CIRTH_3\n    ff_   --> CIRTH_3\n\n    g     --> CIRTH_19\n    gh    --> CIRTH_21\n    ghw   --> CIRTH_26\n    gw    --> CIRTH_24\n    h     --> CIRTH_5 \\** . is another one??, V is +h (should be used in combinations, maybe todo) **\\\n    i     --> CIRTH_39\n    í     --> CIRTH_39 CIRTH_39\n    j     --> CIRTH_14\n    k     --> CIRTH_18\n    kh    --> CIRTH_20\n    khw   --> CIRTH_25\n    kw    --> CIRTH_23\n    l     --> CIRTH_31\n    lh    --> CIRTH_32\n    m     --> CIRTH_6\n    mb    --> CIRTH_7\n    mh    --> CIRTH_7\n    n     --> CIRTH_12\n    nc_   --> CIRTH_22 CIRTH_18 \\** equals ŋc **\\\n    nd    --> CIRTH_38\n    ng    --> CIRTH_33\n  \n    _ng   --> CIRTH_22\n    ng_   --> CIRTH_22 \n    ŋ     --> CIRTH_22\n  \n    nw    --> CIRTH_28\n    ngw   --> CIRTH_27\n    nj    --> CIRTH_17\n    o     --> CIRTH_50\n    ó     --> CIRTH_51 \\** Can use CIRTH_51_ALT **\\\n    ö     --> CIRTH_52 \\** Can use CIRTH_52_ALT **\\\n    œ     --> CIRTH_52\n    p     --> CIRTH_1\n    r     --> CIRTH_29\n    rh    --> CIRTH_30\n    s     --> CIRTH_34 \\** Can use CIRTH_35 **\\\n    sh    --> CIRTH_15\n    ss    --> CIRTH_36\n    t     --> CIRTH_8\n    th    --> CIRTH_10\n    u     --> CIRTH_42\n    ú     --> CIRTH_43\n    ü     --> CIRTH_45_ALT \\** Can use CIRTH_45 **\\\n    y     --> CIRTH_45_ALT \\** Can use CIRTH_45 **\\\n    v     --> CIRTH_4\n    w     --> CIRTH_44\n    zh    --> CIRTH_16\n  \\end\n  \n  \\beg    rules punctuation\n\n    . --> CIRTH_PUNCT_THREE_DOTS\n    .. --> CIRTH_PUNCT_THREE_DOTS\n    ... --> CIRTH_PUNCT_THREE_DOTS\n    …   --> CIRTH_PUNCT_THREE_DOTS\n    .... --> CIRTH_PUNCT_THREE_DOTS\n    ..... --> CIRTH_PUNCT_THREE_DOTS\n    ...... --> CIRTH_PUNCT_THREE_DOTS\n    ....... --> CIRTH_PUNCT_THREE_DOTS\n\n    , --> CIRTH_PUNCT_MID_DOT\n    : --> CIRTH_PUNCT_TWO_DOTS\n    ; --> CIRTH_PUNCT_TWO_DOTS\n    ! --> CIRTH_PUNCT_THREE_DOTS\n    ? --> CIRTH_PUNCT_THREE_DOTS\n    · --> {NULL}\n\n    - --> {NULL}\n    – --> CIRTH_PUNCT_TWO_DOTS  \n    — --> CIRTH_PUNCT_TWO_DOTS\n\n    \\** Apostrophe **\\\n\n    \' --> {NULL}\n    ’ --> {NULL}\n\n    \\** Quotes **\\\n\n    “ --> {NULL}\n    ” --> {NULL}\n    « --> {NULL} \n    » --> {NULL} \n\n    [ --> CIRTH_PUNCT_THREE_DOTS_L\n    ] --> CIRTH_PUNCT_THREE_DOTS_L\n    ( --> CIRTH_PUNCT_THREE_DOTS_L\n    ) --> CIRTH_PUNCT_THREE_DOTS_L\n    { --> CIRTH_PUNCT_THREE_DOTS_L\n    } --> CIRTH_PUNCT_THREE_DOTS_L\n    < --> CIRTH_PUNCT_THREE_DOTS_L\n    > --> CIRTH_PUNCT_THREE_DOTS_L\n\n    / --> CIRTH_PUNCT_FOUR_DOTS\n\n  \\end\n\\end\n\n\n    \n"