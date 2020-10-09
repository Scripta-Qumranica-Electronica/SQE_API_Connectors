# \SignInterpretationApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**V1EditionsEditionIdSignInterpretationsAttributesAttributeIdDelete**](SignInterpretationApi.md#V1EditionsEditionIdSignInterpretationsAttributesAttributeIdDelete) | **Delete** /v1/editions/{editionId}/sign-interpretations-attributes/{attributeId} | Delete an attribute from an edition
[**V1EditionsEditionIdSignInterpretationsAttributesAttributeIdPut**](SignInterpretationApi.md#V1EditionsEditionIdSignInterpretationsAttributesAttributeIdPut) | **Put** /v1/editions/{editionId}/sign-interpretations-attributes/{attributeId} | Change the details of an attribute in an edition
[**V1EditionsEditionIdSignInterpretationsAttributesGet**](SignInterpretationApi.md#V1EditionsEditionIdSignInterpretationsAttributesGet) | **Get** /v1/editions/{editionId}/sign-interpretations-attributes | Retrieve a list of all possible attributes for an edition
[**V1EditionsEditionIdSignInterpretationsAttributesPost**](SignInterpretationApi.md#V1EditionsEditionIdSignInterpretationsAttributesPost) | **Post** /v1/editions/{editionId}/sign-interpretations-attributes | Create a new attribute for an edition
[**V1EditionsEditionIdSignInterpretationsPost**](SignInterpretationApi.md#V1EditionsEditionIdSignInterpretationsPost) | **Post** /v1/editions/{editionId}/sign-interpretations | Creates a new sign interpretation
[**V1EditionsEditionIdSignInterpretationsSignInterpretationIdAttributesAttributeValueIdDelete**](SignInterpretationApi.md#V1EditionsEditionIdSignInterpretationsSignInterpretationIdAttributesAttributeValueIdDelete) | **Delete** /v1/editions/{editionId}/sign-interpretations/{signInterpretationId}/attributes/{attributeValueId} | This deletes the specified attribute value from the specified sign interpretation.
[**V1EditionsEditionIdSignInterpretationsSignInterpretationIdAttributesAttributeValueIdPut**](SignInterpretationApi.md#V1EditionsEditionIdSignInterpretationsSignInterpretationIdAttributesAttributeValueIdPut) | **Put** /v1/editions/{editionId}/sign-interpretations/{signInterpretationId}/attributes/{attributeValueId} | This changes the values of the specified sign interpretation attribute,  mainly used to change commentary.
[**V1EditionsEditionIdSignInterpretationsSignInterpretationIdAttributesPost**](SignInterpretationApi.md#V1EditionsEditionIdSignInterpretationsSignInterpretationIdAttributesPost) | **Post** /v1/editions/{editionId}/sign-interpretations/{signInterpretationId}/attributes | This adds a new attribute to the specified sign interpretation.
[**V1EditionsEditionIdSignInterpretationsSignInterpretationIdCommentaryPut**](SignInterpretationApi.md#V1EditionsEditionIdSignInterpretationsSignInterpretationIdCommentaryPut) | **Put** /v1/editions/{editionId}/sign-interpretations/{signInterpretationId}/commentary | Updates the commentary of a sign interpretation
[**V1EditionsEditionIdSignInterpretationsSignInterpretationIdDelete**](SignInterpretationApi.md#V1EditionsEditionIdSignInterpretationsSignInterpretationIdDelete) | **Delete** /v1/editions/{editionId}/sign-interpretations/{signInterpretationId} | Deletes the sign interpretation in the route. The endpoint automatically manages the sign stream  by connecting all the deleted sign&#39;s next and previous nodes.
[**V1EditionsEditionIdSignInterpretationsSignInterpretationIdGet**](SignInterpretationApi.md#V1EditionsEditionIdSignInterpretationsSignInterpretationIdGet) | **Get** /v1/editions/{editionId}/sign-interpretations/{signInterpretationId} | Retrieve the details of a sign interpretation in an edition
[**V1EditionsEditionIdSignInterpretationsSignInterpretationIdLinkToNextSignInterpretationIdPost**](SignInterpretationApi.md#V1EditionsEditionIdSignInterpretationsSignInterpretationIdLinkToNextSignInterpretationIdPost) | **Post** /v1/editions/{editionId}/sign-interpretations/{signInterpretationId}/link-to/{nextSignInterpretationId} | Links two sign interpretations in the edition&#39;s sign stream
[**V1EditionsEditionIdSignInterpretationsSignInterpretationIdUnlinkFromNextSignInterpretationIdPost**](SignInterpretationApi.md#V1EditionsEditionIdSignInterpretationsSignInterpretationIdUnlinkFromNextSignInterpretationIdPost) | **Post** /v1/editions/{editionId}/sign-interpretations/{signInterpretationId}/unlink-from/{nextSignInterpretationId} | Links two sign interpretations in the edition&#39;s sign stream



## V1EditionsEditionIdSignInterpretationsAttributesAttributeIdDelete

> V1EditionsEditionIdSignInterpretationsAttributesAttributeIdDelete(ctx, editionId, attributeId).Execute()

Delete an attribute from an edition

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
    editionId := 987 // int32 | The ID of the edition being edited
    attributeId := 987 // int32 | The ID of the attribute to delete

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.SignInterpretationApi.V1EditionsEditionIdSignInterpretationsAttributesAttributeIdDelete(context.Background(), editionId, attributeId).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `SignInterpretationApi.V1EditionsEditionIdSignInterpretationsAttributesAttributeIdDelete``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**editionId** | **int32** | The ID of the edition being edited | 
**attributeId** | **int32** | The ID of the attribute to delete | 

### Other Parameters

Other parameters are passed through a pointer to a apiV1EditionsEditionIdSignInterpretationsAttributesAttributeIdDeleteRequest struct via the builder pattern


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


## V1EditionsEditionIdSignInterpretationsAttributesAttributeIdPut

> AttributeDTO V1EditionsEditionIdSignInterpretationsAttributesAttributeIdPut(ctx, editionId, attributeId).UpdateAttributeDTO(updateAttributeDTO).Execute()

Change the details of an attribute in an edition

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
    editionId := 987 // int32 | The ID of the edition being edited
    attributeId := 987 // int32 | The ID of the attribute to update
    updateAttributeDTO := openapiclient.UpdateAttributeDTO{CreateValues: []CreateAttributeValueDTO{openapiclient.CreateAttributeValueDTO{Value: "Value_example", Description: "Description_example", CssDirectives: "CssDirectives_example"}), UpdateValues: []UpdateAttributeValueDTO{openapiclient.UpdateAttributeValueDTO{Id: 123, Value: "Value_example", Description: "Description_example", CssDirectives: "CssDirectives_example"}), DeleteValues: []int32{123), Editable: false, Removable: false, Repeatable: false, BatchEditable: false} // UpdateAttributeDTO | The details of the updated attribute (optional)

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.SignInterpretationApi.V1EditionsEditionIdSignInterpretationsAttributesAttributeIdPut(context.Background(), editionId, attributeId).UpdateAttributeDTO(updateAttributeDTO).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `SignInterpretationApi.V1EditionsEditionIdSignInterpretationsAttributesAttributeIdPut``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `V1EditionsEditionIdSignInterpretationsAttributesAttributeIdPut`: AttributeDTO
    fmt.Fprintf(os.Stdout, "Response from `SignInterpretationApi.V1EditionsEditionIdSignInterpretationsAttributesAttributeIdPut`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**editionId** | **int32** | The ID of the edition being edited | 
**attributeId** | **int32** | The ID of the attribute to update | 

### Other Parameters

Other parameters are passed through a pointer to a apiV1EditionsEditionIdSignInterpretationsAttributesAttributeIdPutRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **updateAttributeDTO** | [**UpdateAttributeDTO**](UpdateAttributeDTO.md) | The details of the updated attribute | 

### Return type

[**AttributeDTO**](AttributeDTO.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/_*+json
- **Accept**: text/plain, application/json, text/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## V1EditionsEditionIdSignInterpretationsAttributesGet

> AttributeListDTO V1EditionsEditionIdSignInterpretationsAttributesGet(ctx, editionId).Execute()

Retrieve a list of all possible attributes for an edition

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
    editionId := 987 // int32 | The ID of the edition being searched

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.SignInterpretationApi.V1EditionsEditionIdSignInterpretationsAttributesGet(context.Background(), editionId).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `SignInterpretationApi.V1EditionsEditionIdSignInterpretationsAttributesGet``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `V1EditionsEditionIdSignInterpretationsAttributesGet`: AttributeListDTO
    fmt.Fprintf(os.Stdout, "Response from `SignInterpretationApi.V1EditionsEditionIdSignInterpretationsAttributesGet`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**editionId** | **int32** | The ID of the edition being searched | 

### Other Parameters

Other parameters are passed through a pointer to a apiV1EditionsEditionIdSignInterpretationsAttributesGetRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**AttributeListDTO**](AttributeListDTO.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## V1EditionsEditionIdSignInterpretationsAttributesPost

> AttributeDTO V1EditionsEditionIdSignInterpretationsAttributesPost(ctx, editionId).CreateAttributeDTO(createAttributeDTO).Execute()

Create a new attribute for an edition

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
    editionId := 987 // int32 | The ID of the edition being edited
    createAttributeDTO := openapiclient.CreateAttributeDTO{AttributeName: "AttributeName_example", Values: []CreateAttributeValueDTO{openapiclient.CreateAttributeValueDTO{Value: "Value_example", Description: "Description_example", CssDirectives: "CssDirectives_example"}), Description: "Description_example", Editable: false, Removable: false, Repeatable: false, BatchEditable: false} // CreateAttributeDTO | The details of the new attribute (optional)

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.SignInterpretationApi.V1EditionsEditionIdSignInterpretationsAttributesPost(context.Background(), editionId).CreateAttributeDTO(createAttributeDTO).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `SignInterpretationApi.V1EditionsEditionIdSignInterpretationsAttributesPost``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `V1EditionsEditionIdSignInterpretationsAttributesPost`: AttributeDTO
    fmt.Fprintf(os.Stdout, "Response from `SignInterpretationApi.V1EditionsEditionIdSignInterpretationsAttributesPost`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**editionId** | **int32** | The ID of the edition being edited | 

### Other Parameters

Other parameters are passed through a pointer to a apiV1EditionsEditionIdSignInterpretationsAttributesPostRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **createAttributeDTO** | [**CreateAttributeDTO**](CreateAttributeDTO.md) | The details of the new attribute | 

### Return type

[**AttributeDTO**](AttributeDTO.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/_*+json
- **Accept**: text/plain, application/json, text/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## V1EditionsEditionIdSignInterpretationsPost

> SignInterpretationListDTO V1EditionsEditionIdSignInterpretationsPost(ctx, editionId).SignInterpretationCreateDTO(signInterpretationCreateDTO).Execute()

Creates a new sign interpretation

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
    editionId := 987 // int32 | ID of the edition being changed
    signInterpretationCreateDTO := openapiclient.SignInterpretationCreateDTO{LineId: 123, PreviousSignInterpretationIds: []int32{123), NextSignInterpretationIds: []int32{123), Attributes: []InterpretationAttributeCreateDTO{openapiclient.InterpretationAttributeCreateDTO{Commentary: "Commentary_example", Sequence: 123, AttributeId: 123, AttributeValueId: 123}), Rois: []SetInterpretationRoiDTO{openapiclient.SetInterpretationRoiDTO{ArtefactId: 123, SignInterpretationId: 123, Shape: "Shape_example", Translate: openapiclient.TranslateDTO{X: 123, Y: 123}, StanceRotation: 123, Exceptional: false, ValuesSet: false}), Commentary: openapiclient.CommentaryCreateDTO{Commentary: "Commentary_example"}, BreakPreviousAndNextSignInterpretations: false, Character: "Character_example", IsVariant: false} // SignInterpretationCreateDTO | New sign interpretation data to be added (optional)

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.SignInterpretationApi.V1EditionsEditionIdSignInterpretationsPost(context.Background(), editionId).SignInterpretationCreateDTO(signInterpretationCreateDTO).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `SignInterpretationApi.V1EditionsEditionIdSignInterpretationsPost``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `V1EditionsEditionIdSignInterpretationsPost`: SignInterpretationListDTO
    fmt.Fprintf(os.Stdout, "Response from `SignInterpretationApi.V1EditionsEditionIdSignInterpretationsPost`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**editionId** | **int32** | ID of the edition being changed | 

### Other Parameters

Other parameters are passed through a pointer to a apiV1EditionsEditionIdSignInterpretationsPostRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **signInterpretationCreateDTO** | [**SignInterpretationCreateDTO**](SignInterpretationCreateDTO.md) | New sign interpretation data to be added | 

### Return type

[**SignInterpretationListDTO**](SignInterpretationListDTO.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/_*+json
- **Accept**: text/plain, application/json, text/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## V1EditionsEditionIdSignInterpretationsSignInterpretationIdAttributesAttributeValueIdDelete

> V1EditionsEditionIdSignInterpretationsSignInterpretationIdAttributesAttributeValueIdDelete(ctx, editionId, signInterpretationId, attributeValueId).Execute()

This deletes the specified attribute value from the specified sign interpretation.

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
    editionId := 987 // int32 | ID of the edition being changed
    signInterpretationId := 987 // int32 | ID of the sign interpretation being altered
    attributeValueId := 987 // int32 | Id of the attribute being removed

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.SignInterpretationApi.V1EditionsEditionIdSignInterpretationsSignInterpretationIdAttributesAttributeValueIdDelete(context.Background(), editionId, signInterpretationId, attributeValueId).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `SignInterpretationApi.V1EditionsEditionIdSignInterpretationsSignInterpretationIdAttributesAttributeValueIdDelete``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**editionId** | **int32** | ID of the edition being changed | 
**signInterpretationId** | **int32** | ID of the sign interpretation being altered | 
**attributeValueId** | **int32** | Id of the attribute being removed | 

### Other Parameters

Other parameters are passed through a pointer to a apiV1EditionsEditionIdSignInterpretationsSignInterpretationIdAttributesAttributeValueIdDeleteRequest struct via the builder pattern


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


## V1EditionsEditionIdSignInterpretationsSignInterpretationIdAttributesAttributeValueIdPut

> SignInterpretationDTO V1EditionsEditionIdSignInterpretationsSignInterpretationIdAttributesAttributeValueIdPut(ctx, editionId, signInterpretationId, attributeValueId).InterpretationAttributeCreateDTO(interpretationAttributeCreateDTO).Execute()

This changes the values of the specified sign interpretation attribute,  mainly used to change commentary.

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
    editionId := 987 // int32 | ID of the edition being changed
    signInterpretationId := 987 // int32 | ID of the sign interpretation being altered
    attributeValueId := 987 // int32 | Id of the attribute value to be altered
    interpretationAttributeCreateDTO := openapiclient.InterpretationAttributeCreateDTO{Commentary: "Commentary_example", Sequence: 123, AttributeId: 123, AttributeValueId: 123} // InterpretationAttributeCreateDTO | New details of the attribute (optional)

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.SignInterpretationApi.V1EditionsEditionIdSignInterpretationsSignInterpretationIdAttributesAttributeValueIdPut(context.Background(), editionId, signInterpretationId, attributeValueId).InterpretationAttributeCreateDTO(interpretationAttributeCreateDTO).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `SignInterpretationApi.V1EditionsEditionIdSignInterpretationsSignInterpretationIdAttributesAttributeValueIdPut``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `V1EditionsEditionIdSignInterpretationsSignInterpretationIdAttributesAttributeValueIdPut`: SignInterpretationDTO
    fmt.Fprintf(os.Stdout, "Response from `SignInterpretationApi.V1EditionsEditionIdSignInterpretationsSignInterpretationIdAttributesAttributeValueIdPut`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**editionId** | **int32** | ID of the edition being changed | 
**signInterpretationId** | **int32** | ID of the sign interpretation being altered | 
**attributeValueId** | **int32** | Id of the attribute value to be altered | 

### Other Parameters

Other parameters are passed through a pointer to a apiV1EditionsEditionIdSignInterpretationsSignInterpretationIdAttributesAttributeValueIdPutRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



 **interpretationAttributeCreateDTO** | [**InterpretationAttributeCreateDTO**](InterpretationAttributeCreateDTO.md) | New details of the attribute | 

### Return type

[**SignInterpretationDTO**](SignInterpretationDTO.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/_*+json
- **Accept**: text/plain, application/json, text/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## V1EditionsEditionIdSignInterpretationsSignInterpretationIdAttributesPost

> SignInterpretationDTO V1EditionsEditionIdSignInterpretationsSignInterpretationIdAttributesPost(ctx, editionId, signInterpretationId).InterpretationAttributeCreateDTO(interpretationAttributeCreateDTO).Execute()

This adds a new attribute to the specified sign interpretation.

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
    editionId := 987 // int32 | ID of the edition being changed
    signInterpretationId := 987 // int32 | ID of the sign interpretation for adding a new attribute
    interpretationAttributeCreateDTO :=  // InterpretationAttributeCreateDTO | Details of the attribute to be added (optional)

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.SignInterpretationApi.V1EditionsEditionIdSignInterpretationsSignInterpretationIdAttributesPost(context.Background(), editionId, signInterpretationId).InterpretationAttributeCreateDTO(interpretationAttributeCreateDTO).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `SignInterpretationApi.V1EditionsEditionIdSignInterpretationsSignInterpretationIdAttributesPost``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `V1EditionsEditionIdSignInterpretationsSignInterpretationIdAttributesPost`: SignInterpretationDTO
    fmt.Fprintf(os.Stdout, "Response from `SignInterpretationApi.V1EditionsEditionIdSignInterpretationsSignInterpretationIdAttributesPost`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**editionId** | **int32** | ID of the edition being changed | 
**signInterpretationId** | **int32** | ID of the sign interpretation for adding a new attribute | 

### Other Parameters

Other parameters are passed through a pointer to a apiV1EditionsEditionIdSignInterpretationsSignInterpretationIdAttributesPostRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **interpretationAttributeCreateDTO** | [**InterpretationAttributeCreateDTO**](InterpretationAttributeCreateDTO.md) | Details of the attribute to be added | 

### Return type

[**SignInterpretationDTO**](SignInterpretationDTO.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/_*+json
- **Accept**: text/plain, application/json, text/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## V1EditionsEditionIdSignInterpretationsSignInterpretationIdCommentaryPut

> SignInterpretationDTO V1EditionsEditionIdSignInterpretationsSignInterpretationIdCommentaryPut(ctx, editionId, signInterpretationId).CommentaryCreateDTO(commentaryCreateDTO).Execute()

Updates the commentary of a sign interpretation

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
    editionId := 987 // int32 | ID of the edition being changed
    signInterpretationId := 987 // int32 | ID of the sign interpretation whose commentary is being changed
    commentaryCreateDTO := openapiclient.CommentaryCreateDTO{Commentary: "Commentary_example"} // CommentaryCreateDTO | The new commentary for the sign interpretation (optional)

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.SignInterpretationApi.V1EditionsEditionIdSignInterpretationsSignInterpretationIdCommentaryPut(context.Background(), editionId, signInterpretationId).CommentaryCreateDTO(commentaryCreateDTO).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `SignInterpretationApi.V1EditionsEditionIdSignInterpretationsSignInterpretationIdCommentaryPut``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `V1EditionsEditionIdSignInterpretationsSignInterpretationIdCommentaryPut`: SignInterpretationDTO
    fmt.Fprintf(os.Stdout, "Response from `SignInterpretationApi.V1EditionsEditionIdSignInterpretationsSignInterpretationIdCommentaryPut`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**editionId** | **int32** | ID of the edition being changed | 
**signInterpretationId** | **int32** | ID of the sign interpretation whose commentary is being changed | 

### Other Parameters

Other parameters are passed through a pointer to a apiV1EditionsEditionIdSignInterpretationsSignInterpretationIdCommentaryPutRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **commentaryCreateDTO** | [**CommentaryCreateDTO**](CommentaryCreateDTO.md) | The new commentary for the sign interpretation | 

### Return type

[**SignInterpretationDTO**](SignInterpretationDTO.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/_*+json
- **Accept**: text/plain, application/json, text/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## V1EditionsEditionIdSignInterpretationsSignInterpretationIdDelete

> V1EditionsEditionIdSignInterpretationsSignInterpretationIdDelete(ctx, editionId, signInterpretationId).Execute()

Deletes the sign interpretation in the route. The endpoint automatically manages the sign stream  by connecting all the deleted sign's next and previous nodes.

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
    editionId := 987 // int32 | ID of the edition being changed
    signInterpretationId := 987 // int32 | ID of the sign interpretation being deleted

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.SignInterpretationApi.V1EditionsEditionIdSignInterpretationsSignInterpretationIdDelete(context.Background(), editionId, signInterpretationId).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `SignInterpretationApi.V1EditionsEditionIdSignInterpretationsSignInterpretationIdDelete``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**editionId** | **int32** | ID of the edition being changed | 
**signInterpretationId** | **int32** | ID of the sign interpretation being deleted | 

### Other Parameters

Other parameters are passed through a pointer to a apiV1EditionsEditionIdSignInterpretationsSignInterpretationIdDeleteRequest struct via the builder pattern


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


## V1EditionsEditionIdSignInterpretationsSignInterpretationIdGet

> SignInterpretationDTO V1EditionsEditionIdSignInterpretationsSignInterpretationIdGet(ctx, editionId, signInterpretationId).Execute()

Retrieve the details of a sign interpretation in an edition

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
    editionId := 987 // int32 | The ID of the edition being searched
    signInterpretationId := 987 // int32 | The desired sign interpretation id

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.SignInterpretationApi.V1EditionsEditionIdSignInterpretationsSignInterpretationIdGet(context.Background(), editionId, signInterpretationId).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `SignInterpretationApi.V1EditionsEditionIdSignInterpretationsSignInterpretationIdGet``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `V1EditionsEditionIdSignInterpretationsSignInterpretationIdGet`: SignInterpretationDTO
    fmt.Fprintf(os.Stdout, "Response from `SignInterpretationApi.V1EditionsEditionIdSignInterpretationsSignInterpretationIdGet`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**editionId** | **int32** | The ID of the edition being searched | 
**signInterpretationId** | **int32** | The desired sign interpretation id | 

### Other Parameters

Other parameters are passed through a pointer to a apiV1EditionsEditionIdSignInterpretationsSignInterpretationIdGetRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



### Return type

[**SignInterpretationDTO**](SignInterpretationDTO.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## V1EditionsEditionIdSignInterpretationsSignInterpretationIdLinkToNextSignInterpretationIdPost

> SignInterpretationDTO V1EditionsEditionIdSignInterpretationsSignInterpretationIdLinkToNextSignInterpretationIdPost(ctx, editionId, signInterpretationId, nextSignInterpretationId).Execute()

Links two sign interpretations in the edition's sign stream

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
    editionId := 987 // int32 | ID of the edition being changed
    signInterpretationId := 987 // int32 | The sign interpretation to be linked to the nextSignInterpretationId
    nextSignInterpretationId := 987 // int32 | The sign interpretation to become the new next sign interpretation

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.SignInterpretationApi.V1EditionsEditionIdSignInterpretationsSignInterpretationIdLinkToNextSignInterpretationIdPost(context.Background(), editionId, signInterpretationId, nextSignInterpretationId).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `SignInterpretationApi.V1EditionsEditionIdSignInterpretationsSignInterpretationIdLinkToNextSignInterpretationIdPost``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `V1EditionsEditionIdSignInterpretationsSignInterpretationIdLinkToNextSignInterpretationIdPost`: SignInterpretationDTO
    fmt.Fprintf(os.Stdout, "Response from `SignInterpretationApi.V1EditionsEditionIdSignInterpretationsSignInterpretationIdLinkToNextSignInterpretationIdPost`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**editionId** | **int32** | ID of the edition being changed | 
**signInterpretationId** | **int32** | The sign interpretation to be linked to the nextSignInterpretationId | 
**nextSignInterpretationId** | **int32** | The sign interpretation to become the new next sign interpretation | 

### Other Parameters

Other parameters are passed through a pointer to a apiV1EditionsEditionIdSignInterpretationsSignInterpretationIdLinkToNextSignInterpretationIdPostRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------




### Return type

[**SignInterpretationDTO**](SignInterpretationDTO.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## V1EditionsEditionIdSignInterpretationsSignInterpretationIdUnlinkFromNextSignInterpretationIdPost

> SignInterpretationDTO V1EditionsEditionIdSignInterpretationsSignInterpretationIdUnlinkFromNextSignInterpretationIdPost(ctx, editionId, signInterpretationId, nextSignInterpretationId).Execute()

Links two sign interpretations in the edition's sign stream

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
    editionId := 987 // int32 | ID of the edition being changed
    signInterpretationId := 987 // int32 | The sign interpretation to be unlinked from the nextSignInterpretationId
    nextSignInterpretationId := 987 // int32 | The sign interpretation to removed as next sign interpretation

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.SignInterpretationApi.V1EditionsEditionIdSignInterpretationsSignInterpretationIdUnlinkFromNextSignInterpretationIdPost(context.Background(), editionId, signInterpretationId, nextSignInterpretationId).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `SignInterpretationApi.V1EditionsEditionIdSignInterpretationsSignInterpretationIdUnlinkFromNextSignInterpretationIdPost``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `V1EditionsEditionIdSignInterpretationsSignInterpretationIdUnlinkFromNextSignInterpretationIdPost`: SignInterpretationDTO
    fmt.Fprintf(os.Stdout, "Response from `SignInterpretationApi.V1EditionsEditionIdSignInterpretationsSignInterpretationIdUnlinkFromNextSignInterpretationIdPost`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**editionId** | **int32** | ID of the edition being changed | 
**signInterpretationId** | **int32** | The sign interpretation to be unlinked from the nextSignInterpretationId | 
**nextSignInterpretationId** | **int32** | The sign interpretation to removed as next sign interpretation | 

### Other Parameters

Other parameters are passed through a pointer to a apiV1EditionsEditionIdSignInterpretationsSignInterpretationIdUnlinkFromNextSignInterpretationIdPostRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------




### Return type

[**SignInterpretationDTO**](SignInterpretationDTO.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

