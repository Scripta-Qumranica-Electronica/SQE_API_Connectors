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

> ImagedObjectListDto V1EditionsEditionIdImagedObjectsGet(ctx, editionId, optional)

Provides a listing of imaged objects related to the specified edition, can include images and also their masks with  optional.

### Required Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**editionId** | **int32**| Unique Id of the desired edition | 
 **optional** | ***V1EditionsEditionIdImagedObjectsGetOpts** | optional parameters | nil if no parameters

### Optional Parameters

Optional parameters are passed through a pointer to a V1EditionsEditionIdImagedObjectsGetOpts struct


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **optional** | [**optional.Interface of []string**](string.md)| Set &#39;artefacts&#39; to receive related artefact data and &#39;masks&#39; to include the artefact masks | 

### Return type

[**ImagedObjectListDto**](ImagedObjectListDTO.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## V1EditionsEditionIdImagedObjectsImagedObjectIdGet

> ImagedObjectDto V1EditionsEditionIdImagedObjectsImagedObjectIdGet(ctx, editionId, imagedObjectId, optional)

Provides information for the specified imaged object related to the specified edition, can include images and also  their masks with optional.

### Required Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**editionId** | **int32**| Unique Id of the desired edition | 
**imagedObjectId** | **string**| Unique Id of the desired object from the imaging Institution | 
 **optional** | ***V1EditionsEditionIdImagedObjectsImagedObjectIdGetOpts** | optional parameters | nil if no parameters

### Optional Parameters

Optional parameters are passed through a pointer to a V1EditionsEditionIdImagedObjectsImagedObjectIdGetOpts struct


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **optional** | [**optional.Interface of []string**](string.md)| Set &#39;artefacts&#39; to receive related artefact data and &#39;masks&#39; to include the artefact masks | 

### Return type

[**ImagedObjectDto**](ImagedObjectDTO.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## V1ImagedObjectsImagedObjectIdGet

> SimpleImageListDto V1ImagedObjectsImagedObjectIdGet(ctx, imagedObjectId)

Provides information for the specified imaged object.

### Required Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**imagedObjectId** | **string**| Unique Id of the desired object from the imaging Institution | 

### Return type

[**SimpleImageListDto**](SimpleImageListDTO.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## V1ImagedObjectsImagedObjectIdTextFragmentsGet

> ImagedObjectTextFragmentMatchListDto V1ImagedObjectsImagedObjectIdTextFragmentsGet(ctx, imagedObjectId)

Provides a list of all text fragments that should correspond to the imaged object.

### Required Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**imagedObjectId** | **string**| Id of the imaged object | 

### Return type

[**ImagedObjectTextFragmentMatchListDto**](ImagedObjectTextFragmentMatchListDTO.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## V1ImagedObjectsInstitutionsGet

> ImageInstitutionListDto V1ImagedObjectsInstitutionsGet(ctx, )

Provides a list of all institutional image providers.

### Required Parameters

This endpoint does not need any parameter.

### Return type

[**ImageInstitutionListDto**](ImageInstitutionListDTO.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## V1ImagedObjectsInstitutionsInstitutionNameGet

> InstitutionalImageListDto V1ImagedObjectsInstitutionsInstitutionNameGet(ctx, institutionName)

Provides a list of all institutional image providers.

### Required Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**institutionName** | **string**|  | 

### Return type

[**InstitutionalImageListDto**](InstitutionalImageListDTO.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

