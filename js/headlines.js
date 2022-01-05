let nws = [
    // ziekenhuis
    [3, 2, "Steeds meer mensen positief getest, zorg vreest voor drukte op intensive care", "h100H400c5", 'Ov'],
    [3, 2, "Steeds meer coronapatiënten in het ziekenhuis, `ook impact op reguliere zorg'", "h100H400c5", 'Ov'],
    [3, 2, "Capaciteitsproblemen dreigen in zorg als aantal besmettingen blijft stijgen", "h100H400c5", 'Ov'],
    [2, 0, "Ziekenhuizen zetten zich schrap: `Alle noodscenario's uit de kast getrokken'", "h200H800c10", 'kJ'],
    [2, 0, "Elke dag dichterbij `code zwart': wat gebeurt er als er geen bedden meer zijn?", "h200H800c10", 'kJ'],
    [2, 0, "Geen grip op virus, artsen waarschuwen voor `code zwart' in ziekenhuizen", "h200H800c10", "kJ"],
    [2, 0, "Ziekenhuizen overweldigd door `tsnunami aan coronapatiënten', capaciteit nadert", "h200H800c10", 'kJ'],
    [2, 0, "Ziekenhuisbestuurders waarschuwen kabinet: `Meer opnames kunnen we niet aan'", "h200H800c10", 'kJ'],
    [3, 1, "Groot deel `planbare zorg' afgeschaald: experts vrezen voor `schaduwpandemie'", "h200H400c5D100", 'xB'],
    [3, 1, "Reguliere zorg wordt in de wacht gezet terwijl corona-afdelingen volstromen", "h200H400c5D100", 'xB'],
    [1, 0, "Minister De Jonge: alle niet-kritieke operaties worden voorlopig afgebeld", "h400H1000c5C30", "Gv"],
    [1, 0, "De Jonge: planbare zorg wordt afgeschaald, zelfs chemokuren uitgesteld", "h400H1000c5C30", "Gv"],
    [0, 0, "De Jonge bekrachtigt `code zwart': geen plek meer in overvolle ziekenhuizen", "h1300c5", "P0"],
    [0, 1, "Code zwart uitgeroepen: overvolle ziekenhuizen moeten patiënten weigeren", "h1300c5", "P0"],
    [1, 2, "$fname ($age) moest thuis afscheid nemen van echtgenoot, `een IC-bed had hem gered'", "h1300C10", "ZV"],
    [1, 2, "Doodzieke $mname ($age) heeft dringend een IC-bed nodig, maar nergens is plek", "h1300C10", "ZV"],

    // doden
    [5, 1, "Een maand na eerste coronadode: inmiddels meer dan $dead mensen overleden", "w15t1T10", 'lk'],
    [5, 1, "Eerste coronadode een maand geleden, nu meer dan $dead mensen overleden", "w15t1T10", 'lk'],
    [5, 1, "Een maand na eerste coronadode: inmiddels ongeveer $dead mensen overleden", "w15T1", 'lk'],
    [5, 1, "Eerste coronadode een maand geleden, nu circa $dead mensen overleden", "w15T1", 'lk'],
    [1, 0, "Meer dan $deadrounded coronapatiënten overleden, `werkelijk aantal nog veel hoger'", "t10", 'lk'],
    [1, 0, "RIVM telt meer dan $deadrounded coronadoden, volgens experts zijn het er veel meer", "t10", 'lk'],

    // opinie / explainers
    [4, 0, "Scholen gewoon open ondanks corona? `Mijn kinderen blijven thuis'", "d24D50c0NJ0ma0p100", "sc"],
    [4, 2, "`Als ik niet naar kantoor kan, stuur ik mijn kinderen niet naar school'", "d24D50c0ma0NJ0ma0p100", "sc"],
    [4, 0, "Leraren roepen op tot sluiting scholen, steeds meer scholen vrijwillig dicht", "d24D50c0NJ0nk0ma0p100", "sc"],
    [1, 2, "Kabinet zet geen grote stappen: is dit wel genoeg om het virus in toom te houden?", "d23D35i0I2", "RI"],
    [1, 1, "Heel Europa grijpt in: waarom neemt Nederland zo weinig maatregelen?", "d23D35i0I2", "RI"],
    [1, 1, "Heel Europa grijpt in: waarom doet alleen Nederland niets tegen corona?", "d23D35I0", "RI"],
    [1, 2, "`Kabinet moet nu maatregelen nemen, of de zorg ligt binnen twee weken plat'", "d23D35I0", "RI"],
    [5, 2, "Aantal positieve testen stabiliseert door `veel te kleine testcapaciteit'", "p3000C0D100", "Bh"],
    [5, 2, "GGD: zicht op virus kwijt, stabilisatie aantal positieve testen nietszeggend", "p3000C0D100", "Bh"],
    [8, 0, "GGD schaalt testcapaciteit op, `vanaf juni kan iedereen zich laten testen bij klachten'", "d70"],
    [7, 6, "The Pandemic Ravaged the Netherlands. A Trumpian Health Minister Is to Blame.", "S3f30d60", '0e'],
    [7, 6, "With Their `Smart Lockdown', the Dutch Continued Normal Life. It Paid Off.", "S5F10C0d60", '0e'],
    [8, 6, "How the Dutch, Beacon of Stable Governing, Failed Their Pandemic Response", "f10d60", '0e'],
    [7, 6, "A Pandemic Success Story: Locked Down Netherlands Keeps Virus Contained", "s5F10C0d60", '0e'],
    [5, 1, "Schiphol-baas luidt noodklok: `Miljarden verlies als grenzen gesloten blijven'", "mo45", "FF"],
    [5, 0, "Honderden roepen op tot heropening grenzen: `Familie al maanden niet gezien'", "mo45", "FF"],
    [4, 2, "Studenten tekenen massaal petitie: `Online college haalt ziel uit onderwijs'", "ml45", "vf"],
    [4, 1, "`Nu de coronagolf voorbij is, moeten we ons normale leven weer kunnen oppakken'", "i4H75C0d60", 'GV'],
    [3, 1, "`We moeten weer gaan leven: met de piek achter ons is een lockdown onzinnig'", "i5H75C0d60", 'GV'],

    // maatregelen
    [3, 2, "`Flatten the curve': waarom epidemiologen voor strenge coronamaatregelen pleiten", "d18D35I5", 'AU'],
    [3, 2, "`Flatten the curve': waarom maatregelen tegen het coronavirus broodnodig zijn", "d18D35", 'AU'],
    [3, 2, "Wat `flatten the curve' betekent, en waarom daarvoor maatregelen nodig zijn", "d18D35", 'AU'],
    [1, 0, "Complete lockdown aangekondigd: vrijwel alles gesloten, iedereen blijft thuis", "MM14", 'wv'],
    [1, 0, "Kabinet kiest voor harde lockdown: alleen je huis nog uit als het echt nodig is", "MM14", 'wv'],
    [1, 0, "Nederland in lockdown: thuisblijven wordt de norm, alle gelegenheden dicht", "MM14", 'wv'],
    [1, 1, "Kabinet kiest voor avondklok: 's avonds alleen bij uitzondering naar buiten", "MN14", 'vw'],
    [1, 1, "Avondklok moet besmettingen temmen, 's avonds thuisblijven wordt de norm", "MN14", 'vw'],
    [6, 0, "Studenten volgen massaal online onderwijs, `eenzaamheid wordt steeds groter'", "ml14", 'Ki'],
    [6, 2, "Zoomend het jaar door: studenten voelen zich eenzaam door coronasluiting", "ml14", 'Ki'],
    [5, 0, "Colleges tóch online moeten volgen: `Pijnlijk dat het nodig is'", "ml0ML14d50", 'wX'],
    [4, 1, "Leerlingen genieten van `extra vakantie', maar docenten maken zich zorgen", "mk0MK30", 'dp'],
    [3, 2, "Miljoenen kinderen thuis door sluiting scholen: `Juiste keuze in onzekere tijden'", "mj0D75h300", 'dp'],
    [3, 0, "Scholen sluiten deuren: leraren vroegen erom, maar virologen twijfelden", "mj0D75H300", 'dp'],
    [3, 0, "Primair onderwijs alsnog gesloten: `Dit had voorkomen kunnen worden'", "mj0MJ14d50", 'wX'],
    [7, 0, "Minister De Jonge doet oproep: `Houd afstand en werk zo veel mogelijk thuis'", "d30MA30MB304", 'bX'],
    [7, 0, "De Jonge benadrukt: `Basismaatregelen belangrijk om virus in te dammen'", "d30MA30MB30", 'bX'],
    [8, 1, "Veel evenementen geschrapt door corona, organisaties vragen om compensatie", "MD30", "DW"],
    [7, 1, "Lege theaterzalen bedreigen cultuursector, organisaties hopen op steunregeling", "ME30", "DW"],
    [6, 2, "Door coronamaatregelen een begrafenis missen: hoe rouw je in tijden van corona?", "mf0d40", 'I6'],
    [6, 2, "Niet knuffelen met stervende, niet naar begrafenis: hoe rouw je in tijden van corona?", "mf0d40", 'I6'],
    [9, 0, "Nachtleven komt stil te liggen: lobby heeft begrip, maar teleurstelling overheerst", "MH14d40", 'I6'],
    [5, 0, "Grote strop voor ondernemers: horeca moet tijdelijk dicht vanwege coronavirus", "MG14", '4H'],
    [5, 0, "Winkels moeten deuren sluiten, ondernemers vragen om miljarden overheidssteun", "MI14", '4H'],
    [4, 0, "Niet-essentiële winkels en horeca op slot, `harde klap voor duizenden ondernemers'", "MG30MI30", '4H'],
    [4, 0, "Verslagenheid bij ondernemers: restaurants en meeste winkels dicht door coronavirus", "MG30MI30", '4H'],
    [5, 0, "Schiphol uitgestorven door reisbeperkingen, persoonsverkeer ligt grotendeels stil", "mo0MO14d40", "2s"],


    // afschaffing maatregelen
    [6, 1, "`Eindelijk weer op pad': grensopening zorgt voor enorme toename vakantieboekingen", "no0NO14", "Pq"],
    [3, 0, "Blije kinderen en opgeluchte ouders nu basissschoolklassen weer vol zitten", "nj0NJ30H300", 'jd'],
    [3, 2, "Gemengde gevoelens onder ouders over opening basisscholen: `Nog zo veel onzeker'" , "nj0NJ30h300", 'jd'],
    [6, 2, "Middelbare scholen stromen weer vol, leerlingen hopen op examenversoepelingen", "nk0NK14", 'jd'],
    [5, 1, "Studenten kunnen weer leren én drinken: `We gaan door alsof corona niet bestaat'", "nl0nh0NL30NH30", 'd0'],
    [6, 0, "Studenten terug in de collegebanken: mbo en hoger onderwijs weer volledig open", "nl0NL14", 'd0'],
    [4, 0, "MKB-Nederland opgelucht door heropening winkels, `eindelijk weer perspectief'", "ni0NI14", 'nb'],
    [4, 0, "Winkelstraten langzaam drukker door heropening winkels, ondernemers optimistisch", "ni0NI14", 'nb'],
    [4, 0, "Horecaondernemers voorzichtig optimistisch over heropening: `Een historische dag'", "ng0NG14", 'nb'],
    [4, 0, "Na enorme verliezen hoopt horecalobby op inhaalslag: `Heropening geeft hoop'", "ng0NG14", 'nb'],

    // tweede kamer / minister
    [4, 1, "Felle kritiek op minister De Jonge vanuit oppositie: `Grijp in of stap op'", "d30D50h500I0", "Xf"],
    [4, 1, "Oppositie woedend op De Jonge: `Luister naar de helden in de zorg'", "d30D50h500I0", "Xf"],
    [2, 0, "Tweede Kamer steunt motie van afkeuring, `zorginfarct was niet onvermijdbaar'", "h1400c5", "QC"],
    [2, 0, "In coronadebat bijna unanieme afkeuring: `Tragische gevolgen van wanbeleid'", "h1400c5", "QC"],

    // experts
    [6, 1, "We moeten mondkapjes dragen, maar `het is onwaarschijnlijk dat ze werken'", "MC30D75H400", 'Lu'],
    [6, 1, "RIVM-baas Van Dissel: `Er is simpelweg geen bewijs voor mondkapjesplicht'", "MC30D75H400", 'Lu'],
    [6, 2, "WHO adviseert tegen mondkapjes: waarom voert De Jonge toch plicht in?", "MC30D75H400d30", 'Lu'],
    [3, 2, "IC-arts Gommers: `Kabinet kiest voor een coronaramp door niet in te grijpen'", "h1000I0c5", "CM"],
    [3, 3, "IC-voorzitter Gommers: `Schuld voor coronaramp ligt ongetwijfeld bij kabinet'", "h1000I2c5", "CM"],
    [3, 2, "`Het kan heel snel misgaan': epidemiologen pleiten voor strengere maatregelen", "d27D35i1I4"],

    // peiling
    [6, 4, "Slechts $poll% heeft vertrouwen in De Jonge, grote zorgen over coronacrisis", "O5d30D75", "yj"],
    [6, 4, "Coronabeleid heeft weinig steun: slechts $poll% heeft vertrouwen in De Jonge", "O5d30D75", "yj"],
    [6, 4, "Weinig vertrouwen in De Jonge: slechts $poll% steunt coronabeleid kabinet", "O5d30D75", "yj"],
    [6, 4, "Meerderheid heeft zorgen over coronacrisis, $poll% steunt coronabeleid kabinet", "o5i2d25D75", "yj"],
    [6, 4, "Gezondheidszorg door corona belangrijkste thema, $poll% steunt coronabeleid", "o5i2d25D75", "yj"],

    // event
    [0, 0, "Eerste Nederlander met coronavirus in het ziekenhuis, `man vierde carnaval'", "q11", 'b5'],
    [0, 0, "RIVM: eerste coronageval in Nederland, man kwam uit risicogebied Italië", "q11", 'b5'],
    [0, 1, "Coronavirus duikt op in Nederland: eerste patiënt (56) in Tilburg geïsoleerd", "q11", 'b5'],
    [0, 1, "Viroloog over maatregelen coronavirus: `We moeten waken voor paniekvoetbal'", "q14i0", 'zl'],
    [0, 1, "Geen reden tot zorgen door coronavirus: `Nederland is het best voorbereide land'", "q14i0", 'zl'],
    [0, 2, "Zijn we klaar voor een epidemie? `Kabinet moet niet bang zijn om in te grijpen'", "q14I0", 'zl'],
    [0, 2, "`Het verleden leert ons: maatregelen tegen een epidemie komen eigenlijk altijd te laat'", "q14I0", 'zl'],
    [0, 0, "Eerste overleden coronapatiënt (86) uit Oud-Beijerland `was ontzettend lieve man'", "q18", 'WO'],
    [0, 0, "Eerste Nederlander (86) aan coronavirus overleden in Rotterdams ziekenhuis", "q18", 'WO'],
    [0, 1, "Eerste coronadode in Nederland, man (86) had al gezondheidsproblemen", "q18", 'WO'],
    [6, 0, "Oproep gaat viraal op sociale media: `Applaus voor onze helden in de zorg'", "d26D33"],
    [6, 2, "`Hoopvolle en alarmerende toespraak van koning schudt Nederlanders wakker'", "d29D43I2", "MD"],
    [6, 2, "Koning in zeldzame toespraak: `Coronavirus niet te stoppen, eenzaamheidsvirus wel'", "d29D43i2", "MD"],
    [6, 2, "Toespraak van de koning is kijkcijferkanon: `We moeten hier samen doorheen'", "d29D43", "MD"],
]

// console.log(nws.length);