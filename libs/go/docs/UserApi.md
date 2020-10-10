# \UserApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**V1UsersChangeForgottenPasswordPost**](UserApi.md#V1UsersChangeForgottenPasswordPost) | **Post** /v1/users/change-forgotten-password | Uses the secret token from /users/forgot-password to validate a reset of the user&#39;s password
[**V1UsersChangePasswordPost**](UserApi.md#V1UsersChangePasswordPost) | **Post** /v1/users/change-password | Changes the password for the currently logged in user
[**V1UsersChangeUnactivatedEmailPost**](UserApi.md#V1UsersChangeUnactivatedEmailPost) | **Post** /v1/users/change-unactivated-email | Allows a user who has not yet activated their account to change their email address. This will not work if the user  account associated with the email address has already been activated
[**V1UsersConfirmRegistrationPost**](UserApi.md#V1UsersConfirmRegistrationPost) | **Post** /v1/users/confirm-registration | Confirms registration of new user account.
[**V1UsersForgotPasswordPost**](UserApi.md#V1UsersForgotPasswordPost) | **Post** /v1/users/forgot-password | Sends a secret token to the user&#39;s email to allow password reset.
[**V1UsersGet**](UserApi.md#V1UsersGet) | **Get** /v1/users | Provides the user details for a user with valid JWT in the Authorize header
[**V1UsersLoginPost**](UserApi.md#V1UsersLoginPost) | **Post** /v1/users/login | Provides a JWT bearer token for valid email and password
[**V1UsersPost**](UserApi.md#V1UsersPost) | **Post** /v1/users | Creates a new user with the submitted data.
[**V1UsersPut**](UserApi.md#V1UsersPut) | **Put** /v1/users | Updates a user&#39;s registration details.  Note that the if the email address has changed, the account will be set to  inactive until the account is activated with the secret token.
[**V1UsersResendActivationEmailPost**](UserApi.md#V1UsersResendActivationEmailPost) | **Post** /v1/users/resend-activation-email | Sends a new activation email for the user&#39;s account. This will not work if the user account associated with the  email address has already been activated.



## V1UsersChangeForgottenPasswordPost

> V1UsersChangeForgottenPasswordPost(ctx, optional)

Uses the secret token from /users/forgot-password to validate a reset of the user's password

### Required Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
 **optional** | ***V1UsersChangeForgottenPasswordPostOpts** | optional parameters | nil if no parameters

### Optional Parameters

Optional parameters are passed through a pointer to a V1UsersChangeForgottenPasswordPostOpts struct


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resetForgottenUserPasswordRequestDto** | [**optional.Interface of ResetForgottenUserPasswordRequestDto**](ResetForgottenUserPasswordRequestDto.md)| A JSON object with the secret token and the new password | 

### Return type

 (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/_*+json
- **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## V1UsersChangePasswordPost

> V1UsersChangePasswordPost(ctx, optional)

Changes the password for the currently logged in user

### Required Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
 **optional** | ***V1UsersChangePasswordPostOpts** | optional parameters | nil if no parameters

### Optional Parameters

Optional parameters are passed through a pointer to a V1UsersChangePasswordPostOpts struct


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resetLoggedInUserPasswordRequestDto** | [**optional.Interface of ResetLoggedInUserPasswordRequestDto**](ResetLoggedInUserPasswordRequestDto.md)| A JSON object with the old password and the new password | 

### Return type

 (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/_*+json
- **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## V1UsersChangeUnactivatedEmailPost

> V1UsersChangeUnactivatedEmailPost(ctx, optional)

Allows a user who has not yet activated their account to change their email address. This will not work if the user  account associated with the email address has already been activated

### Required Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
 **optional** | ***V1UsersChangeUnactivatedEmailPostOpts** | optional parameters | nil if no parameters

### Optional Parameters

Optional parameters are passed through a pointer to a V1UsersChangeUnactivatedEmailPostOpts struct


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **unactivatedEmailUpdateRequestDto** | [**optional.Interface of UnactivatedEmailUpdateRequestDto**](UnactivatedEmailUpdateRequestDto.md)| JSON object with the current email address and the new desired email address | 

### Return type

 (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/_*+json
- **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## V1UsersConfirmRegistrationPost

> V1UsersConfirmRegistrationPost(ctx, optional)

Confirms registration of new user account.

### Required Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
 **optional** | ***V1UsersConfirmRegistrationPostOpts** | optional parameters | nil if no parameters

### Optional Parameters

Optional parameters are passed through a pointer to a V1UsersConfirmRegistrationPostOpts struct


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountActivationRequestDto** | [**optional.Interface of AccountActivationRequestDto**](AccountActivationRequestDto.md)| JSON object with token from user registration email | 

### Return type

 (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/_*+json
- **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## V1UsersForgotPasswordPost

> V1UsersForgotPasswordPost(ctx, optional)

Sends a secret token to the user's email to allow password reset.

### Required Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
 **optional** | ***V1UsersForgotPasswordPostOpts** | optional parameters | nil if no parameters

### Optional Parameters

Optional parameters are passed through a pointer to a V1UsersForgotPasswordPostOpts struct


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resetUserPasswordRequestDto** | [**optional.Interface of ResetUserPasswordRequestDto**](ResetUserPasswordRequestDto.md)| JSON object with the email address for the user who wants to reset a lost password | 

### Return type

 (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/_*+json
- **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## V1UsersGet

> UserDto V1UsersGet(ctx, )

Provides the user details for a user with valid JWT in the Authorize header

### Required Parameters

This endpoint does not need any parameter.

### Return type

[**UserDto**](UserDTO.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## V1UsersLoginPost

> DetailedUserTokenDto V1UsersLoginPost(ctx, optional)

Provides a JWT bearer token for valid email and password

### Required Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
 **optional** | ***V1UsersLoginPostOpts** | optional parameters | nil if no parameters

### Optional Parameters

Optional parameters are passed through a pointer to a V1UsersLoginPostOpts struct


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **loginRequestDto** | [**optional.Interface of LoginRequestDto**](LoginRequestDto.md)| JSON object with an email and password parameter | 

### Return type

[**DetailedUserTokenDto**](DetailedUserTokenDTO.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/_*+json
- **Accept**: text/plain, application/json, text/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## V1UsersPost

> UserDto V1UsersPost(ctx, optional)

Creates a new user with the submitted data.

### Required Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
 **optional** | ***V1UsersPostOpts** | optional parameters | nil if no parameters

### Optional Parameters

Optional parameters are passed through a pointer to a V1UsersPostOpts struct


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **newUserRequestDto** | [**optional.Interface of NewUserRequestDto**](NewUserRequestDto.md)| A JSON object with all data necessary to create a new user account | 

### Return type

[**UserDto**](UserDTO.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/_*+json
- **Accept**: text/plain, application/json, text/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## V1UsersPut

> DetailedUserDto V1UsersPut(ctx, optional)

Updates a user's registration details.  Note that the if the email address has changed, the account will be set to  inactive until the account is activated with the secret token.

### Required Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
 **optional** | ***V1UsersPutOpts** | optional parameters | nil if no parameters

### Optional Parameters

Optional parameters are passed through a pointer to a V1UsersPutOpts struct


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userUpdateRequestDto** | [**optional.Interface of UserUpdateRequestDto**](UserUpdateRequestDto.md)| A JSON object with all data necessary to update a user account.  Null fields (but not empty  strings!) will be populated with existing user data | 

### Return type

[**DetailedUserDto**](DetailedUserDTO.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/_*+json
- **Accept**: text/plain, application/json, text/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## V1UsersResendActivationEmailPost

> V1UsersResendActivationEmailPost(ctx, optional)

Sends a new activation email for the user's account. This will not work if the user account associated with the  email address has already been activated.

### Required Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
 **optional** | ***V1UsersResendActivationEmailPostOpts** | optional parameters | nil if no parameters

### Optional Parameters

Optional parameters are passed through a pointer to a V1UsersResendActivationEmailPostOpts struct


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resendUserAccountActivationRequestDto** | [**optional.Interface of ResendUserAccountActivationRequestDto**](ResendUserAccountActivationRequestDto.md)| JSON object with the current email address and the new desired email address | 

### Return type

 (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/_*+json
- **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

