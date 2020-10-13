# UtilApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**V1UtilsRepairWktPolygonPost**](UtilApi.md#V1UtilsRepairWktPolygonPost) | **POST** /v1/utils/repair-wkt-polygon | Checks a WKT polygon to ensure validity. If the polygon is invalid,  it attempts to construct a valid polygon that matches the original  as closely as possible.


# **V1UtilsRepairWktPolygonPost**
> WktPolygonDTO V1UtilsRepairWktPolygonPost(wkt.polygon.dto=var.wkt.polygon.dto)

Checks a WKT polygon to ensure validity. If the polygon is invalid,  it attempts to construct a valid polygon that matches the original  as closely as possible.

### Example
```R
library(qumranicaApiConnector)

var.wkt.polygon.dto <- WktPolygonDTO$new("wktPolygon_example") # WktPolygonDTO | JSON object with the WKT polygon to validate

#Checks a WKT polygon to ensure validity. If the polygon is invalid,  it attempts to construct a valid polygon that matches the original  as closely as possible.
api.instance <- UtilApi$new()
# Configure API key authorization: Bearer
api.instance$apiClient$apiKeys['Authorization'] <- 'TODO_YOUR_API_KEY';
result <- api.instance$V1UtilsRepairWktPolygonPost(wkt.polygon.dto=var.wkt.polygon.dto)
dput(result)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **wkt.polygon.dto** | [**WktPolygonDTO**](WktPolygonDTO.md)| JSON object with the WKT polygon to validate | [optional] 

### Return type

[**WktPolygonDTO**](WktPolygonDTO.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/*+json
 - **Accept**: text/plain, application/json, text/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Success |  -  |

