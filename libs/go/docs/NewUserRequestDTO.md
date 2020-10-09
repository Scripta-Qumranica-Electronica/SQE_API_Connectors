# NewUserRequestDTO

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Email** | **string** |  | 
**Password** | **string** |  | 
**Organization** | Pointer to **NullableString** |  | [optional] 
**Forename** | Pointer to **NullableString** |  | [optional] 
**Surname** | Pointer to **NullableString** |  | [optional] 

## Methods

### NewNewUserRequestDTO

`func NewNewUserRequestDTO(email string, password string, ) *NewUserRequestDTO`

NewNewUserRequestDTO instantiates a new NewUserRequestDTO object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewNewUserRequestDTOWithDefaults

`func NewNewUserRequestDTOWithDefaults() *NewUserRequestDTO`

NewNewUserRequestDTOWithDefaults instantiates a new NewUserRequestDTO object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetEmail

`func (o *NewUserRequestDTO) GetEmail() string`

GetEmail returns the Email field if non-nil, zero value otherwise.

### GetEmailOk

`func (o *NewUserRequestDTO) GetEmailOk() (*string, bool)`

GetEmailOk returns a tuple with the Email field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEmail

`func (o *NewUserRequestDTO) SetEmail(v string)`

SetEmail sets Email field to given value.


### GetPassword

`func (o *NewUserRequestDTO) GetPassword() string`

GetPassword returns the Password field if non-nil, zero value otherwise.

### GetPasswordOk

`func (o *NewUserRequestDTO) GetPasswordOk() (*string, bool)`

GetPasswordOk returns a tuple with the Password field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPassword

`func (o *NewUserRequestDTO) SetPassword(v string)`

SetPassword sets Password field to given value.


### GetOrganization

`func (o *NewUserRequestDTO) GetOrganization() string`

GetOrganization returns the Organization field if non-nil, zero value otherwise.

### GetOrganizationOk

`func (o *NewUserRequestDTO) GetOrganizationOk() (*string, bool)`

GetOrganizationOk returns a tuple with the Organization field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOrganization

`func (o *NewUserRequestDTO) SetOrganization(v string)`

SetOrganization sets Organization field to given value.

### HasOrganization

`func (o *NewUserRequestDTO) HasOrganization() bool`

HasOrganization returns a boolean if a field has been set.

### SetOrganizationNil

`func (o *NewUserRequestDTO) SetOrganizationNil(b bool)`

 SetOrganizationNil sets the value for Organization to be an explicit nil

### UnsetOrganization
`func (o *NewUserRequestDTO) UnsetOrganization()`

UnsetOrganization ensures that no value is present for Organization, not even an explicit nil
### GetForename

`func (o *NewUserRequestDTO) GetForename() string`

GetForename returns the Forename field if non-nil, zero value otherwise.

### GetForenameOk

`func (o *NewUserRequestDTO) GetForenameOk() (*string, bool)`

GetForenameOk returns a tuple with the Forename field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetForename

`func (o *NewUserRequestDTO) SetForename(v string)`

SetForename sets Forename field to given value.

### HasForename

`func (o *NewUserRequestDTO) HasForename() bool`

HasForename returns a boolean if a field has been set.

### SetForenameNil

`func (o *NewUserRequestDTO) SetForenameNil(b bool)`

 SetForenameNil sets the value for Forename to be an explicit nil

### UnsetForename
`func (o *NewUserRequestDTO) UnsetForename()`

UnsetForename ensures that no value is present for Forename, not even an explicit nil
### GetSurname

`func (o *NewUserRequestDTO) GetSurname() string`

GetSurname returns the Surname field if non-nil, zero value otherwise.

### GetSurnameOk

`func (o *NewUserRequestDTO) GetSurnameOk() (*string, bool)`

GetSurnameOk returns a tuple with the Surname field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSurname

`func (o *NewUserRequestDTO) SetSurname(v string)`

SetSurname sets Surname field to given value.

### HasSurname

`func (o *NewUserRequestDTO) HasSurname() bool`

HasSurname returns a boolean if a field has been set.

### SetSurnameNil

`func (o *NewUserRequestDTO) SetSurnameNil(b bool)`

 SetSurnameNil sets the value for Surname to be an explicit nil

### UnsetSurname
`func (o *NewUserRequestDTO) UnsetSurname()`

UnsetSurname ensures that no value is present for Surname, not even an explicit nil

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


