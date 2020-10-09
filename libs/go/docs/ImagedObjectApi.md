# \ImagedObjectApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**V1EditionsEditionIdImagedObjectsGet**](ImagedObjectApi.md#V1EditionsEditionIdImagedObjectsGet) | **Get** /v1/editions/{editionId}/imaged-objects | Provides a listing of imaged objects related to the specified edition, can include images and also their masks with  optional.
[**V1EditionsEditionIdImagedObjectsImagedObjectIdGet**](ImagedObjectApi.md#V1EditionsEditionIdImagedObjectsImagedObjectIdGet) | **Get** /v1/editions/{editionId}/imaged-objects/{imagedObjectId} | Provides information for the specified imaged object related to the specified edition, can include images and also  their masks with optional.
[**V1ImagedObjectsImagedObjectIdGet**](ImagedObjectApi.md#V1ImagedObjectsImagedObjectIdGet) | **Get** /v1/imaged-objects/{imagedObjectId} | Provides information for the specified imaged object.
[**V1ImagedObjectsImagedObjectIdTextFragmentsGet**](ImagedObjectApi.md#V1ImagedObjectsImagedObjectIdTextFragmentsGet) | **Get** /v1/imaged-objects/{imagedObjectId}/text-fragments | Provides a list of all text fragments that should correspond to the imaged object.
[**V1ImagedObjectsInstitutionsGet**](ImagedObjectApi.md#V1ImagedObjectsInstitutionsGet) | **Get** /v1/imaged-objects/institutions | Provides a list of all institutional image providers.
[**V1ImagedObjectsInstitutionsInstitutionNameGet**](ImagedObjectApi.md#V1ImagedObjectsInstitutionsInstitutionNameGet) | **Get** /v1/imaged-objects/institutions/{institutionName} | Provides a list of all institutional image providers.



## V1EditionsEditionIdImagedObjectsGet

> ImagedObjectListDTO V1EditionsEditionIdImagedObjectsGet(ctx, editionId).Optional(optional).Execute()

Provides a listing of imaged objects related to the specified edition, can include images and also their masks with  optional.

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
    editionId := 987 // int32 | Unique Id of the desired edition
    optional := []string{"Inner_example"} // []string | Set 'artefacts' to receive related artefact data and 'masks' to include the artefact masks (optional)

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.ImagedObjectApi.V1EditionsEditionIdImagedObjectsGet(context.Background(), editionId).Optional(optional).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ImagedObjectApi.V1EditionsEditionIdImagedObjectsGet``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `V1EditionsEditionIdImagedObjectsGet`: ImagedObjectListDTO
    fmt.Fprintf(os.Stdout, "Response from `ImagedObjectApi.V1EditionsEditionIdImagedObjectsGet`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**editionId** | **int32** | Unique Id of the desired edition | 

### Other Parameters

Other parameters are passed through a pointer to a apiV1EditionsEditionIdImagedObjectsGetRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **optional** | [**[]string**](string.md) | Set &#39;artefacts&#39; to receive related artefact data and &#39;masks&#39; to include the artefact masks | 

### Return type

[**ImagedObjectListDTO**](ImagedObjectListDTO.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## V1EditionsEditionIdImagedObjectsImagedObjectIdGet

> ImagedObjectDTO V1EditionsEditionIdImagedObjectsImagedObjectIdGet(ctx, editionId, imagedObjectId).Optional(optional).Execute()

Provides information for the specified imaged object related to the specified edition, can include images and also  their masks with optional.

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
    editionId := 987 // int32 | Unique Id of the desired edition
    imagedObjectId := "imagedObjectId_example" // string | Unique Id of the desired object from the imaging Institution
    optional := []string{"Inner_example"} // []string | Set 'artefacts' to receive related artefact data and 'masks' to include the artefact masks (optional)

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.ImagedObjectApi.V1EditionsEditionIdImagedObjectsImagedObjectIdGet(context.Background(), editionId, imagedObjectId).Optional(optional).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ImagedObjectApi.V1EditionsEditionIdImagedObjectsImagedObjectIdGet``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `V1EditionsEditionIdImagedObjectsImagedObjectIdGet`: ImagedObjectDTO
    fmt.Fprintf(os.Stdout, "Response from `ImagedObjectApi.V1EditionsEditionIdImagedObjectsImagedObjectIdGet`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**editionId** | **int32** | Unique Id of the desired edition | 
**imagedObjectId** | **string** | Unique Id of the desired object from the imaging Institution | 

### Other Parameters

Other parameters are passed through a pointer to a apiV1EditionsEditionIdImagedObjectsImagedObjectIdGetRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **optional** | [**[]string**](string.md) | Set &#39;artefacts&#39; to receive related artefact data and &#39;masks&#39; to include the artefact masks | 

### Return type

[**ImagedObjectDTO**](ImagedObjectDTO.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## V1ImagedObjectsImagedObjectIdGet

> SimpleImageListDTO V1ImagedObjectsImagedObjectIdGet(ctx, imagedObjectId).Execute()

Provides information for the specified imaged object.

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
    imagedObjectId := "imagedObjectId_example" // string | Unique Id of the desired object from the imaging Institution

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.ImagedObjectApi.V1ImagedObjectsImagedObjectIdGet(context.Background(), imagedObjectId).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ImagedObjectApi.V1ImagedObjectsImagedObjectIdGet``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `V1ImagedObjectsImagedObjectIdGet`: SimpleImageListDTO
    fmt.Fprintf(os.Stdout, "Response from `ImagedObjectApi.V1ImagedObjectsImagedObjectIdGet`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**imagedObjectId** | **string** | Unique Id of the desired object from the imaging Institution | 

### Other Parameters

Other parameters are passed through a pointer to a apiV1ImagedObjectsImagedObjectIdGetRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**SimpleImageListDTO**](SimpleImageListDTO.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## V1ImagedObjectsImagedObjectIdTextFragmentsGet

> ImagedObjectTextFragmentMatchListDTO V1ImagedObjectsImagedObjectIdTextFragmentsGet(ctx, imagedObjectId).Execute()

Provides a list of all text fragments that should correspond to the imaged object.

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
    imagedObjectId := "imagedObjectId_example" // string | Id of the imaged object

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.ImagedObjectApi.V1ImagedObjectsImagedObjectIdTextFragmentsGet(context.Background(), imagedObjectId).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ImagedObjectApi.V1ImagedObjectsImagedObjectIdTextFragmentsGet``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `V1ImagedObjectsImagedObjectIdTextFragmentsGet`: ImagedObjectTextFragmentMatchListDTO
    fmt.Fprintf(os.Stdout, "Response from `ImagedObjectApi.V1ImagedObjectsImagedObjectIdTextFragmentsGet`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**imagedObjectId** | **string** | Id of the imaged object | 

### Other Parameters

Other parameters are passed through a pointer to a apiV1ImagedObjectsImagedObjectIdTextFragmentsGetRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**ImagedObjectTextFragmentMatchListDTO**](ImagedObjectTextFragmentMatchListDTO.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## V1ImagedObjectsInstitutionsGet

> ImageInstitutionListDTO V1ImagedObjectsInstitutionsGet(ctx).Execute()

Provides a list of all institutional image providers.

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

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.ImagedObjectApi.V1ImagedObjectsInstitutionsGet(context.Background()).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ImagedObjectApi.V1ImagedObjectsInstitutionsGet``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `V1ImagedObjectsInstitutionsGet`: ImageInstitutionListDTO
    fmt.Fprintf(os.Stdout, "Response from `ImagedObjectApi.V1ImagedObjectsInstitutionsGet`: %v\n", resp)
}
```

### Path Parameters

This endpoint does not need any parameter.

### Other Parameters

Other parameters are passed through a pointer to a apiV1ImagedObjectsInstitutionsGetRequest struct via the builder pattern


### Return type

[**ImageInstitutionListDTO**](ImageInstitutionListDTO.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## V1ImagedObjectsInstitutionsInstitutionNameGet

> InstitutionalImageListDTO V1ImagedObjectsInstitutionsInstitutionNameGet(ctx, institutionName).Execute()

Provides a list of all institutional image providers.

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
    institutionName := "institutionName_example" // string | 

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.ImagedObjectApi.V1ImagedObjectsInstitutionsInstitutionNameGet(context.Background(), institutionName).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ImagedObjectApi.V1ImagedObjectsInstitutionsInstitutionNameGet``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `V1ImagedObjectsInstitutionsInstitutionNameGet`: InstitutionalImageListDTO
    fmt.Fprintf(os.Stdout, "Response from `ImagedObjectApi.V1ImagedObjectsInstitutionsInstitutionNameGet`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**institutionName** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiV1ImagedObjectsInstitutionsInstitutionNameGetRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**InstitutionalImageListDTO**](InstitutionalImageListDTO.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

