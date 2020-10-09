# UpdateArtefactGroupDTO

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | Pointer to **NullableString** |  | [optional] 
**Artefacts** | **[]int32** |  | 

## Methods

### NewUpdateArtefactGroupDTO

`func NewUpdateArtefactGroupDTO(artefacts []int32, ) *UpdateArtefactGroupDTO`

NewUpdateArtefactGroupDTO instantiates a new UpdateArtefactGroupDTO object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewUpdateArtefactGroupDTOWithDefaults

`func NewUpdateArtefactGroupDTOWithDefaults() *UpdateArtefactGroupDTO`

NewUpdateArtefactGroupDTOWithDefaults instantiates a new UpdateArtefactGroupDTO object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *UpdateArtefactGroupDTO) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *UpdateArtefactGroupDTO) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *UpdateArtefactGroupDTO) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *UpdateArtefactGroupDTO) HasName() bool`

HasName returns a boolean if a field has been set.

### SetNameNil

`func (o *UpdateArtefactGroupDTO) SetNameNil(b bool)`

 SetNameNil sets the value for Name to be an explicit nil

### UnsetName
`func (o *UpdateArtefactGroupDTO) UnsetName()`

UnsetName ensures that no value is present for Name, not even an explicit nil
### GetArtefacts

`func (o *UpdateArtefactGroupDTO) GetArtefacts() []int32`

GetArtefacts returns the Artefacts field if non-nil, zero value otherwise.

### GetArtefactsOk

`func (o *UpdateArtefactGroupDTO) GetArtefactsOk() (*[]int32, bool)`

GetArtefactsOk returns a tuple with the Artefacts field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetArtefacts

`func (o *UpdateArtefactGroupDTO) SetArtefacts(v []int32)`

SetArtefacts sets Artefacts field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


