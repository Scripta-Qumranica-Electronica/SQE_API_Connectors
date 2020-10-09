# CreateArtefactDTO

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**MasterImageId** | **int32** |  | 
**Mask** | **string** |  | 
**Placement** | Pointer to [**NullablePlacementDTO**](PlacementDTO.md) |  | [optional] 
**Name** | Pointer to **NullableString** |  | [optional] 
**StatusMessage** | Pointer to **NullableString** |  | [optional] 

## Methods

### NewCreateArtefactDTO

`func NewCreateArtefactDTO(masterImageId int32, mask string, ) *CreateArtefactDTO`

NewCreateArtefactDTO instantiates a new CreateArtefactDTO object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCreateArtefactDTOWithDefaults

`func NewCreateArtefactDTOWithDefaults() *CreateArtefactDTO`

NewCreateArtefactDTOWithDefaults instantiates a new CreateArtefactDTO object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetMasterImageId

`func (o *CreateArtefactDTO) GetMasterImageId() int32`

GetMasterImageId returns the MasterImageId field if non-nil, zero value otherwise.

### GetMasterImageIdOk

`func (o *CreateArtefactDTO) GetMasterImageIdOk() (*int32, bool)`

GetMasterImageIdOk returns a tuple with the MasterImageId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMasterImageId

`func (o *CreateArtefactDTO) SetMasterImageId(v int32)`

SetMasterImageId sets MasterImageId field to given value.


### GetMask

`func (o *CreateArtefactDTO) GetMask() string`

GetMask returns the Mask field if non-nil, zero value otherwise.

### GetMaskOk

`func (o *CreateArtefactDTO) GetMaskOk() (*string, bool)`

GetMaskOk returns a tuple with the Mask field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMask

`func (o *CreateArtefactDTO) SetMask(v string)`

SetMask sets Mask field to given value.


### GetPlacement

`func (o *CreateArtefactDTO) GetPlacement() PlacementDTO`

GetPlacement returns the Placement field if non-nil, zero value otherwise.

### GetPlacementOk

`func (o *CreateArtefactDTO) GetPlacementOk() (*PlacementDTO, bool)`

GetPlacementOk returns a tuple with the Placement field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPlacement

`func (o *CreateArtefactDTO) SetPlacement(v PlacementDTO)`

SetPlacement sets Placement field to given value.

### HasPlacement

`func (o *CreateArtefactDTO) HasPlacement() bool`

HasPlacement returns a boolean if a field has been set.

### SetPlacementNil

`func (o *CreateArtefactDTO) SetPlacementNil(b bool)`

 SetPlacementNil sets the value for Placement to be an explicit nil

### UnsetPlacement
`func (o *CreateArtefactDTO) UnsetPlacement()`

UnsetPlacement ensures that no value is present for Placement, not even an explicit nil
### GetName

`func (o *CreateArtefactDTO) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *CreateArtefactDTO) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *CreateArtefactDTO) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *CreateArtefactDTO) HasName() bool`

HasName returns a boolean if a field has been set.

### SetNameNil

`func (o *CreateArtefactDTO) SetNameNil(b bool)`

 SetNameNil sets the value for Name to be an explicit nil

### UnsetName
`func (o *CreateArtefactDTO) UnsetName()`

UnsetName ensures that no value is present for Name, not even an explicit nil
### GetStatusMessage

`func (o *CreateArtefactDTO) GetStatusMessage() string`

GetStatusMessage returns the StatusMessage field if non-nil, zero value otherwise.

### GetStatusMessageOk

`func (o *CreateArtefactDTO) GetStatusMessageOk() (*string, bool)`

GetStatusMessageOk returns a tuple with the StatusMessage field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatusMessage

`func (o *CreateArtefactDTO) SetStatusMessage(v string)`

SetStatusMessage sets StatusMessage field to given value.

### HasStatusMessage

`func (o *CreateArtefactDTO) HasStatusMessage() bool`

HasStatusMessage returns a boolean if a field has been set.

### SetStatusMessageNil

`func (o *CreateArtefactDTO) SetStatusMessageNil(b bool)`

 SetStatusMessageNil sets the value for StatusMessage to be an explicit nil

### UnsetStatusMessage
`func (o *CreateArtefactDTO) UnsetStatusMessage()`

UnsetStatusMessage ensures that no value is present for StatusMessage, not even an explicit nil

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


