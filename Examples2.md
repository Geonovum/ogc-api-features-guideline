## Examples of implementations after tooladjustments

Because from earlier test, Geonovum concluded tools were not compliant with the requirements, at the beginning of the year 2023, an open tender was set up to adjust the tooling.
This resulted in 3 demo services that each show how you can be compliant with the requirements for OGC, INSPIRE and Dutch ADR.
All demo services used the same selection of the Dutch INSPIRE Addresses in a GML file as input.

|   tool    | main contributions  | landing page|
|-----------|---------------------|-------------|
| Pygeoapi  |Justobject and Geocat|https://apitestbed.geonovum.nl/adr_pygeoapi/v1 |
| Geoserver |Geosolutions         |https://geonovum.geosolutionsgroup.com/geoserver/inspire/ogc/features/v1 |
| Deegree   |Wetransform          |https://test.haleconnect.de/ogcapi/datasets/simplified-addresses/v1 |

Per tool, findings are elaborated in the next chapters when relevant.

### Pygeoapi versus requirements

The following findings show how Pygeoapi complies to the requirements.

***RQ 1:OGC API Features Core*** 

The OGC CITE validator gave no error at the landing page https://apitestbed.geonovum.nl/adr_pygeoapi/v1.

***RQ 4:predefined download***  

link to metadata of dataset: passed at /collections/AddressesNL and at /collections level:

        `{
            "type": "text/html",
            "rel": "describedby",
            "title": "Metadata as HTML",
            "href": "https://www.nationaalgeoregister.nl/geonetwork/srv/dut/catalog.search#/metadata/a5f961e9-ebdd-41e2-b8e8-ab33ed340a83",
            "hreflang": "nl"
        },
        {
            "type": "application/xml",
            "rel": "describedby",
            "title": "Metadata as ISO 19139 XML",
            "href": "https://www.nationaalgeoregister.nl/geonetwork/srv/api/records/a5f961e9-ebdd-41e2-b8e8-ab33ed340a83/formatters/xml",
            "hreflang": "nl"
        }`
        
link to INSPIRE feature concept dictionary: passed at /collections/AddressesNL and at /collections level

        `{
            "type": "text/html",
            "rel": "tag",
            "title": "INSPIRE feature concept dictionary for addresses",
            "href": "https://inspire.ec.europa.eu/featureconcept/Address",
            "hreflang": "en"
        }`
        
link to the license: passed at /collections/AddressesNL and at /collections level

        `{
            "type": "text/html",
            "rel": "license",
            "title": "CC0 1.0 Public Domain license",
            "href": "https://creativecommons.org/publicdomain/zero/1.0/deed.en",
            "hreflang": "en"
        }`

See also https://apitestbed.geonovum.nl/adr_pygeoapi/v1/collections?f=json and 
https://apitestbed.geonovum.nl/adr_pygeoapi/v1/collections/AddressesNL?f=json
