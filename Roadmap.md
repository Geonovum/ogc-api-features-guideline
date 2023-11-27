## Roadmap for data providers

The following steps could be considered to follow in order to serve an OGC API Feature service according to the standards:

1. Read this document and all the documents in [Appendix A](https://geonovum.github.io/ogc-api-features-guideline/#references).
2. Make a choice between publishing by yourself or contact a hosting organization that can help you publish the OAPIF services.
3. **In case of an INSPIRE-dataset**, look what other data providers have done in this field for the concerning INSPIRE themes and have a look at these examples: https://github.com/INSPIRE-MIF/gp-ogc-api-features/tree/master/deployments.
4. If you decide to serve the OAPIF yourself, the next step is to select the best tooling for your situation. The [examples](#H04) in this guideline might help in this regard.
5. Figure out the best way of supporting more than one CRS, at least [WGS84](https://epsg.io/4326) and in case of INSPRE also [ETRS89](https://epsg.io/4258) since the last is the most common in INSPIRE and mostly mandatory. 
Dutch providers are also advised to provide the [Dutch RD](https://www.opengis.net/def/crs/EPSG/0/28992).
If tooling is chosen that is not able to serve more than one CRS, a second download option should be provided that does give the data in the required CRS.
6. Decide on the best input encoding for the OAPIF. It depends on the previous steps and tooling.
7. If necessary, execute the transformation into the chosen input encoding. This can be done with software like [HALE studio](https://wetransform.to/halestudio/) or [FME](https://www.safe.com/).
8. Decide on the best output encoding, which also depends on the previous steps and tooling. The tooling used in the examples did a simple 1 to 1 mapping between the input and output encoding. 
9. **In case of an INSPIRE-dataset**, research whether a previously published mapping to an encoding other than complex GML can be found for the concerned INSPIRE-theme. If so, it can be reused.
If it cannot be found, research how your harmonized data can be mapped to an encoding that can be used in the tooling.
Seek for cooperation with other INSPIRE data providers in Europe and use the principles as stated in [[PUB-4]].
The INSPIRE data models contain many non-obligatory fields that remain empty after harmonizing. Consider leaving out these empty fields to reduce the output size or use an option not to show them.
10. **In case of an INSPIRE-dataset**, if not published before, describe the mapping from the INSPIRE data model to the output encoding of the OAPIF and publish it, in order to be INSPIRE compliant.
11. Adjust your metadata of the dataset with the addition of the OAPIF service. The [ISO19115 metadata standard](https://docs.geostandaarden.nl/md/mdprofiel-iso19115/#protocol) uses the protocol element to state the type of service. 
As long as there is no official protocol defined for OAPIF in https://inspire.ec.europa.eu/metadata-codelist/ProtocolValue:1, use the extended code list for the protocol in the Dutch metadata standard 2.1.0 (https://docs.geostandaarden.nl/md/mdprofiel-iso19119/#codelist-protocol): `OGC:API features`.
12. If you host your OAPIF yourself, research how to make metadata for the OAPIF service. It is probably similar to the metadata of a WFS, except for the protocol element.
13. Add as many links, i.e. references to other resources, as you can at the response to the endpoints of your service to describe your service. **In case of an Inspire dataset**, all the links as mentioned in the chapter on [requirements](#H03) are required (metadata of dataset, INSPIRE feature concept dictionary, Licence, mapping description, bulk download).
14. The steps for final actual publishing of the OAPIF service depends on the chosen tool, so there the tooling guidelines need to be followed:  
  - Geonovum testbed: https://github.com/Geonovum/ogc-api-testbed/tree/main/docs/docs/howto  
  - GoKoala: https://github.com/PDOK/gokoala   
  - Pygeoapi: https://github.com/Geonovum/ogc-api-testbed/blob/main/docs/docs/howto/howto_pygeoapi.md or https://docs.pygeoapi.io/_/downloads/en/stable/pdf/  
  - Geoserver: https://github.com/Geonovum/ogc-api-testbed/blob/main/docs/docs/howto/howto_geoserver.md or https://docs.geoserver.org/latest/en/user/  
  - Deegree: https://github.com/deegree/deegree-ogcapi  
15. Validate the OAPIF service for the OGC requirement with the [INSPIRE validation tool](https://inspire.ec.europa.eu/validator/home/index.html) and in case of a Dutch provider: the [Dutch ADR-validator](https://gitlab.com/commonground/don/adr-validator/-/blob/main/README.md?ref_type=heads).   
Adjust where possible to be compliant.
It should be noted that the INSPIRE-validator is the same as the [OGC validator](https://cite.opengeospatial.org/teamengine/about/ogcapi-features-1.0/1.0/site/) and that it does not test the specific INSPIRE requirements as one would expect.





