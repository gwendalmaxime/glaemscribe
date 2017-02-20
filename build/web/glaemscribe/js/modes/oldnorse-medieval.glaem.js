Glaemscribe.resource_manager.raw_modes["oldnorse-medieval"] = "\\**\n\nGlǽmscribe (also written Glaemscribe) is a software dedicated to\nthe transcription of texts between writing systems, and more \nspecifically dedicated to the transcription of J.R.R. Tolkien\'s \ninvented languages to some of his devised writing systems.\n\nCopyright (C) 2015 Benjamin Babut (Talagan).\n\nThis program is free software: you can redistribute it and/or modify\nit under the terms of the GNU Affero General Public License as published by\nthe Free Software Foundation, either version 3 of the License, or\nany later version.\n\nThis program is distributed in the hope that it will be useful,\nbut WITHOUT ANY WARRANTY; without even the implied warranty of\nMERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the\nGNU Affero General Public License for more details.\n\nYou should have received a copy of the GNU Affero General Public License\nalong with this program.  If not, see <http://www.gnu.org/licenses/>.\n\n**\\\n\n\\language \"Old Norse\"\n\\writing  \"Runes\"\n\\mode     \"Futhark Codex Runicus\"\n\\version  \"0.0.1\"\n\\authors  \"Historical, impl. Talagan (Benjamin Babut)\"\n\n\\charset  unicode_runes true\n\n\\beg      preprocessor\n  \\downcase\n\\end\n\n\\beg      processor\n    \n  \\beg    rules litteral\n    {A}       === (a,á) \n    {E}       === (e,é) \n    {I}       === (i,í,j)\n    {O}       === (o,ó)\n    {U}       === (u,ú)\n    {Y}       === (y,ý)\n\n    {AE}      === (æ,ǽ,ę)\n    {OE}      === (ø,ǿ,œ)\n    {OTREM}   === (ö,ǫ,ǫ́)\n    {AEI}     === (æi,ei)\n\n    \\**  VOWELS **\\\n    \n    \\**  ą (> a, o, á, ó plus tard)   **\\\n\n    {A}       --> SHORT_TWIG_AR\n    {E}       --> RUNIC_E\n    {I}       --> ISS \n    {O}       --> RUNIC_O\n    {U}       --> UR\n    {Y}       --> LONG_BRANCH_YR\n    {AE}      --> LONG_BRANCH_AR\n    {OE}      --> RUNIC_OE\n    {OTREM}   --> RUNIC_O       \\** # ö en islandais **\\\n    ǭ         --> SHORT_TWIG_AR \\** # á en islandais  **\\\n    {AEI}     --> LONG_BRANCH_AR ISS    \n    \n    \\**  au: ok    **\\\n    {E}{Y}    --> LONG_BRANCH_AR LONG_BRANCH_YR\n    {OE}{Y}   --> LONG_BRANCH_AR LONG_BRANCH_YR                       \n\n    \\**  CONSONANTS **\\\n  \n    b         --> BJARKAN\n    c         --> RUNIC_C\n    \\**  bb: ok **\\\n    \\**  mb: ok **\\\n    d         --> RUNIC_D\n    \\**  dd: ok **\\\n    \\**  nd: ok **\\\n    ð         --> THORN\n    (f,f_)    --> FEHU \\** # Second part is unuseful but exists in other modes **\\\n    _g        --> RUNIC_G \\** # Initial / After prefix **\\\n    (g,g_)    --> LONG_BRANCH_HAGALL \\** # Median / Final Spirant **\\\n    gg        --> RUNIC_G RUNIC_G\n    ng        --> SHORT_TWIG_NAUD RUNIC_G\n    h         --> LONG_BRANCH_HAGALL\n    k         --> KAUN\n    \\**  kk: ok **\\\n    \\**  nk: ok **\\\n    l         --> LOGR\n    \\**  ll: ok **\\\n    m         --> LONG_BRANCH_MADR\n    \\**  mm: ok **\\\n    n         --> SHORT_TWIG_NAUD\n    \\**  nn: ok **\\\n    p         --> DOTTED_P\n    \\**  pp: ok **\\\n    \\**  mp: ok **\\\n    r         --> REID\n    \\**  rr: ok **\\\n    \\**  ř < z = rune ýr, none in this mode **\\\n    s         --> SIGEL\n    \\**  ss: ok **\\\n    t         --> SHORT_TWIG_TYR\n    nt        --> SHORT_TWIG_TYR\n    \\**  tt: ok **\\\n    þ        --> THORN\n    vv       --> FEHU  \\** # v (< f) **\\\n    v        --> URUZ  \\** # v (< w)  **\\\n    w        --> URUZ  \\** # Should not exist but let\'s handle it **\\\n    x        --> RUNIC_X                 \n    z        --> RUNIC_Z\n  \\end\n  \n  \\beg    rules  punctuation\n    , --> RUNIC_SINGLE_PUNCTUATION\n    ; --> RUNIC_SINGLE_PUNCTUATION\n    : --> RUNIC_MULTIPLE_PUNCTUATION\n    . --> RUNIC_MULTIPLE_PUNCTUATION\n    ! --> RUNIC_MULTIPLE_PUNCTUATION\n    ? --> RUNIC_CROSS_PUNCTUATION	\n  \\end\n\\end\n  \n    \n      "