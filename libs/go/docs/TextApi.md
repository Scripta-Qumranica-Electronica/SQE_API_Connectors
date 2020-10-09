# \TextApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**V1EditionsEditionIdLinesLineIdGet**](TextApi.md#V1EditionsEditionIdLinesLineIdGet) | **Get** /v1/editions/{editionId}/lines/{lineId} | Retrieves all signs and their data from the given line
[**V1EditionsEditionIdTextFragmentsGet**](TextApi.md#V1EditionsEditionIdTextFragmentsGet) | **Get** /v1/editions/{editionId}/text-fragments | Retrieves the ids of all Fragments of all fragments in the given edition of a scroll
[**V1EditionsEditionIdTextFragmentsPost**](TextApi.md#V1EditionsEditionIdTextFragmentsPost) | **Post** /v1/editions/{editionId}/text-fragments | Creates a new text fragment in the given edition of a scroll
[**V1EditionsEditionIdTextFragmentsTextFragmentIdArtefactsGet**](TextApi.md#V1EditionsEditionIdTextFragmentsTextFragmentIdArtefactsGet) | **Get** /v1/editions/{editionId}/text-fragments/{textFragmentId}/artefacts | Retrieves the ids of all Artefacts in the given textFragmentName
[**V1EditionsEditionIdTextFragmentsTextFragmentIdGet**](TextApi.md#V1EditionsEditionIdTextFragmentsTextFragmentIdGet) | **Get** /v1/editions/{editionId}/text-fragments/{textFragmentId} | Retrieves all signs and their data from the given textFragmentName
[**V1EditionsEditionIdTextFragmentsTextFragmentIdLinesGet**](TextApi.md#V1EditionsEditionIdTextFragmentsTextFragmentIdLinesGet) | **Get** /v1/editions/{editionId}/text-fragments/{textFragmentId}/lines | Retrieves the ids of all lines in the given textFragmentName
[**V1EditionsEditionIdTextFragmentsTextFragmentIdPut**](TextApi.md#V1EditionsEditionIdTextFragmentsTextFragmentIdPut) | **Put** /v1/editions/{editionId}/text-fragments/{textFragmentId} | Updates the specified text fragment with the submitted properties



## V1EditionsEditionIdLinesLineIdGet

> LineTextDTO V1EditionsEditionIdLinesLineIdGet(ctx, editionId, lineId).Execute()

Retrieves all signs and their data from the given line

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
    lineId := 987 // int32 | Id of the line

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.TextApi.V1EditionsEditionIdLinesLineIdGet(context.Background(), editionId, lineId).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `TextApi.V1EditionsEditionIdLinesLineIdGet``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `V1EditionsEditionIdLinesLineIdGet`: LineTextDTO
    fmt.Fprintf(os.Stdout, "Response from `TextApi.V1EditionsEditionIdLinesLineIdGet`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**editionId** | **int32** | Id of the edition | 
**lineId** | **int32** | Id of the line | 

### Other Parameters

Other parameters are passed through a pointer to a apiV1EditionsEditionIdLinesLineIdGetRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



### Return type

[**LineTextDTO**](LineTextDTO.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## V1EditionsEditionIdTextFragmentsGet

> TextFragmentDataListDTO V1EditionsEditionIdTextFragmentsGet(ctx, editionId).Execute()

Retrieves the ids of all Fragments of all fragments in the given edition of a scroll

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

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.TextApi.V1EditionsEditionIdTextFragmentsGet(context.Background(), editionId).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `TextApi.V1EditionsEditionIdTextFragmentsGet``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `V1EditionsEditionIdTextFragmentsGet`: TextFragmentDataListDTO
    fmt.Fprintf(os.Stdout, "Response from `TextApi.V1EditionsEditionIdTextFragmentsGet`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**editionId** | **int32** | Id of the edition | 

### Other Parameters

Other parameters are passed through a pointer to a apiV1EditionsEditionIdTextFragmentsGetRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**TextFragmentDataListDTO**](TextFragmentDataListDTO.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## V1EditionsEditionIdTextFragmentsPost

> TextFragmentDataDTO V1EditionsEditionIdTextFragmentsPost(ctx, editionId).CreateTextFragmentDTO(createTextFragmentDTO).Execute()

Creates a new text fragment in the given edition of a scroll

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
    createTextFragmentDTO := openapiclient.CreateTextFragmentDTO{Name: "Name_example", PreviousTextFragmentId: 123, NextTextFragmentId: 123} // CreateTextFragmentDTO | A JSON object with the details of the new text fragment to be created (optional)

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.TextApi.V1EditionsEditionIdTextFragmentsPost(context.Background(), editionId).CreateTextFragmentDTO(createTextFragmentDTO).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `TextApi.V1EditionsEditionIdTextFragmentsPost``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `V1EditionsEditionIdTextFragmentsPost`: TextFragmentDataDTO
    fmt.Fprintf(os.Stdout, "Response from `TextApi.V1EditionsEditionIdTextFragmentsPost`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**editionId** | **int32** | Id of the edition | 

### Other Parameters

Other parameters are passed through a pointer to a apiV1EditionsEditionIdTextFragmentsPostRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **createTextFragmentDTO** | [**CreateTextFragmentDTO**](CreateTextFragmentDTO.md) | A JSON object with the details of the new text fragment to be created | 

### Return type

[**TextFragmentDataDTO**](TextFragmentDataDTO.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/_*+json
- **Accept**: text/plain, application/json, text/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## V1EditionsEditionIdTextFragmentsTextFragmentIdArtefactsGet

> ArtefactDataListDTO V1EditionsEditionIdTextFragmentsTextFragmentIdArtefactsGet(ctx, editionId, textFragmentId).Execute()

Retrieves the ids of all Artefacts in the given textFragmentName

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
    textFragmentId := 987 // int32 | Id of the text fragment

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.TextApi.V1EditionsEditionIdTextFragmentsTextFragmentIdArtefactsGet(context.Background(), editionId, textFragmentId).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `TextApi.V1EditionsEditionIdTextFragmentsTextFragmentIdArtefactsGet``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `V1EditionsEditionIdTextFragmentsTextFragmentIdArtefactsGet`: ArtefactDataListDTO
    fmt.Fprintf(os.Stdout, "Response from `TextApi.V1EditionsEditionIdTextFragmentsTextFragmentIdArtefactsGet`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**editionId** | **int32** | Id of the edition | 
**textFragmentId** | **int32** | Id of the text fragment | 

### Other Parameters

Other parameters are passed through a pointer to a apiV1EditionsEditionIdTextFragmentsTextFragmentIdArtefactsGetRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



### Return type

[**ArtefactDataListDTO**](ArtefactDataListDTO.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## V1EditionsEditionIdTextFragmentsTextFragmentIdGet

> TextEditionDTO V1EditionsEditionIdTextFragmentsTextFragmentIdGet(ctx, editionId, textFragmentId).Execute()

Retrieves all signs and their data from the given textFragmentName

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
    textFragmentId := 987 // int32 | Id of the text fragment

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.TextApi.V1EditionsEditionIdTextFragmentsTextFragmentIdGet(context.Background(), editionId, textFragmentId).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `TextApi.V1EditionsEditionIdTextFragmentsTextFragmentIdGet``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `V1EditionsEditionIdTextFragmentsTextFragmentIdGet`: TextEditionDTO
    fmt.Fprintf(os.Stdout, "Response from `TextApi.V1EditionsEditionIdTextFragmentsTextFragmentIdGet`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**editionId** | **int32** | Id of the edition | 
**textFragmentId** | **int32** | Id of the text fragment | 

### Other Parameters

Other parameters are passed through a pointer to a apiV1EditionsEditionIdTextFragmentsTextFragmentIdGetRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



### Return type

[**TextEditionDTO**](TextEditionDTO.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## V1EditionsEditionIdTextFragmentsTextFragmentIdLinesGet

> LineDataListDTO V1EditionsEditionIdTextFragmentsTextFragmentIdLinesGet(ctx, editionId, textFragmentId).Execute()

Retrieves the ids of all lines in the given textFragmentName

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
    textFragmentId := 987 // int32 | Id of the text fragment

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.TextApi.V1EditionsEditionIdTextFragmentsTextFragmentIdLinesGet(context.Background(), editionId, textFragmentId).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `TextApi.V1EditionsEditionIdTextFragmentsTextFragmentIdLinesGet``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `V1EditionsEditionIdTextFragmentsTextFragmentIdLinesGet`: LineDataListDTO
    fmt.Fprintf(os.Stdout, "Response from `TextApi.V1EditionsEditionIdTextFragmentsTextFragmentIdLinesGet`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**editionId** | **int32** | Id of the edition | 
**textFragmentId** | **int32** | Id of the text fragment | 

### Other Parameters

Other parameters are passed through a pointer to a apiV1EditionsEditionIdTextFragmentsTextFragmentIdLinesGetRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



### Return type

[**LineDataListDTO**](LineDataListDTO.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## V1EditionsEditionIdTextFragmentsTextFragmentIdPut

> TextFragmentDataDTO V1EditionsEditionIdTextFragmentsTextFragmentIdPut(ctx, editionId, textFragmentId).UpdateTextFragmentDTO(updateTextFragmentDTO).Execute()

Updates the specified text fragment with the submitted properties

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
    editionId := 987 // int32 | Edition of the text fragment being updates
    textFragmentId := 987 // int32 | Id of the text fragment being updates
    updateTextFragmentDTO := openapiclient.UpdateTextFragmentDTO{Name: "Name_example", PreviousTextFragmentId: 123, NextTextFragmentId: 123} // UpdateTextFragmentDTO | Details of the updated text fragment (optional)

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.TextApi.V1EditionsEditionIdTextFragmentsTextFragmentIdPut(context.Background(), editionId, textFragmentId).UpdateTextFragmentDTO(updateTextFragmentDTO).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `TextApi.V1EditionsEditionIdTextFragmentsTextFragmentIdPut``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `V1EditionsEditionIdTextFragmentsTextFragmentIdPut`: TextFragmentDataDTO
    fmt.Fprintf(os.Stdout, "Response from `TextApi.V1EditionsEditionIdTextFragmentsTextFragmentIdPut`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**editionId** | **int32** | Edition of the text fragment being updates | 
**textFragmentId** | **int32** | Id of the text fragment being updates | 

### Other Parameters

Other parameters are passed through a pointer to a apiV1EditionsEditionIdTextFragmentsTextFragmentIdPutRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **updateTextFragmentDTO** | [**UpdateTextFragmentDTO**](UpdateTextFragmentDTO.md) | Details of the updated text fragment | 

### Return type

[**TextFragmentDataDTO**](TextFragmentDataDTO.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/_*+json
- **Accept**: text/plain, application/json, text/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

