# qumranica_api_connector.TextApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v1_editions_edition_id_lines_line_id_get**](TextApi.md#v1_editions_edition_id_lines_line_id_get) | **GET** /v1/editions/{editionId}/lines/{lineId} | Retrieves all signs and their data from the given line
[**v1_editions_edition_id_text_fragments_get**](TextApi.md#v1_editions_edition_id_text_fragments_get) | **GET** /v1/editions/{editionId}/text-fragments | Retrieves the ids of all Fragments of all fragments in the given edition of a scroll
[**v1_editions_edition_id_text_fragments_post**](TextApi.md#v1_editions_edition_id_text_fragments_post) | **POST** /v1/editions/{editionId}/text-fragments | Creates a new text fragment in the given edition of a scroll
[**v1_editions_edition_id_text_fragments_text_fragment_id_artefacts_get**](TextApi.md#v1_editions_edition_id_text_fragments_text_fragment_id_artefacts_get) | **GET** /v1/editions/{editionId}/text-fragments/{textFragmentId}/artefacts | Retrieves the ids of all Artefacts in the given textFragmentName
[**v1_editions_edition_id_text_fragments_text_fragment_id_get**](TextApi.md#v1_editions_edition_id_text_fragments_text_fragment_id_get) | **GET** /v1/editions/{editionId}/text-fragments/{textFragmentId} | Retrieves all signs and their data from the given textFragmentName
[**v1_editions_edition_id_text_fragments_text_fragment_id_lines_get**](TextApi.md#v1_editions_edition_id_text_fragments_text_fragment_id_lines_get) | **GET** /v1/editions/{editionId}/text-fragments/{textFragmentId}/lines | Retrieves the ids of all lines in the given textFragmentName
[**v1_editions_edition_id_text_fragments_text_fragment_id_put**](TextApi.md#v1_editions_edition_id_text_fragments_text_fragment_id_put) | **PUT** /v1/editions/{editionId}/text-fragments/{textFragmentId} | Updates the specified text fragment with the submitted properties


# **v1_editions_edition_id_lines_line_id_get**
> LineTextDTO v1_editions_edition_id_lines_line_id_get(edition_id, line_id)

Retrieves all signs and their data from the given line

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
configuration.api_key['Bearer'] = 'YOUR_API_KEY'

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Bearer'] = 'Bearer'

# Enter a context with an instance of the API client
with qumranica_api_connector.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = qumranica_api_connector.TextApi(api_client)
    edition_id = 56 # int | Id of the edition
line_id = 56 # int | Id of the line

    try:
        # Retrieves all signs and their data from the given line
        api_response = api_instance.v1_editions_edition_id_lines_line_id_get(edition_id, line_id)
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling TextApi->v1_editions_edition_id_lines_line_id_get: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **edition_id** | **int**| Id of the edition | 
 **line_id** | **int**| Id of the line | 

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
**200** | Success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **v1_editions_edition_id_text_fragments_get**
> TextFragmentDataListDTO v1_editions_edition_id_text_fragments_get(edition_id)

Retrieves the ids of all Fragments of all fragments in the given edition of a scroll

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
configuration.api_key['Bearer'] = 'YOUR_API_KEY'

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Bearer'] = 'Bearer'

# Enter a context with an instance of the API client
with qumranica_api_connector.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = qumranica_api_connector.TextApi(api_client)
    edition_id = 56 # int | Id of the edition

    try:
        # Retrieves the ids of all Fragments of all fragments in the given edition of a scroll
        api_response = api_instance.v1_editions_edition_id_text_fragments_get(edition_id)
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling TextApi->v1_editions_edition_id_text_fragments_get: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **edition_id** | **int**| Id of the edition | 

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
**200** | Success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **v1_editions_edition_id_text_fragments_post**
> TextFragmentDataDTO v1_editions_edition_id_text_fragments_post(edition_id, create_text_fragment_dto=create_text_fragment_dto)

Creates a new text fragment in the given edition of a scroll

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
configuration.api_key['Bearer'] = 'YOUR_API_KEY'

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Bearer'] = 'Bearer'

# Enter a context with an instance of the API client
with qumranica_api_connector.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = qumranica_api_connector.TextApi(api_client)
    edition_id = 56 # int | Id of the edition
create_text_fragment_dto = qumranica_api_connector.CreateTextFragmentDTO() # CreateTextFragmentDTO | A JSON object with the details of the new text fragment to be created (optional)

    try:
        # Creates a new text fragment in the given edition of a scroll
        api_response = api_instance.v1_editions_edition_id_text_fragments_post(edition_id, create_text_fragment_dto=create_text_fragment_dto)
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling TextApi->v1_editions_edition_id_text_fragments_post: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **edition_id** | **int**| Id of the edition | 
 **create_text_fragment_dto** | [**CreateTextFragmentDTO**](CreateTextFragmentDTO.md)| A JSON object with the details of the new text fragment to be created | [optional] 

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
**200** | Success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **v1_editions_edition_id_text_fragments_text_fragment_id_artefacts_get**
> ArtefactDataListDTO v1_editions_edition_id_text_fragments_text_fragment_id_artefacts_get(edition_id, text_fragment_id)

Retrieves the ids of all Artefacts in the given textFragmentName

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
configuration.api_key['Bearer'] = 'YOUR_API_KEY'

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Bearer'] = 'Bearer'

# Enter a context with an instance of the API client
with qumranica_api_connector.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = qumranica_api_connector.TextApi(api_client)
    edition_id = 56 # int | Id of the edition
text_fragment_id = 56 # int | Id of the text fragment

    try:
        # Retrieves the ids of all Artefacts in the given textFragmentName
        api_response = api_instance.v1_editions_edition_id_text_fragments_text_fragment_id_artefacts_get(edition_id, text_fragment_id)
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling TextApi->v1_editions_edition_id_text_fragments_text_fragment_id_artefacts_get: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **edition_id** | **int**| Id of the edition | 
 **text_fragment_id** | **int**| Id of the text fragment | 

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
**200** | Success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **v1_editions_edition_id_text_fragments_text_fragment_id_get**
> TextEditionDTO v1_editions_edition_id_text_fragments_text_fragment_id_get(edition_id, text_fragment_id)

Retrieves all signs and their data from the given textFragmentName

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
configuration.api_key['Bearer'] = 'YOUR_API_KEY'

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Bearer'] = 'Bearer'

# Enter a context with an instance of the API client
with qumranica_api_connector.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = qumranica_api_connector.TextApi(api_client)
    edition_id = 56 # int | Id of the edition
text_fragment_id = 56 # int | Id of the text fragment

    try:
        # Retrieves all signs and their data from the given textFragmentName
        api_response = api_instance.v1_editions_edition_id_text_fragments_text_fragment_id_get(edition_id, text_fragment_id)
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling TextApi->v1_editions_edition_id_text_fragments_text_fragment_id_get: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **edition_id** | **int**| Id of the edition | 
 **text_fragment_id** | **int**| Id of the text fragment | 

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
**200** | Success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **v1_editions_edition_id_text_fragments_text_fragment_id_lines_get**
> LineDataListDTO v1_editions_edition_id_text_fragments_text_fragment_id_lines_get(edition_id, text_fragment_id)

Retrieves the ids of all lines in the given textFragmentName

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
configuration.api_key['Bearer'] = 'YOUR_API_KEY'

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Bearer'] = 'Bearer'

# Enter a context with an instance of the API client
with qumranica_api_connector.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = qumranica_api_connector.TextApi(api_client)
    edition_id = 56 # int | Id of the edition
text_fragment_id = 56 # int | Id of the text fragment

    try:
        # Retrieves the ids of all lines in the given textFragmentName
        api_response = api_instance.v1_editions_edition_id_text_fragments_text_fragment_id_lines_get(edition_id, text_fragment_id)
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling TextApi->v1_editions_edition_id_text_fragments_text_fragment_id_lines_get: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **edition_id** | **int**| Id of the edition | 
 **text_fragment_id** | **int**| Id of the text fragment | 

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
**200** | Success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **v1_editions_edition_id_text_fragments_text_fragment_id_put**
> TextFragmentDataDTO v1_editions_edition_id_text_fragments_text_fragment_id_put(edition_id, text_fragment_id, update_text_fragment_dto=update_text_fragment_dto)

Updates the specified text fragment with the submitted properties

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
configuration.api_key['Bearer'] = 'YOUR_API_KEY'

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Bearer'] = 'Bearer'

# Enter a context with an instance of the API client
with qumranica_api_connector.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = qumranica_api_connector.TextApi(api_client)
    edition_id = 56 # int | Edition of the text fragment being updates
text_fragment_id = 56 # int | Id of the text fragment being updates
update_text_fragment_dto = qumranica_api_connector.UpdateTextFragmentDTO() # UpdateTextFragmentDTO | Details of the updated text fragment (optional)

    try:
        # Updates the specified text fragment with the submitted properties
        api_response = api_instance.v1_editions_edition_id_text_fragments_text_fragment_id_put(edition_id, text_fragment_id, update_text_fragment_dto=update_text_fragment_dto)
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling TextApi->v1_editions_edition_id_text_fragments_text_fragment_id_put: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **edition_id** | **int**| Edition of the text fragment being updates | 
 **text_fragment_id** | **int**| Id of the text fragment being updates | 
 **update_text_fragment_dto** | [**UpdateTextFragmentDTO**](UpdateTextFragmentDTO.md)| Details of the updated text fragment | [optional] 

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
**200** | Success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

