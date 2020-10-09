# \EditionApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**V1EditionsAdminShareRequestsGet**](EditionApi.md#V1EditionsAdminShareRequestsGet) | **Get** /v1/editions/admin-share-requests | Get a list of requests issued by the current user for other users  to become editors of a shared edition
[**V1EditionsConfirmEditorshipTokenPost**](EditionApi.md#V1EditionsConfirmEditorshipTokenPost) | **Post** /v1/editions/confirm-editorship/{token} | Confirm addition of an editor to the specified edition
[**V1EditionsEditionIdAddEditorRequestPost**](EditionApi.md#V1EditionsEditionIdAddEditorRequestPost) | **Post** /v1/editions/{editionId}/add-editor-request | Adds an editor to the specified edition
[**V1EditionsEditionIdDelete**](EditionApi.md#V1EditionsEditionIdDelete) | **Delete** /v1/editions/{editionId} | Provides details about the specified edition and all accessible alternate editions
[**V1EditionsEditionIdEditorsEditorEmailIdPut**](EditionApi.md#V1EditionsEditionIdEditorsEditorEmailIdPut) | **Put** /v1/editions/{editionId}/editors/{editorEmailId} | Changes the rights for an editor of the specified edition
[**V1EditionsEditionIdGet**](EditionApi.md#V1EditionsEditionIdGet) | **Get** /v1/editions/{editionId} | Provides details about the specified edition and all accessible alternate editions
[**V1EditionsEditionIdPost**](EditionApi.md#V1EditionsEditionIdPost) | **Post** /v1/editions/{editionId} | Creates a copy of the specified edition
[**V1EditionsEditionIdPut**](EditionApi.md#V1EditionsEditionIdPut) | **Put** /v1/editions/{editionId} | Updates data for the specified edition
[**V1EditionsEditionIdScriptCollectionGet**](EditionApi.md#V1EditionsEditionIdScriptCollectionGet) | **Get** /v1/editions/{editionId}/script-collection | Provides spatial data for all letters in the edition
[**V1EditionsEditionIdScriptLinesGet**](EditionApi.md#V1EditionsEditionIdScriptLinesGet) | **Get** /v1/editions/{editionId}/script-lines | Provides spatial data for all letters in the edition organized and oriented  by lines.
[**V1EditionsEditorInvitationsGet**](EditionApi.md#V1EditionsEditorInvitationsGet) | **Get** /v1/editions/editor-invitations | Get a list of invitations issued to the current user to become an editor of a shared edition
[**V1EditionsGet**](EditionApi.md#V1EditionsGet) | **Get** /v1/editions | Provides a listing of all editions accessible to the current user



## V1EditionsAdminShareRequestsGet

> AdminEditorRequestListDTO V1EditionsAdminShareRequestsGet(ctx).Execute()

Get a list of requests issued by the current user for other users  to become editors of a shared edition

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
    resp, r, err := api_client.EditionApi.V1EditionsAdminShareRequestsGet(context.Background()).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `EditionApi.V1EditionsAdminShareRequestsGet``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `V1EditionsAdminShareRequestsGet`: AdminEditorRequestListDTO
    fmt.Fprintf(os.Stdout, "Response from `EditionApi.V1EditionsAdminShareRequestsGet`: %v\n", resp)
}
```

### Path Parameters

This endpoint does not need any parameter.

### Other Parameters

Other parameters are passed through a pointer to a apiV1EditionsAdminShareRequestsGetRequest struct via the builder pattern


### Return type

[**AdminEditorRequestListDTO**](AdminEditorRequestListDTO.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## V1EditionsConfirmEditorshipTokenPost

> DetailedEditorRightsDTO V1EditionsConfirmEditorshipTokenPost(ctx, token).Execute()

Confirm addition of an editor to the specified edition

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
    token := "token_example" // string | JWT for verifying the request confirmation

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.EditionApi.V1EditionsConfirmEditorshipTokenPost(context.Background(), token).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `EditionApi.V1EditionsConfirmEditorshipTokenPost``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `V1EditionsConfirmEditorshipTokenPost`: DetailedEditorRightsDTO
    fmt.Fprintf(os.Stdout, "Response from `EditionApi.V1EditionsConfirmEditorshipTokenPost`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**token** | **string** | JWT for verifying the request confirmation | 

### Other Parameters

Other parameters are passed through a pointer to a apiV1EditionsConfirmEditorshipTokenPostRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**DetailedEditorRightsDTO**](DetailedEditorRightsDTO.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## V1EditionsEditionIdAddEditorRequestPost

> V1EditionsEditionIdAddEditorRequestPost(ctx, editionId).InviteEditorDTO(inviteEditorDTO).Execute()

Adds an editor to the specified edition

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
    inviteEditorDTO := openapiclient.InviteEditorDTO{Email: "Email_example", MayLock: false, MayRead: false, MayWrite: false, IsAdmin: false} // InviteEditorDTO | JSON object with the attributes of the new editor (optional)

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.EditionApi.V1EditionsEditionIdAddEditorRequestPost(context.Background(), editionId).InviteEditorDTO(inviteEditorDTO).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `EditionApi.V1EditionsEditionIdAddEditorRequestPost``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**editionId** | **int32** | Unique Id of the desired edition | 

### Other Parameters

Other parameters are passed through a pointer to a apiV1EditionsEditionIdAddEditorRequestPostRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **inviteEditorDTO** | [**InviteEditorDTO**](InviteEditorDTO.md) | JSON object with the attributes of the new editor | 

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


## V1EditionsEditionIdDelete

> DeleteTokenDTO V1EditionsEditionIdDelete(ctx, editionId).Optional(optional).Token(token).Execute()

Provides details about the specified edition and all accessible alternate editions

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
    optional := []string{"Inner_example"} // []string | Optional parameters: 'deleteForAllEditors' (optional)
    token := "token_example" // string | token required when using optional 'deleteForAllEditors' (optional)

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.EditionApi.V1EditionsEditionIdDelete(context.Background(), editionId).Optional(optional).Token(token).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `EditionApi.V1EditionsEditionIdDelete``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `V1EditionsEditionIdDelete`: DeleteTokenDTO
    fmt.Fprintf(os.Stdout, "Response from `EditionApi.V1EditionsEditionIdDelete`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**editionId** | **int32** | Unique Id of the desired edition | 

### Other Parameters

Other parameters are passed through a pointer to a apiV1EditionsEditionIdDeleteRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **optional** | [**[]string**](string.md) | Optional parameters: &#39;deleteForAllEditors&#39; | 
 **token** | **string** | token required when using optional &#39;deleteForAllEditors&#39; | 

### Return type

[**DeleteTokenDTO**](DeleteTokenDTO.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## V1EditionsEditionIdEditorsEditorEmailIdPut

> DetailedEditorRightsDTO V1EditionsEditionIdEditorsEditorEmailIdPut(ctx, editionId, editorEmailId).UpdateEditorRightsDTO(updateEditorRightsDTO).Execute()

Changes the rights for an editor of the specified edition

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
    editorEmailId := "editorEmailId_example" // string | Email address of the editor whose permissions are being changed
    updateEditorRightsDTO := openapiclient.UpdateEditorRightsDTO{MayLock: false, MayRead: false, MayWrite: false, IsAdmin: false} // UpdateEditorRightsDTO | JSON object with the attributes of the new editor (optional)

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.EditionApi.V1EditionsEditionIdEditorsEditorEmailIdPut(context.Background(), editionId, editorEmailId).UpdateEditorRightsDTO(updateEditorRightsDTO).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `EditionApi.V1EditionsEditionIdEditorsEditorEmailIdPut``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `V1EditionsEditionIdEditorsEditorEmailIdPut`: DetailedEditorRightsDTO
    fmt.Fprintf(os.Stdout, "Response from `EditionApi.V1EditionsEditionIdEditorsEditorEmailIdPut`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**editionId** | **int32** | Unique Id of the desired edition | 
**editorEmailId** | **string** | Email address of the editor whose permissions are being changed | 

### Other Parameters

Other parameters are passed through a pointer to a apiV1EditionsEditionIdEditorsEditorEmailIdPutRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **updateEditorRightsDTO** | [**UpdateEditorRightsDTO**](UpdateEditorRightsDTO.md) | JSON object with the attributes of the new editor | 

### Return type

[**DetailedEditorRightsDTO**](DetailedEditorRightsDTO.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/_*+json
- **Accept**: text/plain, application/json, text/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## V1EditionsEditionIdGet

> EditionGroupDTO V1EditionsEditionIdGet(ctx, editionId).Execute()

Provides details about the specified edition and all accessible alternate editions

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
    resp, r, err := api_client.EditionApi.V1EditionsEditionIdGet(context.Background(), editionId).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `EditionApi.V1EditionsEditionIdGet``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `V1EditionsEditionIdGet`: EditionGroupDTO
    fmt.Fprintf(os.Stdout, "Response from `EditionApi.V1EditionsEditionIdGet`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**editionId** | **int32** | Unique Id of the desired edition | 

### Other Parameters

Other parameters are passed through a pointer to a apiV1EditionsEditionIdGetRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**EditionGroupDTO**](EditionGroupDTO.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## V1EditionsEditionIdPost

> EditionDTO V1EditionsEditionIdPost(ctx, editionId).EditionCopyDTO(editionCopyDTO).Execute()

Creates a copy of the specified edition

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
    editionCopyDTO := openapiclient.EditionCopyDTO{Name: "Name_example", CopyrightHolder: "CopyrightHolder_example", Collaborators: "Collaborators_example"} // EditionCopyDTO | JSON object with the attributes to be changed in the copied edition (optional)

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.EditionApi.V1EditionsEditionIdPost(context.Background(), editionId).EditionCopyDTO(editionCopyDTO).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `EditionApi.V1EditionsEditionIdPost``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `V1EditionsEditionIdPost`: EditionDTO
    fmt.Fprintf(os.Stdout, "Response from `EditionApi.V1EditionsEditionIdPost`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**editionId** | **int32** | Unique Id of the desired edition | 

### Other Parameters

Other parameters are passed through a pointer to a apiV1EditionsEditionIdPostRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **editionCopyDTO** | [**EditionCopyDTO**](EditionCopyDTO.md) | JSON object with the attributes to be changed in the copied edition | 

### Return type

[**EditionDTO**](EditionDTO.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/_*+json
- **Accept**: text/plain, application/json, text/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## V1EditionsEditionIdPut

> EditionDTO V1EditionsEditionIdPut(ctx, editionId).EditionUpdateRequestDTO(editionUpdateRequestDTO).Execute()

Updates data for the specified edition

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
    editionUpdateRequestDTO := openapiclient.EditionUpdateRequestDTO{Metrics: openapiclient.UpdateEditionManuscriptMetricsDTO{Width: 123, Height: 123, XOrigin: 123, YOrigin: 123}, Name: "Name_example", CopyrightHolder: "CopyrightHolder_example", Collaborators: "Collaborators_example"} // EditionUpdateRequestDTO | JSON object with the attributes to be updated (optional)

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.EditionApi.V1EditionsEditionIdPut(context.Background(), editionId).EditionUpdateRequestDTO(editionUpdateRequestDTO).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `EditionApi.V1EditionsEditionIdPut``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `V1EditionsEditionIdPut`: EditionDTO
    fmt.Fprintf(os.Stdout, "Response from `EditionApi.V1EditionsEditionIdPut`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**editionId** | **int32** | Unique Id of the desired edition | 

### Other Parameters

Other parameters are passed through a pointer to a apiV1EditionsEditionIdPutRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **editionUpdateRequestDTO** | [**EditionUpdateRequestDTO**](EditionUpdateRequestDTO.md) | JSON object with the attributes to be updated | 

### Return type

[**EditionDTO**](EditionDTO.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/_*+json
- **Accept**: text/plain, application/json, text/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## V1EditionsEditionIdScriptCollectionGet

> EditionScriptCollectionDTO V1EditionsEditionIdScriptCollectionGet(ctx, editionId).Execute()

Provides spatial data for all letters in the edition

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
    resp, r, err := api_client.EditionApi.V1EditionsEditionIdScriptCollectionGet(context.Background(), editionId).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `EditionApi.V1EditionsEditionIdScriptCollectionGet``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `V1EditionsEditionIdScriptCollectionGet`: EditionScriptCollectionDTO
    fmt.Fprintf(os.Stdout, "Response from `EditionApi.V1EditionsEditionIdScriptCollectionGet`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**editionId** | **int32** | Unique Id of the desired edition | 

### Other Parameters

Other parameters are passed through a pointer to a apiV1EditionsEditionIdScriptCollectionGetRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**EditionScriptCollectionDTO**](EditionScriptCollectionDTO.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## V1EditionsEditionIdScriptLinesGet

> EditionScriptLinesDTO V1EditionsEditionIdScriptLinesGet(ctx, editionId).Execute()

Provides spatial data for all letters in the edition organized and oriented  by lines.

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
    resp, r, err := api_client.EditionApi.V1EditionsEditionIdScriptLinesGet(context.Background(), editionId).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `EditionApi.V1EditionsEditionIdScriptLinesGet``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `V1EditionsEditionIdScriptLinesGet`: EditionScriptLinesDTO
    fmt.Fprintf(os.Stdout, "Response from `EditionApi.V1EditionsEditionIdScriptLinesGet`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**editionId** | **int32** | Unique Id of the desired edition | 

### Other Parameters

Other parameters are passed through a pointer to a apiV1EditionsEditionIdScriptLinesGetRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**EditionScriptLinesDTO**](EditionScriptLinesDTO.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## V1EditionsEditorInvitationsGet

> EditorInvitationListDTO V1EditionsEditorInvitationsGet(ctx).Execute()

Get a list of invitations issued to the current user to become an editor of a shared edition

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
    resp, r, err := api_client.EditionApi.V1EditionsEditorInvitationsGet(context.Background()).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `EditionApi.V1EditionsEditorInvitationsGet``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `V1EditionsEditorInvitationsGet`: EditorInvitationListDTO
    fmt.Fprintf(os.Stdout, "Response from `EditionApi.V1EditionsEditorInvitationsGet`: %v\n", resp)
}
```

### Path Parameters

This endpoint does not need any parameter.

### Other Parameters

Other parameters are passed through a pointer to a apiV1EditionsEditorInvitationsGetRequest struct via the builder pattern


### Return type

[**EditorInvitationListDTO**](EditorInvitationListDTO.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## V1EditionsGet

> EditionListDTO V1EditionsGet(ctx).Execute()

Provides a listing of all editions accessible to the current user

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
    resp, r, err := api_client.EditionApi.V1EditionsGet(context.Background()).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `EditionApi.V1EditionsGet``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `V1EditionsGet`: EditionListDTO
    fmt.Fprintf(os.Stdout, "Response from `EditionApi.V1EditionsGet`: %v\n", resp)
}
```

### Path Parameters

This endpoint does not need any parameter.

### Other Parameters

Other parameters are passed through a pointer to a apiV1EditionsGetRequest struct via the builder pattern


### Return type

[**EditionListDTO**](EditionListDTO.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

