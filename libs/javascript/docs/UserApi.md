# QumranicaApiConnector.UserApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v1UsersChangeForgottenPasswordPost**](UserApi.md#v1UsersChangeForgottenPasswordPost) | **POST** /v1/users/change-forgotten-password | Uses the secret token from /users/forgot-password to validate a reset of the user&#39;s password
[**v1UsersChangePasswordPost**](UserApi.md#v1UsersChangePasswordPost) | **POST** /v1/users/change-password | Changes the password for the currently logged in user
[**v1UsersChangeUnactivatedEmailPost**](UserApi.md#v1UsersChangeUnactivatedEmailPost) | **POST** /v1/users/change-unactivated-email | Allows a user who has not yet activated their account to change their email address. This will not work if the user  account associated with the email address has already been activated
[**v1UsersConfirmRegistrationPost**](UserApi.md#v1UsersConfirmRegistrationPost) | **POST** /v1/users/confirm-registration | Confirms registration of new user account.
[**v1UsersForgotPasswordPost**](UserApi.md#v1UsersForgotPasswordPost) | **POST** /v1/users/forgot-password | Sends a secret token to the user&#39;s email to allow password reset.
[**v1UsersGet**](UserApi.md#v1UsersGet) | **GET** /v1/users | Provides the user details for a user with valid JWT in the Authorize header
[**v1UsersLoginPost**](UserApi.md#v1UsersLoginPost) | **POST** /v1/users/login | Provides a JWT bearer token for valid email and password
[**v1UsersPost**](UserApi.md#v1UsersPost) | **POST** /v1/users | Creates a new user with the submitted data.
[**v1UsersPut**](UserApi.md#v1UsersPut) | **PUT** /v1/users | Updates a user&#39;s registration details.  Note that the if the email address has changed, the account will be set to  inactive until the account is activated with the secret token.
[**v1UsersResendActivationEmailPost**](UserApi.md#v1UsersResendActivationEmailPost) | **POST** /v1/users/resend-activation-email | Sends a new activation email for the user&#39;s account. This will not work if the user account associated with the  email address has already been activated.



## v1UsersChangeForgottenPasswordPost

> v1UsersChangeForgottenPasswordPost(opts)

Uses the secret token from /users/forgot-password to validate a reset of the user&#39;s password

### Example

```javascript
import QumranicaApiConnector from 'qumranica_api_connector';
let defaultClient = QumranicaApiConnector.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new QumranicaApiConnector.UserApi();
let opts = {
  'resetForgottenUserPasswordRequestDTO': new QumranicaApiConnector.ResetForgottenUserPasswordRequestDTO() // ResetForgottenUserPasswordRequestDTO | A JSON object with the secret token and the new password
};
apiInstance.v1UsersChangeForgottenPasswordPost(opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resetForgottenUserPasswordRequestDTO** | [**ResetForgottenUserPasswordRequestDTO**](ResetForgottenUserPasswordRequestDTO.md)| A JSON object with the secret token and the new password | [optional] 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/_*+json
- **Accept**: Not defined


## v1UsersChangePasswordPost

> v1UsersChangePasswordPost(opts)

Changes the password for the currently logged in user

### Example

```javascript
import QumranicaApiConnector from 'qumranica_api_connector';
let defaultClient = QumranicaApiConnector.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new QumranicaApiConnector.UserApi();
let opts = {
  'resetLoggedInUserPasswordRequestDTO': new QumranicaApiConnector.ResetLoggedInUserPasswordRequestDTO() // ResetLoggedInUserPasswordRequestDTO | A JSON object with the old password and the new password
};
apiInstance.v1UsersChangePasswordPost(opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resetLoggedInUserPasswordRequestDTO** | [**ResetLoggedInUserPasswordRequestDTO**](ResetLoggedInUserPasswordRequestDTO.md)| A JSON object with the old password and the new password | [optional] 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/_*+json
- **Accept**: Not defined


## v1UsersChangeUnactivatedEmailPost

> v1UsersChangeUnactivatedEmailPost(opts)

Allows a user who has not yet activated their account to change their email address. This will not work if the user  account associated with the email address has already been activated

### Example

```javascript
import QumranicaApiConnector from 'qumranica_api_connector';
let defaultClient = QumranicaApiConnector.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new QumranicaApiConnector.UserApi();
let opts = {
  'unactivatedEmailUpdateRequestDTO': new QumranicaApiConnector.UnactivatedEmailUpdateRequestDTO() // UnactivatedEmailUpdateRequestDTO | JSON object with the current email address and the new desired email address
};
apiInstance.v1UsersChangeUnactivatedEmailPost(opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **unactivatedEmailUpdateRequestDTO** | [**UnactivatedEmailUpdateRequestDTO**](UnactivatedEmailUpdateRequestDTO.md)| JSON object with the current email address and the new desired email address | [optional] 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/_*+json
- **Accept**: Not defined


## v1UsersConfirmRegistrationPost

> v1UsersConfirmRegistrationPost(opts)

Confirms registration of new user account.

### Example

```javascript
import QumranicaApiConnector from 'qumranica_api_connector';
let defaultClient = QumranicaApiConnector.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new QumranicaApiConnector.UserApi();
let opts = {
  'accountActivationRequestDTO': new QumranicaApiConnector.AccountActivationRequestDTO() // AccountActivationRequestDTO | JSON object with token from user registration email
};
apiInstance.v1UsersConfirmRegistrationPost(opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountActivationRequestDTO** | [**AccountActivationRequestDTO**](AccountActivationRequestDTO.md)| JSON object with token from user registration email | [optional] 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/_*+json
- **Accept**: Not defined


## v1UsersForgotPasswordPost

> v1UsersForgotPasswordPost(opts)

Sends a secret token to the user&#39;s email to allow password reset.

### Example

```javascript
import QumranicaApiConnector from 'qumranica_api_connector';
let defaultClient = QumranicaApiConnector.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new QumranicaApiConnector.UserApi();
let opts = {
  'resetUserPasswordRequestDTO': new QumranicaApiConnector.ResetUserPasswordRequestDTO() // ResetUserPasswordRequestDTO | JSON object with the email address for the user who wants to reset a lost password
};
apiInstance.v1UsersForgotPasswordPost(opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resetUserPasswordRequestDTO** | [**ResetUserPasswordRequestDTO**](ResetUserPasswordRequestDTO.md)| JSON object with the email address for the user who wants to reset a lost password | [optional] 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/_*+json
- **Accept**: Not defined


## v1UsersGet

> UserDTO v1UsersGet()

Provides the user details for a user with valid JWT in the Authorize header

### Example

```javascript
import QumranicaApiConnector from 'qumranica_api_connector';
let defaultClient = QumranicaApiConnector.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new QumranicaApiConnector.UserApi();
apiInstance.v1UsersGet().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

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


## v1UsersLoginPost

> DetailedUserTokenDTO v1UsersLoginPost(opts)

Provides a JWT bearer token for valid email and password

### Example

```javascript
import QumranicaApiConnector from 'qumranica_api_connector';
let defaultClient = QumranicaApiConnector.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new QumranicaApiConnector.UserApi();
let opts = {
  'loginRequestDTO': new QumranicaApiConnector.LoginRequestDTO() // LoginRequestDTO | JSON object with an email and password parameter
};
apiInstance.v1UsersLoginPost(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **loginRequestDTO** | [**LoginRequestDTO**](LoginRequestDTO.md)| JSON object with an email and password parameter | [optional] 

### Return type

[**DetailedUserTokenDTO**](DetailedUserTokenDTO.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/_*+json
- **Accept**: text/plain, application/json, text/json


## v1UsersPost

> UserDTO v1UsersPost(opts)

Creates a new user with the submitted data.

### Example

```javascript
import QumranicaApiConnector from 'qumranica_api_connector';
let defaultClient = QumranicaApiConnector.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new QumranicaApiConnector.UserApi();
let opts = {
  'newUserRequestDTO': new QumranicaApiConnector.NewUserRequestDTO() // NewUserRequestDTO | A JSON object with all data necessary to create a new user account
};
apiInstance.v1UsersPost(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **newUserRequestDTO** | [**NewUserRequestDTO**](NewUserRequestDTO.md)| A JSON object with all data necessary to create a new user account | [optional] 

### Return type

[**UserDTO**](UserDTO.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/_*+json
- **Accept**: text/plain, application/json, text/json


## v1UsersPut

> DetailedUserDTO v1UsersPut(opts)

Updates a user&#39;s registration details.  Note that the if the email address has changed, the account will be set to  inactive until the account is activated with the secret token.

### Example

```javascript
import QumranicaApiConnector from 'qumranica_api_connector';
let defaultClient = QumranicaApiConnector.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new QumranicaApiConnector.UserApi();
let opts = {
  'userUpdateRequestDTO': new QumranicaApiConnector.UserUpdateRequestDTO() // UserUpdateRequestDTO | A JSON object with all data necessary to update a user account.  Null fields (but not empty  strings!) will be populated with existing user data
};
apiInstance.v1UsersPut(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userUpdateRequestDTO** | [**UserUpdateRequestDTO**](UserUpdateRequestDTO.md)| A JSON object with all data necessary to update a user account.  Null fields (but not empty  strings!) will be populated with existing user data | [optional] 

### Return type

[**DetailedUserDTO**](DetailedUserDTO.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/_*+json
- **Accept**: text/plain, application/json, text/json


## v1UsersResendActivationEmailPost

> v1UsersResendActivationEmailPost(opts)

Sends a new activation email for the user&#39;s account. This will not work if the user account associated with the  email address has already been activated.

### Example

```javascript
import QumranicaApiConnector from 'qumranica_api_connector';
let defaultClient = QumranicaApiConnector.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new QumranicaApiConnector.UserApi();
let opts = {
  'resendUserAccountActivationRequestDTO': new QumranicaApiConnector.ResendUserAccountActivationRequestDTO() // ResendUserAccountActivationRequestDTO | JSON object with the current email address and the new desired email address
};
apiInstance.v1UsersResendActivationEmailPost(opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resendUserAccountActivationRequestDTO** | [**ResendUserAccountActivationRequestDTO**](ResendUserAccountActivationRequestDTO.md)| JSON object with the current email address and the new desired email address | [optional] 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/_*+json
- **Accept**: Not defined

