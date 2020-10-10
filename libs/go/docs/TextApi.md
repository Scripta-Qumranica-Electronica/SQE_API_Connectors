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

> LineTextDto V1EditionsEditionIdLinesLineIdGet(ctx, editionId, lineId)

Retrieves all signs and their data from the given line

### Required Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**editionId** | **int32**| Id of the edition | 
**lineId** | **int32**| Id of the line | 

### Return type

[**LineTextDto**](LineTextDTO.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## V1EditionsEditionIdTextFragmentsGet

> TextFragmentDataListDto V1EditionsEditionIdTextFragmentsGet(ctx, editionId)

Retrieves the ids of all Fragments of all fragments in the given edition of a scroll

### Required Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**editionId** | **int32**| Id of the edition | 

### Return type

[**TextFragmentDataListDto**](TextFragmentDataListDTO.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## V1EditionsEditionIdTextFragmentsPost

> TextFragmentDataDto V1EditionsEditionIdTextFragmentsPost(ctx, editionId, optional)

Creates a new text fragment in the given edition of a scroll

### Required Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**editionId** | **int32**| Id of the edition | 
 **optional** | ***V1EditionsEditionIdTextFragmentsPostOpts** | optional parameters | nil if no parameters

### Optional Parameters

Optional parameters are passed through a pointer to a V1EditionsEditionIdTextFragmentsPostOpts struct


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **createTextFragmentDto** | [**optional.Interface of CreateTextFragmentDto**](CreateTextFragmentDto.md)| A JSON object with the details of the new text fragment to be created | 

### Return type

[**TextFragmentDataDto**](TextFragmentDataDTO.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/_*+json
- **Accept**: text/plain, application/json, text/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## V1EditionsEditionIdTextFragmentsTextFragmentIdArtefactsGet

> ArtefactDataListDto V1EditionsEditionIdTextFragmentsTextFragmentIdArtefactsGet(ctx, editionId, textFragmentId)

Retrieves the ids of all Artefacts in the given textFragmentName

### Required Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**editionId** | **int32**| Id of the edition | 
**textFragmentId** | **int32**| Id of the text fragment | 

### Return type

[**ArtefactDataListDto**](ArtefactDataListDTO.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## V1EditionsEditionIdTextFragmentsTextFragmentIdGet

> TextEditionDto V1EditionsEditionIdTextFragmentsTextFragmentIdGet(ctx, editionId, textFragmentId)

Retrieves all signs and their data from the given textFragmentName

### Required Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**editionId** | **int32**| Id of the edition | 
**textFragmentId** | **int32**| Id of the text fragment | 

### Return type

[**TextEditionDto**](TextEditionDTO.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## V1EditionsEditionIdTextFragmentsTextFragmentIdLinesGet

> LineDataListDto V1EditionsEditionIdTextFragmentsTextFragmentIdLinesGet(ctx, editionId, textFragmentId)

Retrieves the ids of all lines in the given textFragmentName

### Required Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**editionId** | **int32**| Id of the edition | 
**textFragmentId** | **int32**| Id of the text fragment | 

### Return type

[**LineDataListDto**](LineDataListDTO.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## V1EditionsEditionIdTextFragmentsTextFragmentIdPut

> TextFragmentDataDto V1EditionsEditionIdTextFragmentsTextFragmentIdPut(ctx, editionId, textFragmentId, optional)

Updates the specified text fragment with the submitted properties

### Required Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**editionId** | **int32**| Edition of the text fragment being updates | 
**textFragmentId** | **int32**| Id of the text fragment being updates | 
 **optional** | ***V1EditionsEditionIdTextFragmentsTextFragmentIdPutOpts** | optional parameters | nil if no parameters

### Optional Parameters

Optional parameters are passed through a pointer to a V1EditionsEditionIdTextFragmentsTextFragmentIdPutOpts struct


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **updateTextFragmentDto** | [**optional.Interface of UpdateTextFragmentDto**](UpdateTextFragmentDto.md)| Details of the updated text fragment | 

### Return type

[**TextFragmentDataDto**](TextFragmentDataDTO.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/_*+json
- **Accept**: text/plain, application/json, text/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

