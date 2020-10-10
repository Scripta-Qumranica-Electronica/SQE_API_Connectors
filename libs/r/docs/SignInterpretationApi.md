# SignInterpretationApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**V1EditionsEditionIdSignInterpretationsAttributesAttributeIdDelete**](SignInterpretationApi.md#V1EditionsEditionIdSignInterpretationsAttributesAttributeIdDelete) | **DELETE** /v1/editions/{editionId}/sign-interpretations-attributes/{attributeId} | Delete an attribute from an edition
[**V1EditionsEditionIdSignInterpretationsAttributesAttributeIdPut**](SignInterpretationApi.md#V1EditionsEditionIdSignInterpretationsAttributesAttributeIdPut) | **PUT** /v1/editions/{editionId}/sign-interpretations-attributes/{attributeId} | Change the details of an attribute in an edition
[**V1EditionsEditionIdSignInterpretationsAttributesGet**](SignInterpretationApi.md#V1EditionsEditionIdSignInterpretationsAttributesGet) | **GET** /v1/editions/{editionId}/sign-interpretations-attributes | Retrieve a list of all possible attributes for an edition
[**V1EditionsEditionIdSignInterpretationsAttributesPost**](SignInterpretationApi.md#V1EditionsEditionIdSignInterpretationsAttributesPost) | **POST** /v1/editions/{editionId}/sign-interpretations-attributes | Create a new attribute for an edition
[**V1EditionsEditionIdSignInterpretationsPost**](SignInterpretationApi.md#V1EditionsEditionIdSignInterpretationsPost) | **POST** /v1/editions/{editionId}/sign-interpretations | Creates a new sign interpretation
[**V1EditionsEditionIdSignInterpretationsSignInterpretationIdAttributesAttributeValueIdDelete**](SignInterpretationApi.md#V1EditionsEditionIdSignInterpretationsSignInterpretationIdAttributesAttributeValueIdDelete) | **DELETE** /v1/editions/{editionId}/sign-interpretations/{signInterpretationId}/attributes/{attributeValueId} | This deletes the specified attribute value from the specified sign interpretation.
[**V1EditionsEditionIdSignInterpretationsSignInterpretationIdAttributesAttributeValueIdPut**](SignInterpretationApi.md#V1EditionsEditionIdSignInterpretationsSignInterpretationIdAttributesAttributeValueIdPut) | **PUT** /v1/editions/{editionId}/sign-interpretations/{signInterpretationId}/attributes/{attributeValueId} | This changes the values of the specified sign interpretation attribute,  mainly used to change commentary.
[**V1EditionsEditionIdSignInterpretationsSignInterpretationIdAttributesPost**](SignInterpretationApi.md#V1EditionsEditionIdSignInterpretationsSignInterpretationIdAttributesPost) | **POST** /v1/editions/{editionId}/sign-interpretations/{signInterpretationId}/attributes | This adds a new attribute to the specified sign interpretation.
[**V1EditionsEditionIdSignInterpretationsSignInterpretationIdCommentaryPut**](SignInterpretationApi.md#V1EditionsEditionIdSignInterpretationsSignInterpretationIdCommentaryPut) | **PUT** /v1/editions/{editionId}/sign-interpretations/{signInterpretationId}/commentary | Updates the commentary of a sign interpretation
[**V1EditionsEditionIdSignInterpretationsSignInterpretationIdDelete**](SignInterpretationApi.md#V1EditionsEditionIdSignInterpretationsSignInterpretationIdDelete) | **DELETE** /v1/editions/{editionId}/sign-interpretations/{signInterpretationId} | Deletes the sign interpretation in the route. The endpoint automatically manages the sign stream  by connecting all the deleted sign&#39;s next and previous nodes.
[**V1EditionsEditionIdSignInterpretationsSignInterpretationIdGet**](SignInterpretationApi.md#V1EditionsEditionIdSignInterpretationsSignInterpretationIdGet) | **GET** /v1/editions/{editionId}/sign-interpretations/{signInterpretationId} | Retrieve the details of a sign interpretation in an edition
[**V1EditionsEditionIdSignInterpretationsSignInterpretationIdLinkToNextSignInterpretationIdPost**](SignInterpretationApi.md#V1EditionsEditionIdSignInterpretationsSignInterpretationIdLinkToNextSignInterpretationIdPost) | **POST** /v1/editions/{editionId}/sign-interpretations/{signInterpretationId}/link-to/{nextSignInterpretationId} | Links two sign interpretations in the edition&#39;s sign stream
[**V1EditionsEditionIdSignInterpretationsSignInterpretationIdUnlinkFromNextSignInterpretationIdPost**](SignInterpretationApi.md#V1EditionsEditionIdSignInterpretationsSignInterpretationIdUnlinkFromNextSignInterpretationIdPost) | **POST** /v1/editions/{editionId}/sign-interpretations/{signInterpretationId}/unlink-from/{nextSignInterpretationId} | Links two sign interpretations in the edition&#39;s sign stream


# **V1EditionsEditionIdSignInterpretationsAttributesAttributeIdDelete**
> V1EditionsEditionIdSignInterpretationsAttributesAttributeIdDelete(edition.id, attribute.id)

Delete an attribute from an edition

### Example
```R
library(qumranica_api_connector)

var.edition.id <- 56 # integer | The ID of the edition being edited
var.attribute.id <- 56 # integer | The ID of the attribute to delete

#Delete an attribute from an edition
api.instance <- SignInterpretationApi$new()
# Configure API key authorization: Bearer
api.instance$apiClient$apiKeys['Authorization'] <- 'TODO_YOUR_API_KEY';
api.instance$V1EditionsEditionIdSignInterpretationsAttributesAttributeIdDelete(var.edition.id, var.attribute.id)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **edition.id** | **integer**| The ID of the edition being edited | 
 **attribute.id** | **integer**| The ID of the attribute to delete | 

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

# **V1EditionsEditionIdSignInterpretationsAttributesAttributeIdPut**
> AttributeDTO V1EditionsEditionIdSignInterpretationsAttributesAttributeIdPut(edition.id, attribute.id, update.attribute.dto=var.update.attribute.dto)

Change the details of an attribute in an edition

### Example
```R
library(qumranica_api_connector)

var.edition.id <- 56 # integer | The ID of the edition being edited
var.attribute.id <- 56 # integer | The ID of the attribute to update
var.update.attribute.dto <- UpdateAttributeDTO$new(list(CreateAttributeValueDTO$new("value_example", "description_example", "cssDirectives_example")), list(UpdateAttributeValueDTO$new(123, "value_example", "description_example", "cssDirectives_example")), list(123), "editable_example", "removable_example", "repeatable_example", "batchEditable_example") # UpdateAttributeDTO | The details of the updated attribute

#Change the details of an attribute in an edition
api.instance <- SignInterpretationApi$new()
# Configure API key authorization: Bearer
api.instance$apiClient$apiKeys['Authorization'] <- 'TODO_YOUR_API_KEY';
result <- api.instance$V1EditionsEditionIdSignInterpretationsAttributesAttributeIdPut(var.edition.id, var.attribute.id, update.attribute.dto=var.update.attribute.dto)
dput(result)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **edition.id** | **integer**| The ID of the edition being edited | 
 **attribute.id** | **integer**| The ID of the attribute to update | 
 **update.attribute.dto** | [**UpdateAttributeDTO**](UpdateAttributeDTO.md)| The details of the updated attribute | [optional] 

### Return type

[**AttributeDTO**](AttributeDTO.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/*+json
 - **Accept**: text/plain, application/json, text/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Success |  -  |

# **V1EditionsEditionIdSignInterpretationsAttributesGet**
> AttributeListDTO V1EditionsEditionIdSignInterpretationsAttributesGet(edition.id)

Retrieve a list of all possible attributes for an edition

### Example
```R
library(qumranica_api_connector)

var.edition.id <- 56 # integer | The ID of the edition being searched

#Retrieve a list of all possible attributes for an edition
api.instance <- SignInterpretationApi$new()
# Configure API key authorization: Bearer
api.instance$apiClient$apiKeys['Authorization'] <- 'TODO_YOUR_API_KEY';
result <- api.instance$V1EditionsEditionIdSignInterpretationsAttributesGet(var.edition.id)
dput(result)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **edition.id** | **integer**| The ID of the edition being searched | 

### Return type

[**AttributeListDTO**](AttributeListDTO.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Success |  -  |

# **V1EditionsEditionIdSignInterpretationsAttributesPost**
> AttributeDTO V1EditionsEditionIdSignInterpretationsAttributesPost(edition.id, create.attribute.dto=var.create.attribute.dto)

Create a new attribute for an edition

### Example
```R
library(qumranica_api_connector)

var.edition.id <- 56 # integer | The ID of the edition being edited
var.create.attribute.dto <- CreateAttributeDTO$new("attributeName_example", list(CreateAttributeValueDTO$new("value_example", "description_example", "cssDirectives_example")), "description_example", "editable_example", "removable_example", "repeatable_example", "batchEditable_example") # CreateAttributeDTO | The details of the new attribute

#Create a new attribute for an edition
api.instance <- SignInterpretationApi$new()
# Configure API key authorization: Bearer
api.instance$apiClient$apiKeys['Authorization'] <- 'TODO_YOUR_API_KEY';
result <- api.instance$V1EditionsEditionIdSignInterpretationsAttributesPost(var.edition.id, create.attribute.dto=var.create.attribute.dto)
dput(result)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **edition.id** | **integer**| The ID of the edition being edited | 
 **create.attribute.dto** | [**CreateAttributeDTO**](CreateAttributeDTO.md)| The details of the new attribute | [optional] 

### Return type

[**AttributeDTO**](AttributeDTO.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/*+json
 - **Accept**: text/plain, application/json, text/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Success |  -  |

# **V1EditionsEditionIdSignInterpretationsPost**
> SignInterpretationListDTO V1EditionsEditionIdSignInterpretationsPost(edition.id, sign.interpretation.create.dto=var.sign.interpretation.create.dto)

Creates a new sign interpretation

### Example
```R
library(qumranica_api_connector)

var.edition.id <- 56 # integer | ID of the edition being changed
var.sign.interpretation.create.dto <- SignInterpretationCreateDTO$new(123, list(123), list(123), list(InterpretationAttributeCreateDTO$new("commentary_example", 123, 123, 123)), list(SetInterpretationRoiDTO$new(123, 123, "shape_example", TranslateDTO$new(123, 123), 123, "exceptional_example", "valuesSet_example")), CommentaryCreateDTO$new("commentary_example"), "breakPreviousAndNextSignInterpretations_example", "character_example", "isVariant_example") # SignInterpretationCreateDTO | New sign interpretation data to be added

#Creates a new sign interpretation
api.instance <- SignInterpretationApi$new()
# Configure API key authorization: Bearer
api.instance$apiClient$apiKeys['Authorization'] <- 'TODO_YOUR_API_KEY';
result <- api.instance$V1EditionsEditionIdSignInterpretationsPost(var.edition.id, sign.interpretation.create.dto=var.sign.interpretation.create.dto)
dput(result)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **edition.id** | **integer**| ID of the edition being changed | 
 **sign.interpretation.create.dto** | [**SignInterpretationCreateDTO**](SignInterpretationCreateDTO.md)| New sign interpretation data to be added | [optional] 

### Return type

[**SignInterpretationListDTO**](SignInterpretationListDTO.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/*+json
 - **Accept**: text/plain, application/json, text/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Success |  -  |

# **V1EditionsEditionIdSignInterpretationsSignInterpretationIdAttributesAttributeValueIdDelete**
> V1EditionsEditionIdSignInterpretationsSignInterpretationIdAttributesAttributeValueIdDelete(edition.id, sign.interpretation.id, attribute.value.id)

This deletes the specified attribute value from the specified sign interpretation.

### Example
```R
library(qumranica_api_connector)

var.edition.id <- 56 # integer | ID of the edition being changed
var.sign.interpretation.id <- 56 # integer | ID of the sign interpretation being altered
var.attribute.value.id <- 56 # integer | Id of the attribute being removed

#This deletes the specified attribute value from the specified sign interpretation.
api.instance <- SignInterpretationApi$new()
# Configure API key authorization: Bearer
api.instance$apiClient$apiKeys['Authorization'] <- 'TODO_YOUR_API_KEY';
api.instance$V1EditionsEditionIdSignInterpretationsSignInterpretationIdAttributesAttributeValueIdDelete(var.edition.id, var.sign.interpretation.id, var.attribute.value.id)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **edition.id** | **integer**| ID of the edition being changed | 
 **sign.interpretation.id** | **integer**| ID of the sign interpretation being altered | 
 **attribute.value.id** | **integer**| Id of the attribute being removed | 

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

# **V1EditionsEditionIdSignInterpretationsSignInterpretationIdAttributesAttributeValueIdPut**
> SignInterpretationDTO V1EditionsEditionIdSignInterpretationsSignInterpretationIdAttributesAttributeValueIdPut(edition.id, sign.interpretation.id, attribute.value.id, interpretation.attribute.create.dto=var.interpretation.attribute.create.dto)

This changes the values of the specified sign interpretation attribute,  mainly used to change commentary.

### Example
```R
library(qumranica_api_connector)

var.edition.id <- 56 # integer | ID of the edition being changed
var.sign.interpretation.id <- 56 # integer | ID of the sign interpretation being altered
var.attribute.value.id <- 56 # integer | Id of the attribute value to be altered
var.interpretation.attribute.create.dto <- InterpretationAttributeCreateDTO$new("commentary_example", 123, 123, 123) # InterpretationAttributeCreateDTO | New details of the attribute

#This changes the values of the specified sign interpretation attribute,  mainly used to change commentary.
api.instance <- SignInterpretationApi$new()
# Configure API key authorization: Bearer
api.instance$apiClient$apiKeys['Authorization'] <- 'TODO_YOUR_API_KEY';
result <- api.instance$V1EditionsEditionIdSignInterpretationsSignInterpretationIdAttributesAttributeValueIdPut(var.edition.id, var.sign.interpretation.id, var.attribute.value.id, interpretation.attribute.create.dto=var.interpretation.attribute.create.dto)
dput(result)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **edition.id** | **integer**| ID of the edition being changed | 
 **sign.interpretation.id** | **integer**| ID of the sign interpretation being altered | 
 **attribute.value.id** | **integer**| Id of the attribute value to be altered | 
 **interpretation.attribute.create.dto** | [**InterpretationAttributeCreateDTO**](InterpretationAttributeCreateDTO.md)| New details of the attribute | [optional] 

### Return type

[**SignInterpretationDTO**](SignInterpretationDTO.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/*+json
 - **Accept**: text/plain, application/json, text/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Success |  -  |

# **V1EditionsEditionIdSignInterpretationsSignInterpretationIdAttributesPost**
> SignInterpretationDTO V1EditionsEditionIdSignInterpretationsSignInterpretationIdAttributesPost(edition.id, sign.interpretation.id, interpretation.attribute.create.dto=var.interpretation.attribute.create.dto)

This adds a new attribute to the specified sign interpretation.

### Example
```R
library(qumranica_api_connector)

var.edition.id <- 56 # integer | ID of the edition being changed
var.sign.interpretation.id <- 56 # integer | ID of the sign interpretation for adding a new attribute
var.interpretation.attribute.create.dto <- InterpretationAttributeCreateDTO$new("commentary_example", 123, 123, 123) # InterpretationAttributeCreateDTO | Details of the attribute to be added

#This adds a new attribute to the specified sign interpretation.
api.instance <- SignInterpretationApi$new()
# Configure API key authorization: Bearer
api.instance$apiClient$apiKeys['Authorization'] <- 'TODO_YOUR_API_KEY';
result <- api.instance$V1EditionsEditionIdSignInterpretationsSignInterpretationIdAttributesPost(var.edition.id, var.sign.interpretation.id, interpretation.attribute.create.dto=var.interpretation.attribute.create.dto)
dput(result)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **edition.id** | **integer**| ID of the edition being changed | 
 **sign.interpretation.id** | **integer**| ID of the sign interpretation for adding a new attribute | 
 **interpretation.attribute.create.dto** | [**InterpretationAttributeCreateDTO**](InterpretationAttributeCreateDTO.md)| Details of the attribute to be added | [optional] 

### Return type

[**SignInterpretationDTO**](SignInterpretationDTO.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/*+json
 - **Accept**: text/plain, application/json, text/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Success |  -  |

# **V1EditionsEditionIdSignInterpretationsSignInterpretationIdCommentaryPut**
> SignInterpretationDTO V1EditionsEditionIdSignInterpretationsSignInterpretationIdCommentaryPut(edition.id, sign.interpretation.id, commentary.create.dto=var.commentary.create.dto)

Updates the commentary of a sign interpretation

### Example
```R
library(qumranica_api_connector)

var.edition.id <- 56 # integer | ID of the edition being changed
var.sign.interpretation.id <- 56 # integer | ID of the sign interpretation whose commentary is being changed
var.commentary.create.dto <- CommentaryCreateDTO$new("commentary_example") # CommentaryCreateDTO | The new commentary for the sign interpretation

#Updates the commentary of a sign interpretation
api.instance <- SignInterpretationApi$new()
# Configure API key authorization: Bearer
api.instance$apiClient$apiKeys['Authorization'] <- 'TODO_YOUR_API_KEY';
result <- api.instance$V1EditionsEditionIdSignInterpretationsSignInterpretationIdCommentaryPut(var.edition.id, var.sign.interpretation.id, commentary.create.dto=var.commentary.create.dto)
dput(result)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **edition.id** | **integer**| ID of the edition being changed | 
 **sign.interpretation.id** | **integer**| ID of the sign interpretation whose commentary is being changed | 
 **commentary.create.dto** | [**CommentaryCreateDTO**](CommentaryCreateDTO.md)| The new commentary for the sign interpretation | [optional] 

### Return type

[**SignInterpretationDTO**](SignInterpretationDTO.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/*+json
 - **Accept**: text/plain, application/json, text/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Success |  -  |

# **V1EditionsEditionIdSignInterpretationsSignInterpretationIdDelete**
> V1EditionsEditionIdSignInterpretationsSignInterpretationIdDelete(edition.id, sign.interpretation.id)

Deletes the sign interpretation in the route. The endpoint automatically manages the sign stream  by connecting all the deleted sign's next and previous nodes.

### Example
```R
library(qumranica_api_connector)

var.edition.id <- 56 # integer | ID of the edition being changed
var.sign.interpretation.id <- 56 # integer | ID of the sign interpretation being deleted

#Deletes the sign interpretation in the route. The endpoint automatically manages the sign stream  by connecting all the deleted sign's next and previous nodes.
api.instance <- SignInterpretationApi$new()
# Configure API key authorization: Bearer
api.instance$apiClient$apiKeys['Authorization'] <- 'TODO_YOUR_API_KEY';
api.instance$V1EditionsEditionIdSignInterpretationsSignInterpretationIdDelete(var.edition.id, var.sign.interpretation.id)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **edition.id** | **integer**| ID of the edition being changed | 
 **sign.interpretation.id** | **integer**| ID of the sign interpretation being deleted | 

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

# **V1EditionsEditionIdSignInterpretationsSignInterpretationIdGet**
> SignInterpretationDTO V1EditionsEditionIdSignInterpretationsSignInterpretationIdGet(edition.id, sign.interpretation.id)

Retrieve the details of a sign interpretation in an edition

### Example
```R
library(qumranica_api_connector)

var.edition.id <- 56 # integer | The ID of the edition being searched
var.sign.interpretation.id <- 56 # integer | The desired sign interpretation id

#Retrieve the details of a sign interpretation in an edition
api.instance <- SignInterpretationApi$new()
# Configure API key authorization: Bearer
api.instance$apiClient$apiKeys['Authorization'] <- 'TODO_YOUR_API_KEY';
result <- api.instance$V1EditionsEditionIdSignInterpretationsSignInterpretationIdGet(var.edition.id, var.sign.interpretation.id)
dput(result)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **edition.id** | **integer**| The ID of the edition being searched | 
 **sign.interpretation.id** | **integer**| The desired sign interpretation id | 

### Return type

[**SignInterpretationDTO**](SignInterpretationDTO.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Success |  -  |

# **V1EditionsEditionIdSignInterpretationsSignInterpretationIdLinkToNextSignInterpretationIdPost**
> SignInterpretationDTO V1EditionsEditionIdSignInterpretationsSignInterpretationIdLinkToNextSignInterpretationIdPost(edition.id, sign.interpretation.id, next.sign.interpretation.id)

Links two sign interpretations in the edition's sign stream

### Example
```R
library(qumranica_api_connector)

var.edition.id <- 56 # integer | ID of the edition being changed
var.sign.interpretation.id <- 56 # integer | The sign interpretation to be linked to the nextSignInterpretationId
var.next.sign.interpretation.id <- 56 # integer | The sign interpretation to become the new next sign interpretation

#Links two sign interpretations in the edition's sign stream
api.instance <- SignInterpretationApi$new()
# Configure API key authorization: Bearer
api.instance$apiClient$apiKeys['Authorization'] <- 'TODO_YOUR_API_KEY';
result <- api.instance$V1EditionsEditionIdSignInterpretationsSignInterpretationIdLinkToNextSignInterpretationIdPost(var.edition.id, var.sign.interpretation.id, var.next.sign.interpretation.id)
dput(result)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **edition.id** | **integer**| ID of the edition being changed | 
 **sign.interpretation.id** | **integer**| The sign interpretation to be linked to the nextSignInterpretationId | 
 **next.sign.interpretation.id** | **integer**| The sign interpretation to become the new next sign interpretation | 

### Return type

[**SignInterpretationDTO**](SignInterpretationDTO.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Success |  -  |

# **V1EditionsEditionIdSignInterpretationsSignInterpretationIdUnlinkFromNextSignInterpretationIdPost**
> SignInterpretationDTO V1EditionsEditionIdSignInterpretationsSignInterpretationIdUnlinkFromNextSignInterpretationIdPost(edition.id, sign.interpretation.id, next.sign.interpretation.id)

Links two sign interpretations in the edition's sign stream

### Example
```R
library(qumranica_api_connector)

var.edition.id <- 56 # integer | ID of the edition being changed
var.sign.interpretation.id <- 56 # integer | The sign interpretation to be unlinked from the nextSignInterpretationId
var.next.sign.interpretation.id <- 56 # integer | The sign interpretation to removed as next sign interpretation

#Links two sign interpretations in the edition's sign stream
api.instance <- SignInterpretationApi$new()
# Configure API key authorization: Bearer
api.instance$apiClient$apiKeys['Authorization'] <- 'TODO_YOUR_API_KEY';
result <- api.instance$V1EditionsEditionIdSignInterpretationsSignInterpretationIdUnlinkFromNextSignInterpretationIdPost(var.edition.id, var.sign.interpretation.id, var.next.sign.interpretation.id)
dput(result)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **edition.id** | **integer**| ID of the edition being changed | 
 **sign.interpretation.id** | **integer**| The sign interpretation to be unlinked from the nextSignInterpretationId | 
 **next.sign.interpretation.id** | **integer**| The sign interpretation to removed as next sign interpretation | 

### Return type

[**SignInterpretationDTO**](SignInterpretationDTO.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Success |  -  |

