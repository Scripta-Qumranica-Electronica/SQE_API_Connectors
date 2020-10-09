# EditorDTO

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Email** | **string** |  | 
**Forename** | Pointer to **NullableString** |  | [optional] 
**Surname** | Pointer to **NullableString** |  | [optional] 
**Organization** | Pointer to **NullableString** |  | [optional] 

## Methods

### NewEditorDTO

`func NewEditorDTO(email string, ) *EditorDTO`

NewEditorDTO instantiates a new EditorDTO object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewEditorDTOWithDefaults

`func NewEditorDTOWithDefaults() *EditorDTO`

NewEditorDTOWithDefaults instantiates a new EditorDTO object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetEmail

`func (o *EditorDTO) GetEmail() string`

GetEmail returns the Email field if non-nil, zero value otherwise.

### GetEmailOk

`func (o *EditorDTO) GetEmailOk() (*string, bool)`

GetEmailOk returns a tuple with the Email field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEmail

`func (o *EditorDTO) SetEmail(v string)`

SetEmail sets Email field to given value.


### GetForename

`func (o *EditorDTO) GetForename() string`

GetForename returns the Forename field if non-nil, zero value otherwise.

### GetForenameOk

`func (o *EditorDTO) GetForenameOk() (*string, bool)`

GetForenameOk returns a tuple with the Forename field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetForename

`func (o *EditorDTO) SetForename(v string)`

SetForename sets Forename field to given value.

### HasForename

`func (o *EditorDTO) HasForename() bool`

HasForename returns a boolean if a field has been set.

### SetForenameNil

`func (o *EditorDTO) SetForenameNil(b bool)`

 SetForenameNil sets the value for Forename to be an explicit nil

### UnsetForename
`func (o *EditorDTO) UnsetForename()`

UnsetForename ensures that no value is present for Forename, not even an explicit nil
### GetSurname

`func (o *EditorDTO) GetSurname() string`

GetSurname returns the Surname field if non-nil, zero value otherwise.

### GetSurnameOk

`func (o *EditorDTO) GetSurnameOk() (*string, bool)`

GetSurnameOk returns a tuple with the Surname field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSurname

`func (o *EditorDTO) SetSurname(v string)`

SetSurname sets Surname field to given value.

### HasSurname

`func (o *EditorDTO) HasSurname() bool`

HasSurname returns a boolean if a field has been set.

### SetSurnameNil

`func (o *EditorDTO) SetSurnameNil(b bool)`

 SetSurnameNil sets the value for Surname to be an explicit nil

### UnsetSurname
`func (o *EditorDTO) UnsetSurname()`

UnsetSurname ensures that no value is present for Surname, not even an explicit nil
### GetOrganization

`func (o *EditorDTO) GetOrganization() string`

GetOrganization returns the Organization field if non-nil, zero value otherwise.

### GetOrganizationOk

`func (o *EditorDTO) GetOrganizationOk() (*string, bool)`

GetOrganizationOk returns a tuple with the Organization field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOrganization

`func (o *EditorDTO) SetOrganization(v string)`

SetOrganization sets Organization field to given value.

### HasOrganization

`func (o *EditorDTO) HasOrganization() bool`

HasOrganization returns a boolean if a field has been set.

### SetOrganizationNil

`func (o *EditorDTO) SetOrganizationNil(b bool)`

 SetOrganizationNil sets the value for Organization to be an explicit nil

### UnsetOrganization
`func (o *EditorDTO) UnsetOrganization()`

UnsetOrganization ensures that no value is present for Organization, not even an explicit nil

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


