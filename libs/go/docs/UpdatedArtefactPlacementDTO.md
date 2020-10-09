# UpdatedArtefactPlacementDTO

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**PlacementEditorId** | **int32** |  | 
**ArtefactId** | **int32** |  | 
**IsPlaced** | **bool** |  | 
**Placement** | Pointer to [**NullablePlacementDTO**](PlacementDTO.md) |  | [optional] 

## Methods

### NewUpdatedArtefactPlacementDTO

`func NewUpdatedArtefactPlacementDTO(placementEditorId int32, artefactId int32, isPlaced bool, ) *UpdatedArtefactPlacementDTO`

NewUpdatedArtefactPlacementDTO instantiates a new UpdatedArtefactPlacementDTO object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewUpdatedArtefactPlacementDTOWithDefaults

`func NewUpdatedArtefactPlacementDTOWithDefaults() *UpdatedArtefactPlacementDTO`

NewUpdatedArtefactPlacementDTOWithDefaults instantiates a new UpdatedArtefactPlacementDTO object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetPlacementEditorId

`func (o *UpdatedArtefactPlacementDTO) GetPlacementEditorId() int32`

GetPlacementEditorId returns the PlacementEditorId field if non-nil, zero value otherwise.

### GetPlacementEditorIdOk

`func (o *UpdatedArtefactPlacementDTO) GetPlacementEditorIdOk() (*int32, bool)`

GetPlacementEditorIdOk returns a tuple with the PlacementEditorId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPlacementEditorId

`func (o *UpdatedArtefactPlacementDTO) SetPlacementEditorId(v int32)`

SetPlacementEditorId sets PlacementEditorId field to given value.


### GetArtefactId

`func (o *UpdatedArtefactPlacementDTO) GetArtefactId() int32`

GetArtefactId returns the ArtefactId field if non-nil, zero value otherwise.

### GetArtefactIdOk

`func (o *UpdatedArtefactPlacementDTO) GetArtefactIdOk() (*int32, bool)`

GetArtefactIdOk returns a tuple with the ArtefactId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetArtefactId

`func (o *UpdatedArtefactPlacementDTO) SetArtefactId(v int32)`

SetArtefactId sets ArtefactId field to given value.


### GetIsPlaced

`func (o *UpdatedArtefactPlacementDTO) GetIsPlaced() bool`

GetIsPlaced returns the IsPlaced field if non-nil, zero value otherwise.

### GetIsPlacedOk

`func (o *UpdatedArtefactPlacementDTO) GetIsPlacedOk() (*bool, bool)`

GetIsPlacedOk returns a tuple with the IsPlaced field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIsPlaced

`func (o *UpdatedArtefactPlacementDTO) SetIsPlaced(v bool)`

SetIsPlaced sets IsPlaced field to given value.


### GetPlacement

`func (o *UpdatedArtefactPlacementDTO) GetPlacement() PlacementDTO`

GetPlacement returns the Placement field if non-nil, zero value otherwise.

### GetPlacementOk

`func (o *UpdatedArtefactPlacementDTO) GetPlacementOk() (*PlacementDTO, bool)`

GetPlacementOk returns a tuple with the Placement field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPlacement

`func (o *UpdatedArtefactPlacementDTO) SetPlacement(v PlacementDTO)`

SetPlacement sets Placement field to given value.

### HasPlacement

`func (o *UpdatedArtefactPlacementDTO) HasPlacement() bool`

HasPlacement returns a boolean if a field has been set.

### SetPlacementNil

`func (o *UpdatedArtefactPlacementDTO) SetPlacementNil(b bool)`

 SetPlacementNil sets the value for Placement to be an explicit nil

### UnsetPlacement
`func (o *UpdatedArtefactPlacementDTO) UnsetPlacement()`

UnsetPlacement ensures that no value is present for Placement, not even an explicit nil

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


