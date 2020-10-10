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

> DeleteDto V1EditionsEditionIdArtefactGroupsArtefactGroupIdDelete(ctx, editionId, artefactGroupId)

Deletes the specified artefact group.

### Required Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**editionId** | **int32**| Unique Id of the desired edition | 
**artefactGroupId** | **int32**| Unique Id of the artefact group to be deleted | 

### Return type

[**DeleteDto**](DeleteDTO.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## V1EditionsEditionIdArtefactGroupsArtefactGroupIdGet

> ArtefactGroupDto V1EditionsEditionIdArtefactGroupsArtefactGroupIdGet(ctx, editionId, artefactGroupId)

Gets the details of a specific artefact group in the edition

### Required Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**editionId** | **int32**| Unique Id of the desired edition | 
**artefactGroupId** | **int32**| Id of the desired artefact group | 

### Return type

[**ArtefactGroupDto**](ArtefactGroupDTO.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## V1EditionsEditionIdArtefactGroupsArtefactGroupIdPut

> ArtefactGroupDto V1EditionsEditionIdArtefactGroupsArtefactGroupIdPut(ctx, editionId, artefactGroupId, optional)

Updates the details of an artefact group.  The artefact group will now only contain the artefacts listed in the JSON payload.  If the name is null, no change will be made, otherwise the name will also be updated.

### Required Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**editionId** | **int32**| Unique Id of the desired edition | 
**artefactGroupId** | **int32**| Id of the artefact group to be updated | 
 **optional** | ***V1EditionsEditionIdArtefactGroupsArtefactGroupIdPutOpts** | optional parameters | nil if no parameters

### Optional Parameters

Optional parameters are passed through a pointer to a V1EditionsEditionIdArtefactGroupsArtefactGroupIdPutOpts struct


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **updateArtefactGroupDto** | [**optional.Interface of UpdateArtefactGroupDto**](UpdateArtefactGroupDto.md)| Parameters that the artefact group should be changed to | 

### Return type

[**ArtefactGroupDto**](ArtefactGroupDTO.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/_*+json
- **Accept**: text/plain, application/json, text/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## V1EditionsEditionIdArtefactGroupsGet

> ArtefactGroupListDto V1EditionsEditionIdArtefactGroupsGet(ctx, editionId)

Gets a listing of all artefact groups in the edition

### Required Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**editionId** | **int32**| Unique Id of the desired edition | 

### Return type

[**ArtefactGroupListDto**](ArtefactGroupListDTO.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## V1EditionsEditionIdArtefactGroupsPost

> ArtefactGroupDto V1EditionsEditionIdArtefactGroupsPost(ctx, editionId, optional)

Creates a new artefact group with the submitted data.  The new artefact must have a list of artefacts that belong to the group.  It is not necessary to give the group a name.

### Required Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**editionId** | **int32**| Unique Id of the desired edition | 
 **optional** | ***V1EditionsEditionIdArtefactGroupsPostOpts** | optional parameters | nil if no parameters

### Optional Parameters

Optional parameters are passed through a pointer to a V1EditionsEditionIdArtefactGroupsPostOpts struct


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **createArtefactGroupDto** | [**optional.Interface of CreateArtefactGroupDto**](CreateArtefactGroupDto.md)| Parameters of the new artefact group | 

### Return type

[**ArtefactGroupDto**](ArtefactGroupDTO.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/_*+json
- **Accept**: text/plain, application/json, text/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## V1EditionsEditionIdArtefactsArtefactIdDelete

> V1EditionsEditionIdArtefactsArtefactIdDelete(ctx, editionId, artefactId)

Deletes the specified artefact

### Required Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**editionId** | **int32**| Unique Id of the desired edition | 
**artefactId** | **int32**| Unique Id of the desired artefact | 

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

> ArtefactDto V1EditionsEditionIdArtefactsArtefactIdGet(ctx, editionId, artefactId, optional)

Provides a listing of all artefacts that are part of the specified edition

### Required Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**editionId** | **int32**| Unique Id of the desired edition | 
**artefactId** | **int32**| Unique Id of the desired artefact | 
 **optional** | ***V1EditionsEditionIdArtefactsArtefactIdGetOpts** | optional parameters | nil if no parameters

### Optional Parameters

Optional parameters are passed through a pointer to a V1EditionsEditionIdArtefactsArtefactIdGetOpts struct


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **optional** | [**optional.Interface of []string**](string.md)| Add \&quot;masks\&quot; to include artefact polygons and \&quot;images\&quot; to include image data | 

### Return type

[**ArtefactDto**](ArtefactDTO.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## V1EditionsEditionIdArtefactsArtefactIdPut

> ArtefactDto V1EditionsEditionIdArtefactsArtefactIdPut(ctx, editionId, artefactId, optional)

Updates the specified artefact.  There are many possible attributes that can be changed for  an artefact.  The caller should only input only those that  should be changed. Attributes with a null value will be ignored.  For instance, setting the mask to null or \"\" will result in  no changes to the current mask, and no value for the mask will  be returned (or broadcast). Likewise, the transformation, name,  or status message may be set to null and no change will be made  to those entities (though any unchanged values will be returned  along with the changed values and also broadcast to co-editors).

### Required Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**editionId** | **int32**| Unique Id of the desired edition | 
**artefactId** | **int32**| Unique Id of the desired artefact | 
 **optional** | ***V1EditionsEditionIdArtefactsArtefactIdPutOpts** | optional parameters | nil if no parameters

### Optional Parameters

Optional parameters are passed through a pointer to a V1EditionsEditionIdArtefactsArtefactIdPutOpts struct


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **updateArtefactDto** | [**optional.Interface of UpdateArtefactDto**](UpdateArtefactDto.md)| An UpdateArtefactDTO with the desired alterations to the artefact | 

### Return type

[**ArtefactDto**](ArtefactDTO.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/_*+json
- **Accept**: text/plain, application/json, text/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## V1EditionsEditionIdArtefactsArtefactIdRoisGet

> InterpretationRoiDtoList V1EditionsEditionIdArtefactsArtefactIdRoisGet(ctx, editionId, artefactId)

Provides a listing of all rois belonging to an artefact in the specified edition

### Required Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**editionId** | **int32**| Unique Id of the desired edition | 
**artefactId** | **int32**| Unique Id of the desired artefact | 

### Return type

[**InterpretationRoiDtoList**](InterpretationRoiDTOList.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## V1EditionsEditionIdArtefactsArtefactIdTextFragmentsGet

> ArtefactTextFragmentMatchListDto V1EditionsEditionIdArtefactsArtefactIdTextFragmentsGet(ctx, editionId, artefactId, optional)

Provides a listing of text fragments that have text in the specified artefact.  With the optional query parameter \"suggested\", this endpoint will also return  any text fragment that the system suggests might have text in the artefact.

### Required Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**editionId** | **int32**| Unique Id of the desired edition | 
**artefactId** | **int32**| Unique Id of the desired artefact | 
 **optional** | ***V1EditionsEditionIdArtefactsArtefactIdTextFragmentsGetOpts** | optional parameters | nil if no parameters

### Optional Parameters

Optional parameters are passed through a pointer to a V1EditionsEditionIdArtefactsArtefactIdTextFragmentsGetOpts struct


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **optional** | [**optional.Interface of []string**](string.md)| Add \&quot;suggested\&quot; to include possible matches suggested by the system | 

### Return type

[**ArtefactTextFragmentMatchListDto**](ArtefactTextFragmentMatchListDTO.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## V1EditionsEditionIdArtefactsBatchTransformationPost

> BatchUpdatedArtefactTransformDto V1EditionsEditionIdArtefactsBatchTransformationPost(ctx, editionId, optional)

Updates the positional data for a batch of artefacts

### Required Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**editionId** | **int32**| Unique Id of the desired edition | 
 **optional** | ***V1EditionsEditionIdArtefactsBatchTransformationPostOpts** | optional parameters | nil if no parameters

### Optional Parameters

Optional parameters are passed through a pointer to a V1EditionsEditionIdArtefactsBatchTransformationPostOpts struct


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **batchUpdateArtefactPlacementDto** | [**optional.Interface of BatchUpdateArtefactPlacementDto**](BatchUpdateArtefactPlacementDto.md)| A BatchUpdateArtefactTransformDTO with a list of the desired updates | 

### Return type

[**BatchUpdatedArtefactTransformDto**](BatchUpdatedArtefactTransformDTO.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/_*+json
- **Accept**: text/plain, application/json, text/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## V1EditionsEditionIdArtefactsGet

> ArtefactListDto V1EditionsEditionIdArtefactsGet(ctx, editionId, optional)

Provides a listing of all artefacts that are part of the specified edition

### Required Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**editionId** | **int32**| Unique Id of the desired edition | 
 **optional** | ***V1EditionsEditionIdArtefactsGetOpts** | optional parameters | nil if no parameters

### Optional Parameters

Optional parameters are passed through a pointer to a V1EditionsEditionIdArtefactsGetOpts struct


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **optional** | [**optional.Interface of []string**](string.md)| Add \&quot;masks\&quot; to include artefact polygons and \&quot;images\&quot; to include image data | 

### Return type

[**ArtefactListDto**](ArtefactListDTO.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## V1EditionsEditionIdArtefactsPost

> ArtefactDto V1EditionsEditionIdArtefactsPost(ctx, editionId, optional)

Creates a new artefact with the provided data.  If no mask is provided, a placeholder mask will be created with the values:  \"POLYGON((0 0,1 1,1 0,0 0))\" (the system requires a valid WKT polygon mask for  every artefact). It is not recommended to leave the mask, name, or work status  blank or null. It will often be advantageous to leave the transformation null  when first creating a new artefact.

### Required Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**editionId** | **int32**| Unique Id of the desired edition | 
 **optional** | ***V1EditionsEditionIdArtefactsPostOpts** | optional parameters | nil if no parameters

### Optional Parameters

Optional parameters are passed through a pointer to a V1EditionsEditionIdArtefactsPostOpts struct


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **createArtefactDto** | [**optional.Interface of CreateArtefactDto**](CreateArtefactDto.md)| A CreateArtefactDTO with the data for the new artefact | 

### Return type

[**ArtefactDto**](ArtefactDTO.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/_*+json
- **Accept**: text/plain, application/json, text/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

