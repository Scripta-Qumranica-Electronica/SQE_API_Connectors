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

> V1UsersChangeForgottenPasswordPost(ctx).ResetForgottenUserPasswordRequestDTO(resetForgottenUserPasswordRequestDTO).Execute()

Uses the secret token from /users/forgot-password to validate a reset of the user's password

### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "./openapi"
)

func main() {
    resetForgottenUserPasswordRequestDTO := openapiclient.ResetForgottenUserPasswordRequestDTO{Password: "Password_example", Token: "Token_example"} // ResetForgottenUserPasswordRequestDTO | A JSON object with the secret token and the new password (optional)

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.UserApi.V1UsersChangeForgottenPasswordPost(context.Background()).ResetForgottenUserPasswordRequestDTO(resetForgottenUserPasswordRequestDTO).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `UserApi.V1UsersChangeForgottenPasswordPost``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiV1UsersChangeForgottenPasswordPostRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resetForgottenUserPasswordRequestDTO** | [**ResetForgottenUserPasswordRequestDTO**](ResetForgottenUserPasswordRequestDTO.md) | A JSON object with the secret token and the new password | 

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

> V1UsersChangePasswordPost(ctx).ResetLoggedInUserPasswordRequestDTO(resetLoggedInUserPasswordRequestDTO).Execute()

Changes the password for the currently logged in user

### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "./openapi"
)

func main() {
    resetLoggedInUserPasswordRequestDTO := openapiclient.ResetLoggedInUserPasswordRequestDTO{OldPassword: "OldPassword_example", NewPassword: "NewPassword_example"} // ResetLoggedInUserPasswordRequestDTO | A JSON object with the old password and the new password (optional)

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.UserApi.V1UsersChangePasswordPost(context.Background()).ResetLoggedInUserPasswordRequestDTO(resetLoggedInUserPasswordRequestDTO).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `UserApi.V1UsersChangePasswordPost``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiV1UsersChangePasswordPostRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resetLoggedInUserPasswordRequestDTO** | [**ResetLoggedInUserPasswordRequestDTO**](ResetLoggedInUserPasswordRequestDTO.md) | A JSON object with the old password and the new password | 

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

> V1UsersChangeUnactivatedEmailPost(ctx).UnactivatedEmailUpdateRequestDTO(unactivatedEmailUpdateRequestDTO).Execute()

Allows a user who has not yet activated their account to change their email address. This will not work if the user  account associated with the email address has already been activated

### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "./openapi"
)

func main() {
    unactivatedEmailUpdateRequestDTO := openapiclient.UnactivatedEmailUpdateRequestDTO{NewEmail: "NewEmail_example", Email: "Email_example"} // UnactivatedEmailUpdateRequestDTO | JSON object with the current email address and the new desired email address (optional)

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.UserApi.V1UsersChangeUnactivatedEmailPost(context.Background()).UnactivatedEmailUpdateRequestDTO(unactivatedEmailUpdateRequestDTO).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `UserApi.V1UsersChangeUnactivatedEmailPost``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiV1UsersChangeUnactivatedEmailPostRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **unactivatedEmailUpdateRequestDTO** | [**UnactivatedEmailUpdateRequestDTO**](UnactivatedEmailUpdateRequestDTO.md) | JSON object with the current email address and the new desired email address | 

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

> V1UsersConfirmRegistrationPost(ctx).AccountActivationRequestDTO(accountActivationRequestDTO).Execute()

Confirms registration of new user account.

### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "./openapi"
)

func main() {
    accountActivationRequestDTO := openapiclient.AccountActivationRequestDTO{Token: "Token_example"} // AccountActivationRequestDTO | JSON object with token from user registration email (optional)

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.UserApi.V1UsersConfirmRegistrationPost(context.Background()).AccountActivationRequestDTO(accountActivationRequestDTO).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `UserApi.V1UsersConfirmRegistrationPost``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiV1UsersConfirmRegistrationPostRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountActivationRequestDTO** | [**AccountActivationRequestDTO**](AccountActivationRequestDTO.md) | JSON object with token from user registration email | 

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

> V1UsersForgotPasswordPost(ctx).ResetUserPasswordRequestDTO(resetUserPasswordRequestDTO).Execute()

Sends a secret token to the user's email to allow password reset.

### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "./openapi"
)

