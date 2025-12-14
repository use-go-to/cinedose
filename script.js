document.addEventListener('DOMContentLoaded', () => {

    // 1. DONNÉES CSV COMPLÈTE ET MISE À JOUR (décembre 2025)
    const csvData = `"Pos","2024","Title","Director","Year","Country","Mins","Trailer URL"
"1","1","Citizen Kane","Welles, Orson","1941","USA","119","https://www.dailymotion.com/video/x2lbwjq"
"2","2","Vertigo","Hitchcock, Alfred","1958","USA","128","https://www.dailymotion.com/video/x8e52fg"
"3","3","2001: A Space Odyssey","Kubrick, Stanley","1968","UK","139","https://www.dailymotion.com/video/x6j5yq2"
"7","7","8½","Fellini, Federico","1963","Italy","135","https://www.dailymotion.com/video/xasld"
"11","11","Singin' in the Rain","Donen, Stanley & Gene Kelly","1952","USA","102","https://www.dailymotion.com/video/x2j8o0u"
"12","12","Jeanne Dielman, 23 Quai du Commerce, 1080 Bruxelles","Akerman, Chantal","1975","Belgium","201","https://www.dailymotion.com/video/x8dl9cq"
"13","13","Apocalypse Now","Coppola, Francis Ford","1979","USA","150","https://www.dailymotion.com/video/x2lbwjo"
"15","14","Taxi Driver","Scorsese, Martin","1976","USA","113","https://www.dailymotion.com/video/x3iy55"
"16","16","Persona","Bergman, Ingmar","1966","Sweden","83","https://www.dailymotion.com/video/x252y1q"
"17","17","In the Mood for Love","Wong Kar-wai","2000","Hong Kong","97","https://www.dailymotion.com/video/x7s89zy"
"18","19","Breathless","Godard, Jean-Luc","1960","France","89","https://www.dailymotion.com/video/x2l5bo4"
"22","22","Man with a Movie Camera","Vertov, Dziga","1929","USSR","80","https://www.dailymotion.com/video/x2mn8nb"
"23","23","Mirror","Tarkovsky, Andrei","1975","USSR","107","https://www.dailymotion.com/video/x8gu591"
"24","24","Rashomon","Kurosawa, Akira","1950","Japan","88","https://www.dailymotion.com/video/x24us7s"
"26","28","Psycho","Hitchcock, Alfred","1960","USA","109","https://www.dailymotion.com/video/x2lbxbc"
"29","29","Au hasard Balthazar","Bresson, Robert","1966","France","95","https://www.dailymotion.com/video/x8vj7qc"
"30","30","Mulholland Dr.","Lynch, David","2001","USA","147","https://www.dailymotion.com/video/x4sxlf"
"31","32","Some Like it Hot","Wilder, Billy","1959","USA","121","https://www.dailymotion.com/video/x28davn"
"32","33","Ordet","Dreyer, Carl Theodor","1955","Denmark","125","https://www.dailymotion.com/video/x8enyy0"
"35","35","Raging Bull","Scorsese, Martin","1980","USA","129","https://www.dailymotion.com/video/x89y0iz"
"38","38","Casablanca","Curtiz, Michael","1942","USA","102","https://www.dailymotion.com/video/x8t35h2"
"39","41","Blade Runner","Scott, Ridley","1982","USA","118","https://www.dailymotion.com/video/x89xveo"
"40","39","Rear Window","Hitchcock, Alfred","1954","USA","112","https://www.dailymotion.com/video/xpwnln"
"41","45","Touch of Evil","Welles, Orson","1958","USA","108","https://www.dailymotion.com/video/xxjbcu"
"42","40","Playtime","Tati, Jacques","1967","France","108","https://www.dailymotion.com/video/x20b2zm"
"44","43","Barry Lyndon","Kubrick, Stanley","1975","UK","183","https://www.dailymotion.com/video/x2lbxvu"
"46","44","Pather Panchali","Ray, Satyajit","1955","India","112","https://www.dailymotion.com/video/x9p6mn0"
"47","48","Close-Up","Kiarostami, Abbas","1990","Iran","98","https://www.dailymotion.com/video/x8t4k3g"
"48","47","Stalker","Tarkovsky, Andrei","1979","USSR","160","https://www.dailymotion.com/video/x84h7y1"
"49","49","Lawrence of Arabia","Lean, David","1962","UK","216","https://www.dailymotion.com/video/x28db8g"
"51","52","Modern Times","Chaplin, Charles","1936","USA","89","https://www.dailymotion.com/video/xwsxss"
"52","51","Beau travail","Denis, Claire","1999","France","92","https://www.dailymotion.com/video/x1vlwjn"
"55","54","M","Lang, Fritz","1931","Germany","99","https://www.dailymotion.com/video/x3d5oi"
"58","57","Ugetsu monogatari","Mizoguchi, Kenji","1953","Japan","96","https://www.dailymotion.com/video/x1ww7o"
"60","63","GoodFellas","Scorsese, Martin","1990","USA","146","https://www.dailymotion.com/video/x4fuv"
"63","65","Rio Bravo","Hawks, Howard","1959","USA","141","https://www.dailymotion.com/video/x89sn4c"
"65","64","Shoah","Lanzmann, Claude","1985","France","566","https://www.dailymotion.com/video/x8a41s7"
"66","66","Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb","Kubrick, Stanley","1964","UK","93","https://www.dailymotion.com/video/x28datg"
"67","69","Once Upon a Time in the West","Leone, Sergio","1968","Italy","165","https://www.dailymotion.com/video/xifuum"
"68","67","Pierrot le fou","Godard, Jean-Luc","1965","France","110","https://www.dailymotion.com/video/x2kc7t4"
"70","70","Chinatown","Polanski, Roman","1974","USA","131","https://www.dailymotion.com/video/x8draat"
"71","71","Do the Right Thing","Lee, Spike","1989","USA","120","https://www.dailymotion.com/video/x4l637m"
"72","72","Metropolis","Lang, Fritz","1927","Germany","153","https://www.dailymotion.com/video/x2lbusd"
"76","75","Enfants du paradis, Les","Carné, Marcel","1945","France","195","https://www.dailymotion.com/video/x26mmnn"
"77","77","Amarcord","Fellini, Federico","1973","Italy","127","https://www.dailymotion.com/video/x9r6vdy"
"78","79","Pulp Fiction","Tarantino, Quentin","1994","USA","154","https://www.dailymotion.com/video/xc2jlt"
"80","88","Viridiana","Buñuel, Luis","1961","Spain","90","https://www.dailymotion.com/video/x8tmrwu"
"88","89","Pickpocket","Bresson, Robert","1959","France","75","https://www.dailymotion.com/video/x8ore57"
"90","87","Blue Velvet","Lynch, David","1986","USA","120","https://www.dailymotion.com/video/x8w7dyo"
"91","92","Jaws","Spielberg, Steven","1975","USA","124","https://www.dailymotion.com/video/x8e5bcg"
"92","90","Nashville","Altman, Robert","1975","USA","160","https://www.dailymotion.com/video/x2lbv6z"
"94","94","Gertrud","Dreyer, Carl Theodor","1964","Denmark","116","https://www.dailymotion.com/video/x3lx6bk"
"96","96","Sans soleil","Marker, Chris","1983","France","100","https://www.dailymotion.com/video/x8edzob"
"98","102","To Be or Not to Be","Lubitsch, Ernst","1942","USA","99","https://www.dailymotion.com/video/x25r7a4"
"99","98","Jules et Jim","Truffaut, François","1962","France","104","https://www.dailymotion.com/video/x26mvm0"
"100","99","Meshes of the Afternoon","Deren, Maya & Alexander Hammid","1943","USA","15","https://www.dailymotion.com/video/x8qwux6"
"102","100","Sátántangó","Tarr, Béla","1994","Hungary","439","https://www.dailymotion.com/video/x8a1kle"
"104","103","Madame de...","Ophüls, Max","1953","France","105","https://www.dailymotion.com/video/x8qkij2"
"106","108","Ikiru","Kurosawa, Akira","1952","Japan","143","https://www.dailymotion.com/video/xj95ly"
"108","107","Aguirre, the Wrath of God","Herzog, Werner","1972","West Germany","94","https://www.dailymotion.com/video/x9tveb2"
"109","110","Annie Hall","Allen, Woody","1977","USA","94","https://www.dailymotion.com/video/x2lbpzg"
"111","109","Last Year at Marienbad","Resnais, Alain","1961","France","94","https://www.dailymotion.com/video/x2i37hg"
"113","116","Once Upon a Time in America","Leone, Sergio","1984","Italy","229","https://www.dailymotion.com/video/xyrjd"
"114","113","Greed","von Stroheim, Erich","1924","USA","140","https://www.dailymotion.com/video/x81vs6c"
"117","117","Wizard of Oz, The","Fleming, Victor","1939","USA","101","https://www.dailymotion.com/video/x90y4i2"
"118","118","Yi Yi","Yang, Edward","2000","Taiwan","173","https://www.dailymotion.com/video/x50blnz"
"120","119","Hiroshima mon amour","Resnais, Alain","1959","France","91","https://www.dailymotion.com/video/x2khnx7"
"122","124","Blow-Up","Antonioni, Michelangelo","1966","Italy","111","https://www.dailymotion.com/video/x8dr7vu"
"125","123","Intolerance","Griffith, D.W.","1916","USA","178","https://www.dailymotion.com/video/xpy0if"
"127","130","Notorious","Hitchcock, Alfred","1946","USA","101","https://www.dailymotion.com/video/x6xj6v"
"128","131","Alien","Scott, Ridley","1979","USA","117","https://www.dailymotion.com/video/x14p571"
"129","129","Vivre sa vie","Godard, Jean-Luc","1962","France","85","https://www.dailymotion.com/video/x26minj"
"130","127","Letter from an Unknown Woman","Ophüls, Max","1948","USA","90","https://www.dailymotion.com/video/x8hzclp"
"132","136","E.T. The Extra-Terrestrial","Spielberg, Steven","1982","USA","115","https://www.dailymotion.com/video/x28dau9"
"134","133","All About Eve","Mankiewicz, Joseph L.","1950","USA","138","https://www.dailymotion.com/video/x2npbe"
"138","134","Histoire(s) du cinéma","Godard, Jean-Luc","1988-98","France","267","https://www.dailymotion.com/video/x1k2ojd"
"139","135","My Darling Clementine","Ford, John","1946","USA","97","https://www.dailymotion.com/video/xxt8vv"
"140","143","Gone with the Wind","Fleming, Victor","1939","USA","222","https://www.dailymotion.com/video/x57cq7"
"146","147","Nosferatu","Murnau, F.W.","1922","Germany","84","https://www.dailymotion.com/video/x108t9r"
"147","145","One Flew Over the Cuckoo's Nest","Forman, Milos","1975","USA","133","https://www.dailymotion.com/video/x9ut65m"
"149","144","Killer of Sheep","Burnett, Charles","1977","USA","83","https://www.dailymotion.com/video/x8foyw4"
"151","151","Wanda","Loden, Barbara","1970","USA","105","https://www.dailymotion.com/video/x8x8p3a"
"152","158","Star Wars","Lucas, George","1977","USA","121","https://www.dailymotion.com/video/x89lwdq"
"153","161","There Will Be Blood","Anderson, Paul Thomas","2007","USA","158","https://www.dailymotion.com/video/x53yhb"
"158","155","Trouble in Paradise","Lubitsch, Ernst","1932","USA","83","https://www.dailymotion.com/video/xwquze"
"159","157","Chungking Express","Wong Kar-wai","1994","Hong Kong","104","https://www.dailymotion.com/video/x1g2oe"
"162","159","Manhattan","Allen, Woody","1979","USA","96","https://www.dailymotion.com/video/x2lbxsr"
"163","170","Double Indemnity","Wilder, Billy","1944","USA","106","https://www.dailymotion.com/video/x28dal2"
"164","162","Tropical Malady","Weerasethakul, Apichatpong","2004","Thailand","118","https://www.dailymotion.com/video/x8a1q70"
"165","165","Badlands","Malick, Terrence","1973","USA","95","https://www.dailymotion.com/video/x9tarba"
"169","168","Dekalog","Kieslowski, Krzysztof","1989","Poland","550","https://www.dailymotion.com/video/x9k6wr6"
"172","175","Rosemary's Baby","Polanski, Roman","1968","USA","136","https://www.dailymotion.com/video/x2lbud4"
"173","174","Stagecoach","Ford, John","1939","USA","96","https://www.dailymotion.com/video/x8k35uu"
"174","173","Touki Bouki","Diop Mambéty, Djibril","1973","Senegal","85","https://www.dailymotion.com/video/xv6n50"
"175","171","Duck Soup","McCarey, Leo","1933","USA","70","https://www.dailymotion.com/video/xm8kf0"
"177","179","Brief Encounter","Lean, David","1945","UK","85","https://www.dailymotion.com/video/x8ffv11"
"178","184","Ran","Kurosawa, Akira","1985","France","161","https://www.dailymotion.com/video/x2i4akc"
"181","177","Earth","Dovzhenko, Alexander","1930","USSR","75","https://www.dailymotion.com/video/x8d3xn7"
"182","181","Portrait of a Lady on Fire","Sciamma, Céline","2019","France","121","https://www.dailymotion.com/video/x7os64i"
"185","183","Mouchette","Bresson, Robert","1967","France","80","https://www.dailymotion.com/video/x4x5hfh"
"188","193","Napoléon","Gance, Abel","1927","France","235","https://www.dailymotion.com/video/x8q2720"
"190","187","Vampyr","Dreyer, Carl Theodor","1932","Germany","73","https://www.dailymotion.com/video/x8lrba1"
"194","192","Black Narcissus","Powell, Michael & Emeric Pressburger","1947","UK","99","https://www.dailymotion.com/video/x7xx7br"
"196","201","Paris, Texas","Wenders, Wim","1984","West Germany","150","https://www.dailymotion.com/video/x2l5dcp"
"197","195","Paisan","Rossellini, Roberto","1946","Italy","120","https://www.dailymotion.com/video/x52duzc"
"200","207","Raiders of the Lost Ark","Spielberg, Steven","1981","USA","115","https://www.dailymotion.com/video/xdxoeh"
"203","203","On the Waterfront","Kazan, Elia","1954","USA","108","https://www.dailymotion.com/video/x28dakd"
"204","206","Close Encounters of the Third Kind","Spielberg, Steven","1977","USA","135","https://www.dailymotion.com/video/x69c2ib"
"205","202","King Kong","Cooper, Merian C. & Ernest B. Schoedsack","1933","USA","103","https://www.dailymotion.com/video/x93777"
"207","198","Vagabond","Varda, Agnès","1985","France","105","https://www.dailymotion.com/video/xhszsl"
"208","205","News from Home","Akerman, Chantal","1976","Belgium","85","https://www.dailymotion.com/video/x8m10zv"
"214","215","Solaris","Tarkovsky, Andrei","1972","USSR","165","https://www.dailymotion.com/video/x52ow8"
"215","212","Wavelength","Snow, Michael","1967","Canada","45","https://www.dailymotion.com/video/x83dtp1"
"216","216","Moonlight","Jenkins, Barry","2016","USA","111","https://www.dailymotion.com/video/x5956y4"
"217","219","Breaking the Waves","von Trier, Lars","1996","Denmark","156","https://www.dailymotion.com/video/xng46t"
"218","223","Magnolia","Anderson, Paul Thomas","1999","USA","188","https://www.dailymotion.com/video/xd76yq"
"222","218","Kes","Loach, Ken","1969","UK","113","https://www.dailymotion.com/video/x2lbqnp"
"224","222","Umberto D.","De Sica, Vittorio","1952","Italy","89","https://www.dailymotion.com/video/x4xnemm"
"225","225","Brazil","Gilliam, Terry","1985","UK","131","https://www.dailymotion.com/video/x2lbwf7"
"229","229","Love Streams","Cassavetes, John","1984","USA","141","https://www.dailymotion.com/video/x8tf05m"
"235","242","Parasite","Bong Joon-ho","2019","South Korea","132","https://www.dailymotion.com/video/x75msk4"
"244","241","Performance","Roeg, Nicolas & Donald Cammell","1970","UK","105","https://www.dailymotion.com/video/x34xizx"
"245","247","Caché","Haneke, Michael","2005","France","117","https://www.dailymotion.com/video/x6dktz1"
"246","243","Eraserhead","Lynch, David","1977","USA","85","https://www.dailymotion.com/video/x14zoav"
"251","268","Schindler's List","Spielberg, Steven","1993","USA","195","https://www.dailymotion.com/video/x441lo"
"253","249","Meet Me in St. Louis","Minnelli, Vincente","1944","USA","113","https://www.dailymotion.com/video/x9py9qc"
"254","252","Eternal Sunshine of the Spotless Mind","Gondry, Michel","2004","USA","108","https://www.dailymotion.com/video/xpx7km"
"256","261","Cinema Paradiso","Tornatore, Giuseppe","1988","Italy","155","https://www.dailymotion.com/video/x8b864r"
"258","254","Daughters of the Dust","Dash, Julie","1991","USA","112","https://www.dailymotion.com/video/x8g4qho"
"261","259","Tabu","Murnau, F.W.","1931","USA","82","https://www.dailymotion.com/video/x8j07ek"
"262","256","Belle de jour","Buñuel, Luis","1967","France","100","https://www.dailymotion.com/video/x27mjl9"
"264","271","Eyes Wide Shut","Kubrick, Stanley","1999","USA","159","https://www.dailymotion.com/video/x7vkake"
"265","258","Red River","Hawks, Howard","1948","USA","133","https://www.dailymotion.com/video/xih4lv"
"267","263","Uncle Boonmee Who Can Recall His Past Lives","Weerasethakul, Apichatpong","2010","Thailand","114","https://www.dailymotion.com/video/x28d7jp"
"268","264","Heat","Mann, Michael","1995","USA","174","https://www.dailymotion.com/video/x89xvsf"
"269","262","Night and Fog","Resnais, Alain","1955","France","32","https://www.dailymotion.com/video/x8gham7"
"271","269","Fargo","Coen, Joel & Ethan Coen","1996","USA","98","https://www.dailymotion.com/video/x8ne7mt"
"272","272","Black Girl","Sembene, Ousmane","1966","Senegal","65","https://www.dailymotion.com/video/x8pc2j9"
"274","274","F for Fake","Welles, Orson","1973","France","89","https://www.dailymotion.com/video/x8gwbr1"
"275","267","Kind Hearts and Coronets","Hamer, Robert","1949","UK","106","https://www.dailymotion.com/video/x6d6yfd"
"277","280","My Night at Maud's","Rohmer, Eric","1969","France","105","https://www.dailymotion.com/video/x2an7gr"
"278","279","Sweet Smell of Success","Mackendrick, Alexander","1957","USA","96","https://www.dailymotion.com/video/x2vtaq8"
"283","291","Paths of Glory","Kubrick, Stanley","1957","USA","86","https://www.dailymotion.com/video/x3o9eik"
"284","284","Goodbye, Dragon Inn","Tsai Ming-liang","2003","Taiwan","82","https://www.dailymotion.com/video/x4uw98d"
"285","281","Groundhog Day","Ramis, Harold","1993","USA","103","https://www.dailymotion.com/video/x71rzcx"
"289","283","Pandora's Box","Pabst, G.W.","1929","Germany","133","https://www.dailymotion.com/video/x98glqm"
"294","290","India Song","Duras, Marguerite","1975","France","120","https://www.dailymotion.com/video/x8fjcn0"
"298","319","Cabaret","Fosse, Bob","1972","USA","128","https://www.dailymotion.com/video/x85kmb"
"299","296","Happy Together","Wong Kar-wai","1997","Hong Kong","97","https://www.dailymotion.com/video/x1g294"
"300","302","Unforgiven","Eastwood, Clint","1992","USA","127","https://www.dailymotion.com/video/x3f17om"
"301","314","All That Jazz","Fosse, Bob","1979","USA","123","https://www.dailymotion.com/video/x3y49d"
"302","297","Distant Voices, Still Lives","Davies, Terence","1988","UK","85","https://www.dailymotion.com/video/x9bpgji"
"303","298","Mean Streets","Scorsese, Martin","1973","USA","110","https://www.dailymotion.com/video/x2lbw43"
"309","306","Charulata","Ray, Satyajit","1964","India","117","https://www.dailymotion.com/video/x8yk2ne"
"311","321","Melancholia","von Trier, Lars","2011","Denmark","136","https://www.dailymotion.com/video/x2lbw1a"
"312","308","Faces","Cassavetes, John","1968","USA","130","https://www.dailymotion.com/video/x2lbr91"
"318","309","Monsieur Verdoux","Chaplin, Charles","1947","USA","123","https://www.dailymotion.com/video/x6by70r"
"319","312","Videodrome","Cronenberg, David","1983","Canada","90","https://www.dailymotion.com/video/xnfpoh"
"322","318","Freaks","Browning, Tod","1932","USA","64","https://www.dailymotion.com/video/x7o5iwi"
"328","317","Lola Montès","Ophüls, Max","1955","France","116","https://www.dailymotion.com/video/x26m78i"
"330","327","Husbands","Cassavetes, John","1970","USA","138","https://www.dailymotion.com/video/xpvio2"
"332","337","Amadeus","Forman, Milos","1984","USA","158","https://www.dailymotion.com/video/x4exqeq"
"333","335","Bonnie and Clyde","Penn, Arthur","1967","USA","111","https://www.dailymotion.com/video/x3azt9e"
"335","328","Pyaasa","Dutt, Guru","1957","India","146","https://www.dailymotion.com/video/x1yhj15"
"336","332","Underground","Kusturica, Emir","1995","Yugoslavia","167","https://www.dailymotion.com/video/x7m0oqg"
"342","343","Midnight Cowboy","Schlesinger, John","1969","USA","113","https://www.dailymotion.com/video/x28dam1"
"345","344","Weekend","Godard, Jean-Luc","1967","France","105","https://www.dailymotion.com/video/x14dldh"
"346","342","Kiss Me Deadly","Aldrich, Robert","1955","USA","106","https://www.dailymotion.com/video/xfi1p0"
"348","352","West Side Story","Wise, Robert & Jerome Robbins","1961","USA","151","https://www.dailymotion.com/video/x80vosk"
"350","357","Mad Max: Fury Road","Miller, George","2015","Australia","120","https://www.dailymotion.com/video/x2cbvlf"
"351","353","Dog Day Afternoon","Lumet, Sidney","1975","USA","125","https://www.dailymotion.com/video/x6ns6m"
"352","354","Get Out","Peele, Jordan","2017","USA","104","https://www.dailymotion.com/video/x5jxcsy"
"353","356","Night of the Living Dead","Romero, George A.","1968","USA","96","https://www.dailymotion.com/video/x8m6h5z"
"355","346","El","Buñuel, Luis","1953","Mexico","91","https://www.dailymotion.com/video/x3j9mxn"
"358","358","How Green Was My Valley","Ford, John","1941","USA","118","https://www.dailymotion.com/video/x3l9zkc"
"361","367","It Happened One Night","Capra, Frank","1934","USA","105","https://www.dailymotion.com/video/xvzax5"
"363","360","Last Tango in Paris","Bertolucci, Bernardo","1972","Italy","129","https://www.dailymotion.com/video/xgevcu"
"365","362","Heaven's Gate","Cimino, Michael","1980","USA","219","https://www.dailymotion.com/video/x2y42fn"
"366","361","Muriel","Resnais, Alain","1963","France","115","https://www.dailymotion.com/video/x13w87b"
"367","370","Marnie","Hitchcock, Alfred","1964","USA","130","https://www.dailymotion.com/video/x2efbkg"
"371","371","Yojimbo","Kurosawa, Akira","1961","Japan","110","https://www.dailymotion.com/video/x16n59v"
"372","372","Harold and Maude","Ashby, Hal","1971","USA","91","https://www.dailymotion.com/video/x2eftrb"
"373","381","Teorema","Pasolini, Pier Paolo","1968","Italy","98","https://www.dailymotion.com/video/x2314w2"
"374","374","Peeping Tom","Powell, Michael","1960","UK","101","https://www.dailymotion.com/video/x4yo713"
"375","369","Fitzcarraldo","Herzog, Werner","1982","West Germany","157","https://www.dailymotion.com/video/x8ex3r3"
"376","377","Lost Highway","Lynch, David","1997","USA","134","https://www.dailymotion.com/video/x8xkris"
"377","378","Stranger Than Paradise","Jarmusch, Jim","1984","USA","89","https://www.dailymotion.com/video/x8tmgxi"
"380","385","Stromboli","Rossellini, Roberto","1950","Italy","107","https://www.dailymotion.com/video/x8eoyvm"
"384","386","Safe","Haynes, Todd","1995","USA","119","https://www.dailymotion.com/video/x2lbtrc"
"385","383","Aliens","Cameron, James","1986","USA","137","https://www.dailymotion.com/video/xfohca"
"388","390","This is Spinal Tap","Reiner, Rob","1984","USA","82","https://www.dailymotion.com/video/xaccnw"
"389","393","Nostalghia","Tarkovsky, Andrei","1983","Italy","120","https://www.dailymotion.com/video/x619bkm"
"390","414","Under the Skin","Glazer, Jonathan","2013","UK","108","https://www.dailymotion.com/video/x8jlzze"
"391","384","Tristana","Buñuel, Luis","1970","Spain","98","https://www.dailymotion.com/video/x5zo9rs"
"393","389","Mon oncle","Tati, Jacques","1958","France","126","https://www.dailymotion.com/video/x3b4b0w"
"394","403","Dogville","von Trier, Lars","2003","Denmark","177","https://www.dailymotion.com/video/x8w7nhw"
"395","397","Orlando","Potter, Sally","1992","UK","94","https://www.dailymotion.com/video/xkp39l"
"396","400","Opening Night","Cassavetes, John","1977","USA","144","https://www.dailymotion.com/video/x4yyo2l"
"397","392","Limite","Peixoto, Mario","1931","Brazil","114","https://www.dailymotion.com/video/xfk7ih"
"402","415","1900","Bertolucci, Bernardo","1976","Italy","245","https://www.dailymotion.com/video/x8fkm7q"
"405","396","I Know Where I'm Going!","Powell, Michael & Emeric Pressburger","1945","UK","92","https://www.dailymotion.com/video/x2gu8yr"
"406","402","Suspiria","Argento, Dario","1977","Italy","92","https://www.dailymotion.com/video/x4mwi7"
"407","398","Crimes and Misdemeanors","Allen, Woody","1989","USA","104","https://www.dailymotion.com/video/x4k0bi6"
"410","411","Orpheus","Cocteau, Jean","1950","France","95","https://www.dailymotion.com/video/x8mknxu"
"411","409","Eyes Without a Face","Franju, Georges","1960","France","88","https://www.dailymotion.com/video/x45r4a"
"413","418","Lost in Translation","Coppola, Sofia","2003","USA","102","https://www.dailymotion.com/video/x27k0oe"
"415","429","All the President's Men","Pakula, Alan J.","1976","USA","138","https://www.dailymotion.com/video/x4k114j"
"416","410","Snow White and the Seven Dwarfs","Hand, David","1937","USA","83","https://www.dailymotion.com/video/x28dbfe"
"417","406","Splendor in the Grass","Kazan, Elia","1961","USA","124","https://www.dailymotion.com/video/x73k12"
"418","417","Fantasia","Various Directors","1940","USA","120","https://www.dailymotion.com/video/x31ejih"
"420","431","Scenes from a Marriage","Bergman, Ingmar","1973","Sweden","168","https://www.dailymotion.com/video/x83jf0z"
"424","420","Salvatore Giuliano","Rosi, Francesco","1962","Italy","125","https://www.dailymotion.com/video/x8do546"
"425","422","Bride of Frankenstein","Whale, James","1935","USA","75","https://www.dailymotion.com/video/x3tvud"
"426","442","If….","Anderson, Lindsay","1968","UK","111","https://www.dailymotion.com/video/x2lbu2p"
"430","427","Possession","Żuławski, Andrzej","1981","France","124","https://www.dailymotion.com/video/xp9njz"
"432","423","Holy Motors","Carax, Leos","2012","France","115","https://www.dailymotion.com/video/xr6lyj"
"438","441","Accattone","Pasolini, Pier Paolo","1961","Italy","120","https://www.dailymotion.com/video/x8teykk"
"439","456","Casino","Scorsese, Martin","1995","USA","182","https://www.dailymotion.com/video/x37m0y7"
"442","469","Network","Lumet, Sidney","1976","USA","121","https://www.dailymotion.com/video/x7pudjk"
"445","458","Naked","Leigh, Mike","1993","UK","126","https://www.dailymotion.com/video/x5er6rc"
"446","447","Limelight","Chaplin, Charles","1952","USA","145","https://www.dailymotion.com/video/x7e9l"
"450","487","Toni Erdmann","Ade, Maren","2016","Germany","162","https://www.dailymotion.com/video/x8jfwb8"
"451","440","French Cancan","Renoir, Jean","1955","France","102","https://www.dailymotion.com/video/x82tcsj"
"452","461","À nos amours","Pialat, Maurice","1983","France","102","https://www.dailymotion.com/video/xwhmi5"
"453","448","Koyaanisqatsi","Reggio, Godfrey","1982","USA","87","https://www.dailymotion.com/video/x8dsm8x"
"456","446","Festen","Vinterberg, Thomas","1998","Denmark","105","https://www.dailymotion.com/video/x101yh"
"461","482","Dersu Uzala","Kurosawa, Akira","1975","USSR","144","https://www.dailymotion.com/video/x8a47tw"
"462","467","Grave of the Fireflies","Takahata, Isao","1988","Japan","89","https://www.dailymotion.com/video/x8gbex7"
"463","452","October","Eisenstein, Sergei & Grigori Aleksandrov","1928","USSR","103","https://www.dailymotion.com/video/x2lbsxz"
"464","459","Paris is Burning","Livingston, Jennie","1990","USA","78","https://www.dailymotion.com/video/x8oubyn"
"467","516","Pan's Labyrinth","del Toro, Guillermo","2006","Spain","120","https://www.dailymotion.com/video/x3hrbu1"
"468","468","Harlan County, U.S.A.","Kopple, Barbara","1976","USA","103","https://www.dailymotion.com/video/x2g2baj"
"469","457","Pinocchio","Sharpsteen, Ben & Hamilton Luske","1940","USA","88","https://www.dailymotion.com/video/x6wvi97"
"473","490","Steamboat Bill, Jr.","Keaton, Buster & Charles Reisner","1928","USA","71","https://www.dailymotion.com/video/x4y4r9"
"474","470","Syndromes and a Century","Weerasethakul, Apichatpong","2006","Thailand","105","https://www.dailymotion.com/video/xpxzzn"
"476","455","Phantom Thread","Anderson, Paul Thomas","2017","USA","130","https://www.dailymotion.com/video/x6cn17b"
"477","483","Elephant","Van Sant, Gus","2003","USA","81","https://www.dailymotion.com/video/x3jo7s"
"478","478","High Noon","Zinnemann, Fred","1952","USA","84","https://www.dailymotion.com/video/x6t1jr"
"481","474","Wagon Master","Ford, John","1950","USA","86","https://www.dailymotion.com/video/xfr1wb"
"482","488","Reservoir Dogs","Tarantino, Quentin","1992","USA","99","https://www.dailymotion.com/video/x18xfg"
"484","477","Lola","Demy, Jacques","1961","France","90","https://www.dailymotion.com/video/x2l5b00"
"485","472","Platform","Jia Zhangke","2000","China","154","https://www.dailymotion.com/video/xpwe6w"
"487","475","Carrie","De Palma, Brian","1976","USA","97","https://www.dailymotion.com/video/x3i8rkj"
"489","476","Senso","Visconti, Luchino","1954","Italy","123","https://www.dailymotion.com/video/x8u34x4"
"490","489","Withnail & I","Robinson, Bruce","1987","UK","107","https://www.dailymotion.com/video/x2gu770"
"492","481","Once Upon a Time in Anatolia","Ceylan, Nuri Bilge","2011","Turkey","157","https://www.dailymotion.com/video/x1xn8uj"
"493","485","Zama","Martel, Lucrecia","2017","Argentina","115","https://www.dailymotion.com/video/x6nsntd"
"495","537","Fight Club","Fincher, David","1999","USA","139","https://www.dailymotion.com/video/x20p75o"
"497","509","Twin Peaks: Fire Walk with Me","Lynch, David","1992","USA","134","https://www.dailymotion.com/video/x8w7e20"
"498","523","No Country for Old Men","Coen, Joel & Ethan Coen","2007","USA","122","https://www.dailymotion.com/video/x2lbxzk"
"500","501","Five Easy Pieces","Rafelson, Bob","1970","USA","98","https://www.dailymotion.com/video/x20p6yh"
"501","492","Blow Out","De Palma, Brian","1981","USA","108","https://www.dailymotion.com/video/x7vs6j0"
"502","525","To Have and Have Not","Hawks, Howard","1944","USA","100","https://www.dailymotion.com/video/x28d8an"
"503","495","Shane","Stevens, George","1953","USA","118","https://www.dailymotion.com/video/x9avvya"
"504","507","To Kill a Mockingbird","Mulligan, Robert","1962","USA","129","https://www.dailymotion.com/video/x28dauo"
"505","505","Monty Python's Life of Brian","Jones, Terry","1979","UK","93","https://www.dailymotion.com/video/x9m1xne"
"506","493","Masculin féminin","Godard, Jean-Luc","1966","France","103","https://www.dailymotion.com/video/x8dxc1r"
"507","502","Marketa Lazarová","Vlácil, Frantisek","1967","Czechoslovakia","162","https://www.dailymotion.com/video/x8wq0xo"
"508","494","After Life","Koreeda, Hirokazu","1998","Japan","118","https://www.dailymotion.com/video/x74ikws"
"510","522","Princess Mononoke","Miyazaki, Hayao","1997","Japan","134","https://www.dailymotion.com/video/xq5977"
"513","520","Short Cuts","Altman, Robert","1993","USA","189","https://www.dailymotion.com/video/x8ee92q"
"514","510","Inland Empire","Lynch, David","2006","USA","180","https://www.dailymotion.com/video/x16v7d"
"516","508","Oldboy","Park Chan-wook","2003","South Korea","120","https://www.dailymotion.com/video/xel5s0"
"517","512","Crash","Cronenberg, David","1996","Canada","100","https://www.dailymotion.com/video/x9ut3h4"
"518","524","Die Hard","McTiernan, John","1988","USA","131","https://www.dailymotion.com/video/x89y2pp"
"521","511","Boogie Nights","Anderson, Paul Thomas","1997","USA","155","https://www.dailymotion.com/video/xd40jg"
"523","513","Dead Ringers","Cronenberg, David","1988","Canada","115","https://www.dailymotion.com/video/x8jl2t0"
"529","533","12 Angry Men","Lumet, Sidney","1957","USA","95","https://www.dailymotion.com/video/x28d7y3"
"532","529","Faust","Murnau, F.W.","1926","Germany","116","https://www.dailymotion.com/video/x143pah"
"533","544","Boyhood","Linklater, Richard","2014","USA","165","https://www.dailymotion.com/video/x89xu5l"
"534","531","Aparajito","Ray, Satyajit","1956","India","108","https://www.dailymotion.com/video/x8mp6n6"
"535","539","Memories of Murder","Bong Joon-ho","2003","South Korea","132","https://www.dailymotion.com/video/x86vt9n"
"536","535","Alexander Nevsky","Eisenstein, Sergei","1938","USSR","107","https://www.dailymotion.com/video/x7kvsj"
"537","526","Yeelen","Cissé, Souleymane","1987","Mali","105","https://www.dailymotion.com/video/x10v977"
"539","527","Blue","Jarman, Derek","1993","UK","79","https://www.dailymotion.com/video/x6gp1pl"
"540","536","Point Blank","Boorman, John","1967","USA","92","https://www.dailymotion.com/video/x7c99ag"
"541","567","Ninotchka","Lubitsch, Ernst","1939","USA","110","https://www.dailymotion.com/video/x8diqbm"
"542","532","Rosetta","Dardenne, Jean-Pierre & Luc Dardenne","1999","Belgium","94","https://www.dailymotion.com/video/xdezao"
"545","561","Doctor Zhivago","Lean, David","1965","USA","197","https://www.dailymotion.com/video/xd2xgx"
"546","541","Nostalgia for the Light","Guzmán, Patricio","2010","France","90","https://www.dailymotion.com/video/x28d7qb"
"548","538","Man of Aran","Flaherty, Robert J.","1934","UK","77","https://www.dailymotion.com/video/xbz6ro"
"552","546","Picnic at Hanging Rock","Weir, Peter","1975","Australia","110","https://www.dailymotion.com/video/x6lm5ub"
"553","540","Je, tu, il, elle","Akerman, Chantal","1974","Belgium","86","https://www.dailymotion.com/video/x8ftrvz"
"554","558","Se7en","Fincher, David","1995","USA","127","https://www.dailymotion.com/video/x2249l"
"555","556","Punch-Drunk Love","Anderson, Paul Thomas","2002","USA","95","https://www.dailymotion.com/video/x8p85p5"
"556","545","Strangers on a Train","Hitchcock, Alfred","1951","USA","101","https://www.dailymotion.com/video/x9tvvz2"
"560","571","Butch Cassidy and the Sundance Kid","Hill, George Roy","1969","USA","110","https://www.dailymotion.com/video/x4gsu7l"
"562","553","WALL-E","Stanton, Andrew","2008","USA","98","https://www.dailymotion.com/video/x51fp5"
"563","555","I Walked with a Zombie","Tourneur, Jacques","1943","USA","69","https://www.dailymotion.com/video/x46kzf"
"564","554","Dead Man","Jarmusch, Jim","1995","USA","121","https://www.dailymotion.com/video/x14v44u"
"565","570","Kagemusha","Kurosawa, Akira","1980","Japan","159","https://www.dailymotion.com/video/x3ahcti"
"566","563","Morvern Callar","Ramsay, Lynne","2002","UK","97","https://www.dailymotion.com/video/xpwkcp"
"567","608","As I Was Moving Ahead Occasionally I Saw Brief Glimpses of Beauty","Mekas, Jonas","2000","USA","288","https://www.dailymotion.com/video/xvw26b"
"569","566","Brokeback Mountain","Lee, Ang","2005","USA","134","https://www.dailymotion.com/video/xd6au5"
"570","557","Fellini Satyricon","Fellini, Federico","1969","Italy","129","https://www.dailymotion.com/video/x8hzeqs"
"573","578","Mad Max 2","Miller, George","1981","Australia","96","https://www.dailymotion.com/video/xrj9hb"
"580","581","Easy Rider","Hopper, Dennis","1969","USA","94","https://www.dailymotion.com/video/x8sva90"
"581","577","Laura","Preminger, Otto","1944","USA","85","https://www.dailymotion.com/video/xnpd10"
"585","576","That Obscure Object of Desire","Buñuel, Luis","1977","France","103","https://www.dailymotion.com/video/xtp0zo"
"586","613","Forrest Gump","Zemeckis, Robert","1994","USA","142","https://www.dailymotion.com/video/x2lbwe9"
"587","580","Barton Fink","Coen, Joel & Ethan Coen","1991","USA","117","https://www.dailymotion.com/video/x2lbul4"
"589","669","Plácido","García Berlanga, Luis","1961","Spain","85","https://www.dailymotion.com/video/x2hzjm3"
"590","591","Bande à part","Godard, Jean-Luc","1964","France","95","https://www.dailymotion.com/video/x9r2vys"
"593","586","Halloween","Carpenter, John","1978","USA","93","https://www.dailymotion.com/video/x6ldui6"
"594","610","Amélie","Jeunet, Jean-Pierre","2001","France","122","https://www.dailymotion.com/video/x85yym"
"597","595","Jurassic Park","Spielberg, Steven","1993","USA","127","https://www.dailymotion.com/video/xktefw"
"598","599","Repulsion","Polanski, Roman","1965","UK","105","https://www.dailymotion.com/video/xje702"
"599","585","Tale of Tales","Norshteyn, Yuriy","1979","USSR","29","https://www.dailymotion.com/video/x59k4ih"
"600","601","Crouching Tiger, Hidden Dragon","Lee, Ang","2000","Taiwan","120","https://www.dailymotion.com/video/x3uuuho"
"601","592","Tootsie","Pollack, Sydney","1982","USA","116","https://www.dailymotion.com/video/x2qqh0j"
"602","627","Symbiopsychotaxiplasm: Take One","Greaves, William","1968","USA","75","https://www.dailymotion.com/video/x2g9z5v"
"603","606","Terminator 2: Judgment Day","Cameron, James","1991","USA","136","https://www.dailymotion.com/video/x5yvi1s"
"604","589","Gentlemen Prefer Blondes","Hawks, Howard","1953","USA","91","https://www.dailymotion.com/video/x2nrer"
"605","590","Grey Gardens","Maysles, David/Albert Maysles/Ellen Hovde/Muffie Meyer","1975","USA","95","https://www.dailymotion.com/video/x8dfjhm"
"606","625","Zodiac","Fincher, David","2007","USA","158","https://www.dailymotion.com/video/x2b2cae"
"607","593","Colossal Youth","Costa, Pedro","2006","France","155","https://www.dailymotion.com/video/x8egmlq"
"609","602","Hatari!","Hawks, Howard","1962","USA","157","https://www.dailymotion.com/video/xr54xu"
"612","609","Full Metal Jacket","Kubrick, Stanley","1987","USA","116","https://www.dailymotion.com/video/x2lbyem"
"614","623","Synecdoche, New York","Kaufman, Charlie","2008","USA","124","https://www.dailymotion.com/video/x8tqx4"
"615","620","Deliverance","Boorman, John","1972","USA","109","https://www.dailymotion.com/video/x929z2g"
"616","653","Down by Law","Jarmusch, Jim","1986","USA","107","https://www.dailymotion.com/video/x7cc60e"
"620","604","Providence","Resnais, Alain","1977","France","110","https://www.dailymotion.com/video/x50bldy"
"622","619","Shadows","Cassavetes, John","1959","USA","87","https://www.dailymotion.com/video/x50bjk9"
"628","617","Scorpio Rising","Anger, Kenneth","1963","USA","28","https://www.dailymotion.com/video/xrsmu"
"631","622","Pink Flamingos","Waters, John","1972","USA","92","https://www.dailymotion.com/video/x9qg0r"
"632","626","Portrait of Jason","Clarke, Shirley","1967","USA","105","https://www.dailymotion.com/video/x8gj783"
"633","631","Alphaville","Godard, Jean-Luc","1965","France","95","https://www.dailymotion.com/video/x22vf2m"
"634","634","Don't Look Back","Pennebaker, D.A.","1967","USA","96","https://www.dailymotion.com/video/x8pnqwm"
"636","644","Rebecca","Hitchcock, Alfred","1940","USA","130","https://www.dailymotion.com/video/x4yyohj"
"637","635","Hour of the Wolf","Bergman, Ingmar","1968","Sweden","88","https://www.dailymotion.com/video/x89k8ow"
"639","629","Harakiri","Kobayashi, Masaki","1962","Japan","133","https://www.dailymotion.com/video/x2l5862"
"640","647","Casque d'or","Becker, Jacques","1952","France","96","https://www.dailymotion.com/video/x3azw5l"
"642","648","Titanic","Cameron, James","1997","USA","194","https://www.dailymotion.com/video/x31nh8z"
"645","637","Hana-bi","Kitano, Takeshi","1997","Japan","103","https://www.dailymotion.com/video/x8epglk"
"647","646","Frankenstein","Whale, James","1931","USA","70","https://www.dailymotion.com/video/x1f7g80"
"648","641","Rocky","Avildsen, John G.","1976","USA","119","https://www.dailymotion.com/video/x7dxuv"
"650","640","My Own Private Idaho","Van Sant, Gus","1991","USA","102","https://www.dailymotion.com/video/xqrwr2"
"651","659","Scarface","Hawks, Howard","1932","USA","93","https://www.dailymotion.com/video/x2i7a"
"653","654","Strike","Eisenstein, Sergei","1925","USSR","82","https://www.dailymotion.com/video/x8ldpxu"
"654","639","Hoop Dreams","James, Steve","1994","USA","170","https://www.dailymotion.com/video/x8omm48"
"655","671","Nazarín","Buñuel, Luis","1958","Mexico","94","https://www.dailymotion.com/video/x7res7x"
"656","678","Ratcatcher","Ramsay, Lynne","1999","UK","94","https://www.dailymotion.com/video/x8u5zmo"
"657","643","Walkabout","Roeg, Nicolas","1971","UK","100","https://www.dailymotion.com/video/x8tie9u"
"662","650","Xala","Sembene, Ousmane","1975","Senegal","123","https://www.dailymotion.com/video/x8ro2nt"
"664","662","Akira","Otomo, Katsuhiro","1988","Japan","124","https://www.dailymotion.com/video/x2lbuuj"
"666","672","Arrebato","Zulueta, Iván","1979","Spain","105","https://www.dailymotion.com/video/x96od1"
"667","658","Millennium Mambo","Hou Hsiao-hsien","2001","Taiwan","119","https://www.dailymotion.com/video/xpwehf"
"670","660","Amour","Haneke, Michael","2012","Austria","127","https://www.dailymotion.com/video/x2lbrc3"
"674","661","Bambi","Hand, David","1942","USA","69","https://www.dailymotion.com/video/x2lbpma"
"679","694","Toy Story","Lasseter, John","1995","USA","81","https://www.dailymotion.com/video/x2h2mz"
"682","685","Wild at Heart","Lynch, David","1990","USA","127","https://www.dailymotion.com/video/x809d3n"
"683","687","Rushmore","Anderson, Wes","1998","USA","93","https://www.dailymotion.com/video/x8dth0t"
"686","691","Robocop","Verhoeven, Paul","1987","USA","102","https://www.dailymotion.com/video/x7p0uei"
"687","706","When Harry Met Sally...","Reiner, Rob","1989","USA","95","https://www.dailymotion.com/video/x2gsmbr"
"690","681","Trainspotting","Boyle, Danny","1996","UK","95","https://www.dailymotion.com/video/x8ygkry"
"691","677","Hyènes","Diop Mambéty, Djibril","1992","Senegal","110","https://www.dailymotion.com/video/x8a2grk"
"692","679","Mr. Smith Goes to Washington","Capra, Frank","1939","USA","129","https://www.dailymotion.com/video/x28davj"
"693","749","Distant","Ceylan, Nuri Bilge","2002","Turkey","110","https://www.dailymotion.com/video/x8lod3g"
"695","684","Local Hero","Forsyth, Bill","1983","UK","111","https://www.dailymotion.com/video/x9r29q8"
"696","686","Gimme Shelter","Maysles, Albert/David Maysles/Charlotte Zwerin","1970","USA","91","https://www.dailymotion.com/video/x2lbou2"
"697","700","Wake in Fright","Kotcheff, Ted","1971","Australia","109","https://www.dailymotion.com/video/x59k9a3"
"702","713","Dancer in the Dark","von Trier, Lars","2000","Denmark","140","https://www.dailymotion.com/video/x8m0z5u"
"703","716","Thelma & Louise","Scott, Ridley","1991","USA","128","https://www.dailymotion.com/video/x7cp4e"
"704","732","Fish Tank","Arnold, Andrea","2009","UK","123","https://www.dailymotion.com/video/x2l5bm3"
"705","689","Cure","Kurosawa, Kiyoshi","1997","Japan","111","https://www.dailymotion.com/video/x8fqmaq"
"707","704","Roma","Cuarón, Alfonso","2018","Mexico","135","https://www.dailymotion.com/video/x8dpd7n"
"709","701","Lancelot du Lac","Bresson, Robert","1974","France","85","https://www.dailymotion.com/video/x9h94pe"
"711","702","Before Sunset","Linklater, Richard","2004","USA","80","https://www.dailymotion.com/video/x8poxux"
"712","690","Nouvelle vague","Godard, Jean-Luc","1990","France","90","https://www.dailymotion.com/video/x9rscbu"
"713","697","Salesman","Maysles, Albert/David Maysles/Charlotte Zwerin","1969","USA","91","https://www.dailymotion.com/video/x8sha64"
"714","699","Sauve qui peut (la vie)","Godard, Jean-Luc","1980","France","87","https://www.dailymotion.com/video/x8a2mwy"
"716","714","Carol","Haynes, Todd","2015","UK","118","https://www.dailymotion.com/video/x3kzz0e"
"718","709","Hunger","McQueen, Steve","2008","UK","96","https://www.dailymotion.com/video/x89y2ir"
"721","717","Moulin Rouge!","Luhrmann, Baz","2001","Australia","127","https://www.dailymotion.com/video/x26z2jz"
"724","772","Malcolm X","Lee, Spike","1992","USA","201","https://www.dailymotion.com/video/x8m6j4v"
"725","728","Ben-Hur","Wyler, William","1959","USA","212","https://www.dailymotion.com/video/x7thupb"
"726","724","Antonio das Mortes","Rocha, Glauber","1969","Brazil","95","https://www.dailymotion.com/video/x8e4i4m"
"731","722","One Way or Another","Gómez, Sara","1977","Cuba","78","https://www.dailymotion.com/video/x1zqi7"
"732","726","Stand by Me","Reiner, Rob","1986","USA","89","https://www.dailymotion.com/video/x5wiu9z"
"734","754","Dazed and Confused","Linklater, Richard","1993","USA","103","https://www.dailymotion.com/video/x1itw8"
"735","723","Moonfleet","Lang, Fritz","1955","USA","89","https://www.dailymotion.com/video/x109npm"
"736","742","Titicut Follies","Wiseman, Frederick","1967","USA","84","https://www.dailymotion.com/video/x60usqq"
"741","736","Love Me Tonight","Mamoulian, Rouben","1932","USA","96","https://www.dailymotion.com/video/xovu8m"
"743","747","Y tu mamá también","Cuarón, Alfonso","2001","Mexico","105","https://www.dailymotion.com/video/x8dmgfj"
"745","731","New York, New York","Scorsese, Martin","1977","USA","155","https://www.dailymotion.com/video/xjtgf6"
"746","743","Phantom of the Paradise","De Palma, Brian","1974","USA","91","https://www.dailymotion.com/video/x2lbnn0"
"753","740","Triumph of the Will","Riefenstahl, Leni","1935","Germany","110","https://www.dailymotion.com/video/x9dlt"
"755","771","Diaries, Notes and Sketches","Mekas, Jonas","1969","USA","177","https://www.dailymotion.com/video/x31x34f"
"758","761","Born in Flames","Borden, Lizzie","1983","USA","79","https://www.dailymotion.com/video/x8jod5j"
"761","790","Fort Apache","Ford, John","1948","USA","127","https://www.dailymotion.com/video/x9r8zu6"
"762","746","Subarnarekha","Ghatak, Ritwik","1965","India","126","https://www.dailymotion.com/video/x8gi52w"
"763","797","Memento","Nolan, Christopher","2000","USA","113","https://www.dailymotion.com/video/x3yqff"
"764","750","Detour","Ulmer, Edgar G.","1945","USA","69","https://www.dailymotion.com/video/x8k3tsu"
"765","770","Lolita","Kubrick, Stanley","1962","UK","152","https://www.dailymotion.com/video/x2lbx6p"
"771","758","Veronika Voss","Fassbinder, Rainer Werner","1982","West Germany","105","https://www.dailymotion.com/video/x11tt7t"
"773","759","Vive L'Amour","Tsai Ming-liang","1994","Taiwan","118","https://www.dailymotion.com/video/x8esrvp"
"774","765","Ossessione","Visconti, Luchino","1943","Italy","140","https://www.dailymotion.com/video/x5dohp"
"775","764","Hellzapoppin'","Potter, H.C.","1941","USA","84","https://www.dailymotion.com/video/x8gp8b0"
"777","762","Good Morning","Ozu, Yasujiro","1959","Japan","94","https://www.dailymotion.com/video/x5lfbje"
"778","763","Great Expectations","Lean, David","1946","UK","118","https://www.dailymotion.com/video/x8idqai"
"780","787","Mamma Roma","Pasolini, Pier Paolo","1962","Italy","110","https://www.dailymotion.com/video/x11gcs3"
"782","807","JFK","Stone, Oliver","1991","USA","189","https://www.dailymotion.com/video/x89xylx"
"784","786","Morocco","von Sternberg, Josef","1930","USA","92","https://www.dailymotion.com/video/xxj90y"
"785","817","Chikamatsu monogatari","Mizoguchi, Kenji","1954","Japan","100","https://www.dailymotion.com/video/x454j1o"
"787","767","Wings","Shepitko, Larisa","1966","USSR","85","https://www.dailymotion.com/video/x8mqf21"
"792","794","Miller's Crossing","Coen, Joel & Ethan Coen","1990","USA","115","https://www.dailymotion.com/video/xx2e3a"
"793","792","Ferris Bueller's Day Off","Hughes, John","1986","USA","103","https://www.dailymotion.com/video/x75p5wt"
"794","801","Requiem for a Dream","Aronofsky, Darren","2000","USA","100","https://www.dailymotion.com/video/x6xiju"
"795","774","Zelig","Allen, Woody","1983","USA","79","https://www.dailymotion.com/video/x8eafrz"
"797","784","Blissfully Yours","Weerasethakul, Apichatpong","2002","Thailand","125","https://www.dailymotion.com/video/x8a0wvf"
"800","793","Trouble Every Day","Denis, Claire","2001","France","101","https://www.dailymotion.com/video/x6v651q"
"801","779","Faster, Pussycat! Kill! Kill!","Meyer, Russ","1965","USA","83","https://www.dailymotion.com/video/xz5oq3"
"803","782","Taipei Story","Yang, Edward","1985","Taiwan","119","https://www.dailymotion.com/video/x7rx0p6"
"804","804","All Quiet on the Western Front","Milestone, Lewis","1930","USA","133","https://www.dailymotion.com/video/x9sx3xa"
"805","843","Scarface","De Palma, Brian","1983","USA","170","https://www.dailymotion.com/video/x2i7a"
"806","806","Funny Games","Haneke, Michael","1997","Austria","108","https://www.dailymotion.com/video/x2lbxy5"
"807","837","Margaret","Lonergan, Kenneth","2011","USA","150","https://www.dailymotion.com/video/x6cp9v2"
"809","816","Shock Corridor","Fuller, Samuel","1963","USA","101","https://www.dailymotion.com/video/x8f8dhy"
"810","818","Van Gogh","Pialat, Maurice","1991","France","158","https://www.dailymotion.com/video/x25r791"
"812","799","Forbidden Games","Clément, René","1952","France","87","https://www.dailymotion.com/video/x8k5dsg"
"815","809","Broadcast News","Brooks, James L.","1987","USA","133","https://www.dailymotion.com/video/x8geohc"
"816","832","Sur, El","Erice, Víctor","1983","Spain","95","https://www.dailymotion.com/video/x8xseio"
"817","805","Rose Hobart","Cornell, Joseph","1936","USA","20","https://www.dailymotion.com/video/x8fasbz"
"819","811","Still Life","Jia Zhangke","2006","China","113","https://www.dailymotion.com/video/x8fblai"
"821","808","Passion","Godard, Jean-Luc","1982","France","87","https://www.dailymotion.com/video/x3yd0cd"
"824","829","Petite Maman","Sciamma, Céline","2021","France","73","https://www.dailymotion.com/video/x81a3ax"
"826","848","Grizzly Man","Herzog, Werner","2005","USA","103","https://www.dailymotion.com/video/x2b5h5s"
"827","830","Deep End","Skolimowski, Jerzy","1970","UK","88","https://www.dailymotion.com/video/x2lbvfq"
"829","823","Losing Ground","Collins, Kathleen","1982","USA","86","https://www.dailymotion.com/video/x8e9w4d"
"830","862","Amores perros","González Iñárritu, Alejandro","2000","Mexico","153","https://www.dailymotion.com/video/x9lurl8"
"831","826","Edward Scissorhands","Burton, Tim","1990","USA","105","https://www.dailymotion.com/video/xb9bz2"
"832","822","She Wore a Yellow Ribbon","Ford, John","1949","USA","103","https://www.dailymotion.com/video/xdb0jn"
"833","913","Let the Right One In","Alfredson, Tomas","2008","Sweden","114","https://www.dailymotion.com/video/x8dtvgv"
"835","860","Irréversible","Noé, Gaspar","2002","France","97","https://www.dailymotion.com/video/x7bbonx"
"836","828","Dumbo","Sharpsteen, Ben","1941","USA","64","https://www.dailymotion.com/video/x12tn0i"
"839","833","Funeral Parade of Roses","Matsumoto, Toshio","1969","Japan","105","https://www.dailymotion.com/video/xm3chg"
"842","854","Invasion of the Body Snatchers","Siegel, Don","1956","USA","80","https://www.dailymotion.com/video/x2reoe"
"843","834","Gummo","Korine, Harmony","1997","USA","88","https://www.dailymotion.com/video/x8ec0qv"
"844","847","Persepolis","Paronnaud, Vincent & Marjane Satrapi","2007","France","96","https://www.dailymotion.com/video/x2594zy"
"845","852","Inglourious Basterds","Tarantino, Quentin","2009","USA","153","https://www.dailymotion.com/video/x8ftyi"
"846","839","Female Trouble","Waters, John","1974","USA","98","https://www.dailymotion.com/video/x8udy4e"
"848","869","Angel","Lubitsch, Ernst","1937","USA","91","https://www.dailymotion.com/video/xhx5ck"
"849","856","Point Break","Bigelow, Kathryn","1991","USA","122","https://www.dailymotion.com/video/x51bu52"
"852","845","Once Upon a Time... in Hollywood","Tarantino, Quentin","2019","USA","161","https://www.dailymotion.com/video/x9st5do"
"854","934","Mon oncle d'Amérique","Resnais, Alain","1980","France","123","https://www.dailymotion.com/video/x4u2urd"
"856","861","Starship Troopers","Verhoeven, Paul","1997","USA","129","https://www.dailymotion.com/video/x9p7e58"
"857","866","Blue is the Warmest Colour","Kechiche, Abdellatif","2013","France","179","https://www.dailymotion.com/video/x139b66"
"858","873","Mikey and Nicky","May, Elaine","1976","USA","106","https://www.dailymotion.com/video/xpy07j"
"860","857","Toute une nuit","Akerman, Chantal","1982","Belgium","90","https://www.dailymotion.com/video/x8lp1qu"
"861","851","Shame","Bergman, Ingmar","1968","Sweden","103","https://www.dailymotion.com/video/x2lbu49"
"862","844","They Were Expendable","Ford, John","1945","USA","135","https://www.dailymotion.com/video/x9psaag"
"864","846","Sicilia!","Straub, Jean-Marie & Danièle Huillet","1999","Italy","66","https://www.dailymotion.com/video/x563zt6"
"865","867","Clueless","Heckerling, Amy","1995","USA","97","https://www.dailymotion.com/video/x33swns"
"868","889","Saving Private Ryan","Spielberg, Steven","1998","USA","169","https://www.dailymotion.com/video/x2b3kz"
"869","855","Spione","Lang, Fritz","1928","Germany","90","https://www.dailymotion.com/video/x31vc77"
"870","859","Shanghai Express","von Sternberg, Josef","1932","USA","82","https://www.dailymotion.com/video/x8m8gke"
"872","858","Breakfast at Tiffany's","Edwards, Blake","1961","USA","115","https://www.dailymotion.com/video/x7ddtn"
"873","874","Gloria","Cassavetes, John","1980","USA","121","https://www.dailymotion.com/video/xl1ru6"
"875","924","Cría cuervos","Saura, Carlos","1976","Spain","110","https://www.dailymotion.com/video/x8sf65k"
"876","868","Outskirts","Barnet, Boris","1933","USSR","98","https://www.dailymotion.com/video/x9s9x3"
"877","875","Monty Python and the Holy Grail","Gilliam, Terry & Terry Jones","1975","UK","90","https://www.dailymotion.com/video/x139xc"
"888","898","Who's Afraid of Virginia Woolf?","Nichols, Mike","1966","USA","129","https://www.dailymotion.com/video/x8jqb9b"
"895","899","Airplane!","Abrahams, Jim/David Zucker/Jerry Zucker","1980","USA","86","https://www.dailymotion.com/video/x8dyyoc"
"896","897","Caro diario","Moretti, Nanni","1993","Italy","100","https://www.dailymotion.com/video/x93vkpm"
"897","894","Showgirls","Verhoeven, Paul","1995","USA","128","https://www.dailymotion.com/video/x2e4ixl"
"899","915","They Live","Carpenter, John","1988","USA","93","https://www.dailymotion.com/video/x8ds5rz"
"900","902","Zabriskie Point","Antonioni, Michelangelo","1970","USA","112","https://www.dailymotion.com/video/x497n0n"
"901","920","Tongues Untied","Riggs, Marlon","1989","USA","55","https://www.dailymotion.com/video/x8s6f5i"
"902","896","Exotica","Egoyan, Atom","1994","Canada","104","https://www.dailymotion.com/video/x8ucy18"
"903","895","Assault on Precinct 13","Carpenter, John","1976","USA","90","https://www.dailymotion.com/video/xi3i4o"
"904","903","Deep Red","Argento, Dario","1975","Italy","98","https://www.dailymotion.com/video/x8xyjqc"
"914","928","Meek's Cutoff","Reichardt, Kelly","2010","USA","104","https://www.dailymotion.com/video/x28de38"
"915","911","Welfare","Wiseman, Frederick","1975","USA","167","https://www.dailymotion.com/video/xbwz0g"
"917","949","Tabu","Gomes, Miguel","2012","Portugal","118","https://www.dailymotion.com/video/x8j07ek"
"918","909","Ceddo","Sembene, Ousmane","1977","Senegal","120","https://www.dailymotion.com/video/x5mmkmz"
"921","917","Night of the Demon","Tourneur, Jacques","1957","UK","95","https://www.dailymotion.com/video/x8e5bcl"
"924","923","Cemetery of Splendour","Weerasethakul, Apichatpong","2015","Thailand","122","https://www.dailymotion.com/video/x31ei7h"
"928","946","Before Sunrise","Linklater, Richard","1995","USA","101","https://www.dailymotion.com/video/x8x57m4"
"930","963","Shaun of the Dead","Wright, Edgar","2004","UK","99","https://www.dailymotion.com/video/x6dyra"
"931","925","Reds","Beatty, Warren","1981","USA","200","https://www.dailymotion.com/video/x2lbuyn"
"935","939","Blood Simple","Coen, Joel & Ethan Coen","1984","USA","97","https://www.dailymotion.com/video/x7qzy86"
"942","957","American Graffiti","Lucas, George","1973","USA","110","https://www.dailymotion.com/video/x22h8av"
"947","","Dust in the Wind","Hou Hsiao-hsien","1986","Taiwan","109","https://www.dailymotion.com/video/x5znol"
"951","","Diary","Perlov, David","1983","Israel","330","https://www.dailymotion.com/video/x8wsktw"
"955","981","Spartacus","Kubrick, Stanley","1960","USA","197","https://www.dailymotion.com/video/x4i1hh6"
"956","947","American Beauty","Mendes, Sam","1999","USA","121","https://www.dailymotion.com/video/x2lbwe6"
"957","","Excalibur","Boorman, John","1981","UK","140","https://www.dailymotion.com/video/x8jxoif"
"958","951","Perfumed Nightmare","Tahimik, Kidlat","1977","Philippines","93","https://www.dailymotion.com/video/x7xfqaf"
"959","961","Othello","Welles, Orson","1951","Italy","90","https://www.dailymotion.com/video/x2x0y4t"
"962","980","Avatar","Cameron, James","2009","USA","161","https://www.dailymotion.com/video/x2crj2y"
"964","974","Duel","Spielberg, Steven","1971","USA","90","https://www.dailymotion.com/video/x6dixf"
"965","958","Léon","Besson, Luc","1994","France","119","https://www.dailymotion.com/video/x2lbwe8"
"966","975","Z","Costa-Gavras, Constantin","1969","France","127","https://www.dailymotion.com/video/x5mncw"
"968","955","Olympia","Riefenstahl, Leni","1938","Germany","201","https://www.dailymotion.com/video/xtwzbr"
"970","964","Gun Crazy","Lewis, Joseph H.","1950","USA","86","https://www.dailymotion.com/video/x166z41"
"973","","Ghostbusters","Reitman, Ivan","1984","USA","107","https://www.dailymotion.com/video/x44nra2"
"975","984","Carlito's Way","De Palma, Brian","1993","USA","144","https://www.dailymotion.com/video/xfje0e"
"976","967","Rope","Hitchcock, Alfred","1948","USA","80","https://www.dailymotion.com/video/x75t0p2"
"977","959","Moi, un Noir","Rouch, Jean","1958","France","70","https://www.dailymotion.com/video/x8a3q6g"
"987","969","Anatahan","von Sternberg, Josef","1953","Japan","92","https://www.dailymotion.com/video/x8tm9ku"
"989","992","Arabian Nights","Pasolini, Pier Paolo","1974","Italy","130","https://www.dailymotion.com/video/x2pzonu"
"992","996","Kwaidan","Kobayashi, Masaki","1964","Japan","183","https://www.dailymotion.com/video/x7n5uls"
"994","976","Gilda","Vidor, Charles","1946","USA","110","https://www.dailymotion.com/video/x71aebp"
"995","983","Handsworth Songs","Akomfrah, John","1986","UK","61","https://www.dailymotion.com/video/x2g2akt"
"996","987","Sholay","Sippy, Ramesh","1975","India","162","https://www.dailymotion.com/video/x8yey86"
"997","991","Ed Wood","Burton, Tim","1994","USA","124","https://www.dailymotion.com/video/x527nr"
"998","985","Sweetie","Campion, Jane","1989","Australia","97","https://www.dailymotion.com/video/x34bwef"
`;

    // 🔑 OMDb API KEY (keep it private in production!)
const OMDB_API_KEY = "98e4893e"; 
// Note: You should replace the API key above with your actual key if you deploy this.

const FILM_ROTATION_INTERVAL_MINUTES = 1; // Rotation toutes les 1 minute
const MILLISECONDS_PER_MINUTE = 60000;

let films = [];

// DOM ELEMENTS
const filmTitle = document.getElementById('film-title');
const filmQuote = document.getElementById('film-quote');
const filmPosterImg = document.getElementById('film-poster-img');
const movieTrailerIframe = document.getElementById('movie-trailer');
const checkBtn = document.getElementById('check-film-btn');
const userCountSpan = document.getElementById('user-count');
const gomoviesLink = document.getElementById('gomovies-link');
// NOUVEAU: Élément pour le compte à rebours (en supposant l'ID 'countdown-timer')
const countdownTimer = document.getElementById('countdown-timer');


// --- ROBUST CSV PARSING ---
function parseCSV(csvString) {
    const lines = csvString.trim().split('\n');
    const headers = lines[0].split(',').map(h => h.replace(/"/g, '').trim());
    const data = [];

    for (let i = 1; i < lines.length; i++) {
        const line = lines[i].trim();
        if (!line) continue;
        const values = line.match(/(?:"[^"]*"|[^,])+/g) || [];
        const cleanedValues = values.map(v => v.replace(/^"|"$/g, '').trim());
        if (cleanedValues.length === headers.length) {
            let obj = {};
            headers.forEach((header, idx) => obj[header] = cleanedValues[idx]);
            data.push(obj);
        }
    }
    return data;
}

// --- GENERATE GOMOVIES LINK (COMPATIBLE 2025) ---
function generateGoMoviesLink(title) {
    if (!title) return '#';

    let slug = title
        .toLowerCase()
        .replace(/,\s*(the|a|an)$/i, '') 
        .replace(/[^a-z0-9\s-]/g, '')     
        .trim()
        .replace(/\s+/g, '-');            

    slug = slug.replace(/-+$/, '');
    return `https://gomovies.ms/search/${slug}`;
}

// --- DAILYMOTION ID EXTRACTION ---
function extractDailymotionId(url) {
    const match = url.match(/\/video\/([a-zA-Z0-9]+)/);
    return match ? match[1] : 'x5hyokx';
}

// --- FETCH OMDb ---
async function fetchFilmDetails(title, year) {
    if (OMDB_API_KEY === "VOTRE_CLE_OMDB") return null;

    let cleanTitle = title.replace(/,\s*(The|A|An)$/i, '');
    const url = `https://www.omdbapi.com/?t=${encodeURIComponent(cleanTitle)}&y=${year}&apikey=${OMDB_API_KEY}`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        if (data.Response === "True") {
            return {
                title: data.Title,
                plot: data.Plot,
                poster: data.Poster !== "N/A" ? data.Poster : 'poster-default.jpg',
            };
        }
    } catch (error) {
        console.error("OMDb Error:", error);
    }
    return null;
}

// --- UPDATE DISPLAY ---
function updateFilmDisplay(filmDetails, fallbackData) {
    const data = filmDetails || fallbackData;
    const title = data.title || fallbackData.Title;
    const poster = filmDetails ? filmDetails.poster : 'poster-default.jpg';
    const trailerId = extractDailymotionId(fallbackData['Trailer URL']);

    filmTitle.textContent = title ? title.toUpperCase() : "UNKNOWN FILM";

    if (filmDetails && filmDetails.plot) {
        filmQuote.textContent = `"${filmDetails.plot}"`;
    } else {
        filmQuote.textContent = `Directed by ${fallbackData.Director} (${fallbackData.Year}).`;
    }

    filmPosterImg.src = poster;
    filmPosterImg.alt = `Poster of ${title}`;

    // Optimized Dailymotion Embed
    movieTrailerIframe.src = `https://www.dailymotion.com/embed/video/${trailerId}?autoplay=1&mute=1&controls=1&ui-logo=0&ui-theme=dark&queue-enable=false&endscreen-enable=false`;

    // Updated GoMovies link
    gomoviesLink.href = generateGoMoviesLink(title);
    gomoviesLink.target = "_blank"; 
    gomoviesLink.rel = "noopener";
}

// --- CORE FUNCTION: CALCULATE FILM INDEX BASED ON TIME ---
function calculateFilmIndex() {
    if (films.length === 0) return 0;
    
    // 1. Calculate elapsed minutes since midnight UTC
    const now = new Date();
    // Using UTC to ensure the rotation is the same worldwide regardless of user timezone
    const startOfDay = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(), 0, 0, 0));
    
    // Total milliseconds elapsed since midnight UTC
    const elapsedMs = now.getTime() - startOfDay.getTime();
    
    // Total elapsed units (minutes in this case)
    const elapsedUnits = Math.floor(elapsedMs / (FILM_ROTATION_INTERVAL_MINUTES * MILLISECONDS_PER_MINUTE));
    
    // The current film index is the interval count modulo the total number of films
    const index = elapsedUnits % films.length;
    
    return index;
}

// --- NOUVELLE FONCTION: MISE À JOUR DU COMPTE À REBOURS ---
function updateCountdown() {
    if (!countdownTimer) return; // Sécurité si l'élément n'est pas dans le DOM
    
    const now = new Date();
    // Le changement se produit à la minute entière (0 seconde).
    // On calcule les millisecondes restantes dans la minute actuelle.
    const msInCurrentMinute = (now.getSeconds() * 1000) + now.getMilliseconds();
    const msUntilChange = MILLISECONDS_PER_MINUTE - msInCurrentMinute;
    
    // Conversion en secondes et formatage
    const totalSeconds = Math.ceil(msUntilChange / 1000); // Arrondi à la seconde supérieure
    
    const secondsDisplay = String(totalSeconds % 60).padStart(2, '0');
    // Puisque l'intervalle est de 1 minute, les minutes affichées seront toujours 00.
    const minutesDisplay = String(Math.floor(totalSeconds / 60)).padStart(2, '0');

    // Affichage
    if (totalSeconds > 0) {
        countdownTimer.textContent = `NEXT CHANGE IN ${minutesDisplay}:${secondsDisplay}`;
    } else {
        // Juste avant le rechargement du film
        countdownTimer.textContent = "CHANGING FILM...";
    }
}


// --- LOAD FILM ---
async function loadFilm(index) {
    if (films.length === 0) return;
    
    const filmCSV = films[index];
    const details = await fetchFilmDetails(filmCSV.Title, filmCSV.Year);

    updateFilmDisplay(details, filmCSV);
    
    // Reset check button and count for the new film
    checkBtn.textContent = '🎬 I\'ll Watch It!';
    checkBtn.disabled = false;

    // Reset the count using a simple hash based on the film title and day
    const today = new Date().toDateString();
    const dailySeed = `${today}-${filmCSV.Title}`;
    let hash = 0;
    for (let i = 0; i < dailySeed.length; i++) {
        const char = dailySeed.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
        hash |= 0; 
    }
    let count = Math.abs(hash % 200) + 50; 
    userCountSpan.textContent = `${count} users are watching today.`;
    
    // Update local storage with the new count (resetting the "watched" state)
    localStorage.setItem('currentFilmCount', count);
}


// --- INITIALIZATION & TIMER SETUP ---
function initialize() {
    // 1. Load Data
    // NOTE: La variable 'csvData' doit être définie ici ou dans un script séparé
    
    films = parseCSV(csvData);
    if (films.length === 0) {
        filmTitle.textContent = "Error: No films loaded.";
        return;
    }

    // 2. Initial Load
    let currentFilmIndex = calculateFilmIndex();
    loadFilm(currentFilmIndex);

    // 3. Set up Automatic Rotation Timer (Film Change)
    function startRotationTimer() {
        const now = new Date();
        const seconds = now.getSeconds();
        
        // Calcul des millisecondes restantes jusqu'à la prochaine minute (0 seconde)
        const msUntilNextMinute = (60 - seconds) * 1000 - now.getMilliseconds();
        
        // Assure un délai minimum pour éviter un appel immédiat si on est déjà à 0 seconde
        const delay = (msUntilNextMinute < 500) ? MILLISECONDS_PER_MINUTE : msUntilNextMinute; 

        console.log(`Next film update in ${Math.round(delay / 1000)} seconds.`);

        setTimeout(() => {
            currentFilmIndex = calculateFilmIndex();
            loadFilm(currentFilmIndex);
            
            // Re-planifier pour l'intervalle complet de 1 minute
            setTimeout(startRotationTimer, FILM_ROTATION_INTERVAL_MINUTES * MILLISECONDS_PER_MINUTE);
        }, delay);
    }

    startRotationTimer();

    // 4. Set up Countdown Timer (Visual Update)
    // Mettre à jour l'affichage du minuteur toutes les secondes
    setInterval(updateCountdown, 1000); 

    // 5. Button Event Listener
    checkBtn.addEventListener('click', () => {
        if (checkBtn.disabled) return;
        
        let count = parseInt(localStorage.getItem('currentFilmCount')) || 100;
        count++;
        
        userCountSpan.textContent = `${count} users are watching today.`;
        localStorage.setItem('currentFilmCount', count); 
        
        checkBtn.textContent = '✅ Watched!';
        checkBtn.disabled = true;
    });
}

// Start the application
initialize();

});