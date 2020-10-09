# \ArtefactApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**V1EditionsEditionIdArtefactGroupsArtefactGroupIdDelete**](ArtefactApi.md#V1EditionsEditionIdArtefactGroupsArtefactGroupIdDelete) | **Delete** /v1/editions/{editionId}/artefact-groups/{artefactGroupId} | Deletes the specified artefact group.
[**V1EditionsEditionIdArtefactGroupsArtefactGroupIdGet**](ArtefactApi.md#V1EditionsEditionIdArtefactGroupsArtefactGroupIdGet) | **Get** /v1/editions/{editionId}/artefact-groups/{artefactGroupId} | Gets the details of a specific artefact group in the edition
[**V1EditionsEditionIdArtefactGroupsArtefactGroupIdPut**](ArtefactApi.md#V1EditionsEditionIdArtefactGroupsArtefactGroupIdPut) | **Put** /v1/editions/{editionId}/artefact-groups/{artefactGroupId} | Updates the details of an artefact group.  The artefact group will now only contain the artefacts listed in the JSON payload.  If the name is null, no change will be made, otherwise the name will also be updated.
[**V1EditionsEditionIdArtefactGroupsGet**](ArtefactApi.md#V1EditionsEditionIdArtefactGroupsGet) | **Get** /v1/editions/{editionId}/artefact-groups | Gets a listing of all artefact groups in the edition
[**V1EditionsEditionIdArtefactGroupsPost**](ArtefactApi.md#V1EditionsEditionIdArtefactGroupsPost) | **Post** /v1/editions/{editionId}/artefact-groups | Creates a new artefact group with the submitted data.  The new artefact must have a list of artefacts that belong to the group.  It is not necessary to give the group a name.
[**V1EditionsEditionIdArtefactsArtefactIdDelete**](ArtefactApi.md#V1EditionsEditionIdArtefactsArtefactIdDelete) | **Delete** /v1/editions/{editionId}/artefacts/{artefactId} | Deletes the specified artefact
[**V1EditionsEditionIdArtefactsArtefactIdGet**](ArtefactApi.md#V1EditionsEditionIdArtefactsArtefactIdGet) | **Get** /v1/editions/{editionId}/artefacts/{artefactId} | Provides a listing of all artefacts that are part of the specified edition
[**V1EditionsEditionIdArtefactsArtefactIdPut**](ArtefactApi.md#V1EditionsEditionIdArtefactsArtefactIdPut) | **Put** /v1/editions/{editionId}/artefacts/{artefactId} | Updates the specified artefact.  There are many possible attributes that can be changed for  an artefact.  The caller should only input only those that  should be changed. Attributes with a null value will be ignored.  For instance, setting the mask to null or \&quot;\&quot; will result in  no changes to the current mask, and no value for the mask will  be returned (or broadcast). Likewise, the transformation, name,  or status message may be set to null and no change will be made  to those entities (though any unchanged values will be returned  along with the changed values and also broadcast to co-editors).
[**V1EditionsEditionIdArtefactsArtefactIdRoisGet**](ArtefactApi.md#V1EditionsEditionIdArtefactsArtefactIdRoisGet) | **Get** /v1/editions/{editionId}/artefacts/{artefactId}/rois | Provides a listing of all rois belonging to an artefact in the specified edition
[**V1EditionsEditionIdArtefactsArtefactIdTextFragmentsGet**](ArtefactApi.md#V1EditionsEditionIdArtefactsArtefactIdTextFragmentsGet) | **Get** /v1/editions/{editionId}/artefacts/{artefactId}/text-fragments | Provides a listing of text fragments that have text in the specified artefact.  With the optional query parameter \&quot;suggested\&quot;, this endpoint will also return  any text fragment that the system suggests might have text in the artefact.
[**V1EditionsEditionIdArtefactsBatchTransformationPost**](ArtefactApi.md#V1EditionsEditionIdArtefactsBatchTransformationPost) | **Post** /v1/editions/{editionId}/artefacts/batch-transformation | Updates the positional data for a batch of artefacts
[**V1EditionsEditionIdArtefactsGet**](ArtefactApi.md#V1EditionsEditionIdArtefactsGet) | **Get** /v1/editions/{editionId}/artefacts | Provides a listing of all artefacts that are part of the specified edition
[**V1EditionsEditionIdArtefactsPost**](ArtefactApi.md#V1EditionsEditionIdArtefactsPost) | **Post** /v1/editions/{editionId}/artefacts | Creates a new artefact with the provided data.  If no mask is provided, a placeholder mask will be created with the values:  \&quot;POLYGON((0 0,1 1,1 0,0 0))\&quot; (the system requires a valid WKT polygon mask for  every artefact). It is not recommended to leave the mask, name, or work status  blank or null. It will often be advantageous to leave the transformation null  when first creating a new artefact.



## V1EditionsEditionIdArtefactGroupsArtefactGroupIdDelete

> DeleteDTO V1EditionsEditionIdArtefactGroupsArtefactGroupIdDelete(ctx, editionId, artefactGroupId).Execute()

Deletes the specified artefact group.

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
    artefactGroupId := 987 // int32 | Unique Id of the artefact group to be deleted

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.ArtefactApi.V1EditionsEditionIdArtefactGroupsArtefactGroupIdDelete(context.Background(), editionId, artefactGroupId).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ArtefactApi.V1EditionsEditionIdArtefactGroupsArtefactGroupIdDelete``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `V1EditionsEditionIdArtefactGroupsArtefactGroupIdDelete`: DeleteDTO
    fmt.Fprintf(os.Stdout, "Response from `ArtefactApi.V1EditionsEditionIdArtefactGroupsArtefactGroupIdDelete`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**editionId** | **int32** | Unique Id of the desired edition | 
**artefactGroupId** | **int32** | Unique Id of the artefact group to be deleted | 

### Other Parameters

Other parameters are passed through a pointer to a apiV1EditionsEditionIdArtefactGroupsArtefactGroupIdDeleteRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



### Return type

[**DeleteDTO**](DeleteDTO.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## V1EditionsEditionIdArtefactGroupsArtefactGroupIdGet

> ArtefactGroupDTO V1EditionsEditionIdArtefactGroupsArtefactGroupIdGet(ctx, editionId, artefactGroupId).Execute()

Gets the details of a specific artefact group in the edition

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
    artefactGroupId := 987 // int32 | Id of the desired artefact group

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.ArtefactApi.V1EditionsEditionIdArtefactGroupsArtefactGroupIdGet(context.Background(), editionId, artefactGroupId).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ArtefactApi.V1EditionsEditionIdArtefactGroupsArtefactGroupIdGet``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `V1EditionsEditionIdArtefactGroupsArtefactGroupIdGet`: ArtefactGroupDTO
    fmt.Fprintf(os.Stdout, "Response from `ArtefactApi.V1EditionsEditionIdArtefactGroupsArtefactGroupIdGet`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**editionId** | **int32** | Unique Id of the desired edition | 
**artefactGroupId** | **int32** | Id of the desired artefact group | 

### Other Parameters

Other parameters are passed through a pointer to a apiV1EditionsEditionIdArtefactGroupsArtefactGroupIdGetRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



### Return type

[**ArtefactGroupDTO**](ArtefactGroupDTO.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## V1EditionsEditionIdArtefactGroupsArtefactGroupIdPut

> ArtefactGroupDTO V1EditionsEditionIdArtefactGroupsArtefactGroupIdPut(ctx, editionId, artefactGroupId).UpdateArtefactGroupDTO(updateArtefactGroupDTO).Execute()

Updates the details of an artefact group.  The artefact group will now only contain the artefacts listed in the JSON payload.  If the name is null, no change will be made, otherwise the name will also be updated.

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
    artefactGroupId := 987 // int32 | Id of the artefact group to be updated
    updateArtefactGroupDTO := openapiclient.UpdateArtefactGroupDTO{Name: "Name_example", Artefacts: []int32{123)} // UpdateArtefactGroupDTO | Parameters that the artefact group should be changed to (optional)

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.ArtefactApi.V1EditionsEditionIdArtefactGroupsArtefactGroupIdPut(context.Background(), editionId, artefactGroupId).UpdateArtefactGroupDTO(updateArtefactGroupDTO).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ArtefactApi.V1EditionsEditionIdArtefactGroupsArtefactGroupIdPut``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `V1EditionsEditionIdArtefactGroupsArtefactGroupIdPut`: ArtefactGroupDTO
    fmt.Fprintf(os.Stdout, "Response from `ArtefactApi.V1EditionsEditionIdArtefactGroupsArtefactGroupIdPut`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**editionId** | **int32** | Unique Id of the desired edition | 
**artefactGroupId** | **int32** | Id of the artefact group to be updated | 

### Other Parameters

Other parameters are passed through a pointer to a apiV1EditionsEditionIdArtefactGroupsArtefactGroupIdPutRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **updateArtefactGroupDTO** | [**UpdateArtefactGroupDTO**](UpdateArtefactGroupDTO.md) | Parameters that the artefact group should be changed to | 

### Return type

[**ArtefactGroupDTO**](ArtefactGroupDTO.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/_*+json
- **Accept**: text/plain, application/json, text/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## V1EditionsEditionIdArtefactGroupsGet

> ArtefactGroupListDTO V1EditionsEditionIdArtefactGroupsGet(ctx, editionId).Execute()

Gets a listing of all artefact groups in the edition

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

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.ArtefactApi.V1EditionsEditionIdArtefactGroupsGet(context.Background(), editionId).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ArtefactApi.V1EditionsEditionIdArtefactGroupsGet``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `V1EditionsEditionIdArtefactGroupsGet`: ArtefactGroupListDTO
    fmt.Fprintf(os.Stdout, "Response from `ArtefactApi.V1EditionsEditionIdArtefactGroupsGet`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**editionId** | **int32** | Unique Id of the desired edition | 

### Other Parameters

Other parameters are passed through a pointer to a apiV1EditionsEditionIdArtefactGroupsGetRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**ArtefactGroupListDTO**](ArtefactGroupListDTO.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## V1EditionsEditionIdArtefactGroupsPost

> ArtefactGroupDTO V1EditionsEditionIdArtefactGroupsPost(ctx, editionId).CreateArtefactGroupDTO(createArtefactGroupDTO).Execute()

Creates a new artefact group with the submitted data.  The new artefact must have a list of artefacts that belong to the group.  It is not necessary to give the group a name.

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
    createArtefactGroupDTO := openapiclient.CreateArtefactGroupDTO{Name: "Name_example", Artefacts: []int32{123)} // CreateArtefactGroupDTO | Parameters of the new artefact group (optional)

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.ArtefactApi.V1EditionsEditionIdArtefactGroupsPost(context.Background(), editionId).CreateArtefactGroupDTO(createArtefactGroupDTO).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ArtefactApi.V1EditionsEditionIdArtefactGroupsPost``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `V1EditionsEditionIdArtefactGroupsPost`: ArtefactGroupDTO
    fmt.Fprintf(os.Stdout, "Response from `ArtefactApi.V1EditionsEditionIdArtefactGroupsPost`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**editionId** | **int32** | Unique Id of the desired edition | 

### Other Parameters

Other parameters are passed through a pointer to a apiV1EditionsEditionIdArtefactGroupsPostRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **createArtefactGroupDTO** | [**CreateArtefactGroupDTO**](CreateArtefactGroupDTO.md) | Parameters of the new artefact group | 

### Return type

[**ArtefactGroupDTO**](ArtefactGroupDTO.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/_*+json
- **Accept**: text/plain, application/json, text/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## V1EditionsEditionIdArtefactsArtefactIdDelete

> V1EditionsEditionIdArtefactsArtefactIdDelete(ctx, editionId, artefactId).Execute()

Deletes the specified artefact

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
    artefactId := 987 // int32 | Unique Id of the desired artefact

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.ArtefactApi.V1EditionsEditionIdArtefactsArtefactIdDelete(context.Background(), editionId, artefactId).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ArtefactApi.V1EditionsEditionIdArtefactsArtefactIdDelete``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**editionId** | **int32** | Unique Id of the desired edition | 
**artefactId** | **int32** | Unique Id of the desired artefact | 

### Other Parameters

Other parameters are passed through a pointer to a apiV1EditionsEditionIdArtefactsArtefactIdDeleteRequest struct via the builder pattern


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


## V1EditionsEditionIdArtefactsArtefactIdGet

> ArtefactDTO V1EditionsEditionIdArtefactsArtefactIdGet(ctx, editionId, artefactId).Optional(optional).Execute()

Provides a listing of all artefacts that are part of the specified edition

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
    artefactId := 987 // int32 | Unique Id of the desired artefact
    optional := []string{"Inner_example"} // []string | Add \"masks\" to include artefact polygons and \"images\" to include image data (optional)

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.ArtefactApi.V1EditionsEditionIdArtefactsArtefactIdGet(context.Background(), editionId, artefactId).Optional(optional).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ArtefactApi.V1EditionsEditionIdArtefactsArtefactIdGet``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `V1EditionsEditionIdArtefactsArtefactIdGet`: ArtefactDTO
    fmt.Fprintf(os.Stdout, "Response from `ArtefactApi.V1EditionsEditionIdArtefactsArtefactIdGet`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**editionId** | **int32** | Unique Id of the desired edition | 
**artefactId** | **int32** | Unique Id of the desired artefact | 

### Other Parameters

Other parameters are passed through a pointer to a apiV1EditionsEditionIdArtefactsArtefactIdGetRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **optional** | [**[]string**](string.md) | Add \&quot;masks\&quot; to include artefact polygons and \&quot;images\&quot; to include image data | 

### Return type

[**ArtefactDTO**](ArtefactDTO.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## V1EditionsEditionIdArtefactsArtefactIdPut

> ArtefactDTO V1EditionsEditionIdArtefactsArtefactIdPut(ctx, editionId, artefactId).UpdateArtefactDTO(updateArtefactDTO).Execute()

Updates the specified artefact.  There are many possible attributes that can be changed for  an artefact.  The caller should only input only those that  should be changed. Attributes with a null value will be ignored.  For instance, setting the mask to null or \"\" will result in  no changes to the current mask, and no value for the mask will  be returned (or broadcast). Likewise, the transformation, name,  or status message may be set to null and no change will be made  to those entities (though any unchanged values will be returned  along with the changed values and also broadcast to co-editors).

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
    artefactId := 987 // int32 | Unique Id of the desired artefact
    updateArtefactDTO := openapiclient.UpdateArtefactDTO{Mask: "Mask_example", Placement: openapiclient.PlacementDTO{Scale: 123, Rotate: 123, ZIndex: 123, Translate: openapiclient.TranslateDTO{X: 123, Y: 123}}, Name: "Name_example", StatusMessage: "StatusMessage_example"} // UpdateArtefactDTO | An UpdateArtefactDTO with the desired alterations to the artefact (optional)

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.ArtefactApi.V1EditionsEditionIdArtefactsArtefactIdPut(context.Background(), editionId, artefactId).UpdateArtefactDTO(updateArtefactDTO).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ArtefactApi.V1EditionsEditionIdArtefactsArtefactIdPut``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `V1EditionsEditionIdArtefactsArtefactIdPut`: ArtefactDTO
    fmt.Fprintf(os.Stdout, "Response from `ArtefactApi.V1EditionsEditionIdArtefactsArtefactIdPut`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**editionId** | **int32** | Unique Id of the desired edition | 
**artefactId** | **int32** | Unique Id of the desired artefact | 

### Other Parameters

Other parameters are passed through a pointer to a apiV1EditionsEditionIdArtefactsArtefactIdPutRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **updateArtefactDTO** | [**UpdateArtefactDTO**](UpdateArtefactDTO.md) | An UpdateArtefactDTO with the desired alterations to the artefact | 

### Return type

[**ArtefactDTO**](ArtefactDTO.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/_*+json
- **Accept**: text/plain, application/json, text/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## V1EditionsEditionIdArtefactsArtefactIdRoisGet

> InterpretationRoiDTOList V1EditionsEditionIdArtefactsArtefactIdRoisGet(ctx, editionId, artefactId).Execute()

Provides a listing of all rois belonging to an artefact in the specified edition

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
    artefactId := 987 // int32 | Unique Id of the desired artefact

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.ArtefactApi.V1EditionsEditionIdArtefactsArtefactIdRoisGet(context.Background(), editionId, artefactId).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ArtefactApi.V1EditionsEditionIdArtefactsArtefactIdRoisGet``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `V1EditionsEditionIdArtefactsArtefactIdRoisGet`: InterpretationRoiDTOList
    fmt.Fprintf(os.Stdout, "Response from `ArtefactApi.V1EditionsEditionIdArtefactsArtefactIdRoisGet`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**editionId** | **int32** | Unique Id of the desired edition | 
**artefactId** | **int32** | Unique Id of the desired artefact | 

### Other Parameters

Other parameters are passed through a pointer to a apiV1EditionsEditionIdArtefactsArtefactIdRoisGetRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



### Return type

[**InterpretationRoiDTOList**](InterpretationRoiDTOList.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## V1EditionsEditionIdArtefactsArtefactIdTextFragmentsGet

> ArtefactTextFragmentMatchListDTO V1EditionsEditionIdArtefactsArtefactIdTextFragmentsGet(ctx, editionId, artefactId).Optional(optional).Execute()

Provides a listing of text fragments that have text in the specified artefact.  With the optional query parameter \"suggested\", this endpoint will also return  any text fragment that the system suggests might have text in the artefact.

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
    artefactId := 987 // int32 | Unique Id of the desired artefact
    optional := []string{"Inner_example"} // []string | Add \"suggested\" to include possible matches suggested by the system (optional)

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.ArtefactApi.V1EditionsEditionIdArtefactsArtefactIdTextFragmentsGet(context.Background(), editionId, artefactId).Optional(optional).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ArtefactApi.V1EditionsEditionIdArtefactsArtefactIdTextFragmentsGet``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `V1EditionsEditionIdArtefactsArtefactIdTextFragmentsGet`: ArtefactTextFragmentMatchListDTO
    fmt.Fprintf(os.Stdout, "Response from `ArtefactApi.V1EditionsEditionIdArtefactsArtefactIdTextFragmentsGet`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**editionId** | **int32** | Unique Id of the desired edition | 
**artefactId** | **int32** | Unique Id of the desired artefact | 

### Other Parameters

Other parameters are passed through a pointer to a apiV1EditionsEditionIdArtefactsArtefactIdTextFragmentsGetRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **optional** | [**[]string**](string.md) | Add \&quot;suggested\&quot; to include possible matches suggested by the system | 

### Return type

[**ArtefactTextFragmentMatchListDTO**](ArtefactTextFragmentMatchListDTO.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## V1EditionsEditionIdArtefactsBatchTransformationPost

> BatchUpdatedArtefactTransformDTO V1EditionsEditionIdArtefactsBatchTransformationPost(ctx, editionId).BatchUpdateArtefactPlacementDTO(batchUpdateArtefactPlacementDTO).Execute()

Updates the positional data for a batch of artefacts

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
    batchUpdateArtefactPlacementDTO := openapiclient.BatchUpdateArtefactPlacementDTO{ArtefactPlacements: []UpdateArtefactPlacementDTO{openapiclient.UpdateArtefactPlacementDTO{ArtefactId: 123, IsPlaced: false, Placement: openapiclient.PlacementDTO{Scale: 123, Rotate: 123, ZIndex: 123, Translate: openapiclient.TranslateDTO{X: 123, Y: 123}}})} // BatchUpdateArtefactPlacementDTO | A BatchUpdateArtefactTransformDTO with a list of the desired updates (optional)

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.ArtefactApi.V1EditionsEditionIdArtefactsBatchTransformationPost(context.Background(), editionId).BatchUpdateArtefactPlacementDTO(batchUpdateArtefactPlacementDTO).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ArtefactApi.V1EditionsEditionIdArtefactsBatchTransformationPost``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `V1EditionsEditionIdArtefactsBatchTransformationPost`: BatchUpdatedArtefactTransformDTO
    fmt.Fprintf(os.Stdout, "Response from `ArtefactApi.V1EditionsEditionIdArtefactsBatchTransformationPost`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**editionId** | **int32** | Unique Id of the desired edition | 

### Other Parameters

Other parameters are passed through a pointer to a apiV1EditionsEditionIdArtefactsBatchTransformationPostRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **batchUpdateArtefactPlacementDTO** | [**BatchUpdateArtefactPlacementDTO**](BatchUpdateArtefactPlacementDTO.md) | A BatchUpdateArtefactTransformDTO with a list of the desired updates | 

### Return type

[**BatchUpdatedArtefactTransformDTO**](BatchUpdatedArtefactTransformDTO.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/_*+json
- **Accept**: text/plain, application/json, text/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## V1EditionsEditionIdArtefactsGet

> ArtefactListDTO V1EditionsEditionIdArtefactsGet(ctx, editionId).Optional(optional).Execute()

Provides a listing of all artefacts that are part of the specified edition

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
    optional := []string{"Inner_example"} // []string | Add \"masks\" to include artefact polygons and \"images\" to include image data (optional)

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.ArtefactApi.V1EditionsEditionIdArtefactsGet(context.Background(), editionId).Optional(optional).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ArtefactApi.V1EditionsEditionIdArtefactsGet``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `V1EditionsEditionIdArtefactsGet`: ArtefactListDTO
    fmt.Fprintf(os.Stdout, "Response from `ArtefactApi.V1EditionsEditionIdArtefactsGet`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**editionId** | **int32** | Unique Id of the desired edition | 

### Other Parameters

Other parameters are passed through a pointer to a apiV1EditionsEditionIdArtefactsGetRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **optional** | [**[]string**](string.md) | Add \&quot;masks\&quot; to include artefact polygons and \&quot;images\&quot; to include image data | 

### Return type

[**ArtefactListDTO**](ArtefactListDTO.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## V1EditionsEditionIdArtefactsPost

> ArtefactDTO V1EditionsEditionIdArtefactsPost(ctx, editionId).CreateArtefactDTO(createArtefactDTO).Execute()

Creates a new artefact with the provided data.  If no mask is provided, a placeholder mask will be created with the values:  \"POLYGON((0 0,1 1,1 0,0 0))\" (the system requires a valid WKT polygon mask for  every artefact). It is not recommended to leave the mask, name, or work status  blank or null. It will often be advantageous to leave the transformation null  when first creating a new artefact.

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
    createArtefactDTO := openapiclient.CreateArtefactDTO{MasterImageId: 123, Mask: "Mask_example", Placement: , Name: "Name_example", StatusMessage: "StatusMessage_example"} // CreateArtefactDTO | A CreateArtefactDTO with the data for the new artefact (optional)

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.ArtefactApi.V1EditionsEditionIdArtefactsPost(context.Background(), editionId).CreateArtefactDTO(createArtefactDTO).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ArtefactApi.V1EditionsEditionIdArtefactsPost``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `V1EditionsEditionIdArtefactsPost`: ArtefactDTO
    fmt.Fprintf(os.Stdout, "Response from `ArtefactApi.V1EditionsEditionIdArtefactsPost`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**editionId** | **int32** | Unique Id of the desired edition | 

### Other Parameters

Other parameters are passed through a pointer to a apiV1EditionsEditionIdArtefactsPostRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **createArtefactDTO** | [**CreateArtefactDTO**](CreateArtefactDTO.md) | A CreateArtefactDTO with the data for the new artefact | 

### Return type

[**ArtefactDTO**](ArtefactDTO.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/_*+json
- **Accept**: text/plain, application/json, text/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

