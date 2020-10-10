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

> V1EditionsEditionIdSignInterpretationsAttributesAttributeIdDelete(ctx, editionId, attributeId)

Delete an attribute from an edition

### Required Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**editionId** | **int32**| The ID of the edition being edited | 
**attributeId** | **int32**| The ID of the attribute to delete | 

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

> AttributeDto V1EditionsEditionIdSignInterpretationsAttributesAttributeIdPut(ctx, editionId, attributeId, optional)

Change the details of an attribute in an edition

### Required Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**editionId** | **int32**| The ID of the edition being edited | 
**attributeId** | **int32**| The ID of the attribute to update | 
 **optional** | ***V1EditionsEditionIdSignInterpretationsAttributesAttributeIdPutOpts** | optional parameters | nil if no parameters

### Optional Parameters

Optional parameters are passed through a pointer to a V1EditionsEditionIdSignInterpretationsAttributesAttributeIdPutOpts struct


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **updateAttributeDto** | [**optional.Interface of UpdateAttributeDto**](UpdateAttributeDto.md)| The details of the updated attribute | 

### Return type

[**AttributeDto**](AttributeDTO.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/_*+json
- **Accept**: text/plain, application/json, text/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## V1EditionsEditionIdSignInterpretationsAttributesGet

> AttributeListDto V1EditionsEditionIdSignInterpretationsAttributesGet(ctx, editionId)

Retrieve a list of all possible attributes for an edition

### Required Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**editionId** | **int32**| The ID of the edition being searched | 

### Return type

[**AttributeListDto**](AttributeListDTO.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## V1EditionsEditionIdSignInterpretationsAttributesPost

> AttributeDto V1EditionsEditionIdSignInterpretationsAttributesPost(ctx, editionId, optional)

Create a new attribute for an edition

### Required Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**editionId** | **int32**| The ID of the edition being edited | 
 **optional** | ***V1EditionsEditionIdSignInterpretationsAttributesPostOpts** | optional parameters | nil if no parameters

### Optional Parameters

Optional parameters are passed through a pointer to a V1EditionsEditionIdSignInterpretationsAttributesPostOpts struct


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **createAttributeDto** | [**optional.Interface of CreateAttributeDto**](CreateAttributeDto.md)| The details of the new attribute | 

### Return type

[**AttributeDto**](AttributeDTO.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/_*+json
- **Accept**: text/plain, application/json, text/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## V1EditionsEditionIdSignInterpretationsPost

> SignInterpretationListDto V1EditionsEditionIdSignInterpretationsPost(ctx, editionId, optional)

Creates a new sign interpretation

### Required Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**editionId** | **int32**| ID of the edition being changed | 
 **optional** | ***V1EditionsEditionIdSignInterpretationsPostOpts** | optional parameters | nil if no parameters

### Optional Parameters

Optional parameters are passed through a pointer to a V1EditionsEditionIdSignInterpretationsPostOpts struct


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **signInterpretationCreateDto** | [**optional.Interface of SignInterpretationCreateDto**](SignInterpretationCreateDto.md)| New sign interpretation data to be added | 

### Return type

[**SignInterpretationListDto**](SignInterpretationListDTO.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/_*+json
- **Accept**: text/plain, application/json, text/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## V1EditionsEditionIdSignInterpretationsSignInterpretationIdAttributesAttributeValueIdDelete

> V1EditionsEditionIdSignInterpretationsSignInterpretationIdAttributesAttributeValueIdDelete(ctx, editionId, signInterpretationId, attributeValueId)

This deletes the specified attribute value from the specified sign interpretation.

### Required Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**editionId** | **int32**| ID of the edition being changed | 
**signInterpretationId** | **int32**| ID of the sign interpretation being altered | 
**attributeValueId** | **int32**| Id of the attribute being removed | 

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

> SignInterpretationDto V1EditionsEditionIdSignInterpretationsSignInterpretationIdAttributesAttributeValueIdPut(ctx, editionId, signInterpretationId, attributeValueId, optional)

This changes the values of the specified sign interpretation attribute,  mainly used to change commentary.

### Required Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**editionId** | **int32**| ID of the edition being changed | 
**signInterpretationId** | **int32**| ID of the sign interpretation being altered | 
**attributeValueId** | **int32**| Id of the attribute value to be altered | 
 **optional** | ***V1EditionsEditionIdSignInterpretationsSignInterpretationIdAttributesAttributeValueIdPutOpts** | optional parameters | nil if no parameters

### Optional Parameters

Optional parameters are passed through a pointer to a V1EditionsEditionIdSignInterpretationsSignInterpretationIdAttributesAttributeValueIdPutOpts struct


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



 **interpretationAttributeCreateDto** | [**optional.Interface of InterpretationAttributeCreateDto**](InterpretationAttributeCreateDto.md)| New details of the attribute | 

### Return type

[**SignInterpretationDto**](SignInterpretationDTO.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/_*+json
- **Accept**: text/plain, application/json, text/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## V1EditionsEditionIdSignInterpretationsSignInterpretationIdAttributesPost

> SignInterpretationDto V1EditionsEditionIdSignInterpretationsSignInterpretationIdAttributesPost(ctx, editionId, signInterpretationId, optional)

This adds a new attribute to the specified sign interpretation.

### Required Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**editionId** | **int32**| ID of the edition being changed | 
**signInterpretationId** | **int32**| ID of the sign interpretation for adding a new attribute | 
 **optional** | ***V1EditionsEditionIdSignInterpretationsSignInterpretationIdAttributesPostOpts** | optional parameters | nil if no parameters

### Optional Parameters

Optional parameters are passed through a pointer to a V1EditionsEditionIdSignInterpretationsSignInterpretationIdAttributesPostOpts struct


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **interpretationAttributeCreateDto** | [**optional.Interface of InterpretationAttributeCreateDto**](InterpretationAttributeCreateDto.md)| Details of the attribute to be added | 

### Return type

[**SignInterpretationDto**](SignInterpretationDTO.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/_*+json
- **Accept**: text/plain, application/json, text/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## V1EditionsEditionIdSignInterpretationsSignInterpretationIdCommentaryPut

> SignInterpretationDto V1EditionsEditionIdSignInterpretationsSignInterpretationIdCommentaryPut(ctx, editionId, signInterpretationId, optional)

Updates the commentary of a sign interpretation

### Required Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**editionId** | **int32**| ID of the edition being changed | 
**signInterpretationId** | **int32**| ID of the sign interpretation whose commentary is being changed | 
 **optional** | ***V1EditionsEditionIdSignInterpretationsSignInterpretationIdCommentaryPutOpts** | optional parameters | nil if no parameters

### Optional Parameters

Optional parameters are passed through a pointer to a V1EditionsEditionIdSignInterpretationsSignInterpretationIdCommentaryPutOpts struct


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **commentaryCreateDto** | [**optional.Interface of CommentaryCreateDto**](CommentaryCreateDto.md)| The new commentary for the sign interpretation | 

### Return type

[**SignInterpretationDto**](SignInterpretationDTO.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/_*+json
- **Accept**: text/plain, application/json, text/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## V1EditionsEditionIdSignInterpretationsSignInterpretationIdDelete

> V1EditionsEditionIdSignInterpretationsSignInterpretationIdDelete(ctx, editionId, signInterpretationId)

Deletes the sign interpretation in the route. The endpoint automatically manages the sign stream  by connecting all the deleted sign's next and previous nodes.

### Required Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**editionId** | **int32**| ID of the edition being changed | 
**signInterpretationId** | **int32**| ID of the sign interpretation being deleted | 

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

> SignInterpretationDto V1EditionsEditionIdSignInterpretationsSignInterpretationIdGet(ctx, editionId, signInterpretationId)

Retrieve the details of a sign interpretation in an edition

### Required Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**editionId** | **int32**| The ID of the edition being searched | 
**signInterpretationId** | **int32**| The desired sign interpretation id | 

### Return type

[**SignInterpretationDto**](SignInterpretationDTO.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## V1EditionsEditionIdSignInterpretationsSignInterpretationIdLinkToNextSignInterpretationIdPost

> SignInterpretationDto V1EditionsEditionIdSignInterpretationsSignInterpretationIdLinkToNextSignInterpretationIdPost(ctx, editionId, signInterpretationId, nextSignInterpretationId)

Links two sign interpretations in the edition's sign stream

### Required Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**editionId** | **int32**| ID of the edition being changed | 
**signInterpretationId** | **int32**| The sign interpretation to be linked to the nextSignInterpretationId | 
**nextSignInterpretationId** | **int32**| The sign interpretation to become the new next sign interpretation | 

### Return type

[**SignInterpretationDto**](SignInterpretationDTO.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## V1EditionsEditionIdSignInterpretationsSignInterpretationIdUnlinkFromNextSignInterpretationIdPost

> SignInterpretationDto V1EditionsEditionIdSignInterpretationsSignInterpretationIdUnlinkFromNextSignInterpretationIdPost(ctx, editionId, signInterpretationId, nextSignInterpretationId)

Links two sign interpretations in the edition's sign stream

### Required Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**editionId** | **int32**| ID of the edition being changed | 
**signInterpretationId** | **int32**| The sign interpretation to be unlinked from the nextSignInterpretationId | 
**nextSignInterpretationId** | **int32**| The sign interpretation to removed as next sign interpretation | 

### Return type

[**SignInterpretationDto**](SignInterpretationDTO.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

