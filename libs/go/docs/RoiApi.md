# \RoiApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**V1EditionsEditionIdRoisBatchEditPost**](RoiApi.md#V1EditionsEditionIdRoisBatchEditPost) | **Post** /v1/editions/{editionId}/rois/batch-edit | Processes a series of create/update/delete ROI requests in the given edition of a scroll
[**V1EditionsEditionIdRoisBatchPost**](RoiApi.md#V1EditionsEditionIdRoisBatchPost) | **Post** /v1/editions/{editionId}/rois/batch | Creates new sign ROI&#39;s in the given edition of a scroll
[**V1EditionsEditionIdRoisBatchPut**](RoiApi.md#V1EditionsEditionIdRoisBatchPut) | **Put** /v1/editions/{editionId}/rois/batch | Update existing sign ROI&#39;s in the given edition of a scroll
[**V1EditionsEditionIdRoisPost**](RoiApi.md#V1EditionsEditionIdRoisPost) | **Post** /v1/editions/{editionId}/rois | Creates new sign ROI in the given edition of a scroll
[**V1EditionsEditionIdRoisRoiIdDelete**](RoiApi.md#V1EditionsEditionIdRoisRoiIdDelete) | **Delete** /v1/editions/{editionId}/rois/{roiId} | Deletes a sign ROI from the given edition of a scroll
[**V1EditionsEditionIdRoisRoiIdGet**](RoiApi.md#V1EditionsEditionIdRoisRoiIdGet) | **Get** /v1/editions/{editionId}/rois/{roiId} | Get the details for a ROI in the given edition of a scroll
[**V1EditionsEditionIdRoisRoiIdPut**](RoiApi.md#V1EditionsEditionIdRoisRoiIdPut) | **Put** /v1/editions/{editionId}/rois/{roiId} | Update an existing sign ROI in the given edition of a scroll



## V1EditionsEditionIdRoisBatchEditPost

> BatchEditRoiResponseDTO V1EditionsEditionIdRoisBatchEditPost(ctx, editionId).BatchEditRoiDTO(batchEditRoiDTO).Execute()

Processes a series of create/update/delete ROI requests in the given edition of a scroll

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
    editionId := 987 // int32 | Id of the edition
    batchEditRoiDTO := openapiclient.BatchEditRoiDTO{CreateRois: []SetInterpretationRoiDTO{openapiclient.SetInterpretationRoiDTO{ArtefactId: 123, SignInterpretationId: 123, Shape: "Shape_example", Translate: openapiclient.TranslateDTO{X: 123, Y: 123}, StanceRotation: 123, Exceptional: false, ValuesSet: false}), UpdateRois: []UpdateInterpretationRoiDTO{openapiclient.UpdateInterpretationRoiDTO{InterpretationRoiId: 123, ArtefactId: 123, SignInterpretationId: 123, Shape: "Shape_example", Translate: openapiclient.TranslateDTO{X: 123, Y: 123}, StanceRotation: 123, Exceptional: false, ValuesSet: false}), DeleteRois: []int32{123)} // BatchEditRoiDTO | A JSON object with all the roi edits to be performed (optional)

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.RoiApi.V1EditionsEditionIdRoisBatchEditPost(context.Background(), editionId).BatchEditRoiDTO(batchEditRoiDTO).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `RoiApi.V1EditionsEditionIdRoisBatchEditPost``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `V1EditionsEditionIdRoisBatchEditPost`: BatchEditRoiResponseDTO
    fmt.Fprintf(os.Stdout, "Response from `RoiApi.V1EditionsEditionIdRoisBatchEditPost`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**editionId** | **int32** | Id of the edition | 

### Other Parameters

Other parameters are passed through a pointer to a apiV1EditionsEditionIdRoisBatchEditPostRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **batchEditRoiDTO** | [**BatchEditRoiDTO**](BatchEditRoiDTO.md) | A JSON object with all the roi edits to be performed | 

### Return type

[**BatchEditRoiResponseDTO**](BatchEditRoiResponseDTO.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/_*+json
- **Accept**: text/plain, application/json, text/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## V1EditionsEditionIdRoisBatchPost

> InterpretationRoiDTOList V1EditionsEditionIdRoisBatchPost(ctx, editionId).SetInterpretationRoiDTOList(setInterpretationRoiDTOList).Execute()

Creates new sign ROI's in the given edition of a scroll

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
    editionId := 987 // int32 | Id of the edition
    setInterpretationRoiDTOList := openapiclient.SetInterpretationRoiDTOList{Rois: []SetInterpretationRoiDTO{openapiclient.SetInterpretationRoiDTO{ArtefactId: 123, SignInterpretationId: 123, Shape: "Shape_example", Translate: , StanceRotation: 123, Exceptional: false, ValuesSet: false})} // SetInterpretationRoiDTOList | A JSON object with an array of the new ROI's to be created (optional)

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.RoiApi.V1EditionsEditionIdRoisBatchPost(context.Background(), editionId).SetInterpretationRoiDTOList(setInterpretationRoiDTOList).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `RoiApi.V1EditionsEditionIdRoisBatchPost``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `V1EditionsEditionIdRoisBatchPost`: InterpretationRoiDTOList
    fmt.Fprintf(os.Stdout, "Response from `RoiApi.V1EditionsEditionIdRoisBatchPost`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**editionId** | **int32** | Id of the edition | 

### Other Parameters

Other parameters are passed through a pointer to a apiV1EditionsEditionIdRoisBatchPostRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **setInterpretationRoiDTOList** | [**SetInterpretationRoiDTOList**](SetInterpretationRoiDTOList.md) | A JSON object with an array of the new ROI&#39;s to be created | 

### Return type

[**InterpretationRoiDTOList**](InterpretationRoiDTOList.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/_*+json
- **Accept**: text/plain, application/json, text/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## V1EditionsEditionIdRoisBatchPut

> UpdatedInterpretationRoiDTOList V1EditionsEditionIdRoisBatchPut(ctx, editionId).UpdateInterpretationRoiDTOList(updateInterpretationRoiDTOList).Execute()

Update existing sign ROI's in the given edition of a scroll

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
    editionId := 987 // int32 | Id of the edition
    updateInterpretationRoiDTOList := openapiclient.UpdateInterpretationRoiDTOList{Rois: []UpdateInterpretationRoiDTO{openapiclient.UpdateInterpretationRoiDTO{InterpretationRoiId: 123, ArtefactId: 123, SignInterpretationId: 123, Shape: "Shape_example", Translate: , StanceRotation: 123, Exceptional: false, ValuesSet: false})} // UpdateInterpretationRoiDTOList | A JSON object with an array of the updated ROI details (optional)

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.RoiApi.V1EditionsEditionIdRoisBatchPut(context.Background(), editionId).UpdateInterpretationRoiDTOList(updateInterpretationRoiDTOList).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `RoiApi.V1EditionsEditionIdRoisBatchPut``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `V1EditionsEditionIdRoisBatchPut`: UpdatedInterpretationRoiDTOList
    fmt.Fprintf(os.Stdout, "Response from `RoiApi.V1EditionsEditionIdRoisBatchPut`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**editionId** | **int32** | Id of the edition | 

### Other Parameters

Other parameters are passed through a pointer to a apiV1EditionsEditionIdRoisBatchPutRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **updateInterpretationRoiDTOList** | [**UpdateInterpretationRoiDTOList**](UpdateInterpretationRoiDTOList.md) | A JSON object with an array of the updated ROI details | 

### Return type

[**UpdatedInterpretationRoiDTOList**](UpdatedInterpretationRoiDTOList.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/_*+json
- **Accept**: text/plain, application/json, text/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## V1EditionsEditionIdRoisPost

> InterpretationRoiDTO V1EditionsEditionIdRoisPost(ctx, editionId).SetInterpretationRoiDTO(setInterpretationRoiDTO).Execute()

Creates new sign ROI in the given edition of a scroll

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
    editionId := 987 // int32 | Id of the edition
    setInterpretationRoiDTO :=  // SetInterpretationRoiDTO | A JSON object with the new ROI to be created (optional)

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.RoiApi.V1EditionsEditionIdRoisPost(context.Background(), editionId).SetInterpretationRoiDTO(setInterpretationRoiDTO).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `RoiApi.V1EditionsEditionIdRoisPost``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `V1EditionsEditionIdRoisPost`: InterpretationRoiDTO
    fmt.Fprintf(os.Stdout, "Response from `RoiApi.V1EditionsEditionIdRoisPost`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**editionId** | **int32** | Id of the edition | 

### Other Parameters

Other parameters are passed through a pointer to a apiV1EditionsEditionIdRoisPostRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **setInterpretationRoiDTO** | [**SetInterpretationRoiDTO**](SetInterpretationRoiDTO.md) | A JSON object with the new ROI to be created | 

### Return type

[**InterpretationRoiDTO**](InterpretationRoiDTO.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/_*+json
- **Accept**: text/plain, application/json, text/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## V1EditionsEditionIdRoisRoiIdDelete

> V1EditionsEditionIdRoisRoiIdDelete(ctx, editionId, roiId).Execute()

Deletes a sign ROI from the given edition of a scroll

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
    editionId := 987 // int32 | Id of the edition
    roiId := 987 // int32 | Id of the ROI to be deleted

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.RoiApi.V1EditionsEditionIdRoisRoiIdDelete(context.Background(), editionId, roiId).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `RoiApi.V1EditionsEditionIdRoisRoiIdDelete``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**editionId** | **int32** | Id of the edition | 
**roiId** | **int32** | Id of the ROI to be deleted | 

### Other Parameters

Other parameters are passed through a pointer to a apiV1EditionsEditionIdRoisRoiIdDeleteRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



### Return type

 (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## V1EditionsEditionIdRoisRoiIdGet

> InterpretationRoiDTO V1EditionsEditionIdRoisRoiIdGet(ctx, editionId, roiId).Execute()

Get the details for a ROI in the given edition of a scroll

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
    editionId := 987 // int32 | Id of the edition
    roiId := 987 // int32 | A JSON object with the new ROI to be created

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.RoiApi.V1EditionsEditionIdRoisRoiIdGet(context.Background(), editionId, roiId).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `RoiApi.V1EditionsEditionIdRoisRoiIdGet``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `V1EditionsEditionIdRoisRoiIdGet`: InterpretationRoiDTO
    fmt.Fprintf(os.Stdout, "Response from `RoiApi.V1EditionsEditionIdRoisRoiIdGet`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**editionId** | **int32** | Id of the edition | 
**roiId** | **int32** | A JSON object with the new ROI to be created | 

### Other Parameters

Other parameters are passed through a pointer to a apiV1EditionsEditionIdRoisRoiIdGetRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



### Return type

[**InterpretationRoiDTO**](InterpretationRoiDTO.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## V1EditionsEditionIdRoisRoiIdPut

> UpdatedInterpretationRoiDTO V1EditionsEditionIdRoisRoiIdPut(ctx, editionId, roiId).SetInterpretationRoiDTO(setInterpretationRoiDTO).Execute()

Update an existing sign ROI in the given edition of a scroll

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
    editionId := 987 // int32 | Id of the edition
    roiId := 987 // int32 | Id of the ROI to be updated
    setInterpretationRoiDTO :=  // SetInterpretationRoiDTO | A JSON object with the updated ROI details (optional)

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.RoiApi.V1EditionsEditionIdRoisRoiIdPut(context.Background(), editionId, roiId).SetInterpretationRoiDTO(setInterpretationRoiDTO).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `RoiApi.V1EditionsEditionIdRoisRoiIdPut``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `V1EditionsEditionIdRoisRoiIdPut`: UpdatedInterpretationRoiDTO
    fmt.Fprintf(os.Stdout, "Response from `RoiApi.V1EditionsEditionIdRoisRoiIdPut`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**editionId** | **int32** | Id of the edition | 
**roiId** | **int32** | Id of the ROI to be updated | 

### Other Parameters

Other parameters are passed through a pointer to a apiV1EditionsEditionIdRoisRoiIdPutRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **setInterpretationRoiDTO** | [**SetInterpretationRoiDTO**](SetInterpretationRoiDTO.md) | A JSON object with the updated ROI details | 

### Return type

[**UpdatedInterpretationRoiDTO**](UpdatedInterpretationRoiDTO.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/_*+json
- **Accept**: text/plain, application/json, text/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

