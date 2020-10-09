# DetailedUserTokenDTO

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Token** | **string** |  | 
**Forename** | Pointer to **NullableString** |  | [optional] 
**Surname** | Pointer to **NullableString** |  | [optional] 
**Organization** | Pointer to **NullableString** |  | [optional] 
**Activated** | **bool** |  | 
**UserId** | **int32** |  | 
**Email** | **string** |  | 

## Methods

### NewDetailedUserTokenDTO

`func NewDetailedUserTokenDTO(token string, activated bool, userId int32, email string, ) *DetailedUserTokenDTO`

NewDetailedUserTokenDTO instantiates a new DetailedUserTokenDTO object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewDetailedUserTokenDTOWithDefaults

`func NewDetailedUserTokenDTOWithDefaults() *DetailedUserTokenDTO`

NewDetailedUserTokenDTOWithDefaults instantiates a new DetailedUserTokenDTO object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetToken

`func (o *DetailedUserTokenDTO) GetToken() string`

GetToken returns the Token field if non-nil, zero value otherwise.

### GetTokenOk

`func (o *DetailedUserTokenDTO) GetTokenOk() (*string, bool)`

GetTokenOk returns a tuple with the Token field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetToken

`func (o *DetailedUserTokenDTO) SetToken(v string)`

SetToken sets Token field to given value.


### GetForename

`func (o *DetailedUserTokenDTO) GetForename() string`

GetForename returns the Forename field if non-nil, zero value otherwise.

### GetForenameOk

`func (o *DetailedUserTokenDTO) GetForenameOk() (*string, bool)`

GetForenameOk returns a tuple with the Forename field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetForename

`func (o *DetailedUserTokenDTO) SetForename(v string)`

SetForename sets Forename field to given value.

### HasForename

`func (o *DetailedUserTokenDTO) HasForename() bool`

HasForename returns a boolean if a field has been set.

### SetForenameNil

`func (o *DetailedUserTokenDTO) SetForenameNil(b bool)`

 SetForenameNil sets the value for Forename to be an explicit nil

### UnsetForename
`func (o *DetailedUserTokenDTO) UnsetForename()`

UnsetForename ensures that no value is present for Forename, not even an explicit nil
### GetSurname

`func (o *DetailedUserTokenDTO) GetSurname() string`

GetSurname returns the Surname field if non-nil, zero value otherwise.

### GetSurnameOk

`func (o *DetailedUserTokenDTO) GetSurnameOk() (*string, bool)`

GetSurnameOk returns a tuple with the Surname field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSurname

`func (o *DetailedUserTokenDTO) SetSurname(v string)`

SetSurname sets Surname field to given value.

### HasSurname

`func (o *DetailedUserTokenDTO) HasSurname() bool`

HasSurname returns a boolean if a field has been set.

### SetSurnameNil

`func (o *DetailedUserTokenDTO) SetSurnameNil(b bool)`

 SetSurnameNil sets the value for Surname to be an explicit nil

### UnsetSurname
`func (o *DetailedUserTokenDTO) UnsetSurname()`

UnsetSurname ensures that no value is present for Surname, not even an explicit nil
### GetOrganization

`func (o *DetailedUserTokenDTO) GetOrganization() string`

GetOrganization returns the Organization field if non-nil, zero value otherwise.

### GetOrganizationOk

`func (o *DetailedUserTokenDTO) GetOrganizationOk() (*string, bool)`

GetOrganizationOk returns a tuple with the Organization field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOrganization

`func (o *DetailedUserTokenDTO) SetOrganization(v string)`

SetOrganization sets Organization field to given value.

### HasOrganization

`func (o *DetailedUserTokenDTO) HasOrganization() bool`

HasOrganization returns a boolean if a field has been set.

### SetOrganizationNil

`func (o *DetailedUserTokenDTO) SetOrganizationNil(b bool)`

 SetOrganizationNil sets the value for Organization to be an explicit nil

### UnsetOrganization
`func (o *DetailedUserTokenDTO) UnsetOrganization()`

UnsetOrganization ensures that no value is present for Organization, not even an explicit nil
### GetActivated

`func (o *DetailedUserTokenDTO) GetActivated() bool`

GetActivated returns the Activated field if non-nil, zero value otherwise.

### GetActivatedOk

`func (o *DetailedUserTokenDTO) GetActivatedOk() (*bool, bool)`

GetActivatedOk returns a tuple with the Activated field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActivated

`func (o *DetailedUserTokenDTO) SetActivated(v bool)`

SetActivated sets Activated field to given value.


### GetUserId

`func (o *DetailedUserTokenDTO) GetUserId() int32`

GetUserId returns the UserId field if non-nil, zero value otherwise.

### GetUserIdOk

`func (o *DetailedUserTokenDTO) GetUserIdOk() (*int32, bool)`

GetUserIdOk returns a tuple with the UserId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUserId

`func (o *DetailedUserTokenDTO) SetUserId(v int32)`

SetUserId sets UserId field to given value.


### GetEmail

`func (o *DetailedUserTokenDTO) GetEmail() string`

GetEmail returns the Email field if non-nil, zero value otherwise.

### GetEmailOk

`func (o *DetailedUserTokenDTO) GetEmailOk() (*string, bool)`

GetEmailOk returns a tuple with the Email field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEmail

`func (o *DetailedUserTokenDTO) SetEmail(v string)`

SetEmail sets Email field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


