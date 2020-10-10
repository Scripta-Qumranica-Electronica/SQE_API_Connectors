# ImagedObjectApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**V1EditionsEditionIdImagedObjectsGet**](ImagedObjectApi.md#V1EditionsEditionIdImagedObjectsGet) | **GET** /v1/editions/{editionId}/imaged-objects | Provides a listing of imaged objects related to the specified edition, can include images and also their masks with  optional.
[**V1EditionsEditionIdImagedObjectsImagedObjectIdGet**](ImagedObjectApi.md#V1EditionsEditionIdImagedObjectsImagedObjectIdGet) | **GET** /v1/editions/{editionId}/imaged-objects/{imagedObjectId} | Provides information for the specified imaged object related to the specified edition, can include images and also  their masks with optional.
[**V1ImagedObjectsImagedObjectIdGet**](ImagedObjectApi.md#V1ImagedObjectsImagedObjectIdGet) | **GET** /v1/imaged-objects/{imagedObjectId} | Provides information for the specified imaged object.
[**V1ImagedObjectsImagedObjectIdTextFragmentsGet**](ImagedObjectApi.md#V1ImagedObjectsImagedObjectIdTextFragmentsGet) | **GET** /v1/imaged-objects/{imagedObjectId}/text-fragments | Provides a list of all text fragments that should correspond to the imaged object.
[**V1ImagedObjectsInstitutionsGet**](ImagedObjectApi.md#V1ImagedObjectsInstitutionsGet) | **GET** /v1/imaged-objects/institutions | Provides a list of all institutional image providers.
[**V1ImagedObjectsInstitutionsInstitutionNameGet**](ImagedObjectApi.md#V1ImagedObjectsInstitutionsInstitutionNameGet) | **GET** /v1/imaged-objects/institutions/{institutionName} | Provides a list of all institutional image providers.


# **V1EditionsEditionIdImagedObjectsGet**
> ImagedObjectListDTO V1EditionsEditionIdImagedObjectsGet(edition.id, optional=var.optional)

Provides a listing of imaged objects related to the specified edition, can include images and also their masks with  optional.

### Example
```R
library(qumranica_api_connector)

var.edition.id <- 56 # integer | Unique Id of the desired edition
var.optional <- list("inner_example") # array[character] | Set 'artefacts' to receive related artefact data and 'masks' to include the artefact masks

#Provides a listing of imaged objects related to the specified edition, can include images and also their masks with  optional.
api.instance <- ImagedObjectApi$new()
# Configure API key authorization: Bearer
api.instance$apiClient$apiKeys['Authorization'] <- 'TODO_YOUR_API_KEY';
result <- api.instance$V1EditionsEditionIdImagedObjectsGet(var.edition.id, optional=var.optional)
dput(result)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **edition.id** | **integer**| Unique Id of the desired edition | 
 **optional** | list( **character** )| Set &#39;artefacts&#39; to receive related artefact data and &#39;masks&#39; to include the artefact masks | [optional] 

### Return type

[**ImagedObjectListDTO**](ImagedObjectListDTO.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Success |  -  |

# **V1EditionsEditionIdImagedObjectsImagedObjectIdGet**
> ImagedObjectDTO V1EditionsEditionIdImagedObjectsImagedObjectIdGet(edition.id, imaged.object.id, optional=var.optional)

Provides information for the specified imaged object related to the specified edition, can include images and also  their masks with optional.

### Example
```R
library(qumranica_api_connector)

var.edition.id <- 56 # integer | Unique Id of the desired edition
var.imaged.object.id <- 'imaged.object.id_example' # character | Unique Id of the desired object from the imaging Institution
var.optional <- list("inner_example") # array[character] | Set 'artefacts' to receive related artefact data and 'masks' to include the artefact masks

#Provides information for the specified imaged object related to the specified edition, can include images and also  their masks with optional.
api.instance <- ImagedObjectApi$new()
# Configure API key authorization: Bearer
api.instance$apiClient$apiKeys['Authorization'] <- 'TODO_YOUR_API_KEY';
result <- api.instance$V1EditionsEditionIdImagedObjectsImagedObjectIdGet(var.edition.id, var.imaged.object.id, optional=var.optional)
dput(result)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **edition.id** | **integer**| Unique Id of the desired edition | 
 **imaged.object.id** | **character**| Unique Id of the desired object from the imaging Institution | 
 **optional** | list( **character** )| Set &#39;artefacts&#39; to receive related artefact data and &#39;masks&#39; to include the artefact masks | [optional] 

### Return type

[**ImagedObjectDTO**](ImagedObjectDTO.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Success |  -  |

# **V1ImagedObjectsImagedObjectIdGet**
> SimpleImageListDTO V1ImagedObjectsImagedObjectIdGet(imaged.object.id)

Provides information for the specified imaged object.

### Example
```R
library(qumranica_api_connector)

var.imaged.object.id <- 'imaged.object.id_example' # character | Unique Id of the desired object from the imaging Institution

#Provides information for the specified imaged object.
api.instance <- ImagedObjectApi$new()
# Configure API key authorization: Bearer
api.instance$apiClient$apiKeys['Authorization'] <- 'TODO_YOUR_API_KEY';
result <- api.instance$V1ImagedObjectsImagedObjectIdGet(var.imaged.object.id)
dput(result)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **imaged.object.id** | **character**| Unique Id of the desired object from the imaging Institution | 

### Return type

[**SimpleImageListDTO**](SimpleImageListDTO.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Success |  -  |

# **V1ImagedObjectsImagedObjectIdTextFragmentsGet**
> ImagedObjectTextFragmentMatchListDTO V1ImagedObjectsImagedObjectIdTextFragmentsGet(imaged.object.id)

Provides a list of all text fragments that should correspond to the imaged object.

### Example
```R
library(qumranica_api_connector)

var.imaged.object.id <- 'imaged.object.id_example' # character | Id of the imaged object

#Provides a list of all text fragments that should correspond to the imaged object.
api.instance <- ImagedObjectApi$new()
# Configure API key authorization: Bearer
api.instance$apiClient$apiKeys['Authorization'] <- 'TODO_YOUR_API_KEY';
result <- api.instance$V1ImagedObjectsImagedObjectIdTextFragmentsGet(var.imaged.object.id)
dput(result)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **imaged.object.id** | **character**| Id of the imaged object | 

### Return type

[**ImagedObjectTextFragmentMatchListDTO**](ImagedObjectTextFragmentMatchListDTO.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Success |  -  |

# **V1ImagedObjectsInstitutionsGet**
> ImageInstitutionListDTO V1ImagedObjectsInstitutionsGet()

Provides a list of all institutional image providers.

### Example
```R
library(qumranica_api_connector)


#Provides a list of all institutional image providers.
api.instance <- ImagedObjectApi$new()
# Configure API key authorization: Bearer
api.instance$apiClient$apiKeys['Authorization'] <- 'TODO_YOUR_API_KEY';
result <- api.instance$V1ImagedObjectsInstitutionsGet()
dput(result)
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**ImageInstitutionListDTO**](ImageInstitutionListDTO.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Success |  -  |

# **V1ImagedObjectsInstitutionsInstitutionNameGet**
> InstitutionalImageListDTO V1ImagedObjectsInstitutionsInstitutionNameGet(institution.name)

Provides a list of all institutional image providers.

### Example
```R
library(qumranica_api_connector)

var.institution.name <- 'institution.name_example' # character | 

#Provides a list of all institutional image providers.
api.instance <- ImagedObjectApi$new()
# Configure API key authorization: Bearer
api.instance$apiClient$apiKeys['Authorization'] <- 'TODO_YOUR_API_KEY';
result <- api.instance$V1ImagedObjectsInstitutionsInstitutionNameGet(var.institution.name)
dput(result)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **institution.name** | **character**|  | 

### Return type

[**InstitutionalImageListDTO**](InstitutionalImageListDTO.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Success |  -  |

