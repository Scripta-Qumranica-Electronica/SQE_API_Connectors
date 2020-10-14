# qumranica.UserApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v1_users_change_forgotten_password_post**](UserApi.md#v1_users_change_forgotten_password_post) | **POST** /v1/users/change-forgotten-password | Uses the secret token from /users/forgot-password to validate a reset of the user&#39;s password
[**v1_users_change_password_post**](UserApi.md#v1_users_change_password_post) | **POST** /v1/users/change-password | Changes the password for the currently logged in user
[**v1_users_change_unactivated_email_post**](UserApi.md#v1_users_change_unactivated_email_post) | **POST** /v1/users/change-unactivated-email | Allows a user who has not yet activated their account to change their email address. This will not work if the user  account associated with the email address has already been activated
[**v1_users_confirm_registration_post**](UserApi.md#v1_users_confirm_registration_post) | **POST** /v1/users/confirm-registration | Confirms registration of new user account.
[**v1_users_forgot_password_post**](UserApi.md#v1_users_forgot_password_post) | **POST** /v1/users/forgot-password | Sends a secret token to the user&#39;s email to allow password reset.
[**v1_users_get**](UserApi.md#v1_users_get) | **GET** /v1/users | Provides the user details for a user with valid JWT in the Authorize header
[**v1_users_login_post**](UserApi.md#v1_users_login_post) | **POST** /v1/users/login | Provides a JWT bearer token for valid email and password
[**v1_users_post**](UserApi.md#v1_users_post) | **POST** /v1/users | Creates a new user with the submitted data.
[**v1_users_put**](UserApi.md#v1_users_put) | **PUT** /v1/users | Updates a user&#39;s registration details.  Note that the if the email address has changed, the account will be set to  inactive until the account is activated with the secret token.
[**v1_users_resend_activation_email_post**](UserApi.md#v1_users_resend_activation_email_post) | **POST** /v1/users/resend-activation-email | Sends a new activation email for the user&#39;s account. This will not work if the user account associated with the  email address has already been activated.


# **v1_users_change_forgotten_password_post**
> v1_users_change_forgotten_password_post(reset_forgotten_user_password_request_dto=reset_forgotten_user_password_request_dto)

Uses the secret token from /users/forgot-password to validate a reset of the user's password

### Example

* Api Key Authentication (Bearer):
```python
from __future__ import print_function
import time
import qumranica
from qumranica.rest import ApiException
from pprint import pprint
# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = qumranica.Configuration(
    host = "http://localhost"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: Bearer
configuration = qumranica.Configuration(
    host = "http://localhost",
    api_key = {
        'Authorization': 'YOUR_API_KEY'
    }
)
# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Authorization'] = 'Bearer'

# Enter a context with an instance of the API client
with qumranica.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = qumranica.UserApi(api_client)
    reset_forgotten_user_password_request_dto = qumranica.ResetForgottenUserPasswordRequestDTO() # ResetForgottenUserPasswordRequestDTO | A JSON object with the secret token and the new password (optional)

    try:
        # Uses the secret token from /users/forgot-password to validate a reset of the user's password
        api_instance.v1_users_change_forgotten_password_post(reset_forgotten_user_password_request_dto=reset_forgotten_user_password_request_dto)
    except ApiException as e:
        print("Exception when calling UserApi->v1_users_change_forgotten_password_post: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **reset_forgotten_user_password_request_dto** | [**ResetForgottenUserPasswordRequestDTO**](ResetForgottenUserPasswordRequestDTO.md)| A JSON object with the secret token and the new password | [optional] 

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

# **v1_users_change_password_post**
> v1_users_change_password_post(reset_logged_in_user_password_request_dto=reset_logged_in_user_password_request_dto)

Changes the password for the currently logged in user

### Example

* Api Key Authentication (Bearer):
```python
from __future__ import print_function
import time
import qumranica
from qumranica.rest import ApiException
from pprint import pprint
# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = qumranica.Configuration(
    host = "http://localhost"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: Bearer
configuration = qumranica.Configuration(
    host = "http://localhost",
    api_key = {
        'Authorization': 'YOUR_API_KEY'
    }
)
# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Authorization'] = 'Bearer'

# Enter a context with an instance of the API client
with qumranica.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = qumranica.UserApi(api_client)
    reset_logged_in_user_password_request_dto = qumranica.ResetLoggedInUserPasswordRequestDTO() # ResetLoggedInUserPasswordRequestDTO | A JSON object with the old password and the new password (optional)

    try:
        # Changes the password for the currently logged in user
        api_instance.v1_users_change_password_post(reset_logged_in_user_password_request_dto=reset_logged_in_user_password_request_dto)
    except ApiException as e:
        print("Exception when calling UserApi->v1_users_change_password_post: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **reset_logged_in_user_password_request_dto** | [**ResetLoggedInUserPasswordRequestDTO**](ResetLoggedInUserPasswordRequestDTO.md)| A JSON object with the old password and the new password | [optional] 

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

# **v1_users_change_unactivated_email_post**
> v1_users_change_unactivated_email_post(unactivated_email_update_request_dto=unactivated_email_update_request_dto)

Allows a user who has not yet activated their account to change their email address. This will not work if the user  account associated with the email address has already been activated

### Example

* Api Key Authentication (Bearer):
```python
from __future__ import print_function
import time
import qumranica
from qumranica.rest import ApiException
from pprint import pprint
# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = qumranica.Configuration(
    host = "http://localhost"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: Bearer
configuration = qumranica.Configuration(
    host = "http://localhost",
    api_key = {
        'Authorization': 'YOUR_API_KEY'
    }
)
# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Authorization'] = 'Bearer'

# Enter a context with an instance of the API client
with qumranica.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = qumranica.UserApi(api_client)
    unactivated_email_update_request_dto = qumranica.UnactivatedEmailUpdateRequestDTO() # UnactivatedEmailUpdateRequestDTO | JSON object with the current email address and the new desired email address (optional)

    try:
        # Allows a user who has not yet activated their account to change their email address. This will not work if the user  account associated with the email address has already been activated
        api_instance.v1_users_change_unactivated_email_post(unactivated_email_update_request_dto=unactivated_email_update_request_dto)
    except ApiException as e:
        print("Exception when calling UserApi->v1_users_change_unactivated_email_post: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **unactivated_email_update_request_dto** | [**UnactivatedEmailUpdateRequestDTO**](UnactivatedEmailUpdateRequestDTO.md)| JSON object with the current email address and the new desired email address | [optional] 

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

# **v1_users_confirm_registration_post**
> v1_users_confirm_registration_post(account_activation_request_dto=account_activation_request_dto)

Confirms registration of new user account.

### Example

* Api Key Authentication (Bearer):
```python
from __future__ import print_function
import time
import qumranica
from qumranica.rest import ApiException
from pprint import pprint
# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = qumranica.Configuration(
    host = "http://localhost"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: Bearer
configuration = qumranica.Configuration(
    host = "http://localhost",
    api_key = {
        'Authorization': 'YOUR_API_KEY'
    }
)
# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Authorization'] = 'Bearer'

# Enter a context with an instance of the API client
with qumranica.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = qumranica.UserApi(api_client)
    account_activation_request_dto = qumranica.AccountActivationRequestDTO() # AccountActivationRequestDTO | JSON object with token from user registration email (optional)

    try:
        # Confirms registration of new user account.
        api_instance.v1_users_confirm_registration_post(account_activation_request_dto=account_activation_request_dto)
    except ApiException as e:
        print("Exception when calling UserApi->v1_users_confirm_registration_post: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **account_activation_request_dto** | [**AccountActivationRequestDTO**](AccountActivationRequestDTO.md)| JSON object with token from user registration email | [optional] 

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

# **v1_users_forgot_password_post**
> v1_users_forgot_password_post(reset_user_password_request_dto=reset_user_password_request_dto)

Sends a secret token to the user's email to allow password reset.

### Example

* Api Key Authentication (Bearer):
```python
from __future__ import print_function
import time
import qumranica
from qumranica.rest import ApiException
from pprint import pprint
# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = qumranica.Configuration(
    host = "http://localhost"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: Bearer
configuration = qumranica.Configuration(
    host = "http://localhost",
    api_key = {
        'Authorization': 'YOUR_API_KEY'
    }
)
# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Authorization'] = 'Bearer'

# Enter a context with an instance of the API client
with qumranica.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = qumranica.UserApi(api_client)
    reset_user_password_request_dto = qumranica.ResetUserPasswordRequestDTO() # ResetUserPasswordRequestDTO | JSON object with the email address for the user who wants to reset a lost password (optional)

    try:
        # Sends a secret token to the user's email to allow password reset.
        api_instance.v1_users_forgot_password_post(reset_user_password_request_dto=reset_user_password_request_dto)
    except ApiException as e:
        print("Exception when calling UserApi->v1_users_forgot_password_post: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **reset_user_password_request_dto** | [**ResetUserPasswordRequestDTO**](ResetUserPasswordRequestDTO.md)| JSON object with the email address for the user who wants to reset a lost password | [optional] 

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

# **v1_users_get**
> UserDTO v1_users_get()

Provides the user details for a user with valid JWT in the Authorize header

### Example

* Api Key Authentication (Bearer):
```python
from __future__ import print_function
import time
import qumranica
from qumranica.rest import ApiException
from pprint import pprint
# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = qumranica.Configuration(
    host = "http://localhost"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: Bearer
configuration = qumranica.Configuration(
    host = "http://localhost",
    api_key = {
        'Authorization': 'YOUR_API_KEY'
    }
)
# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Authorization'] = 'Bearer'

# Enter a context with an instance of the API client
with qumranica.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = qumranica.UserApi(api_client)
    
    try:
        # Provides the user details for a user with valid JWT in the Authorize header
        api_response = api_instance.v1_users_get()
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling UserApi->v1_users_get: %s\n" % e)
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**UserDTO**](UserDTO.md)

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

# **v1_users_login_post**
> DetailedUserTokenDTO v1_users_login_post(login_request_dto=login_request_dto)

Provides a JWT bearer token for valid email and password

### Example

* Api Key Authentication (Bearer):
```python
from __future__ import print_function
import time
import qumranica
from qumranica.rest import ApiException
from pprint import pprint
# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = qumranica.Configuration(
    host = "http://localhost"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: Bearer
configuration = qumranica.Configuration(
    host = "http://localhost",
    api_key = {
        'Authorization': 'YOUR_API_KEY'
    }
)
# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Authorization'] = 'Bearer'

# Enter a context with an instance of the API client
with qumranica.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = qumranica.UserApi(api_client)
    login_request_dto = qumranica.LoginRequestDTO() # LoginRequestDTO | JSON object with an email and password parameter (optional)

    try:
        # Provides a JWT bearer token for valid email and password
        api_response = api_instance.v1_users_login_post(login_request_dto=login_request_dto)
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling UserApi->v1_users_login_post: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **login_request_dto** | [**LoginRequestDTO**](LoginRequestDTO.md)| JSON object with an email and password parameter | [optional] 

### Return type

[**DetailedUserTokenDTO**](DetailedUserTokenDTO.md)

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

# **v1_users_post**
> UserDTO v1_users_post(new_user_request_dto=new_user_request_dto)

Creates a new user with the submitted data.

### Example

* Api Key Authentication (Bearer):
```python
from __future__ import print_function
import time
import qumranica
from qumranica.rest import ApiException
from pprint import pprint
# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = qumranica.Configuration(
    host = "http://localhost"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: Bearer
configuration = qumranica.Configuration(
    host = "http://localhost",
    api_key = {
        'Authorization': 'YOUR_API_KEY'
    }
)
# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Authorization'] = 'Bearer'

# Enter a context with an instance of the API client
with qumranica.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = qumranica.UserApi(api_client)
    new_user_request_dto = qumranica.NewUserRequestDTO() # NewUserRequestDTO | A JSON object with all data necessary to create a new user account (optional)

    try:
        # Creates a new user with the submitted data.
        api_response = api_instance.v1_users_post(new_user_request_dto=new_user_request_dto)
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling UserApi->v1_users_post: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **new_user_request_dto** | [**NewUserRequestDTO**](NewUserRequestDTO.md)| A JSON object with all data necessary to create a new user account | [optional] 

### Return type

[**UserDTO**](UserDTO.md)

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

# **v1_users_put**
> DetailedUserDTO v1_users_put(user_update_request_dto=user_update_request_dto)

Updates a user's registration details.  Note that the if the email address has changed, the account will be set to  inactive until the account is activated with the secret token.

### Example

* Api Key Authentication (Bearer):
```python
from __future__ import print_function
import time
import qumranica
from qumranica.rest import ApiException
from pprint import pprint
# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = qumranica.Configuration(
    host = "http://localhost"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: Bearer
configuration = qumranica.Configuration(
    host = "http://localhost",
    api_key = {
        'Authorization': 'YOUR_API_KEY'
    }
)
# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Authorization'] = 'Bearer'

# Enter a context with an instance of the API client
with qumranica.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = qumranica.UserApi(api_client)
    user_update_request_dto = qumranica.UserUpdateRequestDTO() # UserUpdateRequestDTO | A JSON object with all data necessary to update a user account.  Null fields (but not empty  strings!) will be populated with existing user data (optional)

    try:
        # Updates a user's registration details.  Note that the if the email address has changed, the account will be set to  inactive until the account is activated with the secret token.
        api_response = api_instance.v1_users_put(user_update_request_dto=user_update_request_dto)
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling UserApi->v1_users_put: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user_update_request_dto** | [**UserUpdateRequestDTO**](UserUpdateRequestDTO.md)| A JSON object with all data necessary to update a user account.  Null fields (but not empty  strings!) will be populated with existing user data | [optional] 

### Return type

[**DetailedUserDTO**](DetailedUserDTO.md)

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

# **v1_users_resend_activation_email_post**
> v1_users_resend_activation_email_post(resend_user_account_activation_request_dto=resend_user_account_activation_request_dto)

Sends a new activation email for the user's account. This will not work if the user account associated with the  email address has already been activated.

### Example

* Api Key Authentication (Bearer):
```python
from __future__ import print_function
import time
import qumranica
from qumranica.rest import ApiException
from pprint import pprint
# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = qumranica.Configuration(
    host = "http://localhost"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: Bearer
configuration = qumranica.Configuration(
    host = "http://localhost",
    api_key = {
        'Authorization': 'YOUR_API_KEY'
    }
)
# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Authorization'] = 'Bearer'

# Enter a context with an instance of the API client
with qumranica.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = qumranica.UserApi(api_client)
    resend_user_account_activation_request_dto = qumranica.ResendUserAccountActivationRequestDTO() # ResendUserAccountActivationRequestDTO | JSON object with the current email address and the new desired email address (optional)

    try:
        # Sends a new activation email for the user's account. This will not work if the user account associated with the  email address has already been activated.
        api_instance.v1_users_resend_activation_email_post(resend_user_account_activation_request_dto=resend_user_account_activation_request_dto)
    except ApiException as e:
        print("Exception when calling UserApi->v1_users_resend_activation_email_post: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resend_user_account_activation_request_dto** | [**ResendUserAccountActivationRequestDTO**](ResendUserAccountActivationRequestDTO.md)| JSON object with the current email address and the new desired email address | [optional] 

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

