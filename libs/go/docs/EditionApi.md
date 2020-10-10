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

> AdminEditorRequestListDto V1EditionsAdminShareRequestsGet(ctx, )

Get a list of requests issued by the current user for other users  to become editors of a shared edition

### Required Parameters

This endpoint does not need any parameter.

### Return type

[**AdminEditorRequestListDto**](AdminEditorRequestListDTO.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## V1EditionsConfirmEditorshipTokenPost

> DetailedEditorRightsDto V1EditionsConfirmEditorshipTokenPost(ctx, token)

Confirm addition of an editor to the specified edition

### Required Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**token** | **string**| JWT for verifying the request confirmation | 

### Return type

[**DetailedEditorRightsDto**](DetailedEditorRightsDTO.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## V1EditionsEditionIdAddEditorRequestPost

> V1EditionsEditionIdAddEditorRequestPost(ctx, editionId, optional)

Adds an editor to the specified edition

### Required Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**editionId** | **int32**| Unique Id of the desired edition | 
 **optional** | ***V1EditionsEditionIdAddEditorRequestPostOpts** | optional parameters | nil if no parameters

### Optional Parameters

Optional parameters are passed through a pointer to a V1EditionsEditionIdAddEditorRequestPostOpts struct


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **inviteEditorDto** | [**optional.Interface of InviteEditorDto**](InviteEditorDto.md)| JSON object with the attributes of the new editor | 

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

> DeleteTokenDto V1EditionsEditionIdDelete(ctx, editionId, optional)

Provides details about the specified edition and all accessible alternate editions

### Required Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**editionId** | **int32**| Unique Id of the desired edition | 
 **optional** | ***V1EditionsEditionIdDeleteOpts** | optional parameters | nil if no parameters

### Optional Parameters

Optional parameters are passed through a pointer to a V1EditionsEditionIdDeleteOpts struct


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **optional** | [**optional.Interface of []string**](string.md)| Optional parameters: &#39;deleteForAllEditors&#39; | 
 **token** | **optional.String**| token required when using optional &#39;deleteForAllEditors&#39; | 

### Return type

[**DeleteTokenDto**](DeleteTokenDTO.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## V1EditionsEditionIdEditorsEditorEmailIdPut

> DetailedEditorRightsDto V1EditionsEditionIdEditorsEditorEmailIdPut(ctx, editionId, editorEmailId, optional)

Changes the rights for an editor of the specified edition

### Required Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**editionId** | **int32**| Unique Id of the desired edition | 
**editorEmailId** | **string**| Email address of the editor whose permissions are being changed | 
 **optional** | ***V1EditionsEditionIdEditorsEditorEmailIdPutOpts** | optional parameters | nil if no parameters

### Optional Parameters

Optional parameters are passed through a pointer to a V1EditionsEditionIdEditorsEditorEmailIdPutOpts struct


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **updateEditorRightsDto** | [**optional.Interface of UpdateEditorRightsDto**](UpdateEditorRightsDto.md)| JSON object with the attributes of the new editor | 

### Return type

[**DetailedEditorRightsDto**](DetailedEditorRightsDTO.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/_*+json
- **Accept**: text/plain, application/json, text/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## V1EditionsEditionIdGet

> EditionGroupDto V1EditionsEditionIdGet(ctx, editionId)

Provides details about the specified edition and all accessible alternate editions

### Required Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**editionId** | **int32**| Unique Id of the desired edition | 

### Return type

[**EditionGroupDto**](EditionGroupDTO.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## V1EditionsEditionIdPost

> EditionDto V1EditionsEditionIdPost(ctx, editionId, optional)

Creates a copy of the specified edition

### Required Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**editionId** | **int32**| Unique Id of the desired edition | 
 **optional** | ***V1EditionsEditionIdPostOpts** | optional parameters | nil if no parameters

### Optional Parameters

Optional parameters are passed through a pointer to a V1EditionsEditionIdPostOpts struct


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **editionCopyDto** | [**optional.Interface of EditionCopyDto**](EditionCopyDto.md)| JSON object with the attributes to be changed in the copied edition | 

### Return type

[**EditionDto**](EditionDTO.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/_*+json
- **Accept**: text/plain, application/json, text/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## V1EditionsEditionIdPut

> EditionDto V1EditionsEditionIdPut(ctx, editionId, optional)

Updates data for the specified edition

### Required Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**editionId** | **int32**| Unique Id of the desired edition | 
 **optional** | ***V1EditionsEditionIdPutOpts** | optional parameters | nil if no parameters

### Optional Parameters

Optional parameters are passed through a pointer to a V1EditionsEditionIdPutOpts struct


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **editionUpdateRequestDto** | [**optional.Interface of EditionUpdateRequestDto**](EditionUpdateRequestDto.md)| JSON object with the attributes to be updated | 

### Return type

[**EditionDto**](EditionDTO.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/_*+json
- **Accept**: text/plain, application/json, text/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## V1EditionsEditionIdScriptCollectionGet

> EditionScriptCollectionDto V1EditionsEditionIdScriptCollectionGet(ctx, editionId)

Provides spatial data for all letters in the edition

### Required Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**editionId** | **int32**| Unique Id of the desired edition | 

### Return type

[**EditionScriptCollectionDto**](EditionScriptCollectionDTO.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## V1EditionsEditionIdScriptLinesGet

> EditionScriptLinesDto V1EditionsEditionIdScriptLinesGet(ctx, editionId)

Provides spatial data for all letters in the edition organized and oriented  by lines.

### Required Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**editionId** | **int32**| Unique Id of the desired edition | 

### Return type

[**EditionScriptLinesDto**](EditionScriptLinesDTO.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## V1EditionsEditorInvitationsGet

> EditorInvitationListDto V1EditionsEditorInvitationsGet(ctx, )

Get a list of invitations issued to the current user to become an editor of a shared edition

### Required Parameters

This endpoint does not need any parameter.

### Return type

[**EditorInvitationListDto**](EditorInvitationListDTO.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## V1EditionsGet

> EditionListDto V1EditionsGet(ctx, )

Provides a listing of all editions accessible to the current user

### Required Parameters

This endpoint does not need any parameter.

### Return type

[**EditionListDto**](EditionListDTO.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

