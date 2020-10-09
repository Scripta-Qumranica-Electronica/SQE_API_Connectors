# ResetLoggedInUserPasswordRequestDTO

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**OldPassword** | **string** |  | 
**NewPassword** | **string** |  | 

## Methods

### NewResetLoggedInUserPasswordRequestDTO

`func NewResetLoggedInUserPasswordRequestDTO(oldPassword string, newPassword string, ) *ResetLoggedInUserPasswordRequestDTO`

NewResetLoggedInUserPasswordRequestDTO instantiates a new ResetLoggedInUserPasswordRequestDTO object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewResetLoggedInUserPasswordRequestDTOWithDefaults

`func NewResetLoggedInUserPasswordRequestDTOWithDefaults() *ResetLoggedInUserPasswordRequestDTO`

NewResetLoggedInUserPasswordRequestDTOWithDefaults instantiates a new ResetLoggedInUserPasswordRequestDTO object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetOldPassword

`func (o *ResetLoggedInUserPasswordRequestDTO) GetOldPassword() string`

GetOldPassword returns the OldPassword field if non-nil, zero value otherwise.

### GetOldPasswordOk

`func (o *ResetLoggedInUserPasswordRequestDTO) GetOldPasswordOk() (*string, bool)`

GetOldPasswordOk returns a tuple with the OldPassword field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOldPassword

`func (o *ResetLoggedInUserPasswordRequestDTO) SetOldPassword(v string)`

SetOldPassword sets OldPassword field to given value.


### GetNewPassword

`func (o *ResetLoggedInUserPasswordRequestDTO) GetNewPassword() string`

GetNewPassword returns the NewPassword field if non-nil, zero value otherwise.

### GetNewPasswordOk

`func (o *ResetLoggedInUserPasswordRequestDTO) GetNewPasswordOk() (*string, bool)`

GetNewPasswordOk returns a tuple with the NewPassword field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNewPassword

`func (o *ResetLoggedInUserPasswordRequestDTO) SetNewPassword(v string)`

SetNewPassword sets NewPassword field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


