# \UtilApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**V1UtilsRepairWktPolygonPost**](UtilApi.md#V1UtilsRepairWktPolygonPost) | **Post** /v1/utils/repair-wkt-polygon | Checks a WKT polygon to ensure validity. If the polygon is invalid,  it attempts to construct a valid polygon that matches the original  as closely as possible.



## V1UtilsRepairWktPolygonPost

> WktPolygonDTO V1UtilsRepairWktPolygonPost(ctx).WktPolygonDTO(wktPolygonDTO).Execute()

Checks a WKT polygon to ensure validity. If the polygon is invalid,  it attempts to construct a valid polygon that matches the original  as closely as possible.

### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "./openapi"
)

func main() {
    wktPolygonDTO := openapiclient.WktPolygonDTO{WktPolygon: "WktPolygon_example"} // WktPolygonDTO | JSON object with the WKT polygon to validate (optional)

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.UtilApi.V1UtilsRepairWktPolygonPost(context.Background()).WktPolygonDTO(wktPolygonDTO).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `UtilApi.V1UtilsRepairWktPolygonPost``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `V1UtilsRepairWktPolygonPost`: WktPolygonDTO
    fmt.Fprintf(os.Stdout, "Response from `UtilApi.V1UtilsRepairWktPolygonPost`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiV1UtilsRepairWktPolygonPostRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **wktPolygonDTO** | [**WktPolygonDTO**](WktPolygonDTO.md) | JSON object with the WKT polygon to validate | 

### Return type

[**WktPolygonDTO**](WktPolygonDTO.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/_*+json
- **Accept**: text/plain, application/json, text/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

