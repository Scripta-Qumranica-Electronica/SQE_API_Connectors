# UserApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**V1UsersChangeForgottenPasswordPost**](UserApi.md#V1UsersChangeForgottenPasswordPost) | **POST** /v1/users/change-forgotten-password | Uses the secret token from /users/forgot-password to validate a reset of the user&#39;s password
[**V1UsersChangePasswordPost**](UserApi.md#V1UsersChangePasswordPost) | **POST** /v1/users/change-password | Changes the password for the currently logged in user
[**V1UsersChangeUnactivatedEmailPost**](UserApi.md#V1UsersChangeUnactivatedEmailPost) | **POST** /v1/users/change-unactivated-email | Allows a user who has not yet activated their account to change their email address. This will not work if the user  account associated with the email address has already been activated
[**V1UsersConfirmRegistrationPost**](UserApi.md#V1UsersConfirmRegistrationPost) | **POST** /v1/users/confirm-registration | Confirms registration of new user account.
[**V1UsersForgotPasswordPost**](UserApi.md#V1UsersForgotPasswordPost) | **POST** /v1/users/forgot-password | Sends a secret token to the user&#39;s email to allow password reset.
[**V1UsersGet**](UserApi.md#V1UsersGet) | **GET** /v1/users | Provides the user details for a user with valid JWT in the Authorize header
[**V1UsersLoginPost**](UserApi.md#V1UsersLoginPost) | **POST** /v1/users/login | Provides a JWT bearer token for valid email and password
[**V1UsersPost**](UserApi.md#V1UsersPost) | **POST** /v1/users | Creates a new user with the submitted data.
[**V1UsersPut**](UserApi.md#V1UsersPut) | **PUT** /v1/users | Updates a user&#39;s registration details.  Note that the if the email address has changed, the account will be set to  inactive until the account is activated with the secret token.
[**V1UsersResendActivationEmailPost**](UserApi.md#V1UsersResendActivationEmailPost) | **POST** /v1/users/resend-activation-email | Sends a new activation email for the user&#39;s account. This will not work if the user account associated with the  email address has already been activated.


# **V1UsersChangeForgottenPasswordPost**
> V1UsersChangeForgottenPasswordPost(reset.forgotten.user.password.request.dto=var.reset.forgotten.user.password.request.dto)

Uses the secret token from /users/forgot-password to validate a reset of the user's password

### Example
```R
library(qumranica_api_connector)

var.reset.forgotten.user.password.request.dto <- ResetForgottenUserPasswordRequestDTO$new("password_example", "token_example") # ResetForgottenUserPasswordRequestDTO | A JSON object with the secret token and the new password

#Uses the secret token from /users/forgot-password to validate a reset of the user's password
api.instance <- UserApi$new()
# Configure API key authorization: Bearer
api.instance$apiClient$apiKeys['Authorization'] <- 'TODO_YOUR_API_KEY';
api.instance$V1UsersChangeForgottenPasswordPost(reset.forgotten.user.password.request.dto=var.reset.forgotten.user.password.request.dto)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **reset.forgotten.user.password.request.dto** | [**ResetForgottenUserPasswordRequestDTO**](ResetForgottenUserPasswordRequestDTO.md)| A JSON object with the secret token and the new password | [optional] 

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

# **V1UsersChangePasswordPost**
> V1UsersChangePasswordPost(reset.logged.in.user.password.request.dto=var.reset.logged.in.user.password.request.dto)

Changes the password for the currently logged in user

### Example
```R
library(qumranica_api_connector)

var.reset.logged.in.user.password.request.dto <- ResetLoggedInUserPasswordRequestDTO$new("oldPassword_example", "newPassword_example") # ResetLoggedInUserPasswordRequestDTO | A JSON object with the old password and the new password

#Changes the password for the currently logged in user
api.instance <- UserApi$new()
# Configure API key authorization: Bearer
api.instance$apiClient$apiKeys['Authorization'] <- 'TODO_YOUR_API_KEY';
api.instance$V1UsersChangePasswordPost(reset.logged.in.user.password.request.dto=var.reset.logged.in.user.password.request.dto)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **reset.logged.in.user.password.request.dto** | [**ResetLoggedInUserPasswordRequestDTO**](ResetLoggedInUserPasswordRequestDTO.md)| A JSON object with the old password and the new password | [optional] 

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

# **V1UsersChangeUnactivatedEmailPost**
> V1UsersChangeUnactivatedEmailPost(unactivated.email.update.request.dto=var.unactivated.email.update.request.dto)

Allows a user who has not yet activated their account to change their email address. This will not work if the user  account associated with the email address has already been activated

### Example
```R
library(qumranica_api_connector)

var.unactivated.email.update.request.dto <- UnactivatedEmailUpdateRequestDTO$new("newEmail_example", "email_example") # UnactivatedEmailUpdateRequestDTO | JSON object with the current email address and the new desired email address

#Allows a user who has not yet activated their account to change their email address. This will not work if the user  account associated with the email address has already been activated
api.instance <- UserApi$new()
# Configure API key authorization: Bearer
api.instance$apiClient$apiKeys['Authorization'] <- 'TODO_YOUR_API_KEY';
api.instance$V1UsersChangeUnactivatedEmailPost(unactivated.email.update.request.dto=var.unactivated.email.update.request.dto)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **unactivated.email.update.request.dto** | [**UnactivatedEmailUpdateRequestDTO**](UnactivatedEmailUpdateRequestDTO.md)| JSON object with the current email address and the new desired email address | [optional] 

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

# **V1UsersConfirmRegistrationPost**
> V1UsersConfirmRegistrationPost(account.activation.request.dto=var.account.activation.request.dto)

Confirms registration of new user account.

### Example
```R
library(qumranica_api_connector)

var.account.activation.request.dto <- AccountActivationRequestDTO$new("token_example") # AccountActivationRequestDTO | JSON object with token from user registration email

#Confirms registration of new user account.
api.instance <- UserApi$new()
# Configure API key authorization: Bearer
api.instance$apiClient$apiKeys['Authorization'] <- 'TODO_YOUR_API_KEY';
api.instance$V1UsersConfirmRegistrationPost(account.activation.request.dto=var.account.activation.request.dto)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **account.activation.request.dto** | [**AccountActivationRequestDTO**](AccountActivationRequestDTO.md)| JSON object with token from user registration email | [optional] 

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

# **V1UsersForgotPasswordPost**
> V1UsersForgotPasswordPost(reset.user.password.request.dto=var.reset.user.password.request.dto)

Sends a secret token to the user's email to allow password reset.

### Example
```R
library(qumranica_api_connector)

var.reset.user.password.request.dto <- ResetUserPasswordRequestDTO$new("email_example") # ResetUserPasswordRequestDTO | JSON object with the email address for the user who wants to reset a lost password

#Sends a secret token to the user's email to allow password reset.
api.instance <- UserApi$new()
# Configure API key authorization: Bearer
api.instance$apiClient$apiKeys['Authorization'] <- 'TODO_YOUR_API_KEY';
api.instance$V1UsersForgotPasswordPost(reset.user.password.request.dto=var.reset.user.password.request.dto)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **reset.user.password.request.dto** | [**ResetUserPasswordRequestDTO**](ResetUserPasswordRequestDTO.md)| JSON object with the email address for the user who wants to reset a lost password | [optional] 

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

# **V1UsersGet**
> UserDTO V1UsersGet()

Provides the user details for a user with valid JWT in the Authorize header

### Example
```R
library(qumranica_api_connector)


#Provides the user details for a user with valid JWT in the Authorize header
api.instance <- UserApi$new()
# Configure API key authorization: Bearer
api.instance$apiClient$apiKeys['Authorization'] <- 'TODO_YOUR_API_KEY';
result <- api.instance$V1UsersGet()
dput(result)
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
| **200** | Success |  -  |

# **V1UsersLoginPost**
> DetailedUserTokenDTO V1UsersLoginPost(login.request.dto=var.login.request.dto)

Provides a JWT bearer token for valid email and password

### Example
```R
library(qumranica_api_connector)

var.login.request.dto <- LoginRequestDTO$new("email_example", "password_example") # LoginRequestDTO | JSON object with an email and password parameter

#Provides a JWT bearer token for valid email and password
api.instance <- UserApi$new()
# Configure API key authorization: Bearer
api.instance$apiClient$apiKeys['Authorization'] <- 'TODO_YOUR_API_KEY';
result <- api.instance$V1UsersLoginPost(login.request.dto=var.login.request.dto)
dput(result)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **login.request.dto** | [**LoginRequestDTO**](LoginRequestDTO.md)| JSON object with an email and password parameter | [optional] 

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
| **200** | Success |  -  |

# **V1UsersPost**
> UserDTO V1UsersPost(new.user.request.dto=var.new.user.request.dto)

Creates a new user with the submitted data.

### Example
```R
library(qumranica_api_connector)

var.new.user.request.dto <- NewUserRequestDTO$new("email_example", "password_example", "organization_example", "forename_example", "surname_example") # NewUserRequestDTO | A JSON object with all data necessary to create a new user account

#Creates a new user with the submitted data.
api.instance <- UserApi$new()
# Configure API key authorization: Bearer
api.instance$apiClient$apiKeys['Authorization'] <- 'TODO_YOUR_API_KEY';
result <- api.instance$V1UsersPost(new.user.request.dto=var.new.user.request.dto)
dput(result)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **new.user.request.dto** | [**NewUserRequestDTO**](NewUserRequestDTO.md)| A JSON object with all data necessary to create a new user account | [optional] 

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
| **200** | Success |  -  |

# **V1UsersPut**
> DetailedUserDTO V1UsersPut(user.update.request.dto=var.user.update.request.dto)

Updates a user's registration details.  Note that the if the email address has changed, the account will be set to  inactive until the account is activated with the secret token.

### Example
```R
library(qumranica_api_connector)

var.user.update.request.dto <- UserUpdateRequestDTO$new("password_example", "email_example", "organization_example", "forename_example", "surname_example") # UserUpdateRequestDTO | A JSON object with all data necessary to update a user account.  Null fields (but not empty  strings!) will be populated with existing user data

#Updates a user's registration details.  Note that the if the email address has changed, the account will be set to  inactive until the account is activated with the secret token.
api.instance <- UserApi$new()
# Configure API key authorization: Bearer
api.instance$apiClient$apiKeys['Authorization'] <- 'TODO_YOUR_API_KEY';
result <- api.instance$V1UsersPut(user.update.request.dto=var.user.update.request.dto)
dput(result)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user.update.request.dto** | [**UserUpdateRequestDTO**](UserUpdateRequestDTO.md)| A JSON object with all data necessary to update a user account.  Null fields (but not empty  strings!) will be populated with existing user data | [optional] 

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
| **200** | Success |  -  |

# **V1UsersResendActivationEmailPost**
> V1UsersResendActivationEmailPost(resend.user.account.activation.request.dto=var.resend.user.account.activation.request.dto)

Sends a new activation email for the user's account. This will not work if the user account associated with the  email address has already been activated.

### Example
```R
library(qumranica_api_connector)

var.resend.user.account.activation.request.dto <- ResendUserAccountActivationRequestDTO$new("email_example") # ResendUserAccountActivationRequestDTO | JSON object with the current email address and the new desired email address

#Sends a new activation email for the user's account. This will not work if the user account associated with the  email address has already been activated.
api.instance <- UserApi$new()
# Configure API key authorization: Bearer
api.instance$apiClient$apiKeys['Authorization'] <- 'TODO_YOUR_API_KEY';
api.instance$V1UsersResendActivationEmailPost(resend.user.account.activation.request.dto=var.resend.user.account.activation.request.dto)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resend.user.account.activation.request.dto** | [**ResendUserAccountActivationRequestDTO**](ResendUserAccountActivationRequestDTO.md)| JSON object with the current email address and the new desired email address | [optional] 

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

