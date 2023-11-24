## Examples of implementations after tool adjustments

From earlier tests Geonovum concluded tools were not compliant with the requirements for OAS, OGC, INSPIRE and Dutch ADR. For that reason Geonovum set up an open tender at the beginning of the year 2023, with the goal of improving the compliance of OGC API tooling.
This resulted in 3 demo services that each show how you can be compliant with the requirements.
All demo services used the same selection of the Dutch INSPIRE Addresses in a simplified GML file, constructed by Wetransform as input.

|   tool    | main contributions   | landing page|
|-----------|----------------------|-------------|
| Pygeoapi  |Justobjects and Geocat|https://apitestbed.geonovum.nl/adr_pygeoapi/v1 |
| Geoserver |Geosolutions          |https://geonovum.geosolutionsgroup.com/geoserver/inspire/ogc/features/v1 |
| Deegree   |Wetransform           |https://test.haleconnect.de/ogcapi/datasets/simplified-addresses/v1 |

Per tool, findings are elaborated in the next chapters when relevant.

### Pygeoapi versus requirements

The following findings show how Pygeoapi complies to the requirements.

#### OAS

The OAS document is available: https://apitestbed.geonovum.nl/adr_pygeoapi/v1/openapi

#### OGC 

The OGC CITE validator gave no error at the [landing page](https://apitestbed.geonovum.nl/adr_pygeoapi/v1).

***Filtering***  

For the use of filters, the bbox and items options were already available. In addition, one can filter on the attributes which can be retrieved from
https://apitestbed.geonovum.nl/adr_pygeoapi/v1/collections/AddressesNL/queryables.
The OGC API specification for filtering [[PUB-6]] does not yet have the status "approved" and has not yet been considered.

***CRS***

The crs identifier list and storage-crs can be found at the end of:
https://apitestbed.geonovum.nl/adr_pygeoapi/v1/collections/AddressesNL?f=json 

With the following command line request, one can see the Content-CRS value in the header:

`curl -i https://apitestbed.geonovum.nl/adr_pygeoapi/v1/collections/AddressesNL/items/1?f=json`

An adjustment has been made to the bbox filter. It now also supports the bbox-crs parameter.
Only 2 addresses are available in the below defined bbox.
https://apitestbed.geonovum.nl/adr_pygeoapi/v1/collections/AddressesNL/items?f=json&bbox-crs=http://www.opengis.net/def/crs/EPSG/0/28992&bbox=252200,593000,252710,594000


#### Dutch API design rules  

It complies with all the rules, except for rule https://publicatie.centrumvoorstandaarden.nl/api/adr/#api-48.
This rule in the Dutch ADR prescribes that none of the API endpoints should have a trailing slash. On the other end, the OGC specification states that the landing page (i.e. "Home") should have a trailing slash. So the rules contradict.
It is expected that in future, this ADR-rule will make an exception for the landing page.

#### INSPIRE

***CRS ETRS89 and WGS84***

The required CRS's are available:
- RD: https://apitestbed.geonovum.nl/adr_pygeoapi/v1/collections/AddressesNL/items/1?f=json&crs=http://www.opengis.net/def/crs/EPSG/0/28992
- WGS84: https://apitestbed.geonovum.nl/adr_pygeoapi/v1/collections/AddressesNL/items/1?f=json&crs=http://www.opengis.net/def/crs/OGC/1.3/CRS84
- ETRS89:  https://apitestbed.geonovum.nl/adr_pygeoapi/v1/collections/AddressesNL/items/1?f=json&crs=http://www.opengis.net/def/crs/EPSG/0/4258

***predefined download***  

Link to metadata of dataset: passed at `/collections/AddressesNL` and at `/collections` level:  
`{"href": "https://www.nationaalgeoregister.nl/geonetwork/srv/dut/catalog.search#/metadata/a5f961e9-ebdd-41e2-b8e8-ab33ed340a83",
  "hreflang": "nl",
  "type": "text/html",
  "rel": "describedby",
  "title": "Metadata as HTML"}`

`{"href": "https://www.nationaalgeoregister.nl/geonetwork/srv/api/records/a5f961e9-ebdd-41e2-b8e8-ab33ed340a83/formatters/xml",
  "hreflang": "nl",
  "type": "application/xml",
  "rel": "describedby",
  "title": "Metadata as ISO 19139 XML"}`
        
Link to INSPIRE feature concept dictionary: passed at /collections/AddressesNL and at /collections level:  
`{"href": "https://inspire.ec.europa.eu/featureconcept/Address",
  "hreflang": "en",
  "type": "text/html",
  "rel": "tag",
  "title": "INSPIRE feature concept dictionary for addresses"}`
        
Link to the license: passed at /collections/AddressesNL and at /collections level:  
`{"href": "https://creativecommons.org/publicdomain/zero/1.0/deed.en",
  "hreflang": "en",
  "type": "text/html",
  "rel": "license",
  "title": "CC0 1.0 Public Domain license"}`

See also https://apitestbed.geonovum.nl/adr_pygeoapi/v1/collections?f=json and 
https://apitestbed.geonovum.nl/adr_pygeoapi/v1/collections/AddressesNL?f=json

***bulk download***

Link to bulk download of dataset: passed at /collections/AddressesNL and at /collections level.

See also https://apitestbed.geonovum.nl/adr_pygeoapi/v1/collections?f=json and   
https://apitestbed.geonovum.nl/adr_pygeoapi/v1/collections/AddressesNL?f=json
`{"href": "https://service.pdok.nl/kadaster/ad/atom/downloads/addresses.gml.gz",
  "hreflang": "nl",
  "length": 685450191,
  "type": "application/x-gmz",
  "rel": "enclosure",
  "title": "Download complete dataset as GML"}`

***GeoJSON***

Items can be retrieved in Geo+Json by:  
https://apitestbed.geonovum.nl/adr_pygeoapi/v1/collections/AddressesNL/items?f=json

***GML*** 

As input, a simple features GML file was used as produced by Wetransform from the complex feature GML with the transformation software Hale.  

As output, there is a link to the original complex feature GML-file:
https://service.pdok.nl/kadaster/ad/atom/downloads/addresses.gml.gz 
Pygeoapi does not support GML-output at item-level, but this is not a requirement.

***describing encoding***  

There is a link to https://github.com/INSPIRE-MIF/2017.2/tree/master/GeoJSON/ads at [colection/AddressesNL level](https://apitestbed.geonovum.nl/adr_pygeoapi/v1/collections/AddressesNL?f=json ):  
`{"href": "https://github.com/INSPIRE-MIF/2017.2/tree/master/GeoJSON/ads",
  "hreflang": "en",
  "type": "text/html",
  "rel": "about",
  "title": "Description of the encoding"}`  
          
#### Other findings on Pygeoapi

More information about the Pygeoapi adjustments to the standards can be found at https://pygeoapi.io/presentations/geonovum-tender-2023/

### Geoserver versus requirements

The following findings show how Geoserver complies to the requirements.

#### OAS

The OAS document is available: https://geonovum.geosolutionsgroup.com/geoserver/inspire/ogc/features/v1/openapi

#### OGC  

The OGC CITE validator gave no error at the landing page https://geonovum.geosolutionsgroup.com/geoserver/inspire/ogc/features/v1.

***filtering***  

For the use of filters, the bbox and items options were already available. Next to that, one can filter on the attributes which can be retrieved from:
https://geonovum.geosolutionsgroup.com/geoserver/inspire/ogc/features/v1/collections/Addresses?queryables.  

The specification for filtering [[PUB-6]] does not yet have the status "approved" and has not yet been considered.

***CRS***

The crs identifier list and the storage-crs can be found at the end of:
https://geonovum.geosolutionsgroup.com/geoserver/inspire/ogc/features/v1/collections/Addresses?f=json

With the following command line request, one can see the Content-CRS value in the header :
curl -i https://geonovum.geosolutionsgroup.com/geoserver/inspire/ogc/features/v1/collections/Addresses/items/1?f=json

An adjustment has been made tot the bbox filter. It now also supports the bbox-crs parameter.
Only 2 addresses are available in the below defined bbox.  
https://geonovum.geosolutionsgroup.com/geoserver/inspire/ogc/features/v1/collections/Addresses/items?f=json&bbox-crs=http://www.opengis.net/def/crs/EPSG/0/28992&bbox=252200,593000,252710,594000


#### Dutch API design rules  

It complies with all the rules, except for rule https://publicatie.centrumvoorstandaarden.nl/api/adr/#api-48.
This rule in the Dutch ADR prescribes that none of the API endpoints should have a trailing slash. On the other end, the OGC specification states that the landing page (i.e. "Home") should have a trailing slash. So the rules contradict.
It is expected that in future, this ADR-rule will make an exception for the landing page.

#### INSPIRE

***CRS ETRS89 and WGS84***

The required CRS's are available:
- RD: https://geonovum.geosolutionsgroup.com/geoserver/inspire/ogc/features/v1/collections/Addresses/items/1?f=json&crs=http://www.opengis.net/def/crs/EPSG/0/28992
- WGS84: https://geonovum.geosolutionsgroup.com/geoserver/inspire/ogc/features/v1/collections/Addresses/items/1?f=json&crs=http://www.opengis.net/def/crs/OGC/1.3/CRS84
- ETRS89:  https://geonovum.geosolutionsgroup.com/geoserver/inspire/ogc/features/v1/collections/Addresses/items/1?f=json&crs=http://www.opengis.net/def/crs/EPSG/0/4258

***predefined download***  

Link to metadata of dataset: passed at [/collections/collection level](https://geonovum.geosolutionsgroup.com/geoserver/inspire/ogc/features/v1/collections/Addresses?f=json) and at [/collections level](https://geonovum.geosolutionsgroup.com/geoserver/inspire/ogc/features/v1/collections?f=json). 
`{"href":"https://www.nationaalgeoregister.nl/geonetwork/srv/api/records/a5f961e9-ebdd-41e2-b8e8-ab33ed340a83/formatters/xml?approved=true","rel":"describedBy","type":"application/xml","title":"ISO metadata for this dataset"}`
  
Link to INSPIRE feature concept dictionary: passed at [/collections/collection level](https://geonovum.geosolutionsgroup.com/geoserver/inspire/ogc/features/v1/collections/Addresses?f=json). 
`{"href":"https://inspire.ec.europa.eu/featureconcept/Address","rel":"tag","type":"text/html","title":"INSPIRE Address feature concept."}`

Link to the license: passed at [/collections level](https://geonovum.geosolutionsgroup.com/geoserver/inspire/ogc/features/v1/collections?f=json). 
`{"href":"http://creativecommons.org/publicdomain/zero/1.0/deed.nl","rel":"license","type":"text/html","title":"Dataset license."}`

***bulk download***

Link to bulk download of dataset: passed at [/collections/collection level](https://geonovum.geosolutionsgroup.com/geoserver/inspire/ogc/features/v1/collections/Addresses?f=json).  
`{"href":"https://geonovum.geosolutionsgroup.com/geoserver/www/ADNL.gpkg","rel":"enclosure","type":"application/geopackage+sqlite3","title":"Addresses raw data."}`

***GeoJSON***

Items can be retrieved in Geo+Json by:  
https://geonovum.geosolutionsgroup.com/geoserver/inspire/ogc/features/v1/collections/Addresses/items/1?f=application%2Fgeo%2Bjson

***GML*** 

As input, a simple features GML file was used as produced by Wetransform from the complex feature GML with the transformation software Hale.  

As output, the following link can be found at [/collections/collection level](https://geonovum.geosolutionsgroup.com/geoserver/inspire/ogc/features/v1/collections/Addresses?f=json). It can be used to download the first 50 records. 
`{"href":"https://geonovum.geosolutionsgroup.com/geoserver/inspire/ogc/features/v1/collections/Addresses/items?f=application%2Fgml%2Bxml%3Bversion%3D3.2","rel":"items","type":"application/gml+xml;version=3.2","title":"Addresses items as application/gml+xml;version=3.2"}` 

***describing encoding***  

There is a link to https://github.com/INSPIRE-MIF/2017.2/blob/master/GeoJSON/ads/simple-addresses.md at [/collections/collection level](https://geonovum.geosolutionsgroup.com/geoserver/inspire/ogc/features/v1/collections/Addresses?f=json). 
`{"href":"https://github.com/INSPIRE-MIF/2017.2/blob/master/GeoJSON/ads/simple-addresses.md","rel":"describedBy","type":"text/html","title":"GeoJSON Encoding Rule for INSPIRE Addresses"}`

#### Other findings on Geoserver

More information about the Geoserver adjustments to the standards can be found at https://www.geonovum.nl/uploads/documents/Geosolutions.pdf
 
### Deegree versus requirements

The following findings show how Geoserver complies to the requirements.

#### OAS 

The OAS document is available: https://test.haleconnect.de/ogcapi/datasets/simplified-addresses/v1/openapi

#### OGC

The OGC CITE validator gave no error at the landingpage https://test.haleconnect.de/ogcapi/datasets/simplified-addresses/v1.

***filtering***  

For the use of filters, the bbox and items options were already available. 
The specification for filtering [[PUB-6]] does not yet have the status "approved" and has not yet been considered.

***CRS***

The crs identifier list and storage-crs can be found at the end of:
https://test.haleconnect.de/ogcapi/datasets/simplified-addresses/v1/collections/SimpleAddress?f=json

With the following command line request, one can see the Content-CRS value in the header :
curl -i https://test.haleconnect.de/ogcapi/datasets/simplified-addresses/v1/collections/SimpleAddress/items?limit=1

An adjustment has been made tot the bbox filter. It now also supports the bbox-crs parameter.
Only 2 addresses are available in the below defined bbox.
https://test.haleconnect.de/ogcapi/datasets/simplified-addresses/v1/collections/SimpleAddress/items?f=json&bbox-crs=http://www.opengis.net/def/crs/EPSG/0/28992&bbox=252200,593000,252710,594000


#### Dutch API design rules  

It complies with all the rules, except for rule https://publicatie.centrumvoorstandaarden.nl/api/adr/#api-48.
This rule in the Dutch ADR prescribes that none of the API endpoints should have a trailing slash. On the other end, the OGC specification states that the landing page (i.e. "Home") should have a trailing slash. So the rules contradict.
It is expected that in future, this ADR-rule will make an exception for the landing page.

#### INSPIRE

***CRS ETRS89 and WGS84***

The required CRS's are available:
- RD: https://test.haleconnect.de/ogcapi/datasets/simplified-addresses/v1/collections/SimpleAddress/items/nl-imbag-ad-address-0003200000133985?f=json&crs=http://www.opengis.net/def/crs/EPSG/0/28992
- WGS84: https://test.haleconnect.de/ogcapi/datasets/simplified-addresses/v1/collections/SimpleAddress/items/nl-imbag-ad-address-0003200000133985?f=json&crs=http://www.opengis.net/def/crs/OGC/1.3/CRS84
- ETRS89: https://test.haleconnect.de/ogcapi/datasets/simplified-addresses/v1/collections/SimpleAddress/items/nl-imbag-ad-address-0003200000133985?f=json&crs=http://www.opengis.net/def/crs/EPSG/0/4258

***predefined download***  

Link to metadata of dataset: passed at [/collections level](https://test.haleconnect.de/ogcapi/datasets/simplified-addresses/v1/collections?f=json):  
`{"href":"https://www.nationaalgeoregister.nl/geonetwork/srv/dut/catalog.search#/metadata/a5f961e9-ebdd-41e2-b8e8-ab33ed340a83","rel":"describedby","type":"text/html","title":"Metadata"}`

Link to INSPIRE feature concept dictionary: passed at [/collections/collection level](https://test.haleconnect.de/ogcapi/datasets/simplified-addresses/v1/collections/SimpleAddress?f=json) and at [/collections level](https://test.haleconnect.de/ogcapi/datasets/simplified-addresses/v1/collections?f=json):  
`{"href":"https://inspire.ec.europa.eu/featureconcept/Address","rel":"tag","type":"text/html","title":"Feature concept Address"}`

Link to the license: passed at [/collections level](https://test.haleconnect.de/ogcapi/datasets/simplified-addresses/v1/collections?f=json):  
`{"href":"http://creativecommons.org/publicdomain/zero/1.0/deed.nl","rel":"license","type":"text/html","title":"License"}`

***bulk download***

Link to bulk download of dataset: passed at [/collections/collection level](https://test.haleconnect.de/ogcapi/datasets/simplified-addresses/v1/collections/SimpleAddress?f=json) and at [/collections level](https://test.haleconnect.de/ogcapi/datasets/simplified-addresses/v1/collections?f=json). 
`{"href":"http://test.haleconnect.de/ogcapi/datasets/simplified-addresses/collections/SimpleAddress/items?bulk=true","rel":"enclosure","type":"application/xml","title":"Download all features as GML"}` 
`{"href":"http://test.haleconnect.de/ogcapi/datasets/simplified-addresses/collections/SimpleAddress/items?bulk=true","rel":"enclosure","type":"application/json","title":"Download all features as GeoJSON"}` 

***GeoJSON***

Items can be retrieved in Geo+Json by:  
https://test.haleconnect.de/ogcapi/datasets/simplified-addresses/collections/SimpleAddress/items?f=json&limit=1 or
https://test.haleconnect.de/ogcapi/datasets/simplified-addresses/collections/SimpleAddress/items/nl-imbag-ad-address-0003200000133985?f=json

***GML*** 

As input, a simple features GML file was used as produced by Wetransform from the complex feature GML with the transformation software Hale.
As output, the following links can be found at [/collections/collection level](https://test.haleconnect.de/ogcapi/datasets/simplified-addresses/v1/collections/SimpleAddress?f=json). They can be used to download specific records. 
`{"href":"http://test.haleconnect.de/ogcapi/datasets/simplified-addresses/collections/SimpleAddress/items?bulk=true","rel":"enclosure","type":"application/xml","title":"Download all features as GML"}` or 
`{"href":"http://test.haleconnect.de/ogcapi/datasets/simplified-addresses/collections/SimpleAddress/items","rel":"items","type":"application/gml+xml;version=3.2","title":"Features as GML"}`
(use parameter f=xml)

***describing encoding***  

There is a link to https://github.com/INSPIRE-MIF/2017.2/blob/master/GeoJSON/ads at [/collections/collection level](https://test.haleconnect.de/ogcapi/datasets/simplified-addresses/v1/collections?f=json). 
`{"href":"https://github.com/INSPIRE-MIF/2017.2/tree/master/GeoJSON/ads","rel":"describedby","type":"text/html","title":"Encoding description"}`

#### Other findings on Deegree

More information about the Deegree adjustments to the standards can be found at https://www.geonovum.nl/uploads/documents/deegree%20OGC%20API%20Features.pdf

### General findings

1. There has been discussions whether the predefined download links should be at collections or collections/collection level? See also: https://github.com/INSPIRE-MIF/gp-ogc-api-features/issues/91.  
During the project of adjusting the tools we had the opinion that both should be possible.  
Afterwards, we found out that it should be at collections level since it is one of the [main principles](https://github.com/INSPIRE-MIF/gp-ogc-api-features/blob/master/spec/oapif-inspire-download.md#main-principles) in [PUB-2] to use one data set in one API.
2. The protocol element in the metadata is based on a code list. A new protocol needs to be added to this list of [protocol values](https://inspire.ec.europa.eu/metadata-codelist/ProtocolValue:1).
As long as it is not there, the Dutch profile for metadata can be used with the value: "OGC:API features" https://geonovum.github.io/Metadata-ISO19119/#codelist-protocol.
3. Another blocking issue before implementation of the OAPIF for INSPIRE is that descriptions of encodings other than GML are not yet available for most INSPIRE themes.
4. Complex GML as input and output are difficult as long as tooling (server and client) expects simple encodings.
5. One could discuss if it is useful to publish complex GML as output, because it is not in line with the aim of OGI API Features: easy to use for developers.
6. Complex GML as input needs a flattening of the data. This is needed for the software that publishes the features. It can only work with simple features, with one value per attribute and without relations to other objects.
This is often not the case with the more complex INSPIRE models.

### Resulting documentation

Presentations can be found here: https://www.geonovum.nl/over-geonovum/actueel/presentatie-resultaten-aanbesteding-ogc-api-features-toolaanpassing
