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

> V1CatalogueConfirmMatchIaaEditionCatalogToTextFragmentIdDelete(ctx, iaaEditionCatalogToTextFragmentId)

Remove an existing imaged object and text fragment match, which is not correct

### Required Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**iaaEditionCatalogToTextFragmentId** | **int32**| The unique id of the match to confirm | 

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

> V1CatalogueConfirmMatchIaaEditionCatalogToTextFragmentIdPost(ctx, iaaEditionCatalogToTextFragmentId)

Confirm the correctness of an existing imaged object and text fragment match

### Required Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**iaaEditionCatalogToTextFragmentId** | **int32**| The unique id of the match to confirm | 

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

> CatalogueMatchListDto V1CatalogueEditionsEditionIdImagedObjectTextFragmentMatchesGet(ctx, editionId)

Get a listing of all corresponding imaged objects and transcribed text fragment in a specified edition

### Required Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**editionId** | **int32**| Unique Id of the edition to search for imaged objects to text fragment matches | 

### Return type

[**CatalogueMatchListDto**](CatalogueMatchListDTO.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## V1CatalogueImagedObjectsImagedObjectIdTextFragmentsGet

> CatalogueMatchListDto V1CatalogueImagedObjectsImagedObjectIdTextFragmentsGet(ctx, imagedObjectId)

Get a listing of all text fragments matches that correspond to an imaged object

### Required Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**imagedObjectId** | **string**| Id of imaged object to search for transcription matches | 

### Return type

[**CatalogueMatchListDto**](CatalogueMatchListDTO.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## V1CatalogueManuscriptsManuscriptIdImagedObjectTextFragmentMatchesGet

> CatalogueMatchListDto V1CatalogueManuscriptsManuscriptIdImagedObjectTextFragmentMatchesGet(ctx, manuscriptId)

Get a listing of all corresponding imaged objects and transcribed text fragment in a specified manuscript

### Required Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**manuscriptId** | **int32**| Unique Id of the manuscript to search for imaged objects to text fragment matches | 

### Return type

[**CatalogueMatchListDto**](CatalogueMatchListDTO.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## V1CataloguePost

> V1CataloguePost(ctx, optional)

Create a new matched pair for an imaged object and a text fragment along with the edition princeps information

### Required Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
 **optional** | ***V1CataloguePostOpts** | optional parameters | nil if no parameters

### Optional Parameters

Optional parameters are passed through a pointer to a V1CataloguePostOpts struct


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **catalogueMatchInputDto** | [**optional.Interface of CatalogueMatchInputDto**](CatalogueMatchInputDto.md)| The details of the new match | 

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

> CatalogueMatchListDto V1CatalogueTextFragmentsTextFragmentIdImagedObjectsGet(ctx, textFragmentId)

Get a listing of all imaged objects that matches that correspond to a transcribed text fragment

### Required Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**textFragmentId** | **int32**| Unique Id of the text fragment to search for imaged object matches | 

### Return type

[**CatalogueMatchListDto**](CatalogueMatchListDTO.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

