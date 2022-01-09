let nws = [
    // ziekenhuis / besmettingen
    [3, 0, "Steeds meer mensen positief getest, zorg vreest voor drukte op intensive care", "p50P400r1.2", '4a'],
    [3, 0, "Aantal positieve tests neemt snel toe, zorg bang voor drukte op intensive care", "p50P400r1.2", '4a'],
    [3, 2, "Steeds meer coronapatiënten in het ziekenhuis, `ook impact op reguliere zorg'", "h50H400c10", 'Ov'],
    [3, 2, "Capaciteitsproblemen dreigen in zorg als aantal besmettingen blijft stijgen", "h100H400c10", 'Ov'],
    [2, 0, "Ziekenhuizen zetten zich schrap: `Alle noodscenario's uit de kast getrokken'", "h100H500c25", 'pt'],
    [2, 0, "Ziekenhuizen overweldigd door `tsunami aan coronapatiënten', capaciteit nadert", "h100H500c25", 'pt'],
    [2, 0, "Ziekenhuizen waarschuwen kabinet: `Meer opnames kunnen we niet aan'", "h100H500c25", 'pt'],
    [2, 0, "Elke dag dichterbij `code zwart': wat gebeurt er als er geen bedden meer zijn?", "h200H800c10", 'kJ'],
    [2, 0, "Geen grip op virus, artsen waarschuwen voor `code zwart' in ziekenhuizen", "h200H800c10", "kJ"],
    [5, 1, "Groot deel `planbare zorg' afgeschaald: experts vrezen voor `schaduwpandemie'", "h200H400c5D100", 'xB'],
    [5, 1, "Reguliere zorg wordt in de wacht gezet terwijl corona-afdelingen volstromen", "h200H400c5D100", 'xB'],
    [4, 0, "Minister De Jonge: alle niet-kritieke operaties worden voorlopig afgebeld", "h400H1000c5C30", "Gv"],
    [4, 0, "De Jonge: planbare zorg wordt afgeschaald, zelfs chemokuren uitgesteld", "h400H1000c5C30", "Gv"],
    [0, 0, "De Jonge bekrachtigt `code zwart': geen plek meer in overvolle ziekenhuizen", "h1300c5", "P0"],
    [0, 1, "Code zwart uitgeroepen: overvolle ziekenhuizen moeten patiënten weigeren", "h1300c5", "P0"],
    [1, 2, "$fname ($age) moest thuis afscheid nemen van echtgenoot, `een IC-bed had hem gered'", "h1300C10", "ZV"],
    [1, 2, "Doodzieke $mname ($age) heeft dringend een IC-bed nodig, maar nergens is plek", "h1300C10", "ZV"],
    [2, 0, "Recordaantal besmettingen door hogere testcapaciteit, zorg houdt hart vast", "p6000r1d50", '3q'],
    [2, 0, "Meer besmettingen dan ooit door verhoogde capaciteit, experts vrezen flinke golf", "p6000r1d50", '3q'],
    [9, 2, "Duizenden zorgmedewerkers thuis met burn-out na coronagolf: `Het was gewoon oorlog'", "f20d80", 'qo'],
    [9, 2, "Zorg heeft burn-outprobleem na coronagolf: `Corona-afdeling was een slagveld'", "f20d80", 'qo'],

    // doden
    [5, 1, "Een maand na eerste coronadode: inmiddels meer dan $dead mensen overleden", "w15t1T10", 'lk'],
    [5, 0, "Eerste coronadode een maand geleden, nu meer dan $dead mensen overleden", "w15t1T10", 'lk'],
    [5, 1, "Een maand na eerste coronadode: inmiddels ongeveer $dead mensen overleden", "w15T1", 'lk'],
    [5, 0, "Eerste coronadode een maand geleden, nu circa $dead mensen overleden", "w15T1", 'lk'],
    [1, 2, "Meer dan $deadrounded coronapatiënten overleden, `werkelijk aantal ligt veel hoger'", "t10", 'lk'],
    [1, 0, "RIVM telt meer dan $deadrounded coronadoden, volgens experts zijn het er veel meer", "t10", 'lk'],
    [2, 2, "Geen enkel EU-land zo zwaar getroffen als Nederland, `overheid heeft gefaald'", 't14d75', 'oP'],
    [7, 5, "Global leaders blame Dutch PM as pandemic response leaves thousands dead", "f30d80", 'Cm'],
    [7, 5, "World leaders condemn Dutch PM as pandemic response leaves thousands dead", "f30d80", 'Cm'],

    // opinie / explainers
    [5, 0, "Scholen gewoon open ondanks corona? `Mijn kinderen blijven thuis'", "d24D50c0NJ0ma0p100", "sc"],
    [5, 2, "`Als ik niet naar kantoor kan, stuur ik mijn kinderen niet naar school'", "d24D50c0ma0NJ0ma0p100", "sc"],
    [5, 0, "Leraren roepen op tot sluiting scholen, steeds meer scholen vrijwillig dicht", "d24D50c0NJ0nk0ma0p100", "sc"],
    [1, 2, "Kabinet zet geen grote stappen: is dit wel genoeg om het virus in toom te houden?", "d23D35i0I2", "RI"],
    [1, 1, "Heel Europa grijpt in: waarom neemt Nederland zo weinig maatregelen?", "d23D35i0I2", "RI"],
    [1, 1, "Heel Europa grijpt in: waarom doet alleen Nederland niets tegen corona?", "d23D35I0", "RI"],
    [1, 2, "`Kabinet moet nu maatregelen nemen, of de zorg ligt binnen twee weken plat'", "d23D35I0", "RI"],
    [3, 2, "Aantal positieve testen stabiliseert door `veel te kleine testcapaciteit'", "p3000C0D100", "Bh"],
    [3, 2, "GGD: zicht op virus kwijt, stabilisatie aantal positieve testen nietszeggend", "p3000C0D100", "Bh"],
    [8, 0, "GGD schaalt testcapaciteit flink op, `vanaf juni kan iedereen zich laten testen'", "d70", 'cS'],
    [8, 2, "Nederland komt met noodplan om aantal coronatesten per dag fors uit te breiden", "d70", 'cS'],
    [5, 6, "The Pandemic Ravaged the Netherlands. A Trumpian Health Minister Is to Blame.", "S3f30d60", '0e'],
    [5, 6, "With Their `Smart Lockdown', the Dutch Continued Normal Life. It Paid Off.", "S5F10P400C0d60", '0e'],
    [6, 6, "How the Dutch, Beacon of Stable Governing, Bungled Their Pandemic Response", "f10d60", '0e'],
    [5, 6, "A Pandemic Success Story: Locked Down Netherlands Keeps Virus Contained", "s5F10P400C0d60", '0e'],
    [5, 1, "Schiphol-baas luidt noodklok: `Miljarden verlies als grenzen gesloten blijven'", "mo45", "FF"],
    [5, 0, "Honderden roepen op tot heropening grenzen: `Familie al maanden niet gezien'", "mo45", "FF"],
    [4, 2, "Studenten tekenen massaal petitie: `Online college haalt ziel uit onderwijs'", "ml45", "vf"],
    [4, 2, "Duizenden studenten tekenen petitie: `Online college haalt ziel uit onderwijs'", "ml45", "vf"],
    [5, 1, "`Nu de coronagolf voorbij is, moeten we ons normale leven weer kunnen oppakken'", "i4H75C0d55mg0mi0", 'GV'],
    [5, 2, "`Generatieverschil schuurt: hoelang blijven jongeren solidair bij maatregelen?'", "i6H75C10d55ml0mh0", 'GV'],
    [4, 1, "`We moeten weer gaan leven: nu we de piek voorbij zijn is een lockdown onzinnig'", "mm14H100C0d55", 'GV'],
    [3, 2, "`#HugoMoetWeg': oproep tegen minister De Jonge verbindt links tot rechts", "I2f10", '74'],
    [3, 2, "`#IkBlijfThuis': oproep om maatregelen in eigen handen te nemen dagenlang trending", "I2f10", '74'],
    [4, 1, "Horeca doet noodkreet: `Zonder versoepeling gaan honderden restaurants failliet'", "mg30", 'Iy'],
    [4, 1, "Horeca smeekt om versoepeling: `Honderden restaurants op rand van faillissement'", "mg30", 'Iy'],
    [3, 1, "Economen pessimistisch over coronajaar 2020, `elke dag lockdown kost miljarden'", "i5C10d40", "TG"],
    [3, 1, "Corona verwoest ook economie: `Effect lockdowns gaan we nog jaren voelen'", "i5C10d40", "TG"],
    [9, 0, "Economische schade door pandemie ongekend, `wordt een lang herstelproces'", "d75", 'Ke'],
    [9, 0, "Coronacrisis zorgt ook voor wereldwijde financiële ramp, `groter dan kredietcrisis'", "d75", 'Ke'],

    // maatregelen
    [3, 2, "`Flatten the curve': waarom epidemiologen voor strenge coronamaatregelen pleiten", "d18D35I5", 'AU'],
    [3, 2, "`Flatten the curve': waarom maatregelen tegen het coronavirus broodnodig zijn", "d18D35", 'AU'],
    [3, 2, "Wat `flatten the curve' betekent, en waarom daarvoor maatregelen nodig zijn", "d18D35", 'AU'],
    [1, 0, "Complete lockdown aangekondigd: vrijwel alles gesloten, iedereen blijft thuis", "MM14", 'wv'],
    [1, 0, "Kabinet kiest voor harde lockdown: alleen je huis nog uit als het echt nodig is", "MM14", 'wv'],
    [1, 0, "Nederland in lockdown: thuisblijven wordt de norm, alle gelegenheden dicht", "MM14", 'wv'],
    [1, 1, "Kabinet kiest voor avondklok: 's avonds alleen bij uitzondering naar buiten", "MN14", 'vw'],
    [1, 1, "Avondklok moet besmettingen temmen, 's avonds thuisblijven wordt de norm", "MN14", 'vw'],
    [6, 0, "Studenten volgen massaal online onderwijs, `eenzaamheid wordt steeds groter'", "ml7", 'Ki'],
    [6, 2, "Zoomend het jaar door: studenten voelen zich eenzaam door coronasluiting", "ml7", 'Ki'],
    [5, 0, "Colleges tóch online moeten volgen: `Pijnlijk dat het nodig is'", "ml0ML14d50", 'wX'],
    [4, 1, "Leerlingen genieten van `extra vakantie', maar docenten maken zich zorgen", "mk0MK30", 'dp'],
    [3, 2, "Miljoenen kinderen thuis door sluiting scholen: `Juiste keuze in onzekere tijden'", "mj0D60h200", 'dp'],
    [3, 0, "Scholen sluiten deuren: leraren vroegen erom, maar virologen twijfelden", "mj0D60H200", 'dp'],
    [3, 0, "Primair onderwijs alsnog gesloten: `Dit had voorkomen kunnen worden'", "mj0MJ14d60", 'wX'],
    [9, 0, "Minister De Jonge doet oproep: `Houd afstand en werk zo veel mogelijk thuis'", "d30MA30MB304", 'bX'],
    [9, 0, "De Jonge benadrukt: `Basismaatregelen belangrijk om virus in te dammen'", "d30MA30MB30", 'bX'],
    [6, 1, "Veel evenementen geschrapt door corona, organisaties vragen om compensatie", "MD30", "DW"],
    [6, 1, "Lege theaterzalen bedreigen cultuursector, organisaties hopen op steunregeling", "ME30", "DW"],
    [7, 2, "Door coronamaatregelen een begrafenis missen: hoe rouw je in tijden van corona?", "mf0d40", 'I6'],
    [7, 2, "Niet knuffelen met stervende, niet naar begrafenis: hoe rouw je in tijden van corona?", "mf0d40", 'I6'],
    [7, 2, "Verloofden stellen massaal huwelijk uit door coronaregels: `Enorm jammer'", "mf0d60", 'I6'],
    [8, 0, "Nachtleven komt stil te liggen: lobby heeft begrip, maar teleurstelling overheerst", "MH14", 'Kr'],
    [5, 0, "Grote strop voor ondernemers: horeca moet tijdelijk dicht vanwege coronavirus", "MG14", '4H'],
    [5, 0, "Winkels moeten deuren sluiten, ondernemers vragen om miljarden overheidssteun", "MI14", '4H'],
    [4, 0, "Niet-essentiële winkels en horeca op slot, `harde klap voor duizenden ondernemers'", "MG30MI30", '4H'],
    [4, 0, "Verslagenheid bij ondernemers: restaurants en meeste winkels dicht door coronavirus", "MG30MI30", '4H'],
    [5, 2, "Horeca met sluiting slachtoffer opleving coronacijfers, ondernemers protesteren", "MG14d50", 'NV'],
    [5, 2, "Kabinet offert winkelstraten na oplopende coronacijfers, ondernemers protesteren", "MG14d50", 'NV'],
    [5, 0, "Schiphol uitgestorven door reisbeperkingen, persoonsverkeer ligt grotendeels stil", "mo0MO14d40", "2s"],
    [5, 0, "Meeste basisscholen in problemen door lerarenuitval en klassen in quarantaine", "NJ0d45p100", '7t'],
    [5, 0, "Veel scholen kampen met lerarenuitval en klassen in quarantaine, ouders bezorgd", "NJ0d45p100", '7t'],
    [6, 1, "Scholensluiting blijft maar duren: leraren en ouders vrezen leerachterstanden", "mj45", 'SG'],
    [6, 0, "Wekenlang alleen online les: leraren en ouders vrezen achterstand bij kinderen", "mj45", 'SG'],
    [6, 2, "Docenten maken zich zorgen: leerlingen gaan achteruit door online onderwijs", "mk45", 'SG'],
    [6, 0, "`Alleen maar vierkante ogen': docenten vrezen achterstand door online lessen", "mj45", 'SG'],
    [7, 0, "Cultuursector piepend en krakend volgens brandbrief, `waar blijft de hulp?'", "me60", 'Tx'],

    // afschaffing maatregelen
    [6, 1, "`Eindelijk weer op pad': grensopening zorgt voor enorme toename vakantieboekingen", "no0NO14", "Pq"],
    [3, 0, "Blije kinderen en opgeluchte ouders nu basisschoolklassen weer vol zitten", "nj0NJ30H300", 'jd'],
    [3, 2, "Gemengde gevoelens onder ouders over opening basisscholen: `Nog zo veel onzeker'", "nj0NJ30h300", 'jd'],
    [5, 2, "Middelbare scholen stromen weer vol, leerlingen hopen op examenversoepelingen", "nk0NK14", 'jd'],
    [4, 1, "Studenten kunnen weer leren én drinken: `We gaan door alsof corona niet bestaat'", "nl0nh0NL30NH30", 'd0'],
    [5, 0, "Studenten terug in de collegebanken: mbo en hoger onderwijs weer volledig open", "nl0NL14", 'd0'],
    [4, 0, "MKB Nederland opgelucht door heropening winkels, `eindelijk weer perspectief'", "ni0NI14", 'nb'],
    [4, 0, "Winkelstraten steeds drukker door heropeningen, ondernemers optimistisch", "ni0NI14", 'nb'],
    [4, 0, "Horecaondernemers voorzichtig optimistisch over heropening: `Een historische dag'", "ng0NG14", 'nb'],
    [4, 0, "Na enorme verliezen hoopt horecalobby op inhaalslag: `Versoepeling geeft hoop'", "ng0NG14", 'nb'],
    [7, 1, "Nachtleven mag onder voorwaarden weer door: `Toch weer even wennen'", "nh0NH30", 'dx'],
    [7, 2, "Coronaregels begrafenissen en huwelijken versoepeld, grotere groepen toegestaan", "nf0NF30", '4e'],
    [6, 1, "Cultuursector dolblij: door versoepelingen kunnen meeste shows weer doorgaan", "ne0NE30", 'iD'],
    [6, 0, "Theaterzalen langzaam weer voller door versoepelingen, cultuursector dolblij", "ne0NE30", 'iD'],
    [7, 0, "Festivalzomer lijkt gered: grote evenementen zijn onder voorwaarden toegestaan", "nd0ND30", 'gk'],
    [7, 0, "Kabinet versoepelt regels evenementen: grote festivals weer toegestaan", "nd0ND30", 'gk'],
    [4, 1, "`Zeg mondkapje waar ga je heen': De Jonge viert afscheid mondkapjesplicht", "nc0NC30", 'd1'],
    [5, 1, "Mondkapjesplicht afgeschaft, `vooralsnog onduidelijk of het ooit gewerkt heeft'", "nc0NC30", 'd1'],
    [3, 2, "Minister de Jonge luidt einde 1,5 meter in, experts vinden het veel te vroeg", "nb0NB30p100", 'vR'],
    [3, 0, "Volledige lockdown opgeheven: `Meest ingrijpende maatregel is niet meer nodig'", "nm0NM30NN0C0", '7m'],
    [3, 2, "`Meest ingrijpende kabinetsmaatregel ooit' weer opgeheven: lockdown ten einde", "nm0NM30NN0", '7m'],
    [3, 1, "We mogen terug naar kantoor, maar werknemers én werkgevers twijfelen", "na0NA30p100", 'vR'],
    [3, 2, "De Jonge luidt einde afstandsregel in, een stap dichter bij het `oude normaal'", "nb0NB30P100", 'vR'],

    // tweede kamer / minister
    [4, 1, "Felle kritiek op minister De Jonge vanuit oppositie: `Grijp in of stap op'", "d30D50h500I0", "Xf"],
    [4, 1, "Oppositie woedend op De Jonge: `Luister naar de helden in de zorg'", "d30D50h500I0", "Xf"],
    [2, 0, "Tweede Kamer steunt motie van afkeuring, `zorginfarct was niet onvermijdbaar'", "h1400c5", "QC"],
    [2, 0, "In coronadebat bijna unanieme afkeuring: `Tragische gevolgen van wanbeleid'", "h1400c5", "QC"],
    [3, 0, "In coronadebat verdeeldheid over lockdown: `Maatregelen doen ook veel schade'", "H150C10mm1d40", "4l"],
    [3, 0, "Harde lockdown zorgt in coronadebat voor verdeeldheid: `Ingrijpen kan ook té streng'", "H150C10mm1d40", "4l"],
    [4, 2, "Kamer steeds sceptischer over voortdurende lockdown: `Crisis is duidelijk achter ons'", "P75C5i6d60", 'IQ'],
    [4, 2, "Politiek heeft twijfels over voortduren maatregelen: `Het ergste is nu achter ons'", "P75C5i5d65", 'IQ'],
    [4, 2, "Politici staan sceptisch tegenover blijvende maatregelen: `Het ergste is voorbij'", "P75C5i5d65", 'IQ'],
    [3, 2, "De Jonge: `Geen fouten in coronabeleid, het was sturen op de achteruitkijkspiegel'", "d70i0I3f12F40", 'ib'],
    [3, 2, "Volgens De Jonge was beleid zuiver, maar was het `sturen op de achteruitkijkspiegel'", "d70i0f12F40", 'ib'],

    // experts
    [6, 1, "We moeten mondkapjes dragen, maar `het is onwaarschijnlijk dat ze werken'", "MC30D75H400", 'Lu'],
    [6, 1, "RIVM-baas Van Dissel: `Er is simpelweg geen bewijs voor mondkapjesplicht'", "MC30D75H400", 'Lu'],
    [6, 2, "WHO adviseert tegen mondkapjes: waarom voert De Jonge toch plicht in?", "MC30D75H400d30", 'Lu'],
    [3, 2, "IC-voorzitter Gommers: `Kabinet kiest voor coronaramp door niet in te grijpen'", "h1000I0c5", "CM"],
    [3, 3, "IC-arts Gommers: `Schuld voor deze coronaramp ligt ongetwijfeld bij kabinet'", "h1000I2c5", "CM"],
    [3, 2, "`Het kan heel snel misgaan': epidemiologen pleiten voor strengere maatregelen", "r1.1c0p60P1500i1", 'zp'],
    [3, 0, "Viroloog Ab Osterhaus: `Maatregelen niet genoeg om virus in toom te houden'", "r1.1c0p60P1500i1", 'zp'],
    [3, 2, "Viroloog Ab Osterhaus kritisch over maatregelen, `virus verspreidt nog te snel'", "r1.1c0p60P1500i1", 'zp'],
    [4, 0, "RIVM-baas Van Dissel optimistisch: `Piek ligt achter ons, maar we zijn er nog niet'", "R1C0p150d50", 'fU'],
    [4, 0, "Jaap van Dissel is hoopvol: `We zijn er nog niet, maar piek ligt achter ons'", "R1C0p150d504", 'fU'],
    [5, 1, "Marion Koopmans: `Exponentiële groei aantal besmettingen zeer zorgwekkend'", "r1.5p100P1000d40", 'hj'],
    [5, 1, "Marion Koopmans: `Exponentiële groei aantal besmettingen zeer zorgwekkend'", "r1.5p100P1000d40", 'hj'],
    
    // peiling
    [5, 4, "Slechts $poll% heeft vertrouwen in De Jonge, grote zorgen over coronacrisis", "O5d30D75", "yj"],
    [5, 4, "Coronabeleid heeft weinig steun: slechts $poll% heeft vertrouwen in De Jonge", "O5d30D75", "yj"],
    [5, 4, "Weinig vertrouwen in De Jonge: slechts $poll% steunt coronabeleid kabinet", "O5d30D75", "yj"],
    [5, 4, "Meerderheid heeft zorgen over coronacrisis, $poll% steunt coronabeleid kabinet", "o5i2d25D75", "yj"],
    [5, 4, "Gezondheidszorg door corona belangrijkste thema, $poll% steunt coronabeleid", "o5i2d25D75", "yj"],
    [8, 4, "Coronacrisis grote invloed op stemgedrag, coalitiepartijen peilen op $seat zetels", "d75F20", 'WN'],
    [8, 4, "Coalitiepartijen op $seat gepeilde zetels, invloed coronacrisis op stemgedrag groot", "d75F20", 'WN'],
    [7, 4, "Coalitiepartijen staan op flink verlies door corona: samen slechts $seat zetels in peiling", "d75f20", 'WN'],
    [7, 4, "Coronacrisis zorgt voor flink zetelverlies coalitiepartijen: samen $seat gepeilde zetels", "d75f20", 'WN'],

    // event
    [0, 0, "Eerste Nederlander met coronavirus in het ziekenhuis, `man vierde carnaval'", "q11", 'b5'],
    [0, 0, "RIVM: eerste coronageval in Nederland, man kwam uit risicogebied Italië", "q11", 'b5'],
    [0, 1, "Coronavirus duikt op in Nederland: eerste patiënt (56) in Tilburg geïsoleerd", "q11", 'b5'],
    [0, 1, "Viroloog over maatregelen coronavirus: `We moeten waken voor paniekvoetbal'", "q14i1", 'zl'],
    [0, 1, "Geen reden tot zorgen door coronavirus: `Nederland is het best voorbereide land'", "q14i1", 'zl'],
    [0, 2, "Zijn we klaar voor een epidemie? `Kabinet moet niet bang zijn om in te grijpen'", "q14I1", 'zl'],
    [0, 2, "`Het verleden leert ons: maatregelen tegen een epidemie komen eigenlijk altijd te laat'", "q14I1", 'zl'],
    [0, 0, "Eerste overleden coronapatiënt (86) uit Oud-Beijerland `was ontzettend lieve man'", "q18", 'WO'],
    [0, 0, "Eerste Nederlander (86) aan coronavirus overleden in Rotterdams ziekenhuis", "q18", 'WO'],
    [0, 1, "Eerste coronadode in Nederland, man (86) had al gezondheidsproblemen", "q18", 'WO'],
    [6, 0, "Oproep gaat viral op sociale media: `Applaus voor onze helden in de zorg'", "d26D33", 'fr'],
    [6, 2, "`Hoopvolle en alarmerende toespraak van koning schudt Nederlanders wakker'", "d29D43I2", "MD"],
    [6, 2, "Koning in zeldzame toespraak: `Coronavirus niet te stoppen, eenzaamheidsvirus wel'", "d29D43i2", "MD"],
    [6, 2, "Toespraak van de koning is kijkcijferkanon: `We moeten hier samen doorheen'", "d29D43", "MD"],
    [1, 0, "$Subject besmet met corona, met milde klachten opgenomen in ziekenhuis", "d60D67f17", 'kP'],
    [1, 0, "$Subject in ziekenhuis opgenomen na coronabesmetting, heeft milde klachten", "d60D67f17", 'kP'],
    [1, 0, "Nederland reageert geschokt: $subject overleden aan gevolgen corona", "d67D80f60", 'UZ'],
    [4, 1, "BN'er Sywert van Lienden helpt zorg aan miljoenen mondkapjes ondanks tekort", "mc0d55D80", '7T'],
    [4, 1, "Ondanks tekort hielp BN'er Sywert van Lienden de zorg aan miljoenen mondkapjes", "mc0D55D80", '7T'],
    [6, 1, "Enkele tientallen arrestaties bij protest tegen lockdown en 5G in Den Haag", "i5I7d75", 'ah'],
    [6, 1, "Malieveld staat vol door protest tegen lockdown en 5G, tientallen arrestaties", "i5I7d75", 'ah'],
    [5, 0, "Mobiele Eenheid grijpt in bij uit de hand gelopen lockdownprotest: $age arrestaties", "i7d75", 'ah'],
    [5, 0, "Felle confontratie tussen demonstranten en ME bij lockdownprotest: $age arrestaties", "i7d75", 'ah'],
    [4, 2, "Binnenhof gevuld met bloemen tijdens stilteprotest: `Een voor elke coronadode'", "I5f50d75", 'ah'],
    [4, 2, "Stilteprotest op Binnenhof tegen De Jonge: een bloem gelegd voor elke coronadode", "I5f50d75", 'ah'],
    [9, 0, "Een tweede coronagolf in het najaar? Experts voorzien hooguit een `golfje'", "d90", 'z7'],
    [9, 0, "Komt er een `tweede golf'? Virologen denken dat corona onder controle blijft", "d90", 'z7'],
];
