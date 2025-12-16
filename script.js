document.addEventListener('DOMContentLoaded', () => {

    // 1. DONNÉES CSV COMPLÈTE ET MISE À JOUR (décembre 2025)
    const csvData = `"Pos""","2024","Title","Director","Year","Country","Mins","Trailer URL","GoMovies URL"
"1","1","Citizen Kane","Welles, Orson","1941","USA","119","https://www.dailymotion.com/video/x2lbwjq","https://gomovies.ms/movie/watch-citizen-kane-hd-online-free-18137"
"2","2","Vertigo","Hitchcock, Alfred","1958","USA","128","https://www.dailymotion.com/video/x8e52fg","https://gomovies.ms/movie/watch-vertigo-hd-online-free-18629"
"3","3","2001: A Space Odyssey","Kubrick, Stanley","1968","UK","139","https://www.dailymotion.com/video/x6j5yq2","https://gomovies.ms/movie/watch-2001-a-space-odyssey-hd-online-free-19523"
"7","7","8½","Fellini, Federico","1963","Italy","135","https://www.dailymotion.com/video/xasld","https://gomovies.ms/movie/watch-8-hd-online-free-85122"
"11","11","Singin' in the Rain","Donen, Stanley & Gene Kelly","1952","USA","102","https://www.dailymotion.com/video/x2j8o0u","https://gomovies.ms/movie/watch-singin-in-the-rain-hd-online-free-17646"
"13","13","Apocalypse Now","Coppola, Francis Ford","1979","USA","150","https://www.dailymotion.com/video/x2lbwjo","https://gomovies.ms/movie/watch-apocalypse-now-hd-online-free-18950"
"15","14","Taxi Driver","Scorsese, Martin","1976","USA","113","https://www.dailymotion.com/video/x3iy55","https://gomovies.ms/movie/watch-taxi-driver-hd-online-free-19066"
"16","16","Persona","Bergman, Ingmar","1966","Sweden","83","https://www.dailymotion.com/video/x252y1q","https://gomovies.ms/movie/watch-persona-hd-online-free-53791"
"18","19","Breathless","Godard, Jean-Luc","1960","France","89","https://www.dailymotion.com/video/x2l5bo4","https://gomovies.ms/movie/watch-breathless-hd-online-free-13536"
"23","23","Mirror","Tarkovsky, Andrei","1975","USSR","107","https://www.dailymotion.com/video/x8gu591","https://gomovies.ms/movie/watch-mirror-mirror-hd-online-free-14947"
"24","24","Rashomon","Kurosawa, Akira","1950","Japan","88","https://www.dailymotion.com/video/x24us7s","https://gomovies.ms/movie/watch-rashomon-hd-online-free-80101"
"26","28","Psycho","Hitchcock, Alfred","1960","USA","109","https://www.dailymotion.com/video/x2lbxbc","https://gomovies.ms/movie/watch-psycho-hd-online-free-12202"
"29","29","Au hasard Balthazar","Bresson, Robert","1966","France","95","https://www.dailymotion.com/video/x8vj7qc","https://gomovies.ms/movie/watch-au-hasard-balthazar-hd-online-free-11334"
"31","32","Some Like it Hot","Wilder, Billy","1959","USA","121","https://www.dailymotion.com/video/x28davn","https://gomovies.ms/movie/watch-some-like-it-hot-hd-online-free-18176"
"32","33","Ordet","Dreyer, Carl Theodor","1955","Denmark","125","https://www.dailymotion.com/video/x8enyy0","https://gomovies.ms/movie/watch-ordet-hd-online-free-9444"
"35","35","Raging Bull","Scorsese, Martin","1980","USA","129","https://www.dailymotion.com/video/x89y0iz","https://gomovies.ms/movie/watch-raging-bull-hd-online-free-18595"
"38","38","Casablanca","Curtiz, Michael","1942","USA","102","https://www.dailymotion.com/video/x8t35h2","https://gomovies.ms/movie/watch-casablanca-hd-online-free-18420"
"39","41","Blade Runner","Scott, Ridley","1982","USA","118","https://www.dailymotion.com/video/x89xveo","https://gomovies.ms/movie/watch-blade-runner-hd-online-free-19546"
"40","39","Rear Window","Hitchcock, Alfred","1954","USA","112","https://www.dailymotion.com/video/xpwnln","https://gomovies.ms/movie/watch-rear-window-hd-online-free-18438"
"41","45","Touch of Evil","Welles, Orson","1958","USA","108","https://www.dailymotion.com/video/xxjbcu","https://gomovies.ms/movie/watch-touch-of-evil-hd-online-free-17789"
"42","40","Playtime","Tati, Jacques","1967","France","108","https://www.dailymotion.com/video/x20b2zm","https://gomovies.ms/movie/watch-playtime-hd-online-free-11241"
"44","43","Barry Lyndon","Kubrick, Stanley","1975","UK","183","https://www.dailymotion.com/video/x2lbxvu","https://gomovies.ms/movie/watch-barry-lyndon-hd-online-free-18505"
"45","42","Contempt","Godard, Jean-Luc","1963","France","103","https://www.dailymotion.com/video/x4flg0","https://gomovies.ms/movie/watch-contempt-hd-online-free-13321"
"46","44","Pather Panchali","Ray, Satyajit","1955","India","112","https://www.dailymotion.com/video/x9p6mn0","https://gomovies.ms/movie/watch-pather-panchali-hd-online-free-10200"
"48","47","Stalker","Tarkovsky, Andrei","1979","USSR","160","https://www.dailymotion.com/video/x84h7y1","https://gomovies.ms/movie/watch-stalker-hd-online-free-17191"
"49","49","Lawrence of Arabia","Lean, David","1962","UK","216","https://www.dailymotion.com/video/x28db8g","https://gomovies.ms/movie/watch-lawrence-of-arabia-hd-online-free-17839"
"51","52","Modern Times","Chaplin, Charles","1936","USA","89","https://www.dailymotion.com/video/xwsxss","https://gomovies.ms/movie/watch-modern-times-hd-online-free-16168"
"52","51","Beau travail","Denis, Claire","1999","France","92","https://www.dailymotion.com/video/x1vlwjn","https://gomovies.ms/movie/watch-beau-travail-hd-online-free-5019"
"55","54","M","Lang, Fritz","1931","Germany","99","https://www.dailymotion.com/video/x3d5oi","https://gomovies.ms/movie/watch-mm-hd-online-free-406"
"60","63","GoodFellas","Scorsese, Martin","1990","USA","146","https://www.dailymotion.com/video/x4fuv","https://gomovies.ms/movie/watch-goodfellas-hd-online-free-19243"
"63","65","Rio Bravo","Hawks, Howard","1959","USA","141","https://www.dailymotion.com/video/x89sn4c","https://gomovies.ms/movie/watch-rio-bravo-hd-online-free-55790"
"65","64","Shoah","Lanzmann, Claude","1985","France","566","https://www.dailymotion.com/video/x8a41s7","https://gomovies.ms/movie/watch-shoah-hd-online-free-62774"
"66","66","Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb","Kubrick, Stanley","1964","UK","93","https://www.dailymotion.com/video/x28datg","https://gomovies.ms/movie/watch-dr-strangelove-or-how-i-learned-to-stop-worrying-and-love-the-bomb-hd-online-free-18272"
"67","69","Once Upon a Time in the West","Leone, Sergio","1968","Italy","165","https://www.dailymotion.com/video/xifuum","https://gomovies.ms/movie/watch-once-upon-a-time-in-the-west-hd-online-free-18847"
"68","67","Pierrot le fou","Godard, Jean-Luc","1965","France","110","https://www.dailymotion.com/video/x2kc7t4","https://gomovies.ms/movie/watch-pierrot-le-fou-hd-online-free-12157"
"70","70","Chinatown","Polanski, Roman","1974","USA","131","https://www.dailymotion.com/video/x8draat","https://gomovies.ms/movie/watch-chinatown-hd-online-free-17353"
"71","71","Do the Right Thing","Lee, Spike","1989","USA","120","https://www.dailymotion.com/video/x4l637m","https://gomovies.ms/movie/watch-do-the-right-thing-hd-online-free-13884"
"72","72","Metropolis","Lang, Fritz","1927","Germany","153","https://www.dailymotion.com/video/x2lbusd","https://gomovies.ms/movie/watch-metropolis-hd-online-free-14004"
"77","77","Amarcord","Fellini, Federico","1973","Italy","127","https://www.dailymotion.com/video/x9r6vdy","https://gomovies.ms/movie/watch-amarcord-hd-online-free-12560"
"78","79","Pulp Fiction","Tarantino, Quentin","1994","USA","154","https://www.dailymotion.com/video/xc2jlt","https://gomovies.ms/movie/watch-pulp-fiction-hd-online-free-19700"
"80","88","Viridiana","Buñuel, Luis","1961","Spain","90","https://www.dailymotion.com/video/x8tmrwu","https://gomovies.ms/movie/watch-viridiana-hd-online-free-11695"
"88","89","Pickpocket","Bresson, Robert","1959","France","75","https://www.dailymotion.com/video/x8ore57","https://gomovies.ms/movie/watch-pickpocket-hd-online-free-11562"
"90","87","Blue Velvet","Lynch, David","1986","USA","120","https://www.dailymotion.com/video/x8w7dyo","https://gomovies.ms/movie/watch-blue-velvet-hd-online-free-17912"
"91","92","Jaws","Spielberg, Steven","1975","USA","124","https://www.dailymotion.com/video/x8e5bcg","https://gomovies.ms/movie/watch-jaws-hd-online-free-19335"
"92","90","Nashville","Altman, Robert","1975","USA","160","https://www.dailymotion.com/video/x2lbv6z","https://gomovies.ms/movie/watch-nashville-hd-online-free-12723"
"96","96","Sans soleil","Marker, Chris","1983","France","100","https://www.dailymotion.com/video/x8edzob","https://gomovies.ms/movie/watch-sans-soleil-hd-online-free-4274"
"98","102","To Be or Not to Be","Lubitsch, Ernst","1942","USA","99","https://www.dailymotion.com/video/x25r7a4","https://gomovies.ms/movie/watch-to-be-or-not-to-be-hd-online-free-9637"
"100","99","Meshes of the Afternoon","Deren, Maya & Alexander Hammid","1943","USA","15","https://www.dailymotion.com/video/x8qwux6","https://gomovies.ms/movie/watch-meshes-of-the-afternoon-hd-online-free-7060"
"104","103","Madame de...","Ophüls, Max","1953","France","105","https://www.dailymotion.com/video/x8qkij2","https://gomovies.ms/movie/watch-the-earrings-of-madame-de-hd-online-free-5468"
"106","108","Ikiru","Kurosawa, Akira","1952","Japan","143","https://www.dailymotion.com/video/xj95ly","https://gomovies.ms/movie/watch-ikiru-hd-online-free-68924"
"108","107","Aguirre, the Wrath of God","Herzog, Werner","1972","West Germany","94","https://www.dailymotion.com/video/x9tveb2","https://gomovies.ms/movie/watch-aguirre-the-wrath-of-god-hd-online-free-12618"
"109","110","Annie Hall","Allen, Woody","1977","USA","94","https://www.dailymotion.com/video/x2lbpzg","https://gomovies.ms/movie/watch-annie-hall-hd-online-free-18559"
"111","109","Last Year at Marienbad","Resnais, Alain","1961","France","94","https://www.dailymotion.com/video/x2i37hg","https://gomovies.ms/movie/watch-last-year-at-marienbad-hd-online-free-11365"
"113","116","Once Upon a Time in America","Leone, Sergio","1984","Italy","229","https://www.dailymotion.com/video/xyrjd","https://gomovies.ms/movie/watch-once-upon-a-time-in-america-hd-online-free-19121"
"114","113","Greed","von Stroheim, Erich","1924","USA","140","https://www.dailymotion.com/video/x81vs6c","https://gomovies.ms/movie/watch-greed-hd-online-free-49085"
"118","118","Yi Yi","Yang, Edward","2000","Taiwan","173","https://www.dailymotion.com/video/x50blnz","https://gomovies.ms/movie/watch-yi-yi-hd-online-free-16819"
"122","124","Blow-Up","Antonioni, Michelangelo","1966","Italy","111","https://www.dailymotion.com/video/x8dr7vu","https://gomovies.ms/movie/watch-blow-up-of-blow-up-hd-online-free-81382"
"125","123","Intolerance","Griffith, D.W.","1916","USA","178","https://www.dailymotion.com/video/xpy0if","https://gomovies.ms/movie/watch-intolerance-no-more-hd-online-free-63408"
"127","130","Notorious","Hitchcock, Alfred","1946","USA","101","https://www.dailymotion.com/video/x6xj6v","https://gomovies.ms/movie/watch-notorious-hd-online-free-12908"
"128","131","Alien","Scott, Ridley","1979","USA","117","https://www.dailymotion.com/video/x14p571","https://gomovies.ms/movie/watch-alien-hd-online-free-19363"
"129","129","Vivre sa vie","Godard, Jean-Luc","1962","France","85","https://www.dailymotion.com/video/x26minj","https://gomovies.ms/movie/watch-vivre-sa-vie-hd-online-free-13277"
"130","127","Letter from an Unknown Woman","Ophüls, Max","1948","USA","90","https://www.dailymotion.com/video/x8hzclp","https://gomovies.ms/movie/watch-letter-from-an-unknown-woman-hd-online-free-8077"
"134","133","All About Eve","Mankiewicz, Joseph L.","1950","USA","138","https://www.dailymotion.com/video/x2npbe","https://gomovies.ms/movie/watch-all-about-eve-hd-online-free-16411"
"139","135","My Darling Clementine","Ford, John","1946","USA","97","https://www.dailymotion.com/video/xxt8vv","https://gomovies.ms/movie/watch-my-darling-clementine-hd-online-free-12365"
"140","143","Gone with the Wind","Fleming, Victor","1939","USA","222","https://www.dailymotion.com/video/x57cq7","https://gomovies.ms/movie/watch-gone-with-the-wind-hd-online-free-19002"
"146","147","Nosferatu","Murnau, F.W.","1922","Germany","84","https://www.dailymotion.com/video/x108t9r","https://gomovies.ms/movie/watch-nosferatu-hd-online-free-16584"
"147","145","One Flew Over the Cuckoo's Nest","Forman, Milos","1975","USA","133","https://www.dailymotion.com/video/x9ut65m","https://gomovies.ms/movie/watch-one-flew-over-the-cuckoos-nest-hd-online-free-19337"
"151","151","Wanda","Loden, Barbara","1970","USA","105","https://www.dailymotion.com/video/x8x8p3a","https://gomovies.ms/movie/watch-wanda-hd-online-free-68993"
"152","158","Star Wars","Lucas, George","1977","USA","121","https://www.dailymotion.com/video/x89lwdq","https://gomovies.ms/movie/watch-star-wars-hd-online-free-19767"
"153","161","There Will Be Blood","Anderson, Paul Thomas","2007","USA","158","https://www.dailymotion.com/video/x53yhb","https://gomovies.ms/movie/watch-there-will-be-blood-hd-online-free-18066"
"158","155","Trouble in Paradise","Lubitsch, Ernst","1932","USA","83","https://www.dailymotion.com/video/xwquze","https://gomovies.ms/movie/watch-trouble-in-paradise-hd-online-free-7420"
"162","159","Manhattan","Allen, Woody","1979","USA","96","https://www.dailymotion.com/video/x2lbxsr","https://gomovies.ms/movie/watch-manhattan-hd-online-free-13952"
"163","170","Double Indemnity","Wilder, Billy","1944","USA","106","https://www.dailymotion.com/video/x28dal2","https://gomovies.ms/movie/watch-double-indemnity-hd-online-free-16988"
"165","165","Badlands","Malick, Terrence","1973","USA","95","https://www.dailymotion.com/video/x9tarba","https://gomovies.ms/movie/watch-badlands-hd-online-free-13577"
"172","175","Rosemary's Baby","Polanski, Roman","1968","USA","136","https://www.dailymotion.com/video/x2lbud4","https://gomovies.ms/movie/watch-rosemarys-baby-hd-online-free-17898"
"173","174","Stagecoach","Ford, John","1939","USA","96","https://www.dailymotion.com/video/x8k35uu","https://gomovies.ms/movie/watch-stagecoach-hd-online-free-62752"
"175","171","Duck Soup","McCarey, Leo","1933","USA","70","https://www.dailymotion.com/video/xm8kf0","https://gomovies.ms/movie/watch-duck-soup-hd-online-free-59819"
"177","179","Brief Encounter","Lean, David","1945","UK","85","https://www.dailymotion.com/video/x8ffv11","https://gomovies.ms/movie/watch-brief-encounter-hd-online-free-13437"
"178","184","Ran","Kurosawa, Akira","1985","France","161","https://www.dailymotion.com/video/x2i4akc","https://gomovies.ms/movie/watch-ran-hd-online-free-61823"
"181","177","Earth","Dovzhenko, Alexander","1930","USSR","75","https://www.dailymotion.com/video/x8d3xn7","https://gomovies.ms/movie/watch-earth-over-earth-hd-online-free-96592"
"182","181","Portrait of a Lady on Fire","Sciamma, Céline","2019","France","121","https://www.dailymotion.com/video/x7os64i","https://gomovies.ms/movie/watch-portrait-of-a-lady-on-fire-hd-online-free-44058"
"185","183","Mouchette","Bresson, Robert","1967","France","80","https://www.dailymotion.com/video/x4x5hfh","https://gomovies.ms/movie/watch-mouchette-hd-online-free-8812"
"190","187","Vampyr","Dreyer, Carl Theodor","1932","Germany","73","https://www.dailymotion.com/video/x8lrba1","https://gomovies.ms/movie/watch-vampyr-hd-online-free-8402"
"194","192","Black Narcissus","Powell, Michael & Emeric Pressburger","1947","UK","99","https://www.dailymotion.com/video/x7xx7br","https://gomovies.ms/movie/watch-black-narcissus-hd-online-free-12238"
"196","201","Paris, Texas","Wenders, Wim","1984","West Germany","150","https://www.dailymotion.com/video/x2l5dcp","https://gomovies.ms/movie/watch-paris-texas-hd-online-free-16273"
"197","195","Paisan","Rossellini, Roberto","1946","Italy","120","https://www.dailymotion.com/video/x52duzc","https://gomovies.ms/movie/watch-paisan-hd-online-free-6938"
"200","207","Raiders of the Lost Ark","Spielberg, Steven","1981","USA","115","https://www.dailymotion.com/video/xdxoeh","https://gomovies.ms/movie/watch-raiders-of-the-lost-ark-hd-online-free-19406"
"203","203","On the Waterfront","Kazan, Elia","1954","USA","108","https://www.dailymotion.com/video/x28dakd","https://gomovies.ms/movie/watch-on-the-waterfront-hd-online-free-17783"
"204","206","Close Encounters of the Third Kind","Spielberg, Steven","1977","USA","135","https://www.dailymotion.com/video/x69c2ib","https://gomovies.ms/movie/watch-close-encounters-of-the-third-kind-hd-online-free-19447"
"205","202","King Kong","Cooper, Merian C. & Ernest B. Schoedsack","1933","USA","103","https://www.dailymotion.com/video/x93777","https://gomovies.ms/movie/watch-king-kong-hd-online-free-13052"
"207","198","Vagabond","Varda, Agnès","1985","France","105","https://www.dailymotion.com/video/xhszsl","https://gomovies.ms/movie/watch-vagabond-hd-online-free-14706"
"214","215","Solaris","Tarkovsky, Andrei","1972","USSR","165","https://www.dailymotion.com/video/x52ow8","https://gomovies.ms/movie/watch-solaris-hd-online-free-12900"
"216","216","Moonlight","Jenkins, Barry","2016","USA","111","https://www.dailymotion.com/video/x5956y4","https://gomovies.ms/movie/watch-moonlight-hd-online-free-18926"
"217","219","Breaking the Waves","von Trier, Lars","1996","Denmark","156","https://www.dailymotion.com/video/xng46t","https://gomovies.ms/movie/watch-breaking-the-waves-hd-online-free-57948"
"218","223","Magnolia","Anderson, Paul Thomas","1999","USA","188","https://www.dailymotion.com/video/xd76yq","https://gomovies.ms/movie/watch-magnolia-hd-online-free-17449"
"222","218","Kes","Loach, Ken","1969","UK","113","https://www.dailymotion.com/video/x2lbqnp","https://gomovies.ms/movie/watch-kes-hd-online-free-8179"
"224","222","Umberto D.","De Sica, Vittorio","1952","Italy","89","https://www.dailymotion.com/video/x4xnemm","https://gomovies.ms/movie/watch-umberto-d-hd-online-free-11304"
"225","225","Brazil","Gilliam, Terry","1985","UK","131","https://www.dailymotion.com/video/x2lbwf7","https://gomovies.ms/movie/watch-brazil-hd-online-free-17821"
"229","229","Love Streams","Cassavetes, John","1984","USA","141","https://www.dailymotion.com/video/x8tf05m","https://gomovies.ms/movie/watch-love-streams-hd-online-free-55026"
"244","241","Performance","Roeg, Nicolas & Donald Cammell","1970","UK","105","https://www.dailymotion.com/video/x34xizx","https://gomovies.ms/movie/watch-performance-hd-online-free-2874"
"245","247","Caché","Haneke, Michael","2005","France","117","https://www.dailymotion.com/video/x6dktz1","https://gomovies.ms/movie/watch-cache-hd-online-free-13281"
"246","243","Eraserhead","Lynch, David","1977","USA","85","https://www.dailymotion.com/video/x14zoav","https://gomovies.ms/movie/watch-eraserhead-hd-online-free-16230"
"251","268","Schindler's List","Spielberg, Steven","1993","USA","195","https://www.dailymotion.com/video/x441lo","https://gomovies.ms/movie/watch-schindlers-list-hd-online-free-19786"
"253","249","Meet Me in St. Louis","Minnelli, Vincente","1944","USA","113","https://www.dailymotion.com/video/x9py9qc","https://gomovies.ms/movie/watch-meet-me-in-st-louis-hd-online-free-12533"
"254","252","Eternal Sunshine of the Spotless Mind","Gondry, Michel","2004","USA","108","https://www.dailymotion.com/video/xpx7km","https://gomovies.ms/movie/watch-eternal-sunshine-of-the-spotless-mind-hd-online-free-19135"
"256","261","Cinema Paradiso","Tornatore, Giuseppe","1988","Italy","155","https://www.dailymotion.com/video/x8b864r","https://gomovies.ms/movie/watch-cinema-paradiso-hd-online-free-17764"
"258","254","Daughters of the Dust","Dash, Julie","1991","USA","112","https://www.dailymotion.com/video/x8g4qho","https://gomovies.ms/movie/watch-daughters-of-the-dust-hd-online-free-82960"
"261","259","Tabu","Murnau, F.W.","1931","USA","82","https://www.dailymotion.com/video/x8j07ek","https://gomovies.ms/movie/watch-tabu-hd-online-free-5291"
"262","256","Belle de jour","Buñuel, Luis","1967","France","100","https://www.dailymotion.com/video/x27mjl9","https://gomovies.ms/movie/watch-belle-de-jour-hd-online-free-14096"
"264","271","Eyes Wide Shut","Kubrick, Stanley","1999","USA","159","https://www.dailymotion.com/video/x7vkake","https://gomovies.ms/movie/watch-eyes-wide-shut-hd-online-free-18677"
"265","258","Red River","Hawks, Howard","1948","USA","133","https://www.dailymotion.com/video/xih4lv","https://gomovies.ms/movie/watch-red-river-hd-online-free-10999"
"267","263","Uncle Boonmee Who Can Recall His Past Lives","Weerasethakul, Apichatpong","2010","Thailand","114","https://www.dailymotion.com/video/x28d7jp","https://gomovies.ms/movie/watch-uncle-boonmee-who-can-recall-his-past-lives-hd-online-free-8910"
"268","264","Heat","Mann, Michael","1995","USA","174","https://www.dailymotion.com/video/x89xvsf","https://gomovies.ms/movie/watch-heat-hd-online-free-18966"
"271","269","Fargo","Coen, Joel & Ethan Coen","1996","USA","98","https://www.dailymotion.com/video/x8ne7mt","https://gomovies.ms/movie/watch-fargo-hd-online-free-18630"
"272","272","Black Girl","Sembene, Ousmane","1966","Senegal","65","https://www.dailymotion.com/video/x8pc2j9","https://gomovies.ms/movie/watch-black-girls-hd-online-free-120337"
"274","274","F for Fake","Welles, Orson","1973","France","89","https://www.dailymotion.com/video/x8gwbr1","https://gomovies.ms/movie/watch-f-for-fake-hd-online-free-9207"
"275","267","Kind Hearts and Coronets","Hamer, Robert","1949","UK","106","https://www.dailymotion.com/video/x6d6yfd","https://gomovies.ms/movie/watch-kind-hearts-and-coronets-hd-online-free-12344"
"277","280","My Night at Maud's","Rohmer, Eric","1969","France","105","https://www.dailymotion.com/video/x2an7gr","https://gomovies.ms/movie/watch-my-night-at-mauds-hd-online-free-3476"
"278","279","Sweet Smell of Success","Mackendrick, Alexander","1957","USA","96","https://www.dailymotion.com/video/x2vtaq8","https://gomovies.ms/movie/watch-sweet-smell-of-success-hd-online-free-10554"
"283","291","Paths of Glory","Kubrick, Stanley","1957","USA","86","https://www.dailymotion.com/video/x3o9eik","https://gomovies.ms/movie/watch-paths-of-glory-hd-online-free-16870"
"285","281","Groundhog Day","Ramis, Harold","1993","USA","103","https://www.dailymotion.com/video/x71rzcx","https://gomovies.ms/movie/watch-groundhog-day-hd-online-free-19013"
"289","283","Pandora's Box","Pabst, G.W.","1929","Germany","133","https://www.dailymotion.com/video/x98glqm","https://gomovies.ms/movie/watch-garage-sale-mysteries-the-pandoras-box-murders-hd-online-free-2766"
"294","290","India Song","Duras, Marguerite","1975","France","120","https://www.dailymotion.com/video/x8fjcn0","https://gomovies.ms/movie/watch-india-song-hd-online-free-64161"
"298","319","Cabaret","Fosse, Bob","1972","USA","128","https://www.dailymotion.com/video/x85kmb","https://gomovies.ms/movie/watch-cabaret-hd-online-free-13330"
"300","302","Unforgiven","Eastwood, Clint","1992","USA","127","https://www.dailymotion.com/video/x3f17om","https://gomovies.ms/movie/watch-unforgiven-hd-online-free-884"
"301","314","All That Jazz","Fosse, Bob","1979","USA","123","https://www.dailymotion.com/video/x3y49d","https://gomovies.ms/movie/watch-all-that-jazz-hd-online-free-11712"
"302","297","Distant Voices, Still Lives","Davies, Terence","1988","UK","85","https://www.dailymotion.com/video/x9bpgji","https://gomovies.ms/movie/watch-distant-voices-still-lives-hd-online-free-3415"
"303","298","Mean Streets","Scorsese, Martin","1973","USA","110","https://www.dailymotion.com/video/x2lbw43","https://gomovies.ms/movie/watch-mean-streets-hd-online-free-57499"
"311","321","Melancholia","von Trier, Lars","2011","Denmark","136","https://www.dailymotion.com/video/x2lbw1a","https://gomovies.ms/movie/watch-melancholia-hd-online-free-16569"
"312","308","Faces","Cassavetes, John","1968","USA","130","https://www.dailymotion.com/video/x2lbr91","https://gomovies.ms/movie/watch-faces-hd-online-free-6151"
"318","309","Monsieur Verdoux","Chaplin, Charles","1947","USA","123","https://www.dailymotion.com/video/x6by70r","https://gomovies.ms/movie/watch-monsieur-verdoux-hd-online-free-9671"
"319","312","Videodrome","Cronenberg, David","1983","Canada","90","https://www.dailymotion.com/video/xnfpoh","https://gomovies.ms/movie/watch-videodrome-hd-online-free-55346"
"322","318","Freaks","Browning, Tod","1932","USA","64","https://www.dailymotion.com/video/x7o5iwi","https://gomovies.ms/movie/watch-freaks-hd-online-free-45796"
"330","327","Husbands","Cassavetes, John","1970","USA","138","https://www.dailymotion.com/video/xpvio2","https://gomovies.ms/movie/watch-husbands-hd-online-free-65689"
"332","337","Amadeus","Forman, Milos","1984","USA","158","https://www.dailymotion.com/video/x4exqeq","https://gomovies.ms/movie/watch-amadeus-hd-online-free-16929"
"333","335","Bonnie and Clyde","Penn, Arthur","1967","USA","111","https://www.dailymotion.com/video/x3azt9e","https://gomovies.ms/movie/watch-bonnie-and-clyde-hd-online-free-61473"
"336","332","Underground","Kusturica, Emir","1995","Yugoslavia","167","https://www.dailymotion.com/video/x7m0oqg","https://gomovies.ms/movie/watch-underground-hd-online-free-16866"
"342","343","Midnight Cowboy","Schlesinger, John","1969","USA","113","https://www.dailymotion.com/video/x28dam1","https://gomovies.ms/movie/watch-midnight-cowboy-hd-online-free-16496"
"345","344","Weekend","Godard, Jean-Luc","1967","France","105","https://www.dailymotion.com/video/x14dldh","https://gomovies.ms/movie/watch-weekend-hd-online-free-9132"
"346","342","Kiss Me Deadly","Aldrich, Robert","1955","USA","106","https://www.dailymotion.com/video/xfi1p0","https://gomovies.ms/movie/watch-kiss-me-deadly-hd-online-free-8342"
"348","352","West Side Story","Wise, Robert & Jerome Robbins","1961","USA","151","https://www.dailymotion.com/video/x80vosk","https://gomovies.ms/movie/watch-west-side-story-hd-online-free-17545"
"350","357","Mad Max: Fury Road","Miller, George","2015","Australia","120","https://www.dailymotion.com/video/x2cbvlf","https://gomovies.ms/movie/watch-mad-max-fury-road-hd-online-free-19677"
"351","353","Dog Day Afternoon","Lumet, Sidney","1975","USA","125","https://www.dailymotion.com/video/x6ns6m","https://gomovies.ms/movie/watch-dog-day-afternoon-hd-online-free-17318"
"352","354","Get Out","Peele, Jordan","2017","USA","104","https://www.dailymotion.com/video/x5jxcsy","https://gomovies.ms/movie/watch-get-out-hd-online-free-19550"
"353","356","Night of the Living Dead","Romero, George A.","1968","USA","96","https://www.dailymotion.com/video/x8m6h5z","https://gomovies.ms/movie/watch-night-of-the-living-dead-hd-online-free-14064"
"355","346","El","Buñuel, Luis","1953","Mexico","91","https://www.dailymotion.com/video/x3j9mxn","https://gomovies.ms/movie/watch-el-mariachi-hd-online-free-13814"
"358","358","How Green Was My Valley","Ford, John","1941","USA","118","https://www.dailymotion.com/video/x3l9zkc","https://gomovies.ms/movie/watch-how-green-was-my-valley-hd-online-free-10308"
"361","367","It Happened One Night","Capra, Frank","1934","USA","105","https://www.dailymotion.com/video/xvzax5","https://gomovies.ms/movie/watch-it-happened-one-night-hd-online-free-57837"
"363","360","Last Tango in Paris","Bertolucci, Bernardo","1972","Italy","129","https://www.dailymotion.com/video/xgevcu","https://gomovies.ms/movie/watch-last-tango-in-paris-hd-online-free-16451"
"365","362","Heaven's Gate","Cimino, Michael","1980","USA","219","https://www.dailymotion.com/video/x2y42fn","https://gomovies.ms/movie/watch-heavens-gate-hd-online-free-10110"
"366","361","Muriel","Resnais, Alain","1963","France","115","https://www.dailymotion.com/video/x13w87b","https://gomovies.ms/movie/watch-muriels-wedding-hd-online-free-11469"
"367","370","Marnie","Hitchcock, Alfred","1964","USA","130","https://www.dailymotion.com/video/x2efbkg","https://gomovies.ms/movie/watch-marnie-hd-online-free-16361"
"371","371","Yojimbo","Kurosawa, Akira","1961","Japan","110","https://www.dailymotion.com/video/x16n59v","https://gomovies.ms/movie/watch-yojimbo-hd-online-free-17350"
"372","372","Harold and Maude","Ashby, Hal","1971","USA","91","https://www.dailymotion.com/video/x2eftrb","https://gomovies.ms/movie/watch-harold-and-maude-hd-online-free-12952"
"373","381","Teorema","Pasolini, Pier Paolo","1968","Italy","98","https://www.dailymotion.com/video/x2314w2","https://gomovies.ms/movie/watch-teorema-hd-online-free-10460"
"374","374","Peeping Tom","Powell, Michael","1960","UK","101","https://www.dailymotion.com/video/x4yo713","https://gomovies.ms/movie/watch-peeping-tom-hd-online-free-11732"
"375","369","Fitzcarraldo","Herzog, Werner","1982","West Germany","157","https://www.dailymotion.com/video/x8ex3r3","https://gomovies.ms/movie/watch-fitzcarraldo-hd-online-free-11757"
"376","377","Lost Highway","Lynch, David","1997","USA","134","https://www.dailymotion.com/video/x8xkris","https://gomovies.ms/movie/watch-lost-highway-hd-online-free-18278"
"377","378","Stranger Than Paradise","Jarmusch, Jim","1984","USA","89","https://www.dailymotion.com/video/x8tmgxi","https://gomovies.ms/movie/watch-stranger-than-paradise-hd-online-free-10747"
"380","385","Stromboli","Rossellini, Roberto","1950","Italy","107","https://www.dailymotion.com/video/x8eoyvm","https://gomovies.ms/movie/watch-stromboli-hd-online-free-670"
"384","386","Safe","Haynes, Todd","1995","USA","119","https://www.dailymotion.com/video/x2lbtrc","https://gomovies.ms/movie/watch-safe-hd-online-free-9464"
"385","383","Aliens","Cameron, James","1986","USA","137","https://www.dailymotion.com/video/xfohca","https://gomovies.ms/movie/watch-aliens-hd-online-free-19144"
"388","390","This is Spinal Tap","Reiner, Rob","1984","USA","82","https://www.dailymotion.com/video/xaccnw","https://gomovies.ms/movie/watch-this-is-spinal-tap-hd-online-free-16258"
"390","414","Under the Skin","Glazer, Jonathan","2013","UK","108","https://www.dailymotion.com/video/x8jlzze","https://gomovies.ms/movie/watch-under-the-skin-hd-online-free-16668"
"391","384","Tristana","Buñuel, Luis","1970","Spain","98","https://www.dailymotion.com/video/x5zo9rs","https://gomovies.ms/movie/watch-tristana-hd-online-free-896"
"394","403","Dogville","von Trier, Lars","2003","Denmark","177","https://www.dailymotion.com/video/x8w7nhw","https://gomovies.ms/movie/watch-dogville-hd-online-free-17219"
"395","397","Orlando","Potter, Sally","1992","UK","94","https://www.dailymotion.com/video/xkp39l","https://gomovies.ms/movie/watch-orlando-hd-online-free-8198"
"396","400","Opening Night","Cassavetes, John","1977","USA","144","https://www.dailymotion.com/video/x4yyo2l","https://gomovies.ms/movie/watch-opening-night-hd-online-free-56745"
"402","415","1900","Bertolucci, Bernardo","1976","Italy","245","https://www.dailymotion.com/video/x8fkm7q","https://gomovies.ms/movie/watch-1900-hd-online-free-13646"
"406","402","Suspiria","Argento, Dario","1977","Italy","92","https://www.dailymotion.com/video/x4mwi7","https://gomovies.ms/movie/watch-suspiria-hd-online-free-19625"
"407","398","Crimes and Misdemeanors","Allen, Woody","1989","USA","104","https://www.dailymotion.com/video/x4k0bi6","https://gomovies.ms/movie/watch-crimes-and-misdemeanors-hd-online-free-11651"
"410","411","Orpheus","Cocteau, Jean","1950","France","95","https://www.dailymotion.com/video/x8mknxu","https://gomovies.ms/movie/watch-orpheus-hd-online-free-4660"
"411","409","Eyes Without a Face","Franju, Georges","1960","France","88","https://www.dailymotion.com/video/x45r4a","https://gomovies.ms/movie/watch-eyes-without-a-face-hd-online-free-10252"
"413","418","Lost in Translation","Coppola, Sofia","2003","USA","102","https://www.dailymotion.com/video/x27k0oe","https://gomovies.ms/movie/watch-lost-in-translation-hd-online-free-17983"
"415","429","All the President's Men","Pakula, Alan J.","1976","USA","138","https://www.dailymotion.com/video/x4k114j","https://gomovies.ms/movie/watch-all-the-presidents-men-hd-online-free-18973"
"416","410","Snow White and the Seven Dwarfs","Hand, David","1937","USA","83","https://www.dailymotion.com/video/x28dbfe","https://gomovies.ms/movie/watch-snow-white-and-the-seven-dwarfs-hd-online-free-19630"
"417","406","Splendor in the Grass","Kazan, Elia","1961","USA","124","https://www.dailymotion.com/video/x73k12","https://gomovies.ms/movie/watch-splendor-in-the-grass-hd-online-free-7578"
"425","422","Bride of Frankenstein","Whale, James","1935","USA","75","https://www.dailymotion.com/video/x3tvud","https://gomovies.ms/movie/watch-the-bride-of-frankenstein-hd-online-free-13840"
"432","423","Holy Motors","Carax, Leos","2012","France","115","https://www.dailymotion.com/video/xr6lyj","https://gomovies.ms/movie/watch-holy-motors-hd-online-free-10300"
"438","441","Accattone","Pasolini, Pier Paolo","1961","Italy","120","https://www.dailymotion.com/video/x8teykk","https://gomovies.ms/movie/watch-accattone-hd-online-free-11033"
"439","456","Casino","Scorsese, Martin","1995","USA","182","https://www.dailymotion.com/video/x37m0y7","https://gomovies.ms/movie/watch-casino-hd-online-free-18689"
"442","469","Network","Lumet, Sidney","1976","USA","121","https://www.dailymotion.com/video/x7pudjk","https://gomovies.ms/movie/watch-network-hd-online-free-13782"
"445","458","Naked","Leigh, Mike","1993","UK","126","https://www.dailymotion.com/video/x5er6rc","https://gomovies.ms/movie/watch-naked-hd-online-free-1152"
"446","447","Limelight","Chaplin, Charles","1952","USA","145","https://www.dailymotion.com/video/x7e9l","https://gomovies.ms/movie/watch-limelight-hd-online-free-9892"
"450","487","Toni Erdmann","Ade, Maren","2016","Germany","162","https://www.dailymotion.com/video/x8jfwb8","https://gomovies.ms/movie/watch-toni-erdmann-hd-online-free-56135"
"453","448","Koyaanisqatsi","Reggio, Godfrey","1982","USA","87","https://www.dailymotion.com/video/x8dsm8x","https://gomovies.ms/movie/watch-koyaanisqatsi-hd-online-free-13412"
"461","482","Dersu Uzala","Kurosawa, Akira","1975","USSR","144","https://www.dailymotion.com/video/x8a47tw","https://gomovies.ms/movie/watch-dersu-uzala-hd-online-free-11047"
"462","467","Grave of the Fireflies","Takahata, Isao","1988","Japan","89","https://www.dailymotion.com/video/x8gbex7","https://gomovies.ms/movie/watch-grave-of-the-fireflies-hd-online-free-67215"
"463","452","October","Eisenstein, Sergei & Grigori Aleksandrov","1928","USSR","103","https://www.dailymotion.com/video/x2lbsxz","https://gomovies.ms/movie/watch-october-hd-online-free-8726"
"464","459","Paris is Burning","Livingston, Jennie","1990","USA","78","https://www.dailymotion.com/video/x8oubyn","https://gomovies.ms/movie/watch-paris-is-burning-hd-online-free-9213"
"467","516","Pan's Labyrinth","del Toro, Guillermo","2006","Spain","120","https://www.dailymotion.com/video/x3hrbu1","https://gomovies.ms/movie/watch-pans-labyrinth-hd-online-free-19062"
"473","490","Steamboat Bill, Jr.","Keaton, Buster & Charles Reisner","1928","USA","71","https://www.dailymotion.com/video/x4y4r9","https://gomovies.ms/movie/watch-steamboat-bill-jr-hd-online-free-6187"
"476","455","Phantom Thread","Anderson, Paul Thomas","2017","USA","130","https://www.dailymotion.com/video/x6cn17b","https://gomovies.ms/movie/watch-phantom-thread-hd-online-free-19109"
"477","483","Elephant","Van Sant, Gus","2003","USA","81","https://www.dailymotion.com/video/x3jo7s","https://gomovies.ms/movie/watch-elephant-hd-online-free-11546"
"478","478","High Noon","Zinnemann, Fred","1952","USA","84","https://www.dailymotion.com/video/x6t1jr","https://gomovies.ms/movie/watch-high-noon-hd-online-free-17150"
"481","474","Wagon Master","Ford, John","1950","USA","86","https://www.dailymotion.com/video/xfr1wb","https://gomovies.ms/movie/watch-wagon-master-hd-online-free-68060"
"482","488","Reservoir Dogs","Tarantino, Quentin","1992","USA","99","https://www.dailymotion.com/video/x18xfg","https://gomovies.ms/movie/watch-reservoir-dogs-hd-online-free-19259"
"484","477","Lola","Demy, Jacques","1961","France","90","https://www.dailymotion.com/video/x2l5b00","https://gomovies.ms/movie/watch-lola-hd-online-free-2512"
"487","475","Carrie","De Palma, Brian","1976","USA","97","https://www.dailymotion.com/video/x3i8rkj","https://gomovies.ms/movie/watch-carrie-hd-online-free-9880"
"489","476","Senso","Visconti, Luchino","1954","Italy","123","https://www.dailymotion.com/video/x8u34x4","https://gomovies.ms/movie/watch-senso-hd-online-free-4956"
"492","481","Once Upon a Time in Anatolia","Ceylan, Nuri Bilge","2011","Turkey","157","https://www.dailymotion.com/video/x1xn8uj","https://gomovies.ms/movie/watch-once-upon-a-time-in-anatolia-hd-online-free-11119"
"493","485","Zama","Martel, Lucrecia","2017","Argentina","115","https://www.dailymotion.com/video/x6nsntd","https://gomovies.ms/movie/watch-zama-hd-online-free-975"
"495","537","Fight Club","Fincher, David","1999","USA","139","https://www.dailymotion.com/video/x20p75o","https://gomovies.ms/movie/watch-fight-club-hd-online-free-19651"
"497","509","Twin Peaks: Fire Walk with Me","Lynch, David","1992","USA","134","https://www.dailymotion.com/video/x8w7e20","https://gomovies.ms/movie/watch-twin-peaks-fire-walk-with-me-hd-online-free-17130"
"498","523","No Country for Old Men","Coen, Joel & Ethan Coen","2007","USA","122","https://www.dailymotion.com/video/x2lbxzk","https://gomovies.ms/movie/watch-no-country-for-old-men-hd-online-free-19192"
"500","501","Five Easy Pieces","Rafelson, Bob","1970","USA","98","https://www.dailymotion.com/video/x20p6yh","https://gomovies.ms/movie/watch-five-easy-pieces-hd-online-free-10028"
"501","492","Blow Out","De Palma, Brian","1981","USA","108","https://www.dailymotion.com/video/x7vs6j0","https://gomovies.ms/movie/watch-blow-out-hd-online-free-17192"
"502","525","To Have and Have Not","Hawks, Howard","1944","USA","100","https://www.dailymotion.com/video/x28d8an","https://gomovies.ms/movie/watch-to-have-and-have-not-hd-online-free-9828"
"503","495","Shane","Stevens, George","1953","USA","118","https://www.dailymotion.com/video/x9avvya","https://gomovies.ms/movie/watch-shane-hd-online-free-17525"
"504","507","To Kill a Mockingbird","Mulligan, Robert","1962","USA","129","https://www.dailymotion.com/video/x28dauo","https://gomovies.ms/movie/watch-to-kill-a-mockingbird-hd-online-free-16155"
"508","494","After Life","Koreeda, Hirokazu","1998","Japan","118","https://www.dailymotion.com/video/x74ikws","https://gomovies.ms/movie/watch-after-life-hd-online-free-8674"
"510","522","Princess Mononoke","Miyazaki, Hayao","1997","Japan","134","https://www.dailymotion.com/video/xq5977","https://gomovies.ms/movie/watch-princess-mononoke-hd-online-free-19246"
"513","520","Short Cuts","Altman, Robert","1993","USA","189","https://www.dailymotion.com/video/x8ee92q","https://gomovies.ms/movie/watch-short-cuts-hd-online-free-53694"
"514","510","Inland Empire","Lynch, David","2006","USA","180","https://www.dailymotion.com/video/x16v7d","https://gomovies.ms/movie/watch-inland-empire-hd-online-free-17012"
"516","508","Oldboy","Park Chan-wook","2003","South Korea","120","https://www.dailymotion.com/video/xel5s0","https://gomovies.ms/movie/watch-oldboy-hd-online-free-17703"
"517","512","Crash","Cronenberg, David","1996","Canada","100","https://www.dailymotion.com/video/x9ut3h4","https://gomovies.ms/movie/watch-crash-hd-online-free-13956"
"518","524","Die Hard","McTiernan, John","1988","USA","131","https://www.dailymotion.com/video/x89y2pp","https://gomovies.ms/movie/watch-die-hard-hd-online-free-19728"
"521","511","Boogie Nights","Anderson, Paul Thomas","1997","USA","155","https://www.dailymotion.com/video/xd40jg","https://gomovies.ms/movie/watch-boogie-nights-hd-online-free-17268"
"523","513","Dead Ringers","Cronenberg, David","1988","Canada","115","https://www.dailymotion.com/video/x8jl2t0","https://gomovies.ms/movie/watch-dead-ringers-hd-online-free-61641"
"529","533","12 Angry Men","Lumet, Sidney","1957","USA","95","https://www.dailymotion.com/video/x28d7y3","https://gomovies.ms/movie/watch-12-angry-men-hd-online-free-12154"
"532","529","Faust","Murnau, F.W.","1926","Germany","116","https://www.dailymotion.com/video/x143pah","https://gomovies.ms/movie/watch-faust-hd-online-free-3375"
"533","544","Boyhood","Linklater, Richard","2014","USA","165","https://www.dailymotion.com/video/x89xu5l","https://gomovies.ms/movie/watch-boyhood-hd-online-free-18413"
"534","531","Aparajito","Ray, Satyajit","1956","India","108","https://www.dailymotion.com/video/x8mp6n6","https://gomovies.ms/movie/watch-aparajito-hd-online-free-6131"
"539","527","Blue","Jarman, Derek","1993","UK","79","https://www.dailymotion.com/video/x6gp1pl","https://gomovies.ms/movie/watch-blue-hd-online-free-124465"
"540","536","Point Blank","Boorman, John","1967","USA","92","https://www.dailymotion.com/video/x7c99ag","https://gomovies.ms/movie/watch-point-blank-hd-online-free-9175"
"541","567","Ninotchka","Lubitsch, Ernst","1939","USA","110","https://www.dailymotion.com/video/x8diqbm","https://gomovies.ms/movie/watch-ninotchka-hd-online-free-9352"
"542","532","Rosetta","Dardenne, Jean-Pierre & Luc Dardenne","1999","Belgium","94","https://www.dailymotion.com/video/xdezao","https://gomovies.ms/movie/watch-rosetta-hd-online-free-9630"
"545","561","Doctor Zhivago","Lean, David","1965","USA","197","https://www.dailymotion.com/video/xd2xgx","https://gomovies.ms/movie/watch-doctor-zhivago-hd-online-free-16634"
"546","541","Nostalgia for the Light","Guzmán, Patricio","2010","France","90","https://www.dailymotion.com/video/x28d7qb","https://gomovies.ms/movie/watch-nostalgia-for-the-light-hd-online-free-1842"
"554","558","Se7en","Fincher, David","1995","USA","127","https://www.dailymotion.com/video/x2249l","https://gomovies.ms/movie/watch-se7en-hd-online-free-19726"
"556","545","Strangers on a Train","Hitchcock, Alfred","1951","USA","101","https://www.dailymotion.com/video/x9tvvz2","https://gomovies.ms/movie/watch-strangers-on-a-train-hd-online-free-18718"
"560","571","Butch Cassidy and the Sundance Kid","Hill, George Roy","1969","USA","110","https://www.dailymotion.com/video/x4gsu7l","https://gomovies.ms/movie/watch-butch-cassidy-and-the-sundance-kid-hd-online-free-18740"
"562","553","WALL-E","Stanton, Andrew","2008","USA","98","https://www.dailymotion.com/video/x51fp5","https://gomovies.ms/movie/watch-wall-e-hd-online-free-19537"
"563","555","I Walked with a Zombie","Tourneur, Jacques","1943","USA","69","https://www.dailymotion.com/video/x46kzf","https://gomovies.ms/movie/watch-i-walked-with-a-zombie-hd-online-free-8335"
"564","554","Dead Man","Jarmusch, Jim","1995","USA","121","https://www.dailymotion.com/video/x14v44u","https://gomovies.ms/movie/watch-dead-man-hd-online-free-13465"
"565","570","Kagemusha","Kurosawa, Akira","1980","Japan","159","https://www.dailymotion.com/video/x3ahcti","https://gomovies.ms/movie/watch-kagemusha-hd-online-free-13803"
"566","563","Morvern Callar","Ramsay, Lynne","2002","UK","97","https://www.dailymotion.com/video/xpwkcp","https://gomovies.ms/movie/watch-morvern-callar-hd-online-free-2205"
"569","566","Brokeback Mountain","Lee, Ang","2005","USA","134","https://www.dailymotion.com/video/xd6au5","https://gomovies.ms/movie/watch-brokeback-mountain-hd-online-free-17584"
"580","581","Easy Rider","Hopper, Dennis","1969","USA","94","https://www.dailymotion.com/video/x8sva90","https://gomovies.ms/movie/watch-easy-rider-hd-online-free-16692"
"581","577","Laura","Preminger, Otto","1944","USA","85","https://www.dailymotion.com/video/xnpd10","https://gomovies.ms/movie/watch-laura-hd-online-free-4103"
"585","576","That Obscure Object of Desire","Buñuel, Luis","1977","France","103","https://www.dailymotion.com/video/xtp0zo","https://gomovies.ms/movie/watch-that-obscure-object-of-desire-hd-online-free-13969"
"586","613","Forrest Gump","Zemeckis, Robert","1994","USA","142","https://www.dailymotion.com/video/x2lbwe9","https://gomovies.ms/movie/watch-forrest-gump-hd-online-free-19710"
"587","580","Barton Fink","Coen, Joel & Ethan Coen","1991","USA","117","https://www.dailymotion.com/video/x2lbul4","https://gomovies.ms/movie/watch-barton-fink-hd-online-free-16997"
"593","586","Halloween","Carpenter, John","1978","USA","93","https://www.dailymotion.com/video/x6ldui6","https://gomovies.ms/movie/watch-halloween-hd-online-free-19214"
"597","595","Jurassic Park","Spielberg, Steven","1993","USA","127","https://www.dailymotion.com/video/xktefw","https://gomovies.ms/movie/watch-jurassic-park-hd-online-free-18556"
"598","599","Repulsion","Polanski, Roman","1965","UK","105","https://www.dailymotion.com/video/xje702","https://gomovies.ms/movie/watch-repulsion-hd-online-free-13209"
"600","601","Crouching Tiger, Hidden Dragon","Lee, Ang","2000","Taiwan","120","https://www.dailymotion.com/video/x3uuuho","https://gomovies.ms/movie/watch-crouching-tiger-hidden-dragon-hd-online-free-16890"
"601","592","Tootsie","Pollack, Sydney","1982","USA","116","https://www.dailymotion.com/video/x2qqh0j","https://gomovies.ms/movie/watch-tootsie-hd-online-free-54213"
"603","606","Terminator 2: Judgment Day","Cameron, James","1991","USA","136","https://www.dailymotion.com/video/x5yvi1s","https://gomovies.ms/movie/watch-terminator-2-judgment-day-hd-online-free-19609"
"604","589","Gentlemen Prefer Blondes","Hawks, Howard","1953","USA","91","https://www.dailymotion.com/video/x2nrer","https://gomovies.ms/movie/watch-gentlemen-prefer-blondes-hd-online-free-57541"
"605","590","Grey Gardens","Maysles, David/Albert Maysles/Ellen Hovde/Muffie Meyer","1975","USA","95","https://www.dailymotion.com/video/x8dfjhm","https://gomovies.ms/movie/watch-grey-gardens-hd-online-free-5355"
"606","625","Zodiac","Fincher, David","2007","USA","158","https://www.dailymotion.com/video/x2b2cae","https://gomovies.ms/movie/watch-zodiac-hd-online-free-15182"
"607","593","Colossal Youth","Costa, Pedro","2006","France","155","https://www.dailymotion.com/video/x8egmlq","https://gomovies.ms/movie/watch-colossal-youth-hd-online-free-60772"
"609","602","Hatari!","Hawks, Howard","1962","USA","157","https://www.dailymotion.com/video/xr54xu","https://gomovies.ms/movie/watch-hatari-hd-online-free-11236"
"612","609","Full Metal Jacket","Kubrick, Stanley","1987","USA","116","https://www.dailymotion.com/video/x2lbyem","https://gomovies.ms/movie/watch-full-metal-jacket-hd-online-free-19055"
"614","623","Synecdoche, New York","Kaufman, Charlie","2008","USA","124","https://www.dailymotion.com/video/x8tqx4","https://gomovies.ms/movie/watch-synecdoche-new-york-hd-online-free-11983"
"615","620","Deliverance","Boorman, John","1972","USA","109","https://www.dailymotion.com/video/x929z2g","https://gomovies.ms/movie/watch-deliverance-hd-online-free-12868"
"616","653","Down by Law","Jarmusch, Jim","1986","USA","107","https://www.dailymotion.com/video/x7cc60e","https://gomovies.ms/movie/watch-down-by-law-hd-online-free-12190"
"620","604","Providence","Resnais, Alain","1977","France","110","https://www.dailymotion.com/video/x50bldy","https://gomovies.ms/movie/watch-outside-providence-hd-online-free-6648"
"631","622","Pink Flamingos","Waters, John","1972","USA","92","https://www.dailymotion.com/video/x9qg0r","https://gomovies.ms/movie/watch-pink-flamingos-hd-online-free-11623"
"633","631","Alphaville","Godard, Jean-Luc","1965","France","95","https://www.dailymotion.com/video/x22vf2m","https://gomovies.ms/movie/watch-alphaville-hd-online-free-7273"
"636","644","Rebecca","Hitchcock, Alfred","1940","USA","130","https://www.dailymotion.com/video/x4yyohj","https://gomovies.ms/movie/watch-rebecca-hd-online-free-17485"
"637","635","Hour of the Wolf","Bergman, Ingmar","1968","Sweden","88","https://www.dailymotion.com/video/x89k8ow","https://gomovies.ms/movie/watch-hour-of-the-wolf-hd-online-free-11739"
"639","629","Harakiri","Kobayashi, Masaki","1962","Japan","133","https://www.dailymotion.com/video/x2l5862","https://gomovies.ms/movie/watch-harakiri-hd-online-free-65870"
"640","647","Casque d'or","Becker, Jacques","1952","France","96","https://www.dailymotion.com/video/x3azw5l","https://gomovies.ms/movie/watch-casque-dor-hd-online-free-14419"
"642","648","Titanic","Cameron, James","1997","USA","194","https://www.dailymotion.com/video/x31nh8z","https://gomovies.ms/movie/watch-titanic-hd-online-free-19586"
"647","646","Frankenstein","Whale, James","1931","USA","70","https://www.dailymotion.com/video/x1f7g80","https://gomovies.ms/movie/watch-frankenstein-hd-online-free-18885"
"648","641","Rocky","Avildsen, John G.","1976","USA","119","https://www.dailymotion.com/video/x7dxuv","https://gomovies.ms/movie/watch-rocky-hd-online-free-19528"
"650","640","My Own Private Idaho","Van Sant, Gus","1991","USA","102","https://www.dailymotion.com/video/xqrwr2","https://gomovies.ms/movie/watch-my-own-private-idaho-hd-online-free-16869"
"651","659","Scarface","Hawks, Howard","1932","USA","93","https://www.dailymotion.com/video/x2i7a","https://gomovies.ms/movie/watch-scarface-hd-online-free-19298"
"653","654","Strike","Eisenstein, Sergei","1925","USSR","82","https://www.dailymotion.com/video/x8ldpxu","https://gomovies.ms/movie/watch-strike-hd-online-free-2786"
"654","639","Hoop Dreams","James, Steve","1994","USA","170","https://www.dailymotion.com/video/x8omm48","https://gomovies.ms/movie/watch-hoop-dreams-hd-online-free-8654"
"656","678","Ratcatcher","Ramsay, Lynne","1999","UK","94","https://www.dailymotion.com/video/x8u5zmo","https://gomovies.ms/movie/watch-ratcatcher-hd-online-free-8122"
"657","643","Walkabout","Roeg, Nicolas","1971","UK","100","https://www.dailymotion.com/video/x8tie9u","https://gomovies.ms/movie/watch-walkabout-hd-online-free-8711"
"670","660","Amour","Haneke, Michael","2012","Austria","127","https://www.dailymotion.com/video/x2lbrc3","https://gomovies.ms/movie/watch-amour-hd-online-free-95509"
"674","661","Bambi","Hand, David","1942","USA","69","https://www.dailymotion.com/video/x2lbpma","https://gomovies.ms/movie/watch-bambi-hd-online-free-18409"
"679","694","Toy Story","Lasseter, John","1995","USA","81","https://www.dailymotion.com/video/x2h2mz","https://gomovies.ms/movie/watch-toy-story-hd-online-free-19538"
"682","685","Wild at Heart","Lynch, David","1990","USA","127","https://www.dailymotion.com/video/x809d3n","https://gomovies.ms/movie/watch-wild-at-heart-hd-online-free-57069"
"683","687","Rushmore","Anderson, Wes","1998","USA","93","https://www.dailymotion.com/video/x8dth0t","https://gomovies.ms/movie/watch-rushmore-hd-online-free-54230"
"686","691","Robocop","Verhoeven, Paul","1987","USA","102","https://www.dailymotion.com/video/x7p0uei","https://gomovies.ms/movie/watch-robocop-hd-online-free-19044"
"687","706","When Harry Met Sally...","Reiner, Rob","1989","USA","95","https://www.dailymotion.com/video/x2gsmbr","https://gomovies.ms/movie/watch-when-harry-met-sally-hd-online-free-18832"
"690","681","Trainspotting","Boyle, Danny","1996","UK","95","https://www.dailymotion.com/video/x8ygkry","https://gomovies.ms/movie/watch-trainspotting-hd-online-free-19507"
"692","679","Mr. Smith Goes to Washington","Capra, Frank","1939","USA","129","https://www.dailymotion.com/video/x28davj","https://gomovies.ms/movie/watch-mr-smith-goes-to-washington-hd-online-free-17175"
"693","749","Distant","Ceylan, Nuri Bilge","2002","Turkey","110","https://www.dailymotion.com/video/x8lod3g","https://gomovies.ms/movie/watch-distant-hd-online-free-6925"
"695","684","Local Hero","Forsyth, Bill","1983","UK","111","https://www.dailymotion.com/video/x9r29q8","https://gomovies.ms/movie/watch-local-hero-hd-online-free-11233"
"696","686","Gimme Shelter","Maysles, Albert/David Maysles/Charlotte Zwerin","1970","USA","91","https://www.dailymotion.com/video/x2lbou2","https://gomovies.ms/movie/watch-gimme-shelter-hd-online-free-3783"
"697","700","Wake in Fright","Kotcheff, Ted","1971","Australia","109","https://www.dailymotion.com/video/x59k9a3","https://gomovies.ms/movie/watch-wake-in-fright-hd-online-free-9188"
"702","713","Dancer in the Dark","von Trier, Lars","2000","Denmark","140","https://www.dailymotion.com/video/x8m0z5u","https://gomovies.ms/movie/watch-dancer-in-the-dark-hd-online-free-17148"
"704","732","Fish Tank","Arnold, Andrea","2009","UK","123","https://www.dailymotion.com/video/x2l5bm3","https://gomovies.ms/movie/watch-fish-tank-hd-online-free-12204"
"705","689","Cure","Kurosawa, Kiyoshi","1997","Japan","111","https://www.dailymotion.com/video/x8fqmaq","https://gomovies.ms/movie/watch-cure-hd-online-free-8717"
"707","704","Roma","Cuarón, Alfonso","2018","Mexico","135","https://www.dailymotion.com/video/x8dpd7n","https://gomovies.ms/movie/watch-roma-hd-online-free-19769"
"711","702","Before Sunset","Linklater, Richard","2004","USA","80","https://www.dailymotion.com/video/x8poxux","https://gomovies.ms/movie/watch-before-sunset-hd-online-free-17272"
"713","697","Salesman","Maysles, Albert/David Maysles/Charlotte Zwerin","1969","USA","91","https://www.dailymotion.com/video/x8sha64","https://gomovies.ms/movie/watch-salesman-hd-online-free-61407"
"716","714","Carol","Haynes, Todd","2015","UK","118","https://www.dailymotion.com/video/x3kzz0e","https://gomovies.ms/movie/watch-carol-hd-online-free-18009"
"718","709","Hunger","McQueen, Steve","2008","UK","96","https://www.dailymotion.com/video/x89y2ir","https://gomovies.ms/movie/watch-hunger-hd-online-free-3110"
"721","717","Moulin Rouge!","Luhrmann, Baz","2001","Australia","127","https://www.dailymotion.com/video/x26z2jz","https://gomovies.ms/movie/watch-moulin-rouge-hd-online-free-16644"
"724","772","Malcolm X","Lee, Spike","1992","USA","201","https://www.dailymotion.com/video/x8m6j4v","https://gomovies.ms/movie/watch-malcolm-x-hd-online-free-16723"
"725","728","Ben-Hur","Wyler, William","1959","USA","212","https://www.dailymotion.com/video/x7thupb","https://gomovies.ms/movie/watch-in-the-name-of-ben-hur-hd-online-free-55686"
"732","726","Stand by Me","Reiner, Rob","1986","USA","89","https://www.dailymotion.com/video/x5wiu9z","https://gomovies.ms/movie/watch-stand-by-me-hd-online-free-18813"
"734","754","Dazed and Confused","Linklater, Richard","1993","USA","103","https://www.dailymotion.com/video/x1itw8","https://gomovies.ms/movie/watch-dazed-and-confused-hd-online-free-16278"
"735","723","Moonfleet","Lang, Fritz","1955","USA","89","https://www.dailymotion.com/video/x109npm","https://gomovies.ms/movie/watch-moonfleet-hd-online-free-66651"
"745","731","New York, New York","Scorsese, Martin","1977","USA","155","https://www.dailymotion.com/video/xjtgf6","https://gomovies.ms/movie/watch-new-york-new-york-hd-online-free-11482"
"746","743","Phantom of the Paradise","De Palma, Brian","1974","USA","91","https://www.dailymotion.com/video/x2lbnn0","https://gomovies.ms/movie/watch-phantom-of-the-paradise-hd-online-free-9912"
"753","740","Triumph of the Will","Riefenstahl, Leni","1935","Germany","110","https://www.dailymotion.com/video/x9dlt","https://gomovies.ms/movie/watch-triumph-of-the-will-hd-online-free-13485"
"761","790","Fort Apache","Ford, John","1948","USA","127","https://www.dailymotion.com/video/x9r8zu6","https://gomovies.ms/movie/watch-fort-apache-hd-online-free-12191"
"763","797","Memento","Nolan, Christopher","2000","USA","113","https://www.dailymotion.com/video/x3yqff","https://gomovies.ms/movie/watch-memento-hd-online-free-19087"
"764","750","Detour","Ulmer, Edgar G.","1945","USA","69","https://www.dailymotion.com/video/x8k3tsu","https://gomovies.ms/movie/watch-detour-hd-online-free-5356"
"771","758","Veronika Voss","Fassbinder, Rainer Werner","1982","West Germany","105","https://www.dailymotion.com/video/x11tt7t","https://gomovies.ms/movie/watch-veronika-voss-hd-online-free-1978"
"777","762","Good Morning","Ozu, Yasujiro","1959","Japan","94","https://www.dailymotion.com/video/x5lfbje","https://gomovies.ms/movie/watch-good-morning-hd-online-free-1396"
"778","763","Great Expectations","Lean, David","1946","UK","118","https://www.dailymotion.com/video/x8idqai","https://gomovies.ms/movie/watch-great-expectations-hd-online-free-10432"
"780","787","Mamma Roma","Pasolini, Pier Paolo","1962","Italy","110","https://www.dailymotion.com/video/x11gcs3","https://gomovies.ms/movie/watch-mamma-roma-hd-online-free-6244"
"782","807","JFK","Stone, Oliver","1991","USA","189","https://www.dailymotion.com/video/x89xylx","https://gomovies.ms/movie/watch-jfk-hd-online-free-17786"
"787","767","Wings","Shepitko, Larisa","1966","USSR","85","https://www.dailymotion.com/video/x8mqf21","https://gomovies.ms/movie/watch-wings-hd-online-free-12515"
"792","794","Miller's Crossing","Coen, Joel & Ethan Coen","1990","USA","115","https://www.dailymotion.com/video/xx2e3a","https://gomovies.ms/movie/watch-millers-crossing-hd-online-free-16764"
"794","801","Requiem for a Dream","Aronofsky, Darren","2000","USA","100","https://www.dailymotion.com/video/x6xiju","https://gomovies.ms/movie/watch-requiem-for-a-dream-hd-online-free-10288"
"795","774","Zelig","Allen, Woody","1983","USA","79","https://www.dailymotion.com/video/x8eafrz","https://gomovies.ms/movie/watch-zelig-hd-online-free-12774"
"801","779","Faster, Pussycat! Kill! Kill!","Meyer, Russ","1965","USA","83","https://www.dailymotion.com/video/xz5oq3","https://gomovies.ms/movie/watch-faster-pussycat-kill-kill-hd-online-free-8024"
"804","804","All Quiet on the Western Front","Milestone, Lewis","1930","USA","133","https://www.dailymotion.com/video/x9sx3xa","https://gomovies.ms/movie/watch-all-quiet-on-the-western-front-hd-online-free-8065"
"805","843","Scarface","De Palma, Brian","1983","USA","170","https://www.dailymotion.com/video/x2i7a","https://gomovies.ms/movie/watch-scarface-hd-online-free-19298"
"806","806","Funny Games","Haneke, Michael","1997","Austria","108","https://www.dailymotion.com/video/x2lbxy5","https://gomovies.ms/movie/watch-funny-games-hd-online-free-11295"
"807","837","Margaret","Lonergan, Kenneth","2011","USA","150","https://www.dailymotion.com/video/x6cp9v2","https://gomovies.ms/movie/watch-margaret-hd-online-free-6791"
"809","816","Shock Corridor","Fuller, Samuel","1963","USA","101","https://www.dailymotion.com/video/x8f8dhy","https://gomovies.ms/movie/watch-shock-corridor-hd-online-free-6489"
"810","818","Van Gogh","Pialat, Maurice","1991","France","158","https://www.dailymotion.com/video/x25r791","https://gomovies.ms/movie/watch-van-gogh-hd-online-free-86022"
"812","799","Forbidden Games","Clément, René","1952","France","87","https://www.dailymotion.com/video/x8k5dsg","https://gomovies.ms/movie/watch-forbidden-games-hd-online-free-10241"
"815","809","Broadcast News","Brooks, James L.","1987","USA","133","https://www.dailymotion.com/video/x8geohc","https://gomovies.ms/movie/watch-broadcast-news-hd-online-free-12337"
"821","808","Passion","Godard, Jean-Luc","1982","France","87","https://www.dailymotion.com/video/x3yd0cd","https://gomovies.ms/movie/watch-passion-hd-online-free-12788"
"824","829","Petite Maman","Sciamma, Céline","2021","France","73","https://www.dailymotion.com/video/x81a3ax","https://gomovies.ms/movie/watch-petite-maman-hd-online-free-96472"
"826","848","Grizzly Man","Herzog, Werner","2005","USA","103","https://www.dailymotion.com/video/x2b5h5s","https://gomovies.ms/movie/watch-grizzly-man-hd-online-free-11500"
"827","830","Deep End","Skolimowski, Jerzy","1970","UK","88","https://www.dailymotion.com/video/x2lbvfq","https://gomovies.ms/movie/watch-deep-end-hd-online-free-2803"
"831","826","Edward Scissorhands","Burton, Tim","1990","USA","105","https://www.dailymotion.com/video/xb9bz2","https://gomovies.ms/movie/watch-edward-scissorhands-hd-online-free-19341"
"832","822","She Wore a Yellow Ribbon","Ford, John","1949","USA","103","https://www.dailymotion.com/video/xdb0jn","https://gomovies.ms/movie/watch-she-wore-a-yellow-ribbon-hd-online-free-13009"
"833","913","Let the Right One In","Alfredson, Tomas","2008","Sweden","114","https://www.dailymotion.com/video/x8dtvgv","https://gomovies.ms/movie/watch-let-the-right-one-in-hd-online-free-16765"
"839","833","Funeral Parade of Roses","Matsumoto, Toshio","1969","Japan","105","https://www.dailymotion.com/video/xm3chg","https://gomovies.ms/movie/watch-funeral-parade-of-roses-hd-online-free-5326"
"842","854","Invasion of the Body Snatchers","Siegel, Don","1956","USA","80","https://www.dailymotion.com/video/x2reoe","https://gomovies.ms/movie/watch-invasion-of-the-body-snatchers-hd-online-free-18120"
"843","834","Gummo","Korine, Harmony","1997","USA","88","https://www.dailymotion.com/video/x8ec0qv","https://gomovies.ms/movie/watch-gummo-hd-online-free-9476"
"844","847","Persepolis","Paronnaud, Vincent & Marjane Satrapi","2007","France","96","https://www.dailymotion.com/video/x2594zy","https://gomovies.ms/movie/watch-persepolis-hd-online-free-56335"
"845","852","Inglourious Basterds","Tarantino, Quentin","2009","USA","153","https://www.dailymotion.com/video/x8ftyi","https://gomovies.ms/movie/watch-inglourious-basterds-hd-online-free-19585"
"846","839","Female Trouble","Waters, John","1974","USA","98","https://www.dailymotion.com/video/x8udy4e","https://gomovies.ms/movie/watch-female-trouble-hd-online-free-4330"
"848","869","Angel","Lubitsch, Ernst","1937","USA","91","https://www.dailymotion.com/video/xhx5ck","https://gomovies.ms/movie/watch-angel-hd-online-free-6021"
"849","856","Point Break","Bigelow, Kathryn","1991","USA","122","https://www.dailymotion.com/video/x51bu52","https://gomovies.ms/movie/watch-point-break-hd-online-free-12800"
"856","861","Starship Troopers","Verhoeven, Paul","1997","USA","129","https://www.dailymotion.com/video/x9p7e58","https://gomovies.ms/movie/watch-starship-troopers-hd-online-free-19176"
"858","873","Mikey and Nicky","May, Elaine","1976","USA","106","https://www.dailymotion.com/video/xpy07j","https://gomovies.ms/movie/watch-mikey-and-nicky-hd-online-free-14949"
"861","851","Shame","Bergman, Ingmar","1968","Sweden","103","https://www.dailymotion.com/video/x2lbu49","https://gomovies.ms/movie/watch-shame-hd-online-free-17164"
"862","844","They Were Expendable","Ford, John","1945","USA","135","https://www.dailymotion.com/video/x9psaag","https://gomovies.ms/movie/watch-they-were-expendable-hd-online-free-2864"
"865","867","Clueless","Heckerling, Amy","1995","USA","97","https://www.dailymotion.com/video/x33swns","https://gomovies.ms/movie/watch-clueless-hd-online-free-17414"
"868","889","Saving Private Ryan","Spielberg, Steven","1998","USA","169","https://www.dailymotion.com/video/x2b3kz","https://gomovies.ms/movie/watch-saving-private-ryan-hd-online-free-19481"
"870","859","Shanghai Express","von Sternberg, Josef","1932","USA","82","https://www.dailymotion.com/video/x8m8gke","https://gomovies.ms/movie/watch-shanghai-express-hd-online-free-7454"
"873","874","Gloria","Cassavetes, John","1980","USA","121","https://www.dailymotion.com/video/xl1ru6","https://gomovies.ms/movie/watch-gloria-hd-online-free-2350"
"877","875","Monty Python and the Holy Grail","Gilliam, Terry & Terry Jones","1975","UK","90","https://www.dailymotion.com/video/x139xc","https://gomovies.ms/movie/watch-monty-python-and-the-holy-grail-hd-online-free-19516"
"888","898","Who's Afraid of Virginia Woolf?","Nichols, Mike","1966","USA","129","https://www.dailymotion.com/video/x8jqb9b","https://gomovies.ms/movie/watch-whos-afraid-of-virginia-woolf-hd-online-free-10712"
"895","899","Airplane!","Abrahams, Jim/David Zucker/Jerry Zucker","1980","USA","86","https://www.dailymotion.com/video/x8dyyoc","https://gomovies.ms/movie/watch-airplane-hd-online-free-19322"
"897","894","Showgirls","Verhoeven, Paul","1995","USA","128","https://www.dailymotion.com/video/x2e4ixl","https://gomovies.ms/movie/watch-showgirls-hd-online-free-18530"
"899","915","They Live","Carpenter, John","1988","USA","93","https://www.dailymotion.com/video/x8ds5rz","https://gomovies.ms/movie/watch-they-live-hd-online-free-16655"
"900","902","Zabriskie Point","Antonioni, Michelangelo","1970","USA","112","https://www.dailymotion.com/video/x497n0n","https://gomovies.ms/movie/watch-zabriskie-point-hd-online-free-10249"
"901","920","Tongues Untied","Riggs, Marlon","1989","USA","55","https://www.dailymotion.com/video/x8s6f5i","https://gomovies.ms/movie/watch-tongues-untied-hd-online-free-85479"
"902","896","Exotica","Egoyan, Atom","1994","Canada","104","https://www.dailymotion.com/video/x8ucy18","https://gomovies.ms/movie/watch-exotica-hd-online-free-11477"
"903","895","Assault on Precinct 13","Carpenter, John","1976","USA","90","https://www.dailymotion.com/video/xi3i4o","https://gomovies.ms/movie/watch-assault-on-precinct-13-hd-online-free-11235"
"904","903","Deep Red","Argento, Dario","1975","Italy","98","https://www.dailymotion.com/video/x8xyjqc","https://gomovies.ms/movie/watch-deep-red-hd-online-free-61832"
"914","928","Meek's Cutoff","Reichardt, Kelly","2010","USA","104","https://www.dailymotion.com/video/x28de38","https://gomovies.ms/movie/watch-meeks-cutoff-hd-online-free-8384"
"917","949","Tabu","Gomes, Miguel","2012","Portugal","118","https://www.dailymotion.com/video/x8j07ek","https://gomovies.ms/movie/watch-tabu-hd-online-free-5291"
"928","946","Before Sunrise","Linklater, Richard","1995","USA","101","https://www.dailymotion.com/video/x8x57m4","https://gomovies.ms/movie/watch-before-sunrise-hd-online-free-17659"
"930","963","Shaun of the Dead","Wright, Edgar","2004","UK","99","https://www.dailymotion.com/video/x6dyra","https://gomovies.ms/movie/watch-shaun-of-the-dead-hd-online-free-19201"
"931","925","Reds","Beatty, Warren","1981","USA","200","https://www.dailymotion.com/video/x2lbuyn","https://gomovies.ms/movie/watch-reds-hd-online-free-10197"
"935","939","Blood Simple","Coen, Joel & Ethan Coen","1984","USA","97","https://www.dailymotion.com/video/x7qzy86","https://gomovies.ms/movie/watch-blood-simple-hd-online-free-17368"
"942","957","American Graffiti","Lucas, George","1973","USA","110","https://www.dailymotion.com/video/x22h8av","https://gomovies.ms/movie/watch-american-graffiti-hd-online-free-17264"
"951","","Diary","Perlov, David","1983","Israel","330","https://www.dailymotion.com/video/x8wsktw","https://gomovies.ms/movie/watch-dear-diary-hd-online-free-8405"
"955","981","Spartacus","Kubrick, Stanley","1960","USA","197","https://www.dailymotion.com/video/x4i1hh6","https://gomovies.ms/movie/watch-spartacus-hd-online-free-17511"
"956","947","American Beauty","Mendes, Sam","1999","USA","121","https://www.dailymotion.com/video/x2lbwe6","https://gomovies.ms/movie/watch-american-beauty-hd-online-free-19342"
"957","","Excalibur","Boorman, John","1981","UK","140","https://www.dailymotion.com/video/x8jxoif","https://gomovies.ms/movie/watch-excalibur-hd-online-free-16256"
"958","951","Perfumed Nightmare","Tahimik, Kidlat","1977","Philippines","93","https://www.dailymotion.com/video/x7xfqaf","https://gomovies.ms/movie/watch-perfumed-nightmare-hd-online-free-63192"
"959","961","Othello","Welles, Orson","1951","Italy","90","https://www.dailymotion.com/video/x2x0y4t","https://gomovies.ms/movie/watch-othello-hd-online-free-3705"
"962","980","Avatar","Cameron, James","2009","USA","161","https://www.dailymotion.com/video/x2crj2y","https://gomovies.ms/movie/watch-avatar-hd-online-free-19690"
"964","974","Duel","Spielberg, Steven","1971","USA","90","https://www.dailymotion.com/video/x6dixf","https://gomovies.ms/movie/watch-duel-hd-online-free-16804"
"966","975","Z","Costa-Gavras, Constantin","1969","France","127","https://www.dailymotion.com/video/x5mncw","https://gomovies.ms/movie/watch-z-hd-online-free-13229"
"968","955","Olympia","Riefenstahl, Leni","1938","Germany","201","https://www.dailymotion.com/video/xtwzbr","https://gomovies.ms/movie/watch-olympia-hd-online-free-83842"
"970","964","Gun Crazy","Lewis, Joseph H.","1950","USA","86","https://www.dailymotion.com/video/x166z41","https://gomovies.ms/movie/watch-gun-crazy-hd-online-free-10499"
"973","","Ghostbusters","Reitman, Ivan","1984","USA","107","https://www.dailymotion.com/video/x44nra2","https://gomovies.ms/movie/watch-ghostbusters-hd-online-free-19015"
"975","984","Carlito's Way","De Palma, Brian","1993","USA","144","https://www.dailymotion.com/video/xfje0e","https://gomovies.ms/movie/watch-carlitos-way-hd-online-free-16562"
"976","967","Rope","Hitchcock, Alfred","1948","USA","80","https://www.dailymotion.com/video/x75t0p2","https://gomovies.ms/movie/watch-rope-hd-online-free-18016"
"987","969","Anatahan","von Sternberg, Josef","1953","Japan","92","https://www.dailymotion.com/video/x8tm9ku","https://gomovies.ms/movie/watch-anatahan-hd-online-free-58714"
"989","992","Arabian Nights","Pasolini, Pier Paolo","1974","Italy","130","https://www.dailymotion.com/video/x2pzonu","https://gomovies.ms/movie/watch-arabian-nights-hd-online-free-11113"
"992","996","Kwaidan","Kobayashi, Masaki","1964","Japan","183","https://www.dailymotion.com/video/x7n5uls","https://gomovies.ms/movie/watch-kwaidan-hd-online-free-11813"
"994","976","Gilda","Vidor, Charles","1946","USA","110","https://www.dailymotion.com/video/x71aebp","https://gomovies.ms/movie/watch-gilda-hd-online-free-10126"
"996","987","Sholay","Sippy, Ramesh","1975","India","162","https://www.dailymotion.com/video/x8yey86","https://gomovies.ms/movie/watch-sholay-hd-online-free-7733"
"997","991","Ed Wood","Burton, Tim","1994","USA","124","https://www.dailymotion.com/video/x527nr","https://gomovies.ms/movie/watch-ed-wood-hd-online-free-16422"
"998","985","Sweetie","Campion, Jane","1989","Australia","97","https://www.dailymotion.com/video/x34bwef","https://gomovies.ms/movie/watch-sweetie-hd-online-free-128395"

`;
// 🔑 CONFIGURATION
    const OMDB_API_KEY = "98e4893e"; 
    const MILLISECONDS_PER_DAY = 24 * 60 * 60 * 1000;
    
    // DATE DE RÉFÉRENCE : Aujourd'hui (16 Décembre 2025)
    // Le film à l'index 0 (Citizen Kane) s'affichera à cette date précise.
    const START_DATE_UTC = Date.UTC(2025, 11, 16); 

    let films = [];

    // ELEMENTS DOM
    const filmTitle = document.getElementById('film-title');
    const filmQuote = document.getElementById('film-quote');
    const filmPosterImg = document.getElementById('film-poster-img');
    const movieTrailerIframe = document.getElementById('movie-trailer');
    const checkBtn = document.getElementById('check-film-btn');
    const userCountSpan = document.getElementById('user-count');
    const gomoviesLink = document.getElementById('gomovies-link');
    const countdownTimer = document.getElementById('countdown-timer');

    // --- PARSING DU CSV ---
    function parseCSV(csvString) {
        const lines = csvString.trim().split('\n');
        if (lines.length <= 1) return [];
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

    // --- CALCUL DE L'INDEX SÉQUENTIEL (Ligne 1, 2, 3...) ---
    function calculateSequentialIndex() {
        if (films.length === 0) return 0;
        const now = new Date();
        const todayUTC = Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate());
        
        // Calcule le nombre de jours écoulés depuis le début
        const diffInMs = todayUTC - START_DATE_UTC;
        const daysSinceStart = Math.max(0, Math.floor(diffInMs / MILLISECONDS_PER_DAY));
        
        // Retourne l'index correspondant à la ligne du CSV
        return daysSinceStart % films.length;
    }

    // --- API OMDB ---
    async function fetchFilmDetails(title, year) {
        let cleanTitle = title.replace(/,\s*(The|A|An)$/i, '');
        const url = `https://www.omdbapi.com/?t=${encodeURIComponent(cleanTitle)}&y=${year}&apikey=${OMDB_API_KEY}`;
        try {
            const response = await fetch(url);
            const data = await response.json();
            return data.Response === "True" ? data : null;
        } catch (error) {
            return null;
        }
    }

    // --- MISE À JOUR DE L'INTERFACE ---
    function updateFilmDisplay(details, csvRow) {
        const title = csvRow.Title;
        filmTitle.textContent = title.toUpperCase();
        filmQuote.textContent = details ? `"${details.Plot}"` : `Directed by ${csvRow.Director} (${csvRow.Year}).`;
        filmPosterImg.src = (details && details.Poster !== "N/A") ? details.Poster : 'poster-default.jpg';
        
        const trailerId = csvRow['Trailer URL'].match(/\/video\/([a-zA-Z0-9]+)/)?.[1] || 'x5hyokx';
        movieTrailerIframe.src = `https://www.dailymotion.com/embed/video/${trailerId}?autoplay=0&mute=1&controls=1`;

        gomoviesLink.href = csvRow['GoMovies URL'] || '#';
        
        const seed = new Date().getUTCDate() + title.length;
        userCountSpan.textContent = `${(seed % 150) + 45} users are watching today.`;
    }

    // --- SYSTÈME DE VERROUILLAGE ---
    function setupLockScreen() {
        const lockScreen = document.getElementById('lock-screen');
        const input = document.getElementById('secret-code');
        const btn = document.getElementById('unlock-btn');
        
        const now = new Date();
        // Génère le code basé sur la date du jour
        const code = String((( (now.getUTCFullYear() * 1000 + (now.getUTCMonth()+1) * 100 + now.getUTCDate()) * 17) % 8999) + 1000);
        
        // Affiche le code dans la console pour vous
        console.log("--- DEBUG ---");
        console.log("Code secret du jour : " + code);
        console.log("-------------");

        const unlock = () => {
            if (input.value.trim() === code) {
                lockScreen.classList.add('hidden');
                localStorage.setItem('cineDose_unlocked', code);
                // Active l'autoplay une fois déverrouillé
                movieTrailerIframe.src = movieTrailerIframe.src.replace('autoplay=0', 'autoplay=1');
            } else {
                alert('Invalid code. Please try again.');
            }
        };

        btn.addEventListener('click', unlock);
        input.addEventListener('keypress', (e) => { if(e.key === 'Enter') unlock(); });

        if (localStorage.getItem('cineDose_unlocked') === code) {
            lockScreen.style.display = 'none';
        }
    }

    // --- COMPTE À REBOURS ---
    function updateCountdown() {
        const now = new Date();
        const nextDay = Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate() + 1);
        const currentUTC = now.getTime() + now.getTimezoneOffset() * 60000;
        const diff = nextDay - currentUTC;
        
        let sec = Math.floor(diff / 1000);
        if (sec <= 0) { location.reload(); return; }

        const h = String(Math.floor(sec / 3600)).padStart(2, '0');
        sec %= 3600;
        const m = String(Math.floor(sec / 60)).padStart(2, '0');
        const s = String(sec % 60).padStart(2, '0');
        countdownTimer.textContent = `NEXT FILM IN ${h}:${m}:${s}`;
    }

    // --- INITIALISATION ---
    async function init() {
        films = parseCSV(csvData);
        if (films.length === 0) return;

        const index = calculateSequentialIndex();
        const details = await fetchFilmDetails(films[index].Title, films[index].Year);
        updateFilmDisplay(details, films[index]);

        setupLockScreen();
        setInterval(updateCountdown, 1000);

        checkBtn.addEventListener('click', () => {
            checkBtn.textContent = '✅ Watched!';
            checkBtn.disabled = true;
        });
    }

    init();
});

