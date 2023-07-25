const categoryOptions = [
	{ value: "OBST & GEMÜSE", label: "OBST & GEMÜSE" },
	{
		value: "Kühlung Molkereiprodukte, Fette KÄSE",
		label: "Kühlung Molkereiprodukte, Fette KÄSE",
	},
	{ value: "Topangebote", label: "Topangebote" },
	{ value: "Frühstück Kühlregal", label: "Frühstück Kühlregal" },
	{
		value: "Fleisch, Geflügel, Wurst Fisch",
		label: "Fleisch, Geflügel, Wurst Fisch",
	},
	{
		value: "Wein & Spirituosen GETRÄNKE Leckere Cocktails für jeden Geschmack",
		label: "Wein & Spirituosen GETRÄNKE Leckere Cocktails für jeden Geschmack",
	},
	{
		value: "KNABBERN & NASCHEN Knabberartikel",
		label: "KNABBERN & NASCHEN Knabberartikel",
	},
	{
		value: "Drogerie, Tiernahrung Drogerie Tier",
		label: "Drogerie, Tiernahrung Drogerie Tier",
	},
	{ value: "weitere Produkte", label: "weitere Produkte" },
	{ value: "Pflanzen", label: "Pflanzen" },
	{ value: "Alkoholfreie Kaffee, Tee", label: "Alkoholfreie Kaffee, Tee" },
	{ value: "Elektro, Büro, Medien", label: "Elektro, Büro, Medien" },
	{ value: "Haushalt  Heim, Haus", label: "Haushalt  Heim, Haus" },
	{
		value: "Freizeit & Mode Sport  Bekleidung, Auto, Freizeit, Spiel",
		label: "Freizeit & Mode Sport  Bekleidung, Auto, Freizeit, Spiel",
	},
	{
		value: "Grillartikel zum Sparpreis",
		label: "Grillartikel zum Sparpreis",
	},
	{ value: "Cleveres Küchenzubehör", label: "Cleveres Küchenzubehör" },
	{
		value: "Bettwäsche, Pyjamas und mehr",
		label: "Bettwäsche, Pyjamas und mehr",
	},
	{ value: "Genuss aus deiner Region", label: "Genuss aus deiner Region" },
	{
		value: "Outdoor-Mode von Nangaparbat",
		label: "Outdoor-Mode von Nangaparbat",
	},
	{
		value: "Extra-Rabatte mit der Kaufland Card",
		label: "Extra-Rabatte mit der Kaufland Card",
	},
	{
		value: "Exklusive Angebote der Kaufland Card",
		label: "Exklusive Angebote der Kaufland Card",
	},
	{ value: "Bademode von Chiemsee", label: "Bademode von Chiemsee" },
	{ value: "PAYBACK Angebote", label: "PAYBACK Angebote" },
	{ value: "Mit der REWE App sparen", label: "Mit der REWE App sparen" },
	{ value: "Kochen & Backen", label: "Kochen & Backen" },
	{ value: "Alkoholfreie Getränke", label: "Alkoholfreie Getränke" },
];
const storeOptions = [
	{
		value: "Penny,Dossenheimer Landstr. 40 69121 Heidelberg",
		label: "Penny,Dossenheimer Landstr. 40 69121 Heidelberg",
	},
	{
		value: "Penny,Bahnhofstr. 9-13 69115 Heidelberg",
		label: "Penny,Bahnhofstr. 9-13 69115 Heidelberg",
	},
	{
		value: "Penny,Ploeck 13-21 69117 Heidelberg",
		label: "Penny,Ploeck 13-21 69117 Heidelberg",
	},
	{
		value: "Penny,Rathausstr. 27 69126 Heidelberg",
		label: "Penny,Rathausstr. 27 69126 Heidelberg",
	},
	{
		value: "Kaufland,Eppelheimer Straße 78, 69123 Heidelberg",
		label: "Kaufland,Eppelheimer Straße 78, 69123 Heidelberg",
	},
	{
		value: "Kaufland,Kurfürsten-Anlage 61, 69115 Heidelberg",
		label: "Kaufland,Kurfürsten-Anlage 61, 69115 Heidelberg",
	},
	{
		value: "Kaufland,Hertzstraße 1, 69126 Heidelberg-Rohrbach",
		label: "Kaufland,Hertzstraße 1, 69126 Heidelberg-Rohrbach",
	},
	{
		value: "Edeka,Kurfürstenanlage 21-23, 69115 Heidelberg",
		label: "Edeka,Kurfürstenanlage 21-23, 69115 Heidelberg",
	},
	{
		value: "Edeka,Hauptstraße 198, 69117 Heidelberg",
		label: "Edeka,Hauptstraße 198, 69117 Heidelberg",
	},
	{
		value: "Edeka,In der Neckarhelle 1-3, 69118 Heidelberg-Ziegelhausen",
		label: "Edeka,In der Neckarhelle 1-3, 69118 Heidelberg-Ziegelhausen",
	},
	{
		value:
			"REWE Sahin Karaaslan GmbH & Co. KG,Furtwanglerstr. 15, 69121 Heidelberg",
		label:
			"REWE Sahin Karaaslan GmbH & Co. KG,Furtwanglerstr. 15, 69121 Heidelberg",
	},
	{
		value: "REWE Markt GmbH,Im Franzosengewann 3, 69124 Heidelberg / Kirchheim",
		label: "REWE Markt GmbH,Im Franzosengewann 3, 69124 Heidelberg / Kirchheim",
	},
	{
		value:
			"REWE Sahin Karaaslan GmbH & Co. KG,Berliner Str. 41-49, 69120 Heidelberg",
		label:
			"REWE Sahin Karaaslan GmbH & Co. KG,Berliner Str. 41-49, 69120 Heidelberg",
	},
	{
		value: "REWE Markt GmbH,Kurfürstenanlage 6, 69115 Heidelberg/Weststadt",
		label: "REWE Markt GmbH,Kurfürstenanlage 6, 69115 Heidelberg/Weststadt",
	},
	{
		value: "REWE Manuela Schrein oHG,Am Grünen Hag 2, 69118 Heidelberg",
		label: "REWE Manuela Schrein oHG,Am Grünen Hag 2, 69118 Heidelberg",
	},
	{
		value: "REWE Karaaslan oHG,Ladenburger Str. 68, 69120 Heidelberg/Neuenheim",
		label: "REWE Karaaslan oHG,Ladenburger Str. 68, 69120 Heidelberg/Neuenheim",
	},
	{
		value: "REWE Markt GmbH,Im Weiher 14, 69121 Heidelberg/Handschuhsheim",
		label: "REWE Markt GmbH,Im Weiher 14, 69121 Heidelberg/Handschuhsheim",
	},
	{
		value: "REWE Markt GmbH,Grenzhöfer Weg 29, 69123 Heidelberg",
		label: "REWE Markt GmbH,Grenzhöfer Weg 29, 69123 Heidelberg",
	},
	{
		value:
			"REWE Markt GmbH,Felix-Wankel-Strasse 20, 69126 Heidelberg / Rohrbach",
		label:
			"REWE Markt GmbH,Felix-Wankel-Strasse 20, 69126 Heidelberg / Rohrbach",
	},
];
const offerOptions = [
	{ label: "Normales Angebot", value: "Normales Angebot" },
	{ label: "Moderates Angebot", value: "moderates Angebot" },
	{ label: "Blockbuster Angebot", value: "Blockbuster Angebot" },
];
const pricingOptions = [
	{ label: "Billigres Produkt", value: "Billigres Produkt" },
	{ label: "Erschwingliches Produkt", value: "Erschwingliches Produkt" },
	{ label: "Teures Produkt", value: "Teures Produkt" },
];

export { categoryOptions, offerOptions, pricingOptions, storeOptions };
