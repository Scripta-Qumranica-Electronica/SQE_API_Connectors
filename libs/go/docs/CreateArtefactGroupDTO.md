# CreateArtefactGroupDTO

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **string** |  | 
**Artefacts** | **[]int32** |  | 

## Methods

### NewCreateArtefactGroupDTO

`func NewCreateArtefactGroupDTO(name string, artefacts []int32, ) *CreateArtefactGroupDTO`

NewCreateArtefactGroupDTO instantiates a new CreateArtefactGroupDTO object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCreateArtefactGroupDTOWithDefaults

`func NewCreateArtefactGroupDTOWithDefaults() *CreateArtefactGroupDTO`

NewCreateArtefactGroupDTOWithDefaults instantiates a new CreateArtefactGroupDTO object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *CreateArtefactGroupDTO) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *CreateArtefactGroupDTO) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *CreateArtefactGroupDTO) SetName(v string)`

SetName sets Name field to given value.


### GetArtefacts

`func (o *CreateArtefactGroupDTO) GetArtefacts() []int32`

GetArtefacts returns the Artefacts field if non-nil, zero value otherwise.

### GetArtefactsOk

`func (o *CreateArtefactGroupDTO) GetArtefactsOk() (*[]int32, bool)`

GetArtefactsOk returns a tuple with the Artefacts field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetArtefacts

`func (o *CreateArtefactGroupDTO) SetArtefacts(v []int32)`

SetArtefacts sets Artefacts field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


