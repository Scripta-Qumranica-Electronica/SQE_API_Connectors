# UserUpdateRequestDTO

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Password** | **string** |  | 
**Email** | Pointer to **NullableString** |  | [optional] 
**Organization** | Pointer to **NullableString** |  | [optional] 
**Forename** | Pointer to **NullableString** |  | [optional] 
**Surname** | Pointer to **NullableString** |  | [optional] 

## Methods

### NewUserUpdateRequestDTO

`func NewUserUpdateRequestDTO(password string, ) *UserUpdateRequestDTO`

NewUserUpdateRequestDTO instantiates a new UserUpdateRequestDTO object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewUserUpdateRequestDTOWithDefaults

`func NewUserUpdateRequestDTOWithDefaults() *UserUpdateRequestDTO`

NewUserUpdateRequestDTOWithDefaults instantiates a new UserUpdateRequestDTO object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetPassword

`func (o *UserUpdateRequestDTO) GetPassword() string`

GetPassword returns the Password field if non-nil, zero value otherwise.

### GetPasswordOk

`func (o *UserUpdateRequestDTO) GetPasswordOk() (*string, bool)`

GetPasswordOk returns a tuple with the Password field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPassword

`func (o *UserUpdateRequestDTO) SetPassword(v string)`

SetPassword sets Password field to given value.


### GetEmail

`func (o *UserUpdateRequestDTO) GetEmail() string`

GetEmail returns the Email field if non-nil, zero value otherwise.

### GetEmailOk

`func (o *UserUpdateRequestDTO) GetEmailOk() (*string, bool)`

GetEmailOk returns a tuple with the Email field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEmail

`func (o *UserUpdateRequestDTO) SetEmail(v string)`

SetEmail sets Email field to given value.

### HasEmail

`func (o *UserUpdateRequestDTO) HasEmail() bool`

HasEmail returns a boolean if a field has been set.

### SetEmailNil

`func (o *UserUpdateRequestDTO) SetEmailNil(b bool)`

 SetEmailNil sets the value for Email to be an explicit nil

### UnsetEmail
`func (o *UserUpdateRequestDTO) UnsetEmail()`

UnsetEmail ensures that no value is present for Email, not even an explicit nil
### GetOrganization

`func (o *UserUpdateRequestDTO) GetOrganization() string`

GetOrganization returns the Organization field if non-nil, zero value otherwise.

### GetOrganizationOk

`func (o *UserUpdateRequestDTO) GetOrganizationOk() (*string, bool)`

GetOrganizationOk returns a tuple with the Organization field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOrganization

`func (o *UserUpdateRequestDTO) SetOrganization(v string)`

SetOrganization sets Organization field to given value.

### HasOrganization

`func (o *UserUpdateRequestDTO) HasOrganization() bool`

HasOrganization returns a boolean if a field has been set.

### SetOrganizationNil

`func (o *UserUpdateRequestDTO) SetOrganizationNil(b bool)`

 SetOrganizationNil sets the value for Organization to be an explicit nil

### UnsetOrganization
`func (o *UserUpdateRequestDTO) UnsetOrganization()`

UnsetOrganization ensures that no value is present for Organization, not even an explicit nil
### GetForename

`func (o *UserUpdateRequestDTO) GetForename() string`

GetForename returns the Forename field if non-nil, zero value otherwise.

### GetForenameOk

`func (o *UserUpdateRequestDTO) GetForenameOk() (*string, bool)`

GetForenameOk returns a tuple with the Forename field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetForename

`func (o *UserUpdateRequestDTO) SetForename(v string)`

SetForename sets Forename field to given value.

### HasForename

`func (o *UserUpdateRequestDTO) HasForename() bool`

HasForename returns a boolean if a field has been set.

### SetForenameNil

`func (o *UserUpdateRequestDTO) SetForenameNil(b bool)`

 SetForenameNil sets the value for Forename to be an explicit nil

### UnsetForename
`func (o *UserUpdateRequestDTO) UnsetForename()`

UnsetForename ensures that no value is present for Forename, not even an explicit nil
### GetSurname

`func (o *UserUpdateRequestDTO) GetSurname() string`

GetSurname returns the Surname field if non-nil, zero value otherwise.

### GetSurnameOk

`func (o *UserUpdateRequestDTO) GetSurnameOk() (*string, bool)`

GetSurnameOk returns a tuple with the Surname field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSurname

`func (o *UserUpdateRequestDTO) SetSurname(v string)`

SetSurname sets Surname field to given value.

### HasSurname

`func (o *UserUpdateRequestDTO) HasSurname() bool`

HasSurname returns a boolean if a field has been set.

### SetSurnameNil

`func (o *UserUpdateRequestDTO) SetSurnameNil(b bool)`

 SetSurnameNil sets the value for Surname to be an explicit nil

### UnsetSurname
`func (o *UserUpdateRequestDTO) UnsetSurname()`

UnsetSurname ensures that no value is present for Surname, not even an explicit nil

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