func main() {
    resetUserPasswordRequestDTO := openapiclient.ResetUserPasswordRequestDTO{Email: "Email_example"} // ResetUserPasswordRequestDTO | JSON object with the email address for the user who wants to reset a lost password (optional)

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.UserApi.V1UsersForgotPasswordPost(context.Background()).ResetUserPasswordRequestDTO(resetUserPasswordRequestDTO).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `UserApi.V1UsersForgotPasswordPost``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiV1UsersForgotPasswordPostRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resetUserPasswordRequestDTO** | [**ResetUserPasswordRequestDTO**](ResetUserPasswordRequestDTO.md) | JSON object with the email address for the user who wants to reset a lost password | 

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

> UserDTO V1UsersGet(ctx).Execute()

Provides the user details for a user with valid JWT in the Authorize header

### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "./openapi"
)

func main() {

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.UserApi.V1UsersGet(context.Background()).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `UserApi.V1UsersGet``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `V1UsersGet`: UserDTO
    fmt.Fprintf(os.Stdout, "Response from `UserApi.V1UsersGet`: %v\n", resp)
}
```

### Path Parameters

This endpoint does not need any parameter.

### Other Parameters

Other parameters are passed through a pointer to a apiV1UsersGetRequest struct via the builder pattern


### Return type

[**UserDTO**](UserDTO.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## V1UsersLoginPost

> DetailedUserTokenDTO V1UsersLoginPost(ctx).LoginRequestDTO(loginRequestDTO).Execute()

Provides a JWT bearer token for valid email and password

### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "./openapi"
)

func main() {
    loginRequestDTO := openapiclient.LoginRequestDTO{Email: "Email_example", Password: "Password_example"} // LoginRequestDTO | JSON object with an email and password parameter (optional)

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.UserApi.V1UsersLoginPost(context.Background()).LoginRequestDTO(loginRequestDTO).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `UserApi.V1UsersLoginPost``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `V1UsersLoginPost`: DetailedUserTokenDTO
    fmt.Fprintf(os.Stdout, "Response from `UserApi.V1UsersLoginPost`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiV1UsersLoginPostRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **loginRequestDTO** | [**LoginRequestDTO**](LoginRequestDTO.md) | JSON object with an email and password parameter | 

### Return type

[**DetailedUserTokenDTO**](DetailedUserTokenDTO.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/_*+json
- **Accept**: text/plain, application/json, text/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## V1UsersPost

> UserDTO V1UsersPost(ctx).NewUserRequestDTO(newUserRequestDTO).Execute()

Creates a new user with the submitted data.

### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "./openapi"
)

func main() {
    newUserRequestDTO := openapiclient.NewUserRequestDTO{Email: "Email_example", Password: "Password_example", Organization: "Organization_example", Forename: "Forename_example", Surname: "Surname_example"} // NewUserRequestDTO | A JSON object with all data necessary to create a new user account (optional)

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.UserApi.V1UsersPost(context.Background()).NewUserRequestDTO(newUserRequestDTO).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `UserApi.V1UsersPost``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `V1UsersPost`: UserDTO
    fmt.Fprintf(os.Stdout, "Response from `UserApi.V1UsersPost`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiV1UsersPostRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **newUserRequestDTO** | [**NewUserRequestDTO**](NewUserRequestDTO.md) | A JSON object with all data necessary to create a new user account | 

### Return type

[**UserDTO**](UserDTO.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/_*+json
- **Accept**: text/plain, application/json, text/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## V1UsersPut

> DetailedUserDTO V1UsersPut(ctx).UserUpdateRequestDTO(userUpdateRequestDTO).Execute()

Updates a user's registration details.  Note that the if the email address has changed, the account will be set to  inactive until the account is activated with the secret token.

### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "./openapi"
)

func main() {
    userUpdateRequestDTO := openapiclient.UserUpdateRequestDTO{Password: "Password_example", Email: "Email_example", Organization: "Organization_example", Forename: "Forename_example", Surname: "Surname_example"} // UserUpdateRequestDTO | A JSON object with all data necessary to update a user account.  Null fields (but not empty  strings!) will be populated with existing user data (optional)

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.UserApi.V1UsersPut(context.Background()).UserUpdateRequestDTO(userUpdateRequestDTO).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `UserApi.V1UsersPut``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `V1UsersPut`: DetailedUserDTO
    fmt.Fprintf(os.Stdout, "Response from `UserApi.V1UsersPut`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiV1UsersPutRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userUpdateRequestDTO** | [**UserUpdateRequestDTO**](UserUpdateRequestDTO.md) | A JSON object with all data necessary to update a user account.  Null fields (but not empty  strings!) will be populated with existing user data | 

### Return type

[**DetailedUserDTO**](DetailedUserDTO.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/_*+json
- **Accept**: text/plain, application/json, text/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## V1UsersResendActivationEmailPost

> V1UsersResendActivationEmailPost(ctx).ResendUserAccountActivationRequestDTO(resendUserAccountActivationRequestDTO).Execute()

Sends a new activation email for the user's account. This will not work if the user account associated with the  email address has already been activated.

### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "./openapi"
)

func main() {
    resendUserAccountActivationRequestDTO := openapiclient.ResendUserAccountActivationRequestDTO{Email: "Email_example"} // ResendUserAccountActivationRequestDTO | JSON object with the current email address and the new desired email address (optional)

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.UserApi.V1UsersResendActivationEmailPost(context.Background()).ResendUserAccountActivationRequestDTO(resendUserAccountActivationRequestDTO).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `UserApi.V1UsersResendActivationEmailPost``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiV1UsersResendActivationEmailPostRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resendUserAccountActivationRequestDTO** | [**ResendUserAccountActivationRequestDTO**](ResendUserAccountActivationRequestDTO.md) | JSON object with the current email address and the new desired email address | 

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

