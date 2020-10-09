# ArtefactDTO

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**EditionId** | **int32** |  | 
**ImagedObjectId** | **string** |  | 
**ImageId** | **int32** |  | 
**ArtefactDataEditorId** | **int32** |  | 
**Mask** | **string** |  | 
**ArtefactMaskEditorId** | **int32** |  | 
**IsPlaced** | **bool** |  | 
**Placement** | [**PlacementDTO**](PlacementDTO.md) |  | 
**ArtefactPlacementEditorId** | Pointer to **NullableInt32** |  | [optional] 
**Side** | [**SideDesignation**](SideDesignation.md) |  | 
**StatusMessage** | Pointer to **NullableString** |  | [optional] 
**Id** | **int32** |  | 
**Name** | **string** |  | 

## Methods

### NewArtefactDTO

`func NewArtefactDTO(editionId int32, imagedObjectId string, imageId int32, artefactDataEditorId int32, mask string, artefactMaskEditorId int32, isPlaced bool, placement PlacementDTO, side SideDesignation, id int32, name string, ) *ArtefactDTO`

NewArtefactDTO instantiates a new ArtefactDTO object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewArtefactDTOWithDefaults

`func NewArtefactDTOWithDefaults() *ArtefactDTO`

NewArtefactDTOWithDefaults instantiates a new ArtefactDTO object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetEditionId

`func (o *ArtefactDTO) GetEditionId() int32`

GetEditionId returns the EditionId field if non-nil, zero value otherwise.

### GetEditionIdOk

`func (o *ArtefactDTO) GetEditionIdOk() (*int32, bool)`

GetEditionIdOk returns a tuple with the EditionId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEditionId

`func (o *ArtefactDTO) SetEditionId(v int32)`

SetEditionId sets EditionId field to given value.


### GetImagedObjectId

`func (o *ArtefactDTO) GetImagedObjectId() string`

GetImagedObjectId returns the ImagedObjectId field if non-nil, zero value otherwise.

### GetImagedObjectIdOk

`func (o *ArtefactDTO) GetImagedObjectIdOk() (*string, bool)`

GetImagedObjectIdOk returns a tuple with the ImagedObjectId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetImagedObjectId

`func (o *ArtefactDTO) SetImagedObjectId(v string)`

SetImagedObjectId sets ImagedObjectId field to given value.


### GetImageId

`func (o *ArtefactDTO) GetImageId() int32`

GetImageId returns the ImageId field if non-nil, zero value otherwise.

### GetImageIdOk

`func (o *ArtefactDTO) GetImageIdOk() (*int32, bool)`

GetImageIdOk returns a tuple with the ImageId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetImageId

`func (o *ArtefactDTO) SetImageId(v int32)`

SetImageId sets ImageId field to given value.


### GetArtefactDataEditorId

`func (o *ArtefactDTO) GetArtefactDataEditorId() int32`

GetArtefactDataEditorId returns the ArtefactDataEditorId field if non-nil, zero value otherwise.

### GetArtefactDataEditorIdOk

`func (o *ArtefactDTO) GetArtefactDataEditorIdOk() (*int32, bool)`

GetArtefactDataEditorIdOk returns a tuple with the ArtefactDataEditorId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetArtefactDataEditorId

`func (o *ArtefactDTO) SetArtefactDataEditorId(v int32)`

SetArtefactDataEditorId sets ArtefactDataEditorId field to given value.


### GetMask

`func (o *ArtefactDTO) GetMask() string`

GetMask returns the Mask field if non-nil, zero value otherwise.

### GetMaskOk

`func (o *ArtefactDTO) GetMaskOk() (*string, bool)`

GetMaskOk returns a tuple with the Mask field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMask

`func (o *ArtefactDTO) SetMask(v string)`

SetMask sets Mask field to given value.


### GetArtefactMaskEditorId

`func (o *ArtefactDTO) GetArtefactMaskEditorId() int32`

GetArtefactMaskEditorId returns the ArtefactMaskEditorId field if non-nil, zero value otherwise.

### GetArtefactMaskEditorIdOk

`func (o *ArtefactDTO) GetArtefactMaskEditorIdOk() (*int32, bool)`

GetArtefactMaskEditorIdOk returns a tuple with the ArtefactMaskEditorId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetArtefactMaskEditorId

