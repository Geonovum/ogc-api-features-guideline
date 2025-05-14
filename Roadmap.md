## Roadmap for data providers

The following steps could be considered to follow in order to serve an OGC API Feature service according to the standards:

{.simple}
|nr|main step|step|general remarks|INSPIRE remarks|
|------|---------|----|---------------|---------------|
|1|preparation|reading|[Appendix A](#references)|[[PUB-2]]|
|2|preparation|choose your hosting method|By yourself or an hosting organization.||
|3|preparation|study [examples](#H04)||Look what other INSPIRE data providers have done in this field for the concerning INSPIRE themes and have a look at: https://github.com/INSPIRE-MIF/gp-ogc-api-features/tree/master/deployments.|
|4|preparation|select the server tool|The [examples](#H04) in this guideline might help.||
|5|preparation|select supported CRS's and timezones|At least [WGS84](https://epsg.io/4326) and UTC with an optional timeoffset if datatype [DateTime](https://tools.ietf.org/html/rfc3339#section-5.6) is used. Dutch data owners are also advised to provide the [Dutch RD](https://www.opengis.net/def/crs/EPSG/0/28992) as CRS and optional the local time zone with timeoffset to UTC (+02:00 in summer en +01:00 in winter).|A projection based on [ETRS89](https://epsg.io/4258) is required as one of the CRS's.|
|6|preparation|decide on input encoding|depends on previous decisions||
|7|preparation|decide on output encoding|depends on previous decisions||
|8|data preparation|input data transformation|In many cases the original dataset needs to be adjusted or transformed into an encoding that can be used in the OAF-server tool. This can be done with software like [HALE studio](https://wetransform.to/halestudio/), [FME](https://www.safe.com/) or [GDAL](https://gdal.org/index.html). |IINSPIRE data models are often complex. Research whether a previously published mapping to an encoding other than complex GML can be found for the concerned INSPIRE-theme. If so, it can be reused. If it cannot be found, research how your harmonized data can be mapped to an encoding that can be used in the tooling. Seek for cooperation with other INSPIRE data providers in Europe and use the principles as stated in [[PUB-4]].|
|9|data preparation|publishing the description of the output encoding|This is only required for INSPIRE.|If not published before, describe the mapping from the INSPIRE data model to the output encoding of the OAPIF and publish it, in order to be INSPIRE compliant.|
|10|data preparation|publish metadata of the dataset|Adjust your metadata of the dataset with the addition of the OAPIF service as an online resource in a CI_OnlineResource element. The [ISO19115 metadata standard](https://docs.geostandaarden.nl/md/mdprofiel-iso19115/#protocol) uses the protocol element to state the type of service. A new protocol "OGC API-Features" was added to the list of [protocol values](https://inspire.ec.europa.eu/metadata-codelist/ProtocolValue:1). But the given [link](http://www.opengis.net/def/docs/17-069r3) behind the label does not resolve. The Dutch profile for metadata can also be used with the value: ["OGC:API features"](https://geonovum.github.io/Metadata-ISO19119/#codelist-protocol). The [uri](http://www.opengis.net/def/interface/ogcapi-features) provided there, does also not resolve.||
|11|service preparation|publish metadata of the service|If you host your OAPIF yourself, you could create metadata for the OAPIF service. It is probably similar to the metadata of a WFS, except for the protocol element. |For Inspire this is not mandatory anymore.|
|12|service preparation|add links|Add as many links, i.e. references to other resources, as you can at the response to the endpoints of your service to describe your service.| All the links as mentioned in the chapter on [requirements](#H03) are required (metadata of dataset, INSPIRE feature concept dictionary, Licence, mapping description, bulk download).|
|13|service preparation|final publishing|The steps for final actual publishing of the OAPIF service depends on the chosen tool, so there the tooling guidelines need to be followed. See list below.||
|14|validation|validate the service|Validate the OAPIF service for the OGC requirement with the [INSPIRE validation tool](https://inspire.ec.europa.eu/validator/home/index.html) and in case of a Dutch provider: the [Dutch ADR-validator](https://gitlab.com/commonground/don/adr-validator/-/blob/main/README.md?ref_type=heads). Geonovum is developing an other [validator based on Linter](https://geonovum-labs.github.io/ogc-checker/?#/ogc-api). Adjust where possible to be compliant.|It should be noted that the INSPIRE-validator is the same as the [OGC validator](https://cite.opengeospatial.org/teamengine/about/ogcapi-features-1.0/1.0/site/) and that it does not test the specific INSPIRE requirements as one would expect.|

Guidelines for different tooling:  
  - Geonovum testbed: https://github.com/Geonovum/ogc-api-testbed/tree/main/docs/docs/howto  
  - GoKoala: https://github.com/PDOK/gokoala   
  - Pygeoapi: https://github.com/Geonovum/ogc-api-testbed/blob/main/docs/docs/howto/howto_pygeoapi.md or https://docs.pygeoapi.io/en/latest/  
  - Geoserver: https://github.com/Geonovum/ogc-api-testbed/blob/main/docs/docs/howto/howto_geoserver.md or https://docs.geoserver.org/latest/en/user/  
  - Deegree: https://github.com/deegree/deegree-ogcapi







