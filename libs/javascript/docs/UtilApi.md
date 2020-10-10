# QumranicaApiConnector.UtilApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v1UtilsRepairWktPolygonPost**](UtilApi.md#v1UtilsRepairWktPolygonPost) | **POST** /v1/utils/repair-wkt-polygon | Checks a WKT polygon to ensure validity. If the polygon is invalid,  it attempts to construct a valid polygon that matches the original  as closely as possible.



## v1UtilsRepairWktPolygonPost

> WktPolygonDTO v1UtilsRepairWktPolygonPost(opts)

Checks a WKT polygon to ensure validity. If the polygon is invalid,  it attempts to construct a valid polygon that matches the original  as closely as possible.

### Example

```javascript
import QumranicaApiConnector from 'qumranica_api_connector';
let defaultClient = QumranicaApiConnector.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new QumranicaApiConnector.UtilApi();
let opts = {
  'wktPolygonDTO': new QumranicaApiConnector.WktPolygonDTO() // WktPolygonDTO | JSON object with the WKT polygon to validate
};
apiInstance.v1UtilsRepairWktPolygonPost(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **wktPolygonDTO** | [**WktPolygonDTO**](WktPolygonDTO.md)| JSON object with the WKT polygon to validate | [optional] 

### Return type

[**WktPolygonDTO**](WktPolygonDTO.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/_*+json
- **Accept**: text/plain, application/json, text/json

