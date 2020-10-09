# EditorInvitationDTO

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Token** | **string** |  | 
**RequestingAdminName** | **string** |  | 
**RequestingAdminEmail** | **string** |  | 
**EditionId** | **int32** |  | 
**EditionName** | **string** |  | 
**Date** | [**time.Time**](time.Time.md) |  | 
**MayLock** | **bool** |  | 
**MayRead** | **bool** |  | 
**MayWrite** | **bool** |  | 
**IsAdmin** | **bool** |  | 

## Methods

### NewEditorInvitationDTO

`func NewEditorInvitationDTO(token string, requestingAdminName string, requestingAdminEmail string, editionId int32, editionName string, date time.Time, mayLock bool, mayRead bool, mayWrite bool, isAdmin bool, ) *EditorInvitationDTO`

NewEditorInvitationDTO instantiates a new EditorInvitationDTO object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewEditorInvitationDTOWithDefaults

`func NewEditorInvitationDTOWithDefaults() *EditorInvitationDTO`

NewEditorInvitationDTOWithDefaults instantiates a new EditorInvitationDTO object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetToken

`func (o *EditorInvitationDTO) GetToken() string`

GetToken returns the Token field if non-nil, zero value otherwise.

### GetTokenOk

`func (o *EditorInvitationDTO) GetTokenOk() (*string, bool)`

GetTokenOk returns a tuple with the Token field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetToken

`func (o *EditorInvitationDTO) SetToken(v string)`

SetToken sets Token field to given value.


### GetRequestingAdminName

`func (o *EditorInvitationDTO) GetRequestingAdminName() string`

GetRequestingAdminName returns the RequestingAdminName field if non-nil, zero value otherwise.

### GetRequestingAdminNameOk

`func (o *EditorInvitationDTO) GetRequestingAdminNameOk() (*string, bool)`

GetRequestingAdminNameOk returns a tuple with the RequestingAdminName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequestingAdminName

`func (o *EditorInvitationDTO) SetRequestingAdminName(v string)`

SetRequestingAdminName sets RequestingAdminName field to given value.


### GetRequestingAdminEmail

`func (o *EditorInvitationDTO) GetRequestingAdminEmail() string`

GetRequestingAdminEmail returns the RequestingAdminEmail field if non-nil, zero value otherwise.

### GetRequestingAdminEmailOk

`func (o *EditorInvitationDTO) GetRequestingAdminEmailOk() (*string, bool)`

GetRequestingAdminEmailOk returns a tuple with the RequestingAdminEmail field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequestingAdminEmail

`func (o *EditorInvitationDTO) SetRequestingAdminEmail(v string)`

SetRequestingAdminEmail sets RequestingAdminEmail field to given value.


### GetEditionId

`func (o *EditorInvitationDTO) GetEditionId() int32`

GetEditionId returns the EditionId field if non-nil, zero value otherwise.

### GetEditionIdOk

`func (o *EditorInvitationDTO) GetEditionIdOk() (*int32, bool)`

GetEditionIdOk returns a tuple with the EditionId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEditionId

`func (o *EditorInvitationDTO) SetEditionId(v int32)`

SetEditionId sets EditionId field to given value.


### GetEditionName

`func (o *EditorInvitationDTO) GetEditionName() string`

GetEditionName returns the EditionName field if non-nil, zero value otherwise.

### GetEditionNameOk

`func (o *EditorInvitationDTO) GetEditionNameOk() (*string, bool)`

GetEditionNameOk returns a tuple with the EditionName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEditionName

`func (o *EditorInvitationDTO) SetEditionName(v string)`

SetEditionName sets EditionName field to given value.


### GetDate

`func (o *EditorInvitationDTO) GetDate() time.Time`

GetDate returns the Date field if non-nil, zero value otherwise.

### GetDateOk

`func (o *EditorInvitationDTO) GetDateOk() (*time.Time, bool)`

GetDateOk returns a tuple with the Date field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDate

`func (o *EditorInvitationDTO) SetDate(v time.Time)`

SetDate sets Date field to given value.


### GetMayLock

`func (o *EditorInvitationDTO) GetMayLock() bool`

GetMayLock returns the MayLock field if non-nil, zero value otherwise.

### GetMayLockOk

`func (o *EditorInvitationDTO) GetMayLockOk() (*bool, bool)`

GetMayLockOk returns a tuple with the MayLock field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMayLock

`func (o *EditorInvitationDTO) SetMayLock(v bool)`

SetMayLock sets MayLock field to given value.


### GetMayRead

`func (o *EditorInvitationDTO) GetMayRead() bool`

GetMayRead returns the MayRead field if non-nil, zero value otherwise.

### GetMayReadOk

`func (o *EditorInvitationDTO) GetMayReadOk() (*bool, bool)`

GetMayReadOk returns a tuple with the MayRead field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMayRead

`func (o *EditorInvitationDTO) SetMayRead(v bool)`

SetMayRead sets MayRead field to given value.


### GetMayWrite

`func (o *EditorInvitationDTO) GetMayWrite() bool`

GetMayWrite returns the MayWrite field if non-nil, zero value otherwise.

### GetMayWriteOk

`func (o *EditorInvitationDTO) GetMayWriteOk() (*bool, bool)`

GetMayWriteOk returns a tuple with the MayWrite field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMayWrite

`func (o *EditorInvitationDTO) SetMayWrite(v bool)`

SetMayWrite sets MayWrite field to given value.


### GetIsAdmin

`func (o *EditorInvitationDTO) GetIsAdmin() bool`

GetIsAdmin returns the IsAdmin field if non-nil, zero value otherwise.

### GetIsAdminOk

`func (o *EditorInvitationDTO) GetIsAdminOk() (*bool, bool)`

GetIsAdminOk returns a tuple with the IsAdmin field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIsAdmin

`func (o *EditorInvitationDTO) SetIsAdmin(v bool)`

SetIsAdmin sets IsAdmin field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


