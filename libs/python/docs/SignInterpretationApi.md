# qumranica_api_connector.SignInterpretationApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v1_editions_edition_id_sign_interpretations_attributes_attribute_id_delete**](SignInterpretationApi.md#v1_editions_edition_id_sign_interpretations_attributes_attribute_id_delete) | **DELETE** /v1/editions/{editionId}/sign-interpretations-attributes/{attributeId} | Delete an attribute from an edition
[**v1_editions_edition_id_sign_interpretations_attributes_attribute_id_put**](SignInterpretationApi.md#v1_editions_edition_id_sign_interpretations_attributes_attribute_id_put) | **PUT** /v1/editions/{editionId}/sign-interpretations-attributes/{attributeId} | Change the details of an attribute in an edition
[**v1_editions_edition_id_sign_interpretations_attributes_get**](SignInterpretationApi.md#v1_editions_edition_id_sign_interpretations_attributes_get) | **GET** /v1/editions/{editionId}/sign-interpretations-attributes | Retrieve a list of all possible attributes for an edition
[**v1_editions_edition_id_sign_interpretations_attributes_post**](SignInterpretationApi.md#v1_editions_edition_id_sign_interpretations_attributes_post) | **POST** /v1/editions/{editionId}/sign-interpretations-attributes | Create a new attribute for an edition
[**v1_editions_edition_id_sign_interpretations_post**](SignInterpretationApi.md#v1_editions_edition_id_sign_interpretations_post) | **POST** /v1/editions/{editionId}/sign-interpretations | Creates a new sign interpretation
[**v1_editions_edition_id_sign_interpretations_sign_interpretation_id_attributes_attribute_value_id_delete**](SignInterpretationApi.md#v1_editions_edition_id_sign_interpretations_sign_interpretation_id_attributes_attribute_value_id_delete) | **DELETE** /v1/editions/{editionId}/sign-interpretations/{signInterpretationId}/attributes/{attributeValueId} | This deletes the specified attribute value from the specified sign interpretation.
[**v1_editions_edition_id_sign_interpretations_sign_interpretation_id_attributes_attribute_value_id_put**](SignInterpretationApi.md#v1_editions_edition_id_sign_interpretations_sign_interpretation_id_attributes_attribute_value_id_put) | **PUT** /v1/editions/{editionId}/sign-interpretations/{signInterpretationId}/attributes/{attributeValueId} | This changes the values of the specified sign interpretation attribute,  mainly used to change commentary.
[**v1_editions_edition_id_sign_interpretations_sign_interpretation_id_attributes_post**](SignInterpretationApi.md#v1_editions_edition_id_sign_interpretations_sign_interpretation_id_attributes_post) | **POST** /v1/editions/{editionId}/sign-interpretations/{signInterpretationId}/attributes | This adds a new attribute to the specified sign interpretation.
[**v1_editions_edition_id_sign_interpretations_sign_interpretation_id_commentary_put**](SignInterpretationApi.md#v1_editions_edition_id_sign_interpretations_sign_interpretation_id_commentary_put) | **PUT** /v1/editions/{editionId}/sign-interpretations/{signInterpretationId}/commentary | Updates the commentary of a sign interpretation
[**v1_editions_edition_id_sign_interpretations_sign_interpretation_id_delete**](SignInterpretationApi.md#v1_editions_edition_id_sign_interpretations_sign_interpretation_id_delete) | **DELETE** /v1/editions/{editionId}/sign-interpretations/{signInterpretationId} | Deletes the sign interpretation in the route. The endpoint automatically manages the sign stream  by connecting all the deleted sign&#39;s next and previous nodes.
[**v1_editions_edition_id_sign_interpretations_sign_interpretation_id_get**](SignInterpretationApi.md#v1_editions_edition_id_sign_interpretations_sign_interpretation_id_get) | **GET** /v1/editions/{editionId}/sign-interpretations/{signInterpretationId} | Retrieve the details of a sign interpretation in an edition
[**v1_editions_edition_id_sign_interpretations_sign_interpretation_id_link_to_next_sign_interpretation_id_post**](SignInterpretationApi.md#v1_editions_edition_id_sign_interpretations_sign_interpretation_id_link_to_next_sign_interpretation_id_post) | **POST** /v1/editions/{editionId}/sign-interpretations/{signInterpretationId}/link-to/{nextSignInterpretationId} | Links two sign interpretations in the edition&#39;s sign stream
[**v1_editions_edition_id_sign_interpretations_sign_interpretation_id_unlink_from_next_sign_interpretation_id_post**](SignInterpretationApi.md#v1_editions_edition_id_sign_interpretations_sign_interpretation_id_unlink_from_next_sign_interpretation_id_post) | **POST** /v1/editions/{editionId}/sign-interpretations/{signInterpretationId}/unlink-from/{nextSignInterpretationId} | Links two sign interpretations in the edition&#39;s sign stream


# **v1_editions_edition_id_sign_interpretations_attributes_attribute_id_delete**
> v1_editions_edition_id_sign_interpretations_attributes_attribute_id_delete(edition_id, attribute_id)

Delete an attribute from an edition

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
    api_instance = qumranica_api_connector.SignInterpretationApi(api_client)
    edition_id = 56 # int | The ID of the edition being edited
attribute_id = 56 # int | The ID of the attribute to delete

    try:
        # Delete an attribute from an edition
        api_instance.v1_editions_edition_id_sign_interpretations_attributes_attribute_id_delete(edition_id, attribute_id)
    except ApiException as e:
        print("Exception when calling SignInterpretationApi->v1_editions_edition_id_sign_interpretations_attributes_attribute_id_delete: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **edition_id** | **int**| The ID of the edition being edited | 
 **attribute_id** | **int**| The ID of the attribute to delete | 

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

# **v1_editions_edition_id_sign_interpretations_attributes_attribute_id_put**
> AttributeDTO v1_editions_edition_id_sign_interpretations_attributes_attribute_id_put(edition_id, attribute_id, update_attribute_dto=update_attribute_dto)

Change the details of an attribute in an edition

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
    api_instance = qumranica_api_connector.SignInterpretationApi(api_client)
    edition_id = 56 # int | The ID of the edition being edited
attribute_id = 56 # int | The ID of the attribute to update
update_attribute_dto = qumranica_api_connector.UpdateAttributeDTO() # UpdateAttributeDTO | The details of the updated attribute (optional)

    try:
        # Change the details of an attribute in an edition
        api_response = api_instance.v1_editions_edition_id_sign_interpretations_attributes_attribute_id_put(edition_id, attribute_id, update_attribute_dto=update_attribute_dto)
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling SignInterpretationApi->v1_editions_edition_id_sign_interpretations_attributes_attribute_id_put: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **edition_id** | **int**| The ID of the edition being edited | 
 **attribute_id** | **int**| The ID of the attribute to update | 
 **update_attribute_dto** | [**UpdateAttributeDTO**](UpdateAttributeDTO.md)| The details of the updated attribute | [optional] 

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
**200** | Success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **v1_editions_edition_id_sign_interpretations_attributes_get**
> AttributeListDTO v1_editions_edition_id_sign_interpretations_attributes_get(edition_id)

Retrieve a list of all possible attributes for an edition

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
    api_instance = qumranica_api_connector.SignInterpretationApi(api_client)
    edition_id = 56 # int | The ID of the edition being searched

    try:
        # Retrieve a list of all possible attributes for an edition
        api_response = api_instance.v1_editions_edition_id_sign_interpretations_attributes_get(edition_id)
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling SignInterpretationApi->v1_editions_edition_id_sign_interpretations_attributes_get: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **edition_id** | **int**| The ID of the edition being searched | 

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
**200** | Success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **v1_editions_edition_id_sign_interpretations_attributes_post**
> AttributeDTO v1_editions_edition_id_sign_interpretations_attributes_post(edition_id, create_attribute_dto=create_attribute_dto)

Create a new attribute for an edition

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
    api_instance = qumranica_api_connector.SignInterpretationApi(api_client)
    edition_id = 56 # int | The ID of the edition being edited
create_attribute_dto = qumranica_api_connector.CreateAttributeDTO() # CreateAttributeDTO | The details of the new attribute (optional)

    try:
        # Create a new attribute for an edition
        api_response = api_instance.v1_editions_edition_id_sign_interpretations_attributes_post(edition_id, create_attribute_dto=create_attribute_dto)
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling SignInterpretationApi->v1_editions_edition_id_sign_interpretations_attributes_post: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **edition_id** | **int**| The ID of the edition being edited | 
 **create_attribute_dto** | [**CreateAttributeDTO**](CreateAttributeDTO.md)| The details of the new attribute | [optional] 

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
**200** | Success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **v1_editions_edition_id_sign_interpretations_post**
> SignInterpretationListDTO v1_editions_edition_id_sign_interpretations_post(edition_id, sign_interpretation_create_dto=sign_interpretation_create_dto)

Creates a new sign interpretation

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
    api_instance = qumranica_api_connector.SignInterpretationApi(api_client)
    edition_id = 56 # int | ID of the edition being changed
sign_interpretation_create_dto = qumranica_api_connector.SignInterpretationCreateDTO() # SignInterpretationCreateDTO | New sign interpretation data to be added (optional)

    try:
        # Creates a new sign interpretation
        api_response = api_instance.v1_editions_edition_id_sign_interpretations_post(edition_id, sign_interpretation_create_dto=sign_interpretation_create_dto)
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling SignInterpretationApi->v1_editions_edition_id_sign_interpretations_post: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **edition_id** | **int**| ID of the edition being changed | 
 **sign_interpretation_create_dto** | [**SignInterpretationCreateDTO**](SignInterpretationCreateDTO.md)| New sign interpretation data to be added | [optional] 

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
**200** | Success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **v1_editions_edition_id_sign_interpretations_sign_interpretation_id_attributes_attribute_value_id_delete**
> v1_editions_edition_id_sign_interpretations_sign_interpretation_id_attributes_attribute_value_id_delete(edition_id, sign_interpretation_id, attribute_value_id)

This deletes the specified attribute value from the specified sign interpretation.

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
    api_instance = qumranica_api_connector.SignInterpretationApi(api_client)
    edition_id = 56 # int | ID of the edition being changed
sign_interpretation_id = 56 # int | ID of the sign interpretation being altered
attribute_value_id = 56 # int | Id of the attribute being removed

    try:
        # This deletes the specified attribute value from the specified sign interpretation.
        api_instance.v1_editions_edition_id_sign_interpretations_sign_interpretation_id_attributes_attribute_value_id_delete(edition_id, sign_interpretation_id, attribute_value_id)
    except ApiException as e:
        print("Exception when calling SignInterpretationApi->v1_editions_edition_id_sign_interpretations_sign_interpretation_id_attributes_attribute_value_id_delete: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **edition_id** | **int**| ID of the edition being changed | 
 **sign_interpretation_id** | **int**| ID of the sign interpretation being altered | 
 **attribute_value_id** | **int**| Id of the attribute being removed | 

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

# **v1_editions_edition_id_sign_interpretations_sign_interpretation_id_attributes_attribute_value_id_put**
> SignInterpretationDTO v1_editions_edition_id_sign_interpretations_sign_interpretation_id_attributes_attribute_value_id_put(edition_id, sign_interpretation_id, attribute_value_id, interpretation_attribute_create_dto=interpretation_attribute_create_dto)

This changes the values of the specified sign interpretation attribute,  mainly used to change commentary.

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
    api_instance = qumranica_api_connector.SignInterpretationApi(api_client)
    edition_id = 56 # int | ID of the edition being changed
sign_interpretation_id = 56 # int | ID of the sign interpretation being altered
attribute_value_id = 56 # int | Id of the attribute value to be altered
interpretation_attribute_create_dto = qumranica_api_connector.InterpretationAttributeCreateDTO() # InterpretationAttributeCreateDTO | New details of the attribute (optional)

    try:
        # This changes the values of the specified sign interpretation attribute,  mainly used to change commentary.
        api_response = api_instance.v1_editions_edition_id_sign_interpretations_sign_interpretation_id_attributes_attribute_value_id_put(edition_id, sign_interpretation_id, attribute_value_id, interpretation_attribute_create_dto=interpretation_attribute_create_dto)
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling SignInterpretationApi->v1_editions_edition_id_sign_interpretations_sign_interpretation_id_attributes_attribute_value_id_put: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **edition_id** | **int**| ID of the edition being changed | 
 **sign_interpretation_id** | **int**| ID of the sign interpretation being altered | 
 **attribute_value_id** | **int**| Id of the attribute value to be altered | 
 **interpretation_attribute_create_dto** | [**InterpretationAttributeCreateDTO**](InterpretationAttributeCreateDTO.md)| New details of the attribute | [optional] 

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
**200** | Success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **v1_editions_edition_id_sign_interpretations_sign_interpretation_id_attributes_post**
> SignInterpretationDTO v1_editions_edition_id_sign_interpretations_sign_interpretation_id_attributes_post(edition_id, sign_interpretation_id, interpretation_attribute_create_dto=interpretation_attribute_create_dto)

This adds a new attribute to the specified sign interpretation.

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
    api_instance = qumranica_api_connector.SignInterpretationApi(api_client)
    edition_id = 56 # int | ID of the edition being changed
sign_interpretation_id = 56 # int | ID of the sign interpretation for adding a new attribute
interpretation_attribute_create_dto = qumranica_api_connector.InterpretationAttributeCreateDTO() # InterpretationAttributeCreateDTO | Details of the attribute to be added (optional)

    try:
        # This adds a new attribute to the specified sign interpretation.
        api_response = api_instance.v1_editions_edition_id_sign_interpretations_sign_interpretation_id_attributes_post(edition_id, sign_interpretation_id, interpretation_attribute_create_dto=interpretation_attribute_create_dto)
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling SignInterpretationApi->v1_editions_edition_id_sign_interpretations_sign_interpretation_id_attributes_post: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **edition_id** | **int**| ID of the edition being changed | 
 **sign_interpretation_id** | **int**| ID of the sign interpretation for adding a new attribute | 
 **interpretation_attribute_create_dto** | [**InterpretationAttributeCreateDTO**](InterpretationAttributeCreateDTO.md)| Details of the attribute to be added | [optional] 

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
**200** | Success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **v1_editions_edition_id_sign_interpretations_sign_interpretation_id_commentary_put**
> SignInterpretationDTO v1_editions_edition_id_sign_interpretations_sign_interpretation_id_commentary_put(edition_id, sign_interpretation_id, commentary_create_dto=commentary_create_dto)

Updates the commentary of a sign interpretation

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
    api_instance = qumranica_api_connector.SignInterpretationApi(api_client)
    edition_id = 56 # int | ID of the edition being changed
sign_interpretation_id = 56 # int | ID of the sign interpretation whose commentary is being changed
commentary_create_dto = qumranica_api_connector.CommentaryCreateDTO() # CommentaryCreateDTO | The new commentary for the sign interpretation (optional)

    try:
        # Updates the commentary of a sign interpretation
        api_response = api_instance.v1_editions_edition_id_sign_interpretations_sign_interpretation_id_commentary_put(edition_id, sign_interpretation_id, commentary_create_dto=commentary_create_dto)
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling SignInterpretationApi->v1_editions_edition_id_sign_interpretations_sign_interpretation_id_commentary_put: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **edition_id** | **int**| ID of the edition being changed | 
 **sign_interpretation_id** | **int**| ID of the sign interpretation whose commentary is being changed | 
 **commentary_create_dto** | [**CommentaryCreateDTO**](CommentaryCreateDTO.md)| The new commentary for the sign interpretation | [optional] 

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
**200** | Success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **v1_editions_edition_id_sign_interpretations_sign_interpretation_id_delete**
> v1_editions_edition_id_sign_interpretations_sign_interpretation_id_delete(edition_id, sign_interpretation_id)

Deletes the sign interpretation in the route. The endpoint automatically manages the sign stream  by connecting all the deleted sign's next and previous nodes.

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
    api_instance = qumranica_api_connector.SignInterpretationApi(api_client)
    edition_id = 56 # int | ID of the edition being changed
sign_interpretation_id = 56 # int | ID of the sign interpretation being deleted

    try:
        # Deletes the sign interpretation in the route. The endpoint automatically manages the sign stream  by connecting all the deleted sign's next and previous nodes.
        api_instance.v1_editions_edition_id_sign_interpretations_sign_interpretation_id_delete(edition_id, sign_interpretation_id)
    except ApiException as e:
        print("Exception when calling SignInterpretationApi->v1_editions_edition_id_sign_interpretations_sign_interpretation_id_delete: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **edition_id** | **int**| ID of the edition being changed | 
 **sign_interpretation_id** | **int**| ID of the sign interpretation being deleted | 

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

# **v1_editions_edition_id_sign_interpretations_sign_interpretation_id_get**
> SignInterpretationDTO v1_editions_edition_id_sign_interpretations_sign_interpretation_id_get(edition_id, sign_interpretation_id)

Retrieve the details of a sign interpretation in an edition

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
    api_instance = qumranica_api_connector.SignInterpretationApi(api_client)
    edition_id = 56 # int | The ID of the edition being searched
sign_interpretation_id = 56 # int | The desired sign interpretation id

    try:
        # Retrieve the details of a sign interpretation in an edition
        api_response = api_instance.v1_editions_edition_id_sign_interpretations_sign_interpretation_id_get(edition_id, sign_interpretation_id)
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling SignInterpretationApi->v1_editions_edition_id_sign_interpretations_sign_interpretation_id_get: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **edition_id** | **int**| The ID of the edition being searched | 
 **sign_interpretation_id** | **int**| The desired sign interpretation id | 

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
**200** | Success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **v1_editions_edition_id_sign_interpretations_sign_interpretation_id_link_to_next_sign_interpretation_id_post**
> SignInterpretationDTO v1_editions_edition_id_sign_interpretations_sign_interpretation_id_link_to_next_sign_interpretation_id_post(edition_id, sign_interpretation_id, next_sign_interpretation_id)

Links two sign interpretations in the edition's sign stream

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
    api_instance = qumranica_api_connector.SignInterpretationApi(api_client)
    edition_id = 56 # int | ID of the edition being changed
sign_interpretation_id = 56 # int | The sign interpretation to be linked to the nextSignInterpretationId
next_sign_interpretation_id = 56 # int | The sign interpretation to become the new next sign interpretation

    try:
        # Links two sign interpretations in the edition's sign stream
        api_response = api_instance.v1_editions_edition_id_sign_interpretations_sign_interpretation_id_link_to_next_sign_interpretation_id_post(edition_id, sign_interpretation_id, next_sign_interpretation_id)
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling SignInterpretationApi->v1_editions_edition_id_sign_interpretations_sign_interpretation_id_link_to_next_sign_interpretation_id_post: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **edition_id** | **int**| ID of the edition being changed | 
 **sign_interpretation_id** | **int**| The sign interpretation to be linked to the nextSignInterpretationId | 
 **next_sign_interpretation_id** | **int**| The sign interpretation to become the new next sign interpretation | 

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
**200** | Success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **v1_editions_edition_id_sign_interpretations_sign_interpretation_id_unlink_from_next_sign_interpretation_id_post**
> SignInterpretationDTO v1_editions_edition_id_sign_interpretations_sign_interpretation_id_unlink_from_next_sign_interpretation_id_post(edition_id, sign_interpretation_id, next_sign_interpretation_id)

Links two sign interpretations in the edition's sign stream

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
    api_instance = qumranica_api_connector.SignInterpretationApi(api_client)
    edition_id = 56 # int | ID of the edition being changed
sign_interpretation_id = 56 # int | The sign interpretation to be unlinked from the nextSignInterpretationId
next_sign_interpretation_id = 56 # int | The sign interpretation to removed as next sign interpretation

    try:
        # Links two sign interpretations in the edition's sign stream
        api_response = api_instance.v1_editions_edition_id_sign_interpretations_sign_interpretation_id_unlink_from_next_sign_interpretation_id_post(edition_id, sign_interpretation_id, next_sign_interpretation_id)
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling SignInterpretationApi->v1_editions_edition_id_sign_interpretations_sign_interpretation_id_unlink_from_next_sign_interpretation_id_post: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **edition_id** | **int**| ID of the edition being changed | 
 **sign_interpretation_id** | **int**| The sign interpretation to be unlinked from the nextSignInterpretationId | 
 **next_sign_interpretation_id** | **int**| The sign interpretation to removed as next sign interpretation | 

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
**200** | Success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

