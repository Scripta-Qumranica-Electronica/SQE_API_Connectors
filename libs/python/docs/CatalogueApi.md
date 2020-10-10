# qumranica_api_connector.CatalogueApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v1_catalogue_confirm_match_iaa_edition_catalog_to_text_fragment_id_delete**](CatalogueApi.md#v1_catalogue_confirm_match_iaa_edition_catalog_to_text_fragment_id_delete) | **DELETE** /v1/catalogue/confirm-match/{iaaEditionCatalogToTextFragmentId} | Remove an existing imaged object and text fragment match, which is not correct
[**v1_catalogue_confirm_match_iaa_edition_catalog_to_text_fragment_id_post**](CatalogueApi.md#v1_catalogue_confirm_match_iaa_edition_catalog_to_text_fragment_id_post) | **POST** /v1/catalogue/confirm-match/{iaaEditionCatalogToTextFragmentId} | Confirm the correctness of an existing imaged object and text fragment match
[**v1_catalogue_editions_edition_id_imaged_object_text_fragment_matches_get**](CatalogueApi.md#v1_catalogue_editions_edition_id_imaged_object_text_fragment_matches_get) | **GET** /v1/catalogue/editions/{editionId}/imaged-object-text-fragment-matches | Get a listing of all corresponding imaged objects and transcribed text fragment in a specified edition
[**v1_catalogue_imaged_objects_imaged_object_id_text_fragments_get**](CatalogueApi.md#v1_catalogue_imaged_objects_imaged_object_id_text_fragments_get) | **GET** /v1/catalogue/imaged-objects/{imagedObjectId}/text-fragments | Get a listing of all text fragments matches that correspond to an imaged object
[**v1_catalogue_manuscripts_manuscript_id_imaged_object_text_fragment_matches_get**](CatalogueApi.md#v1_catalogue_manuscripts_manuscript_id_imaged_object_text_fragment_matches_get) | **GET** /v1/catalogue/manuscripts/{manuscriptId}/imaged-object-text-fragment-matches | Get a listing of all corresponding imaged objects and transcribed text fragment in a specified manuscript
[**v1_catalogue_post**](CatalogueApi.md#v1_catalogue_post) | **POST** /v1/catalogue | Create a new matched pair for an imaged object and a text fragment along with the edition princeps information
[**v1_catalogue_text_fragments_text_fragment_id_imaged_objects_get**](CatalogueApi.md#v1_catalogue_text_fragments_text_fragment_id_imaged_objects_get) | **GET** /v1/catalogue/text-fragments/{textFragmentId}/imaged-objects | Get a listing of all imaged objects that matches that correspond to a transcribed text fragment


# **v1_catalogue_confirm_match_iaa_edition_catalog_to_text_fragment_id_delete**
> v1_catalogue_confirm_match_iaa_edition_catalog_to_text_fragment_id_delete(iaa_edition_catalog_to_text_fragment_id)

Remove an existing imaged object and text fragment match, which is not correct

### Example

* Api Key Authentication (Bearer):
```python
from __future__ import print_function
import time
import qumranica_api_connector
from qumranica_api_connector.rest import ApiException
from pprint import pprint
# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = qumranica_api_connector.Configuration(
    host = "http://localhost"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: Bearer
configuration = qumranica_api_connector.Configuration(
    host = "http://localhost",
    api_key = {
        'Authorization': 'YOUR_API_KEY'
    }
)
# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Authorization'] = 'Bearer'

# Enter a context with an instance of the API client
with qumranica_api_connector.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = qumranica_api_connector.CatalogueApi(api_client)
    iaa_edition_catalog_to_text_fragment_id = 56 # int | The unique id of the match to confirm

    try:
        # Remove an existing imaged object and text fragment match, which is not correct
        api_instance.v1_catalogue_confirm_match_iaa_edition_catalog_to_text_fragment_id_delete(iaa_edition_catalog_to_text_fragment_id)
    except ApiException as e:
        print("Exception when calling CatalogueApi->v1_catalogue_confirm_match_iaa_edition_catalog_to_text_fragment_id_delete: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **iaa_edition_catalog_to_text_fragment_id** | **int**| The unique id of the match to confirm | 

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
**200** | Success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **v1_catalogue_confirm_match_iaa_edition_catalog_to_text_fragment_id_post**
> v1_catalogue_confirm_match_iaa_edition_catalog_to_text_fragment_id_post(iaa_edition_catalog_to_text_fragment_id)

Confirm the correctness of an existing imaged object and text fragment match

### Example

* Api Key Authentication (Bearer):
```python
from __future__ import print_function
import time
import qumranica_api_connector
from qumranica_api_connector.rest import ApiException
from pprint import pprint
# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = qumranica_api_connector.Configuration(
    host = "http://localhost"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: Bearer
configuration = qumranica_api_connector.Configuration(
    host = "http://localhost",
    api_key = {
        'Authorization': 'YOUR_API_KEY'
    }
)
# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Authorization'] = 'Bearer'

# Enter a context with an instance of the API client
with qumranica_api_connector.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = qumranica_api_connector.CatalogueApi(api_client)
    iaa_edition_catalog_to_text_fragment_id = 56 # int | The unique id of the match to confirm

    try:
        # Confirm the correctness of an existing imaged object and text fragment match
        api_instance.v1_catalogue_confirm_match_iaa_edition_catalog_to_text_fragment_id_post(iaa_edition_catalog_to_text_fragment_id)
    except ApiException as e:
        print("Exception when calling CatalogueApi->v1_catalogue_confirm_match_iaa_edition_catalog_to_text_fragment_id_post: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **iaa_edition_catalog_to_text_fragment_id** | **int**| The unique id of the match to confirm | 

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
**200** | Success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **v1_catalogue_editions_edition_id_imaged_object_text_fragment_matches_get**
> CatalogueMatchListDTO v1_catalogue_editions_edition_id_imaged_object_text_fragment_matches_get(edition_id)

Get a listing of all corresponding imaged objects and transcribed text fragment in a specified edition

### Example

* Api Key Authentication (Bearer):
```python
from __future__ import print_function
import time
import qumranica_api_connector
from qumranica_api_connector.rest import ApiException
from pprint import pprint
# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = qumranica_api_connector.Configuration(
    host = "http://localhost"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: Bearer
configuration = qumranica_api_connector.Configuration(
    host = "http://localhost",
    api_key = {
        'Authorization': 'YOUR_API_KEY'
    }
)
# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Authorization'] = 'Bearer'

# Enter a context with an instance of the API client
with qumranica_api_connector.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = qumranica_api_connector.CatalogueApi(api_client)
    edition_id = 56 # int | Unique Id of the edition to search for imaged objects to text fragment matches

    try:
        # Get a listing of all corresponding imaged objects and transcribed text fragment in a specified edition
        api_response = api_instance.v1_catalogue_editions_edition_id_imaged_object_text_fragment_matches_get(edition_id)
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling CatalogueApi->v1_catalogue_editions_edition_id_imaged_object_text_fragment_matches_get: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **edition_id** | **int**| Unique Id of the edition to search for imaged objects to text fragment matches | 

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
**200** | Success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **v1_catalogue_imaged_objects_imaged_object_id_text_fragments_get**
> CatalogueMatchListDTO v1_catalogue_imaged_objects_imaged_object_id_text_fragments_get(imaged_object_id)

Get a listing of all text fragments matches that correspond to an imaged object

### Example

* Api Key Authentication (Bearer):
```python
from __future__ import print_function
import time
import qumranica_api_connector
from qumranica_api_connector.rest import ApiException
from pprint import pprint
# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = qumranica_api_connector.Configuration(
    host = "http://localhost"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: Bearer
configuration = qumranica_api_connector.Configuration(
    host = "http://localhost",
    api_key = {
        'Authorization': 'YOUR_API_KEY'
    }
)
# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Authorization'] = 'Bearer'

# Enter a context with an instance of the API client
with qumranica_api_connector.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = qumranica_api_connector.CatalogueApi(api_client)
    imaged_object_id = 'imaged_object_id_example' # str | Id of imaged object to search for transcription matches

    try:
        # Get a listing of all text fragments matches that correspond to an imaged object
        api_response = api_instance.v1_catalogue_imaged_objects_imaged_object_id_text_fragments_get(imaged_object_id)
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling CatalogueApi->v1_catalogue_imaged_objects_imaged_object_id_text_fragments_get: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **imaged_object_id** | **str**| Id of imaged object to search for transcription matches | 

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
**200** | Success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **v1_catalogue_manuscripts_manuscript_id_imaged_object_text_fragment_matches_get**
> CatalogueMatchListDTO v1_catalogue_manuscripts_manuscript_id_imaged_object_text_fragment_matches_get(manuscript_id)

Get a listing of all corresponding imaged objects and transcribed text fragment in a specified manuscript

### Example

* Api Key Authentication (Bearer):
```python
from __future__ import print_function
import time
import qumranica_api_connector
from qumranica_api_connector.rest import ApiException
from pprint import pprint
# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = qumranica_api_connector.Configuration(
    host = "http://localhost"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: Bearer
configuration = qumranica_api_connector.Configuration(
    host = "http://localhost",
    api_key = {
        'Authorization': 'YOUR_API_KEY'
    }
)
# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Authorization'] = 'Bearer'

# Enter a context with an instance of the API client
with qumranica_api_connector.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = qumranica_api_connector.CatalogueApi(api_client)
    manuscript_id = 56 # int | Unique Id of the manuscript to search for imaged objects to text fragment matches

    try:
        # Get a listing of all corresponding imaged objects and transcribed text fragment in a specified manuscript
        api_response = api_instance.v1_catalogue_manuscripts_manuscript_id_imaged_object_text_fragment_matches_get(manuscript_id)
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling CatalogueApi->v1_catalogue_manuscripts_manuscript_id_imaged_object_text_fragment_matches_get: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **manuscript_id** | **int**| Unique Id of the manuscript to search for imaged objects to text fragment matches | 

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
**200** | Success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **v1_catalogue_post**
> v1_catalogue_post(catalogue_match_input_dto=catalogue_match_input_dto)

Create a new matched pair for an imaged object and a text fragment along with the edition princeps information

### Example

* Api Key Authentication (Bearer):
```python
from __future__ import print_function
import time
import qumranica_api_connector
from qumranica_api_connector.rest import ApiException
from pprint import pprint
# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = qumranica_api_connector.Configuration(
    host = "http://localhost"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: Bearer
configuration = qumranica_api_connector.Configuration(
    host = "http://localhost",
    api_key = {
        'Authorization': 'YOUR_API_KEY'
    }
)
# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Authorization'] = 'Bearer'

# Enter a context with an instance of the API client
with qumranica_api_connector.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = qumranica_api_connector.CatalogueApi(api_client)
    catalogue_match_input_dto = qumranica_api_connector.CatalogueMatchInputDTO() # CatalogueMatchInputDTO | The details of the new match (optional)

    try:
        # Create a new matched pair for an imaged object and a text fragment along with the edition princeps information
        api_instance.v1_catalogue_post(catalogue_match_input_dto=catalogue_match_input_dto)
    except ApiException as e:
        print("Exception when calling CatalogueApi->v1_catalogue_post: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **catalogue_match_input_dto** | [**CatalogueMatchInputDTO**](CatalogueMatchInputDTO.md)| The details of the new match | [optional] 

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
**200** | Success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **v1_catalogue_text_fragments_text_fragment_id_imaged_objects_get**
> CatalogueMatchListDTO v1_catalogue_text_fragments_text_fragment_id_imaged_objects_get(text_fragment_id)

Get a listing of all imaged objects that matches that correspond to a transcribed text fragment

### Example

* Api Key Authentication (Bearer):
```python
from __future__ import print_function
import time
import qumranica_api_connector
from qumranica_api_connector.rest import ApiException
from pprint import pprint
# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = qumranica_api_connector.Configuration(
    host = "http://localhost"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: Bearer
configuration = qumranica_api_connector.Configuration(
    host = "http://localhost",
    api_key = {
        'Authorization': 'YOUR_API_KEY'
    }
)
# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Authorization'] = 'Bearer'

# Enter a context with an instance of the API client
with qumranica_api_connector.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = qumranica_api_connector.CatalogueApi(api_client)
    text_fragment_id = 56 # int | Unique Id of the text fragment to search for imaged object matches

    try:
        # Get a listing of all imaged objects that matches that correspond to a transcribed text fragment
        api_response = api_instance.v1_catalogue_text_fragments_text_fragment_id_imaged_objects_get(text_fragment_id)
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling CatalogueApi->v1_catalogue_text_fragments_text_fragment_id_imaged_objects_get: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **text_fragment_id** | **int**| Unique Id of the text fragment to search for imaged object matches | 

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
**200** | Success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

