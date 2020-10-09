# ArtefactGroupDTO

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **int32** |  | 
**Name** | **string** |  | 
**Artefacts** | **[]int32** |  | 

## Methods

### NewArtefactGroupDTO

`func NewArtefactGroupDTO(id int32, name string, artefacts []int32, ) *ArtefactGroupDTO`

NewArtefactGroupDTO instantiates a new ArtefactGroupDTO object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewArtefactGroupDTOWithDefaults

`func NewArtefactGroupDTOWithDefaults() *ArtefactGroupDTO`

NewArtefactGroupDTOWithDefaults instantiates a new ArtefactGroupDTO object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *ArtefactGroupDTO) GetId() int32`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *ArtefactGroupDTO) GetIdOk() (*int32, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *ArtefactGroupDTO) SetId(v int32)`

SetId sets Id field to given value.


### GetName

`func (o *ArtefactGroupDTO) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *ArtefactGroupDTO) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *ArtefactGroupDTO) SetName(v string)`

SetName sets Name field to given value.


### GetArtefacts

`func (o *ArtefactGroupDTO) GetArtefacts() []int32`

GetArtefacts returns the Artefacts field if non-nil, zero value otherwise.

### GetArtefactsOk

`func (o *ArtefactGroupDTO) GetArtefactsOk() (*[]int32, bool)`

GetArtefactsOk returns a tuple with the Artefacts field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetArtefacts

`func (o *ArtefactGroupDTO) SetArtefacts(v []int32)`

SetArtefacts sets Artefacts field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


