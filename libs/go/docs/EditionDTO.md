# EditionDTO

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **int32** |  | 
**Name** | **string** |  | 
**EditionDataEditorId** | **int32** |  | 
**Permission** | [**PermissionDTO**](PermissionDTO.md) |  | 
**Owner** | [**UserDTO**](UserDTO.md) |  | 
**ThumbnailUrl** | Pointer to **NullableString** |  | [optional] 
**Shares** | [**[]DetailedEditorRightsDTO**](DetailedEditorRightsDTO.md) |  | 
**Metrics** | [**EditionManuscriptMetricsDTO**](EditionManuscriptMetricsDTO.md) |  | 
**Locked** | **bool** |  | 
**IsPublic** | **bool** |  | 
**LastEdit** | Pointer to [**NullableTime**](time.Time.md) |  | [optional] 
**Copyright** | **string** |  | 

## Methods

### NewEditionDTO

`func NewEditionDTO(id int32, name string, editionDataEditorId int32, permission PermissionDTO, owner UserDTO, shares []DetailedEditorRightsDTO, metrics EditionManuscriptMetricsDTO, locked bool, isPublic bool, copyright string, ) *EditionDTO`

NewEditionDTO instantiates a new EditionDTO object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewEditionDTOWithDefaults

`func NewEditionDTOWithDefaults() *EditionDTO`

NewEditionDTOWithDefaults instantiates a new EditionDTO object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *EditionDTO) GetId() int32`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *EditionDTO) GetIdOk() (*int32, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *EditionDTO) SetId(v int32)`

SetId sets Id field to given value.


### GetName

`func (o *EditionDTO) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *EditionDTO) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *EditionDTO) SetName(v string)`

SetName sets Name field to given value.


### GetEditionDataEditorId

`func (o *EditionDTO) GetEditionDataEditorId() int32`

GetEditionDataEditorId returns the EditionDataEditorId field if non-nil, zero value otherwise.

### GetEditionDataEditorIdOk

`func (o *EditionDTO) GetEditionDataEditorIdOk() (*int32, bool)`

GetEditionDataEditorIdOk returns a tuple with the EditionDataEditorId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEditionDataEditorId

`func (o *EditionDTO) SetEditionDataEditorId(v int32)`

SetEditionDataEditorId sets EditionDataEditorId field to given value.


### GetPermission

`func (o *EditionDTO) GetPermission() PermissionDTO`

GetPermission returns the Permission field if non-nil, zero value otherwise.

### GetPermissionOk

`func (o *EditionDTO) GetPermissionOk() (*PermissionDTO, bool)`

GetPermissionOk returns a tuple with the Permission field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPermission

`func (o *EditionDTO) SetPermission(v PermissionDTO)`

SetPermission sets Permission field to given value.


### GetOwner

`func (o *EditionDTO) GetOwner() UserDTO`

GetOwner returns the Owner field if non-nil, zero value otherwise.

### GetOwnerOk

`func (o *EditionDTO) GetOwnerOk() (*UserDTO, bool)`

GetOwnerOk returns a tuple with the Owner field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOwner

`func (o *EditionDTO) SetOwner(v UserDTO)`

SetOwner sets Owner field to given value.


### GetThumbnailUrl

`func (o *EditionDTO) GetThumbnailUrl() string`

GetThumbnailUrl returns the ThumbnailUrl field if non-nil, zero value otherwise.

### GetThumbnailUrlOk

`func (o *EditionDTO) GetThumbnailUrlOk() (*string, bool)`

GetThumbnailUrlOk returns a tuple with the ThumbnailUrl field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetThumbnailUrl

`func (o *EditionDTO) SetThumbnailUrl(v string)`

SetThumbnailUrl sets ThumbnailUrl field to given value.

### HasThumbnailUrl

`func (o *EditionDTO) HasThumbnailUrl() bool`

HasThumbnailUrl returns a boolean if a field has been set.

### SetThumbnailUrlNil

`func (o *EditionDTO) SetThumbnailUrlNil(b bool)`

 SetThumbnailUrlNil sets the value for ThumbnailUrl to be an explicit nil

### UnsetThumbnailUrl
`func (o *EditionDTO) UnsetThumbnailUrl()`

UnsetThumbnailUrl ensures that no value is present for ThumbnailUrl, not even an explicit nil
### GetShares

`func (o *EditionDTO) GetShares() []DetailedEditorRightsDTO`

GetShares returns the Shares field if non-nil, zero value otherwise.

### GetSharesOk

`func (o *EditionDTO) GetSharesOk() (*[]DetailedEditorRightsDTO, bool)`

GetSharesOk returns a tuple with the Shares field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetShares

`func (o *EditionDTO) SetShares(v []DetailedEditorRightsDTO)`

SetShares sets Shares field to given value.


### GetMetrics

`func (o *EditionDTO) GetMetrics() EditionManuscriptMetricsDTO`

GetMetrics returns the Metrics field if non-nil, zero value otherwise.

### GetMetricsOk

`func (o *EditionDTO) GetMetricsOk() (*EditionManuscriptMetricsDTO, bool)`

GetMetricsOk returns a tuple with the Metrics field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMetrics

`func (o *EditionDTO) SetMetrics(v EditionManuscriptMetricsDTO)`

SetMetrics sets Metrics field to given value.


### GetLocked

`func (o *EditionDTO) GetLocked() bool`

GetLocked returns the Locked field if non-nil, zero value otherwise.

### GetLockedOk

`func (o *EditionDTO) GetLockedOk() (*bool, bool)`

GetLockedOk returns a tuple with the Locked field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLocked

`func (o *EditionDTO) SetLocked(v bool)`

SetLocked sets Locked field to given value.


### GetIsPublic

`func (o *EditionDTO) GetIsPublic() bool`

GetIsPublic returns the IsPublic field if non-nil, zero value otherwise.

### GetIsPublicOk

`func (o *EditionDTO) GetIsPublicOk() (*bool, bool)`

GetIsPublicOk returns a tuple with the IsPublic field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIsPublic

`func (o *EditionDTO) SetIsPublic(v bool)`

SetIsPublic sets IsPublic field to given value.


### GetLastEdit

`func (o *EditionDTO) GetLastEdit() time.Time`

GetLastEdit returns the LastEdit field if non-nil, zero value otherwise.

### GetLastEditOk

`func (o *EditionDTO) GetLastEditOk() (*time.Time, bool)`

GetLastEditOk returns a tuple with the LastEdit field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastEdit

`func (o *EditionDTO) SetLastEdit(v time.Time)`

SetLastEdit sets LastEdit field to given value.

### HasLastEdit

`func (o *EditionDTO) HasLastEdit() bool`

HasLastEdit returns a boolean if a field has been set.

### SetLastEditNil

`func (o *EditionDTO) SetLastEditNil(b bool)`

 SetLastEditNil sets the value for LastEdit to be an explicit nil

### UnsetLastEdit
`func (o *EditionDTO) UnsetLastEdit()`

UnsetLastEdit ensures that no value is present for LastEdit, not even an explicit nil
### GetCopyright

`func (o *EditionDTO) GetCopyright() string`

GetCopyright returns the Copyright field if non-nil, zero value otherwise.

### GetCopyrightOk

`func (o *EditionDTO) GetCopyrightOk() (*string, bool)`

GetCopyrightOk returns a tuple with the Copyright field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCopyright

`func (o *EditionDTO) SetCopyright(v string)`

SetCopyright sets Copyright field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