`func (o *ArtefactDTO) SetArtefactMaskEditorId(v int32)`

SetArtefactMaskEditorId sets ArtefactMaskEditorId field to given value.


### GetIsPlaced

`func (o *ArtefactDTO) GetIsPlaced() bool`

GetIsPlaced returns the IsPlaced field if non-nil, zero value otherwise.

### GetIsPlacedOk

`func (o *ArtefactDTO) GetIsPlacedOk() (*bool, bool)`

GetIsPlacedOk returns a tuple with the IsPlaced field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIsPlaced

`func (o *ArtefactDTO) SetIsPlaced(v bool)`

SetIsPlaced sets IsPlaced field to given value.


### GetPlacement

`func (o *ArtefactDTO) GetPlacement() PlacementDTO`

GetPlacement returns the Placement field if non-nil, zero value otherwise.

### GetPlacementOk

`func (o *ArtefactDTO) GetPlacementOk() (*PlacementDTO, bool)`

GetPlacementOk returns a tuple with the Placement field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPlacement

`func (o *ArtefactDTO) SetPlacement(v PlacementDTO)`

SetPlacement sets Placement field to given value.


### GetArtefactPlacementEditorId

`func (o *ArtefactDTO) GetArtefactPlacementEditorId() int32`

GetArtefactPlacementEditorId returns the ArtefactPlacementEditorId field if non-nil, zero value otherwise.

### GetArtefactPlacementEditorIdOk

`func (o *ArtefactDTO) GetArtefactPlacementEditorIdOk() (*int32, bool)`

GetArtefactPlacementEditorIdOk returns a tuple with the ArtefactPlacementEditorId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetArtefactPlacementEditorId

`func (o *ArtefactDTO) SetArtefactPlacementEditorId(v int32)`

SetArtefactPlacementEditorId sets ArtefactPlacementEditorId field to given value.

### HasArtefactPlacementEditorId

`func (o *ArtefactDTO) HasArtefactPlacementEditorId() bool`

HasArtefactPlacementEditorId returns a boolean if a field has been set.

### SetArtefactPlacementEditorIdNil

`func (o *ArtefactDTO) SetArtefactPlacementEditorIdNil(b bool)`

 SetArtefactPlacementEditorIdNil sets the value for ArtefactPlacementEditorId to be an explicit nil

### UnsetArtefactPlacementEditorId
`func (o *ArtefactDTO) UnsetArtefactPlacementEditorId()`

UnsetArtefactPlacementEditorId ensures that no value is present for ArtefactPlacementEditorId, not even an explicit nil
### GetSide

`func (o *ArtefactDTO) GetSide() SideDesignation`

GetSide returns the Side field if non-nil, zero value otherwise.

### GetSideOk

`func (o *ArtefactDTO) GetSideOk() (*SideDesignation, bool)`

GetSideOk returns a tuple with the Side field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSide

`func (o *ArtefactDTO) SetSide(v SideDesignation)`

SetSide sets Side field to given value.


### GetStatusMessage

`func (o *ArtefactDTO) GetStatusMessage() string`

GetStatusMessage returns the StatusMessage field if non-nil, zero value otherwise.

### GetStatusMessageOk

`func (o *ArtefactDTO) GetStatusMessageOk() (*string, bool)`

GetStatusMessageOk returns a tuple with the StatusMessage field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatusMessage

`func (o *ArtefactDTO) SetStatusMessage(v string)`

SetStatusMessage sets StatusMessage field to given value.

### HasStatusMessage

`func (o *ArtefactDTO) HasStatusMessage() bool`

HasStatusMessage returns a boolean if a field has been set.

### SetStatusMessageNil

`func (o *ArtefactDTO) SetStatusMessageNil(b bool)`

 SetStatusMessageNil sets the value for StatusMessage to be an explicit nil

### UnsetStatusMessage
`func (o *ArtefactDTO) UnsetStatusMessage()`

UnsetStatusMessage ensures that no value is present for StatusMessage, not even an explicit nil
### GetId

`func (o *ArtefactDTO) GetId() int32`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *ArtefactDTO) GetIdOk() (*int32, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *ArtefactDTO) SetId(v int32)`

SetId sets Id field to given value.


### GetName

`func (o *ArtefactDTO) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *ArtefactDTO) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *ArtefactDTO) SetName(v string)`

SetName sets Name field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


