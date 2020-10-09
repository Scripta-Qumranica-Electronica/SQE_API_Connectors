# AdminEditorRequestDTO

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**EditorName** | Pointer to **NullableString** |  | [optional] 
**EditorEmail** | **string** |  | 
**EditionId** | **int32** |  | 
**EditionName** | **string** |  | 
**Date** | [**time.Time**](time.Time.md) |  | 
**MayLock** | **bool** |  | 
**MayRead** | **bool** |  | 
**MayWrite** | **bool** |  | 
**IsAdmin** | **bool** |  | 

## Methods

### NewAdminEditorRequestDTO

`func NewAdminEditorRequestDTO(editorEmail string, editionId int32, editionName string, date time.Time, mayLock bool, mayRead bool, mayWrite bool, isAdmin bool, ) *AdminEditorRequestDTO`

NewAdminEditorRequestDTO instantiates a new AdminEditorRequestDTO object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAdminEditorRequestDTOWithDefaults

`func NewAdminEditorRequestDTOWithDefaults() *AdminEditorRequestDTO`

NewAdminEditorRequestDTOWithDefaults instantiates a new AdminEditorRequestDTO object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetEditorName

`func (o *AdminEditorRequestDTO) GetEditorName() string`

GetEditorName returns the EditorName field if non-nil, zero value otherwise.

### GetEditorNameOk

`func (o *AdminEditorRequestDTO) GetEditorNameOk() (*string, bool)`

GetEditorNameOk returns a tuple with the EditorName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEditorName

`func (o *AdminEditorRequestDTO) SetEditorName(v string)`

SetEditorName sets EditorName field to given value.

### HasEditorName

`func (o *AdminEditorRequestDTO) HasEditorName() bool`

HasEditorName returns a boolean if a field has been set.

### SetEditorNameNil

`func (o *AdminEditorRequestDTO) SetEditorNameNil(b bool)`

 SetEditorNameNil sets the value for EditorName to be an explicit nil

### UnsetEditorName
`func (o *AdminEditorRequestDTO) UnsetEditorName()`

UnsetEditorName ensures that no value is present for EditorName, not even an explicit nil
### GetEditorEmail

`func (o *AdminEditorRequestDTO) GetEditorEmail() string`

GetEditorEmail returns the EditorEmail field if non-nil, zero value otherwise.

### GetEditorEmailOk

`func (o *AdminEditorRequestDTO) GetEditorEmailOk() (*string, bool)`

GetEditorEmailOk returns a tuple with the EditorEmail field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEditorEmail

`func (o *AdminEditorRequestDTO) SetEditorEmail(v string)`

SetEditorEmail sets EditorEmail field to given value.


### GetEditionId

`func (o *AdminEditorRequestDTO) GetEditionId() int32`

GetEditionId returns the EditionId field if non-nil, zero value otherwise.

### GetEditionIdOk

`func (o *AdminEditorRequestDTO) GetEditionIdOk() (*int32, bool)`

GetEditionIdOk returns a tuple with the EditionId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEditionId

`func (o *AdminEditorRequestDTO) SetEditionId(v int32)`

SetEditionId sets EditionId field to given value.


### GetEditionName

`func (o *AdminEditorRequestDTO) GetEditionName() string`

GetEditionName returns the EditionName field if non-nil, zero value otherwise.

### GetEditionNameOk

`func (o *AdminEditorRequestDTO) GetEditionNameOk() (*string, bool)`

GetEditionNameOk returns a tuple with the EditionName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEditionName

`func (o *AdminEditorRequestDTO) SetEditionName(v string)`

SetEditionName sets EditionName field to given value.


### GetDate

`func (o *AdminEditorRequestDTO) GetDate() time.Time`

GetDate returns the Date field if non-nil, zero value otherwise.

### GetDateOk

`func (o *AdminEditorRequestDTO) GetDateOk() (*time.Time, bool)`

GetDateOk returns a tuple with the Date field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDate

`func (o *AdminEditorRequestDTO) SetDate(v time.Time)`

SetDate sets Date field to given value.


### GetMayLock

`func (o *AdminEditorRequestDTO) GetMayLock() bool`

GetMayLock returns the MayLock field if non-nil, zero value otherwise.

### GetMayLockOk

`func (o *AdminEditorRequestDTO) GetMayLockOk() (*bool, bool)`

GetMayLockOk returns a tuple with the MayLock field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMayLock

`func (o *AdminEditorRequestDTO) SetMayLock(v bool)`

SetMayLock sets MayLock field to given value.


### GetMayRead

`func (o *AdminEditorRequestDTO) GetMayRead() bool`

GetMayRead returns the MayRead field if non-nil, zero value otherwise.

### GetMayReadOk

`func (o *AdminEditorRequestDTO) GetMayReadOk() (*bool, bool)`

GetMayReadOk returns a tuple with the MayRead field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMayRead

`func (o *AdminEditorRequestDTO) SetMayRead(v bool)`

SetMayRead sets MayRead field to given value.


### GetMayWrite

`func (o *AdminEditorRequestDTO) GetMayWrite() bool`

GetMayWrite returns the MayWrite field if non-nil, zero value otherwise.

### GetMayWriteOk

`func (o *AdminEditorRequestDTO) GetMayWriteOk() (*bool, bool)`

GetMayWriteOk returns a tuple with the MayWrite field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMayWrite

`func (o *AdminEditorRequestDTO) SetMayWrite(v bool)`

SetMayWrite sets MayWrite field to given value.


### GetIsAdmin

`func (o *AdminEditorRequestDTO) GetIsAdmin() bool`

GetIsAdmin returns the IsAdmin field if non-nil, zero value otherwise.

### GetIsAdminOk

`func (o *AdminEditorRequestDTO) GetIsAdminOk() (*bool, bool)`

GetIsAdminOk returns a tuple with the IsAdmin field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIsAdmin

`func (o *AdminEditorRequestDTO) SetIsAdmin(v bool)`

SetIsAdmin sets IsAdmin field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


