# \RoiApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**V1EditionsEditionIdRoisBatchEditPost**](RoiApi.md#V1EditionsEditionIdRoisBatchEditPost) | **Post** /v1/editions/{editionId}/rois/batch-edit | Processes a series of create/update/delete ROI requests in the given edition of a scroll
[**V1EditionsEditionIdRoisBatchPost**](RoiApi.md#V1EditionsEditionIdRoisBatchPost) | **Post** /v1/editions/{editionId}/rois/batch | Creates new sign ROI&#39;s in the given edition of a scroll
[**V1EditionsEditionIdRoisBatchPut**](RoiApi.md#V1EditionsEditionIdRoisBatchPut) | **Put** /v1/editions/{editionId}/rois/batch | Update existing sign ROI&#39;s in the given edition of a scroll
[**V1EditionsEditionIdRoisPost**](RoiApi.md#V1EditionsEditionIdRoisPost) | **Post** /v1/editions/{editionId}/rois | Creates new sign ROI in the given edition of a scroll
[**V1EditionsEditionIdRoisRoiIdDelete**](RoiApi.md#V1EditionsEditionIdRoisRoiIdDelete) | **Delete** /v1/editions/{editionId}/rois/{roiId} | Deletes a sign ROI from the given edition of a scroll
[**V1EditionsEditionIdRoisRoiIdGet**](RoiApi.md#V1EditionsEditionIdRoisRoiIdGet) | **Get** /v1/editions/{editionId}/rois/{roiId} | Get the details for a ROI in the given edition of a scroll
[**V1EditionsEditionIdRoisRoiIdPut**](RoiApi.md#V1EditionsEditionIdRoisRoiIdPut) | **Put** /v1/editions/{editionId}/rois/{roiId} | Update an existing sign ROI in the given edition of a scroll



## V1EditionsEditionIdRoisBatchEditPost

> BatchEditRoiResponseDto V1EditionsEditionIdRoisBatchEditPost(ctx, editionId, optional)

Processes a series of create/update/delete ROI requests in the given edition of a scroll

### Required Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**editionId** | **int32**| Id of the edition | 
 **optional** | ***V1EditionsEditionIdRoisBatchEditPostOpts** | optional parameters | nil if no parameters

### Optional Parameters

Optional parameters are passed through a pointer to a V1EditionsEditionIdRoisBatchEditPostOpts struct


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **batchEditRoiDto** | [**optional.Interface of BatchEditRoiDto**](BatchEditRoiDto.md)| A JSON object with all the roi edits to be performed | 

### Return type

[**BatchEditRoiResponseDto**](BatchEditRoiResponseDTO.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/_*+json
- **Accept**: text/plain, application/json, text/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## V1EditionsEditionIdRoisBatchPost

> InterpretationRoiDtoList V1EditionsEditionIdRoisBatchPost(ctx, editionId, optional)

Creates new sign ROI's in the given edition of a scroll

### Required Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**editionId** | **int32**| Id of the edition | 
 **optional** | ***V1EditionsEditionIdRoisBatchPostOpts** | optional parameters | nil if no parameters

### Optional Parameters

Optional parameters are passed through a pointer to a V1EditionsEditionIdRoisBatchPostOpts struct


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **setInterpretationRoiDtoList** | [**optional.Interface of SetInterpretationRoiDtoList**](SetInterpretationRoiDtoList.md)| A JSON object with an array of the new ROI&#39;s to be created | 

### Return type

[**InterpretationRoiDtoList**](InterpretationRoiDTOList.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/_*+json
- **Accept**: text/plain, application/json, text/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## V1EditionsEditionIdRoisBatchPut

> UpdatedInterpretationRoiDtoList V1EditionsEditionIdRoisBatchPut(ctx, editionId, optional)

Update existing sign ROI's in the given edition of a scroll

### Required Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**editionId** | **int32**| Id of the edition | 
 **optional** | ***V1EditionsEditionIdRoisBatchPutOpts** | optional parameters | nil if no parameters

### Optional Parameters

Optional parameters are passed through a pointer to a V1EditionsEditionIdRoisBatchPutOpts struct


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **updateInterpretationRoiDtoList** | [**optional.Interface of UpdateInterpretationRoiDtoList**](UpdateInterpretationRoiDtoList.md)| A JSON object with an array of the updated ROI details | 

### Return type

[**UpdatedInterpretationRoiDtoList**](UpdatedInterpretationRoiDTOList.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/_*+json
- **Accept**: text/plain, application/json, text/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## V1EditionsEditionIdRoisPost

> InterpretationRoiDto V1EditionsEditionIdRoisPost(ctx, editionId, optional)

Creates new sign ROI in the given edition of a scroll

### Required Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**editionId** | **int32**| Id of the edition | 
 **optional** | ***V1EditionsEditionIdRoisPostOpts** | optional parameters | nil if no parameters

### Optional Parameters

Optional parameters are passed through a pointer to a V1EditionsEditionIdRoisPostOpts struct


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **setInterpretationRoiDto** | [**optional.Interface of SetInterpretationRoiDto**](SetInterpretationRoiDto.md)| A JSON object with the new ROI to be created | 

### Return type

[**InterpretationRoiDto**](InterpretationRoiDTO.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/_*+json
- **Accept**: text/plain, application/json, text/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## V1EditionsEditionIdRoisRoiIdDelete

> V1EditionsEditionIdRoisRoiIdDelete(ctx, editionId, roiId)

Deletes a sign ROI from the given edition of a scroll

### Required Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**editionId** | **int32**| Id of the edition | 
**roiId** | **int32**| Id of the ROI to be deleted | 

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


## V1EditionsEditionIdRoisRoiIdGet

> InterpretationRoiDto V1EditionsEditionIdRoisRoiIdGet(ctx, editionId, roiId)

Get the details for a ROI in the given edition of a scroll

### Required Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**editionId** | **int32**| Id of the edition | 
**roiId** | **int32**| A JSON object with the new ROI to be created | 

### Return type

[**InterpretationRoiDto**](InterpretationRoiDTO.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## V1EditionsEditionIdRoisRoiIdPut

> UpdatedInterpretationRoiDto V1EditionsEditionIdRoisRoiIdPut(ctx, editionId, roiId, optional)

Update an existing sign ROI in the given edition of a scroll

### Required Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**editionId** | **int32**| Id of the edition | 
**roiId** | **int32**| Id of the ROI to be updated | 
 **optional** | ***V1EditionsEditionIdRoisRoiIdPutOpts** | optional parameters | nil if no parameters

### Optional Parameters

Optional parameters are passed through a pointer to a V1EditionsEditionIdRoisRoiIdPutOpts struct


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **setInterpretationRoiDto** | [**optional.Interface of SetInterpretationRoiDto**](SetInterpretationRoiDto.md)| A JSON object with the updated ROI details | 

### Return type

[**UpdatedInterpretationRoiDto**](UpdatedInterpretationRoiDTO.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/_*+json
- **Accept**: text/plain, application/json, text/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

