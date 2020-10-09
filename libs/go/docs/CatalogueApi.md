# \CatalogueApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**V1CatalogueConfirmMatchIaaEditionCatalogToTextFragmentIdDelete**](CatalogueApi.md#V1CatalogueConfirmMatchIaaEditionCatalogToTextFragmentIdDelete) | **Delete** /v1/catalogue/confirm-match/{iaaEditionCatalogToTextFragmentId} | Remove an existing imaged object and text fragment match, which is not correct
[**V1CatalogueConfirmMatchIaaEditionCatalogToTextFragmentIdPost**](CatalogueApi.md#V1CatalogueConfirmMatchIaaEditionCatalogToTextFragmentIdPost) | **Post** /v1/catalogue/confirm-match/{iaaEditionCatalogToTextFragmentId} | Confirm the correctness of an existing imaged object and text fragment match
[**V1CatalogueEditionsEditionIdImagedObjectTextFragmentMatchesGet**](CatalogueApi.md#V1CatalogueEditionsEditionIdImagedObjectTextFragmentMatchesGet) | **Get** /v1/catalogue/editions/{editionId}/imaged-object-text-fragment-matches | Get a listing of all corresponding imaged objects and transcribed text fragment in a specified edition
[**V1CatalogueImagedObjectsImagedObjectIdTextFragmentsGet**](CatalogueApi.md#V1CatalogueImagedObjectsImagedObjectIdTextFragmentsGet) | **Get** /v1/catalogue/imaged-objects/{imagedObjectId}/text-fragments | Get a listing of all text fragments matches that correspond to an imaged object
[**V1CatalogueManuscriptsManuscriptIdImagedObjectTextFragmentMatchesGet**](CatalogueApi.md#V1CatalogueManuscriptsManuscriptIdImagedObjectTextFragmentMatchesGet) | **Get** /v1/catalogue/manuscripts/{manuscriptId}/imaged-object-text-fragment-matches | Get a listing of all corresponding imaged objects and transcribed text fragment in a specified manuscript
[**V1CataloguePost**](CatalogueApi.md#V1CataloguePost) | **Post** /v1/catalogue | Create a new matched pair for an imaged object and a text fragment along with the edition princeps information
[**V1CatalogueTextFragmentsTextFragmentIdImagedObjectsGet**](CatalogueApi.md#V1CatalogueTextFragmentsTextFragmentIdImagedObjectsGet) | **Get** /v1/catalogue/text-fragments/{textFragmentId}/imaged-objects | Get a listing of all imaged objects that matches that correspond to a transcribed text fragment



## V1CatalogueConfirmMatchIaaEditionCatalogToTextFragmentIdDelete

> V1CatalogueConfirmMatchIaaEditionCatalogToTextFragmentIdDelete(ctx, iaaEditionCatalogToTextFragmentId).Execute()

Remove an existing imaged object and text fragment match, which is not correct

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
    iaaEditionCatalogToTextFragmentId := 987 // int32 | The unique id of the match to confirm

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.CatalogueApi.V1CatalogueConfirmMatchIaaEditionCatalogToTextFragmentIdDelete(context.Background(), iaaEditionCatalogToTextFragmentId).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CatalogueApi.V1CatalogueConfirmMatchIaaEditionCatalogToTextFragmentIdDelete``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**iaaEditionCatalogToTextFragmentId** | **int32** | The unique id of the match to confirm | 

### Other Parameters

Other parameters are passed through a pointer to a apiV1CatalogueConfirmMatchIaaEditionCatalogToTextFragmentIdDeleteRequest struct via the builder pattern


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


## V1CatalogueConfirmMatchIaaEditionCatalogToTextFragmentIdPost

> V1CatalogueConfirmMatchIaaEditionCatalogToTextFragmentIdPost(ctx, iaaEditionCatalogToTextFragmentId).Execute()

Confirm the correctness of an existing imaged object and text fragment match

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
    iaaEditionCatalogToTextFragmentId := 987 // int32 | The unique id of the match to confirm

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.CatalogueApi.V1CatalogueConfirmMatchIaaEditionCatalogToTextFragmentIdPost(context.Background(), iaaEditionCatalogToTextFragmentId).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CatalogueApi.V1CatalogueConfirmMatchIaaEditionCatalogToTextFragmentIdPost``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**iaaEditionCatalogToTextFragmentId** | **int32** | The unique id of the match to confirm | 

### Other Parameters

Other parameters are passed through a pointer to a apiV1CatalogueConfirmMatchIaaEditionCatalogToTextFragmentIdPostRequest struct via the builder pattern


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


## V1CatalogueEditionsEditionIdImagedObjectTextFragmentMatchesGet

> CatalogueMatchListDTO V1CatalogueEditionsEditionIdImagedObjectTextFragmentMatchesGet(ctx, editionId).Execute()

Get a listing of all corresponding imaged objects and transcribed text fragment in a specified edition

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
    editionId := 987 // int32 | Unique Id of the edition to search for imaged objects to text fragment matches

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.CatalogueApi.V1CatalogueEditionsEditionIdImagedObjectTextFragmentMatchesGet(context.Background(), editionId).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CatalogueApi.V1CatalogueEditionsEditionIdImagedObjectTextFragmentMatchesGet``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `V1CatalogueEditionsEditionIdImagedObjectTextFragmentMatchesGet`: CatalogueMatchListDTO
    fmt.Fprintf(os.Stdout, "Response from `CatalogueApi.V1CatalogueEditionsEditionIdImagedObjectTextFragmentMatchesGet`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**editionId** | **int32** | Unique Id of the edition to search for imaged objects to text fragment matches | 

### Other Parameters

Other parameters are passed through a pointer to a apiV1CatalogueEditionsEditionIdImagedObjectTextFragmentMatchesGetRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**CatalogueMatchListDTO**](CatalogueMatchListDTO.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## V1CatalogueImagedObjectsImagedObjectIdTextFragmentsGet

> CatalogueMatchListDTO V1CatalogueImagedObjectsImagedObjectIdTextFragmentsGet(ctx, imagedObjectId).Execute()

Get a listing of all text fragments matches that correspond to an imaged object

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
    imagedObjectId := "imagedObjectId_example" // string | Id of imaged object to search for transcription matches

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.CatalogueApi.V1CatalogueImagedObjectsImagedObjectIdTextFragmentsGet(context.Background(), imagedObjectId).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CatalogueApi.V1CatalogueImagedObjectsImagedObjectIdTextFragmentsGet``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `V1CatalogueImagedObjectsImagedObjectIdTextFragmentsGet`: CatalogueMatchListDTO
    fmt.Fprintf(os.Stdout, "Response from `CatalogueApi.V1CatalogueImagedObjectsImagedObjectIdTextFragmentsGet`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**imagedObjectId** | **string** | Id of imaged object to search for transcription matches | 

### Other Parameters

Other parameters are passed through a pointer to a apiV1CatalogueImagedObjectsImagedObjectIdTextFragmentsGetRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**CatalogueMatchListDTO**](CatalogueMatchListDTO.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## V1CatalogueManuscriptsManuscriptIdImagedObjectTextFragmentMatchesGet

> CatalogueMatchListDTO V1CatalogueManuscriptsManuscriptIdImagedObjectTextFragmentMatchesGet(ctx, manuscriptId).Execute()

Get a listing of all corresponding imaged objects and transcribed text fragment in a specified manuscript

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
    manuscriptId := 987 // int32 | Unique Id of the manuscript to search for imaged objects to text fragment matches

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.CatalogueApi.V1CatalogueManuscriptsManuscriptIdImagedObjectTextFragmentMatchesGet(context.Background(), manuscriptId).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CatalogueApi.V1CatalogueManuscriptsManuscriptIdImagedObjectTextFragmentMatchesGet``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `V1CatalogueManuscriptsManuscriptIdImagedObjectTextFragmentMatchesGet`: CatalogueMatchListDTO
    fmt.Fprintf(os.Stdout, "Response from `CatalogueApi.V1CatalogueManuscriptsManuscriptIdImagedObjectTextFragmentMatchesGet`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**manuscriptId** | **int32** | Unique Id of the manuscript to search for imaged objects to text fragment matches | 

### Other Parameters

Other parameters are passed through a pointer to a apiV1CatalogueManuscriptsManuscriptIdImagedObjectTextFragmentMatchesGetRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**CatalogueMatchListDTO**](CatalogueMatchListDTO.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## V1CataloguePost

> V1CataloguePost(ctx).CatalogueMatchInputDTO(catalogueMatchInputDTO).Execute()

Create a new matched pair for an imaged object and a text fragment along with the edition princeps information

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
    catalogueMatchInputDTO := openapiclient.CatalogueMatchInputDTO{CatalogSide: openapiclient.SideDesignation{}, ImagedObjectId: "ImagedObjectId_example", ManuscriptId: 123, EditionName: "EditionName_example", EditionVolume: "EditionVolume_example", EditionLocation1: "EditionLocation1_example", EditionLocation2: "EditionLocation2_example", EditionSide: openapiclient.SideDesignation{}, Comment: "Comment_example", TextFragmentId: 123, EditionId: 123, Confirmed: false} // CatalogueMatchInputDTO | The details of the new match (optional)

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.CatalogueApi.V1CataloguePost(context.Background()).CatalogueMatchInputDTO(catalogueMatchInputDTO).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CatalogueApi.V1CataloguePost``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiV1CataloguePostRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **catalogueMatchInputDTO** | [**CatalogueMatchInputDTO**](CatalogueMatchInputDTO.md) | The details of the new match | 

### Return type

 (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/_*+json
- **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## V1CatalogueTextFragmentsTextFragmentIdImagedObjectsGet

> CatalogueMatchListDTO V1CatalogueTextFragmentsTextFragmentIdImagedObjectsGet(ctx, textFragmentId).Execute()

Get a listing of all imaged objects that matches that correspond to a transcribed text fragment

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
    textFragmentId := 987 // int32 | Unique Id of the text fragment to search for imaged object matches

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.CatalogueApi.V1CatalogueTextFragmentsTextFragmentIdImagedObjectsGet(context.Background(), textFragmentId).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CatalogueApi.V1CatalogueTextFragmentsTextFragmentIdImagedObjectsGet``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `V1CatalogueTextFragmentsTextFragmentIdImagedObjectsGet`: CatalogueMatchListDTO
    fmt.Fprintf(os.Stdout, "Response from `CatalogueApi.V1CatalogueTextFragmentsTextFragmentIdImagedObjectsGet`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**textFragmentId** | **int32** | Unique Id of the text fragment to search for imaged object matches | 

### Other Parameters

Other parameters are passed through a pointer to a apiV1CatalogueTextFragmentsTextFragmentIdImagedObjectsGetRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**CatalogueMatchListDTO**](CatalogueMatchListDTO.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

