# CatalogueApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**V1CatalogueConfirmMatchIaaEditionCatalogToTextFragmentIdDelete**](CatalogueApi.md#V1CatalogueConfirmMatchIaaEditionCatalogToTextFragmentIdDelete) | **DELETE** /v1/catalogue/confirm-match/{iaaEditionCatalogToTextFragmentId} | Remove an existing imaged object and text fragment match, which is not correct
[**V1CatalogueConfirmMatchIaaEditionCatalogToTextFragmentIdPost**](CatalogueApi.md#V1CatalogueConfirmMatchIaaEditionCatalogToTextFragmentIdPost) | **POST** /v1/catalogue/confirm-match/{iaaEditionCatalogToTextFragmentId} | Confirm the correctness of an existing imaged object and text fragment match
[**V1CatalogueEditionsEditionIdImagedObjectTextFragmentMatchesGet**](CatalogueApi.md#V1CatalogueEditionsEditionIdImagedObjectTextFragmentMatchesGet) | **GET** /v1/catalogue/editions/{editionId}/imaged-object-text-fragment-matches | Get a listing of all corresponding imaged objects and transcribed text fragment in a specified edition
[**V1CatalogueImagedObjectsImagedObjectIdTextFragmentsGet**](CatalogueApi.md#V1CatalogueImagedObjectsImagedObjectIdTextFragmentsGet) | **GET** /v1/catalogue/imaged-objects/{imagedObjectId}/text-fragments | Get a listing of all text fragments matches that correspond to an imaged object
[**V1CatalogueManuscriptsManuscriptIdImagedObjectTextFragmentMatchesGet**](CatalogueApi.md#V1CatalogueManuscriptsManuscriptIdImagedObjectTextFragmentMatchesGet) | **GET** /v1/catalogue/manuscripts/{manuscriptId}/imaged-object-text-fragment-matches | Get a listing of all corresponding imaged objects and transcribed text fragment in a specified manuscript
[**V1CataloguePost**](CatalogueApi.md#V1CataloguePost) | **POST** /v1/catalogue | Create a new matched pair for an imaged object and a text fragment along with the edition princeps information
[**V1CatalogueTextFragmentsTextFragmentIdImagedObjectsGet**](CatalogueApi.md#V1CatalogueTextFragmentsTextFragmentIdImagedObjectsGet) | **GET** /v1/catalogue/text-fragments/{textFragmentId}/imaged-objects | Get a listing of all imaged objects that matches that correspond to a transcribed text fragment


# **V1CatalogueConfirmMatchIaaEditionCatalogToTextFragmentIdDelete**
> V1CatalogueConfirmMatchIaaEditionCatalogToTextFragmentIdDelete(iaa.edition.catalog.to.text.fragment.id)

Remove an existing imaged object and text fragment match, which is not correct

### Example
```R
library(qumranicaApiConnector)

var.iaa.edition.catalog.to.text.fragment.id <- 56 # integer | The unique id of the match to confirm

#Remove an existing imaged object and text fragment match, which is not correct
api.instance <- CatalogueApi$new()
# Configure API key authorization: Bearer
api.instance$apiClient$apiKeys['Authorization'] <- 'TODO_YOUR_API_KEY';
api.instance$V1CatalogueConfirmMatchIaaEditionCatalogToTextFragmentIdDelete(var.iaa.edition.catalog.to.text.fragment.id)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **iaa.edition.catalog.to.text.fragment.id** | **integer**| The unique id of the match to confirm | 

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

# **V1CatalogueConfirmMatchIaaEditionCatalogToTextFragmentIdPost**
> V1CatalogueConfirmMatchIaaEditionCatalogToTextFragmentIdPost(iaa.edition.catalog.to.text.fragment.id)

Confirm the correctness of an existing imaged object and text fragment match

### Example
```R
library(qumranicaApiConnector)

var.iaa.edition.catalog.to.text.fragment.id <- 56 # integer | The unique id of the match to confirm

#Confirm the correctness of an existing imaged object and text fragment match
api.instance <- CatalogueApi$new()
# Configure API key authorization: Bearer
api.instance$apiClient$apiKeys['Authorization'] <- 'TODO_YOUR_API_KEY';
api.instance$V1CatalogueConfirmMatchIaaEditionCatalogToTextFragmentIdPost(var.iaa.edition.catalog.to.text.fragment.id)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **iaa.edition.catalog.to.text.fragment.id** | **integer**| The unique id of the match to confirm | 

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

# **V1CatalogueEditionsEditionIdImagedObjectTextFragmentMatchesGet**
> CatalogueMatchListDTO V1CatalogueEditionsEditionIdImagedObjectTextFragmentMatchesGet(edition.id)

Get a listing of all corresponding imaged objects and transcribed text fragment in a specified edition

### Example
```R
library(qumranicaApiConnector)

var.edition.id <- 56 # integer | Unique Id of the edition to search for imaged objects to text fragment matches

#Get a listing of all corresponding imaged objects and transcribed text fragment in a specified edition
api.instance <- CatalogueApi$new()
# Configure API key authorization: Bearer
api.instance$apiClient$apiKeys['Authorization'] <- 'TODO_YOUR_API_KEY';
result <- api.instance$V1CatalogueEditionsEditionIdImagedObjectTextFragmentMatchesGet(var.edition.id)
dput(result)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **edition.id** | **integer**| Unique Id of the edition to search for imaged objects to text fragment matches | 

### Return type

[**CatalogueMatchListDTO**](CatalogueMatchListDTO.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Success |  -  |

# **V1CatalogueImagedObjectsImagedObjectIdTextFragmentsGet**
> CatalogueMatchListDTO V1CatalogueImagedObjectsImagedObjectIdTextFragmentsGet(imaged.object.id)

Get a listing of all text fragments matches that correspond to an imaged object

### Example
```R
library(qumranicaApiConnector)

var.imaged.object.id <- 'imaged.object.id_example' # character | Id of imaged object to search for transcription matches

#Get a listing of all text fragments matches that correspond to an imaged object
api.instance <- CatalogueApi$new()
# Configure API key authorization: Bearer
api.instance$apiClient$apiKeys['Authorization'] <- 'TODO_YOUR_API_KEY';
result <- api.instance$V1CatalogueImagedObjectsImagedObjectIdTextFragmentsGet(var.imaged.object.id)
dput(result)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **imaged.object.id** | **character**| Id of imaged object to search for transcription matches | 

### Return type

[**CatalogueMatchListDTO**](CatalogueMatchListDTO.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Success |  -  |

# **V1CatalogueManuscriptsManuscriptIdImagedObjectTextFragmentMatchesGet**
> CatalogueMatchListDTO V1CatalogueManuscriptsManuscriptIdImagedObjectTextFragmentMatchesGet(manuscript.id)

Get a listing of all corresponding imaged objects and transcribed text fragment in a specified manuscript

### Example
```R
library(qumranicaApiConnector)

var.manuscript.id <- 56 # integer | Unique Id of the manuscript to search for imaged objects to text fragment matches

#Get a listing of all corresponding imaged objects and transcribed text fragment in a specified manuscript
api.instance <- CatalogueApi$new()
# Configure API key authorization: Bearer
api.instance$apiClient$apiKeys['Authorization'] <- 'TODO_YOUR_API_KEY';
result <- api.instance$V1CatalogueManuscriptsManuscriptIdImagedObjectTextFragmentMatchesGet(var.manuscript.id)
dput(result)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **manuscript.id** | **integer**| Unique Id of the manuscript to search for imaged objects to text fragment matches | 

### Return type

[**CatalogueMatchListDTO**](CatalogueMatchListDTO.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Success |  -  |

# **V1CataloguePost**
> V1CataloguePost(catalogue.match.input.dto=var.catalogue.match.input.dto)

Create a new matched pair for an imaged object and a text fragment along with the edition princeps information

### Example
```R
library(qumranicaApiConnector)

var.catalogue.match.input.dto <- CatalogueMatchInputDTO$new(SideDesignation$new(), "imagedObjectId_example", 123, "editionName_example", "editionVolume_example", "editionLocation1_example", "editionLocation2_example", SideDesignation$new(), "comment_example", 123, 123, "confirmed_example") # CatalogueMatchInputDTO | The details of the new match

#Create a new matched pair for an imaged object and a text fragment along with the edition princeps information
api.instance <- CatalogueApi$new()
# Configure API key authorization: Bearer
api.instance$apiClient$apiKeys['Authorization'] <- 'TODO_YOUR_API_KEY';
api.instance$V1CataloguePost(catalogue.match.input.dto=var.catalogue.match.input.dto)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **catalogue.match.input.dto** | [**CatalogueMatchInputDTO**](CatalogueMatchInputDTO.md)| The details of the new match | [optional] 

### Return type

void (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/*+json
 - **Accept**: Not defined

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Success |  -  |

# **V1CatalogueTextFragmentsTextFragmentIdImagedObjectsGet**
> CatalogueMatchListDTO V1CatalogueTextFragmentsTextFragmentIdImagedObjectsGet(text.fragment.id)

Get a listing of all imaged objects that matches that correspond to a transcribed text fragment

### Example
```R
library(qumranicaApiConnector)

var.text.fragment.id <- 56 # integer | Unique Id of the text fragment to search for imaged object matches

#Get a listing of all imaged objects that matches that correspond to a transcribed text fragment
api.instance <- CatalogueApi$new()
# Configure API key authorization: Bearer
api.instance$apiClient$apiKeys['Authorization'] <- 'TODO_YOUR_API_KEY';
result <- api.instance$V1CatalogueTextFragmentsTextFragmentIdImagedObjectsGet(var.text.fragment.id)
dput(result)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **text.fragment.id** | **integer**| Unique Id of the text fragment to search for imaged object matches | 

### Return type

[**CatalogueMatchListDTO**](CatalogueMatchListDTO.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Success |  -  |

