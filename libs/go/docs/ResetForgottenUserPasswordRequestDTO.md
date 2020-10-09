# ResetForgottenUserPasswordRequestDTO

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Password** | **string** |  | 
**Token** | **string** |  | 

## Methods

### NewResetForgottenUserPasswordRequestDTO

`func NewResetForgottenUserPasswordRequestDTO(password string, token string, ) *ResetForgottenUserPasswordRequestDTO`

NewResetForgottenUserPasswordRequestDTO instantiates a new ResetForgottenUserPasswordRequestDTO object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewResetForgottenUserPasswordRequestDTOWithDefaults

`func NewResetForgottenUserPasswordRequestDTOWithDefaults() *ResetForgottenUserPasswordRequestDTO`

NewResetForgottenUserPasswordRequestDTOWithDefaults instantiates a new ResetForgottenUserPasswordRequestDTO object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetPassword

`func (o *ResetForgottenUserPasswordRequestDTO) GetPassword() string`

GetPassword returns the Password field if non-nil, zero value otherwise.

### GetPasswordOk

`func (o *ResetForgottenUserPasswordRequestDTO) GetPasswordOk() (*string, bool)`

GetPasswordOk returns a tuple with the Password field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPassword

`func (o *ResetForgottenUserPasswordRequestDTO) SetPassword(v string)`

SetPassword sets Password field to given value.


### GetToken

`func (o *ResetForgottenUserPasswordRequestDTO) GetToken() string`

GetToken returns the Token field if non-nil, zero value otherwise.

### GetTokenOk

`func (o *ResetForgottenUserPasswordRequestDTO) GetTokenOk() (*string, bool)`

GetTokenOk returns a tuple with the Token field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetToken

`func (o *ResetForgottenUserPasswordRequestDTO) SetToken(v string)`

SetToken sets Token field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


