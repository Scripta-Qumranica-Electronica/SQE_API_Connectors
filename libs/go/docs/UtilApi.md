# \UtilApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**V1UtilsRepairWktPolygonPost**](UtilApi.md#V1UtilsRepairWktPolygonPost) | **Post** /v1/utils/repair-wkt-polygon | Checks a WKT polygon to ensure validity. If the polygon is invalid,  it attempts to construct a valid polygon that matches the original  as closely as possible.



## V1UtilsRepairWktPolygonPost

> WktPolygonDto V1UtilsRepairWktPolygonPost(ctx, optional)

Checks a WKT polygon to ensure validity. If the polygon is invalid,  it attempts to construct a valid polygon that matches the original  as closely as possible.

### Required Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
 **optional** | ***V1UtilsRepairWktPolygonPostOpts** | optional parameters | nil if no parameters

### Optional Parameters

Optional parameters are passed through a pointer to a V1UtilsRepairWktPolygonPostOpts struct


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **wktPolygonDto** | [**optional.Interface of WktPolygonDto**](WktPolygonDto.md)| JSON object with the WKT polygon to validate | 

### Return type

[**WktPolygonDto**](WktPolygonDTO.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/_*+json
- **Accept**: text/plain, application/json, text/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

