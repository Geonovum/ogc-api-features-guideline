let respecConfig = {
  useLogo: true,
  useLabel: true,
  // title is verplicht! Neem hier de titel van het document op ----------------------
  title: "OGC API Features Guideline",
  //-- specStatus is verplicht! (activeer 1 van de volgende) --------------------------
  //specStatus: "ld",                   // Werkversie
  specStatus: "wv",                   // Werkversie
  //specStatus: "cv",               // Consultatieversie
  //specStatus: "vv",               // Versie ter vaststelling
  //specStatus: "def",              // Vastgestelde versie
  //specStatus: "basis",            // Basis Document
  //-- specType is verplicht bij alle andere dan BASIS ---------------------------------
  //specType: "NO",                 // Norm
  //specType: "ST",                 // Standaard
  //specType: "IM",                 // Informatie Model
  //specType: "PR",                 // Praktijkrichtlijn
  specType: "HR",                     // HandReiking
  //specType: "WA",                 // Werkafspraak
  //specType: "BD",                 // Beheer Documentatie
  //specType: "AL",                 // Algemeen document
  //specType: "BP",                 // Best Practice
  //-- pubDomain is verplicht! (komt in de URL) -------------------------------------
  pubDomain: "api",
  //-- license: voor de geldende gebruiksvoorwaarden. Default is cc-by.
  //licence: "cc-by-nd",            // bronvermelding, geen afgeleide werken (default)
  //licence: "cc0",                 // Public Domain Dedication
  licence: "cc-by",                 // Attribution, met bronvermelding
  //-- shortName is verplicht! (komt in de URL: kies logische afkorting)--------------
  shortName: "ogc-api-features-guideline",
  
  //edDraftURI = De URI van de draft version. Deze wordt automatisch afgeleid van de github URI; maar kan hier overschreven worden. 
	//edDraftURI: ["https://geonovum.github.io", "/", "shortName"],

  //-- publishDate is verplicht -------------------------------------------------------
  //-- NB: in de werkversie uitzetten, want dan pakt Respec de pushdate ---------------
  //publishDate: "2024-05-14",
  //eventueel is het mogelijk een versienummer mee te geven, maar bij Geonovum werken we gewoonlijk alleen met datum als onderdeel van de permanente URI.
  //publishVersion: "0.0.2",
  //previousVersion: "0.0.1",
  //-- Voor dit blok geldt: alleen als er eerdere versies zijn en altijd beiden aan/uit! 
  previousPublishDate: "2024-05-14",
  previousMaturity: "LD",
  //-- de namen van de Editor(s) / Redacteur(en)---------------------------------------
  //-- vul in: per Editor: name:, company:, companyURL: -------------------------------
  editors:
    [
      {
        name: "Pieter Bresters",
        company: "Geonovum",
        companyURL: "https://www.geonovum.nl",
      }
    ],
  //-- de namen van de auteur(s) ------------------------------------------------------
  //-- vul in: per auteur: name:, company:, companyURL: -------------------------------
  authors:
    [
      {
        name: "Pieter Bresters",
        company: "Geonovum",
        companyURL: "https://www.geonovum.nl",
      }
    ],
  //neem hier de URL van de github repository op waar het respec document in staat
  github: "https://github.com/Geonovum/ogc-api-features-guideline",
  // Create PDF and link to file in header (optional):
  //alternateFormats: [
  //    {
  //        label: "pdf",
  //        uri: "Guideline.pdf",
  //    },
  //],
  //-- localBiblio: lokale bibliografie, voor verwijzigingen
  //-- NB: kijk eesrt naar de beschikbare www.specref.org voor verwijziging 
  localBiblio: 
  {
    "PUB-1":
      {
        title:      "OGC API Features Part1:Core",
        href:       "https://docs.opengeospatial.org/is/17-069r4/17-069r4.html",
        status:     "V1.0",
        publisher:  "OGC",
        company:    "OGC",
    },
    "PUB-2":
      {
        title:      "Setting up an INSPIRE Download service based on the OGC API-Features standard",
        href:       "https://github.com/INSPIRE-MIF/gp-ogc-api-features/blob/master/spec/oapif-inspire-download.md",
        status:     "V1.0",
        publisher:  "INSPIRE-MIF",
        company:    "Companynaam",
    },
    "PUB-3":
      {
        title:      "Dutch API design rules",
        href:       "https://www.geonovum.nl/over-geonovum/actueel/rest-api-design-rules-op-pas-toe-leg-uit-lijst",
        status:     "19 JULI 2020",
        publisher:  "https://www.geonovum.nl",
        company:    "Geonovum",
    },
    "PUB-4":
      {
        title:      "INSPIRE UML-to-GeoJSON encoding rule",
        href:       "https://github.com/INSPIRE-MIF/2017.2/blob/master/GeoJSON/geojson-encoding-rule.md#inspire-requirements-for-encoding-rules",
        status:     "V0.1",
        publisher:  "Working group on Inspire Action 2017.2",
        company:    "Companynaam",
    },
	"PUB-5":
      {
        title:      "OGC API - Features - Part 2: Coordinate Reference Systems by Reference",
        href:       "http://docs.opengeospatial.org/is/18-058r1/18-058r1.html",
        status:     "V1.0",
        publisher:  "OGC",
        company:    "OGC",
    },
	"PUB-6":
      {
        title:      "OGC API - Features - Part 3: Filtering and the Common Query Language (CQL)",
        href:       "https://docs.ogc.org/DRAFTS/19-079r1.html",
        status:     "V1.0.0, draft",
        publisher:  "OGC",
        company:    "OGC",
    },
  },
};
