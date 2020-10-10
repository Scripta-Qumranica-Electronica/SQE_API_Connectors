# ArtefactApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**V1EditionsEditionIdArtefactGroupsArtefactGroupIdDelete**](ArtefactApi.md#V1EditionsEditionIdArtefactGroupsArtefactGroupIdDelete) | **DELETE** /v1/editions/{editionId}/artefact-groups/{artefactGroupId} | Deletes the specified artefact group.
[**V1EditionsEditionIdArtefactGroupsArtefactGroupIdGet**](ArtefactApi.md#V1EditionsEditionIdArtefactGroupsArtefactGroupIdGet) | **GET** /v1/editions/{editionId}/artefact-groups/{artefactGroupId} | Gets the details of a specific artefact group in the edition
[**V1EditionsEditionIdArtefactGroupsArtefactGroupIdPut**](ArtefactApi.md#V1EditionsEditionIdArtefactGroupsArtefactGroupIdPut) | **PUT** /v1/editions/{editionId}/artefact-groups/{artefactGroupId} | Updates the details of an artefact group.  The artefact group will now only contain the artefacts listed in the JSON payload.  If the name is null, no change will be made, otherwise the name will also be updated.
[**V1EditionsEditionIdArtefactGroupsGet**](ArtefactApi.md#V1EditionsEditionIdArtefactGroupsGet) | **GET** /v1/editions/{editionId}/artefact-groups | Gets a listing of all artefact groups in the edition
[**V1EditionsEditionIdArtefactGroupsPost**](ArtefactApi.md#V1EditionsEditionIdArtefactGroupsPost) | **POST** /v1/editions/{editionId}/artefact-groups | Creates a new artefact group with the submitted data.  The new artefact must have a list of artefacts that belong to the group.  It is not necessary to give the group a name.
[**V1EditionsEditionIdArtefactsArtefactIdDelete**](ArtefactApi.md#V1EditionsEditionIdArtefactsArtefactIdDelete) | **DELETE** /v1/editions/{editionId}/artefacts/{artefactId} | Deletes the specified artefact
[**V1EditionsEditionIdArtefactsArtefactIdGet**](ArtefactApi.md#V1EditionsEditionIdArtefactsArtefactIdGet) | **GET** /v1/editions/{editionId}/artefacts/{artefactId} | Provides a listing of all artefacts that are part of the specified edition
[**V1EditionsEditionIdArtefactsArtefactIdPut**](ArtefactApi.md#V1EditionsEditionIdArtefactsArtefactIdPut) | **PUT** /v1/editions/{editionId}/artefacts/{artefactId} | Updates the specified artefact.  There are many possible attributes that can be changed for  an artefact.  The caller should only input only those that  should be changed. Attributes with a null value will be ignored.  For instance, setting the mask to null or \&quot;\&quot; will result in  no changes to the current mask, and no value for the mask will  be returned (or broadcast). Likewise, the transformation, name,  or status message may be set to null and no change will be made  to those entities (though any unchanged values will be returned  along with the changed values and also broadcast to co-editors).
[**V1EditionsEditionIdArtefactsArtefactIdRoisGet**](ArtefactApi.md#V1EditionsEditionIdArtefactsArtefactIdRoisGet) | **GET** /v1/editions/{editionId}/artefacts/{artefactId}/rois | Provides a listing of all rois belonging to an artefact in the specified edition
[**V1EditionsEditionIdArtefactsArtefactIdTextFragmentsGet**](ArtefactApi.md#V1EditionsEditionIdArtefactsArtefactIdTextFragmentsGet) | **GET** /v1/editions/{editionId}/artefacts/{artefactId}/text-fragments | Provides a listing of text fragments that have text in the specified artefact.  With the optional query parameter \&quot;suggested\&quot;, this endpoint will also return  any text fragment that the system suggests might have text in the artefact.
[**V1EditionsEditionIdArtefactsBatchTransformationPost**](ArtefactApi.md#V1EditionsEditionIdArtefactsBatchTransformationPost) | **POST** /v1/editions/{editionId}/artefacts/batch-transformation | Updates the positional data for a batch of artefacts
[**V1EditionsEditionIdArtefactsGet**](ArtefactApi.md#V1EditionsEditionIdArtefactsGet) | **GET** /v1/editions/{editionId}/artefacts | Provides a listing of all artefacts that are part of the specified edition
[**V1EditionsEditionIdArtefactsPost**](ArtefactApi.md#V1EditionsEditionIdArtefactsPost) | **POST** /v1/editions/{editionId}/artefacts | Creates a new artefact with the provided data.  If no mask is provided, a placeholder mask will be created with the values:  \&quot;POLYGON((0 0,1 1,1 0,0 0))\&quot; (the system requires a valid WKT polygon mask for  every artefact). It is not recommended to leave the mask, name, or work status  blank or null. It will often be advantageous to leave the transformation null  when first creating a new artefact.


# **V1EditionsEditionIdArtefactGroupsArtefactGroupIdDelete**
> DeleteDTO V1EditionsEditionIdArtefactGroupsArtefactGroupIdDelete(edition.id, artefact.group.id)

Deletes the specified artefact group.

### Example
```R
library(qumranica_api_connector)

var.edition.id <- 56 # integer | Unique Id of the desired edition
var.artefact.group.id <- 56 # integer | Unique Id of the artefact group to be deleted

#Deletes the specified artefact group.
api.instance <- ArtefactApi$new()
# Configure API key authorization: Bearer
api.instance$apiClient$apiKeys['Authorization'] <- 'TODO_YOUR_API_KEY';
result <- api.instance$V1EditionsEditionIdArtefactGroupsArtefactGroupIdDelete(var.edition.id, var.artefact.group.id)
dput(result)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **edition.id** | **integer**| Unique Id of the desired edition | 
 **artefact.group.id** | **integer**| Unique Id of the artefact group to be deleted | 

### Return type

[**DeleteDTO**](DeleteDTO.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Success |  -  |

# **V1EditionsEditionIdArtefactGroupsArtefactGroupIdGet**
> ArtefactGroupDTO V1EditionsEditionIdArtefactGroupsArtefactGroupIdGet(edition.id, artefact.group.id)

Gets the details of a specific artefact group in the edition

### Example
```R
library(qumranica_api_connector)

var.edition.id <- 56 # integer | Unique Id of the desired edition
var.artefact.group.id <- 56 # integer | Id of the desired artefact group

#Gets the details of a specific artefact group in the edition
api.instance <- ArtefactApi$new()
# Configure API key authorization: Bearer
api.instance$apiClient$apiKeys['Authorization'] <- 'TODO_YOUR_API_KEY';
result <- api.instance$V1EditionsEditionIdArtefactGroupsArtefactGroupIdGet(var.edition.id, var.artefact.group.id)
dput(result)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **edition.id** | **integer**| Unique Id of the desired edition | 
 **artefact.group.id** | **integer**| Id of the desired artefact group | 

### Return type

[**ArtefactGroupDTO**](ArtefactGroupDTO.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Success |  -  |

# **V1EditionsEditionIdArtefactGroupsArtefactGroupIdPut**
> ArtefactGroupDTO V1EditionsEditionIdArtefactGroupsArtefactGroupIdPut(edition.id, artefact.group.id, update.artefact.group.dto=var.update.artefact.group.dto)

Updates the details of an artefact group.  The artefact group will now only contain the artefacts listed in the JSON payload.  If the name is null, no change will be made, otherwise the name will also be updated.

### Example
```R
library(qumranica_api_connector)

var.edition.id <- 56 # integer | Unique Id of the desired edition
var.artefact.group.id <- 56 # integer | Id of the artefact group to be updated
var.update.artefact.group.dto <- UpdateArtefactGroupDTO$new("name_example", list(123)) # UpdateArtefactGroupDTO | Parameters that the artefact group should be changed to

#Updates the details of an artefact group.  The artefact group will now only contain the artefacts listed in the JSON payload.  If the name is null, no change will be made, otherwise the name will also be updated.
api.instance <- ArtefactApi$new()
# Configure API key authorization: Bearer
api.instance$apiClient$apiKeys['Authorization'] <- 'TODO_YOUR_API_KEY';
result <- api.instance$V1EditionsEditionIdArtefactGroupsArtefactGroupIdPut(var.edition.id, var.artefact.group.id, update.artefact.group.dto=var.update.artefact.group.dto)
dput(result)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **edition.id** | **integer**| Unique Id of the desired edition | 
 **artefact.group.id** | **integer**| Id of the artefact group to be updated | 
 **update.artefact.group.dto** | [**UpdateArtefactGroupDTO**](UpdateArtefactGroupDTO.md)| Parameters that the artefact group should be changed to | [optional] 

### Return type

[**ArtefactGroupDTO**](ArtefactGroupDTO.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/*+json
 - **Accept**: text/plain, application/json, text/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Success |  -  |

# **V1EditionsEditionIdArtefactGroupsGet**
> ArtefactGroupListDTO V1EditionsEditionIdArtefactGroupsGet(edition.id)

Gets a listing of all artefact groups in the edition

### Example
```R
library(qumranica_api_connector)

var.edition.id <- 56 # integer | Unique Id of the desired edition

#Gets a listing of all artefact groups in the edition
api.instance <- ArtefactApi$new()
# Configure API key authorization: Bearer
api.instance$apiClient$apiKeys['Authorization'] <- 'TODO_YOUR_API_KEY';
result <- api.instance$V1EditionsEditionIdArtefactGroupsGet(var.edition.id)
dput(result)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **edition.id** | **integer**| Unique Id of the desired edition | 

### Return type

[**ArtefactGroupListDTO**](ArtefactGroupListDTO.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Success |  -  |

# **V1EditionsEditionIdArtefactGroupsPost**
> ArtefactGroupDTO V1EditionsEditionIdArtefactGroupsPost(edition.id, create.artefact.group.dto=var.create.artefact.group.dto)

Creates a new artefact group with the submitted data.  The new artefact must have a list of artefacts that belong to the group.  It is not necessary to give the group a name.

### Example
```R
library(qumranica_api_connector)

var.edition.id <- 56 # integer | Unique Id of the desired edition
var.create.artefact.group.dto <- CreateArtefactGroupDTO$new("name_example", list(123)) # CreateArtefactGroupDTO | Parameters of the new artefact group

#Creates a new artefact group with the submitted data.  The new artefact must have a list of artefacts that belong to the group.  It is not necessary to give the group a name.
api.instance <- ArtefactApi$new()
# Configure API key authorization: Bearer
api.instance$apiClient$apiKeys['Authorization'] <- 'TODO_YOUR_API_KEY';
result <- api.instance$V1EditionsEditionIdArtefactGroupsPost(var.edition.id, create.artefact.group.dto=var.create.artefact.group.dto)
dput(result)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **edition.id** | **integer**| Unique Id of the desired edition | 
 **create.artefact.group.dto** | [**CreateArtefactGroupDTO**](CreateArtefactGroupDTO.md)| Parameters of the new artefact group | [optional] 

### Return type

[**ArtefactGroupDTO**](ArtefactGroupDTO.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/*+json
 - **Accept**: text/plain, application/json, text/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Success |  -  |

# **V1EditionsEditionIdArtefactsArtefactIdDelete**
> V1EditionsEditionIdArtefactsArtefactIdDelete(edition.id, artefact.id)

Deletes the specified artefact

### Example
```R
library(qumranica_api_connector)

var.edition.id <- 56 # integer | Unique Id of the desired edition
var.artefact.id <- 56 # integer | Unique Id of the desired artefact

#Deletes the specified artefact
api.instance <- ArtefactApi$new()
# Configure API key authorization: Bearer
api.instance$apiClient$apiKeys['Authorization'] <- 'TODO_YOUR_API_KEY';
api.instance$V1EditionsEditionIdArtefactsArtefactIdDelete(var.edition.id, var.artefact.id)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **edition.id** | **integer**| Unique Id of the desired edition | 
 **artefact.id** | **integer**| Unique Id of the desired artefact | 

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

# **V1EditionsEditionIdArtefactsArtefactIdGet**
> ArtefactDTO V1EditionsEditionIdArtefactsArtefactIdGet(edition.id, artefact.id, optional=var.optional)

Provides a listing of all artefacts that are part of the specified edition

### Example
```R
library(qumranica_api_connector)

var.edition.id <- 56 # integer | Unique Id of the desired edition
var.artefact.id <- 56 # integer | Unique Id of the desired artefact
var.optional <- list("inner_example") # array[character] | Add \"masks\" to include artefact polygons and \"images\" to include image data

#Provides a listing of all artefacts that are part of the specified edition
api.instance <- ArtefactApi$new()
# Configure API key authorization: Bearer
api.instance$apiClient$apiKeys['Authorization'] <- 'TODO_YOUR_API_KEY';
result <- api.instance$V1EditionsEditionIdArtefactsArtefactIdGet(var.edition.id, var.artefact.id, optional=var.optional)
dput(result)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **edition.id** | **integer**| Unique Id of the desired edition | 
 **artefact.id** | **integer**| Unique Id of the desired artefact | 
 **optional** | list( **character** )| Add \&quot;masks\&quot; to include artefact polygons and \&quot;images\&quot; to include image data | [optional] 

### Return type

[**ArtefactDTO**](ArtefactDTO.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Success |  -  |

# **V1EditionsEditionIdArtefactsArtefactIdPut**
> ArtefactDTO V1EditionsEditionIdArtefactsArtefactIdPut(edition.id, artefact.id, update.artefact.dto=var.update.artefact.dto)

Updates the specified artefact.  There are many possible attributes that can be changed for  an artefact.  The caller should only input only those that  should be changed. Attributes with a null value will be ignored.  For instance, setting the mask to null or \"\" will result in  no changes to the current mask, and no value for the mask will  be returned (or broadcast). Likewise, the transformation, name,  or status message may be set to null and no change will be made  to those entities (though any unchanged values will be returned  along with the changed values and also broadcast to co-editors).

### Example
```R
library(qumranica_api_connector)

var.edition.id <- 56 # integer | Unique Id of the desired edition
var.artefact.id <- 56 # integer | Unique Id of the desired artefact
var.update.artefact.dto <- UpdateArtefactDTO$new("mask_example", PlacementDTO$new(123, 123, 123, TranslateDTO$new(123, 123)), "name_example", "statusMessage_example") # UpdateArtefactDTO | An UpdateArtefactDTO with the desired alterations to the artefact

#Updates the specified artefact.  There are many possible attributes that can be changed for  an artefact.  The caller should only input only those that  should be changed. Attributes with a null value will be ignored.  For instance, setting the mask to null or \"\" will result in  no changes to the current mask, and no value for the mask will  be returned (or broadcast). Likewise, the transformation, name,  or status message may be set to null and no change will be made  to those entities (though any unchanged values will be returned  along with the changed values and also broadcast to co-editors).
api.instance <- ArtefactApi$new()
# Configure API key authorization: Bearer
api.instance$apiClient$apiKeys['Authorization'] <- 'TODO_YOUR_API_KEY';
result <- api.instance$V1EditionsEditionIdArtefactsArtefactIdPut(var.edition.id, var.artefact.id, update.artefact.dto=var.update.artefact.dto)
dput(result)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **edition.id** | **integer**| Unique Id of the desired edition | 
 **artefact.id** | **integer**| Unique Id of the desired artefact | 
 **update.artefact.dto** | [**UpdateArtefactDTO**](UpdateArtefactDTO.md)| An UpdateArtefactDTO with the desired alterations to the artefact | [optional] 

### Return type

[**ArtefactDTO**](ArtefactDTO.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/*+json
 - **Accept**: text/plain, application/json, text/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Success |  -  |

# **V1EditionsEditionIdArtefactsArtefactIdRoisGet**
> InterpretationRoiDTOList V1EditionsEditionIdArtefactsArtefactIdRoisGet(edition.id, artefact.id)

Provides a listing of all rois belonging to an artefact in the specified edition

### Example
```R
library(qumranica_api_connector)

var.edition.id <- 56 # integer | Unique Id of the desired edition
var.artefact.id <- 56 # integer | Unique Id of the desired artefact

#Provides a listing of all rois belonging to an artefact in the specified edition
api.instance <- ArtefactApi$new()
# Configure API key authorization: Bearer
api.instance$apiClient$apiKeys['Authorization'] <- 'TODO_YOUR_API_KEY';
result <- api.instance$V1EditionsEditionIdArtefactsArtefactIdRoisGet(var.edition.id, var.artefact.id)
dput(result)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **edition.id** | **integer**| Unique Id of the desired edition | 
 **artefact.id** | **integer**| Unique Id of the desired artefact | 

### Return type

[**InterpretationRoiDTOList**](InterpretationRoiDTOList.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Success |  -  |

# **V1EditionsEditionIdArtefactsArtefactIdTextFragmentsGet**
> ArtefactTextFragmentMatchListDTO V1EditionsEditionIdArtefactsArtefactIdTextFragmentsGet(edition.id, artefact.id, optional=var.optional)

Provides a listing of text fragments that have text in the specified artefact.  With the optional query parameter \"suggested\", this endpoint will also return  any text fragment that the system suggests might have text in the artefact.

### Example
```R
library(qumranica_api_connector)

var.edition.id <- 56 # integer | Unique Id of the desired edition
var.artefact.id <- 56 # integer | Unique Id of the desired artefact
var.optional <- list("inner_example") # array[character] | Add \"suggested\" to include possible matches suggested by the system

#Provides a listing of text fragments that have text in the specified artefact.  With the optional query parameter \"suggested\", this endpoint will also return  any text fragment that the system suggests might have text in the artefact.
api.instance <- ArtefactApi$new()
# Configure API key authorization: Bearer
api.instance$apiClient$apiKeys['Authorization'] <- 'TODO_YOUR_API_KEY';
result <- api.instance$V1EditionsEditionIdArtefactsArtefactIdTextFragmentsGet(var.edition.id, var.artefact.id, optional=var.optional)
dput(result)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **edition.id** | **integer**| Unique Id of the desired edition | 
 **artefact.id** | **integer**| Unique Id of the desired artefact | 
 **optional** | list( **character** )| Add \&quot;suggested\&quot; to include possible matches suggested by the system | [optional] 

### Return type

[**ArtefactTextFragmentMatchListDTO**](ArtefactTextFragmentMatchListDTO.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Success |  -  |

# **V1EditionsEditionIdArtefactsBatchTransformationPost**
> BatchUpdatedArtefactTransformDTO V1EditionsEditionIdArtefactsBatchTransformationPost(edition.id, batch.update.artefact.placement.dto=var.batch.update.artefact.placement.dto)

Updates the positional data for a batch of artefacts

### Example
```R
library(qumranica_api_connector)

var.edition.id <- 56 # integer | Unique Id of the desired edition
var.batch.update.artefact.placement.dto <- BatchUpdateArtefactPlacementDTO$new(list(UpdateArtefactPlacementDTO$new(123, "isPlaced_example", PlacementDTO$new(123, 123, 123, TranslateDTO$new(123, 123))))) # BatchUpdateArtefactPlacementDTO | A BatchUpdateArtefactTransformDTO with a list of the desired updates

#Updates the positional data for a batch of artefacts
api.instance <- ArtefactApi$new()
# Configure API key authorization: Bearer
api.instance$apiClient$apiKeys['Authorization'] <- 'TODO_YOUR_API_KEY';
result <- api.instance$V1EditionsEditionIdArtefactsBatchTransformationPost(var.edition.id, batch.update.artefact.placement.dto=var.batch.update.artefact.placement.dto)
dput(result)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **edition.id** | **integer**| Unique Id of the desired edition | 
 **batch.update.artefact.placement.dto** | [**BatchUpdateArtefactPlacementDTO**](BatchUpdateArtefactPlacementDTO.md)| A BatchUpdateArtefactTransformDTO with a list of the desired updates | [optional] 

### Return type

[**BatchUpdatedArtefactTransformDTO**](BatchUpdatedArtefactTransformDTO.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/*+json
 - **Accept**: text/plain, application/json, text/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Success |  -  |

# **V1EditionsEditionIdArtefactsGet**
> ArtefactListDTO V1EditionsEditionIdArtefactsGet(edition.id, optional=var.optional)

Provides a listing of all artefacts that are part of the specified edition

### Example
```R
library(qumranica_api_connector)

var.edition.id <- 56 # integer | Unique Id of the desired edition
var.optional <- list("inner_example") # array[character] | Add \"masks\" to include artefact polygons and \"images\" to include image data

#Provides a listing of all artefacts that are part of the specified edition
api.instance <- ArtefactApi$new()
# Configure API key authorization: Bearer
api.instance$apiClient$apiKeys['Authorization'] <- 'TODO_YOUR_API_KEY';
result <- api.instance$V1EditionsEditionIdArtefactsGet(var.edition.id, optional=var.optional)
dput(result)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **edition.id** | **integer**| Unique Id of the desired edition | 
 **optional** | list( **character** )| Add \&quot;masks\&quot; to include artefact polygons and \&quot;images\&quot; to include image data | [optional] 

### Return type

[**ArtefactListDTO**](ArtefactListDTO.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Success |  -  |

# **V1EditionsEditionIdArtefactsPost**
> ArtefactDTO V1EditionsEditionIdArtefactsPost(edition.id, create.artefact.dto=var.create.artefact.dto)

Creates a new artefact with the provided data.  If no mask is provided, a placeholder mask will be created with the values:  \"POLYGON((0 0,1 1,1 0,0 0))\" (the system requires a valid WKT polygon mask for  every artefact). It is not recommended to leave the mask, name, or work status  blank or null. It will often be advantageous to leave the transformation null  when first creating a new artefact.

### Example
```R
library(qumranica_api_connector)

var.edition.id <- 56 # integer | Unique Id of the desired edition
var.create.artefact.dto <- CreateArtefactDTO$new(123, "mask_example", PlacementDTO$new(123, 123, 123, TranslateDTO$new(123, 123)), "name_example", "statusMessage_example") # CreateArtefactDTO | A CreateArtefactDTO with the data for the new artefact

#Creates a new artefact with the provided data.  If no mask is provided, a placeholder mask will be created with the values:  \"POLYGON((0 0,1 1,1 0,0 0))\" (the system requires a valid WKT polygon mask for  every artefact). It is not recommended to leave the mask, name, or work status  blank or null. It will often be advantageous to leave the transformation null  when first creating a new artefact.
api.instance <- ArtefactApi$new()
# Configure API key authorization: Bearer
api.instance$apiClient$apiKeys['Authorization'] <- 'TODO_YOUR_API_KEY';
result <- api.instance$V1EditionsEditionIdArtefactsPost(var.edition.id, create.artefact.dto=var.create.artefact.dto)
dput(result)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **edition.id** | **integer**| Unique Id of the desired edition | 
 **create.artefact.dto** | [**CreateArtefactDTO**](CreateArtefactDTO.md)| A CreateArtefactDTO with the data for the new artefact | [optional] 

### Return type

[**ArtefactDTO**](ArtefactDTO.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/*+json
 - **Accept**: text/plain, application/json, text/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Success |  -  |

