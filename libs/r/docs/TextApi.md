# TextApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**V1EditionsEditionIdLinesLineIdGet**](TextApi.md#V1EditionsEditionIdLinesLineIdGet) | **GET** /v1/editions/{editionId}/lines/{lineId} | Retrieves all signs and their data from the given line
[**V1EditionsEditionIdTextFragmentsGet**](TextApi.md#V1EditionsEditionIdTextFragmentsGet) | **GET** /v1/editions/{editionId}/text-fragments | Retrieves the ids of all Fragments of all fragments in the given edition of a scroll
[**V1EditionsEditionIdTextFragmentsPost**](TextApi.md#V1EditionsEditionIdTextFragmentsPost) | **POST** /v1/editions/{editionId}/text-fragments | Creates a new text fragment in the given edition of a scroll
[**V1EditionsEditionIdTextFragmentsTextFragmentIdArtefactsGet**](TextApi.md#V1EditionsEditionIdTextFragmentsTextFragmentIdArtefactsGet) | **GET** /v1/editions/{editionId}/text-fragments/{textFragmentId}/artefacts | Retrieves the ids of all Artefacts in the given textFragmentName
[**V1EditionsEditionIdTextFragmentsTextFragmentIdGet**](TextApi.md#V1EditionsEditionIdTextFragmentsTextFragmentIdGet) | **GET** /v1/editions/{editionId}/text-fragments/{textFragmentId} | Retrieves all signs and their data from the given textFragmentName
[**V1EditionsEditionIdTextFragmentsTextFragmentIdLinesGet**](TextApi.md#V1EditionsEditionIdTextFragmentsTextFragmentIdLinesGet) | **GET** /v1/editions/{editionId}/text-fragments/{textFragmentId}/lines | Retrieves the ids of all lines in the given textFragmentName
[**V1EditionsEditionIdTextFragmentsTextFragmentIdPut**](TextApi.md#V1EditionsEditionIdTextFragmentsTextFragmentIdPut) | **PUT** /v1/editions/{editionId}/text-fragments/{textFragmentId} | Updates the specified text fragment with the submitted properties


# **V1EditionsEditionIdLinesLineIdGet**
> LineTextDTO V1EditionsEditionIdLinesLineIdGet(edition.id, line.id)

Retrieves all signs and their data from the given line

### Example
```R
library(openapi)

var.edition.id <- 56 # integer | Id of the edition
var.line.id <- 56 # integer | Id of the line

#Retrieves all signs and their data from the given line
api.instance <- TextApi$new()
# Configure API key authorization: Bearer
api.instance$apiClient$apiKeys['Authorization'] <- 'TODO_YOUR_API_KEY';
result <- api.instance$V1EditionsEditionIdLinesLineIdGet(var.edition.id, var.line.id)
dput(result)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **edition.id** | **integer**| Id of the edition | 
 **line.id** | **integer**| Id of the line | 

### Return type

[**LineTextDTO**](LineTextDTO.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Success |  -  |

# **V1EditionsEditionIdTextFragmentsGet**
> TextFragmentDataListDTO V1EditionsEditionIdTextFragmentsGet(edition.id)

Retrieves the ids of all Fragments of all fragments in the given edition of a scroll

### Example
```R
library(openapi)

var.edition.id <- 56 # integer | Id of the edition

#Retrieves the ids of all Fragments of all fragments in the given edition of a scroll
api.instance <- TextApi$new()
# Configure API key authorization: Bearer
api.instance$apiClient$apiKeys['Authorization'] <- 'TODO_YOUR_API_KEY';
result <- api.instance$V1EditionsEditionIdTextFragmentsGet(var.edition.id)
dput(result)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **edition.id** | **integer**| Id of the edition | 

### Return type

[**TextFragmentDataListDTO**](TextFragmentDataListDTO.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Success |  -  |

# **V1EditionsEditionIdTextFragmentsPost**
> TextFragmentDataDTO V1EditionsEditionIdTextFragmentsPost(edition.id, create.text.fragment.dto=var.create.text.fragment.dto)

Creates a new text fragment in the given edition of a scroll

### Example
```R
library(openapi)

var.edition.id <- 56 # integer | Id of the edition
var.create.text.fragment.dto <- CreateTextFragmentDTO$new("name_example", 123, 123) # CreateTextFragmentDTO | A JSON object with the details of the new text fragment to be created

#Creates a new text fragment in the given edition of a scroll
api.instance <- TextApi$new()
# Configure API key authorization: Bearer
api.instance$apiClient$apiKeys['Authorization'] <- 'TODO_YOUR_API_KEY';
result <- api.instance$V1EditionsEditionIdTextFragmentsPost(var.edition.id, create.text.fragment.dto=var.create.text.fragment.dto)
dput(result)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **edition.id** | **integer**| Id of the edition | 
 **create.text.fragment.dto** | [**CreateTextFragmentDTO**](CreateTextFragmentDTO.md)| A JSON object with the details of the new text fragment to be created | [optional] 

### Return type

[**TextFragmentDataDTO**](TextFragmentDataDTO.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/*+json
 - **Accept**: text/plain, application/json, text/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Success |  -  |

# **V1EditionsEditionIdTextFragmentsTextFragmentIdArtefactsGet**
> ArtefactDataListDTO V1EditionsEditionIdTextFragmentsTextFragmentIdArtefactsGet(edition.id, text.fragment.id)

Retrieves the ids of all Artefacts in the given textFragmentName

### Example
```R
library(openapi)

var.edition.id <- 56 # integer | Id of the edition
var.text.fragment.id <- 56 # integer | Id of the text fragment

#Retrieves the ids of all Artefacts in the given textFragmentName
api.instance <- TextApi$new()
# Configure API key authorization: Bearer
api.instance$apiClient$apiKeys['Authorization'] <- 'TODO_YOUR_API_KEY';
result <- api.instance$V1EditionsEditionIdTextFragmentsTextFragmentIdArtefactsGet(var.edition.id, var.text.fragment.id)
dput(result)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **edition.id** | **integer**| Id of the edition | 
 **text.fragment.id** | **integer**| Id of the text fragment | 

### Return type

[**ArtefactDataListDTO**](ArtefactDataListDTO.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Success |  -  |

# **V1EditionsEditionIdTextFragmentsTextFragmentIdGet**
> TextEditionDTO V1EditionsEditionIdTextFragmentsTextFragmentIdGet(edition.id, text.fragment.id)

Retrieves all signs and their data from the given textFragmentName

### Example
```R
library(openapi)

var.edition.id <- 56 # integer | Id of the edition
var.text.fragment.id <- 56 # integer | Id of the text fragment

#Retrieves all signs and their data from the given textFragmentName
api.instance <- TextApi$new()
# Configure API key authorization: Bearer
api.instance$apiClient$apiKeys['Authorization'] <- 'TODO_YOUR_API_KEY';
result <- api.instance$V1EditionsEditionIdTextFragmentsTextFragmentIdGet(var.edition.id, var.text.fragment.id)
dput(result)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **edition.id** | **integer**| Id of the edition | 
 **text.fragment.id** | **integer**| Id of the text fragment | 

### Return type

[**TextEditionDTO**](TextEditionDTO.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Success |  -  |

# **V1EditionsEditionIdTextFragmentsTextFragmentIdLinesGet**
> LineDataListDTO V1EditionsEditionIdTextFragmentsTextFragmentIdLinesGet(edition.id, text.fragment.id)

Retrieves the ids of all lines in the given textFragmentName

### Example
```R
library(openapi)

var.edition.id <- 56 # integer | Id of the edition
var.text.fragment.id <- 56 # integer | Id of the text fragment

#Retrieves the ids of all lines in the given textFragmentName
api.instance <- TextApi$new()
# Configure API key authorization: Bearer
api.instance$apiClient$apiKeys['Authorization'] <- 'TODO_YOUR_API_KEY';
result <- api.instance$V1EditionsEditionIdTextFragmentsTextFragmentIdLinesGet(var.edition.id, var.text.fragment.id)
dput(result)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **edition.id** | **integer**| Id of the edition | 
 **text.fragment.id** | **integer**| Id of the text fragment | 

### Return type

[**LineDataListDTO**](LineDataListDTO.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Success |  -  |

# **V1EditionsEditionIdTextFragmentsTextFragmentIdPut**
> TextFragmentDataDTO V1EditionsEditionIdTextFragmentsTextFragmentIdPut(edition.id, text.fragment.id, update.text.fragment.dto=var.update.text.fragment.dto)

Updates the specified text fragment with the submitted properties

### Example
```R
library(openapi)

var.edition.id <- 56 # integer | Edition of the text fragment being updates
var.text.fragment.id <- 56 # integer | Id of the text fragment being updates
var.update.text.fragment.dto <- UpdateTextFragmentDTO$new("name_example", 123, 123) # UpdateTextFragmentDTO | Details of the updated text fragment

#Updates the specified text fragment with the submitted properties
api.instance <- TextApi$new()
# Configure API key authorization: Bearer
api.instance$apiClient$apiKeys['Authorization'] <- 'TODO_YOUR_API_KEY';
result <- api.instance$V1EditionsEditionIdTextFragmentsTextFragmentIdPut(var.edition.id, var.text.fragment.id, update.text.fragment.dto=var.update.text.fragment.dto)
dput(result)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **edition.id** | **integer**| Edition of the text fragment being updates | 
 **text.fragment.id** | **integer**| Id of the text fragment being updates | 
 **update.text.fragment.dto** | [**UpdateTextFragmentDTO**](UpdateTextFragmentDTO.md)| Details of the updated text fragment | [optional] 

### Return type

[**TextFragmentDataDTO**](TextFragmentDataDTO.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/*+json
 - **Accept**: text/plain, application/json, text/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Success |  -  |

