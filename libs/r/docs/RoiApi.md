# RoiApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**V1EditionsEditionIdRoisBatchEditPost**](RoiApi.md#V1EditionsEditionIdRoisBatchEditPost) | **POST** /v1/editions/{editionId}/rois/batch-edit | Processes a series of create/update/delete ROI requests in the given edition of a scroll
[**V1EditionsEditionIdRoisBatchPost**](RoiApi.md#V1EditionsEditionIdRoisBatchPost) | **POST** /v1/editions/{editionId}/rois/batch | Creates new sign ROI&#39;s in the given edition of a scroll
[**V1EditionsEditionIdRoisBatchPut**](RoiApi.md#V1EditionsEditionIdRoisBatchPut) | **PUT** /v1/editions/{editionId}/rois/batch | Update existing sign ROI&#39;s in the given edition of a scroll
[**V1EditionsEditionIdRoisPost**](RoiApi.md#V1EditionsEditionIdRoisPost) | **POST** /v1/editions/{editionId}/rois | Creates new sign ROI in the given edition of a scroll
[**V1EditionsEditionIdRoisRoiIdDelete**](RoiApi.md#V1EditionsEditionIdRoisRoiIdDelete) | **DELETE** /v1/editions/{editionId}/rois/{roiId} | Deletes a sign ROI from the given edition of a scroll
[**V1EditionsEditionIdRoisRoiIdGet**](RoiApi.md#V1EditionsEditionIdRoisRoiIdGet) | **GET** /v1/editions/{editionId}/rois/{roiId} | Get the details for a ROI in the given edition of a scroll
[**V1EditionsEditionIdRoisRoiIdPut**](RoiApi.md#V1EditionsEditionIdRoisRoiIdPut) | **PUT** /v1/editions/{editionId}/rois/{roiId} | Update an existing sign ROI in the given edition of a scroll


# **V1EditionsEditionIdRoisBatchEditPost**
> BatchEditRoiResponseDTO V1EditionsEditionIdRoisBatchEditPost(edition.id, batch.edit.roi.dto=var.batch.edit.roi.dto)

Processes a series of create/update/delete ROI requests in the given edition of a scroll

### Example
```R
library(openapi)

var.edition.id <- 56 # integer | Id of the edition
var.batch.edit.roi.dto <- BatchEditRoiDTO$new(list(SetInterpretationRoiDTO$new(123, 123, "shape_example", TranslateDTO$new(123, 123), 123, "exceptional_example", "valuesSet_example")), list(UpdateInterpretationRoiDTO$new(123, 123, 123, "shape_example", TranslateDTO$new(123, 123), 123, "exceptional_example", "valuesSet_example")), list(123)) # BatchEditRoiDTO | A JSON object with all the roi edits to be performed

#Processes a series of create/update/delete ROI requests in the given edition of a scroll
api.instance <- RoiApi$new()
# Configure API key authorization: Bearer
api.instance$apiClient$apiKeys['Authorization'] <- 'TODO_YOUR_API_KEY';
result <- api.instance$V1EditionsEditionIdRoisBatchEditPost(var.edition.id, batch.edit.roi.dto=var.batch.edit.roi.dto)
dput(result)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **edition.id** | **integer**| Id of the edition | 
 **batch.edit.roi.dto** | [**BatchEditRoiDTO**](BatchEditRoiDTO.md)| A JSON object with all the roi edits to be performed | [optional] 

### Return type

[**BatchEditRoiResponseDTO**](BatchEditRoiResponseDTO.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/*+json
 - **Accept**: text/plain, application/json, text/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Success |  -  |

# **V1EditionsEditionIdRoisBatchPost**
> InterpretationRoiDTOList V1EditionsEditionIdRoisBatchPost(edition.id, set.interpretation.roi.dto.list=var.set.interpretation.roi.dto.list)

Creates new sign ROI's in the given edition of a scroll

### Example
```R
library(openapi)

var.edition.id <- 56 # integer | Id of the edition
var.set.interpretation.roi.dto.list <- SetInterpretationRoiDTOList$new(list(SetInterpretationRoiDTO$new(123, 123, "shape_example", TranslateDTO$new(123, 123), 123, "exceptional_example", "valuesSet_example"))) # SetInterpretationRoiDTOList | A JSON object with an array of the new ROI's to be created

#Creates new sign ROI's in the given edition of a scroll
api.instance <- RoiApi$new()
# Configure API key authorization: Bearer
api.instance$apiClient$apiKeys['Authorization'] <- 'TODO_YOUR_API_KEY';
result <- api.instance$V1EditionsEditionIdRoisBatchPost(var.edition.id, set.interpretation.roi.dto.list=var.set.interpretation.roi.dto.list)
dput(result)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **edition.id** | **integer**| Id of the edition | 
 **set.interpretation.roi.dto.list** | [**SetInterpretationRoiDTOList**](SetInterpretationRoiDTOList.md)| A JSON object with an array of the new ROI&#39;s to be created | [optional] 

### Return type

[**InterpretationRoiDTOList**](InterpretationRoiDTOList.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/*+json
 - **Accept**: text/plain, application/json, text/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Success |  -  |

# **V1EditionsEditionIdRoisBatchPut**
> UpdatedInterpretationRoiDTOList V1EditionsEditionIdRoisBatchPut(edition.id, update.interpretation.roi.dto.list=var.update.interpretation.roi.dto.list)

Update existing sign ROI's in the given edition of a scroll

### Example
```R
library(openapi)

var.edition.id <- 56 # integer | Id of the edition
var.update.interpretation.roi.dto.list <- UpdateInterpretationRoiDTOList$new(list(UpdateInterpretationRoiDTO$new(123, 123, 123, "shape_example", TranslateDTO$new(123, 123), 123, "exceptional_example", "valuesSet_example"))) # UpdateInterpretationRoiDTOList | A JSON object with an array of the updated ROI details

#Update existing sign ROI's in the given edition of a scroll
api.instance <- RoiApi$new()
# Configure API key authorization: Bearer
api.instance$apiClient$apiKeys['Authorization'] <- 'TODO_YOUR_API_KEY';
result <- api.instance$V1EditionsEditionIdRoisBatchPut(var.edition.id, update.interpretation.roi.dto.list=var.update.interpretation.roi.dto.list)
dput(result)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **edition.id** | **integer**| Id of the edition | 
 **update.interpretation.roi.dto.list** | [**UpdateInterpretationRoiDTOList**](UpdateInterpretationRoiDTOList.md)| A JSON object with an array of the updated ROI details | [optional] 

### Return type

[**UpdatedInterpretationRoiDTOList**](UpdatedInterpretationRoiDTOList.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/*+json
 - **Accept**: text/plain, application/json, text/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Success |  -  |

# **V1EditionsEditionIdRoisPost**
> InterpretationRoiDTO V1EditionsEditionIdRoisPost(edition.id, set.interpretation.roi.dto=var.set.interpretation.roi.dto)

Creates new sign ROI in the given edition of a scroll

### Example
```R
library(openapi)

var.edition.id <- 56 # integer | Id of the edition
var.set.interpretation.roi.dto <- SetInterpretationRoiDTO$new(123, 123, "shape_example", TranslateDTO$new(123, 123), 123, "exceptional_example", "valuesSet_example") # SetInterpretationRoiDTO | A JSON object with the new ROI to be created

#Creates new sign ROI in the given edition of a scroll
api.instance <- RoiApi$new()
# Configure API key authorization: Bearer
api.instance$apiClient$apiKeys['Authorization'] <- 'TODO_YOUR_API_KEY';
result <- api.instance$V1EditionsEditionIdRoisPost(var.edition.id, set.interpretation.roi.dto=var.set.interpretation.roi.dto)
dput(result)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **edition.id** | **integer**| Id of the edition | 
 **set.interpretation.roi.dto** | [**SetInterpretationRoiDTO**](SetInterpretationRoiDTO.md)| A JSON object with the new ROI to be created | [optional] 

### Return type

[**InterpretationRoiDTO**](InterpretationRoiDTO.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/*+json
 - **Accept**: text/plain, application/json, text/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Success |  -  |

# **V1EditionsEditionIdRoisRoiIdDelete**
> V1EditionsEditionIdRoisRoiIdDelete(edition.id, roi.id)

Deletes a sign ROI from the given edition of a scroll

### Example
```R
library(openapi)

var.edition.id <- 56 # integer | Id of the edition
var.roi.id <- 56 # integer | Id of the ROI to be deleted

#Deletes a sign ROI from the given edition of a scroll
api.instance <- RoiApi$new()
# Configure API key authorization: Bearer
api.instance$apiClient$apiKeys['Authorization'] <- 'TODO_YOUR_API_KEY';
api.instance$V1EditionsEditionIdRoisRoiIdDelete(var.edition.id, var.roi.id)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **edition.id** | **integer**| Id of the edition | 
 **roi.id** | **integer**| Id of the ROI to be deleted | 

### Return type

void (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Success |  -  |

# **V1EditionsEditionIdRoisRoiIdGet**
> InterpretationRoiDTO V1EditionsEditionIdRoisRoiIdGet(edition.id, roi.id)

Get the details for a ROI in the given edition of a scroll

### Example
```R
library(openapi)

var.edition.id <- 56 # integer | Id of the edition
var.roi.id <- 56 # integer | A JSON object with the new ROI to be created

#Get the details for a ROI in the given edition of a scroll
api.instance <- RoiApi$new()
# Configure API key authorization: Bearer
api.instance$apiClient$apiKeys['Authorization'] <- 'TODO_YOUR_API_KEY';
result <- api.instance$V1EditionsEditionIdRoisRoiIdGet(var.edition.id, var.roi.id)
dput(result)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **edition.id** | **integer**| Id of the edition | 
 **roi.id** | **integer**| A JSON object with the new ROI to be created | 

### Return type

[**InterpretationRoiDTO**](InterpretationRoiDTO.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Success |  -  |

# **V1EditionsEditionIdRoisRoiIdPut**
> UpdatedInterpretationRoiDTO V1EditionsEditionIdRoisRoiIdPut(edition.id, roi.id, set.interpretation.roi.dto=var.set.interpretation.roi.dto)

Update an existing sign ROI in the given edition of a scroll

### Example
```R
library(openapi)

var.edition.id <- 56 # integer | Id of the edition
var.roi.id <- 56 # integer | Id of the ROI to be updated
var.set.interpretation.roi.dto <- SetInterpretationRoiDTO$new(123, 123, "shape_example", TranslateDTO$new(123, 123), 123, "exceptional_example", "valuesSet_example") # SetInterpretationRoiDTO | A JSON object with the updated ROI details

#Update an existing sign ROI in the given edition of a scroll
api.instance <- RoiApi$new()
# Configure API key authorization: Bearer
api.instance$apiClient$apiKeys['Authorization'] <- 'TODO_YOUR_API_KEY';
result <- api.instance$V1EditionsEditionIdRoisRoiIdPut(var.edition.id, var.roi.id, set.interpretation.roi.dto=var.set.interpretation.roi.dto)
dput(result)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **edition.id** | **integer**| Id of the edition | 
 **roi.id** | **integer**| Id of the ROI to be updated | 
 **set.interpretation.roi.dto** | [**SetInterpretationRoiDTO**](SetInterpretationRoiDTO.md)| A JSON object with the updated ROI details | [optional] 

### Return type

[**UpdatedInterpretationRoiDTO**](UpdatedInterpretationRoiDTO.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/*+json
 - **Accept**: text/plain, application/json, text/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Success |  -  |

