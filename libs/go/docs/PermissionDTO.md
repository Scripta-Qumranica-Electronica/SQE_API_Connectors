# PermissionDTO

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**MayRead** | **bool** |  | 
**MayWrite** | **bool** |  | 
**IsAdmin** | **bool** |  | 

## Methods

### NewPermissionDTO

`func NewPermissionDTO(mayRead bool, mayWrite bool, isAdmin bool, ) *PermissionDTO`

NewPermissionDTO instantiates a new PermissionDTO object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPermissionDTOWithDefaults

`func NewPermissionDTOWithDefaults() *PermissionDTO`

NewPermissionDTOWithDefaults instantiates a new PermissionDTO object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetMayRead

`func (o *PermissionDTO) GetMayRead() bool`

GetMayRead returns the MayRead field if non-nil, zero value otherwise.

### GetMayReadOk

`func (o *PermissionDTO) GetMayReadOk() (*bool, bool)`

GetMayReadOk returns a tuple with the MayRead field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMayRead

`func (o *PermissionDTO) SetMayRead(v bool)`

SetMayRead sets MayRead field to given value.


### GetMayWrite

`func (o *PermissionDTO) GetMayWrite() bool`

GetMayWrite returns the MayWrite field if non-nil, zero value otherwise.

### GetMayWriteOk

`func (o *PermissionDTO) GetMayWriteOk() (*bool, bool)`

GetMayWriteOk returns a tuple with the MayWrite field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMayWrite

`func (o *PermissionDTO) SetMayWrite(v bool)`

SetMayWrite sets MayWrite field to given value.


### GetIsAdmin

`func (o *PermissionDTO) GetIsAdmin() bool`

GetIsAdmin returns the IsAdmin field if non-nil, zero value otherwise.

### GetIsAdminOk

`func (o *PermissionDTO) GetIsAdminOk() (*bool, bool)`

GetIsAdminOk returns a tuple with the IsAdmin field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIsAdmin

`func (o *PermissionDTO) SetIsAdmin(v bool)`

SetIsAdmin sets IsAdmin field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


